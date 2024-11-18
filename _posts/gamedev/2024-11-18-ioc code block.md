---
title: IOC 归档代码段
categories: GameDev
tags:
- GameDev
---

#### VideoController

```cs
using System.IO;
using UnityEngine;
using UnityEngine.Video;

public class VideoController : MonoBehaviour
{
    private VideoPlayer _videoPlayer;
    [SerializeField] private RectTransform optionArea;
    [SerializeField] private GameObject optionButtonPrefab;
    
    private const string VideoSuffixPath = "Videos/KanColle_";
    private const string VideoFormat = ".mp4";
 
    // 静态实例，用于存储单例的引用
    private static VideoController _instance;

    // 公共访问点，提供对实例的访问
    public static VideoController Instance
    {
        get
        {
            // 如果实例还没有被创建，就在场景中查找它
            if (_instance == null)
            {
                _instance = FindObjectOfType<VideoController>();

                // 如果实例仍然是空的，尝试创建一个新的 GameObject 并附加 VideoController 脚本
                if (_instance == null)
                {
                    GameObject singletonObject = new GameObject("VideoController");
                    _instance = singletonObject.AddComponent<VideoController>();

                    // 防止场景切换时销毁实例
                    DontDestroyOnLoad(singletonObject);
                }
            }
            return _instance;
        }
    }

    // 确保在 Awake 方法中初始化实例
    private void Awake()
    {
        if (_instance == null)
        {
            _instance = this;
            DontDestroyOnLoad(gameObject); // 保持实例在场景切换时不被销毁
        }
        else if (_instance != this)
        {
            Destroy(gameObject); // 如果已经存在另一个实例，销毁这个实例
        }
        
        // 获取子对象上的 VideoPlayer 组件
        _videoPlayer = GetComponentInChildren<VideoPlayer>();

        if (_videoPlayer == null)
        {
            Debug.LogError("VideoPlayer component not found on child object.");
            return;
        }
    }
    
    void Start()
    {
        PlayVideo(1);
    }
    
    private void OnEnable()
    {
        _videoPlayer.loopPointReached += PopulateOptions;
    }

    private void OnDisable()
    {
        _videoPlayer.loopPointReached -= PopulateOptions;
    }
    

    public void PlayVideo(int videoNumber)
    {
        // 构建视频文件的完整路径
        string playerURL = Path.Combine(Application.streamingAssetsPath, $"{VideoSuffixPath}{videoNumber}{VideoFormat}");

        // 检查路径是否为空
        if (string.IsNullOrEmpty(playerURL))
        {
            Debug.LogError("Video path is null or empty.");
            return;
        }

        // 检查视频资源是否存在
        if (!File.Exists(playerURL))
        {
            Debug.LogError($"Video file not found at path: {playerURL}");
            return;
        }

        // 加载视频资源
        _videoPlayer.url = playerURL;

        // 开始播放视频
        _videoPlayer.Play();
    }

    public void StopVideo()
    {
        if (_videoPlayer.isPlaying)
        {
            _videoPlayer.Stop();
        }
    }

    public void PauseVideo()
    {
        if (_videoPlayer.isPlaying)
        {
            _videoPlayer.Pause();
        }
    }

    public void SkipVideo()
    {
        if (_videoPlayer == null || !_videoPlayer.isPlaying)
        {
            Debug.LogWarning("VideoPlayer is not playing or not assigned.");
            return;
        }

        // 将视频播放进度设置到最后
        _videoPlayer.time = _videoPlayer.length - 0.1; // 让 loopPointReached 触发, = length无法触发
        _videoPlayer.Play();  // 确保视频播放状态更新
        
        // 可选：停止播放后立即进行其他操作
        // videoPlayer.Stop();
    }

    private void PopulateOptions(VideoPlayer source)
    {
        Debug.Log("视频播放完毕");
        
        // PlotNode currentPlotNode = PlotNodeManager.Instance.GetCurrentPlotNode();
        // foreach (OptionModel option in currentPlotNode.Options)
        // {
        //     GameObject buttonOption = Instantiate(optionButtonPrefab, optionArea);
        //     buttonOption.GetComponentInChildren<TMP_Text>().text = option.Text;
        //     // 为按钮添加点击事件监听器
        //     buttonOption.GetComponent<Button>().onClick.AddListener(() => ToPlotNode(option.NextPlotNodeNumber));
        // }       
    
    }
    
    
    // 清空选项区域中的所有按钮
    private void ClearOptions()
    {
        // 遍历父容器中的所有子对象并销毁
        foreach (Transform child in optionArea)
        {
            Destroy(child.gameObject);
        }
    }
}

```


# PLAN 系统

#### UIPlan
```cs
using System;
using System.Collections.Generic;
using System.Linq;
using Manager;
using Model;
using Prefab;
using SaveLoad;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using Utilities;

namespace UI
{
    public class UIPlan : MonoBehaviour
    {
        [SerializeField] private GameObject planUnitArea;
        [SerializeField] private GameObject planUnitComposeArea;

        private GameObject selectedButtonEmptyPlanUnit; // 可能是空的, 也可能已经有计划, 后者实现新 plan 覆盖

        // Start is called before the first frame update
        void Start()
        {
            UpdatePlanUnitArea(DataManager.Instance.NpcData.GetPlayer().PlanFocusType);
        }

        // Update is called once per frame
        void Update()
        {
        }

        private void OnEnable()
        {
            DataManager.Instance.NpcData.GetPlayer().OnPlanFocusTypeChanged += UpdatePlanUnitArea;

            PersonnelRow.OnPersonnelRowClick += HandlePersonnelRowClick;

            ClearPlanUnitComposeArea();
        }

        private void OnDisable()
        {
            DataManager.Instance.NpcData.GetPlayer().OnPlanFocusTypeChanged -= UpdatePlanUnitArea;

            PersonnelRow.OnPersonnelRowClick -= HandlePersonnelRowClick;
        }

        private void HandlePersonnelRowClick(GameObject personnelRow)
        {
            PersonnelRow script = personnelRow.GetComponent<PersonnelRow>();
        }

        /// <summary>
        /// 刷新 PlanUnitArea
        /// </summary>
        public void UpdatePlanUnitArea(PlanFocusType planFocusType)
        {
            // 清空 planComposeArea
            foreach (Transform child in planUnitComposeArea.transform)
            {
                Destroy(child.gameObject);
            }
            
            // 清空 planUnitArea
            foreach (Transform row in planUnitArea.transform)
            {
                foreach (Transform emptyUnit in row.transform)
                {
                    Destroy(emptyUnit.gameObject);
                }
            }

            // 定义每个类别的 PlanUnit 行名称和数量的映射
            var planUnitCategories = new (string rowName, PlanUnitCategory category, Func<int> getCount)[]
            {
                ("RowDiplomacy", PlanUnitCategory.Diplomacy, () => ExternalDataLoader.Instance.PlanFocusDictionary[planFocusType].CountDiplomacyUnit),
                ("RowWisdom", PlanUnitCategory.Wisdom, () => ExternalDataLoader.Instance.PlanFocusDictionary[planFocusType].CountWisdomUnit),
                ("RowIntrigue", PlanUnitCategory.Intrigue, () => ExternalDataLoader.Instance.PlanFocusDictionary[planFocusType].CountIntrigueUnit),
                ("RowManagement", PlanUnitCategory.Management, () => ExternalDataLoader.Instance.PlanFocusDictionary[planFocusType].CountManagementUnit),
                ("RowHealth", PlanUnitCategory.Health, () => ExternalDataLoader.Instance.PlanFocusDictionary[planFocusType].CountHealthUnit),
                ("RowUniversal", PlanUnitCategory.Universal, () => ExternalDataLoader.Instance.PlanFocusDictionary[planFocusType].CountUniversalUnit),
            };

            // 生成 PlanUnit
            foreach (var (rowName, category, getCount) in planUnitCategories)
            {
                Transform rowTransform = planUnitArea.transform.Find(rowName);
                for (var i = 0; i < getCount(); i++)
                {
                    GameObject emptyPlanUnit = Instantiate(PrefabManager.Instance.buttonPlanUnitPrefab, rowTransform);
                    ButtonPlanUnit buttonPlanUnitScript = emptyPlanUnit.GetComponent<ButtonPlanUnit>();
                    // PlanUnit 构建起点
                    buttonPlanUnitScript.PlanUnit = new PlanUnit
                    {
                        Actor = DataManager.Instance.NpcData.GetPlayer(),
                        PlanUnitCategory = category
                    };
                }
            }
        }

        
        private void ClearPlanUnitComposeArea()
        {
            foreach (Transform child in planUnitComposeArea.transform)
            {
                Destroy(child.gameObject);
            }
        }

        public async void OnButtonNextTurnClicked()
        {
            bool confirmToNextTurn = await GameManager.Instance.TimeManager.ToNextTurn();
            if (confirmToNextTurn)
            {
                UpdatePlanUnitArea(DataManager.Instance.NpcData.GetPlayer().PlanFocusType);
                if (UIManager.Instance.PanelStack.Peek() == UIManager.Instance.uiPlan)
                {
                    UIManager.Instance.CloseTopPanel();
                }
            }
        }

        /// <summary>
        /// Inspector binding
        /// </summary>
        public void OnPlanFocusChanged(int planFocusInt)
        {
            switch (planFocusInt)
            {
                case 0:
                {
                    DataManager.Instance.NpcData.GetPlayer().PlanFocusType = PlanFocusType.一级外交专精;
                    break;
                }
                case 1:
                {
                    DataManager.Instance.NpcData.GetPlayer().PlanFocusType = PlanFocusType.一级才学专精;
                    break;
                }
                case 2:
                {
                    DataManager.Instance.NpcData.GetPlayer().PlanFocusType = PlanFocusType.一级谋略专精;
                    break;
                }
                case 3:
                {
                    DataManager.Instance.NpcData.GetPlayer().PlanFocusType = PlanFocusType.一级经营专精;
                    break;
                }
                case 4:
                {
                    DataManager.Instance.NpcData.GetPlayer().PlanFocusType = PlanFocusType.一级体魄专精;
                    break;
                }
                case 5:
                {
                    DataManager.Instance.NpcData.GetPlayer().PlanFocusType = PlanFocusType.一级全才专精;
                    break;
                }
            }
        }
    }
}
```

#### PlanFocus
```cs
namespace Model
{
    public class PlanFocus
    {
        public int CountDiplomacyUnit { get; set; } 
        public int CountWisdomUnit { get; set; } 
        public int CountIntrigueUnit { get; set; } 
        public int CountManagementUnit { get; set; } 
        public int CountHealthUnit { get; set; } 
        public int CountUniversalUnit { get; set; }

        public PlanFocus(int countDiplomacyUnit, int countWisdomUnit, int countIntrigueUnit, int countManagementUnit, int countHealthUnit, int countUniversalUnit)
        {
            CountDiplomacyUnit = countDiplomacyUnit;
            CountWisdomUnit = countWisdomUnit;
            CountIntrigueUnit = countIntrigueUnit;
            CountManagementUnit = countManagementUnit;
            CountHealthUnit = countHealthUnit;
            CountUniversalUnit = countUniversalUnit;
        }
    }
    
    /// <summary>
    /// 类似政体类型
    /// </summary>
    public enum PlanFocusType
    {
        一级外交专精,
        一级才学专精,
        一级谋略专精,
        一级经营专精,
        一级体魄专精,
        一级全才专精,
    }
    
    

}

```
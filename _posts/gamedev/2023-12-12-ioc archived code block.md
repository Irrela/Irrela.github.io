---
title: IOC
categories: GameDev
tags:
- GameDev
---


<!-- TOC -->

- [General](#general)
            - [脚本中增加子 gameObj](#脚本中增加子-gameobj)
            - [简易单例写法](#简易单例写法)
            - [动态创建GameObj的单例写法](#动态创建gameobj的单例写法)
            - [VideoController](#videocontroller)
- [PLAN 系统](#plan-系统)
            - [UIPlan](#uiplan)
            - [PlanFocus](#planfocus)

<!-- /TOC -->

# General

#### 脚本中增加子 gameObj

> 如果想增加 TMP_Text 组件, 需要 AddComponent<TextMeshProUGUI>

```cs
// 创建并添加 Content
private void DoSomething() {
    GameObject addedContent = new GameObject("Content_add");
    addedContent.transform.SetParent(_instantiatedCheckTooltip.transform);

    TMP_Text addComponentTmpText = addedContent.AddComponent<TextMeshProUGUI>();
    addComponentTmpText.font = _instantiatedCheckTooltip.transform.Find("Content").GetComponent<TMP_Text>().font;
    addComponentTmpText.fontMaterial = _instantiatedCheckTooltip.transform.Find("Content").GetComponent<TMP_Text>().fontMaterial;
    ContentSizeFitter contentSizeFitter = addComponentTmpText.AddComponent<ContentSizeFitter>();
    contentSizeFitter.horizontalFit = ContentSizeFitter.FitMode.Unconstrained;
    contentSizeFitter.verticalFit = ContentSizeFitter.FitMode.PreferredSize;
    addComponentTmpText.text = EventOption.GetCheckString();
}
```

#### 简易单例写法
```cs
    public static CameraController Instance { get; private set; }
    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
    }
```

#### 动态创建GameObj的单例写法
```cs
private static ExternalDataLoader _instance;

// 获取单例实例的静态方法
public static ExternalDataLoader Instance
{
    get
    {
        if (!_instance)
        {
            // 如果实例不存在，则查找现有的实例
            _instance = FindObjectOfType<ExternalDataLoader>();

            // 如果场景中不存在 DataLoader，则创建一个新的 GameObject 并添加 DataLoader 组件
            if (!_instance)
            {
                var singletonObject = new GameObject(nameof(ExternalDataLoader));
                _instance = singletonObject.AddComponent<ExternalDataLoader>();
            }
        }

        return _instance;
    }
}

private void Awake()
{
    // 确保只有一个实例存在
    if (!_instance)
    {
        _instance = this;
        DontDestroyOnLoad(gameObject); // 保证切换场景时不销毁该实例
    }
    else
    {
        Destroy(gameObject); // 如果已经存在实例，则销毁新的实例
    }
}
```


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
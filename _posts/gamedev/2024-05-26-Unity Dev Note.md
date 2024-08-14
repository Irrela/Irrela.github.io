---
title: Unity Dev Note
categories: GameDev
tags:
- GameDev
---

<!-- TOC -->

- [Note](#note)
    - [协程等待](#协程等待)
    - [Rect Transform 的 Pivot](#rect-transform-的-pivot)
    - [Unity 打包 可执行文件](#unity-打包-可执行文件)
    - [实现一个单例manager](#实现一个单例manager)
    - [VideoPlayer 判断当前影片播放完成的方法](#videoplayer-判断当前影片播放完成的方法)
    - [实现一个播片系统](#实现一个播片系统)
    - [Unity自动创建的Canvas对象](#unity自动创建的canvas对象)
    - [在一个obj里纵向创建button](#在一个obj里纵向创建button)
        - [Horizontal Fit 和 Vertical Fit 属性](#horizontal-fit-和-vertical-fit-属性)
    - [Prefab 初始化 UnassignedReferenceException](#prefab-初始化-unassignedreferenceexception)
    - [Awake，OnEnable，Start中应该干什么](#awakeonenablestart中应该干什么)
    - [使用委托和事件跨脚本通信](#使用委托和事件跨脚本通信)
    - [UI生效需要有EventSystem](#ui生效需要有eventsystem)
    - [TextMeshPro Text 中文乱码](#textmeshpro-text-中文乱码)
    - [Awake 和 Start](#awake-和-start)
    - [DropDown 添加 value on changed](#dropdown-添加-value-on-changed)
    - [OnEnable()](#onenable)
    - [OnValidate()](#onvalidate)
    - [assets结构](#assets结构)
    - [分辨率适配](#分辨率适配)
    - [ScrollView](#scrollview)
    - [Sprite 和 Raw Image](#sprite-和-raw-image)
    - [FigmaImporter](#figmaimporter)
    - [Couldn't find font named Montserrat](#couldnt-find-font-named-montserrat)
    - [AI策略](#ai策略)
- [UI Toolkit](#ui-toolkit)
    - [字体设置](#字体设置)

<!-- /TOC -->



# Note

## 协程等待
在 Unity 中，如果你想延迟销毁一个 GameObject，可以使用协程（Coroutine）来实现。协程允许你在一定时间后执行代码，适合用于延迟操作。以下是如何实现延迟销毁的示例：

```cs
using UnityEngine;
using System.Collections;

public class YourClass : MonoBehaviour
{
    public GameObject _instantiatedTips;

    // 示例：启动时调用
    private void Start()
    {
        // 延迟3秒后销毁
        StartCoroutine(DestroyAfterDelay(_instantiatedTips, 3f));
    }

    private IEnumerator DestroyAfterDelay(GameObject objectToDestroy, float delay)
    {
        // 等待指定的时间
        yield return new WaitForSeconds(delay);
        
        // 销毁对象
        if (objectToDestroy != null)
        {
            Destroy(objectToDestroy);
        }
    }
}
```

> IEnumerator 是 C# 中的一种接口，通常用于迭代集合中的元素，但在 Unity 中，IEnumerator 也被用来实现协程（Coroutine）。协程是一种特殊的方法，允许你在方法执行的过程中暂停，然后在下一帧或指定的时间后继续执行。

## Rect Transform 的 Pivot
Pivot 是 UI 元素的旋转和缩放中心点。

它的取值范围是 (0, 0) 到 (1, 1)，表示 RectTransform 的相对位置。

例如，如果 Pivot 是 (0.5, 0.5)，则 RectTransform 的中心点位于它的几何中心；如果 Pivot 是 (0, 0)，则 RectTransform 的左下角是它的中心点。

> 做 QTE 缩圈时 shrink circle 的 pivot 就该设为 0.5, 0.5

## Unity 打包 可执行文件
1. 打开 Build Settings
在 Unity 编辑器中，点击菜单栏的 `File -> Build Settings...` 。

2. 选择平台
在 `Build Settings` 窗口中，选择 `PC, Mac & Linux Standalone`。
确保 `Target Platform` 设置为 Windows（默认是 Windows，如果需要 Mac 或 Linux，可切换平台）。
`Architecture` 设置为 `x86_64`，以支持 64 位系统。

3. 设置场景
在 `Scenes in Build` 列表中，添加你想要包含在构建中的所有场景。你可以点击 `Add Open Scenes` 添加当前打开的场景，或者将场景文件拖入列表中。

4. Player Settings
点击 `Player Settings...` 按钮，打开 Player Settings 窗口。
在 Player Settings 中，你可以设置游戏的名称、公司名、图标、默认屏幕分辨率等。
在 Other Settings 中，可以设置渲染 API、压缩方法等高级设置。

5. 选择输出路径
在 `Build Settings` 窗口中，点击 `Build`,  然后选择输出文件夹的路径。选择一个合适的文件夹来保存打包后的文件。

6. 打包游戏
在 `Build Settings` 窗口中，点击 Build 按钮。Unity 将开始构建你的游戏，并在你指定的文件夹中生成可执行文件（.exe）以及相关的文件和数据文件夹。

7. 运行可执行文件
在打包完成后，你会在指定的输出文件夹中看到一个 .exe 文件。双击该文件即可运行你的游戏。

额外选项：
Development Build: 如果你在开发过程中需要调试信息，可以勾选 Development Build。这会生成一个带有调试信息的构建版本。
Compression Method: 在 Player Settings 中，可以选择不同的压缩方法（如 LZ4HC）来减小打包后的文件大小。


## 实现一个单例manager
```cs
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
    }
```

## VideoPlayer 判断当前影片播放完成的方法

在 Update 方法中频繁调用 IsVideoFinished 可能会导致性能问题，尤其是在视频播放过程中该方法每帧都被调用。

为了优化，可以考虑以下 `VideoPlayer.loopPointReached` 事件的实现方式:

VideoPlayer 提供了 loopPointReached 事件，当视频播放到最后时触发该事件。你可以使用这个事件来替代 Update 方法中的检测逻辑。

```cs
private void OnEnable()
{
    _videoPlayer.loopPointReached += DoSomethingWhenFinished;
}

private void OnDisable()
{
    _videoPlayer.loopPointReached -= DoSomethingWhenFinished;
}

private void DoSomethingWhenFinished(VideoPlayer source)
{
    // 影片播放完成后的回调逻辑
}

```

> 需要注意: 在使用 `VideoPlayer.loopPointReached` 事件时，如果你手动将视频的播放进度设置到最后（即 videoPlayer.time = videoPlayer.length;），这个事件可能不会被触发。这是因为 loopPointReached 事件是在视频正常播放到结尾时触发的.
> 所以要实现 SkipVideo 的话, videoPlayer.time = videoPlayer.length - 0.1 , 然后保持 videoPlayer.Play(), 让其自然触发 loopPointReached

## 实现一个播片系统

1. Controller
- Canvas 下新建 gameobj: `VideoController`
- `VideoController` 新建子对象 RawImage (UI里)  
- `VideoController` 添加组件 Video Player
- 添加脚本`VideoController.cs`

3. 创建 Render Texture:
- 在 Assets 目录中，右键点击并选择 Create -> Render Texture，创建一个新的 Render Texture: `New Render Texture`(或自行命名)。
- 设置合适的分辨率，如 1920x1080。

4. 设置组件 Video Player
- 确保组件 Video Player 的 Render Mode 是 `Render Texture`
- 组件 Video Player 的 Target Texture 选择 新建的 `New Render Texture`


5. `VideoController.cs`
- 脚本提供Inspector 属性: RawImage, 并在inspector 中绑定 `VideoController` 新建子对象 RawImage
- 在 start 中 `rawImage.texture = videoPlayer.targetTexture;`
- > 也可以不通过脚本设置, 直接将 RawImage 对象的 RawImage 组件里的TextTure 绑定 `New Render Texture`, 效果是一样的

6. 调整播片局域和大小
- 就是RawImage对象的 Rect Transform, 建议size和`New Render Texture` 的size 匹配

```cs
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Video;

public class VideoController : MonoBehaviour
{
    private VideoPlayer videoPlayer;
    public RawImage rawImage;


    private string _videoPath = "Videos/KanColle_1.mp4";
    
    void Start()
    {
        // 获取子对象上的 VideoPlayer 组件
        videoPlayer = GetComponentInChildren<VideoPlayer>();

        if (videoPlayer == null)
        {
            Debug.LogError("VideoPlayer component not found on child object.");
            return;
        }
        
        rawImage.texture = videoPlayer.targetTexture;

        PlayVideo(_videoPath);
        
    }

    public void PlayVideo(string videoPath)
    {
        // 检查路径是否为空
        if (string.IsNullOrEmpty(videoPath))
        {
            Debug.LogError("Video path is null or empty.");
            return;
        }

        // 加载视频资源
        videoPlayer.url = System.IO.Path.Combine(Application.streamingAssetsPath, videoPath);

        // 开始播放视频
        videoPlayer.Play();
    }

    public void StopVideo()
    {
        if (videoPlayer.isPlaying)
        {
            videoPlayer.Stop();
        }
    }

    public void PauseVideo()
    {
        if (videoPlayer.isPlaying)
        {
            videoPlayer.Pause();
        }
    }
}
```

## Unity自动创建的Canvas对象
Canvas组件用于渲染UI元素，无论是通过Unity的UI系统自动创建的Canvas对象，还是手动在现有对象上添加的Canvas组件，都可以实现这个目的。

当你通过Unity的UI系统创建UI元素时（例如，右键点击Hierarchy窗口，选择UI -> Button），Unity会自动创建一个Canvas对象和一个EventSystem对象（如果还没有存在）。这种方式的特点是：

1. 自动配置：
Unity自动设置了适当的属性和组件，以确保UI元素能够正常渲染和工作。
包括Canvas组件、Canvas Scaler组件和Graphic Raycaster组件。

2. 默认设置：
Canvas的Render Mode通常设置为Screen Space - Overlay。
Canvas Scaler的设置为Constant Pixel Size，这意味着UI元素的尺寸不会随屏幕分辨率变化而自动缩放。

3. 快速开始：
对于新手或快速原型设计，使用自动创建的Canvas对象是最便捷的方式，因为它已经预先配置好了大多数所需的设置。

## 在一个obj里纵向创建button

给容器obj 添加 `Vertical Layout Group` 以及 `Content Size Fitter`.
- 配置 Vertical Layout Group的 Padding 和 Spacing 属性，根据需要调整子对象的间距和容器的边距。
- 将 Horizontal Fit 和 Vertical Fit 属性设置为 Preferred Size。

### Horizontal Fit 和 Vertical Fit 属性
- Horizontal Fit: 控制UI元素在水平轴上的尺寸调整方式。
- Vertical Fit: 控制UI元素在垂直轴上的尺寸调整方式。

这两个属性都有三个选项：

- Unconstrained（不受约束）：该选项表示UI元素的尺寸不会根据内容自动调整，保持手动设置的尺寸。
- Min Size（最小尺寸）：该选项表示UI元素的尺寸会根据内容的最小尺寸进行调整。最小尺寸通常由内容（如文本、图片等）的最小尺寸决定。
- Preferred Size（优先尺寸）：该选项表示UI元素的尺寸会根据内容的优先尺寸进行调整。优先尺寸通常是内容在不被裁剪的情况下，所需的最佳尺寸。

## Prefab 初始化 UnassignedReferenceException

确认是否是在 Prefab 中的 Prefab , 可能是在hierarchy中prefab中指定了,但没有 apply all, 导致 Instantiate 用的 prefab没有指定inspector对象

## Awake，OnEnable，Start中应该干什么
- Awake 方法：用于初始化不依赖于其他对象的内容。通常在 Awake 中初始化私有字段和单例。
- OnEnable 方法：用于绑定事件或初始化依赖于其他对象的内容。
- Start 方法：用于初始化依赖于其他对象的内容。这些对象应该在 Awake 中已经被正确初始化。


## 使用委托和事件跨脚本通信
在Unity中，如果你想让一个按钮按下时触发其他脚本中的方法，使用委托和事件是一种常见且灵活的方法，允许一个对象（比如按钮）按下时触发其他对象（比如脚本）中的方法。

具体步骤如下：


1. 定义事件委托：在接收事件的脚本中定义一个委托和事件。

  ```cs
  public delegate void ButtonClickAction();
  public static event ButtonClickAction OnButtonClick;
  ```

2. 触发事件：在按钮按下时调用事件。

  ```cs
  public void OnButtonPress()
  {
      if (OnButtonClick != null)
      {
          OnButtonClick();
      }
  }
  ```

1. 订阅事件：在需要响应按钮事件的脚本中订阅事件。

  ```cs
  private void OnEnable()
  {
      OtherScript.OnButtonClick += HandleButtonClick;
  }

  private void OnDisable()
  {
      OtherScript.OnButtonClick -= HandleButtonClick;
  }

  private void HandleButtonClick()
  {
      // 处理按钮按下时的逻辑
  }
  ```


## UI生效需要有EventSystem

## TextMeshPro Text 中文乱码
[自制动态字体](https://www.cnblogs.com/anderson0/p/16130186.html)

> Atlas Resolution 选 4096 以上

## Awake 和 Start

Start在所有脚本的Awake方法之后调用，确保所有对象和脚本都已经初始化。

- Awake适用于独立的初始化，不依赖于其他对象或脚本。
- Start适用于需要依赖其他对象或脚本的初始化，因为此时其他对象和脚本已经被初始化。



## DropDown 添加 value on changed
两种方法:
1. 纯代码

```cs
using UnityEngine;
using TMPro;

public class DropdownHandler : MonoBehaviour
{
    public TMP_Dropdown videoDropdown;

    void Start()
    {
        // 注册回调函数
        videoDropdown.onValueChanged.AddListener(OnDropdownValueChanged);
    }

    // 回调函数
    void OnDropdownValueChanged(int newValue)
    {
        // newValue 是用户选择的新选项的索引
        string selectedOption = videoDropdown.options[newValue].text;
        Debug.Log("Selected Option: " + selectedOption);

        // 在这里处理选项改变后的逻辑
    }

    void OnDestroy()
    {
        // 移除回调函数以防止内存泄漏
        videoDropdown.onValueChanged.RemoveListener(OnDropdownValueChanged);
    }
}
```

lambda 写法 

```cs
using UnityEngine;
using TMPro;

public class DropdownHandler : MonoBehaviour
{
    public TMP_Dropdown videoDropdown;

    void Start()
    {
        // 使用Lambda表达式注册回调
        videoDropdown.onValueChanged.AddListener((index) =>
        {
            OnDropdownValueChanged(videoDropdown.options[index].text);
        });
    }

    // 回调函数，接受选项文本作为参数
    void OnDropdownValueChanged(string selectedOption)
    {
        Debug.Log("Selected Option: " + selectedOption);

        // 在这里处理选项改变后的逻辑
    }

    void OnDestroy()
    {
        // 移除回调函数以防止内存泄漏
        videoDropdown.onValueChanged.RemoveAllListeners();
    }
}

```

2. Inspector 注册

   1. 在Inspector中注册回调：
   - 创建一个带有int参数的回调函数。
   - 在Inspector中将这个回调函数注册到TMP_Dropdown的“On Value Changed”事件。

   2. 在回调函数中通过索引获取选项：
      使用传入的索引从TMP_Dropdown的options列表中获取相应的选项。

以下是详细步骤和代码示例：

1. 创建回调函数：

```cs
using UnityEngine;
using TMPro;

public class DropdownHandler : MonoBehaviour
{
    public TMP_Dropdown videoDropdown;

    // 回调函数，接受选项索引作为参数
    public void OnDropdownValueChanged(int index)
    {
        if (videoDropdown != null && index >= 0 && index < videoDropdown.options.Count)
        {
            string selectedOption = videoDropdown.options[index].text;
            Debug.Log("Selected Option: " + selectedOption);

            // 在这里处理选项改变后的逻辑
        }
    }
}
```
2. 在Inspector中注册回调：

- 将DropdownHandler脚本添加到一个GameObject上。
- 选择你的TMP_Dropdown组件，在Inspector中找到“On Value Changed (Int32)”事件。
- 点击“+”按钮添加一个新的事件监听器。
- 将包含回调函数的GameObject拖动到事件目标字段中。
- 从下拉菜单中选择DropdownHandler.OnDropdownValueChanged方法。



## OnEnable()

- 在脚本实例启用时调用。
- 如果对象是首次加载或从禁用状态变为启用状态时，会调用该方法。
- 常用于注册事件或重新初始化变量。

## OnValidate()



## assets结构
```txt
/Assets
  /Scripts
    /SaveLoad
      SaveLoadManager.cs    // 保存和加载管理器
      GameSave.cs           // 游戏存档类
    /Player
      PlayerData.cs         // 玩家数据类
      PlayerController.cs   // 玩家控制器
    /World
      WorldData.cs          // 游戏世界数据类
    /NPC
      NPCData.cs            // NPC数据类
    /UI
      MainMenu.cs           // 主菜单相关脚本
      SettingsMenu.cs       // 设置菜单相关脚本
    /Managers
      GameManager.cs        // 游戏管理器
    /Utilities
      // 通用工具类脚本

```

## 分辨率适配

使用Canvas Scaler：

Unity的UI系统提供了Canvas Scaler组件，用于调整UI元素在不同分辨率下的大小和比例。

- 在你的Canvas对象上添加Canvas Scaler组件。
- 设置UI Scale Mode为Scale With Screen Size。
- 设置Reference Resolution为你设计时的分辨率（例如1920x1080）。
- 设置Screen Match Mode为你想要的模式，例如Match Width Or Height。然后调整Match值来控制宽高的匹配优先级。

## ScrollView

- 脚本的content绑定ScrollView子对象content
- ScrollView 的 Scroll Rect 组件中 MovementType 选择 Clamped
- 实现拖动时，在 content 中增加 Content Size Fitter 组件并为对应滑动方向选择 Preferred Size
- 用预设的ScrollView组件，但只需要一个方向的bar时，在将另一方向bar设为none的同时，记得调整要用的bar 的 transform， 比如 vertical bar可能需要将botton或top设为0，否则会有一小部分本身用于另一方向bar的部分不可用。
- 如果在使用鼠标滑轮滚动时感觉很慢，可以通过调整 ScrollRect 的 scrollSensitivity 属性来加快滚动速度。ScrollView -> Scroll Rect 组件 -> scrollSensitivity


## Sprite 和 Raw Image

导入的png等图像，可以在图像属性里将type从default换成 sprite(2D)

## FigmaImporter 

## Couldn't find font named Montserrat

- 创建对应textmeshpro font
- 右键创建好的字体 -> create -> figmaimporter -> font links


## AI策略

高层次策略：使用规划系统或权重系统决定长期目标，如结盟、战争等。
中层次策略：使用行为树管理角色的中期任务，如完成特定任务、管理资源等。
低层次行为：使用有限状态机或决策树处理即时行为，如战斗、逃跑等。


# UI Toolkit

## 字体设置

https://www.bilibili.com/read/cv16408474/

- 选择font后将font asset 设为 none
- 进uss文件改 -unity-font-definition: resource('Fonts/GenYoMin-B SDF');

画面 · システム設定

画面モード　フルスクリーン　ウィドウ

システム演出効果

カーソル自動消去

テキスト表示速度

オートモード表示速度


ゲームを終了します。よろしいですか？

はい　いいえ

次回以降表示しない
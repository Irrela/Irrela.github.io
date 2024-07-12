---
title: Unity Dev Note
categories: GameDev
tags:
- GameDev
---
- [Note](#note)
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



# Note


#### Awake，OnEnable，Start中应该干什么
- Awake 方法：用于初始化不依赖于其他对象的内容。通常在 Awake 中初始化私有字段和单例。
- OnEnable 方法：用于绑定事件或初始化依赖于其他对象的内容。
- Start 方法：用于初始化依赖于其他对象的内容。这些对象应该在 Awake 中已经被正确初始化。


#### 使用委托和事件跨脚本通信
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

3. 订阅事件：在需要响应按钮事件的脚本中订阅事件。
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


#### UI生效需要有EventSystem

#### TextMeshPro Text 中文乱码
[自制动态字体](https://www.cnblogs.com/anderson0/p/16130186.html)

> Atlas Resolution 选 4096 以上

#### Awake 和 Start

Start在所有脚本的Awake方法之后调用，确保所有对象和脚本都已经初始化。

- Awake适用于独立的初始化，不依赖于其他对象或脚本。
- Start适用于需要依赖其他对象或脚本的初始化，因为此时其他对象和脚本已经被初始化。



#### DropDown 添加 value on changed
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



#### OnEnable()

- 在脚本实例启用时调用。
- 如果对象是首次加载或从禁用状态变为启用状态时，会调用该方法。
- 常用于注册事件或重新初始化变量。

#### OnValidate()



#### assets结构
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

#### 分辨率适配

使用Canvas Scaler：

Unity的UI系统提供了Canvas Scaler组件，用于调整UI元素在不同分辨率下的大小和比例。

- 在你的Canvas对象上添加Canvas Scaler组件。
- 设置UI Scale Mode为Scale With Screen Size。
- 设置Reference Resolution为你设计时的分辨率（例如1920x1080）。
- 设置Screen Match Mode为你想要的模式，例如Match Width Or Height。然后调整Match值来控制宽高的匹配优先级。

#### ScrollView

- 脚本的content绑定ScrollView子对象content
- ScrollView 的 Scroll Rect 组件中 MovementType 选择 Clamped
- 实现拖动时，在 content 中增加 Content Size Fitter 组件并为对应滑动方向选择 Preferred Size
- 用预设的ScrollView组件，但只需要一个方向的bar时，在将另一方向bar设为none的同时，记得调整要用的bar 的 transform， 比如 vertical bar可能需要将botton或top设为0，否则会有一小部分本身用于另一方向bar的部分不可用。
- 如果在使用鼠标滑轮滚动时感觉很慢，可以通过调整 ScrollRect 的 scrollSensitivity 属性来加快滚动速度。ScrollView -> Scroll Rect 组件 -> scrollSensitivity


#### Sprite 和 Raw Image

导入的png等图像，可以在图像属性里将type从default换成 sprite(2D)

### FigmaImporter 

#### Couldn't find font named Montserrat

- 创建对应textmeshpro font
- 右键创建好的字体 -> create -> figmaimporter -> font links


#### AI策略

高层次策略：使用规划系统或权重系统决定长期目标，如结盟、战争等。
中层次策略：使用行为树管理角色的中期任务，如完成特定任务、管理资源等。
低层次行为：使用有限状态机或决策树处理即时行为，如战斗、逃跑等。


# UI Toolkit

#### 字体设置

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
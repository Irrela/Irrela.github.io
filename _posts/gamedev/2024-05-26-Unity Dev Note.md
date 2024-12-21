---
title: Unity Dev Note
categories: GameDev
tags:
- GameDev
---

<!-- TOC -->

- [Note](#note)
    - [Dotween](#dotween)
            - [DOMoveX 和 DOAnchorPosX](#domovex-和-doanchorposx)
            - [获得动态伸长的panel的实际height](#获得动态伸长的panel的实际height)
            - [让 tooltip sorting order 高于其他 UI](#让-tooltip-sorting-order-高于其他-ui)
    - [Scroll Rect](#scroll-rect)
    - [Dropdown](#dropdown)
            - [OnValueChange 方法传递 option 的 index 作为参数](#onvaluechange-方法传递-option-的-index-作为参数)
    - [调整分辨率](#调整分辨率)
        - [1. 屏幕分辨率和窗口大小设置](#1-屏幕分辨率和窗口大小设置)
        - [2. Canvas 适配（UI）](#2-canvas-适配ui)
            - [Canvas Scaler](#canvas-scaler)
            - [Anchors 和 Pivots](#anchors-和-pivots)
        - [3. 摄像机视野调整](#3-摄像机视野调整)
            - [正交摄像机 (Orthographic Camera)](#正交摄像机-orthographic-camera)
            - [透视摄像机 (Perspective Camera)](#透视摄像机-perspective-camera)
    - [为非ui对象实现 IPointerEnterHandler 等接口](#为非ui对象实现-ipointerenterhandler-等接口)
    - [Mask 组件](#mask-组件)
        - [Mask 组件的主要功能](#mask-组件的主要功能)
        - [示例场景](#示例场景)
        - [注意事项](#注意事项)
    - [Canvas 和 Canvas Group 组件](#canvas-和-canvas-group-组件)
        - [Canvas](#canvas)
        - [Canvas Group](#canvas-group)
    - [添加 canvas 组件后 IPointerEnterHandler 等不触发](#添加-canvas-组件后-ipointerenterhandler-等不触发)
    - [UI Stack 管理（进阶）](#ui-stack-管理进阶)
    - [通过Awake绑定GameObj, 代替Inspector绑定](#通过awake绑定gameobj-代替inspector绑定)
    - [订阅event的字段最好手动初始化](#订阅event的字段最好手动初始化)
    - [关于持久化 (Serializable & SerializeField)](#关于持久化-serializable--serializefield)
    - [根据 name 在 parent 中查找 child gameObj](#根据-name-在-parent-中查找-child-gameobj)
    - [让多个 Text 组件纵向排列在一个方框obj, 并让方框obj的height动态适配](#让多个-text-组件纵向排列在一个方框obj-并让方框obj的height动态适配)
    - [调整 gameobj 的中心点](#调整-gameobj-的中心点)
    - [调整 gameobj 相对 parent位置](#调整-gameobj-相对-parent位置)
    - [判断一个 GameObject 是否处于激活状态](#判断一个-gameobject-是否处于激活状态)
    - [脚本触发方法: 比如button的onclick](#脚本触发方法-比如button的onclick)
    - [键盘输入实现事件委托](#键盘输入实现事件委托)
    - [抽象类](#抽象类)
    - [Grid Layout Group](#grid-layout-group)
    - [Horizontal/Vertical Layout Group 子对象不平分width/height](#horizontalvertical-layout-group-子对象不平分widthheight)
    - [协程等待](#协程等待)
    - [Rect Transform 的 Pivot](#rect-transform-的-pivot)
    - [Unity 打包 可执行文件](#unity-打包-可执行文件)
    - [实现一个单例manager](#实现一个单例manager)
    - [VideoPlayer 判断当前影片播放完成的方法](#videoplayer-判断当前影片播放完成的方法)
    - [实现一个播片系统](#实现一个播片系统)
    - [Unity自动创建的Canvas对象](#unity自动创建的canvas对象)
- [Layout Group](#layout-group)
    - [在一个obj里纵向创建button](#在一个obj里纵向创建button)
        - [Horizontal Fit 和 Vertical Fit 属性](#horizontal-fit-和-vertical-fit-属性)
        - [纵向伸展容器的image处理: 9-Slice（九宫格）技术](#纵向伸展容器的image处理-9-slice九宫格技术)
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

## Dotween
#### DOMoveX 和 DOAnchorPosX

DOMoveX 方法直接操作的是 Transform.position(世界坐标)，而不是 RectTransform 的 anchoredPosition 或锚点相关属性。

如果你想让 RectTransform 的位置动画符合锚点对齐逻辑，可以使用 DOAnchorPosX，它操作的是 anchoredPosition.x：

```cs
RectTransform rectTransform = transform.GetComponent<RectTransform>();
rectTransform.DOAnchorPosX(0, moveDuration)
    .SetEase(Ease.InOutQuad); // 平滑动画
```

> 确保目标组件是 RectTransform

#### 获得动态伸长的panel的实际height

1. 把需要实际height的操作都放进协程

```cs
IEnumerator GetContainerHeightAfterLayoutUpdate()
{
    // 强制刷新布局
    LayoutRebuilder.ForceRebuildLayoutImmediate(tipsRectTransform);

    // 等待一帧，确保布局计算已完成
    yield return null;
    
    // 获取更新后的高度
    Debug.Log($"Container Height: {tipsRectTransform.rect.height}");
    
    // 调整 tooltip 的位置 (选项右方)
    RectTransform buttonRectTransform = GetComponent<RectTransform>();
    if (tipsRectTransform != null && buttonRectTransform != null)
    {
        Vector3[] buttonCorners = new Vector3[4];
        buttonRectTransform.GetWorldCorners(buttonCorners);

        Vector3 buttonTopRight = buttonCorners[2]; // 获取按钮的右上角位置
        // tipsRectTransform.position = buttonTopRight + new Vector3(_offset.x + tipsRectTransform.rect.width / 2, _offset.y - tipsRectTransform.rect.height / 2, 0);
        tipsRectTransform.position = buttonTopRight + new Vector3(_offset.x, _offset.y, 0);
    
        UIManager.Instance.AdjustTooltipPosition(tipsRectTransform, UIManager.Instance.uiRoot.GetComponent<RectTransform>());
    }
}

StartCoroutine(GetContainerHeightAfterLayoutUpdate());
```

2. 使用 Canvas.ForceUpdateCanvases()

Canvas.ForceUpdateCanvases() 是一个可以强制刷新所有 UI 组件的函数，确保布局和渲染系统被及时更新。它比 ForceRebuildLayoutImmediate 更强力一些，可以尝试在强制刷新布局后调用它：
```cs
// 强制刷新布局
LayoutRebuilder.ForceRebuildLayoutImmediate(tipsRectTransform);

// 强制刷新所有 Canvas 相关的 UI 元素
Canvas.ForceUpdateCanvases();

// 获取容器的实际高度
Debug.Log($"Container Height: {tipsRectTransform.rect.height}");

```


#### 让 tooltip sorting order 高于其他 UI

给 tooltip pf 增加 Canavas 组件, 勾选 overriding layer, 设置 Sort Order 高于其他ui所在的canvas即可.

## Scroll Rect

- 在 Scroll Rect 组件中，找到 Scroll Sensitivity 属性。提高 Scroll Sensitivity 的值以增加滚动速度，或降低该值来减慢滚动速度。

## Dropdown

- Content 和 Item 的 height 要一致
- Template 的 height 决定下拉框的高度

#### OnValueChange 方法传递 option 的 index 作为参数
Dropdown 组件有 On Value Changed 方法, 如果希望传递option的index作为参数, 在绑定方法时要选上方的 Dynamic 方法, 否则会让你自己填一个固定参数.

## 调整分辨率
### 1. 屏幕分辨率和窗口大小设置
Unity 可以通过 `Screen` 类以及项目设置中的 分辨率选项 来控制游戏窗口的分辨率和大小调整。

```cs
// 在游戏中动态设置分辨率
// width 和 height：指定屏幕的分辨率（像素）。
//fullscreenMode：可以是 true 表示全屏，false 表示窗口化模式，也可以使用 FullScreenMode 枚举来指定窗口模式，比如 FullScreenWindow、ExclusiveFullScreen
Screen.SetResolution(width, height, fullscreenMode); 

// 将分辨率设置为 1920x1080 的全屏模式：
Screen.SetResolution(1920, 1080, FullScreenMode.FullScreenWindow);

```
> 你还可以让玩家通过游戏内设置来调整分辨率和全屏模式，并保存这些设置到 PlayerPrefs 中，下次启动游戏时加载这些偏好。


监听屏幕分辨率变化

```cs
// 如果你想要在游戏运行过程中响应屏幕分辨率变化，可以使用 Screen.width 和 Screen.height 来实时获取屏幕尺寸，或者在更新循环中检测屏幕变化：
private int lastScreenWidth;
private int lastScreenHeight;

void Start()
{
    lastScreenWidth = Screen.width;
    lastScreenHeight = Screen.height;
}

void Update()
{
    if (Screen.width != lastScreenWidth || Screen.height != lastScreenHeight)
    {
        // 处理分辨率变化，例如调整UI布局
        OnScreenResolutionChanged();
        lastScreenWidth = Screen.width;
        lastScreenHeight = Screen.height;
    }
}

```

### 2. Canvas 适配（UI）

#### Canvas Scaler
Canvas 使用 `Canvas Scaler` 组件来自动处理 UI 在不同分辨率下的缩放和适应。

Canvas Scaler 有几种重要的缩放模式：
- `Constant Pixel Size`：UI 元素始终保持固定的像素大小，不受分辨率影响。这种模式适用于静态布局，但在不同屏幕分辨率下元素可能显得太大或太小。
- `Scale With Screen Size`（推荐）：这种模式会让 UI 元素根据屏幕的分辨率或尺寸比例进行缩放。你可以指定一个 参考分辨率（例如 1920x1080），然后 Unity 会根据当前屏幕分辨率自动调整 UI 的大小。

#### Anchors 和 Pivots
为了确保 UI 元素在不同分辨率和屏幕尺寸下保持正确的对齐和布局，使用 锚点（Anchors） 和 轴心点（Pivot） 是非常关键的。
- `Anchors`：锚点可以设置为相对于父对象的某个边缘，或将 UI 元素固定到某个屏幕位置。比如，将一个按钮锚定到屏幕的右下角，即使分辨率发生变化，按钮仍会保持在右下角。
- `Pivot`：Pivot 设置了 UI 元素的中心点，影响元素的旋转、缩放和位置计算。比如设置为 (0, 0) 表示元素以左下角为中心。


### 3. 摄像机视野调整
#### 正交摄像机 (Orthographic Camera)
在 2D 游戏中，通常使用正交摄像机，游戏对象会根据摄像机的 `orthographicSize` 和分辨率进行调整。
```cs
// 保持纵横比：如果你的 2D 游戏希望在不同分辨率下保持相同的可视区域，你可以调整摄像机的 orthographicSize。
Camera.main.orthographicSize = Screen.height / (2 * pixelsPerUnit);
```

#### 透视摄像机 (Perspective Camera)

在 3D 游戏中，透视摄像机会影响你看到的场景。如果屏幕分辨率发生变化，你可以通过调整摄像机的 视场角 (Field of View, FOV) 来保持适当的场景透视效果。

```cs
// 在 3D 游戏中，为了适应不同分辨率，通常要确保摄像机的纵横比（aspect ratio）与屏幕分辨率一致：
Camera.main.aspect = (float)Screen.width / Screen.height;
```

## 为非ui对象实现 IPointerEnterHandler 等接口

- 对象需要box collider（2d）组件一起使用
- camera 需要 `physics 2d raycaster`
- 需要 event System

使用 IPointerEnterHandler 而非 内置的 onMouseEnter ，是因为这样可以避免ui遮挡这些非ui对象时， 非ui对象的onMouseEnter等还是可以被触发

## Mask 组件
在 Unity 中，Mask 组件用于创建一个遮罩区域，限制其子对象的可见性。
子对象只有在 Mask 区域内时才会被显示，超出区域的部分会被遮挡。这对于创建裁剪效果、滚动视图和带有边框的 UI 元素非常有用。

### Mask 组件的主要功能
裁剪子对象：当一个 UI 对象（如 Image 或 RectTransform）上附加了 Mask 组件后，只有在其范围内的子对象才能被显示。任何超出遮罩范围的部分会被自动隐藏。

动态遮罩效果：在滚动列表（Scroll View）等场景中，Mask 可以限制子元素的显示范围，创建类似窗口或边框的效果。

可自定义形状：默认情况下，Mask 使用父对象的形状作为遮罩，但可以结合 Sprite 来自定义遮罩形状。只需将 Sprite 应用到父对象的 Image 上，Mask 会基于该 Sprite 的轮廓来遮挡。

### 示例场景
滚动视图（Scroll View）：在 Scroll View 中，Mask 用于裁剪内容，只显示滚动视口范围内的部分，隐藏超出部分。
圆形头像：使用 Mask 可以将矩形图片裁剪成圆形或其他自定义形状，适合用于头像框效果。
边框和窗口：可以将内容限制在边框范围内，使得边框外的内容不可见，适用于创建窗口、对话框等 UI 元素。

### 注意事项
Mask 只作用于其子对象。
Mask 通常与 Image 或 RectTransform 组件一起使用，用来定义遮罩的形状和大小。
若需要复杂遮罩效果，可以使用 RectMask2D 或 Shader 技术以实现更高级的遮罩。

## Canvas 和 Canvas Group 组件

在 Unity 中，Canvas 和 Canvas Group 是两个不同的组件，各自有独特的作用：

### Canvas
Canvas 是 UI 系统的核心组件之一，负责管理所有 UI 元素的绘制和呈现。所有 UI 元素（如 Image、Text、Button 等）都必须是 Canvas 的子对象，才能在屏幕上正确显示。

Canvas 的主要功能和属性包括:

1. Render Mode：控制 Canvas 的渲染模式，有三种模式：
- Screen Space - Overlay：直接将 UI 渲染到屏幕上，不受场景中的相机影响。最常用于游戏的主 UI。
- Screen Space - Camera：UI 渲染到相机前方的指定位置，使得 UI 可以与相机的视野和缩放有关联。
- World Space：Canvas 的 UI 元素作为 3D 对象在世界坐标中渲染，适用于需要与场景交互的 3D UI。

2. Graphic Raycaster：Canvas 具有的一个附加组件，用于处理 UI 的鼠标和触摸交互，使按钮、文本等 UI 元素可以接收点击和悬停事件。

3. Sorting Order：用于控制 Canvas 的渲染顺序。数值越高，Canvas 会显示在越上层的位置，适用于叠加多个 Canvas 来控制不同 UI 的显示层级。

### Canvas Group
Canvas Group 是一个用于控制其子 UI 元素的属性的组件。它提供了一种便捷的方法，可以在一个父对象上设置多个 UI 元素的透明度、交互性等属性，而不需要逐个调整每个 UI 元素。

Canvas Group 的主要功能和属性包括：

1. Alpha：控制整个组的透明度。Alpha 值从 0 到 1，0 表示完全透明，1 表示完全不透明。通常用于控制整个 UI 的淡入淡出效果。
2. Interactable：启用或禁用整个组的交互性。如果设置为 false，组内的所有按钮和可交互元素将失效。
3. Blocks Raycasts：启用或禁用该组阻挡射线投射。如果关闭，鼠标点击会穿透此组，作用类似于设置 Raycast Target，用于控制交互性。
4. Ignore Parent Groups：决定该组是否忽略父级 Canvas Group 的设置。如果勾选此项，当前 Canvas Group 不会继承父组的透明度和交互性设置。

## 添加 canvas 组件后 IPointerEnterHandler 等不触发

还需要添加 `Graphic Raycaster` 组件, `Blocking object` 选择 `Two D`

## UI Stack 管理（进阶）
在复杂的 UI 场景中，尤其是多窗口、多层级的 UI 系统，可以维护一个 UI 栈来管理窗口的显示顺序，每次打开新窗口时，将它推入栈顶，并调整其 sortingOrder。当窗口关闭时，将其从栈顶移除，并恢复下一个窗口的顺序。

```cs
public class UIManager : MonoBehaviour
{
    private Stack<Canvas> uiStack = new Stack<Canvas>();
    private int currentSortingOrder = 10;

    public void OpenPopup(Canvas popupCanvas)
    {
        currentSortingOrder++;
        popupCanvas.overrideSorting = true;
        popupCanvas.sortingOrder = currentSortingOrder;
        popupCanvas.gameObject.SetActive(true);
        uiStack.Push(popupCanvas);
    }

    public void ClosePopup()
    {
        if (uiStack.Count > 0)
        {
            Canvas topCanvas = uiStack.Pop();
            topCanvas.gameObject.SetActive(false);
            currentSortingOrder--;
        }
    }
}
```

## 通过Awake绑定GameObj, 代替Inspector绑定

> 重点是在 Awake 中绑定而非 Start

```cs
public class EventFold : MonoBehaviour
{
    // ui
    private TMP_Text tmpText;
    private Button button;
    private GameObject panelEvent;
    
    // data
    public EventModel EventModel { get; set;}

    // Start is called before the first frame update
    private void Awake()
    {
        tmpText = gameObject.GetComponentInChildren<TMP_Text>();
        button = gameObject.GetComponent<Button>();
    }
}
```


## 订阅event的字段最好手动初始化

```cs
// 以此为例子, Inventory的value变化监听需要显式地为父对象初始化Inventory才能绑定
// 即使Person类有 [SerializeField] private SerializableDictionary<ItemEnum, int> inventory = new SerializableDictionary<ItemEnum, int>();
// 但还是需要 Inventory = new SerializableDictionary<ItemEnum, int>();
public SerializableDictionary<ItemEnum, int> Inventory
{
    get => inventory;
    set
    {
        if (inventory == value) return;

        if (inventory != null)
        {
            Debug.Log($"{Name}-Unsubscribing from old inventory");
            inventory.OnValueChanged -= OnItemChanged;
        }

        inventory = value;

        if (inventory != null)
        {
            Debug.Log($"{Name}-Subscribing to new inventory");
            inventory.OnValueChanged += OnItemChanged;
        }

        OnInventoryChanged?.Invoke(inventory);
    }
}
```

## 关于持久化 (Serializable & SerializeField)
1. [Serializable] 属性
[Serializable] 是一个 C# 的属性，标记在类或结构上，告诉系统该类可以被序列化, 使类可以在 Inspector 面板中显示。这意味着它的实例可以被保存或恢复。

2. [SerializeField] 属性
作用于类的字段（field）。

默认情况下，只有 public 字段会被 Unity 序列化并显示在 Inspector 面板中，而使用 [SerializeField] 可以让 private 或 protected 字段也被序列化并显示在 Inspector 中。

```cs
[Serializable]
public class GameData
{
    public string playerName;       // 自动被序列化（public）
    [SerializeField] private int score; // 通过 SerializeField 使 private 字段也能被序列化
    
    // 非序列化字段
    [NonSerialized] public bool isAlive; // 此字段不会被序列化
}

```

## 根据 name 在 parent 中查找 child gameObj

```cs
GameObject parentObject = GameObject.Find("ParentObjectName");
Transform childTransform = parentObject.transform.Find("ChildObjectName");

if (childTransform != null)
{
    GameObject childObject = childTransform.gameObject;
    // 现在你可以对 childObject 做进一步的操作
}
else
{
    Debug.Log("未找到指定名称的子对象");
}

```

## 让多个 Text 组件纵向排列在一个方框obj, 并让方框obj的height动态适配

1. 在父对象上使用 `Vertical Layout Group`
- `Child Alignment`: 设置为 Upper Left（或其他适合的对齐方式）。
- `Child Force Expand Width`: 勾选，以便子元素占满宽度。
- `Child Force Expand Height`: 不要勾选，以确保子元素的高度随内容变化，而不是强制拉伸。

2. 在父对象上使用 `Content Size Fitter`
- 为了确保 tips prefab 的高度会根据内容变化，你需要在 Vertical Layout Group 容器上添加 `Content Size Fitter`，让其动态调整大小。
- 设置 Vertical Fit 为 Preferred Size，以让容器高度根据子元素内容动态扩展。

3. 设置Text (UI), 当出现多行时自动换行并改变自身的height, 避免在父容器中挤压重叠
- 删除手动设置的 Height 限制
- 确保 Anchors 设置为上下拉伸（Stretch），以便 RectTransform 能根据内容进行伸缩。
- 为每个 Text (UI) 组件添加 `Content Size Fitter` 组件，使得高度能够随着文本内容动态变化. `Vertical Fit` 设置为 Preferred Size，这样高度会根据文本内容自动调整。如果希望宽度不随内容变化，则 `Horizontal Fit` 设置为 Unconstrained；如果需要动态调整宽度，则可以设置为 Preferred Size。



## 调整 gameobj 的中心点

如果我想让中心点在左上角

- Anchor: 在 RectTransform 的 Anchor Presets 中选择 Top Left（通常是第一个选项，图标看起来像一个锚）。

- Pivot: 将 Pivot 设置为 (0, 1)。这意味着在 X 轴上偏移为 0（左侧），在 Y 轴上偏移为 1（顶部）。

## 调整 gameobj 相对 parent位置

比如要居中, Rect Transform 组件中选择center middle, 并保证pivot是 0.5, 0.5, 再调整posx为0, 则横向居中, posy为0则纵向居中.

## 判断一个 GameObject 是否处于激活状态

```cs
// 如果 GameObject 的 SetActive(true) 被调用，它的 activeSelf 将为 true；如果调用了 SetActive(false)，它的 activeSelf 将为 false。
if (myObject.activeSelf)

// 如果一个 GameObject 的父级或祖先被禁用，那么它的 activeInHierarchy 也会返回 false。
if (myObject.activeInHierarchy)

```

## 脚本触发方法: 比如button的onclick
```cs
myButton.onClick.Invoke();
```

## 键盘输入实现事件委托

使用 Unity 的新输入系统.

确保你的项目中安装了 Input System 包。如果没有，请打开 Window > Package Manager，搜索并安装 Input System 包。

> InputAction 需要在 inspector 中操作绑定

```cs
public class PanelManager : MonoBehaviour
{
    public InputAction escAction; // 需要在 inspector 中操作绑定

    private void OnEnable()
    {
        escAction.Enable();
        escAction.performed += OnEscPressed;
    }

    private void OnDisable()
    {
        escAction.performed -= OnEscPressed;
        escAction.Disable();
    }

    private void OnEscPressed(InputAction.CallbackContext context)
    {
        if (panelStack.Peek() == uiLogin)
        {
            return;
        }
        
        if (panelStack.Peek() == uiMain)
        {
            OpenPanel(uiEscape);
            return;
        }

        if (panelStack.Peek().name.StartsWith("PanelEvent"))
        {
            panelStack.Peek().GetComponent<PanelEvent>().ToFold();
        }
        
        CloseTopPanel();
    }
}
```

## 抽象类
- 不能实例化

- abstract 方法是没有实现的方法，它们必须在派生类中被实现。派生类实现抽象方法时，使用 override 关键字。

- 部分实现：virtual 方法可以直接在派生类中使用，也可以被覆盖(子类 override)。

```cs
public abstract class Animal
{
    // 允许子类覆盖的 Eat 方法
    public virtual void Eat()
    {
        Console.WriteLine("This animal is eating.");
    }

    public abstract void MakeSound();
}

public class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Woof!");
    }

    // Dog 覆盖基类的 Eat 方法
    public override void Eat()
    {
        Console.WriteLine("The dog is eating.");
    }
}

public class Cat : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Meow!");
    }

    // Cat 使用基类的 Eat 方法，不需要覆盖
}

public class Program
{
    public static void Main()
    {
        Animal myDog = new Dog();
        myDog.Eat();       // 输出: The dog is eating.
        myDog.MakeSound(); // 输出: Woof!

        Animal myCat = new Cat();
        myCat.Eat();       // 输出: This animal is eating.
        myCat.MakeSound(); // 输出: Meow!
    }
}
```

## Grid Layout Group

应对`多排或多行`的布局

## Horizontal/Vertical Layout Group 子对象不平分width/height

Horizontal Layout Group 默认情况下会让子对象平分宽度。

为了取消这个行为，并让子对象从右到左排列，你可以结合使用 Horizontal Layout Group 和 Content Size Fitter，并`禁用 Horizontal Layout Group 的 Child Force Expand Width` 属性。

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

# Layout Group

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


### 纵向伸展容器的image处理: 9-Slice（九宫格）技术

纵向伸展容器 例如 Tooltip 的背景（通常是 Image 组件）需要动态适应内容的大小，以保证整体的视觉效果。对于这种需求，使用 9-Slice（九宫格）技术能获得不错的效果

原理：利用 Sprite 的九宫格切片特性，让背景图片的边框部分固定，中心部分可以拉伸。

设置步骤
- 准备资源：
    1. 使用带边框的背景图片，确保四个角和边框部分的设计不依赖拉伸。
    2. 图片格式建议为 PNG 或其他支持透明通道的格式。

- 定义九宫格区域：
    1. 在 Unity 中选中图片，点击 Sprite Editor。
    2. 在编辑器中设置图片的 Border 属性：
    3. 左、右、上、下分别设置边框的像素值，定义不允许拉伸的区域。
    4. 保存设置。

- 设置图片类型为 Sliced：

- 在图片的 Inspector 面板中，将 Image Type 设置为 Sliced。






## Prefab 初始化 UnassignedReferenceException

确认是否是在 Prefab 中的 Prefab , 可能是在hierarchy中prefab中指定了,但没有 apply all, 导致 Instantiate 用的 prefab没有指定inspector对象

## Awake，OnEnable，Start中应该干什么
- Awake 方法：用于初始化不依赖于其他对象的内容。通常在 Awake 中初始化私有字段和单例。
- OnEnable 方法：用于绑定事件或初始化依赖于其他对象的内容。
- Start 方法：用于初始化依赖于其他对象的内容。这些对象应该在 Awake 中已经被正确初始化。


## 使用委托和事件跨脚本通信
在Unity中，如果你想让一个按钮按下时触发其他脚本中的方法，使用委托和事件是一种常见且灵活的方法，允许一个对象（比如按钮）按下时触发其他对象（比如脚本）中的方法。

具体步骤如下：


1. 定义事件委托：在接收事件的脚本中定义一个委托和事件(比如一个按钮要触发其他脚本, 就在按钮自己的脚本里定义委托和事件)。

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
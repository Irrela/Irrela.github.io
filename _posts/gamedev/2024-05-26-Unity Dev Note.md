---
title: Unity Dev Note
categories: GameDev
tags:
- GameDev
---

- [Note](#note)
      - [UI生效需要又EventSystem](#ui生效需要又eventsystem)
      - [TextMeshPro Text 中文乱码](#textmeshpro-text-中文乱码)
      - [Awake 和 Start](#awake-和-start)
      - [DropDown 添加 value on changed](#dropdown-添加-value-on-changed)
- [UI Toolkit](#ui-toolkit)
      - [字体设置](#字体设置)




# Note
#### UI生效需要又EventSystem

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
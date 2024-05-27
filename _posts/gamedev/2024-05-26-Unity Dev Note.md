---
title: Unity Dev Note
categories: GameDev
tags:
- GameDev
---

- [Note](#note)
      - [UI生效需要又EventSystem](#ui生效需要又eventsystem)



# Note
#### UI生效需要又EventSystem

#### TextMeshPro Text 中文乱码
[自制动态字体](https://www.cnblogs.com/anderson0/p/16130186.html)

> Atlas Resolution 选 4096 以上




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
---
title: Unity Handbook
categories: GameDev
tags:
- GameDev
---

- [项目及团队](#项目及团队)
  - [流程](#流程)
      - [游戏设计文档](#游戏设计文档)
      - [生产](#生产)
      - [后期制作](#后期制作)
      - [GDD](#gdd)
      - [项目管理](#项目管理)
      - [项目章程 Project Charter](#项目章程-project-charter)
      - [管理项目，项目跟踪器](#管理项目项目跟踪器)
    - [测试](#测试)
      - [错误报告的艺术](#错误报告的艺术)
    - [运营](#运营)
      - [项目回顾](#项目回顾)
- [DCC](#dcc)
      - [免费资产来源](#免费资产来源)
- [教程项目](#教程项目)
  - [Unity Essentials](#unity-essentials)
      - [Render mode](#render-mode)
      - [Scene操作](#scene操作)
      - [Camera Projection](#camera-projection)
      - [LateUpdate() 和 Update()](#lateupdate-和-update)
      - [玩家控制输入](#玩家控制输入)
      - [边界限制](#边界限制)
  - [Junior Programmer](#junior-programmer)
    - [CWC 1](#cwc-1)
      - [CWC 1 Unit 1 - Player Control](#cwc-1-unit-1---player-control)
      - [CWC 1 Unit 2 - Basic Gameplay](#cwc-1-unit-2---basic-gameplay)
      - [CWC 1 Bonus Features 2](#cwc-1-bonus-features-2)
      - [CWC 2 Challenge 2 - Play Fetch](#cwc-2-challenge-2---play-fetch)
      - [CWC 1 Bonus Features 2](#cwc-1-bonus-features-2-1)
      - [CWC 1 Mod the Cube (纯脚本设置参数)](#cwc-1-mod-the-cube-纯脚本设置参数)
      - [CWC 1 Personal Project](#cwc-1-personal-project)
    - [CWC 2 Unit 3 - Sound and Effects](#cwc-2-unit-3---sound-and-effects)
      - [背景设置](#背景设置)
      - [调用 player’s Rigidbody 实现跳跃](#调用-players-rigidbody-实现跳跃)
      - [防止双跳(double-jumping)](#防止双跳double-jumping)
      - [有碰撞体积的障碍物Prefab， 向player方向translate](#有碰撞体积的障碍物prefab-向player方向translate)
      - [SpawnManager](#spawnmanager)
      - [限制Player的pos](#限制player的pos)
      - [重复背景](#重复背景)
      - [碰撞触发Game Over, 停止相关代码](#碰撞触发game-over-停止相关代码)
      - [探索 Player 的 Animations](#探索-player-的-animations)
      - [设置 Jump 动画](#设置-jump-动画)
      - [调整 Jump 动画](#调整-jump-动画)
      - [设置撞击倒地动画](#设置撞击倒地动画)
      - [防止倒地后还能跳跃](#防止倒地后还能跳跃)
      - [自定义爆炸粒子](#自定义爆炸粒子)
      - [在碰撞时播放粒子](#在碰撞时播放粒子)
      - [添加污垢飞溅颗粒](#添加污垢飞溅颗粒)
      - [向相机对象添加音乐](#向相机对象添加音乐)
      - [向 Player 添加音效](#向-player-添加音效)
    - [CWC 2 Challenge 3 - Balloons, Bombs, \& Booleans](#cwc-2-challenge-3---balloons-bombs--booleans)
    - [CWC 2 Lab 3 - Player Control](#cwc-2-lab-3---player-control)
      - [3. 限制 Player 的移动](#3-限制-player-的移动)
    - [CWC 2 Unit 4 - Gameplay Mechanics（玩法机制）](#cwc-2-unit-4---gameplay-mechanics玩法机制)
      - [4.1 Watch Where You’re Going](#41-watch-where-youre-going)
      - [3. 为相机创建焦点](#3-为相机创建焦点)
      - [4. 通过用户输入旋转焦点](#4-通过用户输入旋转焦点)
      - [5. 给 Player 增加向前的力](#5-给-player-增加向前的力)
      - [6. 沿 focal point 方向移动](#6-沿-focal-point-方向移动)
      - [4.2.1 添加敌人和物理材料（physics material）](#421-添加敌人和物理材料physics-material)
      - [4.2.2 创建敌人脚本来追逐玩家](#422-创建敌人脚本来追逐玩家)
      - [4.2.4. 创建 enemy 的 Spawn Manager](#424-创建-enemy-的-spawn-manager)
      - [4.3.1. 选择并准备一个 powerup](#431-选择并准备一个-powerup)
      - [4.3.2. 碰撞时破坏 powerup](#432-碰撞时破坏-powerup)
      - [测试 powerup 与 enemy](#测试-powerup-与-enemy)
      - [对 powerup 应用额外的 knock back](#对-powerup-应用额外的-knock-back)
      - [为 powerup 创建倒计时 Routine](#为-powerup-创建倒计时-routine)
      - [增加 powerup 指示器](#增加-powerup-指示器)
      - [4.4.1 通过 for-loop 产生3波敌人](#441-通过-for-loop-产生3波敌人)
      - [4.4.2. 通过参数指定产生敌人波次数量](#442-通过参数指定产生敌人波次数量)
      - [4.4.3. 摧毁跌出平台的敌人](#443-摧毁跌出平台的敌人)
      - [4.4.4. 每一波次增加敌人的产生数量](#444-每一波次增加敌人的产生数量)
      - [4.4.5. 每个波次产生新的 powerup](#445-每个波次产生新的-powerup)
      - [Challenge 4 - Soccer Scripting](#challenge-4---soccer-scripting)
        - [FindGameObjectsWithTag 和 FindObjectsOfType 有什么区别](#findgameobjectswithtag-和-findobjectsoftype-有什么区别)
      - [GetComponent](#getcomponent)
    - [CWC 2 Unit 5 - User Interface](#cwc-2-unit-5---user-interface)
      - [Lesson 5.1 - Clicky Mouse](#lesson-51---clicky-mouse)
      - [5.1.1. 创建 project 并 切换到 2D view](#511-创建-project-并-切换到-2d-view)
      - [5.1.2. 创建 good 和 bad 目标](#512-创建-good-和-bad-目标)
      - [5.1.3. 随机地上抛目标](#513-随机地上抛目标)
      - [5.1.4. 抽象新方法优化混乱的代码](#514-抽象新方法优化混乱的代码)
      - [5.1.5. 在 Game Manager 中创建 object list](#515-在-game-manager-中创建-object-list)
      - [5.1.6. 创建 coroutine 来产生 objects](#516-创建-coroutine-来产生-objects)
      - [5.1.7. 通过 click 和 sensor 来摧毁目标](#517-通过-click-和-sensor-来摧毁目标)
      - [5.2.1. 添加 Score Text 并将其置于屏幕中](#521-添加-score-text-并将其置于屏幕中)
      - [5.2.2. 编辑 Score Text 的 properties](#522-编辑-score-text-的-properties)
      - [5.2.3. 实例化 score text 和 variable](#523-实例化-score-text-和-variable)
      - [5.2.4. 创建一个新的 UpdateScore 方法](#524-创建一个新的-updatescore-方法)
      - [5.2.5. 当目标被摧毁时增加 Score](#525-当目标被摧毁时增加-score)
      - [5.2.6. 为每种目标添加分值变量](#526-为每种目标添加分值变量)
      - [5.2.7. 添加爆炸粒子](#527-添加爆炸粒子)
      - [5.3.1. 创建 Game Over text object](#531-创建-game-over-text-object)
      - [5.3.2. Make GameOver text appear](#532-make-gameover-text-appear)
      - [5.3.3. Create GameOver function](#533-create-gameover-function)
      - [5.3.4. GameOver 后停止产生目标和分数变化](#534-gameover-后停止产生目标和分数变化)
      - [5.3.5. 添加 Restart button](#535-添加-restart-button)
      - [5.3.6. Make the restart button work](#536-make-the-restart-button-work)
      - [5.3.7. Show restart button on game over](#537-show-restart-button-on-game-over)
      - [5.4.1. 闯进 Title text 和 menu buttons](#541-闯进-title-text-和-menu-buttons)
      - [5.4.2. 添加 DifficultyButton script](#542-添加-difficultybutton-script)
      - [5.4.3. Call SetDifficulty on button click](#543-call-setdifficulty-on-button-click)
      - [5.4.4. Make your buttons start the game](#544-make-your-buttons-start-the-game)
      - [5.4.5. 停用 Title Screen on StartGame](#545-停用-title-screen-on-startgame)
      - [5.4.6. Use a parameter to change difficulty](#546-use-a-parameter-to-change-difficulty)
      - [5.4.bonus 2.Easy: Lives UI](#54bonus-2easy-lives-ui)
      - [5.4.bonus 3.Medium: 音量](#54bonus-3medium-音量)
      - [5.4.bonus 4.Hard: 暂停菜单](#54bonus-4hard-暂停菜单)
      - [5.4.bonus 5.Expert: Click-and-swipe](#54bonus-5expert-click-and-swipe)
    - [CWC 2 Lesson 6.1 - Project Optimization](#cwc-2-lesson-61---project-optimization)
      - [1. 变量属性](#1-变量属性)
      - [2.Unity事件函数](#2unity事件函数)
      - [3.对象池 (Object Pooling)](#3对象池-object-pooling)
      - [4. Awake() 和 Start()](#4-awake-和-start)
    - [CWC 2 Lesson 6.2 - Research and Troubleshooting](#cwc-2-lesson-62---research-and-troubleshooting)
      - [Lesson 6.2.1.Make the vehicle use forces](#lesson-621make-the-vehicle-use-forces)
      - [Lesson 6.2.2.Prevent car from flipping over](#lesson-622prevent-car-from-flipping-over)
      - [Lesson 6.2.3.Add a speedometer display](#lesson-623add-a-speedometer-display)
      - [Lesson 6.2.4.Add an RPM display](#lesson-624add-an-rpm-display)
      - [Lesson 6.2.5.Prevent driving in mid-air](#lesson-625prevent-driving-in-mid-air)
    - [CWC 2 Lesson 6.3 - Sharing your Projects(打包游戏分发)](#cwc-2-lesson-63---sharing-your-projects打包游戏分发)
      - [1.Install export Modules](#1install-export-modules)
      - [2.Build your game for Mac or Windows](#2build-your-game-for-mac-or-windows)
      - [ECS Survival Guide](#ecs-survival-guide)
        - [Unity 认证考试](#unity-认证考试)
    - [Manage Scene Flow and Data](#manage-scene-flow-and-data)
      - [Setup Version Control](#setup-version-control)
      - [Create a scene flow](#create-a-scene-flow)
      - [实现场景切换时的数据持久性](#实现场景切换时的数据持久性)
        - [Data persistence between scenes](#data-persistence-between-scenes)
        - [Data persistence between sessions](#data-persistence-between-sessions)
        - [DontDestroyOnLoad() and Static members](#dontdestroyonload-and-static-members)
        - [创建一个新的脚本来作为静态类](#创建一个新的脚本来作为静态类)
        - [7. 单例实现 MainManager](#7-单例实现-mainmanager)
        - [8.存储并传递所选颜色](#8存储并传递所选颜色)
      - [实现会话之间的数据持久性](#实现会话之间的数据持久性)
        - [如何在会话之间保持数据？](#如何在会话之间保持数据)
        - [Json and JsonUtility](#json-and-jsonutility)
        - [6.添加SaveData类](#6添加savedata类)
        - [7.添加SaveColor方法](#7添加savecolor方法)
        - [8.添加LoadColor方法](#8添加loadcolor方法)
        - [9.在应用程序中加载并保存颜色](#9在应用程序中加载并保存颜色)
    - [Abstraction in object-oriented programming](#abstraction-in-object-oriented-programming)
      - [继承和方法 Override](#继承和方法-override)
      - [封装 getter setter](#封装-getter-setter)
      - [Backing field 与 访问器](#backing-field-与-访问器)
      - [Profiler 和 定位性能优化瓶颈](#profiler-和-定位性能优化瓶颈)


# 项目及团队

## 流程

#### 游戏设计文档
包括有关故事、游戏玩法、艺术指导、预期目标受众和可访问性的信息。

#### 生产

![分工图](https://unity-connect-prd.storage.googleapis.com/20200923/learn/images/00c0dbf7-09fe-49b8-858a-a75e55c1eddd_Foundations_UnityRT3D_1.1.3.2_chart_of_jobs.png)

#### 后期制作
评估、编辑、润色和修复。这通常包括alpha 测试和beta 测试。 

Alpha 测试是在内部进行的，以确定问题和需要改进的领域，而 Beta 测试是由潜在的最终用户在产品使用的预期环境中进行的。

#### GDD
设计文档包含您的项目的蓝图，包括：
- 高层概述；例如，游戏（或体验）设计文档中的总体项目愿景
- 项目中特定管道的要求和标准
- 特定功能的详细设计规范

您应该确定：
- 该项目的目标和目的
- 目标用户和受众
- 该项目的主要特点
- 最终交付形式

[GDD Sample](https://docs.google.com/document/d/1o1KFkuZrPbevpd7ZYBhJ5e8n3GRg6m15HkebVfiTufk/edit)

#### 项目管理
[Agile风格的项目管理文件 Sample](https://docs.google.com/document/d/1FR-GYr2hL67d6MleWTTP-mXfCHVZTM1Mko77MFodxFg/copy)

#### 项目章程 Project Charter
设计文件获得批准并且项目被批准生产，项目章程就很有用，特别是当您在团队中工作时。

这是一份正式文件，描述了整个项目，包括项目的目标、项目的实施方式以及利益相关者是谁。项目章程用于预生产和生产阶段。

项目章程通常包括：
- 项目理由
- 项目的目标和限制
- 主要利益相关者是谁
- 已识别的风险
- 项目效益
- 预算总体概述

[Project Charter Sample](https://docs.google.com/document/d/1CzqyP1Qn8Ag-lXPaWVynb0InxUkXyWZLnkY2RllUSj8/edit)

#### 管理项目，项目跟踪器
通过规划适当的时间表和管理项目计划来管理项目

项目计划采用设计文件和项目章程中确定的要素，并设置具体任务和交付日期。制作人或项目经理通常会创建此计划，并在需要进行更改时根据需要进行更新。

针对`个人和团队成功跟踪项目`的一些指南包括：
- 确定必要的项目步骤。
- 如果在团队中工作，请确定并分配特定的项目角色和职责。
- 创建包含具体可交付成果和截止日期的时间表。
- 识别项目管理中的常见问题和问题，例如范围蔓延和过于雄心勃勃的设计计划以及紧迫的时间限制。
- 确定已完成项目的到期时间。
- 为将构建到整个项目的项目的每个较小部分设置截止日期。
- 为每个项目阶段制定合理的时间框架。
- 如果在团队中工作，请为列表中的每项任务指定任务所有者。


### 测试

#### 错误报告的艺术
[错误报告的艺术](https://www.ministryoftesting.com/articles/the-art-of-the-bug-report)


### 运营

#### 项目回顾
进行回顾的一种简单方法是制作一个包含三列的图表，并确定您认为应该做的事情：
- 开始做
- 不要做了
- 继续做



# DCC

#### 免费资产来源

- ![Pexels](https://www.pexels.com/)提供免费的 2D 图像和视频。本网站上的所有资产都具有相同的许可协议：它们可以免费使用，并且付款和归属是可选的。

- ![creative commons](https://search.creativecommons.org/)知识共享搜索引擎可让您根据知识共享许可证和来源过滤搜索。该站点索引图像、音频和视频文件。

- ![Open Game Art](https://opengameart.org/)提供 2D 和 3D 艺术、纹理、音乐和声音效果。所有资产都是免费的；但是，有多种不同的许可证类型，因此请务必检查是否需要为每项资产的创建者提供信用。

# 教程项目

## Unity Essentials

#### Render mode
在Unity中设置Canvas的 `Render Mode` 可以通过以下步骤完成：

在Unity编辑器中打开Canvas对象。

在Inspector面板中，找到Canvas组件。

在Canvas组件下的 `Render Mode` 属性中，你可以选择不同的渲染模式。常见的选项包括：

- **Screen Space - Overlay**：Canvas将覆盖在场景中的所有其他对象之上，不会随着场景中的相机移动而移动。
- **Screen Space - Camera**：Canvas将放置在场景中的一个特定相机的前面，你需要指定一个目标相机。
- **World Space**：Canvas将以世界坐标的形式存在，可以在场景中移动和旋转，通常用于在3D场景中创建HUD或者3DUI。

> [Unity certificate](https://unity.com/cn/products/unity-certifications/user-programmer)

#### Scene操作

1. 按住` 右键 + WASD` 可以以游戏视角调整视角
2. F键聚焦
3. 使用滚轮进行放大和缩小，按住滚轮进行平移
4. 选中对象后，按住` option + 左键` 单击可绕焦点旋转，或按住 `Option + 右键` 单击可放大和缩小


#### Camera Projection
在camera的inspector里调整。

1. 透视投影（Perspective）：

- 透视投影模拟了人眼在现实世界中的视觉效果。远处的物体看起来比较小，而近处的物体看起来比较大，同时也存在景深（近大远小）效果。
- 透视投影会根据摄像机和物体之间的距离产生景深效果，远离摄像机的物体将显示得比较小，而靠近摄像机的物体将显示得比较大。

2. 正交投影（Orthographic）：

- 正交投影消除了景深效果，使得物体在屏幕上显示的大小与其距离摄像机的距离无关。无论物体距离摄像机多远，它们在屏幕上的大小都是固定的。
- 正交投影在一些2D游戏或需要简化透视效果的情况下很有用，例如俯视视角的游戏、UI界面等。
- 用size调整取景范围
  
如果你想要实现更加现实的视觉效果，或者需要在游戏中表现景深效果，则使用透视投影是一个不错的选择。
如果你的游戏是2D游戏，或者你想要简化透视效果并让物体在屏幕上的大小保持固定，那么使用正交投影可能更合适。


#### LateUpdate() 和 Update()

Update方法：

- Update方法在每一帧渲染之前被调用，因此它用于处理对象的常规更新逻辑，例如移动、用户输入响应等。
- 由于它在每一帧渲染之前执行，所以它是处理大多数游戏对象行为的理想位置。

LateUpdate方法：

- LateUpdate方法在所有Update方法执行完毕后被调用，所以它通常用于处理在Update方法中进行了一些更改后的后续调整或校正。
    例如，如果在Update方法中移动了一个对象，并且希望另一个对象跟随该对象移动，那么可以将跟随逻辑放在LateUpdate方法中，以确保它们在位置调整之后执行。
- LateUpdate还经常用于处理摄像机相关的逻辑，因为它能确保所有其他对象都已经更新完毕，摄像机再进行调整，从而避免画面抖动等问题。

#### 玩家控制输入

1. Explore the inputs: 
   
   click `Edit` > `Project Settings`, select `Input Manager` in the left sidebar, then expand the `Axes` fold-out to explore the inputs

    ```cs
            if (Input.GetKeyDown(KeyCode.Space)) {
                // Launch a projectile from the player
                Instantiate(projectilePrefab, transform.position, projectilePrefab.transform.rotation);
            }

            // In order to improve game performance, we need to destroy them when they go out of bounds.
            if (transform.position.z > topBound) {
                Destroy(gameObject);
            }
            // 如果是要应用到全部prefab的clone，在inspector =》 override => apply all
    ```

- `animalPrefabs[animalIndex]` 表示将要实例化的游戏对象的预制体。animalPrefabs是一个数组或列表，存储了多个预制体。 `animalIndex` 是一个整数变量，用于指定要实例化的预制体在数组中的索引。
- `new Vector3(0, 0, 20)` 表示实例化后游戏对象的初始位置。这里的代码将在世界坐标系中创建一个新的位置，x和y坐标为0，z坐标为20。
- `animalPrefabs[animalIndex].transform.rotation` 表示实例化后游戏对象的初始旋转。这里的代码获取了将要实例化的预制体的旋转信息，并将其应用于新创建的游戏对象。

    ```cs       
    if (Input.GetKeyDown(KeyCode.S))
    {
        Instantiate(
            animalPrefabs[animalIndex], 
            new Vector3(0, 0, 20), 
            animalPrefabs[animalIndex].transform.rotation
            );
    }        
    ```

#### 边界限制
```cs
        if (Mathf.Abs(transform.position.z) <= bound)
        {
            transform.Translate(Vector3.right * moveSpeed * Time.deltaTime * verticalInput);
        }
        else
        {
            transform.position = new Vector3(transform.position.x, transform.position.y, transform.position.z > 0 ? bound : -bound);
        }
```


## Junior Programmer

### CWC 1

#### CWC 1 Unit 1 - Player Control

1. asset导入：从Unity的顶部菜单中，选择`Assets > Import Package > Custom Package`, 选择unitypackage
2. Obj聚焦：`press F` to focus on it
3. 按住 `Ctrl/Cmd` 以整单位移动相机
4. 布局：在右上角，选layout 或 自定义layout保存


#### CWC 1 Unit 2 - Basic Gameplay
1. 选择 Material, 拖拽到obj以apply

2. 获取用户的水平输入

```cs
public float horizo​​ntalInput;

void Update() {
    Horizo​​ntalInput = Input.GetAxis(“Horizo​​ntal”) ;
}

```

3. Translate

```cs
    /// <summary>
    ///   <para>Moves the transform in the direction and distance of translation.</para>
    /// </summary>
    /// <param name="translation"></param>
    /// <param name="relativeTo"></param>
    public void Translate(Vector3 translation)
```

4. 保持obj在边界内

```cs
void Update() {
    var currentPosition = transform.position;
    if (currentPosition.x > bound) {
        transform.position = new Vector3(bound, currentPosition.y, currentPosition.z);
    }
}
```


#### CWC 1 Bonus Features 2
[Doc](https://learn.unity.com/tutorial/bonus-features-2-share-your-work#)

#### CWC 2 Challenge 2 - Play Fetch
[Doc](https://learn.unity.com/tutorial/challenge-2-play-fetch-with-random-values-and-arrays#)

1. SpawnManager

2. GameObj destroy

3. Random spawn

4. InvokeRepeating

```cs
    /// <summary>
    ///   <para>Invokes the method methodName in time seconds, then repeatedly every repeatRate seconds.</para>
    /// </summary>
    /// <param name="methodName">The name of a method to invoke.</param>
    /// <param name="time">Start invoking after n seconds.</param>
    /// <param name="repeatRate">Repeat every n seconds.</param>
    public void InvokeRepeating(string methodName, float time, float repeatRate)
    {
      if ((double) repeatRate <= 9.999999747378752E-06 && (double) repeatRate != 0.0)
        throw new UnityException("Invoke repeat rate has to be larger than 0.00001F)");
      MonoBehaviour.InvokeDelayed(this, methodName, time, repeatRate);
    }
```

5. CoolDownTime

```cs
using System.Collections;
using UnityEngine;

public class Player : MonoBehaviour
{
    // 冷却时间
    public float cooldownTime = 2f;
    // 上次执行方法的时间
    private float lastExecutionTime = 0f;

    void Update()
    {
        // 在 Update 方法中检查按键输入并调用方法
        if (Input.GetKeyDown(KeyCode.Space))
        {
            // 检查是否已经超过冷却时间
            if (Time.time - lastExecutionTime >= cooldownTime)
            {
                // 调用方法
                MyMethod();

                // 更新上次执行时间为当前时间
                lastExecutionTime = Time.time;
            }
        }
    }

    void MyMethod()
    {
        // 这是你想要添加冷却时间的方法的内容
        Debug.Log("Method executed!");
    }
}
```

#### CWC 1 Bonus Features 2
1. SpawnManager 随机地点随机方向生成

```cs
public class SpawnManager : MonoBehaviour
{
    // 可在Unity编辑器中指定的动物预制体数组
    public GameObject[] animalPrefabs;

    // 饥饿条的Prefab
    public GameObject healthBarPrefab;

    // 场景边界的常量值
    private const float Bound = 30f;

    // 开始生成动物的延迟时间
    private const float StartDelay = 2;

    // 生成动物的时间间隔
    private const float SpawnInterval = 5.0f;

    // 在游戏对象创建时调用，用于初始化
    private void Start()
    {
        // 调用InvokeRepeating方法，在指定的延迟后开始重复执行指定的方法
        // 第一个参数："SpawnRandomAnimal" 是要重复调用的方法的名称（字符串）
        // 第二个参数：startDelay 是延迟开始重复调用的时间（以秒为单位）
        // 第三个参数：spawnInterval 是重复调用的时间间隔（以秒为单位）        
        InvokeRepeating(nameof(SpawnRandomAnimal), StartDelay, SpawnInterval);
    }

    // 每帧调用一次
    private void Update()
    {
    }

    // 生成随机动物的方法
    private void SpawnRandomAnimal()
    {
        // 随机选择一个动物预制体
        int animalIndex = Random.Range(0, animalPrefabs.Length);

        // 计算生成位置
        Vector3 spawnPos = CalculateSpawnPosition();

        // 计算生成的旋转方向
        Quaternion rotation = CalculateRotation(spawnPos);

        // 实例化生成动物
        GameObject newAnimal = Instantiate(animalPrefabs[animalIndex], spawnPos, rotation);
    }

    // 计算生成位置的方法
    private static Vector3 CalculateSpawnPosition()
    {
        // 在场景边界范围内随机生成位置
        var x = Random.Range(-Bound, Bound);
        var z = Random.Range(-Bound, Bound);

        // 随机选择沿着x轴或z轴生成
        var alongX = Random.Range(0, 2) == 0;
        if (alongX)
        {
            z = Bound * (Random.Range(0, 2) == 0 ? 1 : -1);
        }
        else
        {
            x = Bound * (Random.Range(0, 2) == 0 ? 1 : -1);
        }

        return new Vector3(x, 0, z);
    }

    // 计算生成旋转方向的方法
    private static Quaternion CalculateRotation(Vector3 spawnPos)
    {
        // 计算指向场景中心的方向
        var directionToCenter = Vector3.zero - spawnPos;
        // 生成以该方向为前方向的旋转
        var rotation = Quaternion.LookRotation(directionToCenter, Vector3.up);
        return rotation;
    }
}
```

2. GameManager 多个脚本间通信

```cs
public class GameManager : MonoBehaviour
{
    private int score = 0;
    private int lives = 3;
    // Start is called before the first frame update
    void Start() {}

    // Update is called once per frame
    void Update() {}
    
    public void AddLives(int value)
    {
        lives += value;
        if (lives <= 0)
        {
            Debug.Log("Game Over");
            lives = 0;
        }
        Debug.Log("Lives = " + lives);
    }
    
    public void AddScore(int value)
    {
        score += value;
        Debug.Log("Score = " + score);
    }
}
```

在其他脚本中使用gameManager

```cs
public class Other : MonoBehaviour
{
    private GameManager gameManager;
    // Start is called before the first frame update
    void Start()
    {
        gameManager = GameObject.Find("GameManager").GetComponent<GameManager>();
    }
}
```


3. Collider 碰撞, Trigger

- 判断碰撞obj： `CompareTag()`
- obj调用自己的方法： `other.GetComponent<AnimalHunger>().FeedAnimal(1)`

```cs
public class DetectCollisions : MonoBehaviour
{
    private GameManager gameManager;
    // Start is called before the first frame update
    void Start()
    {
        gameManager = GameObject.Find("GameManager").GetComponent<GameManager>();
    }

    // Update is called once per frame
    void Update()
    {

    }

    /// <summary>
    /// 当碰撞器与其他碰撞器发生接触时调用此方法。
    /// </summary>
    /// <param name="other">与该碰撞器发生接触的另一个碰撞器。</param>
    void OnTriggerEnter(Collider other)
    {
        // 检查与碰撞器发生接触的其他对象是否被标记为"Player"
        if (other.CompareTag("Player"))
        {
            // 如果是"Player"对象，则调用GameManager的AddLives方法减少生命值，并销毁GameManager对象
            gameManager.AddLives(-1);
            Destroy(gameManager);
        } 
        // 检查与碰撞器发生接触的其他对象是否被标记为"Animal"
        else if (other.CompareTag("Animal"))
        {
            // 如果是"Animal"对象，则获取AnimalHunger组件，并调用FeedAnimal方法喂养动物，增加游戏分数，并销毁当前游戏对象
            other.GetComponent<AnimalHunger>().FeedAnimal(1);
            gameManager.AddScore(5);
            Destroy(gameObject);
        }
    }
}
```

> !!Note!!: 在Unity中，如果你使用的是物理系统（Physics System），当两个物体发生碰撞或进入触发器时，`至少一个物体需要拥有刚体组件`才能触发碰撞或触发事件。

> 例如，如果你想要在两个物体之间触发碰撞事件，其中一个物体必须拥有刚体组件，而另一个物体可以是一个普通的碰撞器，不需要刚体组件。

>通常来说，将刚体组件添加到动态移动的物体上，而将碰撞器组件添加到静止的物体上是比较常见的做法。


4. 基于UI与prefab的饥饿条

- UI-Slider
- 为animal prefab 添加 slider prefab ： [Doc](https://connect-prd-cdn.unity.com/20210505/70ffeabd-706f-4556-b9a9-ea6bd8ba631a/Unit%202%20-%20Bonus%20Features%20Solutions.pdf?_ga=2.263578828.1186801097.1620052249-59568313.1601905412) 从p32开始看

```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class AnimalHunger : MonoBehaviour
{
    public Slider hungerSlider;
    public int amountToBeFed;
    private int currentFedAmount = 0;
    private GameManager gameManager;

    // Start is called before the first frame update
    void Start()
    {
        // 设置饥饿滑块的最大值为要喂养的量
        hungerSlider.maxValue = amountToBeFed;

        // 设置饥饿滑块的最小值为0
        hungerSlider.minValue = 0;

        // 禁用饥饿滑块的填充对象
        // 将对象的活动状态设置为假，即禁用该对象的渲染和碰撞功能。
        hungerSlider.fillRect.gameObject.SetActive(false);

        // 查找名为"GameManager"的游戏对象，并获取其GameManager组件
        gameManager = GameObject.Find("GameManager").GetComponent<GameManager>();
    }


    // Update is called once per frame
    void Update()
    {
    }

    public void FeedAnimal(int amount)
    {
        // 给动物喂食的方法，参数为喂食的数量

        // 增加当前喂食总量
        currentFedAmount += amount;

        // 激活饥饿滑块的填充物体
        hungerSlider.fillRect.gameObject.SetActive(true);

        // 更新饥饿滑块的值
        hungerSlider.value = currentFedAmount;

        // 如果当前喂食总量达到或超过需要喂食的总量
        if (currentFedAmount >= amountToBeFed)
        {
            // 调用游戏管理器的方法，增加分数（传入需要喂食的总量作为参数）
            gameManager.AddScore(amountToBeFed);

            // 销毁当前游戏对象（延迟0.1秒后销毁）
            Destroy(gameObject, 0.1f);
        }
    }
}
```


#### CWC 1 Mod the Cube (纯脚本设置参数)

- Transform
- Material opacity


```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Cube : MonoBehaviour
{
    // 渲染器
    public MeshRenderer Renderer;
    // 材质
    private Material _material;
    // 不透明度
    private float _opacity;
    // 不透明度变化方向
    private float _opacityDirection;

    void Start()
    {
        // 设置初始位置
        transform.position = new Vector3(0, 0, 0);
        // 设置初始缩放
        transform.localScale = Vector3.one * 1.3f;
        // 设置初始旋转
        transform.rotation = Quaternion.Euler(Random.Range(0, 360), Random.Range(0, 360), Random.Range(0, 360));

        // 获取渲染器的材质
        _material = Renderer.material;
        // 初始化不透明度
        _opacity = 0f;
        // 初始化不透明度变化方向
        _opacityDirection = 1f;
        // 设置初始颜色和不透明度
        _material.color = new Color(0.5f, 1.0f, 0.3f, _opacity);
    }

    void Update()
    {
        // 设置旋转速度
        var rotateSpeed = Random.Range(0f, 360f);
        // 绕各轴旋转
        transform.Rotate(rotateSpeed * Time.deltaTime, rotateSpeed * Time.deltaTime, rotateSpeed * Time.deltaTime);
        
        // 周期性改变不透明度
        PeriodicalChangeOpacity();
    }

    void PeriodicalChangeOpacity()
    {
        // 根据不透明度的当前值确定不透明度的变化方向
        _opacityDirection = _opacity switch
        {
            // 当不透明度接近 1 时，使其减小
            > 0.9f => -0.0001f,
            // 当不透明度接近 0 时，使其增加
            < 0.1f => 0.0001f,
            // 其他情况不变
            _ => _opacityDirection
        };

        // 根据不透明度变化方向调整不透明度
        _opacity += _opacityDirection;
        // 更新材质的颜色和不透明度
        _material.color = new Color(0.5f, 1.0f, 0.3f, _opacity);
    }
}
```

#### CWC 1 Personal Project
1. primitive

2. camera视角的常用实践
   - 对于一个自上而下的游戏，将摄像机定位在（0，10，0）正上方，并在X轴上旋转90度
   - 对于侧视图游戏，在X轴上旋转平面—90度
   - 对于第三人称视角游戏，在Y轴和Z轴向上移动摄像机，并在X轴上增加其旋转

3. 同时调节scale
    提示：在Unity的较新版本中，您可以通过切换"启用约束比例"图标，同时设置所有轴上的比例。
    ![Enabled Constrained Proportions icon](https://unity-connect-prd.storage.googleapis.com/20231214/learn/images/c2f44eba-5971-4f3b-9463-5ca844720e89_image.png)

4. 保存项目，打包备份
   - In the `Project window`, Right-click on the `Assets folder > Export Package`, then click `Export`

   - Create a new `Backups` folder in your Personal Project folder, then save it with your name and the version number (e.g. Carl_V0.1.unitypackage”)

5. GetKey 和 GetKeyDown
   
`Input.GetKey(string keyName)：`

这个方法用于检测指定按键是否被按下。
当按键被按下并保持按住时，该方法会持续返回 true。
如果按键没有被按下，则返回 false。
这个方法会在每一帧都检测按键状态。


`Input.GetKeyDown(string keyName)：`

这个方法用于检测指定按键在当前帧是否被按下。
当按键在当前帧被按下时，该方法返回 true，但是在后续的帧中，即使按键保持按住，也不会再次返回 true。
如果按键在当前帧没有被按下，则返回 false。
这个方法只会在按键按下的那一帧返回 true，而在之后的帧中会返回 false。


举例来说，假设你想要在玩家按下空格键时触发某个动作：

如果你使用 Input.GetKey("space")，那么当玩家按下空格键后，该动作将在每一帧都触发，只要空格键一直被按住。

如果你使用 Input.GetKeyDown("space")，那么该动作将只在玩家按下空格键的那一帧触发，而不管玩家是否保持按住空格键。

6. Prefab override
如果您对场景中的预制件进行了更改，并希望将这些更改应用于所有预制件


### CWC 2 Unit 3 - Sound and Effects
在这个初级程序员任务中，你将扩展你的基础学习，并创建基本的自定义交互与Unity。

当您完成四个实际项目时，您将探索一系列支持基本功能的概念，包括:

**循环、数据类型、引用、脚本通信和UI。**

为了完成任务，您将为您的投资组合创建一个简单的原型应用程序。在此任务结束时，您将获得参加 Unity Certified User：Programmer 认证考试所需的所有技能。

在本单元中，您将编程一个快节奏的无休止的 横向卷轴 跑步者游戏，玩家需要时间跳过迎面而来的障碍物，以避免崩溃。

在创建此原型时，您将学习如何`添加音乐和音效`，从而彻底改变项目的体验。

您还将学习如何`创建动态无休止的重复背景`，这对任何侧滚动游戏都至关重要。

最后，您将学习加入`粒子效果`，如飞溅和爆炸，这使您的游戏更令人满意。

#### 背景设置

在层次结构中选择 `Background` 对象，然后在 `Sprite Renderer component > Sprite，选择_City、_Nature或_Town`

![image](https://unity-connect-prd.storage.googleapis.com/20231214/learn/images/840375f1-defc-44da-95ec-10f8b6a0429d_image.png)

#### 调用 player’s Rigidbody 实现跳跃
   
- `_playerRb.AddForce(Vector3.up * 100, ForceMode.Impulse):`
    这行代码使用了 ForceMode.Impulse，表示施加的是一个瞬间的冲量。这意味着施加的力将会立即应用到刚体上，不受刚体当前速度的影响，而是立即改变刚体的速度。

- `_playerRb.AddForce(Vector3.up * 100):`
    这行代码没有指定施加的力的方式，默认情况下使用的是 ForceMode.Force，表示施加的是一个持续的力。这意味着施加的力会持续地应用到刚体上，会受到刚体当前速度的影响，并逐渐改变刚体的速度，直到力被移除或受到其他因素的影响。


#### 防止双跳(double-jumping)
- 通过布尔值和碰撞检测防止空中跳跃
- `OnCollisionEnter(Collision other)`

```cs
public class PlayerController : MonoBehaviour
{
    private Rigidbody _playerRb; // 用于存储玩家刚体组件的引用

    public float jumpForce; // 跳跃力大小
    public float gravityModifier; // 重力修正因子
    public bool isOnGround = true; // 标记玩家是否在地面上

    // Start is called before the first frame update
    void Start()
    {
        // 获取当前游戏对象（即此脚本所附加到的游戏对象）上的 Rigidbody 组件
        _playerRb = GetComponent<Rigidbody>();

        // 使用重力修正因子调整物理引擎设置的重力
        Physics.gravity *= gravityModifier;
    }

    // Update is called once per frame
    void Update()
    {
        // 检测是否按下空格键，并且玩家在地面上
        if (Input.GetKeyDown(KeyCode.Space) && isOnGround)
        {
            // 在玩家刚体上施加向上的冲量，冲量大小为 (0, jumpForce, 0)
            // ForceMode.Impulse 是施加力的方式，即瞬间施加一个冲量
            _playerRb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
            isOnGround = false; // 标记玩家不在地面上
        }
    }

    /// <summary>
    /// OnCollisionEnter is called when this collider/rigidbody has begun touching another rigidbody/collider.
    /// This function can be a coroutine.
    /// </summary>
    /// <param name="collision"></param>
    private void OnCollisionEnter(Collision collision)
    {
        isOnGround = true; // 碰撞发生时，标记玩家在地面上
    }
}

```

#### 有碰撞体积的障碍物Prefab， 向player方向translate

```cs
public class MoveLeft : MonoBehaviour
{
    public float speed = 30f;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.Translate(Vector3.left * (Time.deltaTime * speed));
    }
}
```

#### SpawnManager 

- 在固定位置生成障碍物 prefab， 记得将控制 prefab 向左 translate 的脚本 override
- extract 生成障碍物方法并 InvokeRepeating 调用

```cs
public class SpawnManager : MonoBehaviour // 定义一个名为 SpawnManager 的类，继承自 MonoBehaviour 类
{
    public GameObject obstaclePrefab; // 公共字段，用于存储障碍物预制体的引用

    private Vector3 _spawnPos = new Vector3(25, 0, 0); // 私有字段，用于存储生成位置的坐标
    private float startDelay = 2; // 私有字段，表示生成障碍物的起始延迟时间
    private float repeatRate = 2; // 私有字段，表示生成障碍物的重复间隔时间
    
    // Start is called before the first frame update
    void Start() // 在游戏对象被启用时调用一次的方法
    {
        InvokeRepeating(nameof(SpawnObstacle), startDelay, repeatRate); // 以指定的延迟时间和重复间隔时间调用 SpawnObstacle 方法
    }

    // Update is called once per frame
    void Update() // 每帧调用一次的方法
    {
        // 此处留空，表示在 Update 方法中不执行任何逻辑操作
    }

    void SpawnObstacle() // 生成障碍物的方法
    {
        Instantiate(obstaclePrefab, _spawnPos, obstaclePrefab.transform.rotation); // 生成一个障碍物实例，并放置在指定位置和旋转角度
    }
}

```
   
#### 限制Player的pos

在player刚体组件中，展开 `constraints` ，然后冻结除 `Y position` 以外的所有

#### 重复背景
1. 将 `moveLeft.cs` 应用于 Background obj

2. 为了重复背景，并提供一个世界匆匆而过的错觉，我们需要重置背景对象的位置，使其完美地结合在一起。

3. 我们每隔几秒就重复一次背景，但过渡看起来很尴尬。我们需要使用一些新的变量来完美地和无缝地创建后台循环。
   - 通过获取背景 collider 的 width 来设置 repeatWidth 获得更自然的效果 （其比例与背景图由多少重复构成，当然也可以自制倍数图）

```cs
public class RepeatBackground : MonoBehaviour
{
    private Vector3 _startPos; // 背景起始位置
    private float _repeatWidth; // 背景重复宽度的一半

    // Start is called before the first frame update
    void Start()
    {
        // 获取背景起始位置
        _startPos = transform.position;
        // 获取背景盒碰撞器的大小，并计算出背景重复宽度的一半(因为选用的background 是两帧重复)
        _repeatWidth = GetComponent<BoxCollider>().size.x / 2;
    }

    // Update is called once per frame
    void Update()
    {
        // 如果背景的 x 坐标小于起始位置 x 坐标减去重复宽度的一半
        if (transform.position.x < _startPos.x - _repeatWidth)
        {
            // 将背景位置重置为起始位置，实现背景的无限重复
            transform.position = _startPos;
        }
    }
}
```

#### 碰撞触发Game Over, 停止相关代码
当玩家与障碍物碰撞时，我们希望触发一个“游戏结束”状态，停止一切。为了做到这一点，我们需要一种方法来标记和识别玩家碰撞的所有游戏对象。

通过 `tag` 来判断 player 是在和 ground 碰撞还是和障碍物碰撞

```cs
public class PlayerController : MonoBehaviour
{
    // ...
    public bool isOnGround = true;
    public bool gameOver = false;
    
    // ...

    /// <summary>
    /// OnCollisionEnter is called when this collider/rigidbody has begun touching another rigidbody/collider.
    /// This function can be a coroutine.
    /// </summary>
    /// <param name="collision"></param>
    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Ground"))
        {
            isOnGround = true;
        }
        else if (collision.gameObject.CompareTag("Obstacle"))
        {
            gameOver = true;
            Debug.Log("Game Over!");
        }
    }
}
```

背景和物体在与障碍物碰撞时继续移动。我们需要 `MoveLeft` 脚本与 `PlayerController` 通信，并在玩家触发 `gameOver` 后停止。

```cs
public class MoveLeft : MonoBehaviour
{
    public float speed = 30f; // 速度参数，控制左移速度
    private PlayerController _playerControllerScript; // 对PlayerController脚本的引用
    private float _leftBound = -15;

    // Start is called before the first frame update
    void Start()
    {
        // 在开始时获取PlayerController脚本的引用
        _playerControllerScript = GameObject.Find("Player").GetComponent<PlayerController>(); 
    }

    // Update is called once per frame
    void Update()
    {
        if (!_playerControllerScript.gameOver) // 如果游戏未结束
        {
            // 将物体向左移动，速度由speed参数控制
            transform.Translate(Vector3.left * (Time.deltaTime * speed)); 
        }

        if (transform.position.x < _leftBound && gameObject.CompareTag("Obstacle"))
        {
            Destroy(gameObject);
        }
    }
}
```

当 `gameOver == true` 时， `SpawnManager` 仍然在增加障碍物大军！我们需要与 `Spawn Manager` 脚本沟通，并告诉它在游戏结束时停止。

```cs
public class SpawnManager : MonoBehaviour
{
    public GameObject obstaclePrefab;

    private Vector3 _spawnPos = new Vector3(25, 0, 0);
    private float startDelay = 2;
    private float repeatRate = 2;
    private PlayerController _playerController;
    
    void Start()
    {
        InvokeRepeating(nameof(SpawnObstacle), startDelay, repeatRate);
        _playerController = GameObject.Find("Player").GetComponent<PlayerController>();
    }

    // ...

    void SpawnObstacle()
    {
        if (!_playerController.gameOver)
        {
            Instantiate(obstaclePrefab, _spawnPos, obstaclePrefab.transform.rotation);
        }
    }
}
```

#### 探索 Player 的 Animations
1. 双击 `Player` 的 `Animator` 组件的 `Controller` ，然后探索不同的 `Layer` ，进入 `Animator window` 后 各个 `Layer` 的 网格图，可以 按住 `option` 拖拽以查看不同部分


2. 其中各个框就是代表不同的 `State`, 双击 State 可以看动画效果D的 `preview` 双击链接不同 `state` 的 `arrow line` 和`各状态间转换的 condition`

3. 在 Animator Window， Layers tab 右侧有 Parameters tab, 将 Speed_f 变量更改为 1.0

4. 右键单击 `Run_Static > Set as Layer Default State`

5. 单击 Run_Static 状态并调整 inspector 中的 `Speed = 1.5f` 值以匹配背景的速度


#### 设置 Jump 动画
State 中 Run => Running_Jump 有个 condition param : `"Jump_trig"`

```cs
public class PlayerController : MonoBehaviour
{
    
    // ...
    private Animator _playerAnimator;
    
    // Start is called before the first frame update
    void Start()
    {
        // ...
        
        _playerAnimator = GetComponent<Animator>();
        
        // ...
    }


    // Update is called once per frame
    void Update()
    {
        // 检测是否按下空格键
        if (Input.GetKeyDown(KeyCode.Space) && isOnGround)
        {
            // ... 
            
            // State : Run => Running_Jump condition : "Jump_trig"
            _playerAnimator.SetTrigger("Jump_trig");
        }
    }

}
```
> todo: SetTrigger trigger 是什么数据类型？

#### 调整 Jump 动画

1. 单击 Running_Jump 状态，然后在检查器中降低 `Speed = 0.7` 以减慢动画速度
2. 调整玩家的质量(60kg)、跳跃力(700)和 gravityModifier(1.5)，让你的跳跃刚刚好

#### 设置撞击倒地动画

角色应该有一个动画。当它与物体碰撞时，角色应该像被击倒一样摔倒，而不是继续冲刺。

1. 在玩家与障碍物碰撞时，设置 `Death bool("Death_b")` 为真
2. 在同一个if语句中，将 `DeathType(DeathType_int)` 设置为1

```cs
public class PlayerController : MonoBehaviour
{

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Ground"))
        {
            // ...
        }
        else if (collision.gameObject.CompareTag("Obstacle"))
        {
            // ...   
            _playerAnimator.SetBool("Death_b", true);
            _playerAnimator.SetInteger("DeathType_int", 1);
        }
    }
}
```

#### 防止倒地后还能跳跃

```cs
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space) && isOnGround && !gameOver) // 添加gameover检测
        {
            _playerRb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
            isOnGround = false;
            
            _playerAnimator.SetTrigger("Jump_trig");
        }
    }
```

#### 自定义爆炸粒子
1. From the `Course Library > Particles`, drag `FX_Explosion_Smoke` into the hierarchy, then use the `Play / Restart / Stop` buttons to preview it 
   1. `Play / Restart / Stop` 在 Scene window 右下部
2. Play around with the `settings` to get your `particle system` the way you want it
   1. Inspector -> Particle System -> Velocity over lifeTime -> speed Modifier
3. Make sure to uncheck the `Play on Awake` setting
   1. Inspector -> Particle System -> Play On Awake
   2. 设置为true会让该粒子效果在游戏开始就触发
4. Drag the `particle` onto your player to make it a `child object`, then position it relative to the player 
   1. 让例子效果成为Player的子obj


#### 在碰撞时播放粒子
1. In `PlayerController.cs`, declare a new `public ParticleSystem explosionParticle`;
2. In the Inspector, assign the `explosion` to the `explosion particle` variable
   1. 从 Hierarchy -> Player 的 child Object 拖 `FX_Explosion_Smoke`
3. In the if-statement where the player collides with an obstacle, call `explosionParticle.Play()`;, then test and tweak the `particle properties`

```cs
public class PlayerController : MonoBehaviour
{

    public ParticleSystem explosionParticle;

    private void OnCollisionEnter(Collision collision)
    {
        else if (collision.gameObject.CompareTag("Obstacle"))
        {
            explosionParticle.Play();
        }
    }
}
```

#### 添加污垢飞溅颗粒

我们需要的下一个粒子效果是一个泥土飞溅，让玩家看起来像是踢地面，因为他们冲刺通过场景。

诀窍在于，粒子只应该在玩家在地面上的时候才 play。

1. Drag `FX_DirtSplatter` as the Player’s `child object`, reposition it, rotate it, and edit its settings
   1. rotation.z = -90
2. Declare a new `public ParticleSystem dirtParticle`;, then `assign` it in the Inspector
3. Add `dirtParticle.Stop()`; when the player jumps or collides with an obstacle
4. Add `dirtParticle.Play()`; when the player lands on the ground

```cs
public class PlayerController : MonoBehaviour
{
    public ParticleSystem dirtParticle;

    // Update is called once per frame
    void Update()
    {
        // 检测是否按下空格键
        if (Input.GetKeyDown(KeyCode.Space) && isOnGround && !gameOver)
        {
            dirtParticle.Stop();
        }
    }

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Ground"))
        {            
            dirtParticle.Play();
        }
        else if (collision.gameObject.CompareTag("Obstacle"))
        {

            dirtParticle.Stop();
        }
    }
}
```

#### 向相机对象添加音乐
我们的粒子效果看起来很好，所以是时候转移到声音了！为了添加音乐，我们需要在相机上附加声音组件。毕竟，相机是场景的眼睛和耳朵。

1. Select the `Main Camera` object, then `Add Component > Audio Source`
2. From `Course Library > Sound`, drag a music clip onto the `AudioClip` variable in the inspector
3. Reduce the `volume` so it will be easier to hear `sound effects`
   1. Inspector -> Audio Source -> Volume
4. Check the `Loop` checkbox
   1. Inspector -> Audio Source -> Loop

#### 向 Player 添加音效

1. In `PlayerController.cs`, declare a new `public AudioClip jumpSound`; and a new `public AudioClip crashSound`;
2. From `Course Library > Sound`, drag a clip onto each new `sound` variable in the inspector
3. Add an `Audio Source` component to the `player`
4. Declare a new `private AudioSource playerAudio`; and initialize it as `playerAudio = GetComponent<AudioSource>();`
5. Call `playerAudio.PlayOneShot(jumpSound, 1.0f)`; when the character `jumps`
6. Call `playerAudio.PlayOneShot(crashSound, 1.0f)`; when the character `crashes`

```cs
public class PlayerController : MonoBehaviour
{
    public AudioClip jumpSound; // 用于存储跳跃音效的变量
    public AudioClip crashSound; // 用于存储碰撞音效的变量
    private AudioSource playerAudio; // 用于播放音效的音频源

    // Start is called before the first frame update
    void Start()
    {
        playerAudio = GetComponent<AudioSource>(); // 获取当前游戏对象上的 AudioSource 组件
    }

    // Update is called once per frame
    void Update()
    {
        // 检测是否按下空格键，并且玩家处于地面上且游戏未结束
        if (Input.GetKeyDown(KeyCode.Space) && isOnGround && !gameOver)
        {      
            playerAudio.PlayOneShot(jumpSound, 1.0f); // 播放跳跃音效
        }
    }

    // 当游戏对象碰撞到其他物体时调用
    private void OnCollisionEnter(Collision collision)
    {
        // 如果碰撞的物体标签为 "Ground"，则不做任何操作
        if (collision.gameObject.CompareTag("Ground"))
        {
            // Do nothing
        }
        // 如果碰撞的物体标签为 "Obstacle"，播放碰撞音效
        else if (collision.gameObject.CompareTag("Obstacle"))
        {           
            playerAudio.PlayOneShot(crashSound, 1.0f);
        }
    }
}
```

```cs
/// <summary>
///   <para>Plays an AudioClip, and scales the AudioSource volume by volumeScale.</para>
/// </summary>
/// <param name="clip">The clip being played.</param>
/// <param name="volumeScale">The scale of the volume (0-1).</param>
public void PlayOneShot(AudioClip clip, [UnityEngine.Internal.DefaultValue("1.0F")] float volumeScale)
{
    if ((Object) clip == (Object) null)
    Debug.LogWarning((object) "PlayOneShot was called with a null AudioClip.");
    else
    AudioSource.PlayOneShotHelper(this, clip, volumeScale);
}
```

> todo: 除开脚本调节音量，是否存在其他方式（声明puc var？）


### CWC 2 Challenge 3 - Balloons, Bombs, & Booleans


```cs
public class PlayerControllerX : MonoBehaviour
{
    public bool gameOver;

    public float floatForce;
    private float gravityModifier = 1.5f;
    private Rigidbody playerRb;

    public ParticleSystem explosionParticle;
    public ParticleSystem fireworksParticle;

    private AudioSource playerAudio;
    public AudioClip moneySound;
    public AudioClip explodeSound;


    // Start is called before the first frame update
    void Start()
    {
        // 3.The player can’t control the balloon
        playerRb = GetComponent<Rigidbody>();
        
        Physics.gravity *= gravityModifier;
        playerAudio = GetComponent<AudioSource>();

        // Apply a small upward force at the start of the game
        playerRb.AddForce(Vector3.up * 5, ForceMode.Impulse);

    }

    // Update is called once per frame
    void Update()
    {
        // While space is pressed and player is low enough, float up
        if (Input.GetKey(KeyCode.Space) && !gameOver)
        {
            playerRb.AddForce(Vector3.up * floatForce);
        }
    }

    private void OnCollisionEnter(Collision other)
    {
        // if player collides with bomb, explode and set gameOver to true
        if (other.gameObject.CompareTag("Bomb"))
        {
            explosionParticle.Play();
            playerAudio.PlayOneShot(explodeSound, 1.0f);
            gameOver = true;
            Debug.Log("Game Over!");
            Destroy(other.gameObject);
        } 

        // if player collides with money, fireworks
        else if (other.gameObject.CompareTag("Money"))
        {
            fireworksParticle.Play();
            playerAudio.PlayOneShot(moneySound, 1.0f);
            Destroy(other.gameObject);

        }

        // 9.Bonus: The balloon can drop below the ground
        else if (other.gameObject.CompareTag("Ground"))
        {
            playerRb.AddForce(Vector3.up * 15, ForceMode.Impulse);
        }

    }

}
```

```cs
public class MoveLeftX : MonoBehaviour
{
    public float speed;
    private PlayerControllerX playerControllerScript;
    private float leftBound = -10;

    // Start is called before the first frame update
    void Start()
    {
        playerControllerScript = GameObject.Find("Player").GetComponent<PlayerControllerX>();
    }

    // Update is called once per frame
    void Update()
    {
        // If game is not over, move to the left
        // 4.The background only moves when the game is over
        if (!playerControllerScript.gameOver)
        {
            transform.Translate(Vector3.left * speed * Time.deltaTime, Space.World);
        }

        // If object goes off screen that is NOT the background, destroy it
        if (transform.position.x < leftBound && !gameObject.CompareTag("Background"))
        {
            Destroy(gameObject);
        }

    }
}
```

```cs
public class SpawnManagerX : MonoBehaviour
{
    public GameObject[] objectPrefabs;
    private float spawnDelay = 2;
    private float spawnInterval = 1.5f;

    private PlayerControllerX playerControllerScript;

    // Start is called before the first frame update
    void Start()
    {
        // No objects are being spawned
        InvokeRepeating("SpawnObjects", spawnDelay, spawnInterval);
        playerControllerScript = GameObject.Find("Player").GetComponent<PlayerControllerX>();
    }

    // Spawn obstacles
    void SpawnObjects ()
    {
        // Set random spawn location and random object index
        Vector3 spawnLocation = new Vector3(30, Random.Range(5, 15), 0);
        int index = Random.Range(0, objectPrefabs.Length);

        // If game is still active, spawn new object
        if (!playerControllerScript.gameOver)
        {
            Instantiate(objectPrefabs[index], spawnLocation, objectPrefabs[index].transform.rotation);
        }

    }
}

```

```cs
public class RepeatBackgroundX : MonoBehaviour
{
    private Vector3 startPos;
    private float repeatWidth;

    private void Start()
    {
        startPos = transform.position; // Establish the default starting position 
        // 7.The background is not repeating properly
        repeatWidth = GetComponent<BoxCollider>().size.x / 2; // Set repeat width to half of the background
    }

    private void Update()
    {
        // If background moves left by its repeat width, move it back to start position
        if (transform.position.x < startPos.x - repeatWidth)
        {
            transform.position = startPos;
        }
    }
}
```

### CWC 2 Lab 3 - Player Control

#### 3. 限制 Player 的移动
1. 如果你的玩家正在与不应该碰撞的物体（包括地面）碰撞，请在碰撞器组件中 check `Is trigger` box
2. 如果玩家的位置或旋转应该受到约束，则扩展刚体组件中的 `constraints` 并约束某些轴
3. 如果你的玩家可以离开屏幕，写一个if语句检查和重置位置
4. 如果玩家可以 double-jump 或飞离屏幕，创建一个布尔变量来限制用户的能力
5. 如果你的玩家应该受到游戏区域外部的物理障碍的限制，创建更原始的平面或立方体，并将它们缩放成墙壁



### CWC 2 Unit 4 - Gameplay Mechanics（玩法机制）
Ability:
- Apply `Physics Materials` to make game objects more or less `bouncy`
- Calculate new vectors to steer objects in `custom directions`
- Write more advanced custom functions and variables to make your code clean and professional
- Write informative debug messages with `Concatenation` 
- Use `IEnumerator` and `Coroutines` to repeat and delay functions
- Use for `loops` to efficiently and dynamically run code multiple times
- Use `SetActive` to make game objects appear and disappear from the scene
- Use `FindObjectsOfType` to track the current number of objects in the scene

#### 4.1 Watch Where You’re Going
首先，我们将创建一个新的原型并下载启动文件！你会注意到一个美丽的岛屿，天空和粒子效果...所有这些都可以定制！

接下来，您将允许玩家以完美的半径围绕岛屿旋转相机，提供一个壮观的场景视图。

玩家将由一个球体代表，包裹在您选择的详细纹理中。

最后，您将为玩家增加力量，允许他们在相机的方向上向前或向后移动。

New Functionality:
- Camera rotates around the island based on horizontal input
- Player rolls in direction of camera based on vertical input

New Concepts and Skills:
- Texture Wraps
- Camera as child object
- Global vs Local coordinates
- Get direction of other object

#### 3. 为相机创建焦点

1. Create a new Empty Object and rename it `Focal Point`, 
2. `Reset its position` to the origin (0, 0, 0), and make the Camera a `child object` of it
3. Create a new “Scripts” folder, and a new `RotateCamera` script inside it 
4. Attach the `RotateCamera` script to the Focal Point

#### 4. 通过用户输入旋转焦点

1. Create the code to rotate the camera based on `rotationSpeed` and `horizontalInput`
2. Tweak the rotation speed value to get the speed you want

```cs
public class RotateCamera : MonoBehaviour
{
    public float rotationSpeed;
    
    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
        float horizontalInput = Input.GetAxis("Horizontal");
        transform.Rotate(Vector3.up, horizontalInput * rotationSpeed * Time.deltaTime);
    }
}
```

#### 5. 给 Player 增加向前的力

1. Create a new `PlayerController` script, apply it to the Player, and open it
2. Declare a new `public float speed variable` and `initialize` it
3. Declare a new `private Rigidbody playerRb` and `initialize it in Start()`
4. In `Update()`, declare a new `forwardInput` variable based on `“Vertical”` input 
5. Call the `AddForce()` method to move the player forward based forwardInput

```cs
public class PlayerController : MonoBehaviour
{
    private Rigidbody playerRb;
    public float speed = 5.0f;

    void Start()
    {
        playerRb = GetComponent<Rigidbody>();
    }

    // Update is called once per frame
    void Update()
    {
        float fowardInput = Input.GetAxis("Vertical");
    }
}
```

#### 6. 沿 focal point 方向移动

1. Declare a new `private GameObject focalPoint`; and initialize it in `Start()`: `focalPoint = GameObject.Find("Focal Point");`
2. In the `AddForce` call, Replace` Vector3.forward` with `focalPoint.transform.forward`

```cs
public class PlayerController : MonoBehaviour
{
    private GameObject focalPoint;
    
    void Start()
    {
        focalPoint = GameObject.Find("Focal Point");
    }

    // Update is called once per frame
    void Update()
    {
        playerRb.AddForce(focalPoint.transform.forward * (speed * fowardInput));
    }
}
```

> 可选：花点时间来尝试一下 `Global` 与 `Local` 切换菜单，看看两者之间的切换如何改变坐标和定位。

![image](https://unity-connect-prd.storage.googleapis.com/20231214/learn/images/08f436eb-b052-4623-a97d-1e2f4da5a364_image.png)




#### 4.2.1 添加敌人和物理材料（physics material）

New Functionality:
- Enemy spawns at random location on the island
- Enemy follows the player around 
- Spheres bounce off of each other 

New Concepts and Skills:
- Physics Materials
- Defining vectors in 3D space
- Normalizing values
- Methods with return values

设置一个敌人，并给他们一些特殊的新物理来反弹玩家！

1. Create a new Sphere, rename it `“Enemy”` reposition it, and drag a texture onto it
2. Add a new `RigidBody` component and adjust its XYZ scale, then test
3. In a new “Physics Materials” folder, `Create > Physics Material`, then name it `“Bouncy”`
4. Increase the `Bounciness` to “1”, change `Bounce Combine to “Multiply”`,  apply it to your player and enemy, then test


#### 4.2.2 创建敌人脚本来追逐玩家

告诉敌人跟随玩家的位置，在岛上追逐他们。

1. Make a `new “Enemy” script` and attach it to the Enemy
2. Declare 3 new variables for  Rigidbody enemyRb;, GameObject player;, and public float speed;
3. Initialize enemyRb = GetComponent<Rigidbody>();  and  player = GameObject.Find("Player");
4. In Update(), `AddForce towards in the direction between the Player and the Enemy`

```cs
public class Enemy : MonoBehaviour
{
    public float speed;

    private Rigidbody enemyRb;

    private GameObject player;
    
    
    // Start is called before the first frame update
    void Start()
    {
        enemyRb = GetComponent<Rigidbody>();
        player = GameObject.Find("Player");
    }

    // Update is called once per frame
    void Update()
    {
        enemyRb.AddForce((player.transform.position - transform.position).normalized * speed);
    }
}
```


#### 4.2.4. 创建 enemy 的 Spawn Manager 

现在敌人的行为完全按照我们的意愿进行，我们将把它变成一个预制件，这样它就可以被 Spawn Manager 实例化了。

1. ` Drag Enemy into the Prefabs folder` to create a new Prefab, then `delete` Enemy from scene
2. Create a `new “Spawn Manager” object`, attach a `new “SpawnManager” script`, and open it
3. Declare a new public GameObject enemyPrefab variable then assign the prefab in the inspector
4. In Start(), `instantiate` a new enemyPrefab at a predetermined location
5. In `SpawnManager.cs`, in Start(), create` new randomly generated X and Z`
6. Create a `new Vector3 spawnPos` variable with those random X and Z positions
7. Incorporate the new spawnPos variable into `the Instantiate call`
8. `Replace the hard-coded values` with a `spawnRange` variable
9. Start and Restart your project to make sure it’s working
10. Create a new function `Vector3 GenerateSpawnPosition() { }`
11. Copy and Paste the spawnPosX and spawnPosZ variables into the new method
12. Add the line to return randomPos; in your new method
13. `Replace` the code in your Instantiate call with your new function name: `GenerateSpawnPosition() `

```cs
public class SpawnManager : MonoBehaviour
{
    public GameObject enemyPrefab; // 定义一个公共的游戏对象变量，用于存储敌人预制体

    private float _spawnRange = 9; // 定义一个私有的浮点型变量，表示生成敌人的范围

    // Start is called before the first frame update
    void Start()
    {
        // 在游戏开始时生成一个敌人，位置由GenerateSpawnPosition()函数确定，旋转与enemyPrefab相同
        Instantiate(enemyPrefab, GenerateSpawnPosition(), enemyPrefab.transform.rotation);
    }

    // Update is called once per frame
    void Update()
    {
        // 在每一帧更新时执行的内容，暂时为空
    }

    // 生成敌人的位置
    Vector3 GenerateSpawnPosition()
    {
        // 生成一个随机的X坐标和Z坐标，范围在-_spawnRange和_spawnRange之间
        float spawnPosX = Random.Range(-_spawnRange, _spawnRange);
        float spawnPosZ = Random.Range(-_spawnRange, _spawnRange);
        // 返回一个新的Vector3对象，表示生成敌人的位置，Y轴为0
        return new Vector3(spawnPosX, 0, spawnPosZ);
    }
}
```

#### 4.3.1. 选择并准备一个 powerup

New Functionality:
- When the player collects a powerup, a visual indicator appears
- When the player collides with an enemy while they have the powerup, the enemy goes flying
- After a certain amount of time, the powerup ability and indicator disappear

New Concepts and Skills:
- Debug concatenation
- Local component variables 
- IEnumerators and WaitForSeconds()
- Coroutines
- SetActive(true/false) 


为了给这个项目添加一个全新的游戏机制，我们将引入一个新的powerup对象，它将给玩家临时的超能力。

1. From the `Library`, drag a `Powerup` object into the scene, rename it “Powerup” and edit its scale & position
2. Add a `Box Collider` to the powerup, click Edit Collider to make sure it fits, then check the `“Is Trigger”` checkbox
3. Create a `new “Powerup” tag` and apply it to the powerup
4. Drag the Powerup into the `Prefabs` folder to create a new “Original Prefab”

#### 4.3.2. 碰撞时破坏 powerup

作为让 powerup 工作的第一步，我们将在玩家点击它时使它消失，并设置一个新的布尔变量来跟踪玩家获得它的情况。

1. In `PlayerController.cs`, add a new `OnTriggerEnter()` method
2. Add an if-statement that destroys `other.CompareTag("Powerup")` powerup on collision
3. Create a new public bool `hasPowerup`; and set hasPowerup = true;  when you collide with the Powerup

#### 测试 powerup 与 enemy
4. Create a `new “Enemy” tag` and apply it to the Enemy Prefab
5. In PlayerController.cs, add the `OnCollisionEnter()` function
6. Create the if-statement with the double-condition `testing for enemy tag and hasPowerup boolean`
7. Create a `Debug.Log` to make sure it’s working

#### 对 powerup 应用额外的 knock back
8. In `OnCollisionEnter()` declare a new local variable to `get the Enemy’s Rigidbody component `
9.  Declare a new `variable` to `get the direction away from the player`
10. Add an `impulse force` to the enemy, using a new `powerupStrength` variable

#### 为 powerup 创建倒计时 Routine
1. Add a new `IEnumerator` `PowerupCountdownRoutine () {}`
2. Inside the PowerupCountdownRoutine, `wait 7 seconds`, then disable the powerup 
3. When player collides with powerup, start the `coroutine`

#### 增加 powerup 指示器
1. From the `Library`, drag a Powerup object into the scene, rename it `Powerup Indicator`, and edit its scale
2. Uncheck the `Active` checkbox in the inspector
3. In `PlayerController.cs`, declare a new public GameObject `powerupIndicator` variable, then assign the Powerup Indicator variable in the inspector
4. When the player collides with the powerup, set the indicator object to Active, then set to Inactive when the powerup expires
5. In `Update()`, set the Indicator position to the player’s position + an offset value


```cs
public class PlayerController : MonoBehaviour
{
    // Rigidbody组件，用于控制玩家角色的物理行为
    private Rigidbody playerRb;
    // 移动速度
    public float speed = 5.0f;

    // 焦点对象
    private GameObject focalPoint;

    // 是否拥有powerup
    public bool hasPowerup;

    // Powerup增强强度
    private float powerupStrength = 15.0f;

    // Powerup指示器对象
    public GameObject powerupIndicator;

    // 在对象被实例化时调用一次
    void Start()
    {
        // 获取玩家角色的Rigidbody组件
        playerRb = GetComponent<Rigidbody>();
        // 查找名为"Focal Point"的游戏对象并赋值给焦点对象
        focalPoint = GameObject.Find("Focal Point");
    }

    // 每帧调用一次
    void Update()
    {
        // 获取垂直方向的输入
        float forwardInput = Input.GetAxis("Vertical");
        // 向前施加力，基于焦点方向和移动速度
        playerRb.AddForce(focalPoint.transform.forward * (speed * forwardInput));
        // 更新Powerup指示器位置
        powerupIndicator.transform.position = transform.position + new Vector3(0, 1.5f, 0);
    }

    // 当玩家与其他Collider发生碰撞时调用
    void OnTriggerEnter(Collider other)
    {
        // 如果碰撞对象标签为"Powerup"
        if (other.CompareTag("Powerup"))
        {
            // 设置拥有Powerup为真
            hasPowerup = true;
            // 销毁碰撞对象
            Destroy(other.gameObject);
            // 启动Powerup计时协程
            StartCoroutine(PowerupCountdownRoutine());
            // 激活Powerup指示器对象
            powerupIndicator.gameObject.SetActive(true);
        }
    }

    // 当玩家与其他物体发生碰撞时调用
    private void OnCollisionEnter(Collision collision)
    {
        // 如果碰撞对象标签为"Enemy"且拥有Powerup
        if (collision.gameObject.CompareTag("Enemy") && hasPowerup)
        {
            // 获取敌人Rigidbody组件
            Rigidbody enemyRigidbody = collision.gameObject.GetComponent<Rigidbody>();
            // 计算远离玩家的方向
            Vector3 awayFromPlayer = (collision.gameObject.transform.position - transform.position);
            // 输出碰撞信息到控制台
            Debug.Log("Collided with " + collision.gameObject.name + " with powerup set to " + hasPowerup);
            // 对敌人施加力，基于远离玩家的方向和Powerup增强强度
            enemyRigidbody.AddForce(awayFromPlayer * powerupStrength, ForceMode.Impulse);
        }
    }

    // Powerup计时协程
    IEnumerator PowerupCountdownRoutine()
    {
        // 等待7秒
        yield return new WaitForSeconds(7);
        // 设置拥有Powerup为假
        hasPowerup = false;
        // 关闭Powerup指示器对象
        powerupIndicator.gameObject.SetActive(false);
    }
}

```


#### 4.4.1 通过 for-loop 产生3波敌人

- For-loops
- Increment (++) operator
- Custom methods with parameters
- FindObjectsOfType


我们应该通过产生一个以上的敌人来挑战玩家。为了做到这一点，我们将使用循环重复敌人实例化。

1. In `SpawnManager.cs`, in Start(), replace single Instantiation with a for-loop that spawns 3 enemies
2. Move the for-loop to a new void `SpawnEnemyWave()` function, then call that function from Start()



#### 4.4.2. 通过参数指定产生敌人波次数量

现在，SpawnEnemyWave只产生3个敌人，但如果我们要动态增加游戏期间产生的敌人数量，我们需要能够传递信息给该方法。

3. Add a parameter int `enemiesToSpawn` to the `SpawnEnemyWave` function 
4. Replace `i < __` with `i < enemiesToSpawn`
5. Add this new variable to the function call in `Start(): SpawnEnemyWave(___)`; 

```cs
public class SpawnManager : MonoBehaviour // 声明 SpawnManager 类，继承自 MonoBehaviour 类
{
    public GameObject enemyPrefab; // 可在 Unity 编辑器中设置的敌人预制体

    private float _spawnRange = 9; // 生成敌人的范围

    // Start is called before the first frame update
    void Start() // 当游戏对象被激活时调用的方法
    {
        SpawnEnemyWave(3); // 生成初始敌人波
    }

    // 生成一个随机的生成位置
    Vector3 GenerateSpawnPosition() // 生成敌人的随机位置方法
    {
        float spawnPosX = Random.Range(-_spawnRange, _spawnRange); // 在指定范围内生成随机 X 坐标
        float spawnPosZ = Random.Range(-_spawnRange, _spawnRange); // 在指定范围内生成随机 Z 坐标
        return new Vector3(spawnPosX, 0, spawnPosZ); // 返回随机生成的位置坐标
    }

    // 生成指定数量的敌人波
    void SpawnEnemyWave(int enemiesToSpawn) // 生成敌人波的方法，参数为要生成的敌人数量
    {
        for (int i = 0; i < enemiesToSpawn; i++) // 循环生成指定数量的敌人
        {
            Instantiate(enemyPrefab, GenerateSpawnPosition(), enemyPrefab.transform.rotation); // 实例化敌人预制体在随机位置
        }
    }
}

```

#### 4.4.3. 摧毁跌出平台的敌人

一旦玩家摆脱了所有的敌人，他们会感到有点孤独。我们需要摧毁那些倒下的敌人，并在最后一个被征服后产生一个新的敌人浪潮！

1. In `Enemy.cs`, destroy the enemies if their position is less than a `-Y` value
2. In `SpawnManager.cs`, declare a new public int `enemyCount` variable
3. In Update(), set `enemyCount = FindObjectsOfType<Enemy>().Length`;
4. Write the if-statement that if `enemyCount == 0` then `SpawnEnemyWave`, then delete it from `Start()`

```cs
public class Enemy : MonoBehaviour
{
    // Update is called once per frame
    void Update()
    {

        if (transform.position.y < -10)
        {
            Destroy(gameObject);
        }
    }
}
```

```cs
public class SpawnManager : MonoBehaviour
{
    public int enemyCount;

    // Update is called once per frame
    void Update()
    {
        enemyCount = FindObjectsOfType<Enemy>().Length;
        if (enemyCount == 0)
        {
            SpawnEnemyWave(1);
        }
    }
}
```

#### 4.4.4. 每一波次增加敌人的产生数量

现在我们控制了敌人的数量，我们应该增加他们的数量。每次玩家击败一波敌人，就会有更多的人站起来取代他们的位置。

5. Declare a new `public int waveNumber = 1`;, then implement it in `SpawnEnemyWave(waveNumber)`; 
6. In the if-statement that tests if there are 0 enemies left, increment waveCount by 1 


#### 4.4.5. 每个波次产生新的 powerup

我们的游戏快完成了，但我们错过了一些东西。

敌人继续随着每一波产生，但 powerup 被使用一次并永远消失，让玩家容易受到攻击。

我们需要在每一个波浪的随机位置产生 powerup ，这样玩家就有机会反击。

```cs
public class SpawnManager : MonoBehaviour // 定义 SpawnManager 类，继承自 MonoBehaviour 类
{
    public GameObject enemyPrefab; // 可在 Unity 编辑器中指定的敌人预制体对象

    private float _spawnRange = 9; // 敌人生成范围的半径

    public int enemyCount; // 当前场景中的敌人数量

    public int waveNumber = 1; // 当前波次数，默认为 1

    public GameObject powerupPrefab; // 可在 Unity 编辑器中指定的道具预制体对象
    
    void Start() // 当游戏开始时执行的函数
    {
        SpawnEnemyWave(waveNumber); // 生成敌人波次

        Instantiate(powerupPrefab, GenerateSpawnPosition(), powerupPrefab.transform.rotation); // 生成道具
    }

    // Update is called once per frame
    void Update() // 每帧调用的函数
    {
        enemyCount = FindObjectsOfType<Enemy>().Length; // 统计当前场景中的敌人数量
        if (enemyCount == 0) // 如果敌人数量为 0
        {
            waveNumber++; // 波次数加一
            SpawnEnemyWave(waveNumber); // 生成下一波敌人

            Instantiate(powerupPrefab, GenerateSpawnPosition(), powerupPrefab.transform.rotation); // 生成道具
        }
    }

    Vector3 GenerateSpawnPosition() // 生成敌人或道具的随机位置
    {
        float spawnPosX = Random.Range(-_spawnRange, _spawnRange); // 随机生成 x 坐标
        float spawnPosZ = Random.Range(-_spawnRange, _spawnRange); // 随机生成 z 坐标
        return new Vector3(spawnPosX, 0, spawnPosZ); // 返回生成位置的 Vector3 对象
    }

    void SpawnEnemyWave(int enemiesToSpawn) // 生成指定数量的敌人波次
    {
        for (int i = 0; i < enemiesToSpawn; i++) // 循环生成指定数量的敌人
        {
            Instantiate(enemyPrefab, GenerateSpawnPosition(), enemyPrefab.transform.rotation); // 生成敌人对象
        }
    }
}

```


#### Challenge 4 - Soccer Scripting
在一个完全不同的环境中使用你在相扑之战原型中学到的技能：足球场。

就像在原型中一样，你将通过围绕它旋转摄像机并施加向前的力来控制球，但不是把它们从边缘撞下来，你的目标是在它们试图进入你的网时把它们撞到对方的网中。

就像相扑战一样，每一回合后都会有一个新的波会产生更多的敌人球，考验你的防御力。

然而，这个项目几乎没有任何东西在运行！你的工作就是让它正常工作。

Challenge Outcome:
- Enemies move towards your net, but you can hit them to deflect them away
- Powerups apply a temporary strength boost, then disappear after 5 seconds
- When there are no more enemy balls, a new wave spawns with 1 more enemy 


##### FindGameObjectsWithTag 和 FindObjectsOfType 有什么区别
FindGameObjectsWithTag 和 FindObjectsOfType 是 Unity 中用于查找游戏对象的两个不同方法

FindGameObjectsWithTag 通常用于按标签查找游戏对象，例如查找所有敌人、道具等具有相同标签的对象。
FindObjectsOfType 通常用于按组件类型查找游戏对象，例如查找场景中所有的敌人、所有的道具等具有相同组件类型的对象。

在性能方面，FindGameObjectsWithTag 的效率通常要比 FindObjectsOfType 高，因为按标签查找只需遍历带有指定标签的游戏对象，而按组件类型查找需要遍历场景中所有游戏对象，并检查其是否拥有指定的组件类型。

综上所述，FindGameObjectsWithTag 用于按标签查找游戏对象，而 FindObjectsOfType 用于按组件类型查找游戏对象

```cs
enemyCount = GameObject.FindGameObjectsWithTag("Enemy").Length;

enemyCount = FindObjectsOfType<Enemy>().Length;
```

#### GetComponent
```cs
void OnCollisionEnter(Collision collision) {
    if (collision.gameObject.CompareTag("Enemy")) {
        Rigidbody enemyRb = collision.gameObject.GetComponent<Rigidbody>();
    }
}
```


### CWC 2 Unit 5 - User Interface
#### Lesson 5.1 - Clicky Mouse

到了最后一个单元的时间了！我们将首先创建一个新项目并导入启动文件，然后将游戏视图切换到2D。

接下来，我们将为玩家创建一个目标对象列表：三个“好”对象和一个“坏”对象。

目标在地图底部的随机位置产卵后将发射旋转到空中。

最后，我们将允许玩家摧毁他们与点击！

项目成果：

三个好目标对象和一个坏目标对象的列表将在屏幕底部的随机位置产生，以随机的力量和扭矩将自己推入空中。

这些目标将在玩家点击他们或他们掉出边界时被摧毁。

#### 5.1.1. 创建 project 并 切换到 2D view

New Functionality:
- Random objects are tossed into the air on intervals
- Objects are given random speed, position, and torque
- If you click on an object, it is destroyed

New Concepts and Skills: 
- 2D View
- AddTorque 
- Game Manager
- Lists
- While Loops
- Mouse Events


1. Open `Unity Hub` and create an empty `“Prototype 5`” project in your course directory on the correct Unity version. 
2. If you forget how to do this, refer to the instructions in Lesson 1.1 - Step 1
3. Click to download the Prototype 5 Starter Files, extract the compressed folder, and then import the .unitypackage into your project. 
4. If you forget how to do this, refer to the instructions in Lesson 1.1 - Step 2
5. Open the Prototype 5 scene, then delete the sample scene without saving
6. Click on the `2D icon` in Scene view to put Scene view in `2D`. 
7. (optional) Change the texture and color of the `background` and the color of the `borders`


#### 5.1.2. 创建 good 和 bad 目标

> 在游戏中，我们首先需要收集三个好的对象，一个坏的对象要避免。什么是好的，什么是坏的，由你来决定。

1. From the `Library`, drag 3 “good” objects and 1 “bad” object into the Scene, rename them “Good 1”, “Good 2”, “Good 3”, and “Bad 1”
2. Add `Rigid Body` and `Box Collider` components, then make sure that Colliders surround objects properly
3. Create a new Scripts folder, a new `Target.cs` script inside it, attach it to the Target objects
4. Drag all 4 targets into the `Prefabs folder` to create “original prefabs”, then delete them from the scene

#### 5.1.3. 随机地上抛目标

> 现在我们有了4个目标预制件，具有相同的脚本，我们需要用随机的力，扭矩和位置将它们抛向空中。

1. In `Target.cs`, declare a new `private Rigidbody targetRb`; and initialize it in `Start()`
2. In `Start()`, add an `upward force` multiplied by `a randomized speed`
3. Add a `torque` with randomized `xyz values`
4. Set the `position` with a randomized `X value`

#### 5.1.4. 抽象新方法优化混乱的代码

> 我们不再让随机的力、扭矩和位置使Start（）函数变得混乱和不可读，而是将它们存储在全新的、明确命名的自定义方法中。

1. Declare and initialize new private float variables for `minSpeed`, `maxSpeed`, `maxTorque`, `xRange`, and `ySpawnPos`;
2. Create a new function for Vector3 `RandomForce()` and call it in `Start()`
3. Create a new function for float `RandomTorque()`, and call it in `Start()`
4. Create a new function for `RandomSpawnPos()`, have it return a new Vector3 and call it in `Start() `

#### 5.1.5. 在 Game Manager 中创建 object list

> 接下来我们应该做的是为这些对象创建一个列表。而不是为这些产卵功能制作一个产卵管理器，我们将制作一个游戏管理器，它也将控制游戏状态稍后。

1. Create a new `Game Manager` Empty object.
2. Create a new `GameManager.cs` script, attach it to the Game Manager GameObject in the Hierarchy window, then open it.
3. Declare a `new public List<GameObject> targets`;, then in the Game Manager inspector, change the list `Size` to `4` and assign your prefabs. 

> 注：在Unity的较新版本中，您可以通过转到Hierarchy窗口左上角的+号或右键单击Hierarchy窗口来创建新的GameObject。

![image](https://unity-connect-prd.storage.googleapis.com/20231214/learn/images/f524d057-82f7-42da-a26c-d01fe25e0627_image.png)

#### 5.1.6. 创建 coroutine 来产生 objects

> 既然我们有了一个对象预置列表，我们应该在游戏中使用协程和一种新的循环来实例化它们。

1. Declare and initialize a `new private float spawnRate` variable
2. Create a new `IEnumerator` `SpawnTarget()` method 
3. Inside the new method, `while(true), wait 1 second`, generate a `random index`,  and `spawn a random target`
4. In `Start()`, use the `StartCoroutine` method to begin spawning objects

```cs
public class GameManager : MonoBehaviour
{
    // 定义私有变量spawnRate，表示目标生成的速率
    private float spawnRate = 1;
    
    // 定义公共列表targets，存储目标对象
    public List<GameObject> targets;

    // Start方法，在游戏启动时调用
    void Start()
    {
        // 启动协程SpawnTarget，用于生成目标
        StartCoroutine(SpawnTarget());
    }

    // Update方法，在每一帧调用
    void Update()
    {
        // 此处暂无内容
    }

    // 生成目标的协程方法
    IEnumerator SpawnTarget()
    {
        // 循环生成目标
        while (true)
        {
            // 等待一定时间后再生成下一个目标
            yield return new WaitForSeconds(spawnRate);
            // 随机选择一个目标对象
            int index = Random.Range(0, targets.Count);
            // 实例化选定的目标对象
            Instantiate(targets[index]);
        }
    }
}


```

#### 5.1.7. 通过 click 和 sensor 来摧毁目标

> 现在我们的目标正在产卵并被抛向空中，我们需要一种方法让玩家用点击摧毁他们。我们还需要摧毁任何落在屏幕下面的目标。

1. In `Target.cs`, add a new method for `private void OnMouseDown() { }` , and inside that method, destroy the gameObject
2. Add a new method for `private void OnTriggerEnter(Collider other)` and inside that function, destroy the gameObject

```cs
public class Target : MonoBehaviour
{
    private Rigidbody _targetRb; // Rigidbody组件，用于控制物体的物理行为
    private float _minSpeed = 12; // 最小速度
    private float _maxSpeed = 16; // 最大速度
    private float _maxTorque = 10; // 最大扭矩
    private float _xRange = 4; // X轴范围
    private float _ySpawnPos = -6; // Y轴生成位置

    void Start()
    {
        // 获取物体的Rigidbody组件
        _targetRb = GetComponent<Rigidbody>();
        
        // 施加随机方向的冲量
        _targetRb.AddForce(RandomForce(), ForceMode.Impulse);
        
        // 施加随机方向的扭矩
        _targetRb.AddTorque(RandomTorque(), RandomTorque(), RandomTorque(), ForceMode.Impulse);
        
        // 设置物体的随机生成位置
        transform.position = RandomSpawnPos();
    }

    void Update()
    {
        // 每帧更新，留空
    }

    // 生成随机方向的冲量
    Vector3 RandomForce()
    {
        return Vector3.up * Random.Range(_minSpeed, _maxSpeed);
    }

    // 生成随机扭矩
    float RandomTorque()
    {
        return Random.Range(-_maxTorque, _maxTorque);
    }

    // 生成随机生成位置
    Vector3 RandomSpawnPos()
    {
        return new Vector3(Random.Range(-_xRange, _xRange), _ySpawnPos);
    }

    // 当物体被点击时销毁
    private void OnMouseDown()
    {
        Destroy(gameObject);
    }

    // 当物体进入触发器时销毁
    private void OnTriggerEnter(Collider other)
    {
        Destroy(gameObject);
    }
}

```


#### 5.2.1. 添加 Score Text 并将其置于屏幕中

New Functionality:
- There is a UI element for score on the screen
- The player’s score is tracked and displayed by the score text when hit a target
- There are particle explosions when the player gets an object

New Concepts and Skills:
- TextMeshPro 
- Canvas
- Anchor Points
- Import Libraries
- Custom methods with parameters
- Calling methods from other scripts


> 为了在屏幕上显示分数，我们需要添加第一个UI元素。

1. In the `Hierarchy window`,  `right click or select + > UI > TextMeshPro text`, then, if prompted, select the button to `Import TMP Essentials`.
2. Rename the new object `Score Text`, then zoom out to see the canvas in Scene view.
3. Change the `Anchor Point` so that it is anchored from the `upper-left corner`.
   1. Inspector -> React Transform -> 左上角的瞄准框，点击选择模式
4. In the `Inspector window`, change its `Pos X` and `Pos Y` so that it is in the upper-left corner. 
   1. 拖动text到右上角即可


#### 5.2.2. 编辑 Score Text 的 properties

> 既然基本文本已经在场景中并且正确定位，我们应该编辑它的属性，使它看起来漂亮并且具有正确的文本。

1. Change its `text to “Score:”`
2. Choose a `Font Asset`, `Style`, `Size`, and `Vertex color` to look good with your background

> 注意：在Unity的较新版本中，可以在其中编辑文本、字体等的组件名称为Text Mesh Pro—Text（UI）。

![image](https://unity-connect-prd.storage.googleapis.com/20231214/learn/images/74d3c4e2-843b-436c-bd9d-4fae44a254f4_image.png)

#### 5.2.3. 实例化 score text 和 variable

> 我们有一个很好的地方来显示分数在UI中，但没有显示任何东西！我们需要UI来显示一个得分变量，这样玩家就可以跟踪他们的得分。

1. At the top of `GameManager.cs`, add `using TMPro;`
2. Declare a `new public TextMeshProUGUI scoreText`, then assign that variable in the inspector 
3. Create a `new private int score` variable and initialize it in `Start()` as `score = 0`;
4. Also in `Start()`, set `scoreText.text = "Score: " + score;`

#### 5.2.4. 创建一个新的 UpdateScore 方法

> score文本完美地显示score变量，但它永远不会更新。我们需要编写一个新的函数，它可以在UI中显示点。

1. Create a `new private void UpdateScore` method that requires one `int scoreToAdd` parameter
2. Cut and paste `scoreText.text = "Score: " + score;` into the new method, then call `UpdateScore(0)` in `Start()`
3. In `UpdateScore()`, increment the score by adding
4. `score += scoreToAdd`; 
5. Call `UpdateScore(5)` in the `spawnTarget()` function

#### 5.2.5. 当目标被摧毁时增加 Score

> 现在我们有了一个更新分数的方法，当目标被销毁时，我们应该在目标脚本中调用它。

1. In `GameManager.cs`, make the `UpdateScore` method `public`
2. In `Target.cs`, create a reference to `private GameManager gameManager;` 
3. Initialize `GameManager` in `Start()`  using the `Find()` method
4. When a target is `destroyed`, call `UpdateScore(5);`, then `delete` the method call from `SpawnTarget()`


#### 5.2.6. 为每种目标添加分值变量

> 当目标被点击时，分数会被更新，但我们希望给每个目标一个不同的值。好的对象应该在分值上有所不同，坏的对象应该减去分值。

1. In `Target.cs`, create a` new public int pointValue` variable
2. In each of the `Target prefab’s` inspectors, set the `Point Value` to whatever they’re worth, including the bad target’s `negative value`
3. Add the new variable to `UpdateScore(pointValue);`

#### 5.2.7. 添加爆炸粒子

> 分数是完全功能性的，但点击目标是有点...不令人满意。为了增加乐趣，让我们在目标被点击时添加一些爆炸粒子！

1. In `Target.cs`, add a `new public ParticleSystem explosionParticle` variable 
2. For each of your target prefabs, assign a particle prefab from `Course Library > Particles` to the Explosion Particle variable
3. In the `OnMouseDown()` function, instantiate a new explosion prefab


```cs
public class Target : MonoBehaviour
{
    // Rigidbody组件引用，用于给目标添加力和扭矩
    private Rigidbody _targetRb;
    // 目标的最小速度和最大速度
    private float _minSpeed = 12;
    private float _maxSpeed = 16;
    // 目标的最大扭矩
    private float _maxTorque = 10;
    // 目标生成的x轴范围
    private float _xRange = 4;
    // 目标生成的y轴位置
    private float _ySpawnPos = -6;

    // 游戏管理器的引用
    private GameManager _gameManager;

    // 目标的得分值
    public int pointValue;
    // 爆炸效果的粒子系统
    public ParticleSystem explosionParticle;

    // Start函数在目标对象被实例化时调用
    void Start()
    {
        // 获取目标的Rigidbody组件
        _targetRb = GetComponent<Rigidbody>();
        // 给目标添加随机方向的冲力
        _targetRb.AddForce(RandomForce(), ForceMode.Impulse);
        // 给目标添加随机方向的扭矩
        _targetRb.AddTorque(RandomTorque(), RandomTorque(), RandomTorque(), ForceMode.Impulse);
        // 设置目标的初始位置
        transform.position = RandomSpawnPos();
        
        // 获取游戏管理器的引用
        _gameManager = GameObject.Find("Game Manager").GetComponent<GameManager>();
    }

    // Update函数每帧调用一次
    void Update()
    {
    }

    // 生成随机方向的冲力
    Vector3 RandomForce()
    {
        return Vector3.up * Random.Range(_minSpeed, _maxSpeed);
    }

    // 生成随机方向的扭矩
    float RandomTorque()
    {
        return Random.Range(-_maxTorque, _maxTorque);
    }

    // 生成随机位置
    Vector3 RandomSpawnPos()
    {
        return new Vector3(Random.Range(-_xRange, _xRange), _ySpawnPos);
    }

    // 当目标被点击时调用
    private void OnMouseDown()
    {
        // 销毁目标对象
        Destroy(gameObject);
        // 实例化爆炸效果
        Instantiate(explosionParticle, transform.position, explosionParticle.transform.rotation);
        // 更新游戏得分
        _gameManager.UpdateScore(pointValue);
    }

    // 当其他碰撞器进入目标触发器时调用
    private void OnTriggerEnter(Collider other)
    {
        // 销毁目标对象
        Destroy(gameObject);
    }
}
```

```cs
using TMPro; // 引入TextMeshProUGUI库

public class GameManager : MonoBehaviour // GameManager类，继承自MonoBehaviour
{
    private float _spawnRate = 1; // 私有变量，表示生成速率，默认为1
    
    public List<GameObject> targets; // 公有列表，存储GameObject对象，表示游戏中的目标
    private int _score; // 私有变量，表示游戏分数
    public TextMeshProUGUI scoreText; // 公有变量，表示用于显示分数的TextMeshProUGUI对象

    void Start() // Start方法，在游戏开始时调用
    {
        StartCoroutine(SpawnTarget()); // 开始生成目标

        _score = 0; // 分数初始化为0
        UpdateScore(0); // 更新显示分数为0
    }

    // Update is called once per frame
    void Update() // Update方法，每帧调用一次
    {
        // 在此处可以编写游戏逻辑，但当前代码中未实现任何内容
    }

    IEnumerator SpawnTarget() // 生成目标的协程方法
    {
        while (true) // 无限循环，用于持续生成目标
        {
            yield return new WaitForSeconds(_spawnRate); // 等待一定时间后执行后续代码
            int index = Random.Range(0, targets.Count); // 随机选择目标列表中的一个目标
            Instantiate(targets[index]); // 在场景中生成选择的目标对象
        }
    }

    public void UpdateScore(int scoreToAdd) // 更新分数的公有方法，接收一个分数增加值作为参数
    {
        _score += scoreToAdd; // 增加分数
        scoreText.text = "Score: " + _score; // 更新分数显示文本
    }
}
```

#### 5.3.1. 创建 Game Over text object

New Functionality:
- A functional Game Over screen with a Restart button
- When the Restart button is clicked, the game resets

New Concepts and Skills: 
- Game states 
- Buttons
- On Click events
- Scene management Library
- UI Library
- Booleans to control game states


> 如果我们想在游戏结束时出现一些“Game Over”文本，我们要做的第一件事就是创建并定制一个新的UI文本元素，上面写着“Game Over”。

1. Right-click on the `Canvas`, create a `new UI > TextMeshPro - Text object`, and rename it “Game Over Text”
2. In the inspector, edit its `Text`, `Pos X`, `Pos Y`, `Font Asset`, `Size`, `Style`, `Color`, and `Alignment`
3. Set the `Wrapping` setting to `Disabled`
   1. Inspector -> TextMeshPro - Text(UI) -> Main settings -> wrapping

#### 5.3.2. Make GameOver text appear

> 我们有一些美丽的游戏结束文本在屏幕上，但它只是坐在和阻挡我们的视线现在。我们应该关闭它，这样游戏结束时它就能重新出现。

1. In `GameManager.cs`, create a `new public TextMeshProUGUI gameOverText`; and assign the Game Over object to it in the inspector
2. `Uncheck` the `Active` checkbox to deactivate the Game Over text by default
3. In `Start()`, `activate` the Game Over text

#### 5.3.3. Create GameOver function

> 我们暂时让“游戏结束”文本出现在游戏开始时，但实际上我们希望在其中一个“好”对象丢失并掉落时触发它。

1. Create a `new public void GameOver()` function, and `move` the code that activates the game over text inside it
2. In `Target.cs`, call `gameManager.GameOver()` if a target collides with the `sensor`
3. Add a new “Bad” tag to the Bad object, add a condition that will only trigger game over if it’s not a bad object



#### 5.3.4. GameOver 后停止产生目标和分数变化

> “游戏结束”消息会在我们想要的时候出现，但游戏本身会继续进行。为了真正停止游戏并称之为“游戏结束”，我们需要停止生成目标并停止为玩家生成分数。

1. Create a `new public bool isGameActive`;
2. As the first line In `Start()`, set `isGameActive = true;` and in `GameOver()`, set `isGameActive = false`;
3. To prevent spawning, in the `SpawnTarget()` coroutine, change `while (true)` to `while (isGameActive)`
4. To prevent scoring, in `Target.cs`, in the `OnMouseDown()` function, add the condition `if (gameManager.isGameActive) {}`

#### 5.3.5. 添加 Restart button

> 我们的游戏结束机制工作得像一个魅力，但没有办法重播游戏。为了让玩家重新启动游戏，我们将创建我们的第一个UI按钮

1. Right-click on the `Canvas` and `Create > UI > Button - TextMeshPro. `
2. `Rename` the button “Restart Button”
3. Temporarily `reactivate` the Game Over text in order to `reposition` the Restart Button nicely with the text, then `deactivate` it again 
4. Select the Text `child object`, then edit its Text to say `Restart`, its Font, Style, and Size
   1. 注意改text input是在btn的 child object

#### 5.3.6. Make the restart button work

> 我们在场景中添加了重启按钮，看起来不错，但现在我们需要让它真正工作并重启游戏。

1. In `GameManager.cs`, add `using UnityEngine.SceneManagement;`
2. Create a `new public void RestartGame()` function that reloads the current scene
3. In the Button’s inspector, `click + to add a new On Click event`, drag it in the Game Manager object and select the `GameManager.RestartGame` function
   1. Inspector -> Button -> On Click() -> +

#### 5.3.7. Show restart button on game over

> 重新启动按钮看起来很棒，但我们不希望它在我们的脸上整个游戏。类似于“游戏结束”消息，我们将在游戏激活时关闭重启按钮。

1. At the `top of GameManager.cs` add `using UnityEngine.UI;`
2. Declare a `new public Button restartButton;` and assign the Restart Button to it in the inspector
3. Uncheck the “Active” checkbox for the Restart Button in the inspector
4. In the GameOver function, activate the Restart Button


```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    private float _spawnRate = 1; // 控制目标生成速率

    public List<GameObject> targets; // 存储所有可能生成的目标
    private int _score; // 当前得分
    public TextMeshProUGUI scoreText; // 显示得分的文本UI
    public TextMeshProUGUI gameOverText; // 显示游戏结束的文本UI
    public bool isGameActive; // 游戏是否在进行中的标志
    public Button restartButton; // 重新开始游戏的按钮

    void Start()
    {
        isGameActive = true; // 设置游戏状态为进行中

        StartCoroutine(SpawnTarget()); // 启动生成目标的协程

        _score = 0; // 初始化得分为0
        UpdateScore(0); // 更新显示得分的UI
    }

    // Update is called once per frame
    void Update()
    {
        // 在Update中暂时没有需要执行的逻辑
    }

    IEnumerator SpawnTarget()
    {
        while (isGameActive) // 只要游戏处于进行中状态
        {
            yield return new WaitForSeconds(_spawnRate); // 等待一定时间后执行下一次生成目标的逻辑
            int index = Random.Range(0, targets.Count); // 随机选择一个目标
            Instantiate(targets[index]); // 生成选定的目标
        }
    }

    public void UpdateScore(int scoreToAdd)
    {
        _score += scoreToAdd; // 更新得分
        scoreText.text = "Score: " + _score; // 更新显示得分的UI文本
    }

    public void GameOver()
    {
        gameOverText.gameObject.SetActive(true); // 激活游戏结束文本UI
        isGameActive = false; // 设置游戏状态为结束

        restartButton.gameObject.SetActive(true); // 激活重新开始游戏的按钮
    }

    public void RestartGame()
    {
        SceneManager.LoadScene((SceneManager.GetActiveScene().name)); // 重新加载当前场景，即重新开始游戏
    }
}

```

```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    private float _spawnRate = 1; // 控制目标生成速率

    public List<GameObject> targets; // 存储所有可能生成的目标
    private int _score; // 当前得分
    public TextMeshProUGUI scoreText; // 显示得分的文本UI
    public TextMeshProUGUI gameOverText; // 显示游戏结束的文本UI
    public bool isGameActive; // 游戏是否在进行中的标志
    public Button restartButton; // 重新开始游戏的按钮

    void Start()
    {
        isGameActive = true; // 设置游戏状态为进行中

        StartCoroutine(SpawnTarget()); // 启动生成目标的协程

        _score = 0; // 初始化得分为0
        UpdateScore(0); // 更新显示得分的UI
    }

    // Update is called once per frame
    void Update()
    {
        // 在Update中暂时没有需要执行的逻辑
    }

    // 协程：生成目标
    IEnumerator SpawnTarget()
    {
        while (isGameActive) // 只要游戏处于进行中状态
        {
            yield return new WaitForSeconds(_spawnRate); // 等待一定时间后执行下一次生成目标的逻辑
            int index = Random.Range(0, targets.Count); // 随机选择一个目标
            Instantiate(targets[index]); // 生成选定的目标
        }
    }

    // 更新得分
    public void UpdateScore(int scoreToAdd)
    {
        _score += scoreToAdd; // 更新得分
        scoreText.text = "Score: " + _score; // 更新显示得分的UI文本
    }

    // 游戏结束
    public void GameOver()
    {
        gameOverText.gameObject.SetActive(true); // 激活游戏结束文本UI
        isGameActive = false; // 设置游戏状态为结束

        restartButton.gameObject.SetActive(true); // 激活重新开始游戏的按钮
    }

    // 重新开始游戏
    public void RestartGame()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name); // 重新加载当前场景，即重新开始游戏
    }
}

```


#### 5.4.1. 闯进 Title text 和 menu buttons

New Functionality
- Title screen that lets the user start the game
- Difficulty selection that affects spawn rate

New Concepts and Skills:
- `AddListener()` 
- Passing parameters between scripts
- Divide/Assign (/=) operator
Grouping child objects

> 我们应该做的第一件事是创建我们将要需要的所有UI元素。这包括一个大标题，以及三个难度按钮。

1. `Duplicate` your Game Over text to create your `Title` Text, editing its name, text and all of its attributes
2. `Duplicate` your Restart Button and edit its attributes to create an `Easy Button` button
3. Edit and duplicate the `new Easy button` to create a `Medium Button` and a `Hard Button`

#### 5.4.2. 添加 DifficultyButton script

> 我们的难度按钮看起来很棒，但实际上它们并没有做任何事情。如果他们要有自定义的功能，我们首先需要给他们一个新的脚本。

1. For all 3 new buttons, in the Button component, in the `On Click ()` section, click the `minus (-)` button to `remove` the RestartGame functionality
2. Create a `new DifficultyButton.cs` script and attach it to all 3 buttons
3. Add `using UnityEngine.UI` to your imports
4. Create a `new private Button button;` variable and initialize it in `Start() `


#### 5.4.3. Call SetDifficulty on button click

> 现在我们有了一个按钮的脚本，我们可以创建一个 `SetDifferential` 方法，并将该方法与这些按钮的点击联系起来，

1. Create a `new void SetDifficulty` function, and inside it, `Debug.Log(gameObject.name + " was clicked");`
2. Add the `button listener` to call the `SetDifficulty` function


#### 5.4.4. Make your buttons start the game

> 标题屏幕看起来很棒，如果你忽略目标物体反弹，但我们没有办法真正开始游戏。我们需要一个 `StartGame` 函数，可以与 `SetDifferential` 通信。

1. In `GameManager.cs`, create a `new public void StartGame()` function and move everything from `Start()` into it
2. In `DifficultyButton.cs`, create a `new private GameManager gameManager;` and initialize it in `Start()` 
3. In the `SetDifficulty()` function, call `gameManager.StartGame();`

#### 5.4.5. 停用 Title Screen on StartGame

> 如果我们希望游戏开始时标题屏幕消失，我们应该将它们存储在一个空的对象中，而不是单独关闭它们。简单地停用单个空父对象可以减少很多工作量。

1. `Right-click` on the `Canvas` and `Create > Empty Object`, rename it `Title Screen`, and `drag` the 3 buttons and title onto it
2. In `GameManager.cs`, create a `new public GameObject titleScreen;` and assign it in the inspector
3. In `StartGame()`, deactivate the title screen object

#### 5.4.6. Use a parameter to change difficulty

> 难度按钮开始游戏，但它们仍然不会改变游戏的难度。我们要做的最后一件事是实际上让难度按钮影响目标物体产生的速率。

1. In `DifficultyButton.cs`, create a `new public int difficulty variable`, then in the Inspector, assign the Easy difficulty as 1, Medium as 2, and Hard as 3
2. Add an `int difficulty` parameter to the `StartGame()` function
3. In `StartGame(),` set `spawnRate /= difficulty;`
4. Fix the error in `DifficultyButton.cs` by passing the difficulty parameter to `StartGame(difficulty)`

> 可选：尝试在全屏下玩游戏，方法是转到游戏视图右上角的按钮，然后选择最大化播放。

![image](https://unity-connect-prd.storage.googleapis.com/20231214/learn/images/fed6f61a-bf7d-420c-993e-0aab61913718_image.png)

```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    // 私有变量，控制目标生成速率
    private float _spawnRate = 1;
    
    // 存储所有目标对象的列表
    public List<GameObject> targets;

    // 记录玩家得分
    private int _score;

    // 用于显示得分的文本UI
    public TextMeshProUGUI scoreText;

    // 用于显示游戏结束的文本UI
    public TextMeshProUGUI gameOverText;

    // 游戏是否处于激活状态的标志
    public bool isGameActive;

    // 重新开始游戏的按钮
    public Button restartButton;

    // 游戏开始时的标题界面对象
    public GameObject titleScreen;
    
    void Start()
    {
        // 游戏启动时的初始化操作
    }

    // Update is called once per frame
    void Update()
    {
        // 每帧更新操作
    }
    
    // 生成目标的协程
    IEnumerator SpawnTarget()
    {
        // 当游戏处于激活状态时不断生成目标
        while (isGameActive)
        {
            // 等待一定时间后生成目标
            yield return new WaitForSeconds(_spawnRate);

            // 在目标列表中随机选择一个目标生成
            int index = Random.Range(0, targets.Count);
            Instantiate(targets[index]);
        }
    }

    // 更新玩家得分
    public void UpdateScore(int scoreToAdd)
    {
        // 增加得分并更新显示
        _score += scoreToAdd;
        scoreText.text = "Score: " + _score;
    }

    // 游戏结束
    public void GameOver()
    {
        // 显示游戏结束文本并设置游戏状态为非激活
        gameOverText.gameObject.SetActive(true);
        isGameActive = false;
        
        // 显示重新开始按钮
        restartButton.gameObject.SetActive(true);
    }

    // 重新开始游戏
    public void RestartGame()
    {
        // 重新加载当前场景
        SceneManager.LoadScene((SceneManager.GetActiveScene().name));
    }

    // 开始游戏
    public void StartGame(int difficulty)
    {
        // 设置游戏为激活状态
        isGameActive = true;

        // 根据难度调整生成速率
        _spawnRate /= difficulty;
        
        // 启动生成目标的协程
        StartCoroutine(SpawnTarget());

        // 重置得分
        _score = 0;
        UpdateScore(0);
        
        // 关闭标题界面
        titleScreen.gameObject.SetActive(false);
    }
}
```

```cs
using UnityEngine;
using UnityEngine.UI;

public class DifficultyButton : MonoBehaviour
{
    private Button _button; // 按钮组件引用
    private GameManager _gameManager; // GameManager组件引用
    public int difficulty; // 难度参数

    void Start()
    {
        _button = GetComponent<Button>(); // 获取当前游戏对象上的按钮组件
        _button.onClick.AddListener(SetDifficulty); // 为按钮的点击事件添加监听器，当按钮被点击时调用SetDifficulty方法

        _gameManager = GameObject.Find("Game Manager").GetComponent<GameManager>(); // 通过名称查找并获取名为"Game Manager"的游戏对象上的GameManager组件
    }

    // Update is called once per frame
    void Update()
    {
        // 该方法在每一帧更新时调用，但是在这段代码中未做任何操作
    }

    // 设置游戏难度的方法
    void SetDifficulty()
    {
        Debug.Log(gameObject.name + "was clicked"); // 在控制台打印出当前游戏对象的名称以及 "was clicked"，用于调试信息
        
        _gameManager.StartGame(difficulty); // 调用GameManager的StartGame方法，并传入难度参数
    }
}
```

#### 5.4.bonus 2.Easy: Lives UI

Create a "Lives" UI element that counts down by 1 when an object leaves the bottom of the screen and triggers Game Over when Lives reaches 0.


#### 5.4.bonus 3.Medium: 音量

> 添加背景音乐和UI Slider元素来调节音量。 背景音乐为游戏增加了很多能量，但并不是每个人都喜欢它，所以给人们选择降低音量是件好事。

1. Add `Audio Source Obj` and attach it to `Main Camera`, code it in `GameManager.cs`.
2. Add `UI slider` and `UI text` for volume, and code them in `GameManager.cs`
   1. In `Inspector` of `UI slider`, make init volume as `whole number` and set it as `50`
3. Impl `UpdateVolume(float volume)` in `GameManager.cs`, set text volume and change audio source's volume
   1. Note: use `float` volume but int, slider accepts float.
4. Slider -> Inspector -> on value changed -> add (+) -> obj: `GameManager.cs` & func: `UpdateVolume()`
   1. > Note!!!: func choose `Dynamic float` one, which can pass the slider value as the param of func.
   
> 如果想要slider的值传递给绑定func作为入参，需要选择`Dynamic float`

![image](https://i.stack.imgur.com/kFu5q.jpg)
   
#### 5.4.bonus 4.Hard: 暂停菜单

> 在游戏过程中，允许用户按下一个键来在暂停和恢复游戏之间切换，在游戏暂停时会出现暂停屏幕。

1. `GameManager.cs` 中增加 bool 判断是否 pause，update中检查该 bool， 对应触发 `pause()` 和 `resume()`
   1. pause 可以用 `Time.timeScale = 0f; // 将时间缩放设置为 0，游戏暂停`
   2. `audio source` 可以用 `Pause` 和 `UnPause` 控制音乐
   3. TODO: 如何在暂停时禁用除开控制是否暂停以外的玩家输入？
2. Canvas 增加 `UI Image` 设置黑色和透明度做layer， 附加 child text。 pause 时 `setActive(true) `
   1. TODO: 发现Canvas 的 child obj 无法通过 `GameObject.Find()` 获取，待确认


#### 5.4.bonus 5.Expert: Click-and-swipe

> 程序的点击和滑动功能，而不是点击，产生一个痕迹，鼠标被拖动。这确实使游戏更容易，所以如果你实现了这一点，你可能还想增加所有级别的游戏难度。


```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    // 私有变量，控制目标生成速率
    private float _spawnRate = 1;
    
    // 存储所有目标对象的列表
    public List<GameObject> targets;
    // 分数
    private int _score;
    // 生命值
    private int _lives;
    // 音量
    private float _volume;
    // 游戏是否暂停的标志
    private bool _isPaused;
    
    // 显示分数的 TextMeshProUGUI 组件
    public TextMeshProUGUI scoreText;
    // 显示游戏结束的 TextMeshProUGUI 组件
    public TextMeshProUGUI gameOverText;
    // 显示生命值的 TextMeshProUGUI 组件
    public TextMeshProUGUI livesText;
    // 显示音量的 TextMeshProUGUI 组件
    public TextMeshProUGUI volumeText;
    // 显示暂停界面的 Image 组件
    public Image pauseLayer;

    // 背景音乐的 AudioSource 组件
    private AudioSource _backgroundMusic;
    
    // 游戏是否处于激活状态
    public bool isGameActive;
    // 重新开始按钮
    public Button restartButton;
    // 标题界面的游戏对象
    public GameObject titleScreen;
    
    void Start()
    {
        // 获取背景音乐的 AudioSource 组件
        _backgroundMusic = GameObject.Find("Bgm Audio Source").GetComponent<AudioSource>();
        // 初始化音量
        UpdateVolume(50);
    }

    // 每帧调用一次的更新函数
    void Update()
    {
        // 检查游戏是否暂停
        CheckGamePause();

        // 如果游戏暂停，则暂停游戏；否则恢复游戏
        if (_isPaused) PauseGame();
        else ResumeGame();
    }

    // 协程，用于生成目标对象
    IEnumerator SpawnTarget()
    {
        while (isGameActive)
        {
            // 等待指定时间后生成目标对象
            yield return new WaitForSeconds(_spawnRate);
            // 在目标列表中随机选择一个目标对象并生成
            int index = Random.Range(0, targets.Count);
            Instantiate(targets[index]);
        }
    }

    // 更新分数
    public void UpdateScore(int scoreToAdd)
    {
        _score += scoreToAdd;
        scoreText.text = "Score: " + _score;
    }

    // 更新生命值
    public void UpdateLives(int livesToAdd)
    {
        _lives += livesToAdd;
        // 如果生命值为零，游戏结束
        if (_lives == 0)
        {
            GameOver();
        }
        livesText.text = "Lives: " + _lives;
    }

    // 更新音量
    public void UpdateVolume(float volume)
    {
        _volume = volume;
        // 设置背景音乐的音量
        _backgroundMusic.volume = _volume / 100;
        volumeText.text = "Volume: " + volume;
    }

    // 游戏结束
    public void GameOver()
    {
        // 显示游戏结束文本
        gameOverText.gameObject.SetActive(true);
        isGameActive = false;
        
        // 显示重新开始按钮
        restartButton.gameObject.SetActive(true);
    }

    // 检查游戏是否暂停
    void CheckGamePause()
    {
        // 如果按下了 P 键，切换游戏暂停状态
        if (Input.GetKeyDown(KeyCode.P)) _isPaused = !_isPaused;
    }

    // 暂停游戏
    void PauseGame()
    {
        Time.timeScale = 0f; // 将时间缩放设置为 0，游戏暂停
        _isPaused = true; // 更新暂停状态
        pauseLayer.gameObject.SetActive(true); // 显示暂停界面
        _backgroundMusic.Pause(); // 暂停背景音乐
    }

    // 恢复游戏
    void ResumeGame()
    {
        Time.timeScale = 1f; // 恢复正常时间流逝速度
        _isPaused = false; // 更新暂停状态
        pauseLayer.gameObject.SetActive(false); // 隐藏暂停界面
        _backgroundMusic.UnPause(); // 恢复背景音乐
    }

    // 重新开始游戏
    public void RestartGame()
    {
        // 重新加载当前场景
        SceneManager.LoadScene((SceneManager.GetActiveScene().name));
    }

    // 开始游戏
    public void StartGame(int difficulty)
    {
        isGameActive = true;
        // 根据难度调整生成目标的速率
        _spawnRate /= difficulty;
        
        // 启动生成目标的协程
        StartCoroutine(SpawnTarget());

        // 初始化分数
        _score = 0;
        UpdateScore(0);

        // 初始化生命值
        _lives = 3;
        UpdateLives(0);
        
        // 隐藏标题界面
        titleScreen.gameObject.SetActive(false);
    }
}
```

```cs
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Random = UnityEngine.Random;

public class Target : MonoBehaviour
{
    // Rigidbody组件，用于控制目标物体的物理行为
    private Rigidbody _targetRb;
    private float _minSpeed = 12; // 目标最小速度
    private float _maxSpeed = 16; // 目标最大速度
    private float _maxTorque = 10; // 目标最大扭矩
    private float _xRange = 4; // 生成目标的X轴范围
    private float _ySpawnPos = -6; // 生成目标的Y轴位置

    private GameManager _gameManager; // 游戏管理器，用于更新游戏状态和分数

    public int pointValue; // 目标得分值
    public ParticleSystem explosionParticle; // 爆炸特效

    // Start函数，在对象创建时调用
    void Start()
    {
        // 获取目标的Rigidbody组件
        _targetRb = GetComponent<Rigidbody>();
        // 添加随机力到目标上，用于模拟目标初始的随机移动
        _targetRb.AddForce(RandomForce(), ForceMode.Impulse);
        // 添加随机扭矩到目标上，用于模拟目标初始的随机旋转
        _targetRb.AddTorque(RandomTorque(), RandomTorque(), RandomTorque(), ForceMode.Impulse);
        // 设置目标的初始位置
        transform.position = RandomSpawnPos();
        
        // 获取游戏管理器对象并赋值给_gameManager变量
        _gameManager = GameObject.Find("Game Manager").GetComponent<GameManager>();
        
    }

    // Update函数，在每一帧更新时调用
    void Update()
    {
        // 这里不需要任何代码，因为目标的行为在Start函数中设置了初始状态，不需要每一帧更新
    }

    // 生成随机力的函数，返回一个随机的Vector3向量作为力的方向和大小
    Vector3 RandomForce()
    {
        return Vector3.up * Random.Range(_minSpeed, _maxSpeed);
    }

    // 生成随机扭矩的函数，返回一个随机的浮点数作为扭矩的大小
    float RandomTorque()
    {
        return Random.Range(-_maxTorque, _maxTorque);
    }

    // 生成随机生成位置的函数，返回一个随机的Vector3向量作为生成位置
    Vector3 RandomSpawnPos()
    {
        return new Vector3(Random.Range(-_xRange, _xRange), _ySpawnPos);
    }

    // 当鼠标点击目标时调用的函数
    private void OnMouseDown()
    {
        // 检查游戏是否处于活动状态
        if (_gameManager.isGameActive)
        {
            // 销毁目标对象
            Destroy(gameObject);
            // 实例化爆炸特效
            Instantiate(explosionParticle, transform.position, explosionParticle.transform.rotation);
            // 更新游戏得分
            _gameManager.UpdateScore(pointValue);
        }
    }

    // 当其他物体进入目标触发器时调用的函数
    private void OnTriggerEnter(Collider other)
    {
        // 销毁目标对象
        Destroy(gameObject);
        // 如果目标对象不是标记为"Bad"的，则更新游戏生命值
        if (!gameObject.CompareTag("Bad"))
        {
            _gameManager.UpdateLives(-1);
        }
    }
    
    // 当鼠标进入目标时调用的函数
    private void OnMouseEnter()
    {
        // 检查鼠标左键是否按下
        if (Input.GetMouseButton(0))
        {
            // 销毁目标对象
            Destroy(gameObject);
            // 更新游戏得分
            _gameManager.UpdateScore(pointValue);
            // 实例化爆炸特效
            Instantiate(explosionParticle, transform.position, explosionParticle.transform.rotation);
        }
    }
}

```

```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// 添加trail
// 首先在游标后面创建一个空对象
// 将trail渲染器添加到空对象
public class CursorFollow : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        // Start方法在游戏对象被激活时调用，但仅在场景加载时执行一次。
        // 这里可以进行初始化操作，但在此代码示例中并未实现任何内容。
    }

    // Update is called once per frame
    void Update()
    {
        // 获取鼠标在屏幕上的位置
        Vector3 cursorPosition = Input.mousePosition;

        // 将鼠标位置的z坐标设置为10，使其与摄像机距离固定
        cursorPosition.z = 10;

        // 将屏幕上的鼠标位置转换为世界坐标
        Vector3 worldPosition = Camera.main.ScreenToWorldPoint(cursorPosition);

        // 将游戏对象的位置设置为鼠标在世界中的位置，使游戏对象跟随鼠标移动
        transform.position = worldPosition;

        // 检测鼠标左键是否按下
        if (Input.GetMouseButton(0))
        {
            // 如果鼠标左键被按下，则启用TrailRenderer组件，用于显示轨迹效果
            GetComponent<TrailRenderer>().enabled = true;
        }
        else
        {
            // 如果鼠标左键未被按下，则禁用TrailRenderer组件，隐藏轨迹效果
            GetComponent<TrailRenderer>().enabled = false;
        }
    } 
}


```


### CWC 2 Lesson 6.1 - Project Optimization

New Concepts and Skills
- Optimization
- Serialized Fields
- readonly / const / static / protected 
- Event Functions
- FixedUpdate() vs. Update() vs. LateUpdate()
- Awake() vs. Start()
- Object Pooling

#### 1. 变量属性

> 在课程中，我们只使用过 `public` 或 `private` 变量，但还有许多其他变量属性您应该熟悉。

- [SerializeField]
- readonly
- const
- static
- protected

**[SerializeField]**
使用场景：[SerializeField] 是一个属性标记，用于序列化字段。当你想在Unity中将私有字段显示在Inspector面板中时，可以使用该标记。
示例：
```cs
using UnityEngine;

public class Player : MonoBehaviour {
    [SerializeField]
    private int health;
}
```

**readonly**

使用场景：readonly 关键字用于声明只读字段。一旦赋值，`只读字段的值不能再被修改`。通常用于`在构造函数中初始化`只读字段，或在运行时不希望字段的值被修改的情况下使用。
示例：
```cs
public class MyClass {
    private readonly int value = 10;

    public MyClass() {
        // 只读字段可以在构造函数中初始化
        value = 20; 
    }
}
```

**const**

使用场景：const 关键字用于声明常量。常量`在编译时就必须初始化`，并且一旦初始化后就不能再修改。通常用于定义不会改变的值，例如数学常数等。
示例：
```cs
public class MathConstants {
    public const double Pi = 3.14159;
    public const int MaxValue = 100;
}
```

**static**

使用场景：static 关键字用于声明静态成员，包括静态字段、静态方法和静态属性。静态成员属于类而不是类的实例，并且在整个应用程序的生命周期内只有一个副本。

static 关键字可以与 `public` 关键字一起使用。当一个成员（字段、方法、属性等）被声明为 static 且同时使用 public 关键字修饰时，这个成员将成为`公共静态成员`，即可以通过类的名称直接访问，也可以通过类的实例访问。

示例：
```cs
public class Counter {
    private static int count;

    public static void Increment() {
        count++;
    }

    public static int GetCount() {
        return count;
    }
}
```

**protected**

使用场景：protected 关键字用于声明受保护的成员，该成员只能在其所属类或其派生类中访问。通常用于`基类中希望派生类能够访问但不希望公开给外部的成员。`
示例：
```cs
public class Animal {
    protected string name;

    protected void SetName(string newName) {
        name = newName;
    }
}

public class Dog : Animal {
    public void SetDogName(string newName) {
        // 派生类可以访问基类的受保护成员
        SetName(newName);
    }
}
```

#### 2.Unity事件函数

> 在本课程中，我们只使用了默认的 `Update()` 和 `Start()` 事件函数，但您可能想在不同的情况下使用其他函数。

- Update()
- FixedUpdate()
- LateUpdate()


在Unity游戏开发中，Update()、FixedUpdate()和LateUpdate()是MonoBehaviour类中常用的三个方法，它们在游戏运行过程中的不同阶段被调用，各自有着不同的使用场景。

**Update()：**

Update() 方法在每一帧都会被调用，通常用于处理游戏逻辑、玩家输入以及更新游戏对象的状态。
因为它在每一帧都被调用，所以适合用于处理实时性要求高的任务，比如玩家的输入响应、移动、动画更新等。

使用场景：
- 处理玩家输入，例如键盘、鼠标、触摸屏等。
- 实时更新游戏对象的位置、旋转、缩放等属性。
- 实现游戏中的动画效果。
- 进行游戏逻辑的更新，例如碰撞检测、游戏状态判断等。

**FixedUpdate()：**

FixedUpdate() 方法是`在固定的时间间隔内被调用`，通常默认每秒调用50次（可以通过编辑器设置修改），主要用于处理物理相关的计算和操作。
因为物理引擎的计算与帧率无关，因此在固定时间间隔内调用FixedUpdate()可以确保物理模拟的稳定性。

使用场景：
- 处理刚体的运动和碰撞，例如应用力、施加力、速度和角速度等的控制。
- 执行与物理相关的逻辑，如碰撞检测、射线检测等。
- 在多人游戏中，用于同步玩家之间的物理状态。

**LateUpdate()：**

LateUpdate() 方法在每一帧结束时被调用，确保`在Update()方法之后执行`。它通常用于处理与Update()相关的逻辑，但需要等待Update()方法执行完成后才能进行的操作。
比如，当`需要在Update()中更新相机的位置后再进行玩家的跟踪时`，可以将跟踪玩家的逻辑放在LateUpdate()中。

使用场景：
- 更新相机的位置和旋转，跟随玩家的移动。
- 处理其他游戏对象的状态更新，确保在Update()之后进行。
- 在进行一些特殊操作时，确保在Update()之后执行，避免出现不同步的情况。
  
总的来说，Update()适用于处理实时性要求高的任务，FixedUpdate()适用于处理物理相关的计算和操作，而LateUpdate()则适用于在Update()之后执行需要等待的逻辑。合理利用这三个方法可以更好地组织游戏逻辑，提高游戏的表现和性能。

#### 3.对象池 (Object Pooling)

> 在整个课程中，我们创建了许多在游戏过程中实例化和销毁对象的原型，但实际上有一种更高效/更高效的方法来做到这一点，称为 `对象池(Object Pooling)`。

对象池(Object Pooling)是一种软件设计模式，它旨在提高应用程序的性能和效率，特别是`在涉及频繁创建和销毁对象的场景下`，比如游戏开发中。
该模式通过预先创建一组对象，并在需要时重复使用这些对象，从而避免了频繁的对象创建和销毁操作，从而提高了应用程序的性能和响应速度。

对象池适用于以下场景：
- 频繁创建和销毁对象的情况，比如游戏中的子弹、敌人、特效等。
- 对象的创建和销毁操作开销较大，影响了应用程序的性能。
- 对象的复用能够减少系统资源的消耗。

```cs
using System.Collections.Generic;
using UnityEngine;

public class ObjectPool : MonoBehaviour
{
    public static ObjectPool SharedInstance;
    public GameObject prefab; // 需要池化的对象的预制体
    public int poolSize = 10; // 对象池的大小

    private Queue<GameObject> objectPool = new Queue<GameObject>(); // 对象池队列

    void Awake()
    {
        SharedInstance = this;
    }

    private void Start()
    {
        // 预先实例化一定数量的对象并加入对象池
        for (int i = 0; i < poolSize; i++)
        {
            GameObject obj = Instantiate(prefab, transform.position, Quaternion.identity);
            obj.SetActive(false); // 初始状态设为禁用
            objectPool.Enqueue(obj); // 加入对象池
        }
    }

    // 从对象池中获取对象
    public GameObject GetObjectFromPool()
    {
        if (objectPool.Count > 0)
        {
            GameObject obj = objectPool.Dequeue(); // 从对象池中取出一个对象
            obj.SetActive(true); // 激活对象
            return obj;
        }
        else
        {
            Debug.LogWarning("Object pool is empty. Creating new object...");
            return Instantiate(prefab, transform.position, Quaternion.identity); // 如果对象池为空，则创建新对象
        }
    }

    // 将对象放回对象池
    public void ReturnObjectToPool(GameObject obj)
    {
        obj.SetActive(false); // 禁用对象
        objectPool.Enqueue(obj); // 将对象放回对象池
    }
}
```

#### 4. Awake() 和 Start()

在上面的对象池章节中代码中存在:

```cs
    public static ObjectPool SharedInstance; // 
    
    void Awake()
    {
        SharedInstance = this;
    }

```
对这种写法进行说明：

> 为了方便在其他脚本中访问 ObjectPool 的实例，并确保在整个应用程序中只存在一个实例。

在Unity游戏开发中，`Start()` 和 `Awake()` 是两个常用的生命周期函数，它们在对象实例化和场景加载时起到重要作用。下面我将解释它们的作用以及使用场景，并结合代码示例进行说明。

**`Awake()`：**
- `Awake()` 是MonoBehaviour类的一个生命周期函数，在对象实例被创建时立即调用。
- 它在对象的所有组件被初始化之前被调用，所以可以用于初始化对象的状态，但不能保证其他组件已经准备好。
- `Awake()` 在对象被实例化时只会调用一次，不会在每次激活对象时被调用。
- 常用于初始化对象的引用、设置初始状态等操作。

**`Start()`：**
- `Start()` 也是MonoBehaviour类的一个生命周期函数，在对象实例被创建并且所有组件被初始化后调用。
- 它在`Awake()`之后被调用，可以保证其他组件已经准备好。
- 与`Awake()`不同，`Start()`会在对象每次激活时都被调用，而不仅仅是在对象实例化时。
- 常用于初始化一些需要在其他组件准备好后才能执行的操作，如访问其他对象的组件、执行一些初始化逻辑等。

使用场景：
`Awake()` 的使用场景：
- 初始化对象的引用，比如查找其他对象、获取组件等。
- 设置对象的初始状态，如设置初始位置、颜色等。

`Start()` 的使用场景：
- 执行一些需要在其他组件准备好后才能执行的初始化逻辑。
- 访问其他对象的组件并执行操作。
- 进行一些初始化后的设置或计算。


总的来说，`Awake()` 主要用于初始化对象的引用和设置初始状态，而 `Start()` 主要用于执行一些初始化逻辑，访问其他对象的组件并执行操作。


### CWC 2 Lesson 6.2 - Research and Troubleshooting

> 尝试在原型1中为车辆添加速度表和RPM显示。

New Concepts and Skills
- Searching on Unity Answers, Forum, Scripting API
- Troubleshooting to resolve bugs
- AddRelativeForce, Center of Mass, RoundToInt
- Modulus/Remainder (%) operator
- Looping through lists
- Custom methods with bool return

#### Lesson 6.2.1.Make the vehicle use forces

> 如果我们要实现一个速度表，我们必须做的第一件事是让车辆加速和减速更像一辆真正的汽车，它使用的是力—而不是 Translate 方法。

1. Open your Prototype 1 project and make a backup
2. Replace the Translate call with an AddForce call on the vehicle’s Rigidbody, renaming the `speed` variable to `horsePower`
3. Increase the horsePower to be able to actually move the vehicle
4. To make the vehicle move in the appropriate direction, change AddForce to `AddRelativeForce`
   1. 在Unity中，AddRelativeForce 和 AddForce 都是用于给刚体施加力的方法，但它们之间有一些区别：
    AddForce：

    - AddForce 方法是给刚体施加一个力，这个力是相对于世界坐标系的。
    - 即使刚体自身处于旋转状态，施加的力也是相对于世界坐标系而言的，不受刚体本身旋转的影响。
    - 如果需要控制物体的运动方向不受旋转影响，或者需要在世界坐标系下施加力，通常会选择使用 AddForce 方法。
    
    AddRelativeForce：

    - AddRelativeForce 方法是给刚体施加一个相对于自身坐标系的力。
    - 无论刚体当前处于何种旋转状态，施加的力都是相对于刚体本身的坐标系而言的。
    - 这意味着施加的力会受到刚体自身的旋转影响，可以在刚体局部空间中控制力的方向。
    - 当需要根据刚体的本地坐标系来施加力，或者需要力的方向随着物体旋转而变化时，通常会使用 AddRelativeForce 方法。

> 提醒：Scene 视图中的 `Global/Local dropdown menu` 是一个有用的工具，可以在空间中按照您想要的方式定向对象。

`全局透视`是从世界的角度观察场景，其中`对象的位置、旋转和比例相对于世界本身`。这是在"场景"视图中打开场景时的默认透视图。

`局部透视`是从特定对象的视角观察场景，其中`对象的位置、旋转和比例都是相对于该对象`的。这对于以更精确的方式编辑对象非常有用。

#### Lesson 6.2.2.Prevent car from flipping over

> 现在我们已经在车辆上实现了真正的物理学，它很容易被推翻。我们需要找到一种方法，使我们的车更安全驾驶。

1. Add `wheel colliders` to the wheels of your vehicle and edit their radius and center position, then disable any other colliders on the wheels
2. Create a `new GameObject centerOfMass` variable, then in Start(), assign the playerRb variable to the centerOfMass position
3. Create a new `Empty Child` object for the vehicle called “Center Of Mass”, reposition it, and assign it to the `Center Of Mass` variable in the inspector
4. `Test` different center of mass positions, speed, and turn speed values to get the car to steer as you like

#### Lesson 6.2.3.Add a speedometer display

> 现在我们的车辆处于半可驾驶状态，让我们在用户界面上显示速度。

1. Add a `new TextMeshPro - Text` object for your `Speedometer Text`
2. Import the `TMPro library`, then create and assign new create a `new TextMeshProUGUI` variable for your speedometerText 
3. Create a `new float` variables for your `speed` 
4. In `Update()`, calculate the speed in `mph` or `kph` then display those values on the UI


#### Lesson 6.2.4.Add an RPM display

> 很多汽车模拟器还有一个很酷的功能是显示RPM（每分钟转数）—棘手的部分是弄清楚如何计算它。

1. Create a new `RPM Text` object, then create and assign a `new rpmText` variable for it
2. In `Update()`, calculate the the RPMs using the `Modulus/Remainder operator` (%), then display that value on the UI

#### Lesson 6.2.5.Prevent driving in mid-air

> 现在我们有了一个大的功能车辆，有一个其他的大错误，我们应该尝试修复：汽车在半空中仍然可以加速/减速，转弯，并增加速度/rpm

1. Declare a `new List of WheelColliders` named `allWheels` (or frontWheels/backWheels), then assign each of your wheels to that list in the inspector
2. Declare a `new int wheelsOnGround`
3. Write a bool `IsOnGround()` method that returns true if all wheels are on the ground and false if not
4. Wrap the acceleration, turning, and speed/rpm functionality in if-statements that check if the car is on the ground

> 检查你的车轮碰撞器的半径和中心是否设置好，确保他们可以接触地面。另外，可以删除四个轮子本来带的 mesh collider

```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class PlayerController : MonoBehaviour
{
    // 汽车马力
    private float _horsePower = 3500;
    // 转向速度
    private float _turnSpeed = 45.0f;
    // 水平输入值
    private float _horizontalInput;
    // 前进输入值
    private float _forwardInput;

    // 玩家刚体组件
    private Rigidbody _playerRb;
    // 质心对象
    [SerializeField] private GameObject centerOfMass;
    // 速度文本显示对象
    [SerializeField] private TextMeshProUGUI speedmeterText;
    // 速度
    [SerializeField] private float speed;
    // RPM文本显示对象
    [SerializeField] private TextMeshProUGUI rpmText;
    // RPM
    [SerializeField] private float rpm;

    // 所有车轮的碰撞体列表
    [SerializeField] List<WheelCollider> allWheels;
    // 接触地面的车轮数量
    [SerializeField] int wheelsOnGround;

    // 在第一帧更新之前调用
    void Start()
    {
        // 获取玩家刚体组件
        _playerRb = GetComponent<Rigidbody>();
        // 设置质心位置
        _playerRb.centerOfMass = centerOfMass.transform.position;
    }

    // 每帧更新一次
    void Update()
    {
        // 获取水平输入值
        _horizontalInput = Input.GetAxis("Horizontal");
        // 获取前进输入值
        _forwardInput = Input.GetAxis("Vertical");

        // 如果车辆在地面上
        if (IsOnGround())
        {
            // 前进汽车
            _playerRb.AddRelativeForce(Vector3.forward * (_forwardInput * _horsePower));
            
            // 车辆旋转
            transform.Rotate(Vector3.up, _turnSpeed * _horizontalInput * Time.deltaTime);
            
            // 计算速度
            speed = Mathf.Round(_playerRb.velocity.magnitude);
            // 更新速度文本显示
            speedmeterText.SetText("Speed: " + speed + "kph");

            // 计算RPM
            rpm = Mathf.Round((speed % 30) * 40);
            // 更新RPM文本显示
            rpmText.SetText("RPM: " + rpm);
        }
    }

    // 检查车辆是否在地面上的函数
    bool IsOnGround()
    {
        wheelsOnGround = 0;
        // 遍历所有车轮
        foreach (WheelCollider wheel in allWheels)
        {
            // 如果车轮在地面上，增加接触地面的车轮数量
            if (wheel.isGrounded) wheelsOnGround++;
        }

        // 如果有4个车轮在地面上，则返回true，否则返回false
        return wheelsOnGround == 4;
    }
}
```


### CWC 2 Lesson 6.3 - Sharing your Projects(打包游戏分发)

#### 1.Install export Modules


1. Open `Unity Hub` and navigate to the `Installs Tab`
2. On the Unity version you’ve been using in the course, select the `gear icon`, then select `Add Modules`. 
3. Select `WebGL Build Support`, and either `Mac or Windows build support`, then click Done and wait for the installation to complete. 

#### 2.Build your game for Mac or Windows

现在我们已经安装了导出模块，我们可以使用它们并导出我们的一个项目：
1. Open the `project` you would like to build (could be a prototype or your personal project)
2. In Unity, click `File > Build Settings`, then click `Add Open Scenes` to add your scene
3. Click `Player Settings` and adjust any settings you want, including making it `“Windowed”`, `“Resizable”`, and whether or not you want to enable the “Display Resolution Dialog”. 
4. For more information, check out the documentation on configuring player settings. 
5. Select `Build` or `Build and Run`, name your project, and save it inside a new folder inside your Create with Code folder called “Builds” 
6. Play your game to test it out, then if you want, rebuild it with different settings

![image](https://unity-connect-prd.storage.googleapis.com/20221114/learn/images/0b1549ac-b522-451c-97d8-08b7779a5760_CWC_B.5.4_image1.png)


#### ECS Survival Guide

实体组件系统（ECS）是新的面向数据技术栈（DOTS）的一部分，代表了一种全新的编程方式。

在这个新的框架中，代码不是围绕对象（例如Enemy，Obstacle）或组件（例如MoveForward，DestroyOnCollision）来构建，而是围绕关键数据块（例如MoveSpeed，PlayerHealth）来构建。

这个新系统的好处是，它允许极大地提高性能和优化以前认为不可能。

[ECS Survival Guide](https://learn.unity.com/tutorial/ecs-survival-guide?uv=2022.3&pathwayId=5f7e17e1edbc2a5ec21a20af&missionId=5f7648a4edbc2a5578eb67df&projectId=5d092adcedbc2a0e5c02d26f#)

##### Unity 认证考试

[相关认证Link](https://learn.unity.com/tutorial/career-research-and-preparation?uv=2022.3&pathwayId=5f7e17e1edbc2a5ec21a20af&missionId=5f7648a4edbc2a5578eb67df#658f5d0bedbc2a255f0a7210)


### Manage Scene Flow and Data

#### Setup Version Control

1.  From the welcome screen in GitHub Desktop, select Create a New Repository on your Hard Drive.

![Create a New Repository](https://unity-connect-prd.storage.googleapis.com/20210602/learn/images/6764e7d0-f47f-482c-8408-bafdc77b3b33_35.png)

2. In the Create a New Repository window that appears, configure your repo’s settings:
    
![configure repo’s settings](https://unity-connect-prd.storage.googleapis.com/20210602/learn/images/c6b7b572-aab5-4686-8518-9265d07e61e1_34.png)

3. Select `Create Repository`. This will set the Current Repository dropdown to your new repo. In the main window, you will see that there are currently `“No local changes.”` That is because this is a brand new repo that you haven’t edited yet.

![image](https://unity-connect-prd.storage.googleapis.com/20210602/learn/images/ea6959ff-1698-4531-bfaa-b35f29aeeddd_33.png)

4. Open the folder that was just created on your computer at the location you specified. If your computer is configured to` view hidden files`, you will see it contains three items: 
- git folder
- gitattributes 
- gitignore 

The `.git` folder tells GitHub that this is, in fact, a GitHub repo. 
The `.gitignore` and `.gitattributes` specify the configuration of your repo. It’s not necessary, but if you would like to see these hidden files, you can Google how to do so for Windows or Mac.
To give GitHub something to track, you will put an actual Unity project in this folder in the next step.

5.  Download the project zip folder, extract it, and open the `Junior-Programmer-Starter-Files` folder. In it, you find the following folders:
- Assets
- Packages
- ProjectSettings

6. Select all three folders, then copy and paste them into your repo folder, right next to your hidden `.git` files. This folder is now ready to be opened as a Unity project. 

![image](https://unity-connect-prd.storage.googleapis.com/20210602/learn/images/479a21ec-b495-4cd4-8e1a-cfce7b195274_31.png)

7. Add your project repo folder to Unity Hub, and then open the project in the Unity Editor. 


8. Do an `initial commit` and `publish` your repo. The first set of files you commit to your repo will be included in the initial commit. You would usually do an initial commit after you first set up your project, so let’s do that now.
   1. In the `Summary field` below the changes listed to your repo, type `“initial commit”` and `fill in the Description` (e.g. “project starter files”). Then select `Commit to main` to save your changes to the “main” branch of the project.
   ![image](https://unity-connect-prd.storage.googleapis.com/20210602/learn/images/f2b914bf-ab34-4f3b-834d-fe2a599ccc6a_28.png)
   2. From the GitHub Desktop interface, select `Publish Repository`. 
   ![image](https://unity-connect-prd.storage.googleapis.com/20210602/learn/images/3837f369-9417-4d22-a0cf-39aaeded3584_27.png)
   3. In the window that opens, confirm the Name of your project, and whether you want to keep your code public or private. Then select `Publish Repository`.
   ![image](https://unity-connect-prd.storage.googleapis.com/20210602/learn/images/7cc3c958-388e-432f-906b-b6a216bd9090_26.png)

9. How does version control work?
   1. Pushing and pulling changes
    当您使用版本控制时，您将通过云存储库（或文件存储目录）保存您对项目的更改，并附上一个注释，记录您所做的更改。
    这意味着您将能够 `pull`（下载）并打开项目的最新版本，在本地对其进行更改，然后将更改 `push`（上传）回云存储库。

   2. Merging changes
    当多个人同时在同一个项目上工作时，他们有时会对同一个文件进行不同的更改。
    例如，一个人可能会更改指定给Unity项目中的道具资源的纹理，而另一个人可能会更改其在场景中的位置。
    版本控制管理项目文件，以便在称为 `merge` 的过程中合并和统一所有更改。
    有时，对项目文件所做的更改可能会影响相同的值。当发生这种情况时，版本控制系统无法将更改合并在一起，导致 `merge conflict`，这需要开发人员的输入。
    版本控制系统将识别冲突，通常会并排显示两个不同的值。然后开发人员决定保留哪一个以解决冲突。

   3. Reverting to previous versions
    版本控制的一个主要好处是跟踪所有随时间的变化。
    如果任何更改发生冲突，或者您决定最好恢复到早期版本，则可以在任何时间点返回到项目的任何早期版本并将其恢复。


 
#### Create a scene flow

您将设置菜单和主场景之间的场景流，以及应用程序中应用程序的退出流。

- 在应用程序的初始化序列中调用适当的启动方法
- 当事件触发时加载下一个场景


正如您在上一个教程中所述，您将在此任务中使用的应用程序有许多不同的场景，用户需要在这些场景之间`导航`。

现在，应用程序直接在主场景中启动。在现实世界的应用程序中，应用程序的开始处会有一个菜单，用户可以在其中调整设置或退出。在本教程中，您将创建该菜单。

1.  If you haven’t done so already, open your project from the Unity Hub.
2.  In the Project window, go to `Assets > Scenes` and open the `Menu` scene.
3.  In the Scene view control bar, set the Scene view to `2D` mode.
5.  In the Hierarchy, expand the Canvas and then the Container GameObject, which contains two more GameObjects: `StartContainer` and `Exit`.  
5.  Expand the `StartContainer` GameObject. 
6.  In the toolbar, select Play to enter Play mode. You’ll notice that there are now four color selection buttons available in the white rectangle.
7.  Exit Play mode.

The color selection buttons are controlled by the `MenuUIHandler.cs` script on the Canvas GameObject. 
This is a custom script that’s been written for this project. 
Right now, all it’s doing is initializing the color buttons. Let’s add two methods: one to `start the Main scene` and one to `exit the application`. 


让我们开始编写从菜单加载Main场景的方法：

1. In the Project window, go to `Assets > Scripts`. Double-click `MenuUIHandler.cs` to open the script in your default IDE. You’ll find the following script prepared for you:
   1. 注意 UI cs可以设定初始化顺序
    ```cs
    // Sets the script to be executed later than all default scripts
    // This is helpful for UI, since other things may need to be initialized before setting the UI
    [DefaultExecutionOrder(1000)]
    public class MenuUIHandler : MonoBehaviour
    {}
    ```
2. Under the Start method, add the following new method called StartNew: 
    ```cs
    public void StartNew()
    {
        SceneManager.LoadScene(1);
    }
    ```
3. Add `using UnityEngine.SceneManagement;`
4. The LoadScene parameter is a number, but what does this refer to? It’s the `index of the scene` that you want to load. You can define a scene’s index in the `Build Settings` window.
   1. In Unity Editor’s `top menu`, go to `File > Build Settings…`. The top section in the window is `Scenes In Build`, where a scene’s index is set. 
   2. Make sure both the Main scene and the Menu scene appear in the Scenes in Build menu. If either is `missing`, go to the Project window, navigate to the `Scenes folder`, then `drag and drop` the missing scene into the `Scenes in Build` section. The Menu scene needs to be above the Main scene in the list so that it has the lowest index value (0). If you need to, select and drag items in the list to change their order. 
   ![image](https://unity-connect-prd.storage.googleapis.com/20210602/learn/images/ffd38942-1378-416b-8f96-070951e4223f_57.png)

5. Configure the Start button
   1.  In the `Hierarchy`, select the `StartButton` GameObject (which is a child of the StartContainer).
   2.  In the `Inspector`, find the `Button` component.
   3.  Find the On `Click ()` property. This is where you can set the events that Unity will invoke when the user selects the button. Select `Add (+)` to add a new Event array.
   4.  Note: 要将 `MenuUIHandler.cs` attach 到 对应的 Canvas 上
   5.  `Drag and drop the Canvas` GameObject to the target field of the `On Click event`, underneath the` Runtime Only` drop-down, to assign it. 
   ![image](https://unity-connect-prd.storage.googleapis.com/20210602/learn/images/fc0a8c3b-b61f-4f2f-98b7-574e849247ad_56.png)
   6. In the `Function` dropdown menu, select `MenuUIHandler > StartNew`. 
   ![image](https://unity-connect-prd.storage.googleapis.com/20210602/learn/images/dfeba75e-a4d1-4801-b6e4-b2f73f79a537_55.png)
   7. Save your changes, then go to the toolbar and select Play to enter Play mode. 

6. Write a method to quit the application
   1.  Return to `MenuUIHandler.cs` in your IDE.
   2.  Under the `StartNew` method, add the following new method called `Exit`: 
    ```cs
    public void Exit()
    {
        Application.Quit();
    }
    ```
   3.  `Save` and return to the Unity Editor, then test the `Exit` button in Play mode — does it work? Take a moment to consider why before reading on.
       1.  The button isn’t currently working because `Application.Quit` only works in the built application, not when you’re testing in the Editor. 
       2.  you’ll need to use a special method to stop PlayMode. That’s where `conditional compiling` comes in.
   4. Update your Exit method with the following code:
    ```cs
        public void Exit()
        {
            #if UNITY_EDITOR
                    EditorApplication.ExitPlaymode();
            #else
                    Application.Quit(); // original code to quit Unity player
            #endif
        }
    ```

    > `#` aren’t really “code”. They won’t be compiled and executed — they’re actually instructions for the compiler. 

    Add the following code to the end of the list of namespaces: 
    ```cs
        #if UNITY_EDITOR
        using UnityEditor;
        #endif
    ```

7.  Challenge: Set up the transition back to the Menu scene
    1. 在 `UIMainScene.cs` 中加上:
    ```cs
        public void BackToMenu()
        {
            SceneManager.LoadScene(0);
        }
    ```
    2. 在 `Main -> Hierarchy` 中找到 `Back to Menu` 对应的button 设置好 `On Click ()` 

#### 实现场景切换时的数据持久性

- 通过使用Unity `DontDestroyOnLoad` 方法确保数据在整个应用程序会话中得到保留
- 识别何时使用静态类、单例和静态变量来实现数据持久性
- 使用包含要在场景之间保存的变量的脚本修改游戏对象


##### Data persistence between scenes
在Unity中，在场景中创建的数据可以在该场景中轻松获得。
但是当用户移动到另一个场景时，会发生什么？通常，这些数据会丢失。
场景之间的数据持久化是指将数据从场景传输到场景的过程，以便在用户通过应用程序的过程中获得一致的体验。
**在用户在场景之间移动时需要跟踪用户的数据**

##### Data persistence between sessions
另外两个例子（正在进行的游戏和文字处理应用程序）通常是多会话体验。
用户希望保存他们在一个会话期间所做的进展，然后恢复它以继续您停止的地方。
**需要在多个会话中保存和恢复的数据。**


##### DontDestroyOnLoad() and Static members
您对资源管理模拟项目的简介包括在初始菜单（菜单场景）中选择颜色，并将其应用到仓库中的叉车（主场景）。

目前，这些按钮是存在的，因为我们提供了一个自定义脚本，您在上一个教程中设置其他按钮时已经查看过这些按钮。

现在让我们通过使选定的颜色数据在主场景中可用来实现场景之间的数据持久性。


To achieve this, you will use:
- `DontDestroyOnLoad`: Unity中的一种方法，用于标记游戏对象，即使在加载或卸载新场景时也要保存在内存中。
- `Static classes and class members`: 静态类成员可以从任何地方访问，而不必引用特定的对象。您可能已经使用过其中的一些，例如 `Time.deltaTime` 或 `Vector3.forward` 。这些不是特定的时间对象或特定的 Vector3, 静态类成员的格式是 `ClassName.memberName`。

##### 创建一个新的脚本来作为静态类
1.  In the Project window, go to `Assets > Scripts. `
2.  Create a new script in this folder and name it "`MainManager`". 
3.  In the Hierarchy, create a new empty GameObject and name it `MainManager`. Assign your new script to the GameObject, and then open the script in your chosen IDE.
4.  Delete the default `Start()` and `Update()` methods, then add the following code to create a static member to the `MainManager` class:
    ```cs
    public class MainManager : MonoBehaviour
    {
        public static MainManager Instance;

        private void Awake()
        {
            Instance = this;
            // 当场景改变时不会被破坏。
            DontDestroyOnLoad(gameObject);
        }
    }

    ```
5. 此代码使您能够从任何其他脚本访问 `MainManager` 对象。
6. 当 PLAY 后，从 Main 到 Menu，MainManager 从正常场景移动到一个名为 DontDestroyOnLoad 的特殊场景。
    ![image](https://unity-connect-prd.storage.googleapis.com/20210602/learn/images/af0ee89d-e202-4a6c-a15e-95f710341d07_51.png)

##### 7. 单例实现 MainManager
当我们切换场景是会出现多个 `MainManager` ， 来处理这个问题：

1.  `MainManager.cs`
2.  Update the `Awake` method with the following code:
    ```cs
        private void Awake()
        {
            // start of new code
            if (Instance != null)
            {
                Destroy(gameObject);
                return;
            }
            // end of new code
            
            Instance = this;
            // 当场景改变时不会被破坏。
            DontDestroyOnLoad(gameObject);
        }
    ```
    3. 您刚刚添加了一个条件语句来检查实例是否为null。在您第一次启动菜单场景时，没有 `MainManager` 填充实例变量。 这意味着它将为null，因此条件将不满足，脚本将继续按照您之前编写的那样进行。
    4. 但是，如果您稍后再次加载菜单场景，则已经存在一个 `MainManager` ，因此实例将不会为null。在这种情况下，满足了条件：额外的 `MainManager` 被销毁，脚本在那里退出。
    5. 这种模式称为 `单例模式` 。您可以使用它来确保 `MainManager` 只有一个实例存在，因此它充当了访问的中心点。


##### 8.存储并传递所选颜色
现在，您已经设置了一个系统，以便在应用程序中的场景之间传递数据。
让我们在 `MainManager` 上添加一个新的公共成员来传递用户选择的颜色：

1. Go `MainManager.cs`
2. Add a `new public class member` called `TeamColor` above the `Awake` method:
    ```cs
    public Color TeamColor; // new variable declared

    ```
3. Go `MenuUIHandler.cs`, Update the `NewColorSelected` method with the following code:
    ```cs
    public void NewColorSelected(Color color)
    {
        // add code here to handle when a color is selected
        MainManager.Instance.TeamColor = color;
    }
    ```
4. Go `Unit.cs`, Add a new `Start` method with the following code:
```cs
    // 为单位（叉车）设置颜色。
    private void Start()
    {
        if (MainManager.Instance != null)
        {
            SetColor(MainManager.Instance.TeamColor);
        }
    }
```

#### 实现会话之间的数据持久性

- 在应用程序的初始化序列中调用适当的启动方法
- 通过应用 `List` 和 `Dictionary` 等数据结构存储和组织数据
- 在应用程序的关闭序列中保存用户数据


现在，当您在Unity Editor中测试正在进行的应用程序时，**您为仓库中的叉车选择的颜色将不会在下次测试应用程序时保存**。

如果您创建此应用程序的版本，则用户**每次运行它时都会获得独立体验**。

**保存用户最后选择的颜色会很有帮助**，以便在他们启动应用程序时自动选择它。

在本教程中，您将在之前的工作基础上实现场景之间的数据持久性，并在会话之间实现数据持久性。

- 您将将用户选择的颜色`写入文件`。
- 您将配置 `MainManager` 以检查应用程序启动时该文件是否存在。如果文件确实存在，则 `MainManager` 将读取存储在其中的颜色，并将颜色选择器设置为该颜色。


##### 如何在会话之间保持数据？

为了使数据在会话之间持久化，需要以某种方式存储。

在您的示例中，您需要将用户选择的颜色转换为一种可以存储的格式，然后在他们再次加载应用程序时读取。

将复杂数据转换为可以存储的格式的过程称为 `serialization` 。

当您准备好再次访问数据时，将其转换回数据的过程称为 `deserialization`。

在本例中，你将使用 `JSON` 格式。

##### Json and JsonUtility

`JsonUtility` 局限性

Unity的`JsonUtility`类有一些限制，它是为了性能和简单性而设计的。

> `JsonUtility`不适用于基元类型、数组、列表或字典。

正如您所期望的，`JsonUtility`仅适用于Serializable类型: MonoBehaviour或其他可以添加 `[Serializable]` 属性的类/结构。

如果您试图保存一个包含多个数据段的类，而其中一个数据段无法保存，这可能是因为它不可序列化。

例如，如果您将一个类转换为中间有一个字典的JSON，则该字典不会被保存，因为它不可序列化。

> 如果某个类中似乎没有正确保存，请检查以确保它是可序列化的类型！

##### 6.添加SaveData类

要保存和加载用户最后选择的颜色，您需要在 `MainManager` 类中添加三个内容：
- 存储颜色的 `SaveData` 类。
- 一个 `Save` 方法，将该类转换为JSON格式并将其写入文件。
- 一个 `Load` 方法，用于将JSON文件中的数据转换回SaveData类。



1. Go ` MainManager.cs`
2. 在 `MainManager` 的末尾添加以下代码（within the scope of its closing brace）：
    ```cs
    using System.IO;

    public class MainManager : MonoBehaviour
    {    
        [System.Serializable]
        class SaveData
        {
            public Color TeamColor;
        }
    }
    ```
3. `[System. Serializable]` 属性这一行对于 `JsonUtility` 是必需的
4. 为什么要创建一个类，而不直接将 `MainManager` 实例提供给 `JsonUtility` ？
   1. 大多数时候你不会把所有的东西都保存在 classes 上。使用一个只包含您想要保存的特定数据的小类是一种良好的实践，而且效率更高。

##### 7.添加SaveColor方法

```cs
    [System.Serializable]
    class SaveData
    {
        public Color TeamColor;
    }
    
    public void SaveColor()
    {
        // 创建了保存数据的新实例
        SaveData data = new SaveData();
        // 使用MainManager中保存的TeamColor变量填充其团队颜色类成员：
        data.TeamColor = TeamColor;

        // 使用JsonUtility.ToJson将该实例转换为JSON：
        string json = JsonUtility.ToJson(data);
        
        // 需引入 using System.IO; 
        // using File = System.IO.File;
        // 使用File. WriteAllText将字符串写入文件：
        // 第一个参数是文件的路径
        // 第二个参数是您要在该文件中写入的文本—在本例中，是您的JSON！
        File.WriteAllText(Application.persistentDataPath + "/savefile.json", json);
    }
```

##### 8.添加LoadColor方法

```cs
    public void LoadColor()
    {
        string path = Application.persistentDataPath + "/savefile.json";
        // 使用File.Exists 方法来检查是否存在. json文件。
        // 如果文件确实存在，则方法将使用File.ReadAllText读取其内容：
        if (File.Exists(path))
        {
            string json = File.ReadAllText(path);
            // 将结果文本提供给JsonUtility. FromJson，以将其转换回SaveData实例：
            SaveData data = JsonUtility.FromJson<SaveData>(json);
            // 将TeamColor设置为保存在该SaveData中的颜色：
            TeamColor = data.TeamColor;
        }
    }
```

##### 9.在应用程序中加载并保存颜色
1. Go `MainManager.cs -> Awake()`， 在尾部调用 `LoadColor`
    ```cs
        private void Awake()
        {
            if (Instance != null)
            {
                Destroy(gameObject);
                return;
            }
            
            Instance = this;
            // 当场景改变时不会被破坏。
            DontDestroyOnLoad(gameObject);
            
            LoadColor(); 
        }
    ```  

2. Go `MenuUIHandler.cs ` ， add:

    ```cs
    private void Start()
    {
        ColorPicker.Init();
        //this will call the NewColorSelected function when the color picker have a color button clicked.
        ColorPicker.onColorChanged += NewColorSelected;
        
        ColorPicker.SelectColor(MainManager.Instance.TeamColor);

    }

    public void Exit()
    {
        MainManager.Instance.SaveColor(); 

        #if UNITY_EDITOR
                EditorApplication.ExitPlaymode();
        #else
                Application.Quit(); // original code to quit Unity player
        #endif
    }
    ```

3. testing functionality, Go `MenuUIHandler.cs ` ， add:

    ```cs
        // 立即从应用程序保存和加载颜色
        public void SaveColorClicked()
        {
            MainManager.Instance.SaveColor();
        }

        public void LoadColorClicked()
        {
            MainManager.Instance.LoadColor();
            ColorPicker.SelectColor(MainManager.Instance.TeamColor);
        }
    ```
    
    将这些方法链接到 `Load` 和 ` Save Color` 颜色按钮。


### Abstraction in object-oriented programming
#### 继承和方法 Override
```cs
// 继承 MonoBehaviour
public class SomeClass : MonoBehaviour { }

// 方法 Overriding
public class Enemy : MonoBehaviour { 

    // 父类方法增加 virtual 修饰
    public virtual void DealDamage () { 

        Player.Health -= 10;
    }
}

public class Thief : Enemy
{
    // 子类方法增加 override 修饰
    public override void DealDamage() 
    {
        Player.Health -= 2;
        CommitPettyTheft();
    }
    private void Update()
    {
        if (Player.isSeen)
        {
            DealDamage();
        }
    }
}
```

#### 封装 getter setter
```cs
// Getter Setter
// 设置只读 get 访问器
public class MainManager {
    public static MainManager Instance { get; } 
}
class Program {
    static void Main(string[] args) {
        // 通过类名直接访问 MainManager 的单例实例
        MainManager.Instance.Print();
    }
}
// 设置其只读的 get 访问器和私有的 set 访问器
public class MainManager {
    public static MainManager Instance { get; private set; } 
    public static void Initialize() {
        // 通过私有 set 访问器在类的内部设置 Instance 属性的值
        Instance = new MainManager();
    }
}
```

> 这种 naive 的 get set 被称为 `auto-implemented property`, 下面介绍更复杂的情况

#### Backing field 与 访问器

```cs
// backing field
// 在这段代码中，m_ProductionSpeed 就是 ProductionSpeed 属性的 backing field（后备字段）。
// 在getter或setter中执行验证或计算
private float m_ProductionSpeed = 0.5f;
public float ProductionSpeed 
{
    get { return m_ProductionSpeed; } // getter returns backing field
    set
    {
        if (value < 0.0f)
        {
            Debug.LogError("You can't set a negative production speed!");
        }
        else
        {
            m_ProductionSpeed = value; 
        }
    }
}
```

#### Profiler 和 定位性能优化瓶颈

在 `Play Mode` 下 查看右上角 `Stats` , 观察FPS

![image](https://connect-cdn-public-prd.unitychina.cn/h1/20210530/learn/images/92931991-f9f1-4919-99f2-f6ee72ead755_84.png.2000x0x1.png)


Open the `Profiler` by selecting `Window > Analysis > Profiler`.

目前，`Profiler` 完全空白，因为尚未收集到有关该场景的数据。当您启动`Play Mode` 时，`Profiler` 开始工作。确保 `Profiler` 的记录按钮（红点）处于活动状态，然后按 “Play”。

![image](https://connect-cdn-public-prd.unitychina.cn/h1/20210530/learn/images/0874f969-dcad-4eb8-a7bc-378accd64559_82.png.2000x0x1.png)


`Profiler` 将开始记录性能数据的颜色编码图表。 一两秒钟后，退出播放模式。现在，您已经有了该时间段内应用程序中发生的一切的详细概述。

![image](https://connect-cdn-public-prd.unitychina.cn/h1/20210530/learn/images/dc2ddffc-520f-4307-8bb1-8a4cd22dedfd_81.png.2000x0x1.png)

`Profiler` 的上半部分被分为模块，从 `CPU Usage` 开始。这将是我们在本教程中使用的唯一模块。

请注意，蓝色背景不是背景，而是正在运行的脚本的代表！即使从这个非常高的层面来看，我们也可以看出我们的脚本很可能出了问题，因为它们占用的处理能力甚至比渲染场景本身还要多几个数量级。我们将很快检查脚本。

`Profiler` 的下半部分显示了每个帧中发生的事情的视觉分解。如果您在 `Profiler` 的下半部分没有看到条形图可视化，请在 `Profiler Module` 部分正下中选择 `Timeline`。

![image](https://connect-cdn-public-prd.unitychina.cn/h1/20210530/learn/images/4c142d9f-5d79-417a-b36a-d3cadbbd5017_80.png.2000x0x1.png)

`CPU Usage` 图表上的白色垂直线代表应用程序中播放的一个帧。在“中央处理器使用情况”模块中单击并拖动此行，查看帧之间的使用情况如何变化。选择中央处理器使用率激增的帧。

![image](https://connect-cdn-public-prd.unitychina.cn/h1/20210530/learn/images/79eed5fd-edec-4908-ba91-86e79088aacd_79.png.2000x0x1.png)

在上面的示例中，您可以看到符号**CPU.117.26ms**。这表示完成此帧中的所有内容所需的总时间（以毫秒为单位）。

分析时，我们希望特别关注这个毫秒完成率，因为它是实现最终帧率目标的关键。根据目标帧速率，您每帧将有特定的 ` millisecond budget` 。计算方法是：

> 1000 ms / target frames per second = ms budget

因此，为了达到60 FPS的目标，每帧的毫秒预算为16(1000 / 60 = 16.6667)。这意味着当前正在分析的框架是其需要的七倍多(117.26 / 16 = 7.32)


在 `Profiler Timeline` 的顶部有两个交替的标签：`PlayerLoop` 和 `EditorLoop` 。如果您没有看到这些，您可能必须使用滚动轮或触控板来放大。 

`PlayerLoop` 代表游戏本身中运行的所有内容，而 `EditorLoop` 代表在编辑器中运行应用程序时发生的所有内容。在这种情况下，由于我们的最终用户不会在Unity Editor中使用该应用程序，因此可以安全地忽略 `EditorLoop` 并仅关注`PlayerLoop`中发生的事情。

`PlayerLoop` 下面列出的条代表该帧内应用程序中发生的一切，按时间长度降序排列。 `Profiler Timeline` 的颜色经过协调，以匹配中央处理器使用率图表。蓝色大条表示该帧中发生了占用大量时间的特定脚本相关动作

![image](https://connect-cdn-public-prd.unitychina.cn/h1/20210530/learn/images/cb519896-f09e-4ea9-ba29-4be56f8500f2_78.png.2000x0x1.png)

单击该栏可查看此操作的源是 `OptimUnit` 脚本，特别是其 `Update` 方法。它需要98.27 ms才能完成，本身就超出了我们的毫秒预算很多倍。另请注意，该脚本有2，000个实例在此框架中运行，这一点很重要，因为我们知道我们正在 `OptimManager` 脚本中生成2，000个叉车。不知何故，这两个因素一定是相关的。

为什么脚本会运行2，000次？每个叉车必须有一个实例。如果我们在 `OptimManager` 上选择 `OptimUnit Prefab`，我们会发现 `OptimUnit` 脚本附加到 `Prefab` 本身-这意味着该脚本确实有2，000个副本正在运行。

接下来，我们可以使用 `Profiler` 来帮助我们识别减慢该项目速度的确切代码行。

OptimUnit脚本Update方法中有很多事情要做，因此让我们从分析器那里获得更多帮助。我们可以通过添加Profiler.BeginSample和Profiler.EndSample方法来分析特定的代码部分。

```cs
// begin profiling a piece of code with a custom label
Profiler.BeginSample("Handling Time");
HandleTime();
// ends the current profiling sample
Profiler.EndSample(); 

Profiler.BeginSample("Rotating"); // begin profiling

var t = transform;

if (transform.position.x <= 0)
    transform.Rotate(currentAngularVelocity * Time.deltaTime, 0, 0);
else if (transform.position.x > 0)
    transform.Rotate(-currentAngularVelocity * Time.deltaTime, 0, 0);

if (transform.position.z >= 0)
    transform.Rotate(0, 0, currentAngularVelocity * Time.deltaTime);
else if (transform.position.z < 0)
    transform.Rotate(0, 0, -currentAngularVelocity * Time.deltaTime);

Profiler.EndSample(); // end profiling

Profiler.BeginSample("Moving"); // begin profiling
        
Move();
        
Profiler.EndSample(); // end profiling

Profiler.BeginSample("Boundary Check"); // begin profiling

//check if we are moving away from the zone and invert velocity if this is the case
if (transform.position.x > areaSize.x && currentVelocity.x > 0)
{
    currentVelocity.x *= -1;
    PickNewVelocityChangeTime(); //we pick a new change time as we changed velocity
}
else if (transform.position.x < -areaSize.x && currentVelocity.x < 0)
{
    currentVelocity.x *= -1;
    PickNewVelocityChangeTime();
}
        
if (transform.position.z > areaSize.z && currentVelocity.z > 0)
{
    currentVelocity.z *= -1;
    PickNewVelocityChangeTime(); //we pick a new change time as we changed velocity
}
else if (transform.position.z < -areaSize.z && currentVelocity.z < 0)
{
    currentVelocity.z *= -1;
    PickNewVelocityChangeTime();
}

Profiler.EndSample(); // end profiling
```

回到 Editor，在 `Profiler` 中，按 `clear` 按钮以清除当前捕获的数据。

![image](https://connect-cdn-public-prd.unitychina.cn/h1/20210530/learn/images/69d5b3a0-e08d-448f-aeae-1ec610784f2e_77.png.2000x0x1.png)

按“播放”并让应用程序运行几秒钟来捕获新数据，然后退出“播放”模式。

在 `Profiler` 窗口的 `CPU Usage` 模块中，选择另一个具有中央处理器使用率峰值的帧。

让我们看看我们标记的代码部分。`OptimUnit.Update` 栏的正下方是一个新的脚本栏。此条代表所有新采样代码。选择它，就会出现其中一个新的示例标签。

单击 `Timeline` 并选择 `Hierarchy` 。

![image](https://connect-cdn-public-prd.unitychina.cn/h1/20210530/learn/images/8b22bd72-81db-471d-8347-97b1f753d628_76.png.2000x0x1.png)

框架数据将更改为列表视图，并自动选择四个代码部分的标签。

![image](https://connect-cdn-public-prd.unitychina.cn/h1/20210530/learn/images/bc934a6d-f4c6-45c6-9c4a-99ac320086f5_75.png.2000x0x1.png)

在此视图中，在 `Time ms` 列中可以立即清楚地看出问题出在 `Moving` 方法中！现在我们已经确定了问题，是时候尝试在代码中解决它了。
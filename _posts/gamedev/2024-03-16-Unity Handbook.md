---
title: Unity Handbook - Creative Core
categories: GameDev
tags:
- GameDev
---

# Mission 1 - Intro

## 开始您的指导项目

### 4.什么是渲染？
渲染是获取三维 (3D) 数据并使用它为屏幕生成二维 (2D) 图像的过程。

![image](https://connect-cdn-public-prd.unitychina.cn/h1/20211125/learn/images/eef5c79e-b93b-4e62-9436-eb13bd2c237f_image22.png.2000x0x1.png)

让我们进一步细分：
在 Unity 中，您可以定位 3D 模型、将材质应用于这些模型，并将虚拟相机对准它们。渲染正在吸收所有数据（对象几何形状、位置、颜色、照明等）并从相机的角度生成图像。

![image](https://connect-cdn-public-prd.unitychina.cn/h1/20211125/learn/images/31381681-ff92-4efb-97b4-78f0abf30d44_image12.png.2000x0x1.png)

现在您知道了什么是渲染，让我们继续讨论第二个词：管道。


### 5.什么是渲染管线？
如果渲染是从 A 点到 B 点（3D 数据到 2D 图像）的过程，那么您可以将渲染管道视为到达那里的不同方式。

![image](https://connect-cdn-public-prd.unitychina.cn/h1/20211125/learn/images/c0124772-aba8-49de-abe0-e5b97ed2815e_image16.png.2000x0x1.png)

由于每个渲染管道使用不同的技术和计算来生成 2D 图像，因此结果可能会有所不同，具体取决于您选择的管道。

为您的项目选择渲染管道就像选择步行、骑自行车还是开车到达目的地一样；没有一种选择本质上比另一种更好或更差——这仅取决于您的目标！

正如步行、骑自行车和开车各有优缺点一样，不同的渲染管道也各有优缺点。一种是最快的，一种可能是最简单的，有时，一种根本不适合您想要去的地方！这就是为什么选择最适合您的项目目标的渲染管道很重要。


### 6.选择渲染管线

有什么选择？

让我们更详细地回顾一下您在 Hub 中查看的模板选项，包括它们的优点和缺点：

- Unity 的内置渲染管道适用于所有平台并且非常可靠。它很容易使用，但它内置于 Unity 中，因此不太可定制。它也不是最有效的。
- **通用渲染管道( URP )** 非常适合移动、Web 和 VR 项目，因为它针对性能进行了高度优化。它的配置有点复杂，但比内置渲染管道更可定制。它可以产生相当不错的图形。
- **高清渲染管道( HDRP )** 旨在为具有充足处理能力的高端平台（例如控制台或游戏计算机）生成高质量图形。它的配置非常复杂，因此只能由具有丰富图形经验的人使用。

URP 和 HDRP 都是 **可编写脚本的渲染管道( SRP )** 。 SRP 是高度可定制的，甚至可以从头开始编写。由于编写渲染管道是一项艰巨的任务，Unity 提供了这两个 SRP 作为模板，可以处理大多数项目。

做出决定

那么，您应该选择哪一个呢？

让我们立即排除 HDRP，因为我们的目标不是极高端机器，而且它需要大量的图形专业知识。

但是您应该如何在内置渲染管线和 URP 之间进行选择呢？这条途径的重点是让您学习和尝试 Unity 创意系统的核心功能，包括光照、材质、后处理和视觉效果。因此，选择 URP 而不是内置渲染管线的一些原因如下：

- **URP** 比内置渲染器管道更具可定制性，允许您进行更多实验。
- 一些非常强大的新编辑器功能（例如 Shader Graph 和 VFX Graph）仅与 URP 兼容，而不与内置渲染管道兼容。
- URP 项目针对您想要的目标平台（Web、桌面、移动或 VR）上的性能进行了优化。

总而言之：HDRP 太花哨了，而且内置渲染管道的可定制性不足以满足我们想要做的事情 - **因此我们将在整个路径中使用 URP。**


![image](https://connect-cdn-public-prd.unitychina.cn/h1/20211125/learn/images/2e3f88de-9d7e-4700-a3ea-c15817eaf1ed_image18.png.2000x0x1.png)

选择渲染管道时可能涉及的决策：

![image](https://docs.unity3d.com/2019.3/Documentation/uploads/Main/BestPracticeLightingPipeline16.svg)

### 7.创建一个新的URP项目

渲染管道决策完成后，您就可以创建项目了。

1. 使用 **3D 示例场景 (URP)** (Universal 3D sample) 模板创建一个新的 Unity 项目。将其命名为 `GuidedProjectAlienVideoGameShop` （或您选择的任何设计文档）。
    Unity 将开放一个示例项目来展示 URP 的功能。花点时间欣赏一下 URP 模板附带的美丽示例场景。

    现在让我们看看是什么让这个项目成为 URP 项目。

2. 从主菜单中，选择 编辑>项目设置>质量 。在面板的中心，您将看到“低” 、“中”和“高质量”级别，以及一个绿色复选框，指示每个目标平台的默认质量级别。 
    ![image](https://connect-cdn-public-prd.unitychina.cn/h1/20230804/learn/images/14370e7c-7ac9-4a5e-9be6-0a1c5e0405e3_image.png.2000x0x1.png)

3. 单击“低” 、“中”和“高”设置，并注意“场景”视图中的变化，重点关注半涂蓝色墙壁上的阴影、灯光和反射。
   当您循环浏览这些质量设置时，您实际上正在更改用于渲染场景的  URP 资源。

   ![image](https://connect-cdn-public-prd.unitychina.cn/h1/20230804/learn/images/1699578a-39e7-4c69-a306-6fb164c8ef95_image.png.2000x0x1.png)

    `URP 资源` 控制项目中的许多质量设置（尤其是与光和阴影相关的设置），并且可以像任何其他资源一样在“项目”窗口中找到。

4. 在“质量设置”窗口中，双击名为 **UniversalRP - High/Medium/LowQuality** 的 URP 资产。

这将在“项目”窗口中找到该资源，并在“检查器”中显示其属性。浏览 URP 资源中可用的设置，特别是与光和阴影相关的设置。如果您不明白它们的含义，请不要担心 - 您将在整个路径中了解有关这些设置的更多信息。如果您想提前了解这些设置，请查看URP 资产文档。

对 URP 有了更清晰的了解后，您就可以为您的指导项目制作新场景了。

### 8.新建场景并导入资源

尽管这个示例场景很漂亮，但它肯定不符合您所选设计文档的要求。您需要一个新的空白场景来工作。

1. 在“项目”窗口的“场景”文件夹中，创建一个名为 `AlienVideoGameStore` 的新场景，然后打开新的空场景。如果需要，您现在还可以删除 `SampleScene` 和 `SampleSceneLightingSettings` 。
   
   ![image](https://connect-cdn-public-prd.unitychina.cn/h1/20211125/learn/images/a8a8f244-b9dd-42d4-b8e9-bdb244f0f8c8_image5.png.2000x0x1.png)

   望向默认场景中广阔空旷的天空，您会发现自己渴望有资产来填充它。  

2.  将 `GuidedProjectStarterFiles` 下载到您的计算机，导入项目。
3.  资源导入完成后，您可以随意浏览资源库的目录。在 GuidedProject 文件夹中，您将找到每个标志性设计的文件夹：外星人视频游戏商店、建筑渲染和海滨小镇。
   ![image](https://connect-cdn-public-prd.unitychina.cn/h1/20211206/learn/images/b5b41c17-c991-4a05-914a-fa1864788a03_image1.png.2000x0x1.png)

4. 从 `[YourProjectDirectory] ​​> Assets > GuidedProject > [YourChosenProject] > Prefabs` 中，将 `StarterEnvironment` 资源拖动到层次结构中以将其添加到场景中。如果某些物体缺少粉红色材料，那也没关系！您将在着色器和材质任务中修复该问题。

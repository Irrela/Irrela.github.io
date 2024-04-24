---
title: Unity Handbook - Creative Core
categories: GameDev
tags:
- GameDev
---

- [Mission 1 - Intro](#mission-1---intro)
  - [开始您的指导项目](#开始您的指导项目)
    - [4.什么是渲染？](#4什么是渲染)
    - [5.什么是渲染管线？](#5什么是渲染管线)
    - [6.选择渲染管线](#6选择渲染管线)
    - [7.创建一个新的URP项目](#7创建一个新的urp项目)
    - [8.新建场景并导入资源](#8新建场景并导入资源)
  - [Unity 文档入门](#unity-文档入门)
- [Mission 2 着色器和材质](#mission-2-着色器和材质)
  - [开始使用着色器和材质](#开始使用着色器和材质)
  - [探索网格(Meshes)和渲染(rendering)](#探索网格meshes和渲染rendering)
      - [网格是如何制作的？](#网格是如何制作的)
    - [4.网格过滤器(Mesh filter) 和渲染器组件(Renderer Component)](#4网格过滤器mesh-filter-和渲染器组件renderer-component)
    - [5.在网格渲染器中应用材质](#5在网格渲染器中应用材质)
  - [探索着色器(Shader)](#探索着色器shader)
    - [2.着色器的类型](#2着色器的类型)
    - [3.基于物理的着色器和渲染](#3基于物理的着色器和渲染)
    - [4.通用渲染管线中的着色器](#4通用渲染管线中的着色器)


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

## Unity 文档入门

![Unity文档网站](https://docs.unity.com/) 是您有关 Unity 所有内容的参考库。

# Mission 2 着色器和材质

## 开始使用着色器和材质

在开始之前，如果您愿意，可以通过以下一些方法来设置项目：

1. 您将看到一些图标，指示您将在其他 Creative Core 学习体验中了解的照明功能。要隐藏它们，请打开 **Scene** 视图窗口右上角的 **Gizmos** 下拉菜单，然后将 `3D Icon` 一直调整到最低值。保持 `3D Icon` 启用。
   ![Gizmos](https://docs.unity3d.com/uploads/Main/gizmo-button-scene-view.png)

2. 如果您看到其他黄线，请禁用Gizmos菜单中的LightProbeGroup 。

3. 要隐藏或查看网格，请使用 Scene 视图控制栏左侧的 网格视图切换按钮。该图标有一个网格和表示 Y 平面的 Y

## 探索网格(Meshes)和渲染(rendering)

用技术术语来说，着色器和材质在网格上运行，网格是游戏对象的表面。它们指示 Unity 的渲染器如何渲染每个网格。在本教程中，您将了解网格和渲染。

学完本教程后，您将能够：
- 定义网格、其特征及其在渲染 3D 游戏对象中的用途
- 解释着色器在渲染过程中的作用
- 将材质分配给游戏对象

每个渲染的 3D 游戏对象都有一个称为网格的几何形状。让我们仔细看看 Unity 编辑器中的网格。

1. 在 Scene 视图中，找到窗口右上角的 `Draw mode` 下拉列表。默认情况下，它设置为 `Shaded` 。
   ![image](https://docs.unity3d.com/uploads/Main/SceneViewControlBar.png)
   第一个icon

2. 使用下拉菜单将绘制模式更改为 `Wireframe` 。
 
这就是 3D 场景本身的样子——没有着色器和材质：
![image](https://connect-cdn-public-prd.unitychina.cn/h1/20211122/learn/images/d0e7cc70-ed8e-44ae-92d8-6aa27dff2f5c_CC_Shad_Mesh_1.png.2000x0x1.png)

网格是游戏对象的 3D 骨架。 

Unity 中的每个游戏对象都有一个网格。它是物体的几何元素。

着色器和材质告诉 Unity 您希望如何将 3D 游戏对象的网格 从 3D 场景渲染到屏幕上的 2D 图像。 

![image](https://connect-cdn-public-prd.unitychina.cn/h1/20211122/learn/images/6644a697-d323-4cd2-af32-38aadd2c4b42_CC_Shad_Mesh_2.png.2000x0x1.png)

> 网格是一系列由顶点（单数：vertex ）定义的平面 2D多边形，顶点是 3D 空间中存储为 XYZ 坐标的点。

![image](https://connect-cdn-public-prd.unitychina.cn/h1/20211122/learn/images/4018953b-4e44-43d4-a0de-a0b8f7eb30ab_CC_Shad_Mesh_3.png.2000x0x1.png)

如果 3D 物体仅由 2D 多边形制成，它就会像钻石或其他宝石一样具有刻面。 3D 网格需要额外的信息才能使其在某些地方显得平滑或弯曲。

网格数据还包括 **法线** ，它们是定义表面面向的方向的附加值。当所有法线都垂直于边缘时，形状就会显得平坦且多面，如下图所示。

![image](https://connect-cdn-public-prd.unitychina.cn/h1/20211122/learn/images/5bc76c0e-2b5d-433f-8b08-9832eee9044b_CC_Shad_Mesh_5.png.2000x0x1.png)

法线表示多边形的形状；例如，它是弯曲的而不是平坦的，以及它是如何弯曲的。着色器根据法线将网格渲染为弯曲的，而不实际更改网格。球体实际上是由许多平坦表面组成的网格，但其法线使表面显得光滑。

着色器的工作是考虑来自顶点和法线的所有数据以准确表示网格表面。

#### 网格是如何制作的？
您可以轻松地将简单的原始形状（例如立方体和球体）添加到 Unity 项目中。任何比这更复杂的东西都是在专门的应用程序中创建的，例如 
- Blender®
- Autodesk® 3ds Max®  
- Maya®
- Adobe® Substance 3D Collection® 
- Pixologic® ZBrush®

### 4.网格过滤器(Mesh filter) 和渲染器组件(Renderer Component)
当您选择苹果或任何非空游戏对象，并在检查器中查看其组件时，网格由网格过滤器组件和网格渲染器组件表示。

1. 在工作台上，选择任意苹果。
2. 在层次结构中，您将看到苹果是一个带有两个子游戏对象的空游戏对象。从层次结构中，选择子 `AppleBody` 。
3. 在检查器中，查看 `Apple Body (Mesh Filter)` 和 `Mesh Renderer ` 。

**Mesh Filter component**
网格过滤器组件指向项目中的网格坐标数据。

如果您愿意，您甚至可以在此处替换网格，方法是选择对象选择器（圆形图标）并从项目中的任何其他对象（例如苹果）中选取网格。

有时，如果您在 Unity 中的游戏对象上做了很多工作（例如，使用着色器和材质或动画），然后想要更改网格，则这会很有用 - 您可以重新导入新网格并替换它。

**Mesh Renderer component**
网格渲染器组件是您指定网格渲染方式的位置。

这里有几个属性，但最重要的一个是 `materials` 。在这些教程中，您将经常返回网格渲染器组件以将材质应用到游戏对象。

### 5.在网格渲染器中应用材质

`material` 是一种与着色器一起定义网格渲染方式的资源。一种材质可以应用于多种网格。

![image](https://connect-cdn-public-prd.unitychina.cn/h1/20211122/learn/images/53faa02d-8b96-4928-aef5-469f89fa568b_CC_Shad_Mesh_6.png.2000x0x1.png)


让我们使用网格渲染器组件将材质应用到工作台上的白苹果：

1. 如果尚未返回到 `Shaded view` ，请返回。
2. 在层次结构中，选择名为 `Apple` 的游戏对象，或者在场景视图中，选择白苹果。
    1. 如有必要，将其移至您可以看到的地方。 （此游戏对象有子游戏对象；移动时请务必选择父对象。）
3. 在层次结构中，选择 `AppleBody` 子对象。
4. 在检查器中，找到 `Mesh Renderer`。
   1. 在这里，您将看到标题为 `Materials` 的部分，其中包含一个标记为 `Element 0` 的项目。 （如果 `Element 0` 不可见，您可能需要选择左侧的折叠页（三角形图标）来展开此部分。）
   2. 您将在此处 Apply material 。
   3. 
   ![image](https://connect-cdn-public-prd.unitychina.cn/h1/20211122/learn/images/ec7ecc93-30a3-4d29-8040-e4986642d975_CC_Shad_Mesh_7.png.2000x0x1.png)
   
   4. （加号 ( + ) 和减号 ( - ) 按钮允许您从应用于对象的材料列表中添加和删除材质。虽然可以将多种材质应用于一个游戏对象，但这超出了本项目的范围。） 

5. 让我们通过更换材质来使这个苹果看起来更像一个苹果。在网格渲染器组件中，选择材质名称右侧的对象选择器（圆形图标）。将出现 `Select Material` 对话框窗口。搜索 AppleRed 并选择它。
   1. ![image](https://connect-cdn-public-prd.unitychina.cn/h1/20211122/learn/images/83710269-750e-437b-8eaf-d5b94bb8e442_CC_Shad_Mesh_8.png.2000x0x1.png)
   2. 在检查器中，请注意窗口底部或附近的部分（材质检查器），其中列出了材质的属性。此部分的标题将为您刚刚应用的材料的名称。 （您可能需要选择左侧的折页（三角形图标）来展开此部分。）您将在此处创建和配置材质。
   3. ![image](https://connect-cdn-public-prd.unitychina.cn/h1/20211122/learn/images/0eb593a8-4712-4993-8bef-c401aa468194_CC_Shad_Mesh_9.png.2000x0x1.png)

## 探索着色器(Shader)

着色器是一个脚本，它应用材质中包含的属性 将 3D 对象 的 meshes 渲染到屏幕上的 2D 图像。

每个着色器都是为特定 [render pipeline](https://learn.unity.com/tutorial/get-started-on-your-guided-project#619fbf21edbc2a39aabd80eb) 编写的。 

![image](https://connect-cdn-public-prd.unitychina.cn/h1/20211122/learn/images/f9a7bbfa-9e76-42f3-bf2c-7ef4bdd896a9_CC_Shad_Shdrs_1.png.2000x0x1.png)

您使用的着色器取决于您的渲染管道。

在 Unity 中，每个模板都附带专门为模板中使用的渲染管道设计的着色器。

着色器可以有很大的不同，提供多种可以应用于您的项目的视觉样式。在稍后的学习体验中，您甚至将学习如何创建自己的着色器！

### 2.着色器的类型

总的来说，着色器中发生两种类型的操作：**片段着色(Fragment shading)** 和 **顶点着色(Vertex shading)** 。

片段着色，也称为像素着色，是表示网格表面以产生 2D 图像中每个像素的颜色的着色。在此项目中，我们将使用片段着色器并详细讨论它们如何使用场景中的光线进行渲染。

顶点着色作用于网格的顶点，通常会更改其位置以使表面移动或变换。我们不会在本次学习体验中介绍顶点着色，但我们将在未来的教程中提供更多资源。

您经常会看到着色器被称为片段着色器或顶点着色器，具体取决于它们的主要用途，但所有着色器都可以执行这两种操作。

### 3.基于物理的着色器和渲染

随着计算机变得越来越强大并且渲染技术不断发展，**基于物理的渲染 (PBR)** 已经变得更加广泛。 

PBR 模拟现实世界的物理和光原理，以在 3D 表面上生成逼真的阴影、反射、环境光和其他光效果。[您可以在 Unity 手册中了解有关这些原则的更多信息](https://docs.unity3d.com/Manual/shader-StandardShader.html)。

使用 PBR ，灯光和表面的属性保持分离。

灯光是根据亮度、颜色和范围来定义的。

表面是使用材料根据颜色、反射率和其他影响光在表面上的行为的现实世界属性来定义的。 （您将在本次学习体验中了解这些现实世界的属性。）然后，着色器根据场景的灯光、表面和 3D 几何体以及其他因素来计算从表面反射的光的质量。

在下图中，每个表面的外观随着场景中光线的变化而变化。每个图像中的表面属性都是相同的——只是光线的颜色和方向发生了变化。

![video](https://connect-cdn-public-prd.unitychina.cn/h1/20211122/learn/images/77875b15-bebe-427b-a7d9-5c436beff2c3_PBRExample.gif._gif_.mp4)


另一方面，对于 **非基于物理的渲染** ，渲染的颜色、阴影和反射要么在没有 PBR 科学的情况下进行近似，要么根本不渲染。

使用非 PBR 着色器，红色材质可能会渲染为纯红色或具有简单的反射和阴影。

非 PBR 通常看起来不像 PBR 那样真实，但对于风格化效果来说它可能更理想。

**卡通着色器是一种非 PBR 着色器，它使 3D 场景中的表面看起来像 2D 卡通。**

### 4.通用渲染管线中的着色器

着色器必须与项目的 `渲染管道` 兼容。

在本次学习体验中，我们将在通用 `渲染管道 (URP)` 项目中工作，因此我们将仅使用 URP 着色器。让我们快速浏览一下一些 URP 着色器。

您会看到许多着色器的名称中都包含 **Lit** 或 **Unlit** 。

**Lit** 着色器会对场景中的光线做出响应，而 **Unlit** 的着色器则不会。

**Unlit** 着色器对于某些艺术效果 或 通过不使用光照来更有效地运行的优化项目很有用。

> 注意：更改已创建材质的着色器（正如您将在本演示中所做的那样）并不常见，因为材质基于特定着色器的属性。通常，您将首先选择一个着色器，然后为该着色器配置材质。

浏览着色器：

1. 在工作台上选择一个黄色柠檬（不是白色柠檬）。
2. 在检查器中，找到位于检查器窗口底部的 material 检查器，并根据需要展开该部分。
3. 在 material 检查器 顶部的材质缩略图附近，找到 `Shader` 属性。
4. 使用下拉列表查看着色器类别列表。选择 `Universal Render Pipeline` 以查看 URP 着色器。
5. 选择黄色柠檬游戏对象后，选择每个 URP 着色器并注意结果。请务必从 `Universal Render Pipeline` 子菜单中选择着色器。
   1. **2D > Sprite-Lit-Default:** 专为 2D 项目设计，此着色器仅适用于平面对象，并将任何 3D 对象渲染为 2D。作为光照着色器，它将根据场景中到达对象的光线进行渲染。
   2. **Particles > Lit, Simple Lit, and Unlit:** 这些着色器用于视觉效果 (VFX)。在创意核心途径中，您将在 VFX 任务中使用这些着色器。
   3. **Terrain > Lit:** 此着色器针对与 Unity 中的 Terrain 工具一起使用进行了优化。在创意核心途径中，您将在原型制作任务中使用此着色器。
   4. **Baked Lit:** 此着色器会自动应用于光照贴图，您将在创意核心途径的光照任务中遇到它。
   5. **Complex Lit, Lit, and Simple Lit:** 这些都是通用的、基于物理的光照着色器的变体。
   6. **Unlit** 如上所述，不使用光的着色器。

在本次学习体验中，我们将使用 **Universal Render Pipeline/Lit Shader,** ，这是一种基于物理的着色器。因为它是基于物理的，所以我们定义的材质将基于现实世界表面的属性，例如反照率颜色、镜面反射值和反射率 - 您将在以后的教程中学习这些概念。 
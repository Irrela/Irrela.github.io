---
title: Kubernetes
categories: Middleware
tags:
- Middleware
---

- [Learn Kubernetes Basics](#learn-kubernetes-basics)
  - [一些概念](#一些概念)
    - [Pod（容器组）](#pod容器组)
    - [Deployment](#deployment)
    - [Service](#service)
  - [Objective](#objective)
  - [What can Kubernetes do for you?](#what-can-kubernetes-do-for-you)
  - [Create a Cluster](#create-a-cluster)
    - [Kubernetes Clusters](#kubernetes-clusters)
    - [Cluster Diagram](#cluster-diagram)
    - [Hello Minikube (Optional)](#hello-minikube-optional)
      - [Objectives](#objectives)
      - [Installation](#installation)
      - [Interact](#interact)
      - [Create a Deployment](#create-a-deployment)
      - [Create a Service](#create-a-service)
      - [Enable addons](#enable-addons)
      - [清理](#清理)
  - [使用 kubectl 创建 Deployment](#使用-kubectl-创建-deployment)
    - [Objectives](#objectives-1)
    - [Kubernetes Deployments](#kubernetes-deployments)
    - [Deploying your first app on Kubernetes](#deploying-your-first-app-on-kubernetes)
      - [Deploy an app](#deploy-an-app)
      - [View the app](#view-the-app)
  - [Viewing Pods and Nodes](#viewing-pods-and-nodes)
    - [Objectives](#objectives-2)
    - [Kubernetes Pods](#kubernetes-pods)
    - [Nodes](#nodes)
    - [使用kubectl进行故障排除(Troubleshooting)](#使用kubectl进行故障排除troubleshooting)
  - [Using a Service to Expose Your App](#using-a-service-to-expose-your-app)
    - [Obj](#obj)
    - [Kubernetes Services](#kubernetes-services)
    - [Services and Labels](#services-and-labels)
    - [Create a new Service](#create-a-new-service)
    - [Step 2: Using labels](#step-2-using-labels)
    - [Deleting a service](#deleting-a-service)
  - [Running Multiple Instances of Your App](#running-multiple-instances-of-your-app)
    - [Scaling an application](#scaling-an-application)
    - [Scaling a Deployment](#scaling-a-deployment)
    - [Load Balancing](#load-balancing)
    - [Scale Down](#scale-down)
  - [Performing a Rolling Update (滚动更新)](#performing-a-rolling-update-滚动更新)
    - [Updating an application](#updating-an-application)
    - [Rolling updates](#rolling-updates)
    - [Update the version of the app](#update-the-version-of-the-app)
    - [Step 2: Verify an update](#step-2-verify-an-update)
    - [Roll back an update](#roll-back-an-update)
  - [Certification](#certification)
    - [App Dev](#app-dev)


# Learn Kubernetes Basics
## 一些概念

在 Kubernetes（k8s）中，`Deployment`、`Pod` 和 `Service` 是构建和管理容器化应用的关键组件。
它们分别负责不同的任务，共同协作以提供可伸缩、可靠和易管理的容器化环境。

总结：
`Pod` 包含容器，`Deployment` 用于管理 `Pod` 的副本和更新策略，`Service` 用于提供稳定的入口点并将流量引导到一组相似的 `Pod`。它们共同协作，形成一个灵活、可扩展和易管理的容器化应用环境。

### Pod（容器组）
作用： 
`Pod` 是 Kubernetes 中最小的可部署单元，用于`封装一个或多个容器`，并共享相同的网络命名空间、存储卷等资源。

关系： 
`Pod` 是 Docker 容器的封装，一个 `Pod` 中可以包含一个或多个容器，这些容器通常共享相同的上下文和资源。

使用场景：
当需要将多个容器协同工作时，例如一个主应用程序和一个辅助辅助应用，它们需要在同一主机上运行并共享相同的网络和存储空间。

### Deployment
作用： 
`Deployment` 是一种控制器，用于`声明性地管理 Pod 的副本数和更新策略`。它确保所需数量的 `Pod` 始终在运行，并处理滚动升级、回滚等操作。

关系：
`Deployment` 使用 `Pod` 模板来创建和更新 `Pod`，从而管理容器化应用的生命周期。

使用场景：
当需要确保应用程序始终以指定数量的实例运行，并在升级时实现零宕机部署时，使用 `Deployment`。

### Service
作用： 
`Service` 是`用于将网络流量引导到一组相同或相似的 Pod 的抽象`。它提供了一个稳定的入口点，并通过标签选择器将请求路由到后端的 `Pod`。

关系： 
`Service` 与 `Pod` 一起工作，使应用程序可以在 `cluster` 中保持可访问性，并通过负载均衡将流量分配到相应的 `Pod`。

使用场景：
当需要将流量引导到应用程序的多个实例时，使用 `Service`。这有助于提高应用程序的可用性和可伸缩性。


## Objective
Using the tutorials, you can learn to:

- Deploy a containerized application on a cluster.

- Scale the deployment.

- Update the containerized application with a new software version.

- Debug the containerized application.


## What can Kubernetes do for you?
对于现代Web服务，用户希望应用程序全天候可用，开发人员希望每天部署几次这些应用程序的新版本。
`Containerization` 有助于打包软件以实现这些目标，使应用程序能够在不停机的情况下发布和更新。
`Kubernetes` 帮助您确保这些容器化的应用程序可以随时随地运行，并帮助它们找到工作所需的资源和工具。
`Kubernetes` 是一个可用于生产的开源平台，它结合了Google在容器编排方面积累的经验，以及来自社区的最佳创意。

## Create a Cluster

了解 `Kubernetes cluster` 并使用 `Minikube` 创建一个简单的 `cluster`。

### Kubernetes Clusters

***Kubernetes 协调一个高度可用的计算机集群，这些计算机作为一个单元连接在一起工作***。
`Kubernetes` 中的抽象允许您将容器化的应用程序部署到集群中，而无需将它们专门绑定到单独的机器上。
为了利用这种新的部署模型，应用程序需要以一种将它们与单独的主机分离的方式打包：它们需要被 `containerized`。
在过去的部署模型中，应用程序作为深度集成到主机中的包被直接安装到特定的计算机上, 与过去的部署模型相比，容器化的应用程序更加灵活和可用。
`Kubernetes` 以更高效的方式自动化了应用程序容器在集群中的分发和调度。`Kubernetes` 是一个开源平台并且 `production-ready`。

`Kubernetes` 集群由两种类型的资源组成：

- `Control Plane` 协调集群

- `Nodes` 是运行应用程序的工作者


### Cluster Diagram

 `control plane` 负责管理 `cluster` 。 `control plane` 协调 `cluster` 中的所有活动，例如调度应用程序、维护应用程序的所需状态、扩展应用程序以及推出新的更新。

 `node` 是在 `Kubernetes cluster` 中充当工作计算机的VM或物理计算机。
每个 `node` 都有一个 `Kubelet` ，它是一个代理，用于管理 `node` 并与 `Kubernetes control plane` 通信。
 `node` 还应该具有用于处理容器操作的工具，例如 `CONTAERD` 或 `CRI-O` 。
处理生产流量的 `Kubernetes` 集群应该至少有三个 `node` ，因为如果一个 `node` 出现故障，`[etcd](https://kubernetes.io/docs/concepts/overview/components/#etcd)`成员和 `control plane` 实例都会丢失，冗余也会受到影响。
您可以通过添加更多 `control plane`  `node` 来降低此风险。

当您在`Kubernetes`上部署应用程序时，您告诉 `control plane` 启动应用程序容器。
 `control plane` 安排容器在 `cluster` 的 `node` 上运行。 `node` 级组件(如kubelet)使用 `control plane` 公开的 `[Kubernetes API](https://kubernetes.io/docs/concepts/overview/kubernetes-api/)` 与 `control plane` 通信。
终端用户也可以直接使用`Kubernetes`接口与集群交互。

`Kubernetes`集群可以部署在物理机上，也可以部署在虚拟机上。
要开始使用`Kubernetes`开发，您可以使用Minikube。
Minikube是一个轻量级的`Kubernetes`实现，它在本地机器上创建一个VM，并部署一个只包含一个 `node` 的简单集群。
Minikube可用于Linux、MacOS和Windows系统。
Minikube CLI提供了使用集群的基本引导操作，包括启动、停止、状态和删除。

### Hello Minikube (Optional)

Minikube 可以看作是 Kubernetes 的一个工具，它的主要目的是在本地机器上创建一个小规模的 Kubernetes 集群，以便开发者可以在本地环境中测试和调试他们的应用。
Minikube 提供了一个简化的入口，使得初学者能够更容易地开始学习和使用 Kubernetes，而不必在生产环境中配置一个完整的 Kubernetes 集群。

#### Objectives 
- 部署一个 sample app 到 minikube.

- Run the app.

- View application logs.

#### Installation
```bash
# 验证并安装minikube - Linux
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# 验证并安装minikube - MacOS
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-arm64
sudo install minikube-darwin-arm64 /usr/local/bin/minikube

# 验证安装成功
minikube version

# 启动集群
minikube start
```

> 前置需求 docker-driver， MacOS直接下载 Docker Desktop作为准备环境比较方便

#### Interact
`kubectl`： Kubernetes 命令行工具，用于与 Kubernetes 集群进行交互。
```bash
# Download
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

# Install
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

# Verify
kubectl version --client
```


#### Create a Deployment 
Kubernetes Pod是一组一个或多个容器，为了管理和联网而绑定在一起。
本教程中的Pod只有一个Container
Kubernetes Deployment检查Pod的健康状况，并在Pod的Container终止时重新启动Pod。
推荐使用Deployments来管理Pod的创建和扩展。

***1.使用kubectl create命令创建一个Deployment来管理Pod。***
Pod基于提供的Docker镜像运行Container。

> create 出现ErrImagePull开一下全局梯子，因为要从Docker Hub拉取

```bash
# 使用 kubectl 工具创建一个名为 hello-node 的 Deployment。
# Deployment 是一种 Kubernetes 资源，用于定义和管理 Pod 的副本数、更新策略等。
kubectl create deployment hello-node 
# 指定了要在 Pod 中运行的容器的镜像。
# 在这个例子中，使用的是 registry.k8s.io/e2e-test-images/agnhost:2.39 这个镜像。
# 这个镜像是 Kubernetes 官方维护的一个测试镜像，名为 agnhost。
--image=registry.k8s.io/e2e-test-images/agnhost:2.39 
# 命令启动了一个简单的 HTTP 服务器，监听端口 8080
-- /agnhost netexec --http-port=8080


# 删除Deployment，以及与其关联的 ReplicaSet 和 Pods
kubectl delete deployment hello-node
# 一种更广泛的删除方式，删除所有与 Deployment 相关的资源
kubectl delete all -l app=hello-node
```

***2.查看相关信息***
可以通过dashboard或者命令行kubectl查看：
```bash
kubectl get deployments

kubectl get pods

kubectl get events

# View the kubectl configuration
kubectl config view

kubectl logs hello-node-5f76cf6ccf-br9b5
```

#### Create a Service 
默认情况下，实例只能通过其在Kubernetes集群内的内部IP地址访问。
要从Kubernetes虚拟网络外部访问Hello-node Container，您必须将Pod公开为Kubernetes服务。

***1.使用kubectl expose命令将Pod暴露给公共互联网：***

```bash
kubectl expose deployment hello-node --type=LoadBalancer --port=8080
```
`--type=LoadBalancer`标志指示您希望在集群外部公开您的服务。

`--port=8080`: test image 中的应用程序代码仅侦听TCP端口8080。如果你使用kubectl expose来暴露一个不同的端口，客户端将无法连接到另一个端口。

***2.查看您创建的Service***
```bash
kubectl get services
```

***3.访问 service***
在支持负载均衡器的云提供商上，将提供外部IP地址来访问该服务。

minikube上，LoadBalancer类型使服务可以通过 `minikube service` 命令进行访问。
```bash
minikube service hello-node
```
这将打开一个浏览器窗口，为您的应用程序提供服务，并显示应用程序的响应。

#### Enable addons 
Minikube工具包括一组内置的 `addons`(插件)，可以在当地的Kubernetes环境中启用、禁用和打开。
```bash

# 列出当前支持的加载项
minikube addons list

# 启用addons，例如metrics-server
minikube addons enable metrics-server


# 禁用addons
minikube addons disable metrics-server

# 通过安装该加载项查看您创建的Pod和服务
kubectl get pod,svc -n kube-system
```

#### 清理
现在，您可以清理您在群集中创建的资源：
```bash
kubectl delete service hello-node
kubectl delete deployment hello-node
# 一种更广泛的删除方式，删除所有与 Deployment 相关的资源
kubectl delete all -l app=hello-node
```

停止Minikube集群
```bash
minikube stop
```

或者，删除Minikube VM：
```bash
# Optional
minikube delete
```
如果你想再次使用minikube来了解更多关于Kubernetes的信息，你不需要删除它。


## 使用 kubectl 创建 Deployment

### Objectives
- Learn about application Deployments.
- Deploy your first app on Kubernetes with kubectl.

### Kubernetes Deployments
一旦您有了一个正在运行的Kubernetes cluster ，您就可以在其上部署您的容器化应用程序。
为此，您需要创建一个Kubernetes `Deployment` 。
该 `Deployment` 指示Kubernetes如何创建和更新应用程序的实例。
一旦您创建了 `Deployment` ，Kubernetes 控制平面就会安排该 `Deployment` 中包含的应用程序实例在 cluster 中的各个 `node` 上运行。

一旦创建了应用程序实例，Kubernetes部署控制器就会持续监控这些实例。
如果托管实例的 `node` 关闭或被删除，部署控制器将用 `cluster` 中另一个 `node` 上的实例替换该实例。
这提供了一种自我修复机制来解决机器故障或维护问题。

在预先编制的世界中，安装脚本通常用于启动应用程序，但它们不允许从机器故障中恢复。
通过创建应用程序实例并使其跨 `node` 运行，Kubernetes部署提供了一种完全不同的应用程序管理方法。

### Deploying your first app on Kubernetes
可以使用Kubernetes命令行界面kubectl创建和管理 `Deployment` 。
Kubectl使用Kubernetes API与 `cluster` 交互。
在本模块中，您将学习创建在Kubernetes `cluster` 上运行应用程序的部署所需的最常见的kubectl命令。

在创建 `Deployment` 时，您需要指定应用程序的容器映像以及要运行的副本的数量。
您可以在以后通过更新 `Deployment` 来更改该信息；
训练营的模块5和6讨论了如何扩展和更新 `Deployment` 。

应用程序需要打包成一种受支持的容器格式，才能部署在Kubernetes上

对于第一次部署，您将使用打包在Docker容器中的Hello-node应用程序，该应用程序使用Nginx `echo back(回显)`所有请求。(如果您还没有尝试创建Hello-node应用程序并使用容器部署它，您可以按照Hello Minikube教程中的说明首先尝试)

> "Echo back" 意味着将接收到的内容原封不动地返回或回显回去。在 web 开发或网络通信中，"echo back" 经常用于测试或调试，以验证数据是否能够成功传输或处理。
> 意味着 hello-node 应用程序通过 NGINX 服务器处理请求，并简单地将收到的请求内容返回给发送请求的客户端。
> 这通常用于展示容器化应用程序的基本功能，同时也可以用于测试网络的连接和数据传输。

您还需要安装kubectl。如果需要安装，请访问安装工具。

#### Deploy an app
让我们使用`kubectl create deployment`命令在Kubernetes上部署我们的第一个应用。
我们需要提供部署名称和应用镜像位置（包括托管在Docker Hub之外的镜像的完整存储库URL）。
```bash
kubectl create deployment kubernetes-bootcamp --image=gcr.io/google-samples/kubernetes-bootcamp:v1
```

> 建议先开全局梯子，然后手动拉取镜像`docker pull gcr.io/google-samples/kubernetes-bootcamp:v1`

```bash
原版镜像:gcr.io/google-samples/kubernetes-bootcamp:v1

加速地址:registry.cn-beijing.aliyuncs.com/typ/kubernetes-bootcamp:v1

原版镜像:k8s.gcr.io/kubernetes-dashboard-amd64:v1.8.3

加速地址:registry.cn-beijing.aliyuncs.com/typ/kubernetes-dashboard-amd64:v1.8.3

原版镜像:k8s.gcr.io/coredns:1.2.2

加速地址:registry.cn-beijing.aliyuncs.com/ddn_k8s/coredns:1.2.2
```

您刚刚通过创建部署部署了您的第一个应用程序。这为您执行了一些操作：

- 已搜索可以运行应用程序实例的合适节点(我们只有1个可用节点)

- 已计划在该节点上运行应用程序

- 已配置群集，以便在需要时重新计划新节点上的实例


#### View the app
运行在Kubernetes内部的Pod运行在专用的隔离网络上。
默认情况下，它们在同一Kubernetes集群内的其他实例和服务中可见，但在该网络之外不可见。
当我们使用kubectl时，我们`通过一个API端点与应用程序进行交互`。

稍后，我们将在模块4中介绍如何在Kubernetes集群外部公开您的应用程序的其他选项。

`Kubectl Proxy`命令可以创建一个代理，该代理将通信转发到群集范围的专用网络。
可以通过按Ctrl-C来终止代理，并且在其运行时不会显示任何输出。

新建一个terminal窗口运行: `kubectl proxy`。(ctrl + c即可关闭该命令创建的代理)

现在，我们已经在主机(终端)和Kubernetes集群之间建立了连接。代理允许从这些终端直接访问API。

您可以看到通过代理端点托管的所有这些API。例如，我们可以使用curl命令通过API直接查询版本：
```bash
curl http://localhost:8001/version
```

API服务器将根据Pod名称为每个Pod自动创建一个 `endpoint` ，该 `endpoint` 也可以通过代理访问。

首先，我们需要获取Pod名称，并将其存储在环境变量POD_NAME中：
```bash
export POD_NAME=$(kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')
echo Name of the Pod: $POD_NAME
```

您可以通过代理API访问实例，方法是运行：
```bash
curl http://localhost:8001/api/v1/namespaces/default/pods/$POD_NAME/
```

为了在不使用代理的情况下访问新部署，需要提供服务，这将在模块4中进行说明。

## Viewing Pods and Nodes

### Objectives
- Learn about Kubernetes Pods.
- Learn about Kubernetes Nodes.
- Troubleshoot deployed applications.

### Kubernetes Pods
当您在模块2中创建部署时，Kubernetes创建了一个Pod来托管您的应用程序实例。
Pod是一种Kubernetes抽象，表示一组一个或多个应用容器(如Docker)，以及这些容器的一些共享资源。这些资源包括：
- 共享存储，作为Volumes

- 网络，作为唯一的群集IP地址

- 有关如何运行每个容器的信息，例如要使用的容器镜像版本或特定端口

Pod对特定于应用程序的“`逻辑主机(logical host)`”进行建模，并可以包含相对紧密耦合的不同应用程序容器。
例如，Pod可能既包括Node.js应用程序的容器，也包括为Node.js Web服务器发布的数据提供数据的不同容器。
`Pod中的容器共享IP地址和端口空间`，始终位于同一位置和共同调度，并在同一 `node` 上的共享上下文中运行。

`Pods` 是Kubernetes平台上的原子单元。
当我们在Kubernetes上创建 `Deployment` 时，该 `Deployment` 创建包含容器的Pod(而不是直接创建容器)。
每个Pod被绑定到它计划的 `node` ，并且一直保持在那里直到终止(根据重启策略)或删除。如果一个 `node` 出现故障，将在集群中的其他可用 `node` 上调度相同的Pod。

> 仅当容器紧密耦合并需要共享磁盘等资源时，才应将它们一起调度在单个Pod中。

### Nodes
Pod始终在 `node` 上运行。
 `node` 是Kubernetes中的工作机器，可以是虚拟机器也可以是物理机器，具体取决于集群。
每个 `node` 由控制平面管理。
一个 `node` 可以有多个Pod，Kubernetes控制平面自动处理跨群集中 `node` 的Pod调度。
控制平面的自动调度考虑了每个 `node` 上的可用资源。

每个Kubernetes `node` 至少运行：
- `Kubelet`，负责Kubernetes控制平面和 `node` 之间通信的进程；它管理在机器上运行的Pod和Containers。

- 容器运行时(如Docker)，负责从注册表中拉出容器镜像、解包容器并运行应用程序

### 使用kubectl进行故障排除(Troubleshooting)
[Official Doc](https://kubernetes.io/docs/tutorials/kubernetes-basics/explore/explore-intro/)


## Using a Service to Expose Your App

### Obj
- Service
- How labels and selectors relate to a Service
- `Expose` an application outside a Kubernetes cluster using a Service


### Kubernetes Services

Kubernetes Pod是 mortal 的。`Pods` 有生命周期。
当一个worker `node` 死亡时，在该 `node` 上运行的Pod也会丢失。
然后，ReplicaSet可以通过创建新的Pod来动态地将集群驱动回所需的状态，以保持应用程序的运行。
作为另一个示例，考虑具有3个副本的图像处理后端。
这些副本是可交换的;前端系统不应该关心后端副本，即使Pod丢失并重新创建。
也就是说，`Kubernetes集群中的每个Pod都有一个唯一的IP地址`，即使是同一个Node上的Pod也是如此，因此需要一种方法来自动协调Pod之间的更改，以便您的应用程序继续运行。

Kubernetes中的Service是一个抽象，`它定义了一组逻辑Pod以及访问它们的策略`。
 `Service` 支持依赖Pod之间的松散耦合。
 `Service` 使用YAML或JSON定义，就像所有Kubernetes对象清单一样。
 `Service` 所针对的Pod集合通常由标签选择器决定（请参阅下文了解为什么您可能需要一个不包含选择器的Service）。

虽然每个Pod都有一个唯一的IP地址，但如果没有Service，这些IP不会暴露在集群之外。
 `Service` 允许您的应用程序接收流量。
通过在 `Service` 的规范中指定类型，可以以不同的方式公开 `Service` :
- `Cluster IP`（默认）-在集群中的内部IP上公开 `Service` 。此类型使 `Service` 只能从集群内访问。

- `NodePort` -使用NAT在群集中每个选定 `node` 的同一端口上公开 `Service` 。使用：使 `Service` 可从群集外部访问`<NodeIP>:<NodePort>`。IP的超集。

- `LoadBalancer` -在当前云中创建外部负载均衡器（如果支持），并为 `Service` 分配固定的外部IP。NodePort的超集。

- `ExternalName` -通过返回带有其值的CNAME记录，将 `Service` 映射到externalName字段的内容（例如foo.bar.example.com）。不设置任何类型的限制。此类型需要kube-dns v1.7或更高版本，或CoreDNS 0.0.8或更高版本。


此外，请注意， `Service` 中有一些用例涉及在规范中不定义选择器。
在没有选择器的情况下创建的 `Service` 也不会创建相应的终结点对象。
这允许用户手动将 `Service` 映射到特定终端。没有选择器的另一个可能原因是您严格使用了类型：ExternalName。

### Services and Labels
 `Service` 通过一组Pod来路由流量。
 `Service` 是一种抽象，它允许Pod在Kubernetes中死亡和复制，而不会影响您的应用程序。
依赖Pod(如应用程序中的前端和后端组件)之间的发现和路由由Kubernetes `Service` 处理。

 `Service` 使用 `Label` 和选择器匹配一组Pod，这是一种分组原语，允许对Kubernetes中的对象进行逻辑操作。
 `Label` 是附加到对象的键/值对，可以以任意数量的方式使用：
- 指定开发、测试和生产对象

- 嵌入版本 `Label` 

-使用 `Label` 对对象进行分类

 `Label` 可以在创建时或以后附着到对象。
它们可以随时修改。
现在让我们使用服务公开我们的应用程序并应用一些 `Label` 。

### Create a new Service

> 如果已经关闭上一个教程章节的应用，重启：打开docker -> minikube start -> minikube dashboard
> 之前的应用应该会自动重启

运行`kubectl get services`, 当前显示：
```bash
NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   2d3h
```
我们有一个名为Kubernetes的 `Service` ，它是在minikube启动集群时默认创建的。
要创建新服务并将其公开给外部流量，我们将使用带有NodePort参数的expose命令。
```bash
kubectl expose deployment/kubernetes-bootcamp --type="NodePort" --port 8080
```
运行完后显示：
```bash
NAME                  TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
kubernetes            ClusterIP   10.96.0.1        <none>        443/TCP          2d3h
kubernetes-bootcamp   NodePort    10.111.121.169   <none>        8080:31846/TCP   3s
```

要找出外部打开了哪个端口(对于类型：NodePort Service)，我们将运行`Describe Service`子命令：
```bash
kubectl describe services/kubernetes-bootcamp
```
显示：
```bash
Name:                     kubernetes-bootcamp
Namespace:                default
Labels:                   app=kubernetes-bootcamp
Annotations:              <none>
Selector:                 app=kubernetes-bootcamp
Type:                     NodePort
IP Family Policy:         SingleStack
IP Families:              IPv4
IP:                       10.111.121.169
IPs:                      10.111.121.169
Port:                     <unset>  8080/TCP
TargetPort:               8080/TCP
NodePort:                 <unset>  31846/TCP
Endpoints:                10.244.0.21:8080
Session Affinity:         None
External Traffic Policy:  Cluster
Events:                   <none>
```
可以看到`NodePort: 31846/TCP`
创建一个名为 `NODE_PORT` 的环境变量，并为其分配Node端口值：
```bash
export NODE_PORT="$(kubectl get services/kubernetes-bootcamp -o go-template='{{(index .spec.ports 0).nodePort}}')"
echo "NODE_PORT=$NODE_PORT"
```

现在，我们可以使用 `curl` 、 `node` 的IP地址和外部暴露的端口来测试应用程序是否暴露在集群外部：
```bash
curl http://"$(minikube ip):$NODE_PORT"
```

> Note: 如果您使用Docker Desktop作为容器驱动程序来运行mini kube，则需要一条mini kube隧道。
> 这是因为Docker Desktop中的容器与您的主机隔离。
> 在单独的终端窗口中，执行：`minikube service kubernetes-bootcamp --url`
这会返回：
```bash
http://127.0.0.1:58476
❗  因为你正在使用 darwin 上的 Docker 驱动程序，所以需要打开终端才能运行它。
```

然后就可以`curl`: `curl http://127.0.0.1:58476`，你应该能得到一个如下的返回：
```bash
Hello Kubernetes bootcamp! | Running on: kubernetes-bootcamp-79b64c5769-4fdkp | v=1
```
说明我们的 `Service` 已经暴露到公开。

### Step 2: Using labels

`Label` 是一个非常重要的概念，可以用于选择性地标记和选择对象，包括 `Pods` 和 `Services`

`Service` 的 `Selector` 主要用于选择与其关联的 `Pods`。
在 `Service` 的定义中，你可以指定一个或多个 Label，用于标识属于这个 `Service` 的 `Pods`。`Service` 将使用这个 Label `Selector` 来确定哪些 `Pods` 将被关联到这个 `Service`。

`Service` 的 Label：
尽管 `Service` 的主要作用是关联到 `Pods`，但你也可以为 `Service` 自身定义一个 Label。这个 Label 可以用于组织、管理和标识 `Service`。它不会影响到选择哪些 `Pods`，但可以作为额外的元数据存在。


部署会自动为我们的Pod创建一个标签。
使用`kubectl describe deployment`命令，
您可以看到该标签的名称(键)：`Labels:  app=kubernetes-bootcamp`
```bash
Name:                   kubernetes-bootcamp
Namespace:              default
CreationTimestamp:      Wed, 15 Nov 2023 00:01:26 +0800
Labels:                 app=kubernetes-bootcamp
Annotations:            deployment.kubernetes.io/revision: 1
Selector:               app=kubernetes-bootcamp
Replicas:               1 desired | 1 updated | 1 total | 1 available | 0 unavailable
StrategyType:           RollingUpdate
MinReadySeconds:        0
RollingUpdateStrategy:  25% max unavailable, 25% max surge
Pod Template:
  Labels:  app=kubernetes-bootcamp
  Containers:
   kubernetes-bootcamp:
    Image:        registry.cn-beijing.aliyuncs.com/typ/kubernetes-bootcamp:v1
    Port:         <none>
    Host Port:    <none>
    Environment:  <none>
    Mounts:       <none>
  Volumes:        <none>
Conditions:
  Type           Status  Reason
  ----           ------  ------
  Available      True    MinimumReplicasAvailable
  Progressing    True    NewReplicaSetAvailable
OldReplicaSets:  <none>
NewReplicaSet:   kubernetes-bootcamp-79b64c5769 (1/1 replicas created)
Events:
  Type    Reason             Age   From                   Message
  ----    ------             ----  ----                   -------
  Normal  ScalingReplicaSet  18h   deployment-controller  Scaled up replica set kubernetes-bootcamp-79b64c5769 to 1
```

让我们使用这个标签来查询我们的Pod列表。我们将使用带有`-L`作为参数的`kubectl get pods`命令，后跟标签值：
```bash
kubectl get pods -l app=kubernetes-bootcamp
```
返回：
```bash
NAME                                   READY   STATUS    RESTARTS      AGE
kubernetes-bootcamp-79b64c5769-4fdkp   1/1     Running   1 (36m ago)   18h
```

获取Pod的名称并将其存储在POD_NAME环境变量中：
```bash
export POD_NAME="$(kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')"
echo "Name of the Pod: $POD_NAME"
```

`要应用新标签`，我们使用 `label` 子命令，后跟对象类型、对象名称和新标签`version=v1`：
```bash
kubectl label pods "$POD_NAME" version=v1
```
这将向我们的Pod应用一个新标签(我们将应用程序版本固定到Pod)，我们可以使用`Describe Pod`命令进行检查：
```bash
kubectl describe pods "$POD_NAME"
```
我们在这里看到标签现在贴在我们的Pod上。现在我们可以使用新标签查询pod列表：
```bash
kubectl get pods -l version=v1
```
我们会看到返回是我们的pod

### Deleting a service
```bash
# 根据label删除服务
kubectl delete service -l app=kubernetes-bootcamp
```

我们的服务已被移除。要确认路由不再公开，您可以 `curl` 之前公开的IP和端口：
```bash
curl http://"$(minikube ip):$NODE_PORT"
# With Docker desktop
minikube service kubernetes-bootcamp --url 
curl http://127.0.0.1:58476  # 上一个command的返回值
```
会发现无返回并超时, 这证明不能再从集群外部访问该应用程序。

你可以从Pod内部确认应用程序仍在运行:
```bash
kubectl exec -ti $POD_NAME -- curl http://localhost:8080
```

## Running Multiple Instances of Your App

### Scaling an application
之前，我们创建了一个部署，然后通过 `Service` 公开了它。该部署只创建了一个用于运行我们的应用程序的Pod。当流量增加时，我们将需要扩展应用程序以跟上用户需求。

如果您还没有学习前面的部分，那么可以从使用Minikube创建集群开始。

通过更改部署中的复制副本数量来实现 `scaling` 

注意：如果您在上一节之后尝试此操作，则可能需要从创建集群开始，因为服务可能已被删除

>  `scaling` 是通过更改部署中的副本数量来实现的。


Scaling out部署将确保创建新的Pod并计划到具有可用资源的节点。
Scaling会将Pod的数量增加到新的所需状态。
Kubernetes还支持Pods的autoscaling，但这超出了本教程的范围。
Scaling到零也是可能的，它将终止指定部署的所有Pod。

运行一个应用程序的多个实例将需要一种将流量分配给所有实例的方法。
Services具有集成的负载均衡器，该均衡器将网络流量分发到公开部署的所有Pod。
服务将使用端点持续监控正在运行的Pod，以确保流量仅发送到可用Pod。

一旦一个应用程序的多个实例在运行，您就可以在不停机的情况下进行滚动更新(Rolling updates)。
我们将在本教程的下一节中介绍这一点。现在，让我们转到终端并扩展我们的应用程序。

### Scaling a Deployment
要列出您的 Deployments ，请使用`Get Deployments`子命令：`kubectl Get Deployments`

输出应类似于：
```bash
NAME                  READY   UP-TO-DATE   AVAILABLE   AGE
kubernetes-bootcamp   1/1     1            1           11m
```

我们应该有一个 `Pod`。这表明：

- `name`列出群集中 `Deployments` 的名称。

- `Ready`显示当前复制副本/所需复制副本的比率

- `UP-TO-DATE` 显示已更新到所需状态的复制副本的数量。

- `Available`显示您的用户可用的应用程序复制副本数量。

- `age`显示应用程序已经运行的时间。

要查看 `Deployments` 创建的`ReplicaSet`，请运行`kubectl get rs`

> 请注意，ReplicaSet的名称格式始终为[部署名称]-[随机字符串]。
> 随机字符串是随机生成的，并使用pod-模板-散列作为种子。

接下来，让我们将 `Deployments` 扩展到4个副本。
我们将使用`kubectl scale`命令，后跟部署类型、名称和所需的实例数：
```bash
kubectl scale deployments/kubernetes-bootcamp --replicas=4
```

要再次列出 `Deployments` ，请使用:
```bash
kubectl get deployments
```
更改已生效，并且我们有4个应用程序实例可用。
接下来，让我们检查一下Pod的数量是否发生了变化：
```bash
kubectl get pods -o wide
```
现在有4个Pod，具有不同的IP地址。

更改已在部署事件日志中注册。要检查这一点，请使用Describe子命令：
```bash
kubectl describe deployments/kubernetes-bootcamp
```

### Load Balancing
让我们检查一下 `Service` 是否正在对流量进行负载平衡。
要找出暴露的IP和端口，我们可以使用本教程上一部分中介绍的Describe服务：
```bash
kubectl describe services/kubernetes-bootcamp
```

创建名为`NODE_PORT`的环境变量，其值为Node port：
```bash
export NODE_PORT="$(kubectl get services/kubernetes-bootcamp -o go-template='{{(index .spec.ports 0).nodePort}}')"

echo NODE_PORT=$NODE_PORT
```

接下来，我们将对暴露的IP地址和端口进行 `curl`。多次执行该命令：
```bash
curl http://"$(minikube ip):$NODE_PORT"
```
对于每个请求，我们都遇到了不同的Pod。这表明负载平衡正在发挥作用。

### Scale Down
要将部署缩减至2个复制副本，请再次运行scale子命令：
```bash
kubectl scale deployments/kubernetes-bootcamp --replicas=2
```

列出 `Deployments` ，以检查缩减是否已经生效：
```bash
kubectl get deployments
```
副本数量减少到2个。

使用`get pod`列出Pod的数量：
```bash
kubectl get pods -o wide
```
这证实了2个Pod被终止。

## Performing a Rolling Update (滚动更新)
### Updating an application

> 滚动更新通过使用新实例递增地更新Pods实例，使部署的更新可以在零停机时间内进行。

用户希望应用程序随时可用，开发人员预计每天要部署几次新版本的应用程序。
在Kubernetes中，这是通过滚动更新来实现的。
滚动更新通过使用新实例递增地更新Pods实例，使部署的更新可以在零停机时间内进行。
新的Pod将在具有可用资源的节点上进行调度。

在上一个模块中，我们扩展了应用程序以运行多个实例。
这是在不影响应用程序可用性的情况下执行更新的要求。
默认情况下，更新期间不可用的最大Pod数和可以创建的新Pod的最大数为1。
这两个选项都可以配置为数字或百分比(Pod)。
在Kubernetes中，更新是版本化的，任何部署更新都可以恢复到以前的(稳定)版本。

### Rolling updates

> 如果 Deployment 公开，服务将在更新期间仅对可用Pod的流量进行负载均衡。

`可用Pod`是可供应用程序用户使用的实例。

滚动更新允许执行以下操作：
- 将应用程序从一个环境升级到另一个环境(通过容器镜像更新)
- 回滚到以前的版本
- 持续集成和持续交付零宕机的应用程序

在接下来的交互式教程中，我们将把应用程序更新到新版本，并执行回滚。

### Update the version of the app
要查看该应用程序的当前 `image` 版本，请运行`Describe Pods`子命令并查找 `Image` 字段：
```bash
kubectl describe pods
```

要将应用程序的映像更新到版本2，请使用`set Image`子命令，后跟`部署名称`和`新的Image版本`：
```bash
kubectl set image deployments/kubernetes-bootcamp kubernetes-bootcamp=jocatalin/kubernetes-bootcamp:v2

# Domestic Image

```
该命令通知 `Deployment` 为您的应用程序使用不同的 `Image` ，并启动滚动更新。
检查新Pod的状态，并查看使用`Get Pods`子命令终止的旧Pod：
```bash
kubectl get pods
```

### Step 2: Verify an update

首先，检查应用程序是否正在运行。
要查找暴露的IP地址和端口，请运行`Describe`服务命令：
```bash
kubectl describe services/kubernetes-bootcamp
```
> 如果kubernetes-bootcamp没有创建Service，先创建Service
> `kubectl expose deployment kubernetes-bootcamp --type=LoadBalancer --port=8080`

尝试`curl`服务：
```bash
minikube service kubernetes-bootcamp --url

curl <the endpoint returned by the above> # e.g. http://127.0.0.1:59500
```

确认更新结果：
```bash
kubectl rollout status deployments/kubernetes-bootcamp
```

### Roll back an update

让我们执行另一次更新，并尝试部署一个标记为V10的镜像：
```bash
kubectl set image deployments/kubernetes-bootcamp kubernetes-bootcamp=gcr.io/google-samples/kubernetes-bootcamp:v10

# Domestic Image
kubectl set image deployments/kubernetes-bootcamp kubernetes-bootcamp=registry.cn-beijing.aliyuncs.com/typ/kubernetes-bootcamp:v10
```

注意到上述更新会因为 `ImagePullBackOff` 失败, 我们要回滚到上一个可以工作的版本：
```bash
kubectl rollout undo deployments/kubernetes-bootcamp
```
 `rollout undo` 命令可将 `Deployment` 恢复到以前的已知状态(image的v2)。
 更新是版本化的，您可以恢复到任何以前已知的 `Deployment` 状态。

如果想要回滚到指定版本，使用 `set image`:
```bash
kubectl set image deployment/kubernetes-bootcamp kubernetes-bootcamp=gcr.io/google-samples/kubernetes-bootcamp:v2
```


## Certification

### App Dev

应用程序设计和构建–20%

- 定义、构建和修改容器鏡像

- 了解Jobs 和 CronJobs

- 了解多容器Pod设计模式(例如sidecar, init等)

- 使用持久卷和临时卷


应用部署 - 20％

- 使用Kubernetes原语来实现通用的部署策略(例如，蓝绿部署或金丝雀部署)

- 理解部署和如何执行滚动更新

- 使用Helm包管理器部署现有的包

 
应用观察和维护 - 15％

- 理解API的用法

- 实现探测和运行状况检查

- 使用提供的工具来监视Kubernetes应用程序

- 利用容器日志

- 在Kubernetes中调试

 
应用环境、配置与安全 - 25％

- 发现并使用扩展Kubernetes (CRD)的资源

- 了解身份验证、授权和准入控制

- 了解和定义资源需求、限制和配额

- 了解ConfigMaps

- 创造并使用Secrets

- 了解ServiceAccounts

- 了解SecurityContexts

 
服务与网络 - 20％

- 对网络策略有基本的了解

- 通过服务提供对应用程序的访问并排除故障

- 使用Ingress规则公开应用程序
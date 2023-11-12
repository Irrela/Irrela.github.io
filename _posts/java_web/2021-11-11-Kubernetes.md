---
title: Kubernetes
categories: Web
tags:
- Web
---

# Learn Kubernetes Basics

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

### Hello Minikube
#### Objectives 
- Deploy a sample application to minikube.

- Run the app.

- View application logs.

#### Installation
```bash
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# 验证安装成功
minikube version

# 启动集群
minikube start
```


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



```bash

```

> [ec2-user@ip-172-31-33-48 ~]$ minikube start
😄  minikube v1.32.0 on Amazon 2023 (xen/amd64)
✨  Automatically selected the docker driver. Other choices: none, ssh

⛔  Exiting due to RSRC_INSUFFICIENT_CORES:  has less than 2 CPUs available, but Kubernetes requires at least 2 to be available
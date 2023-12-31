---
# layout: post
title: Git & brew
categories: Tool
tags:
- Tool
---

- [Git](#git)
  - [Definition of Concepts](#definition-of-concepts)
    - [暂存区（Staging Area）](#暂存区staging-area)
    - [版本库（Repository）](#版本库repository)
    - [工作目录（Working Directory）](#工作目录working-directory)
    - [Fork \& clone](#fork--clone)
  - [Submodule](#submodule)
  - [Proxy设置](#proxy设置)
  - [版本相关](#版本相关)
    - [查看commit历史](#查看commit历史)
    - [版本回退](#版本回退)
      - [reset 和 revert的选择](#reset-和-revert的选择)
      - [reset 的 三种模式](#reset-的-三种模式)
      - [回退到上一个commit](#回退到上一个commit)
      - [回退到指定版本](#回退到指定版本)
    - [git status](#git-status)
    - [git diff  --](#git-diff----)
  - [删除与取消删除](#删除与取消删除)
  - [远程（remote）相关](#远程remote相关)
    - [本地仓库关联到一个新的远程仓库](#本地仓库关联到一个新的远程仓库)
    - [更改远程仓库的URL](#更改远程仓库的url)
    - [关于origin](#关于origin)
    - [解除关联](#解除关联)
  - [分支操作](#分支操作)
    - [创建branch](#创建branch)
    - [切换到branch](#切换到branch)
    - [创建并切换到branch](#创建并切换到branch)
    - [查看所有branch，表示当前选择的分支](#查看所有branch表示当前选择的分支)
    - [合并branch到当前分支](#合并branch到当前分支)
    - [删除branch](#删除branch)
  - [分支冲突](#分支冲突)
    - [git status](#git-status-1)
    - [看分支合并图](#看分支合并图)
  - [保存现场与读取](#保存现场与读取)
    - [保存工作区](#保存工作区)
    - [查看保存的工作区列表](#查看保存的工作区列表)
  - [其他](#其他)
    - [git pull 与 fetch](#git-pull-与-fetch)
    - [在windows上出现LF替换](#在windows上出现lf替换)
    - [删除大文件后无法push](#删除大文件后无法push)
  - [撤销最近一次commit](#撤销最近一次commit)
    - [reset](#reset)
    - [git revert](#git-revert)
- [Brew](#brew)
  - [Command](#command)


# Git
## Definition of Concepts
### 暂存区（Staging Area）
暂存区是一个临时的区域，用于存储即将提交到版本库的更改。
在 `commit` 之前，你需要使用 `git add` 命令将工作目录中的文件的更改添加到暂存区。
这相当于将更改标记为将要包含在下一次提交中的内容。

### 版本库（Repository）
版本库是 Git 存储项目的地方，包含了项目的所有历史记录。
在版本库中，有一个称为 `HEAD` 的特殊指针，指向当前所在的分支的最新提交。
当你进行 `commit` 时，版本库中的历史记录会更新。

### 工作目录（Working Directory）
工作目录是你在电脑文件系统中看到的项目目录，其中包含着项目的实际文件。
当你在编辑文件时，你是在修改工作目录中的文件。

### Fork & clone
在 GitHub 中，"fork"（分叉）是指将别人的仓库复制到你自己的 GitHub 账号下，从而在你的账号中创建了一个与原始仓库相同的副本。这个副本是独立的，并且你可以在自己的副本中进行修改和提交。

"Fork" 的主要目的是为了便于社区协作和贡献。当你在 GitHub 上发现一个有趣或有用的开源项目，但你想对它做一些改进或添加新功能时，你可以先将其 fork 到自己的账号下，然后在自己的副本中进行修改。当你完成修改后，你可以通过提交 pull request（拉取请求）将你的修改提交给原始仓库的所有者。原始仓库的所有者可以审查你的修改，并决定是否将其合并到原始仓库中。这样，就实现了对开源项目的贡献和协作。

与 "fork" 不同，"clone" 是指将一个远程仓库复制到本地的计算机上，从而在本地创建了一个与远程仓库相同的副本。"clone" 是 Git 的基本操作，它将整个仓库的所有历史记录和代码复制到本地，让你可以在本地进行开发和修改。"clone" 通常用于在你自己的计算机上进行开发，并将你的修改推送到远程仓库中，以便与其他开发者共享和协作。

总结一下两者的区别：
- "fork" 是在 GitHub 上进行的操作，用于将一个远程仓库复制到你自己的 GitHub 账号下，以便于贡献和协作。
- "clone" 是在本地计算机上进行的操作，用于将一个远程仓库复制到本地，以便于在本地进行开发和修改。

----
> 我在实际工作时，git流程往往是我clone小组内的仓库，然后新建分支开发，在完成code review后我在master分支上merge我的分支，由组长批准合并。这和fork一个开源项目开发，然后发起PR等所有者审查合并有什么区别吗?

在实际工作中，你所描述的 Git 流程和开源项目中 fork 和提交 PR 的流程有一些区别，但它们都是为了实现代码协作和版本控制。

在你的实际工作流程中，你是直接在小组内的仓库上进行开发的，这意味着你和小组的其他成员共享同一个仓库，并且可以直接在同一个仓库上创建和提交分支。这种方式可以更方便地进行团队协作，因为所有的开发都在同一个仓库中进行，可以更容易地进行代码审查、解决冲突和进行代码合并。此外，你的组长在 master 分支上审批和合并你的代码变更，这也符合一些团队的代码审核流程。

而在开源项目中，由于你没有直接的权限来推送修改到原始仓库，你需要先将开源项目 fork 到你自己的 GitHub 账号下，然后在你自己的副本中进行开发和修改。完成修改后，你会提交一个 pull request 到原始仓库，请求原始仓库的所有者审核和合并你的修改。在这个过程中，原始仓库的所有者可以审查你的代码并提供反馈，如果他们认为你的修改合适，就会将你的修改合并到原始仓库中。

总体来说，两种流程都是为了实现代码协作和版本控制，只是在具体的权限和审查流程上有一些区别。在你的实际工作中，因为你们小组内部的开发，所以直接在同一个仓库上开发是更方便的方式。而在开源项目中，由于不同开发者之间的权限和代码审查需要，所以采用了 fork 和 PR 的方式来进行协作。

> 那我理解PR只存在于社区开源项目的协作场景中？如果我本身就是一个非开源项目的成员，我似乎没有需要PR的场景？

你的理解基本是正确的。Pull Request（PR）通常是在开源项目或者社区协作中使用的一种协作机制。在这样的场景中，开发者通常没有直接推送代码到原始仓库的权限，因此他们需要先将原始仓库 fork 到自己的账号下，然后在自己的副本中进行开发，最后通过提交 PR 来请求原始仓库的所有者审核和合并他们的修改。

对于非开源项目或者小团队内部的协作，通常不需要使用 PR 的方式，因为所有的开发者都有直接推送代码到共享仓库的权限。在这样的场景中，开发者可以直接在共享仓库上创建和提交分支，然后进行代码的合并和管理，而不需要通过 PR 来进行代码审查和合并。这种方式可以更加简洁和高效。

所以，如果你是一个非开源项目的成员或者在一个小团队中进行协作，你可能不需要使用 PR，直接在共享仓库上进行开发和合并即可。而 PR 更多地是用于社区开源项目中，以便让不同的开发者进行代码协作和审核。

## Submodule
当你使用Git克隆Boost库时，你可能会遇到子模块（submodule）的情况。子模块是一个指向其他Git仓库的链接，它允许将一个Git仓库嵌套到另一个Git仓库中，以便于管理依赖关系。

在Boost的Git仓库中，有一些子模块指向其他的Git仓库，如Boost.Algorithm子目录。这是因为Boost库被组织成多个子库，每个子库都有自己的Git仓库。当你克隆Boost的主仓库时，默认情况下，并不会自动递归克隆所有的子模块。

要获取Boost的子模块代码，你需要执行以下步骤：

- 在克隆Boost主仓库后，进入到Boost的主目录。
- 运行命令 `git submodule init`，该命令会初始化所有的子模块。
- 运行命令 `git submodule update`，该命令会拉取所有子模块的代码。
执行完上述步骤后，你就能够获取Boost的所有子模块的代码了，包括Boost.Algorithm等子库的代码。

> 注意：如果Boost库的子模块发生了变化，你可能需要在更新Boost主库时也更新子模块，可以使用 `git pull --recurse-submodules` 命令来更新主库和所有子模块。

## Proxy设置
```shell
// 端口要用http代理监控端口
git config --global http.proxy http://127.0.0.1:1087 # 一般不用

# usually unset like below solve problem
git config --global --unset http.proxy
git config --global --unset https.proxy
```
> 看看host里是否绑了不合适的github.com ip，直接删掉即可
> sudo vim /etc/hosts

## 版本相关
### 查看commit历史
```bash
# 看commit历史，head表示当前version
# 注意：只能看到当前version及以前的历史，假如从v10回退到v8则只能看到v0到v8的历史
git log

# 如果想要再回到v9或v10，使用`git reflog`查看所有命令。
git reflog

```

### 版本回退
`git reset` 是 Git 版本控制系统中的一个命令，用于将当前分支的 HEAD 移动到指定的提交或撤销之前的一些更改。

#### reset 和 revert的选择
`git reset` 是 Git 版本控制系统中的一个命令，用于将当前分支的 HEAD 移动到指定的提交或撤销之前的一些更改。
`git revert` 是通过`新建一个提交并在其中逆操作上一个提交`来将版本库内容复原到上一个提交前的状态。

假如有两次提交： a -> b(HEAD)
执行`git revert HEAD` 后， 会在b之后新建一个提交： a -> b -> c(HEAD), 这提交的内容是提交b内容的逆操作，使得版本库实际上回到了提交a的状态，但整个提交历史得以保留。

假如有两次提交：`a -> b(HEAD)`，然后执行 `git revert HEAD` 会在 b 之后创建一个新的提交 c(HEAD)，这个提交的内容是 b 的逆操作。
这样整个提交历史看起来就像是 `a -> b -> c(HEAD)`。提交 c 的作用是撤销了 b 的更改，***使得项目的状态回到了提交 a 的状态***。

通过使用 git revert，你能够安全地撤销先前的提交，同时保留了完整的提交历史。这对于协同开发和维护清晰的项目历史非常有用。

#### reset 的 三种模式
***Soft 模式***:
```bash
# Soft
# 将 HEAD 移动到指定的提交，但是保留暂存区(即保留上一次git add的结果)和工作目录的更改。
git reset --soft <commit> 

# Mixed (Default)
# 将 HEAD 移动到指定的提交，同时重置暂存区，但保留工作目录的更改。
# 因为是默认模式，可以不用显式指定
git reset <commit>

# Hard
# 最彻底的重置，会将 HEAD 移动到指定的提交，并重置暂存区和工作目录，丢弃所有的更改。
# !!! 慎用这个模式，因为它会永久性地删除你工作目录中的未提交更改。
git reset --hard <commit>
```

关于<commit>的表示， 可以用 ***HEAD的相对值*** 表示：
- HEAD^ : 上一次提交
- HEAD^^ : 上上次提交
- HEAD~100 : 前第100次提交

> 更推荐直接用 `commit-id` 指定, 通过 `git log` 查看要选择的 `commit-id`。

#### 回退到上一个commit
```bash
# 取消最近一次的提交
# 实现方式：将当前分支的 HEAD 移动到它的上一个提交（即父提交），同时将暂存区重置为上一个提交的状态
# Note! 默认的工作模式是mixed，所以工作目录的修改并不会重置
# 在执行这个命令后，你可以重新编辑工作目录中的文件，然后使用 git add 和 git commit 将它们再次提交
git reset HEAD^
```
> 在 Git 中，`HEAD` 是一个指针，它指向当前所在的本地分支的最新提交（commit）

***如果你希望彻底删除最新的提交，并丢弃工作目录中的更改***, 可以指定模式为 `hard`
```bash
# !!! 要小心使用，因为它会永久删除你工作目录中的未提交更改
git reset --hard HEAD^
```

#### 回退到指定版本
```bash

```



### git status
显示当前工作目录和暂存区的状态。运行 git status 可以帮助你了解当前仓库的状态，包括有关未提交的更改、未跟踪的文件以及暂存区的情况。

*untracked files*：有新建的，还未add的文件

*changes not staged for commit*: 对已有文件进行了修改，还未add

### git diff <commit-id> --<file>
查看file在工作区（非stage）与指定版本库中的区别


## 删除与取消删除
```bash
# 手动删除文件后，此命令用于删除版本库中对应文件
# 需要commit
git rm <file>

# 误删除恢复
# 本质是用版本库中的文件替代工作区
git checkout -- <file>
```


## 远程（remote）相关
### 本地仓库关联到一个新的远程仓库
`git remote add` 用于添加一个新的远程仓库连接。

当你想要将本地仓库关联到一个新的远程仓库时，使用这个命令。它会添加一个新的远程仓库连接，并指定连接的名称（一般用origin就好）和URL。

```bash
git remote add origin https://github.com/github-username/remote-repository.git
```

### 更改远程仓库的URL
`git remote set-url` 用于修改已存在的远程仓库的URL。

`当你的本地仓库已经关联了一个远程仓库`，但你需要更改远程仓库的URL时，可以使用这个命令。它只修改现有远程仓库的URL。

```bash
git remote set-url origin https://github.com/your-username/your-repository.git
```

### 关于origin
通常情况下，"`origin`" 是Git中默认的远程仓库的名称。
当你使用 `git clone` 克隆一个远程仓库时，Git会自动为该远程仓库设置一个默认的名称 "`origin`"。
这个默认的远程仓库通常指向你克隆项目的原始仓库，它是你从中克隆项目的位置。

> 因此如果是本地新建仓库

### 解除关联

```bash
git remote remove <remote-name>
```
如果不知道 `<remote-name>` ，运行 `git remote -v` 查看

> 解除了本地和远程的绑定关系，并不是物理上删除了远程库




## 分支操作
### 创建branch
```bash
git branch <branch>
```

### 切换到branch
```bash
git checkout <branch>
```
### 创建并切换到branch
```bash
git checkout -b <branch>

# 等价于 
git branch <branch> 
git checkout <branch>
```
### 查看所有branch，表示当前选择的分支
```bash
git branch
```
### 合并branch到当前分支
```bash
# 在当前branch-a下
# 将branch-b合并到branch-a
git merge <branch-b>
```
-> fast-forward是一种合并方式，直接把branch指向当前分支

### 删除branch
```bash
git branch -d <branch>
```

## 分支冲突
当两个分支有不同的commit时，有可能出现冲突，执行merge会提示fix conflict，手动选择保留哪一分支的内容

### git status
可以看到冲突细节

### 看分支合并图
```bash
git log --graph
```


## 保存现场与读取
### 保存工作区
```bash
git stash
```

### 查看保存的工作区列表
```bash
git stash list
```
> stash@{...} 可用于指定取回




## 其他
### git pull 与 fetch
pull 根据不同的配置，可等于 fetch + merge 或 fetch + rebase。

### 在windows上出现LF替换
https://stackoverflow.com/questions/5834014/lf-will-be-replaced-by-crlf-in-git-what-is-that-and-is-it-important

> git config --global core.safecrlf false // 禁用警告并保持它的功能


### 删除大文件后无法push

```bash
remote: error: Trace: 13ecde7b720918a8e45ed68a41feb1bb3c877ae61e7afdd7c77e8fc40b63294a
remote: error: See https://gh.io/lfs for more information.
remote: error: File public/static/multimedia/sample.mp4 is 112.69 MB; this exceeds GitHub's file size limit of 100.00 MB
remote: error: GH001: Large files detected. You may want to try Git Large File Storage - https://git-lfs.github.com.
```

处理方式：
```bash
git status

# ->
# On branch master
# Your branch is ahead of 'origin/master' by 10 commits.
# (use "git push" to publish your local commits)

git reset HEAD~10
# 有多少commits ahead ~ 后面就是多少

# ->
# Unstaged changes after reset: ....


# 现在可以重新zsh push

```

## 撤销最近一次commit
### reset
使用 `git reset` 将提交从分支历史中完全移除, 即删除提交及其更改。
有三种主要的模式可以选择：

`Soft Reset`：这种模式将撤销提交，但保留提交更改在你的工作目录中。这样你可以重新提交这些更改或进行修改后提交。
```bash
git reset --soft HEAD~1
```

`Mixed Reset`：这种模式将撤销提交，并取消暂存提交更改。这样你可以重新编辑文件后，再次暂存并提交。
```bash
git reset --mixed HEAD~1
```

`Hard Reset`：这种模式将撤销提交，并删除提交更改，慎用，因为这会永久性丢失提交的更改。
```bash
git reset --hard HEAD~1
```

### git revert
如果你想要保留提交历史，同时创建一个新的提交来撤销之前的提交，你可以使用 `git revert` 命令。
这种方法更安全，因为它不会修改已有的提交历史。
```bash
git revert HEAD
```



# Brew
## Command
```bash
# 查看pkg信息
brew info <pkg-name>

# pkg所在文件夹路径
brew --prefix <pkg-name>
```
---
# layout: post
title: Git related
categories: Tool
tags:
- Tool
---

## Definition of Concepts
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
> sudo code /etc/hosts

## 版本相关
### git log
看commit历史，head表示当前version
注意：只能看到当前version及以前的历史，假如从v10回退到v8则只能看到v0到v8的历史
如果想要再回到v9或v10，使用git reflog查看所有命令。

### git reset --hard(opt) \「version」
`git reset HEAD^`  ==  回退到上一个版本

「version」的写法
1. 当前版本的相对值
HEAD^
HEAD^^
HEAD~100

2. commit id

### git add \『file』
将新建或者修改提交到stage

### git commit-m \<desc words>
将stage的修改提交到分支

### git status
查看当前状态

*untracked files*：有新建的，还未add的文件

*changes not staged for commit*: 对已有文件进行了修改，还未add

### git diff \「version」 -- \『file』
查看file在工作区（非stage）与指定版本库中的区别

## 撤销
### git checkout -- \『file』
将工作区回撤到最近一次add或commit时的状态

### git reset HEAD \『file』
回退到当前版本库，并**清空stage**

再配合`git checkout -- .`清空工作区

## 删除与取消删除
### git rm \『file』
手动删除文件后，此命令用于删除版本库中对应文件

-> 需要commit

### 误删除恢复
git checkout --\『file』
本质是用版本库中的文件替代工作区

## 远程（remote）相关
### 关联remote库

> $ git remote add origin git@server-name:path/repo-name.git

> $ git remote add origin git@github.com:michaelliao/learngit.git

origin 是 远程库的默认命名，可以修改但之后push要一致

### 解除关联

> $ git remote rm origin

解除了本地和远程的绑定关系，并不是物理上删除了远程库

### git push -u origin \<branch>
当远程库没有branch时，在远端创建branch并关联

## 分支操作
### git branch \<branch>
创建branch

### git checkout \<branch>
切换到branch

### git checkout -b \<branch>
== git branch <branch> + git checkout \<branch>
创建并切换到branch

### git branch
查看所有branch，表示当前选择的分支

### git merge \<branch>
合并branch到当前分支
-> fast-forward是一种合并方式，直接把branch指向当前分支

### git branch -d \<branch>
合并完成之后，删除branch

### git switch (-c) \<branch>
和checkout切换分支效果一致，-c是创建并切换

## 分支冲突
当两个分支有不同的commit时，有可能出现冲突，执行merge会提示fix conflict，手动选择保留哪一分支的内容

### git status
可以看到冲突细节

### git log --graph
可以看到分支的合并图

## 保存现场与读取
### git stash
保存工作区

### git stash list
查看保存的工作区列表，stash@{...} 可用于指定取回

### git stash apply \<stash@{...}>
取回暂存工作区，但不从list中删除

### git stash pop
取回最顶层的暂存工作区，从list中删除

### git cherry-pick \<commit-id>
在当前分支上重放指定commit的修改。

### git branch -D \<name>
如果要丢弃一个没有被合并过的分支，可以通过此命令强行删除。

## 其他
### git pull 与 fetch
pull 根据不同的配置，可等于 fetch + merge 或 fetch + rebase。

### 在windows上出现LF替换
https://stackoverflow.com/questions/5834014/lf-will-be-replaced-by-crlf-in-git-what-is-that-and-is-it-important

> git config --global core.safecrlf false // 禁用警告并保持它的功能
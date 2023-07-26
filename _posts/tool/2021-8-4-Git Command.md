---
layout: post
title: Git related
categories: Tool
description: 
keywords: 
---
[toc]

## 工作结构

<img src="/images/posts/git_work_model.jpg" width="75%"/>

## Submodule
当你使用Git克隆Boost库时，你可能会遇到子模块（submodule）的情况。子模块是一个指向其他Git仓库的链接，它允许将一个Git仓库嵌套到另一个Git仓库中，以便于管理依赖关系。

在Boost的Git仓库中，有一些子模块指向其他的Git仓库，如Boost.Algorithm子目录。这是因为Boost库被组织成多个子库，每个子库都有自己的Git仓库。当你克隆Boost的主仓库时，默认情况下，并不会自动递归克隆所有的子模块。

要获取Boost的子模块代码，你需要执行以下步骤：

在克隆Boost主仓库后，进入到Boost的主目录。
运行命令 git submodule init，该命令会初始化所有的子模块。
运行命令 git submodule update，该命令会拉取所有子模块的代码。
执行完上述步骤后，你就能够获取Boost的所有子模块的代码了，包括Boost.Algorithm等子库的代码。

注意：如果Boost库的子模块发生了变化，你可能需要在更新Boost主库时也更新子模块，可以使用 git pull --recurse-submodules 命令来更新主库和所有子模块。

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
---
layout: post
title: Win开发环境优化
categories: Miscellany
description: 
keywords: 
---
[toc]

## 包管理工具scoop
Github仓库：https://github.com/lukesampson/scoop

### 安装scoop
```
// 会默认将包下载到C:\Users\<user>\scoop
Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
# or shorter
iwr -useb get.scoop.sh | iex
```

如果想指定包存放位置, 则在运行上述安装命令前，加上指定路径的命令
```
$env:SCOOP='D:\Applications\Scoop' // 举例路径
[Environment]::SetEnvironmentVariable('SCOOP', $env:SCOOP, 'User')
# run the installer
```

### scoop使用
使用方式类似brew

```
scoop install <what-you-want>
scoop uninstall <what-you-dont-need>
```

## Windows Terminal改造
### 字体
- 下载 `Code New Roman Nerd Font Mono` font family。
- 在windows字体中安装。
- 修改powershell字体，注意不是在powershell设置，而是terminal设置中选择powershell选项卡。

### 改进prompt
oh-my-posh文档地址：https://ohmyposh.dev/docs/

下载安装完成后`code $profile`(powershell)中添加下述语句。
主题可自己选择， 还可以自行更改配置文件进行微调。
```
oh-my-posh --init --shell pwsh --config "$(scoop prefix oh-my-posh)\themes\remk.omp.json" | Invoke-Expression
```

## Vscode及IDEA字体改造
同样是使用`Code New Roman Nerd Font Mono`。

```
// vscode
CodeNewRoman Nerd Font Mono, '仿宋', monospace

// IDEA
Appearance & Behavior -> Appearance -> Use custom font: CodeNewRoman Nerd Font Mono
```

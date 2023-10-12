---
title: Cpp Project related
categories: Cpp
tags:
- Cpp
---

# Project Dev
## Cmake
### CMakeLists.txt
CMakeLists.txt 是 CMake 构建系统的核心配置文件，是每个 CMake 项目都必须包含的文件，用于定义**项目的构建规则和设置编译选项**。

在 CMakeLists.txt 文件中，您可以定义项目的源代码、头文件、可执行文件、库文件以及它们之间的依赖关系。通过编写 CMakeLists.txt 文件，您可以告诉 CMake 如何构建您的项目，并指定项目的构建过程、生成目标等。

> CMakeUserPresets.json的用途 ？

CMakeUserPresets.json 是 CMake 3.19 版本引入的新特性，用于简化 CMake 项目的配置和构建过程。该文件是一个 JSON 格式的配置文件，允许用户定义项目的构建配置和设置。

CMakeUserPresets.json 文件的目的是**让用户能够更轻松地配置项目的构建选项，而无需直接修改 CMakeLists.txt 文件**。

CMakeUserPresets.json 文件可以包含多个预设（Presets），每个预设定义了一组构建选项和配置。预设可以包含构建类型（如 Debug 或 Release）、目标平台、构建选项（如编译标志、链接选项等）等信息。用户可以在 CMakeUserPresets.json 中定义预设，然后通过 CMake 用户预设功能来选择要应用的预设，以方便地配置项目的构建。

使用 CMakeUserPresets.json，您可以将构建选项和配置从 CMakeLists.txt 文件中分离出来，使 CMakeLists.txt 更专注于描述项目的整体结构和构建规则，而将构建选项的配置留给 CMakeUserPresets.json 文件。

> 在Clion中默认构建文件输出在cmake-build-debug文件夹，删掉之后reload会自动创建


## Pkg management - brew
通过brew下包，然后手动配置cmake，以boost为例

```
# Cmakelist.txt中添加如下

### Boost ###
# 设置 Boost 库的路径
set(BOOST_ROOT /opt/homebrew/Cellar/boost)
# 寻找 Boost 库并添加包含路径
#find_package(Boost REQUIRED COMPONENTS filesystem container algorithm)
find_package(Boost REQUIRED) #

include_directories(${Boost_INCLUDE_DIRS})
target_link_libraries(yakuman ${Boost_LIBRARIES})
```
> find_package(Boost REQUIRED), 建议整个使用，如果单个组件引入要确认好组件名， 比如algorithm就不是一个可用的组件名


## Pkg management - vcpkg
### install error "pkg-config"
```
CMake Error at scripts/cmake/vcpkg_find_acquire_program.cmake:163 (message):
  Could not find pkg-config.  Please install it via your package manager:

      brew install pkg-config
Call Stack (most recent call first):
  scripts/cmake/vcpkg_fixup_pkgconfig.cmake:203 (vcpkg_find_acquire_program)
  ports/gtest/portfile.cmake:49 (vcpkg_fixup_pkgconfig)
  scripts/ports.cmake:147 (include)


error: building gtest:arm64-osx failed with: BUILD_FAILED
Elapsed time to handle gtest:arm64-osx: 6.3 s
Please ensure you're using the latest port files with `git pull` and `vcpkg update`.
Then check for known issues at:
    https://github.com/microsoft/vcpkg/issues?q=is%3Aissue+is%3Aopen+in%3Atitle+gtest
You can submit a new issue at:
    https://github.com/microsoft/vcpkg/issues/new?title=[gtest]+Build+error&body=Copy+issue+body+from+%2FUsers%2Fsakagami%2Fvscode%2Fgit%2Fdev_tool%2Fvcpkg%2Finstalled%2Fvcpkg%2Fissue_body.md
```

solution:
`brew install pkg-config`
### Clion 配置
Preference -> Build,Execution, Deployment -> Cmake
- 复制default
- Cmake Options 加上 `-DCMAKE_TOOLCHAIN_FILE=/Users/sakagami/vscode/git/dev_tool/vcpkg/scripts/buildsystems/vcpkg.cmake`
- default配置下取消勾选enable(只用新配置)
- Apply

### 以Gtest为例
通过vcpkg下载gtest
```sh
~/vscode/git/dev_tool/vcpkg (master) » vcpkg install gtest                        sakagami@Seitsuno
Computing installation plan...
The following packages are already installed:
    gtest:arm64-osx -> 1.13.0
gtest:arm64-osx is already installed
Total install time: 6.25 us
The package gtest is compatible with built-in CMake targets:

    enable_testing()
    
    find_package(GTest CONFIG REQUIRED)
    target_link_libraries(main PRIVATE GTest::gtest GTest::gtest_main GTest::gmock GTest::gmock_main)
    
    add_test(AllTestsInMain main)
```

在CMakeLists.txt中加上
```
enable_testing()

find_package(GTest CONFIG REQUIRED)
target_link_libraries(main PRIVATE GTest::gtest GTest::gtest_main GTest::gmock GTest::gmock_main)

add_test(AllTestsInMain main)
```

### 用vcpkg下载boost的时候报错
```
      Failed to download file with error: 1
      If you are using a proxy, please check your proxy setting. Possible causes are:
      
      1. You are actually using an HTTP proxy, but setting HTTPS_PROXY variable
         to `https://address:port`. This is not correct, because `https://` prefix
         claims the proxy is an HTTPS proxy, while your proxy (v2ray, shadowsocksr
         , etc..) is an HTTP proxy. Try setting `http://address:port` to both
         HTTP_PROXY and HTTPS_PROXY instead.
```

Solution:
如果您使用 shadowsocks 进行代理，您可以通过以下方式同时将 HTTP_PROXY 和 HTTPS_PROXY 环境变量设置为 http://address:port，其中 address 是 shadowsocks 代理服务器的地址，port 是代理服务器的端口号：

在终端中执行以下命令：
```
# export http_proxy=http://address:port
# 只替换https就行
export https_proxy=http://address:port
```
请确保将 address 和 port 替换为**实际的 shadowsocks 代理服务器地址和端口号**。

注意：在终端中使用 http_proxy 和 https_proxy 环境变量（小写）设置 HTTP 和 HTTPS 的代理，而不是使用 HTTP_PROXY 和 HTTPS_PROXY 环境变量（大写）。在不同的环境中，可能会有大小写的区别，请根据实际情况使用正确的环境变量。

## Pkg management - Conan
1. Install Conan
    ```
    brew install conan

    conan --version 

    conan profile detect

    conan profile list
    ```

2. Install other libs by Conan
   项目根目录下新建`conanfile.txt`, 作为Conan的包配置文件, 内容类似于：
    ```
    [requires]
    gtest/1.8.1

    [generators]
    cmake
    ```
   配置好后在根目录下运行：
    ```sh
    // 根据配置文件下载包
    conan install . 
    ```
3. Cmakelist.txt
    ```
    # 包含 Conan 的构建和工具模块
    include(${CMAKE_BINARY_DIR}/conanbuildinfo.cmake)
    conan_basic_setup(TARGETS)
    ```

## Gtest
### FetchContent
配置Cmakelist.txt
```
# 下载并构建 Google Test
include(FetchContent)
FetchContent_Declare(
        googletest
        URL https://github.com/google/googletest/archive/03597a01ee50ed33e9dfd640b249b4be3799d395.zip
)
FetchContent_MakeAvailable(googletest)

# 添加单元测试可执行文件，并链接 Google Test 相关的源文件
add_executable(test_yakuman
        test/test_main.cpp
        # 在这里添加您的单元测试源文件
        src/domain/hand.cpp
        src/domain/tile.cpp
        )

# 添加项目的头文件目录和 Google Test 的头文件目录
target_include_directories(test_yakuman PRIVATE include ${googletest_SOURCE_DIR}/googletest/include)

# 链接 Google Test 相关的库
target_link_libraries(test_yakuman gtest_main)

# 添加测试
enable_testing()
add_test(NAME test_yakuman COMMAND test_yakuman)
```
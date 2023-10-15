cmake_minimum_required(VERSION 3.24)
project(cpp)

set(CMAKE_CXX_STANDARD 14)

include_directories(chapter_13)

add_executable(cpp
        chapter_13/code_13_4.cpp
        chapter_13/code_13_4.h
        chapter_13/code_13_5.cpp
        chapter_13/code_13_5.h)

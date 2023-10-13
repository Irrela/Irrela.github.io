//
// Created by seiro on 2023/10/13.
//

#include "code_13_5.h"


void StrVec::push_back(const std::string &s)
{
    // 确保有空间容纳新元素
    chk_n_alloc();
    // 在first_free指向的元素中构造s的副本
    alloc.construct(first_free++, s);

}

/**
 * @brief 分配并复制一段字符串数组
 *
 * @param b 源字符串数组的起始迭代器
 * @param e 源字符串数组的结束迭代器
 * @return 一个包含两个指针的 std::pair 对象，指向复制后的数据的起始和结束位置
 *
 * 这个函数用于分配内存并复制一个指定范围的字符串数组。它分配足够的内存来存储从迭代器 b 到 e 的字符串元素，并将这些元素复制到新分配的内存中。返回的 std::pair 包含指向新分配内存起始位置和结束位置的指针。
 */
std::pair<std::string *, std::string *>
        StrVec::alloc_n_copy(const std::string *b, const std::string *e)
{
    // 使用分配器（allocator）来分配内存以容纳从 b 到 e 的元素
    auto data = alloc.allocate(e - b);
    // 使用 std::uninitialized_copy 复制源字符串数组的内容到新分配的内存中
    // std::uninitialized_copy 是 C++ 标准库中的一个函数，它用于将一个范围内的元素从源位置复制到目标位置，但是不会初始化目标位置的元素。
    // 这意味着它适用于处理未初始化的内存，通常用于提高性能，因为不需要重复初始化元素。
    return {data, std::uninitialized_copy(b, e, data)};
}

/**
 * @brief 这个函数用于释放动态分配的内存，以及销毁其中存储的对象。
 */
void StrVec::free()
{
    // 检查是否有分配内存，如果没有，什么都不做
    if (elements) {
        // 从最后一个元素开始，逐个销毁对象，直到回到数组的起始位置
        for (auto p = first_free; p != elements; ) {
            // destroy函数会运行string的析构函数。string的析构函数会释放string自己分配的内存空间
            alloc.destroy(--p);
        }

        // 释放数组的内存
        // 我们传递给deallocate的指针必须是之前某次a1locate调用所返回的指针。
        // 因此，在调用deallocate之前我们首先检查elements是否为空
        alloc.deallocate(elements, cap - elements);
    }
}

/**
 * 拷贝构造函数
 * @param s 要复制的源 StrVec 对象
 */
StrVec::StrVec(const StrVec &s)
{
    // 调用 alloc_n_copy 函数，复制 s 的元素到新内存中
    auto new_data = alloc_n_copy(s.begin(), s.end());

    // 将 elements 指针指向新分配的内存中的第一个元素
    elements = new_data.first;

    // 将 first_free 和 cap 指针都指向新内存的末尾
    first_free = cap = new_data.second;
}


/**
 * @brief 赋值运算符 用于将一个 StrVec 对象赋值给另一个 StrVec 对象。
 * @param rhs
 * @return
 */
StrVec &StrVec::operator=(const StrVec &rhs)
{
    // 调用 alloc_n_copy 函数复制 rhs 的元素范围，并返回一个指向新分配内存中数据的 pair。
    auto data = alloc_n_copy(rhs.begin(), rhs.end());

    // 释放当前对象的资源，包括元素和内存。
    free();

    // 将元素指针指向新复制的数据的起始位置。
    elements = data.first;

    // 更新 first_free 和 cap 指针，使它们指向新数据的末尾位置。
    first_free = cap = data.second;

    // 返回当前对象的引用，以支持连续的赋值操作。
    return *this;
}

StrVec::~StrVec()
{
    free();
}

void StrVec::reallocate()
{
    // 计算新的容量，如果当前大小为0，新容量为1，否则为当前大小的2倍
    auto new_capacity = size() ? 2 * size() : 1;

    // 使用分配器分配新的内存空间
    auto new_data = alloc.allocate(new_capacity);

    // dest 指向新分配的内存的起始位置
    auto dest = new_data;

    // elem 指向旧内存的起始位置
    auto elem = elements;

    // 通过移动语义将元素从旧内存复制到新内存
    // for 循环遍历每个已有元素，并在新内存空间中construct一个对应元素。
    // 我们使用 dest 指向构造新string的内存，使用elem指向原数组中的元素。
    // 我们每次用后置递增运算将dest (和elem) 推进到各自数组中的下一个元素。
    for (std::size_t i = 0; i != size(); ++i) {
        // 调用move返回的结果会令construct 使用string的移动构造函数
        // 由于我们使用了移动构造函数，这些string管理的内存将不会被拷贝。
        // 相反，我们构造的每个string都会从elem指向的string那里接管内存的所有权
        alloc.construct(dest++, std::move(*elem++));
    }

    // 释放旧内存
    free();

    // 更新元素指针，指向新的内存
    elements = new_data;

    // 更新 first_free 指针，指向新内存中下一个可用位置
    first_free = dest;

    // 更新容量指针，指向新内存的末尾
    cap = elements + new_capacity;
}









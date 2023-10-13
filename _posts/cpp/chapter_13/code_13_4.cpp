//
// Created by seiro on 2023/10/13.
//

#include "code_13_4.h"

#include <iostream>
#include <string>
#include <set>

/* Message Implementation */

// 基于公共函数的拷贝控制成员实现
/**
 * @brief 拷贝构造函数：从给定的 Message 对象 m 复制内容和关联的文件夹
 */
Message::Message(const Message &m):
        contents(m.contents), folders(m.folders)
{
    add_to_Folders(m);
}

/**
 * @brief 析构函数：用于释放资源并从关联的 folders 中删除消息
 */
Message::~Message()
{
    remove_from_Folders();
}

/**
 * @brief 拷贝赋值运算符，用于将一个消息对象的contents和关联的folders复制到另一个消息对象。
 *
 * 这个操作符首先从当前消息对象中移除关联的folders，然后复制给定消息对象的contents和folders，
 * 最后重新将本消息添加到新的folders。
 *
 * @param rhs 要复制contents和文件夹列表的消息对象。
 * @return 返回当前消息对象的引用，以支持链式赋值。
 */
Message& Message::operator=(const Message &rhs)
{
    remove_from_Folders();
    contents = rhs.contents;
    folders = rhs.folders;
    add_to_Folders(rhs);

    return *this;
}

// Message的成员方法实现
void Message::save(Folder &f)
{
    folders.insert(&f); // folders添加指定Folder
    f.addMsg(this); // 指定Folder添加Message
}

void Message::remove(Folder &f)
{
    folders.erase(&f); // folders删除指定Folder
    f.remMsg(this);	// 指定Folder删除Message
}


// Message的公共操作工具函数实现
/**
 * @brief 将本 Message 添加到它的所有 Folder 中
 *
 * 此方法用于将当前 Message 对象添加到它的所有 Folder 对象中。
 * 它遍历自己的folders，然后将当前 Message 添加到每个 Folder 中。
 *
 * @param msg 要添加到的消息
 */
void Message::add_to_Folders(const Message &msg)
{
    for (auto folder : msg.folders)
    {
        folder->addMsg(this);
    }
}

/**
 * @brief 从关联的folders中删除本消息
 *
 * 该方法遍历消息所关联的folders，从每个Folder中删除本消息。
 * 这个方法用于维护消息与文件夹之间的一致性。
 */
void Message::remove_from_Folders()
{
    for (auto f : folders)
    {
        f->remMsg(this);
    }
}

void Message::addFolder(Folder *folder)
{
    folders.insert(folder);
}

void Message::remFolder(Folder *folder)
{
    folders.erase(folder);
}

void swap(Message &lhs, Message &rhs)
{
    using std::swap;

    for (auto f : lhs.folders)
    {
        f->remMsg(&lhs);
    }

    for (auto f : rhs.folders)
    {
        f->remMsg(&rhs);
    }

    swap(lhs.folders, rhs.folders);
    swap(lhs.contents, rhs.contents);

    for (auto f : lhs.folders)
    {
        f->addMsg(&lhs);
    }

    for (auto f : rhs.folders)
    {
        f->addMsg(&rhs);
    }

}

/* Folder Implementation */
Folder::Folder(const Folder &f)
        : msgs(f.msgs)
{
    add_to_Message(f);
}

Folder &Folder::operator=(const Folder &rhs)
{
    remove_from_Message();
    msgs = rhs.msgs;
    add_to_Message(rhs);
    return *this;
}

Folder::~Folder()
{
    remove_from_Message();
}


void Folder::add_to_Message(const Folder &f)
{
    for (auto m : f.msgs)
        m->addFolder(this);
}

void Folder::remove_from_Message()
{
    for (auto m : msgs)
        m->remFolder(this);
}

void Folder::addMsg(Message *msg)
{
    msgs.insert(msg);
}

void Folder::remMsg(Message *msg)
{
    msgs.erase(msg);
}

void swap(Folder &lhs, Folder &rhs)
{
    using std::swap;

    lhs.remove_from_Message();
    rhs.remove_from_Message();

    swap(lhs.msgs, rhs.msgs);

    lhs.add_to_Message(lhs);
    rhs.add_to_Message(rhs);
}
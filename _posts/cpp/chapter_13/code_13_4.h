//
// Created by seiro on 2023/10/13.
//

#ifndef CPP_CODE_13_4_H
#define CPP_CODE_13_4_H

#include <string>
#include <set>

class Folder;

class Message
{
    friend class Folder;
    friend void swap(Message&, Message&); // 声明 swap 函数为友元函数

public:
    // 构造函数接受一个string参数，将其拷贝给contents。folders被隐式初始化为空集
    explicit Message(const std::string &str="") :
            contents(str) {}

    // 控制拷贝成员
    Message(const Message&); // cctor
    Message& operator=(const Message&); // caop
    ~Message(); // dtor

    // 给指定Folder中添加或删除本Message
    void save(Folder&);
    void remove(Folder&);
private:
    std::string contents; // 实际文本内容
    std::set<Folder*> folders; // 包含本message的Folder的指针

    // Best Practices中所说的公共工作由下方的工具函数们
    void add_to_Folders(const Message&); // 将本 Message 添加到给定消息的所有 Folder 中
    void remove_from_Folders(); // 从folders中每个Folder中删除本Message

    void addFolder(Folder*);
    void remFolder(Folder*);
};

class Folder
{
    friend class Message;
    friend void swap(Folder &, Folder &);

public:
    // 控制拷贝成员
    Folder() = default; // 定义了自定义构造函数之后，您仍然希望保留默认构造函数，以便能够创建未经初始化的对象
    Folder(const Folder &); // 自定义构造函数
    Folder& operator=(const Folder &);
    ~Folder();

    void addMsg(Message*); // 将Message添加到msgs中
    void remMsg(Message*); // 将Message从msgs中删除
private:
    std::set<Message*> msgs;

    void add_to_Message(const Folder&);
    void remove_from_Message();
};

#endif //CPP_CODE_13_4_H

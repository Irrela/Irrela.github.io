#include <iostream>
#include <string>
#include <set>

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

private:
    std::set<Message*> msgs;

    void add_to_Message(const Folder&);
    void remove_from_Message();

    void addMsg(Message*); // 将Message添加到msgs中
    void remMsg(Message*); // 将Message从msgs中删除
};


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



int main() 
{
}

#include <iostream>

class HasPtr {
    public:
        /* 
        = std::string()：这是默认参数值的设置。
        如果在调用构造函数时没有传递实参给参数 s，则构造函数将使用 std::string() 创建一个临时的空字符串对象作为默认参数。
        换句话说，如果你调用构造函数时不提供任何参数，那么 s 将默认为一个空字符串。 
        */
        HasPtr(const std::string &s = std::string()):
            ps(new std::string(s)), i(0) { }

        HasPtr(const HasPtr &p):
            ps(new std::string(*p.ps)), i(p.i) { }

        /*
        在函数声明中，参数名可以省略，只保留参数类型，特别是在你只关心参数类型而不需要在函数声明中指定参数名的情况下。
        这种情况下，参数类型已经足够指定了函数的参数信息，而参数名可以在函数定义中使用。

        例如，如果在函数声明中指定了参数名，它会变成这样：HasPtr& operator=(const HasPtr &rhs);
        在这里，rhs 是参数名，而 const HasPtr & 是参数类型。
        但在函数声明中，如果你不关心参数名，只想声明参数的类型，可以省略参数名，只保留参数类型
        */
        HasPtr& operator=(const HasPtr &); 
        
        ~HasPtr() {
            delete ps;
        }
        
        /*
        rhs = right hand side
        类值拷贝赋值运算符: 通常组合了析构和构造函数，析构销毁左值，再从右值拷贝数据
        */
        HasPtr& HasPtr::operator=(const HasPtr &rhs) {
            auto new_string = new std::string(*rhs.ps);
            delete ps;
            ps = new_string;
            i = rhs.i;

            /*
            在类的成员函数中，this 是一个特殊的指针，指向调用该成员函数的对象的地址。
            通过解引用 this 指针，可以获取当前对象本身。
            因此，*this 表示当前对象的引用，它可以在成员函数内部使用，就像使用对象本身一样。
            */
            return *this;
        }

        HasPtr& HasPtr::operator=(const HasPtr &rhs) {
        delete ps;
        ps = new std::string(*(rhs.ps));
        i = rhs.i;
        return *this;
    }

    private:
        std::string *ps;
        int i;
};


class HasPtr {
    public:
        HasPtr(const std::string &s = std::string()):
            ps(new std::string(s)), i(0), use(new std::size_t(1)) {}

        HasPtr(const HasPtr &p): 
            ps(p.ps), i(p.i), use(p.use) {}

        HasPtr& operator=(const HasPtr&);
        ~HasPtr();

    private:
        std::string *ps;
        int i;
        std::size_t *use;
};

int main() {

}
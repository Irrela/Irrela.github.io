//
// Created by seiro on 2023/10/13.
//

#ifndef CPP_CODE_13_5_H
#define CPP_CODE_13_5_H

#include <string>
#include <memory>

class StrVec {
public:
    StrVec():
        elements(nullptr), first_free(nullptr), cap(nullptr) {}
    StrVec(const StrVec&);
    StrVec &operator=(const StrVec&);
    ~StrVec();

    void push_back(const std::string&);
    std::size_t size() const; // const放在函数声明的末尾。它表示这个函数不会修改调用它的对象的成员变量。这是 C++ 中的一种承诺，允许你在 const 对象上调用这个函数。
    std::size_t capacity() const;
    std::string* begin() const;
    std::string* end() const;

private:
    static std::allocator<std::string> alloc;
    void chk_n_alloc()
    {
        if (size() == capacity())
        {
            reallocate();
        }
    }

    std::pair<std::string*, std::string*> alloc_n_copy(const std::string*, const std::string*);

    void free();
    void reallocate();
    std::string *elements;
    std::string *first_free;
    std::string *cap;


};



#endif //CPP_CODE_13_5_H

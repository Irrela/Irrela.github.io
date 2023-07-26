---
title: L5 Haskell with Monads
categories: Pli
tags:
- PLI
mathjax: true
---
### Monadic Programming
Monad允许像排序、取消引用、破坏性赋值和输入/输出这样的动态函数语言特性 `完全` 在纯函数语言中表达。 

这令得到的程序看起来是imperative的，但保留了函数式程序的所有良好属性。 

Monads是一级对象，类型系统可以确保它们被正确使用。 

Monads编程的一个例子是Haskell处理 输入/输出 的方法。

#### Monadic Input/Output
output action的type是`IO ()`(目前先忽略（）)。

`IO ()`是monad的一个实例，`a :: IO ()`表示一个action。

```haskell
putChar :: Char -> IO ()
```
表达式putChar '!' 表示打印感叹号的操作。

```haskell
putStr :: String -> IO ()
print :: Show a =>  IO ()
```
这些都已经在Prelude中定义了。

Prelude中还定义了用于组合操作的函数(>>)。 (实际上(>>)和 return 来自Monad type 类。)
```haskell
> (>>) :: IO () -> IO () -> IO ()
puts :: String -> IO ()
puts [] = return ()
puts (c : s) = putChar c >> puts s
```
#### The Variable main
到目前为止，我们只有表示动作的表达式。 如何才能真正让行动发生呢？
```haskell
main = print ([(n, 2^n) | n <- [0..19]])

main = puts "ha" >> puts "ha"

main = let m = puts "ha" in m >> m 
```
#### Input
input产生一个值，这就是IO被参数化的原因。
```haskell
getChar :: IO Char
getLine :: IO String
interact :: (String -> String) -> IO()
```
函数getChar返回输入中的第一个字符。

函数getLine返回第一行。 

函数InterAct以函数f作为其参数。 将整个输入传递给函数，并输出结果。

```haskell
> main = interact (filter isAscii)
```

#### Using Files
```haskell
> type FilePath = String
> writeFile :: FilePath -> String -> IO ()
> appendFile :: FilePath -> String -> IO ()
> readFile :: FilePath -> IO String
> main
>   = appendFile "squares" (show [(x,x*x) | x <- [1..9]])
```

#### Plumbing(>>=)
根据我们是否要使用第一个操作的结果，有两种方法对操作进行排序。 

`>>=` 操作将第一个操作的结果传递给下一个操作。
```haskell
> (>>=) :: IO a -> (a -> IO B) -> IO b
> (>>) :: IO a -> IO b -> IO b
> return :: a -> IO a

> m >> k = m >>= \_ -> k

> main = readFile "inp"  >>= \s ->
>        writeFile "out" (filter isAcsii s) >>
>        putStr "Filtering successful\n"
```

#### Do Expressions
使monad风格看起来真正imperative，只是一个句法问题。 DO表达式支持以下内容：
```haskell
> main
>   = do
>       putStr "Input file: "
>       ifile <- getLine
>       putStr "Output file: "
>       ofile <- getLine
>       s <- readFile ifile
>       writeFile ofile (filter isAscii s)
>       putStrLn "Filtering successful"
```
#### Monadic编程例子
交互式检查二叉树中的节点：
```haskell
data Direction = Myleft | MyRight | MyQuit

inspectTree :: Show a => Tree a -> IO()
inspectTree Void
    = putChar "Empty"

inspectTree (Tr left node right)
    = do
        putStrLn(show node)
        cmd <- response
        case cmd of
            MyLeft -> inspectTree left
            MyRight -> inspectTree right
            MyQuit -> return()

response :: IO Direction
response
    = do
        putStrLn "(L)eft or (R)ight or (Q)uit?"
        c <- getLine
        case c of
            "l" -> return MyLeft
            "L" -> return MyLeft
            "r" -> return MyRight
            "R" -> return MyRight
            "q" -> return MyQuit
            "Q" -> return MyQuit
```
#### Type and Data Constructors
我们已经给出过type Tree a 的定义：
```haskell
data Tree a
    = Void
    | Tr(Tree a) a (Tree a)
        deriving (Eq, Show)
```
这里Tr是一个`data constructor`，用于构造类型为Tree a的元素。请注意，它只是一个`function`。 

Tree是一种`type constructor`，是一种更高阶的类型。 它是一个从type到type的函数。

#### Higher-Order Types

Prelude定义：
```haskell
class Functor f where
    fmap :: (a -> b) -> fa -> fb
```
注意类型变量f是如何应用于其他类型的：换句话说，它是一个`type constructor`。 

作为`Functor`实例的`Types`允许“map”函数，该函数将a -> b类型的函数“提升”到更高的 fa -> fb级别。

#### The Functor Class
Lists是Functor的实例, with fmap = map。

```haskell
instance Functor [] where 
    fmap f []
        = []
    fmap f (x:xs)
        = f x : fmap f xs
```
我们可以使任何其他“container”类型成为Functor的实例：

```haskell
instance Functor Tree where   
    fmap f Void
        = Void 
    fmapf(Tr t n n')
        = Tr (fmap f t) (f n) (fmap f t')
```

#### The Monad Class
另一个利用高阶类型的类是Monad类。
```haskell
class Monad m where
   (>>=) :: ma->(a->mb)->mb
   (>>) :: ma->mb->mb
   return:: a->ma 

m >> k = m >>= \_ -> k
```
运算符 >>= 称为“bind”，运算符 >> 称为“sequence”。 

显然，我们已经看到了Monad类的一个实例：类型构造函数IO.

#### The Maybe Instance
一种有用的数据类型是“Maybe”类型：
```haskell
data Maybe a = Nothing | Just a
```

例如，我们可以使用“Nothing”表示搜索不成功：

```haskell
> linSearch :: Eq a => [a] -> a -> Maybe Int 
>
> linSearch xs y
>   |occs == [] = Nothing
>   |otherwise = Just (head occs)
>   where
>       occs = [i | (x,i) <- zip xs [0..], x == y]
```

Maybe既是一个monad也是一个functor：

```haskell
> instance Monad Maybe where 
>   return = Just
>   Just x >>= f = f x
>   Nothing >>= f = Nothing


> instance Functor Maybe where
>   fmap f (Just x) = Just (f x) 
>   fmap f Nothing = Nothing
```

为什么我们想要Maybe作为一个monad，为什么要给 >>= 这个特殊的定义呢？- 因为它能帮助我们编写更整洁的程序！ 

假设f和g都是可能会产生一些异常结果的函数(因此我们想给它们一个Maybe type)，并且我们想要使用它们的组合g( f x)。 
这就导致不少单调乏味的plumbing工作：

```haskell
case (f x) of
    Nothing -> Nothing 
    Just y -> case (g y) of
        Nothing -> Nothing 
        Just z -> Just z
```
但既然Maybe是一个monad，我们可以改写上述为：
```haskell
f x >>= \y -> 
g y >>= \z ->
return z

-- same thing in do notation
do y <- f x
   z <- g y
   return z
```

甚至进一步简化为：
```haskell
f x >>= \y ->
g y >>= return

-- more simple, by so-called monad law
f x >>= \y -> g y

-- more simple!
f x >>= g
```
#### The MonadPlus Class
许多monad都有更多的结构，即一个自然的“zero”元素和一个“plus”运算符，遵循:
```haskell
m >>= (\x -> mzero) = mzero
mzero >>= f = mzero
m 'mplus' mzero = m
mzero 'mplus' m = m

-- with the class definition
class Monad m => MonadPlus m where
    mzero :: m a
    mzero :: m a -> m a -> m a
```

##### MonadPlus Eg
```haskell
> instance MonadPlus [] where 
>   mzero = []
>   mplus = (++)

> instance MonadPlus Maybe where 
>   mzero = Nothing 
>   Nothing ‘mplus‘ ys = ys
>   xs ‘mplus‘ ys = xs
```

#### State Monads
state Monads(状态单体)具有以下形式的类型:
```haskell
data SM a = SM (S -> (S, a))
```

其中S是某种“state”类型，而a是某种“value”类型。 

这个想法是，一个动作不仅产生一个value，它还改变一个“state”。

```haskell
instance Monad SM where
    return a
        = SM (\s -> (s, a))
    SM sm0 >>= f
        = SM (\s0 -> let (s1, a1) = sm0 s0
                          SM sm1 = f a1
                     in
                        sm1 s1     
             )           
```

虽然看起来可能很奇怪，但作为状态线程程序中“隐藏管道”的工具，这可能非常有用。 

我们将在第8课中看到一个很好的例子，当我们使用state monad进行解析时。

---
title: Java常用库及函数
categories: Java
tags:
- Java
---

- [算法](#算法)
  - [partition函数](#partition函数)
  - [gcd lcm](#gcd-lcm)
  - [排序](#排序)
    - [冒泡排序](#冒泡排序)
    - [插入排序](#插入排序)
    - [选择排序](#选择排序)
    - [快速排序](#快速排序)
  - [mergeSort](#mergesort)
  - [二分查找](#二分查找)
  - [库大纲](#库大纲)
    - [java.lang 默认导入，无需import](#javalang-默认导入无需import)
    - [java.util](#javautil)
  - [格式化打印](#格式化打印)
  - [Stream](#stream)
  - [集合转换为arr](#集合转换为arr)
  - [For遍历](#for遍历)
  - [String](#string)
  - [StringBuilder(java.lang)](#stringbuilderjavalang)
  - [Integer](#integer)
  - [Scanner](#scanner)
- [Collections](#collections)
  - [List](#list)
  - [LinkedList](#linkedlist)
  - [ArrayList](#arraylist)
  - [Deque](#deque)
  - [Collection](#collection)
  - [PriorityQueue](#priorityqueue)
  - [HashMap](#hashmap)
  - [数组操作](#数组操作)
  - [BigInteger BigDecimal](#biginteger-bigdecimal)
  - [Random](#random)
  - [valueOf](#valueof)
  - [Thread](#thread)
    - [Object wait](#object-wait)
    - [sleep](#sleep)
    - [yield](#yield)
    - [join](#join)
    - [interrupt](#interrupt)
    - [setDaemon和isDaemon](#setdaemon和isdaemon)
  - [内部类](#内部类)

## 算法
### partition函数
```java
private int partition(arr,left,right) {
  int pivot = arr[left];
  while(left < right) {
    while(left < right && arr[right] >= pivot) {
      right--;
    }
    while(left < right && arr[left] <= pivot) {
      left++;
    }

    swap(arr, left, right);
  }

  arr[left] = pivot;
  return left;
}
```

### gcd lcm
```java

// 获取两个整数的最大公约数
public static long gcd(long a, long b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b , a % b);
    }
}

public static long getMinMultiple(long a, long b) {

    return a * b/gcd(a, b);
}
```

### 排序
#### 冒泡排序
```java
public class Sort {

    public static void main(String[] args) {

    }
    private static void swap(int[] arr, int a, int b) {
      int temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
    }

    // Bubble
    private void bubble(int[] arr) {
      if(arr == null) {
        return ;
      }

      for (int i = 0; i < arr.length; i++) {
        for (int j = 0; j < arr.length - i - 1; j++) { // 第一趟把最大的送到len-1，第二趟把第二大的送到len-2，所以j的upper是这样的
          if(arr[j] > arr[j+1]) {
            swap(arr, j, j + 1);
          }
        }
      }
    }
}
```

#### 插入排序
```java
// Insert
private void insert(int[] arr) {
  if(arr == null) {
    return ;
  }

  for (int i = 1; i < arr.length; i++) {
    int temp = arr[i]; // 先把要被插入的数拿出， 这个位置将会被前面的数占据
    int j = i - 1;

    while(j >= 0 && arr[j] > temp) { // 每次循环都将让j+1和j 变成当前j位置的数， 然后j+1到j
      arr[j + 1] = arr[j];
      j -= 1;
    }

    arr[j + 1] = temp; // 插入
  }
}
```

#### 选择排序
```java
// selection
private void select(int[] arr) {
  if(arr == null) {
    return ;
  }

  for (int i = 0; i < arr.length; i++) {
    int minIndex = i;

    for (int j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if(minIndex != i) {
      swap(arr, minIndex, i);
    }
  }
}
```
#### 快速排序
```java
// quick
private void quick(int[] arr, int low, int high) {
  if(low >= high) {
    return ;
  }

  int i = low, j = high;
  
  while(i < j) {
    while(i < j && arr[j] >= arr[low]) {
      j--;
    }

    while(i < j && arr[i] <= arr[low]) {
      i++;
    }

    swap(arr, i, j);
  }

  swap(arr, low, i);

  quick(arr, low, i - 1);
  quick(arr, i + 1, high);
}
```

### mergeSort
```java
class MergeSort {

    public static void main(String[] args) {
        if(args == null || args.length ==0){
            return;
        }

        int[] array = new int[args.length];
        for(int i = 0; i < args.length;i++){
            array[i] = Integer.parseInt(args[i]);
        }


        mergeSort(array, 0, array.length - 1);

        for(int i = 0; i < args.length;i++){
            System.out.print(array[i]+" ");
        }
    }

    public static void mergeSort(int[] arr, int low, int high){
        int mid = (low + high)/2;
        if(low < high){
            mergeSort(arr, low, mid);
            mergeSort(arr, mid + 1, high);
            merge(arr, low, mid, high);
        }
    }

    public static void merge(int[] arr, int low, int mid, int high){
        int size1 = mid - low + 1;
        int size2 = high - mid;

        int[] left = new int[size1];
        int[] right = new int[size2];

        for(int i = 0;i < size1;i++){
            left[i] = arr[low + i];
        }
        for(int i = 0;i < size2;i++){
            right[i] = arr[mid + i + 1];
        }

        int i = 0, j = 0;
        int k = low;

        while(i < size1 && j < size2){
            if(left[i] <= right[j]){
                arr[k++] = left[i++];
            }else{
                arr[k++] = right[j++];
            }
        }

        while(i < size1){
            arr[k++] = left[i++];
        }
        while(j < size2){
            arr[k++] = right[j++];
        }
    }
}
```

### 二分查找
返回第一个出现index的二分查找

```java
public class Test {
  public static void main(String[] args) {

    int[] nums = new int[] {0,1,2,3,4,5,6,6,6,6,7,8,9,10};

    System.out.println(binary(nums, 5));
    
  }

  private static int binary(int[] nums, int target) {
    if(nums == null) {
      return 0;
    }

    int low = 0, high = nums.length - 1;

    while(low < high) {
      int mid = low + (high - low) / 2;

      if(nums[mid] > target) {
        high = mid - 1;
      } else if(nums[mid] < target ) {
        low = mid + 1;
      } else {
        high--;
      }
    }

    return low;
  }
}
```



### 库大纲

#### java.lang 默认导入，无需import
- 数据类型包装类
- 数学类Math
- String相关类
- Thread类
- Throwable类

#### java.util
- 数据结构类
- 随机数Random类
- [Date](https://www.cjavapy.com/article/30/)日期类

### 格式化打印
```java
String.format("f...", res);

printf("%4.d\n",1);
printf("%4.d\n%4.d\n%4.d\n",3,12,1123);
printf("%-10s%d\n",s,12);
%4.xx  使输出右对齐；不足4位用空格；
%.4xx  使小数保留4位小数，若该数为整形，不足四位前填0；多余4位原样输出；
%-4.xx 使输出的数左对齐；
%-10s  使字符串左对齐输出，不足10位，后加空格；
%10s   使字符串右对齐输出，不足10位，前加空格；
%10.s  不输出字符，只输出10位空格；
%.10s  字符原样输出；
 
举例：
#include<stdio.h>
int main()
{
printf("%4.d%4.d%4.d\n",1,34,12344);
printf("%4.d\n%4.d\n%4.d\n",3,12,11123);  //右对齐；不足四位，前加空格；
printf("%.4d\n%.4d\n%.4f\n%.4f\n",23,2342,2.3,343.32);  //对小数，保留四位小数；对整数，不足四位，前加零；
printf("%-4.d%-4d\n",1,23423);  //左对齐；不足四位，后加空格；
printf("%-10s%-10s\n","asdsd","asdsfdgfhgh");  //不足十位，后加空格；
printf("%10s%10s\n","sdsfsf","sdsfdsgsgf");  //不足十位，前加空格；
printf("%10.sq\n","asdaff");  //输出十个空格；
printf("%.10s%.10s\n","asdad","sdsfdsgfgg"); //字符串原样输出；
}

```


### Stream
```java
int[] li = new int[] {0,1,2,3,4,5,6,7,8,9};

// int[] -> Integer[]
Integer[] lis = Arrays.stream(li).boxed().toArray(Integer[] :: new);
// Integer[] -> int[]
int[] intArray = Arrays.stream(array).mapToInt(Integer :: intValue).toArray();

// int[] -> List<Integer>
List<Integer> list  = Arrays.stream(li).boxed().collect(Collectors.toList());

```
### 集合转换为arr

```java
list.toArray(new int[0][0]);
```

### For遍历
```java
// foreach， 适用于数组以及集合类
for(int num : numbers){
    System.out.println(num);
}
// lambda表达式foreach
userList.forEach(e -> { 
    System.out.println(e);
});


// Map的遍历技巧
for(Map.Entry<?, ?> entry : map.entrySet()){
    int key=entry.getKey();
    int value=entry.getValue();
}

// 也可用lambda, 但注意是使用键值对的set来遍历
map.entrySet().forEach(e -> {});

for(Integer key : map.keySet()){
    ...;
}

for(? value : map.values()){
    ...;
}


```
### String
```java
// 得到StringBuilder的String对象
String str = new String(StringBuilder strb || char[] chars);

// String长度
int len = str.length();

//  截取一个字符
char c = str.charAt(index);

// 比较string 内容
boolean isTheSame = str1.equals(str2);

// 去掉前后blank
String compactStr = str.trim();

// 大小写
String lowerStr = str.toLowerCase();
String upperStr = str.toUpperCase();

// to Char Array
char[] charArr = string.toCharArray();

// SubString, 前包含后不包含
String subString = str.substring(startIndex, endIndex);

// 返回此字符串中指定字符的 第一个 匹配项的索引, 找不到返回-1。
int index = str.indexOf(String findStr);

// 返回一个新字符串，该字符串是将此字符串中所有出现的oldChar替换为newChar而得到的。
String newStr = str.replace(char oldChar, char newChar);

// 在给定正则表达式的匹配项周围拆分此字符串。
String[] arr = str.split(String regex, int limit(分割数，可选));

// valueof
String str = String.valueOf(Object o);

// join, 
String result = String.join(", ", List<String> list);



```

### StringBuilder(java.lang)
```java
StringBuilder strb = new StringBuilder();
StringBuilder strb = new StringBuilder(String str);

// 注意 可以 string + strb, 自动强转成一个string
String newStr = String oldStr + StringBulider strb;

// 可以append所有基本类型，String， StringBuffer, 但不知StringBuilder
append(String str);
append(char c);

insert(int index, String newStr); // 插入一个char或者str到指定index，后面的元部分顺序后移。

strb.append("string");
strb.insert(1, "hello, "); // -> shello, tring

length();

charAt();
deleteCharAt(int index);

indexOf(String str);
indexOf(String str, int fromIndex);

reverse(); // -> StringBuilder 

setCharAt(int index, char c);

subString(int start, int end); // -> String
replace(int start, int end, String str); // -> StringBuilder, 把start 到 end-1 的部分换成str
```

### Integer
```java

Integer.MAX_VALUE // 2147483647, 2^31 - 1
Integer.MIN_VALUE // -2147483648, - 2^31

// 构造： int 或 String
Integer x = new Integer(int i || String str);
// valueof， 封装 int / String 为 Integer对象
Integer x = Integer.valueOf(int i || String str);

// intValue(), 以int形式返回此Integer的值。拆包
int x = integer.intValue();

// 因为Integer和int会自动装包卸包，所以也等效与
Integer x = int i;
int i = Integer x;


// 把String转换成int, Integer只是中介
int x = Integer.parseInt(String str);

// char -> int
int num = char - 48;
```

### Scanner
```java
// Get a scanner object
Scanner sc = new Scanner(System.in);

// nextLine() 返回 下一个 \n 的所有内容，包括空格
String line = sc.nextLine();

// next() 返回下一个 space 或 \n 前的内容, 自动trim
String word = sc.next();

// nextInt()... 返回机制同next(), 只不过类型是对应类型而非Strings
int num = sc.nextInt();
```


## Collections

### List
```java
LinkedList<Integer> li = new LinkedList<>() || new ArrayList<>();

// 注意，仅返回一个拷贝，无法直接对其修改来改变li中元素的值，如要修改应该用set
li.get(int index); 

li.set(int index, E newElement);

li.add(E element); // 默认尾部， 相当于 li.add(li.size(), E element);
li.add(int index, E element);

li.addAll(Collections collection);
li.addAll(int index, Collections collection);

li.clear();

// 两种排序
// Collections 静态
Collections.sort(li);
Collections.sort(li, new Comparator<Integer>(){
    @Override
    public int compare(Integer a, Integer b){
        return a - b;
    }
});

//
lis.sort(new Comparator<Integer>(){
    @Override
    public int compare(Integer a, Integer b){
        return a - b;
    }
});

// Lambda写法
lis.sort((Integer a, Integer b) -> a - b);

lis.sort(Comparator.naturalOrder()); // 使用现有构造器



```

### LinkedList
做栈，队列的时候可以考虑
```java
LinkedList<Integer> li = new LinkedList<>(); 

li.add(element); //默认在尾部add
li.add(index, element); //index为0， 即头插
li.remove(); //默认在头部remove
li.remove(index); //

li.get(int index);

```

### ArrayList
```java
ArrayList<Integer> li = new ArrayList<>(); // 不要用List接口，没有getFirst/Last方法

li.add(element); //默认在尾部add
li.add(index, element); //index为0， 即头插

li.remove(index); // ArrayList 没有默认的remove()方法

li.get(index);

li.set(index, element);

li.indexOf(element);
li.lastIndexOf(element);
```

### Deque
> Note！ deque的peek和poll默认是head， offer和add默认是end

> 如果用push，pop则视作stack，都在end操作， 但peek要用peekLast()

双端队列可以用作Queue和Stack
```java
// 一般用LinkedList或者ArrayDeque实现
Deque<Integer> deque = new LinkedList<>();
Deque<Integer> deque = new ArrayDeque<>();

// 操作失败会抛出异常 + First or Last
deque.add(); 
deque.remove();
deque.get();

// 操作失败返回特殊值
deque.offer();
deque.poll();
deque.peek();

// Queue Method
queue.offer();
queue.poll();
queue.peek();

// Stack Method
stack.push();
stack.pop();
stack.peekLast();

```
### Collection
链表也可以实现random access，实质上还是根据给出的index来进行顺序查找
```java
// 在指定位置插入element
add(int index, E element);

//在指定位置插入一个collection c
addAll(int index, Collection<? extends E> c)

// 清空集合
clear();

// 剔除某个instance
remove(object);

// 大小
size();

// To Array
double[] arr = list.toArray(new double[0]);


LinkedList<int[]> list = new LinkedList<>();
int[][] res = list.toArray(new int[0][0]);
```

### PriorityQueue
```java
// 新建优先队列(可选参数：初始容量，比较器)
Queue<Integer> priorityQueue = new PriorityQueue<>(int initialCapacity,
Comparator<? super E> comparator )

// 重写比较器例子
PriorityQueue<ListNode> queue = new PriorityQueue<>(len, new Comparator<ListNode>(){
            @Override
            public int compare(ListNode node1, ListNode node2){
                if(node1.val < node2.val){
                    return -1;
                }else if(node1.val == node2.val){
                    return 0;
                }else{
                    return -1;
                }
            }
        });


// methods
pq.clear();
pq.offer() / add();
pq.size();

// 对head
pq.poll(); // 移除堆顶
pq.peek();
pq.remove(object);

// 小根堆
PriorityQueue<Integer> pos = new PriorityQueue<>((a, b) -> a-b); 
// 大根堆
PriorityQueue<Integer> neg = new PriorityQueue<>((a, b) -> b-a); 

// 二元组例子
PriorityQueue<int[]> queue = new PriorityQueue<>((a, b) -> a[0] - b[0]);
```

### HashMap
```java
// 新建hashmap
Map<Integer, Character> map = new HashMap<>();

// methods
map.containsKey(Object key);
map.containsValue(Object value);
map.get(Obeject key); // return its value
map.getOrDefault(Object key, V defaultValue); // 返回value，找不到key则返回默认值

map.put(K key, V value);
map.putIfAbsent(K key, V value); // 如果指定的键尚未与某个值关联(或映射到NULL)，则将其与给定值关联并返回NULL，否则返回当前值。

map.replace(K key, V value); // 仅当key的entry已经存在才替换，否则为无效操作。！！！与put不同， put不管该entry是否已经存在都执行，无的话就新建，有的话就更新。
map.replace(K key, V oldValue, V newValue); // 仅当当前映射到指定值时才替换指定键的条目。

map.remove(Object key); // 从该map中删除指定键的映射(如果存在)。
map.remove(Object key, Object value); // 仅当指定键当前映射到指定值时，才移除指定键的entry。


// Set<Map.Entry<K,V>>
map.entrySet();

// Set<K>
map.keySet();

// Collection<V>
map.values();

```

### 数组操作
```java
subArr = Arrays.copyOfRange(int[] superArr, int start, int end);

//java实现list -> array很不方便，因为list一般是包装类例如Integer，而数组一般是基础对象如int
//直接用toArray函数无法实现，List<Integer>.toArray -> Integer[]
int[] arr = new int[list.size()];
for(int i = 0; i <list.size(); i++){
    arr[i] = list.removeFirst();
}

// int[] -> List<Integer>
// 注意不能用int[], 不会自动装箱
// 注意li和arr存在bind关系，修改其中一个的元素会影响另一个
List<Integer> li = Arrays.asList(Integer[] arr);

// 如要破除bind关系，应当new一个新的list
List<Integer> li = new ArrayList(Arrays.asList(Integer[] arr));


// 返回搜索e的index，注意要求arr本身有序
// 针对无序arr应该直接暴力搜索
Arrays.binarySearch(int[] arr, int element); 

```
### BigInteger BigDecimal
BigInteger内部用一个int[]数组来模拟一个非常大的整数
```java
import java.math.BigInteger;

BigInteger bi = new BigInteger("1234567890");
System.out.println(bi.pow(5)); // 2867971860299718107233761438093672048294900000

BigInteger i1 = new BigInteger("1234567890");
BigInteger i2 = new BigInteger("12345678901234567890");
BigInteger sum = i1.add(i2); // 12345678902469135780

add();
subtract();
divide();
multiply();
bi.pow(5);
bi.abs();

divideAndRemainder();

// 
BigDecimal用scale()表示小数位数.
如果一个BigDecimal的scale()返回负数，例如，-2，表示这个数是个整数，并且末尾有2个0
```

### Random
```java
Random rand =new Random(25);
int i;
i=rand.nextInt(100);//得到一个随机数
```

### valueOf
包装类的方法，把可以转化的转化成该包装类的对象。

### Thread
<https://www.cnblogs.com/dolphin0520/p/3920357.html>

#### Object wait
<https://www.liaoxuefeng.com/wiki/1252599548343744/1306580911915042>

#### sleep
sleep相当于让线程睡眠，交出CPU，让CPU去执行其他的任务。

但是有一点要非常注意，`sleep方法不会释放锁`，也就是说如果当前线程持有对某个对象的锁，则即使调用sleep方法，其他线程也无法访问这个对象。

如果调用了sleep方法，必须捕获InterruptedException异常或者将该异常向上层抛出.

调用sleep方法相当于让线程进入阻塞状态。

#### yield
调用yield方法会让当前线程交出CPU权限，让CPU去执行其他的线程。

不会释放锁。

yield不能控制具体的交出CPU的时间，另外，yield方法只能让`拥有相同优先级的线程`有获取CPU执行时间的机会。

调用yield方法并不会让线程进入阻塞状态，而是让线程重回就绪状态。

#### join
```
thread1.join()
thread1.join(long millis)     //参数为毫秒
thread1.join(long millis,int nanoseconds)    //第一参数为毫秒，第二个参数为纳秒

```
main方法会等待thread线程执行完毕或者等待一定的时间。如果调用的是无参join方法，则等待thread执行完毕，如果调用的是指定了时间参数的join方法，则等待一定的时间。

> 实际上调用join方法是调用了Object的wait方法
> 让线程进入阻塞状态，并且会释放线程占有的锁，并交出CPU执行权限。

#### interrupt
单独调用interrupt方法可以使得处于阻塞状态的线程抛出一个异常。

通过interrupt方法可以中断处于阻塞状态的线程，不能中断正在运行中的线程, 但是如果配合isInterrupted()能够中断正在运行的线程

#### setDaemon和isDaemon

用来设置线程是否成为守护线程和判断线程是否是守护线程。

守护线程和用户线程的区别在于：守护线程依赖于创建它的线程，而用户线程则不依赖。举个简单的例子：如果在main线程中创建了一个守护线程，当main方法运行完毕之后，守护线程也会随着消亡。而用户线程则不会，用户线程会一直运行直到其运行完毕。在JVM中，像垃圾收集器线程就是守护线程。






### 内部类
[Java中内部类的使用总结](https://www.cjavapy.com/article/40/)


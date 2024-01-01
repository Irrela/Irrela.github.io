from typing import List


def binary_search(arr: List[int], target: int) -> int:
    """
    基础版, 当有重复target时无法确定具体index
    """
    lo, hi = 0, len(arr) - 1

    while lo <= hi:
        mid = lo + (hi - lo) // 2
        if arr[mid] < target:
            lo = mid + 1
        elif arr[mid] > target:
            hi = mid - 1
        else:
            return mid

    return -1


def binary_search_first_equal(arr: List[int], target: int) -> int:
    """
    查找第一个等于给定值的元素
    """
    lo, hi = 0, len(arr) - 1

    while lo <= hi:
        mid = lo + (hi - lo) // 2
        if arr[mid] < target:
            lo = mid + 1
        elif arr[mid] > target:
            hi = mid - 1
        else:
            # 找到了相等的元素，继续向左搜索
            hi = mid - 1

    return lo if lo < len(arr) and arr[lo] == target else -1


def binary_search_first_strictly_less(arr, target) -> int:
    """
    第一个严格小于给定值的元素
    binary_search_first_equal
    binary_search_first_equal 取 lo
    binary_search_first_strictly_less 取 hi

    ... 2  2  3 ...
           hi lo 

    ... 2  2]
           hi lo            
    """
    lo, hi = 0, len(arr) - 1

    while lo <= hi:
        mid = lo + (hi - lo) // 2
        if arr[mid] < target:
            lo = mid + 1
        elif arr[mid] > target:
            hi = mid - 1
        else:
            hi = mid - 1

    print(f"lo: {lo}")
    print(f"hi: {hi}")
    return hi if hi >= 0 else - 1


def binary_search_last_equal(arr: List[int], target: int) -> int:
    """
    查找最后一个等于给定值的元素

    ... 2  2  3 ...
           hi lo 

    ... 2  2]
           hi lo            
    """

    lo, hi = 0, len(arr) - 1

    while lo <= hi:
        mid = lo + (hi - lo) // 2
        if arr[mid] < target:
            lo = mid + 1
        elif arr[mid] > target:
            hi = mid - 1
        else:
            # 找到了相等的元素，继续向右搜索
            lo = mid + 1
    return hi if hi >= 0 and arr[hi] == target else -1


def binary_search_first_strictly_greater(arr, target) -> int:
    """
    第一个严格大于 给定值
    和binary_search_last_equal类似
    binary_search_last_equal 取 hi
    binary_search_first_strictly_greater 取 lo

    ... 2  2  3 ...
           hi lo 

    ... 2  2]
           hi lo            
    """
    lo, hi = 0, len(arr) - 1

    while lo <= hi:
        mid = lo + (hi - lo) // 2
        if arr[mid] < target:
            lo = mid + 1
        elif arr[mid] > target:
            hi = mid - 1
        else:
            # 找到了相等的元素，继续向右搜索
            lo = mid + 1

    return lo if lo < len(arr) else - 1


# TODO 第一个大于等于给定值
# TODO 第一个小于等于给定值


def main():
    print("测试开始")

    # 测试用例
    arr_empty = []
    arr_single = [5]
    arr_even = [1, 3, 5, 7]
    arr_odd = [2, 4, 6, 8, 10]
    arr_repeated = [2, 2, 4, 4, 4, 6, 8, 8, 10]
    arr_negative = [-10, -5, 0, 5, 10]
    arr_mixed = [-3, 0, 2, 5, 8]

    # 常规测试
    assert binary_search_first_strictly_greater(arr_even, 5) == 3
    assert binary_search_first_strictly_greater(arr_odd, 6) == 2
    assert binary_search_first_strictly_greater(arr_repeated, 4) == 5
    assert binary_search_first_strictly_greater(arr_negative, 0) == 2
    assert binary_search_first_strictly_greater(arr_mixed, 2) == 2

    # 边界测试
    assert binary_search_first_strictly_greater(arr_empty, 5) == -1  # 空数组
    assert binary_search_first_strictly_greater(arr_single, 5) == 0  # 单个元素
    assert binary_search_first_strictly_greater(arr_even, 2) == -1  # 不存在的元素
    assert binary_search_first_strictly_greater(arr_odd, 11) == -1  # 超出范围的元素
    assert binary_search_first_strictly_greater(
        arr_negative, -15) == -1  # 负数元素
    assert binary_search_first_strictly_greater(arr_mixed, -3) == 0  # 最小元素
    assert binary_search_first_strictly_greater(arr_mixed, 8) == 4  # 最大元素

    print("所有测试用例通过！")


if __name__ == "__main__":
    arr_repeated = [1] * 5
    arr_repeated.extend([3]*5)
    arr_repeated.extend([5]*5)
    print(arr_repeated)
    print(f"res: {binary_search_first_strictly_less(arr_repeated, 4)}")

    # main()

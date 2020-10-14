---
layout: post
title: Python常用
categories: Python
description: 
keywords: 
---
### 读取文件
```python
# -> ()
# Data loading functions 
# csv file elete header info

def load_data_csv(source_data):
    with open(source_data) as file:
        lines  = csv.reader(file)
        data = list(lines)
        del data[0]
    return data

def load_data_txt(source_data):
    with open(source_data, "r") as file:
        data  = file.readlines()

        res = []        
        for case in data:
            res.append(case.split())
            
    return res
```
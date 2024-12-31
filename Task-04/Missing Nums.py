
n = int(input()) 
list_a = list(map(int, input().split())) 
m = int(input())
list_b = list(map(int, input().split())) 

count_a = {}
for num in list_a:
    if num in count_a:
        count_a[num] += 1
    else:
        count_a[num] = 1

count_b = {}
for num in list_b:
    if num in count_b:
        count_b[num] += 1
    else:
        count_b[num] = 1

missing_numbers = []
for num in count_b:
    if count_b[num] > count_a.get(num, 0):  
        missing_numbers.append(num)

missing_numbers.sort()
print(*missing_numbers)

def count_ways(X, N, i=1):
    if X == 0:  
        return 1
    if X < 0:   
        return 0

    count = 0
    while i ** N <= X:
        
        count += count_ways(X - i ** N, N, i + 1)
        i += 1
    return count

X = int(input())
N = int(input())

print(count_ways(X, N))

def count_digit_frequencies(S):
    freq = [0] * 10
    
    for char in S:
        if char.isdigit():
            freq[int(char)] += 1 
    
    print(*freq)

S = input()  
count_digit_frequencies(S)

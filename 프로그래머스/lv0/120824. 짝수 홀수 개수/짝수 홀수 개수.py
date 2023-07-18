def solution(num_list):
    zzak = sum(1 for num in num_list if num % 2 == 0)
    hol = sum(1 for num in num_list if num % 2 != 0)
    return [zzak, hol]
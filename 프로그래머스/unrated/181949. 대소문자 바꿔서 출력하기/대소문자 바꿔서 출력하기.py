str = input()

# 대문자를 소문자로, 소문자를 대문자로 변환하여 출력
for c in str:
    if c.isupper():
        print(c.lower(), end='')
    else:
        print(c.upper(), end='')

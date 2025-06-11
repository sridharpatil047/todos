class Solution:
    def resultingString(self, s: str) -> str:
        n = len(s)
        stack = []
        # stack.append(ord(s[0]) - 97)
        stack.append(s[0])

        for i in range(1, n):
            if len(stack) == 0:
                stack.append(s[i])
                continue

            top = ord(stack[-1]) - 97
            ele = ord(s[i]) - 97
            if top == (ele + 1)%26 or top == (ele - 1)%26:
                stack.pop()
            else:
                stack.append(s[i])

        return "".join(stack)
    
    
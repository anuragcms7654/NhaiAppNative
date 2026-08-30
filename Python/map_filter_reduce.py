def square(x, y):
   return x*y

nums = [1,2,3,4,5]
nums2 = [2,4,5,1,2,3,4,5]

# result = []
# for n in nums:
#    result.append(square(n))

# print(result)

result = list(map(square, nums, nums2))

print(result)
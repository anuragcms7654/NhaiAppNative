arr = [12,4,5,6,7,8,9,3,4,3]
print(len(arr)/2)

for i in range(len(arr)//2):
    arr[i], arr[len(arr)-1-i] = arr[len(arr)-1-i], arr[i]

print(arr)

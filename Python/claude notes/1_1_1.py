# Mutable example
a = [1, 2, 3]
b = a
b.append(4)
print(a)  # [1, 2, 3, 4] -> a changed too! same object

# Immutable example
x = "hello"
y = x
y += " world"
print(x)  # "hello" -> unchanged, y is a NEW string object


def addItems(item, items=[]):
   items.append(item)
   print(items)
def addItemss(item, items=[]):
   items.append(item)
   print(items)

addItems(1)
addItems(2)
addItems(3)
addItemss(3)
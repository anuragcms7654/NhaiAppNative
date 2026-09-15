# print([x ** 2 for x in range(10) if x % 2== 0])
import copy
# print({word: len(word) for word in ["hi", "bye", "hello", 'jh']})
# print({len(word) for word in ["hi", "bye", "hello", 'jh']})

# def squares():
#    gen = (x for x in range(10))
#    for i in gen:
#       yield i

      
# s = squares()
# print(next(s))
# print(next(s))
# print(next(s))
# print(next(s))
# print(next(s))


# def newFunc(**kwargs):
#    print(kwargs)

# newFunc(a=2, b=['sb', 'jsbd'])

# x, *y, z = [1,2,3,4,5,6,7]


# shallow = copy.copy(x)
# deep = copy.deepcopy(z)

# print(shallow, deep)

# == checks the value only, but is cheks the memory identity

# f = 234
# g = 234

# print(f == g) #True
# print(f is g) #True

# m = "357"
# n = "357"

# print(m == n) #True
# print(m is n) #True

# def func(a, b, *args, **kwargs):
#     print(a, b)        # required positional args
#     print(args)        # tuple of extra positional args
#     print(kwargs)       # dict of extra keyword args

# func(1, 2, 3, 4, x=5, y=6)

def squares(x):
   if (x%2 == 0):
      return True
   return False

listt = filter(squares, [1,2,3,4,5])

print(list(listt))

# when any function is passed to another function and modify its behaviour
# uper() gives access to methods of the parent class, without hardcoding the parent's name 
# — useful for calling parent's __init__ or overridden methods, and works correctly with MRO in multiple inheritance.

# Depends() tells FastAPI to call a given function and inject its 
# return value into the route parameter, rather than the route fetching that dependency itself.

# The real power of DI shows when the same dependency is reused across many routes
#  — the two most common real-world examples are a DB session and the current authenticated user.
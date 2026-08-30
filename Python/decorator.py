def repeat(times):   
    print("hello")                   # outer: accepts decorator args
    def decorator(func):                # middle: accepts the function
        def wrapper(*args, **kwargs):   # inner: actual wrapper
            for _ in range(times):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(times=3)
def say_hi():
    print("Hi")
print("hello1234")     
say_hi()   # prints "Hi" 3 times
def greet(name: str, age: int = 18) -> str:
    return f"{name} is {age} years old"

print(greet("Aman", 27))     # works as expected
print(greet(123, "abc"))     # Python still RUNS this at runtime (no error!) - only static tools catch it
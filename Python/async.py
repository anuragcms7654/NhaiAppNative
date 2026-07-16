import asyncio
import time

def blocking_function():
   time.sleep(5)  # blocking
   return "Done"

async def task():
    print("Start")
   #  time.sleep(5) 
    await asyncio.sleep(0)  # ✅ non-blocking
    print("End")

async def task2():
    print("Started task 2")
    result = await asyncio.to_thread(blocking_function) 
    print(result)
   #  time.sleep(5) 
   #  await asyncio.sleep(2)  # ✅ non-blocking
    print("End2")

async def main():
    await asyncio.gather(task(), task2())

asyncio.run(main())
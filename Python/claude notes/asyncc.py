import asyncio

async def work():
    print("Start")
    await asyncio.sleep(1)
    print("End")

async def main():
    task1 = asyncio.create_task(work())
    task2 = asyncio.create_task(work())

    await asyncio.sleep(5)
   #  await task1
   #  await task2

asyncio.run(main())
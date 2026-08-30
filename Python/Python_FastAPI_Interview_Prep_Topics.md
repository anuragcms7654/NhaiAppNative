# Python + FastAPI Interview Prep (4 YOE Level)
### Coming from Node.js/React background — quick reference for handwritten revision

---

## SECTION 1: CORE PYTHON

### 1.1 Basics & Data Structures
-  Mutable vs Immutable types (list/dict/set vs tuple/str/int/frozenset)
-  List, Tuple, Set, Dict — internal working, when to use which
-  List comprehension, Dict comprehension, Set comprehension, Generator expression
-  Slicing, unpacking (`*args`, `**kwargs`, `a, *b, c = [...]`)
-  Shallow copy vs Deep copy (`copy` module)
-  String formatting: f-strings, `.format()`, `%`
-  `is` vs `==` (identity vs equality)

### 1.2 Functions & Functional Concepts
-  `*args` and `**kwargs` — usage & order
-  Lambda functions
-  `map()`, `filter()`, `reduce()`
-  Closures — what & why
-  Decorators — writing custom decorators, decorators with arguments
-  `functools`: `lru_cache`, `wraps`, `partial`
-  First-class functions concept

### 1.3 OOP in Python
-  Class vs Instance variables
-  `__init__`, `self`, `cls`
-  Inheritance, Multiple Inheritance, MRO (Method Resolution Order)
-  `super()` usage
-  Encapsulation (`_protected`, `__private`, name mangling)
-  Abstract classes (`abc` module)
-  Dunder/magic methods (`__str__`, `__repr__`, `__eq__`, `__len__`, `__call__`)
-  `@staticmethod` vs `@classmethod` vs instance method
-  `@property` and setters
-  Dataclasses (`@dataclass`)
-  SOLID principles (be ready to explain with Python examples)

### 1.4 Iterators, Generators & Memory
-  Iterator protocol (`__iter__`, `__next__`)
-  Generators (`yield`, `yield from`) — why memory efficient
-  Generator vs List (lazy evaluation)
-  Garbage Collection — reference counting + cyclic GC
-  `del`, memory leaks in Python

### 1.5 Exception Handling
-  `try/except/else/finally`
-  Custom exceptions (inheriting from `Exception`)
-  Multiple except blocks, exception chaining (`raise ... from`)
-  Context managers (`with` statement, `__enter__`/`__exit__`, `contextlib.contextmanager`)

### 1.6 Concurrency — VERY IMPORTANT (interviewers love comparing to Node.js)
-  **GIL (Global Interpreter Lock)** — what it is, why it exists, impact on threads
-  Multithreading (`threading`) — good for I/O bound tasks
-  Multiprocessing (`multiprocessing`) — good for CPU bound tasks
-  `asyncio` — event loop, `async`/`await`, coroutines, tasks
-  Difference: **Node.js event loop (single-threaded, non-blocking I/O)** vs **Python asyncio (single-threaded event loop)** vs **Python threads (GIL-limited)**
-  `asyncio.gather()`, `asyncio.create_task()`
-  When to use threading vs multiprocessing vs asyncio

### 1.7 Type Hints & Modern Python
-  `typing` module: `List`, `Dict`, `Optional`, `Union`, `Any`, `Callable`
-  Type hints in function signatures
-  `Enum` class
-  Walrus operator `:=`
-  Match-case (Python 3.10+ switch-case equivalent)

### 1.8 Modules, Packages & Environment
-  `import` mechanics, `__init__.py`
-  Virtual environments (`venv`, `pipenv`, `poetry`)
-  `pip`, `requirements.txt`, dependency management
-  `__name__ == "__main__"`

### 1.9 Testing
-  `pytest` basics: fixtures, parametrize, markers
-  Mocking (`unittest.mock`, `pytest-mock`)
-  Test coverage tools

---

## SECTION 2: FASTAPI (CORE)

### 2.1 Fundamentals
-  Why FastAPI (vs Flask/Django) — ASGI, async support, auto docs, Pydantic validation, speed
-  **ASGI vs WSGI** — key architectural difference
-  Uvicorn / Gunicorn (with Uvicorn workers) for deployment
-  Auto-generated docs — Swagger UI (`/docs`) & ReDoc (`/redoc`)

### 2.2 Request Handling
-  Path parameters, Query parameters, Request body
-  Pydantic models — `BaseModel`, field validation
-  `Field()` — defaults, constraints, aliasing
-  Optional fields, nested models, list of models
-  Custom validators (`@validator` / `@field_validator` in Pydantic v2)
-  Pydantic v1 vs v2 differences (important — many companies migrating)
-  Request headers, cookies
-  Form data & File uploads (`UploadFile`, `File`)

### 2.3 Response Handling
-  Response models (`response_model=`)
-  Status codes, custom responses (`JSONResponse`, `HTMLResponse`, `StreamingResponse`)
-  Error handling — `HTTPException`
-  Custom exception handlers (`@app.exception_handler`)

### 2.4 Dependency Injection — IMPORTANT
-  `Depends()` — how DI works in FastAPI
-  Reusable dependencies (e.g., DB session, current user)
-  Sub-dependencies, dependency overrides (used in testing)
-  Class-based dependencies

### 2.5 Routing & Structure
-  `APIRouter` — modular routing
-  Path operation decorators (`@app.get`, `@app.post`, etc.)
-  API versioning strategies
-  Middleware — custom middleware, CORS middleware
-  Background tasks (`BackgroundTasks`)

### 2.6 Async in FastAPI
-  `async def` vs `def` endpoints — when FastAPI runs in threadpool vs event loop
-  Async DB calls (avoiding blocking calls inside async endpoints)
-  Common mistake: calling sync/blocking code inside async endpoint

### 2.7 Database Integration
-  SQLAlchemy (Core vs ORM)
-  Async SQLAlchemy / `SQLModel` / `Tortoise ORM`
-  Alembic — migrations
-  Connection pooling
-  Sessions — dependency-based session management
-  Raw SQL vs ORM — trade-offs

### 2.8 Authentication & Security
-  OAuth2 with Password flow (`OAuth2PasswordBearer`)
-  JWT — creation, decoding, expiry, refresh tokens
-  Password hashing (`passlib`, `bcrypt`)
-  Role-based access control (RBAC)
-  CORS configuration
-  Rate limiting (e.g., `slowapi`)
-  SQL Injection prevention (ORM parameterized queries)

### 2.9 Testing FastAPI
-  `TestClient` (from `fastapi.testclient` / `httpx`)
-  Overriding dependencies for tests
-  Testing async endpoints (`pytest-asyncio`)

### 2.10 Performance & Production
-  Caching (Redis) — cache-aside pattern
-  Celery / background workers for long-running tasks
-  Pagination strategies (offset vs cursor-based)
-  Logging (structured logging, `loguru`)
-  Settings management — `pydantic-settings`, `.env` files
-  Dockerizing a FastAPI app
-  Health check endpoints
-  WebSockets in FastAPI

---

## SECTION 3: SYSTEM DESIGN / GENERAL BACKEND (Expected at 4 YOE)

-  REST API design best practices (idempotency, status codes, versioning)
-  SQL vs NoSQL — when to use which
-  Database indexing, normalization, transactions, ACID properties
-  N+1 query problem & solutions
-  Caching strategies (Redis, in-memory, CDN)
-  Message queues — Kafka / RabbitMQ / Celery use cases
-  Monolith vs Microservices — trade-offs
-  Load balancing basics
-  Docker & Kubernetes fundamentals
-  CI/CD pipeline basics
-  Rate limiting & throttling strategies
-  Idempotency in APIs (important for payment/critical systems)

---

## SECTION 4: LIKELY COMPARISON QUESTIONS (Node.js → Python transition)

| Concept | Node.js | Python (FastAPI) |
|---|---|---|
| Concurrency model | Single-threaded event loop, non-blocking I/O | asyncio event loop (single-threaded) + GIL for threads |
| Package manager | npm/yarn | pip/poetry |
| Web framework style | Express (middleware chain) | FastAPI (dependency injection) |
| Validation | Joi/Zod/manual | Pydantic (built-in, type-based) |
| ORM | Sequelize/TypeORM/Prisma | SQLAlchemy/SQLModel/Tortoise |
| Async syntax | Promises, async/await | Coroutines, async/await |
| Runtime for CPU-heavy work | Worker threads | Multiprocessing |

---

## SECTION 5: SUGGESTED PRACTICE
-  Build one small CRUD API in FastAPI + PostgreSQL + SQLAlchemy (async) with JWT auth
-  Write 5–6 pytest test cases for it
-  Dockerize it
-  Practice explaining GIL, asyncio, and Pydantic validation out loud (common verbal questions)

---
*Tip for handwritten notes: Convert each checklist section into a mind-map with the section title as the center node and sub-points as branches — works well for quick day-before-interview revision.*

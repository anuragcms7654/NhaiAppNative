# 1. use parameterised query, not concatenation method for raw query

example
-- const query = `SELECT * FROM users WHERE email = '${email}'`;

const query = "SELECT * FROM users WHERE email = $1";
const result = await db.query(query, [email]);

# 2. use orm as they perform sql injection prevention by default
example - prisma, sequilize, typeORM

# 3. use JOI or ZOD middleware for input validation
-- const schema = Joi.object({
  email: Joi.string().email().required()
});

# 4. 5️⃣ Avoid Dynamic Query Building
example--
const query = `SELECT * FROM ${tableName}`;



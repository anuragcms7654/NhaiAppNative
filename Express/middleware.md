* Middleware is a function that runs between the request and the response.
app.use((req, res, next) => {
  console.log("Middleware executed");
  next(); // passes control to next middleware
});

-- If you don’t call next() → request will hang.

&&&& Types Of middleware &&&&

1️⃣ Application-Level Middleware

app.use((req, res, next) => {
  console.log("Runs for every request");
  next();
});

app.get('/user', (req, res, next) => {
  console.log("User route middleware");
  next();
});

2️⃣ Router-Level Middleware
Attached to express.Router().

const router = express.Router();

router.use((req, res, next) => {
  console.log("Router middleware");
  next();
});

router.get('/profile', (req, res) => {
  res.send("Profile page");
});

app.use('/user', router);

3️⃣ Built-in Middleware

Express provides some middleware:

app.use(express.json());       // Parse JSON body
app.use(express.urlencoded()); // Parse form data
app.use(express.static('public')); // Serve static files


4️⃣ Third-Party Middleware

Installed from npm.

Examples:

const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

5️⃣ Error-Handling Middleware (Special Type)

Has 4 parameters:

(err, req, res, next)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
});


✅ Middleware Chaining

Multiple middleware in a single route:

app.get(
  '/profile',
  authenticate,
  authorize,
  validateInput,
  controller
);
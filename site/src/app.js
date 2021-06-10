app.use(auth);

const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'));

//path estatico PUBLIC
const path = require("path");
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

//configuracion de plantillas ejs
const viewsPath = path.resolve(__dirname, "./views");
app.set("view engine", "ejs");
app.set("views", viewsPath);


//seteamos el puerto y levantamos el server
const port = 3000;

app.listen(port, () => {
  console.log(chalk.blue("APLICACION ESCUCHANDO!!!! "));
  console.log(chalk.blue("Link directo... http://localhost:" + port));
});

/*-------------------DIRECCION PRINCIPAL PAGINAS-----------*/

//ruta main
const moviesRouter = require(path.resolve(__dirname, "./routes/moviesRouter"));
app.use("/", moviesRouter);
app.use("/movies", moviesRouter);

//ruta users
const usersRouter = require(path.resolve(__dirname, "./routes/usersRouter"));
app.use("/users", usersRouter);

//ruta error404
const error404 = require('./middlewares/notFoundMiddleware');
app.use(error404);






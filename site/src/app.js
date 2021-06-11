//darle color a los console log de consola
const chalk = require("chalk");

//importamos express y lo asignamos como una funcion para poder hacer uso de todos sus metodos
const express = require("express");
const app = express();


//Usamos Sessions
const session = require('express-session');
app.use(session({
  secret: 'Alexis',
  resave: false, // no vuelve a guardar si no hay cambios
  saveUninitialized: true, // guarda sesiones aunque todavia no haya datos
}));

const auth = require('./middlewares/auth');
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
  console.log(chalk.blue("Link directo... http://localhost:" + port+'/home'));
});

/*-------------------DIRECCION PRINCIPAL PAGINAS-----------*/

//ruta main
const moviesRouter = require(path.resolve(__dirname, "./routes/moviesRouter"));
app.use("/home", moviesRouter);
app.use("/movies", moviesRouter);

//ruta users
const usersRouter = require(path.resolve(__dirname, "./routes/usersRouter"));
app.use("/users", usersRouter);

//ruta error404
const error404 = require('./middlewares/notFoundMiddleware');
app.use(error404);







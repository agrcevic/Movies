Challenge DH Final

Consignas:

1.- HOME PAGE
Debe mostrar el listado de películas de la base de datos.
2.- DETALLE DE PELICULAS
Cada una de las películas tiene que ser un link al detalle completo de la misma.
3.- CRUD DE PELÍCULAS
Debe cumplir con las funciones del CRUD: agregar una nueva película, modificarla y eliminarla.
4.- REGISTRO Y LOGIN 
Permite registrar a un usuario regular y otro administrador para que puedan loguearse y mantenerse logueados durante toda la navegación. 
5.- IDENTIFICANDO AL ADMINISTRADOR
Debe contar con los middlewares y ajustes necesarios para que únicamente el rol de administrador pueda utilizar las funcionalidades del CRUD.

Para la instalación:

a) Tener node instalado de forma global.

b) npm init. (configurar el proyecto con los datos correspondientes)

c) Instalar los siguientes modulos: npm install bcryptjs express (modulos necesarios para manejar todo el servidor, ruteo, controllers, path, etc), express-session (para manejar sesiones de usuarios) y method-override (para manejar metodos put y delete) mysql2 sequelize.
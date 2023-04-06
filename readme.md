# Tarea 2 - BackEnd

## Crear un nuevo proyecto con express-generator y migrar el código de la clase pasada siguiendo las siguientes pautas::

- [x] En routers/users poner la ruta que recibe apellido y nombre para generar un saludo, poner el callback en un archivo controller.

- [x] En routers/maths poner todas las rutas relacionadas con suma, division y corroborar si el numero es par, poner el callback en un archivo controller.

- [x] En routers/list poner la ruta que crea el listado de las compras, poner el callback en un archivo controller.

- [x] Crear una ruta con el metodo HTTP POST que haga lo siguiente: devolver un objeto JSON que contenga lo siguiente:

> El nombre que reciba se debe enviar por _req.body.nombre_
>
> ```
> {
>     "nombre": "ACÁ VA EL NOMBRE",
>
>     "status":"success"
>   }
> ```

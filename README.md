# Proyecto Backend – Express + MongoDB + JWT

Este proyecto es un **trabajo práctico del módulo Backend**.  
La idea fue armar un **servidor backend simple** usando Express y MongoDB, que tenga **registro, login y rutas protegidas con JWT**.
  
Las pruebas se hacen usando **Postman o Thunder Client**.


## Tecnologías usadas

- Node.js  
- Express  
- MongoDB (Atlas)  
- Mongoose  
- JSON Web Token (JWT)  
- bcrypt  


## Instalación y ejecución

1. Clonar o descargar este repositorio  
2. Ejecutar el comando:
   npm install
3. Crear un archivo `.env` tomando como base el archivo `.env.example`  
4. Ejecutar el servidor con:
   npm run dev

El servidor se levanta por defecto en el puerto configurado en el `.env`.

## Endpoints disponibles

### Autenticación (públicos)

- **POST** `/api/auth/register`  
  Permite registrar un usuario y devuelve un token JWT.

- **POST** `/api/auth/login`  
  Valida las credenciales y devuelve un token JWT.

### Tareas (rutas protegidas)

Estas rutas requieren enviar un token válido.

- **GET** `/api/tareas`  
  Devuelve las tareas del usuario autenticado.

- **POST** `/api/tareas`  
  Crea una nueva tarea asociada al usuario.

- **PATCH** `/api/tareas/:id`  
  Actualiza una tarea si pertenece al usuario.

- **DELETE** `/api/tareas/:id`  
  Elimina una tarea si pertenece al usuario.

## Autenticación

Para acceder a las rutas protegidas, el token debe enviarse en el header:

```
Authorization: Bearer TU_TOKEN_ACA
```

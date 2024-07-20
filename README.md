# Test Full stack React+Node

Este proyecto proporciona una Web con Reac y una api con  Node para gestionar usuarios. Permite registrar, iniciar sesión, actualizar, obtener y eliminar usuarios.

## Rutas de la UI

- **Home:** `http://localhost:3000`
- **Login:** `http://localhost:3000/login`
- **Register:** `http://localhost:3000/register`

## Endpoints

- **Registrar Usuario:** 
  - **Método:** `POST`
  - **URL:** `/api/v1/users/register`
  - **Descripción:** Crea un nuevo usuario.
  - **Cuerpo de la Solicitud:**
    ```json
    {
      "username": "exampleUser",
      "email": "user@example.com",
      "password": "yourpassword"
    }
    ```

- **Iniciar Sesión:** 
  - **Método:** `POST`
  - **URL:** `/api/v1/users/login`
  - **Descripción:** Inicia sesión con un email o nombre de usuario.
  - **Cuerpo de la Solicitud:**
    ```json
    {
      "email": "user@example.com", // O "username": "exampleUser"
      "password": "yourpassword"
    }
    ```

- **Obtener Todos los Usuarios:** 
  - **Método:** `GET`
  - **URL:** `/api/v1/users`
  - **Descripción:** Obtiene una lista de todos los usuarios con paginación.
  - **Parámetros de Consulta:**
    - `page` (opcional): Número de página.
    - `count` (opcional): Número de usuarios por página.

- **Obtener Usuario por ID:** 
  - **Método:** `GET`
  - **URL:** `/api/v1/users/:id`
  - **Descripción:** Obtiene un usuario específico por su ID.

- **Actualizar Usuario:** 
  - **Método:** `PUT`
  - **URL:** `/api/v1/users/:id`
  - **Descripción:** Actualiza la información de un usuario específico.
  - **Cuerpo de la Solicitud:**
    ```json
    {
      "username": "newUsername",
      "email": "newEmail@example.com",
      "password": "newpassword"  // Opcional
    }
    ```

- **Eliminar Usuario:** 
  - **Método:** `DELETE`
  - **URL:** `/api/v1/users/:id`
  - **Descripción:** Elimina un usuario específico por su ID.

## Configuración

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Configura la base de datos en el archivo `config/db.js`.
4. Ejecuta la aplicación con `npm start`. para correr la ui en la carpeta client
5. Ejecuta la aplicación con `npm run dev`. para correr la api en la carpeta server

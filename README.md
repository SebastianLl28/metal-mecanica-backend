# Backend Metal Mecanica

El backend de la aplicación "Gestión de Pedidos Metalmecánica Dueñas" se ha desarrollado para proporcionar una solución centralizada y eficiente en la gestión de pedidos para una empresa especializada en la fabricación de piezas para automóviles.

## Características Principales

Node.js y Express: Utilizados para construir una API RESTful que gestiona la lógica del backend.

Sequelize ORM: Facilita la interacción con la base de datos MySQL, permitiendo una gestión eficiente de los datos relacionados con los pedidos.

Autenticación JWT: Proporciona un sistema seguro para la autenticación de usuarios y la gestión de sesiones.

## Variables de Entorno {#variables-de-entorno}

Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno a su archivo `.env` . De igual manera puede tomar de ejemplo el archivo `.env.example`

`PORT`: Puerto en el que se ejecutará el servidor.

`DB_NAME`: Nombre de la base de datos MySQL.

`DB_USER`: Usuario de la base de datos MySQL.

`DB_PASSWORD`: Contraseña de la base de datos MySQL.

`SECRET_KEY`: Clave secreta para la generación de tokens JWT.

## Instalación

Clona el código fuente a su directorio local

```bash
  git clone https://github.com/SebastianLl28/metal-mecanica-backend.git
```

Ingresa a la carpeta clonada y desacarga las dependencias con npm

```bash
  cd metal-mecanica-backend
  npm install
```

Configura las variables de entorno creando un archivo .env y colocando las variables mencionadas en la sección de [Variables de Entorno](#variables-de-entorno).

Crea una base de datos MySQL según el nombre especificado en la variable `DB_NAME` y ejecuta el seeder para crear la estructura de la base de datos

```bash
  npm run import:db
```

Por ultimo ejecuta el programa con el siguiente comando

```bash
  npm run dev
```

## Authors

- [@SebastianLl28](https://github.com/SebastianLl28)
- [@Betsaly](https://github.com/Betsaly)

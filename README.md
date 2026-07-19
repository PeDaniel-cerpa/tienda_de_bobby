# Tienda de Bobby

Este es un proyecto enfocado en construir una solución de gestión de inventario y ventas para una tienda de barrio. Está desarrollado utilizando **TypeScript** y **Node.js**, aplicando Programación Orientada a Objetos (**POO**) y los principios **SOLID**.

---

## Características

- **Ingresar clientes:** Registro de nuevos clientes en el sistema.
- **Ingresar productos:** Agregar nuevos productos al inventario (stock).
- **Consultar lista de clientes:** Visualizar los clientes registrados.
- **Consultar productos en stock:** Control y revisión del inventario disponible.
- **Realizar orden de venta:** Gestión completa del proceso de ventas.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu equipo:

- **Node.js**: Versión `24.12` o superior. [Clik aqui para ir a la pagina oficial de node.js](https://nodejs.org/es/download)
- **npm** (incluido con Node).

---

## Instalación y Configuración

Sigue estos pasos para clonar el repositorio e instalar las dependencias necesarias:

## Clonar el repositorio e instalar dependencias

```bash
git clone https://github.com/PeDaniel-cerpa/tienda_de_bobby.git && cd tienda_de_bobby && npm install
```

## Dependencias del Proyecto

Todas se instalan automáticamente al ejecutar `npm install`.

### Dependencias de Producción
*Estas dependencias se quedan en el proyecto final porque la aplicación las necesita directamente para ejecutarse y funcionar.*

*   **`dotenv`** — Maneja las variables de entorno para las configuraciones seguras.
*   **`node-localstorage`** — Simula el almacenamiento `localStorage` para guardar datos desde la terminal.
*   **`scanf`** — Captura lo que el usuario escribe en la consola.
*   **`ts-node`** — Ejecuta archivos TypeScript en Node sin compilar a mano en desarrollo.
*   **`undici-types`** — Tipos internos para el motor de peticiones de Node.
*   **`util`** — Herramientas nativas de Node para dar soporte a funciones del código.

### Dependencias de Desarrollo
*Estas herramientas solo sirven para escribir código, automatizar tareas, compilar de TypeScript a JavaScript y empaquetar la app. No se incluyen en el producto final.*

*   **`typescript`** — El compilador oficial de TypeScript.
*   **`ts-loader`** — Conecta TypeScript con Webpack para que trabajen juntos.
*   **`webpack`** — Empaqueta todo tu código y módulos en archivos finales listos para producción.
*   **`webpack-cli`** — Permite ejecutar comandos de Webpack desde la terminal.
*   **`webpack-dev-server`** — Levanta el servidor local rápido para probar la versión Web.
*   **`html-webpack-plugin`** — Genera el archivo `index.html` e inserta los scripts automáticamente.
*   **`string-replace-loader`** — Reemplaza textos o configuraciones en los archivos mientras se compilan.
*   **`rimraf`** — Limpia y borra la carpeta `dist/` antes de cada nuevo build.
*   **`@types/node`** — Autocompletado y tipado de Node.js en TypeScript.
*   **`@types/node-localstorage`** — Autocompletado y tipado para la librería de almacenamiento.

## Variables de entorno

**Este proyecto usa variables de entorno asi que asegurate de configurar estas para su correcto funcionamiento, consulta estas en el archivo [.env.example](./.env.example), ¡la aplicacion espera un archivo llamado `.env.production` en la raiz del proyecto asegurate de configurarlo!**

## Comandos para compilar

**Para realizar la compilacion completa de la tienda**

```bash
npm run build
```

o puedes compilar las versiones individuales con los siguientes comandos

**para compilar la version web**

```bash
npm run build:web
```

**para compilar la version en terminal**

```bash
npm run build:terminal
```

## Ejecucion de la app

Una vez realizado el paso anterior puedes ejecutar la tienda con los siguientes comandos:

**Version en Terminal**

para ejecutar la version en **terminal** ejecuta:

```bash
npm run go:terminal
```

**Version Web**

para ejecutar la version **web** ejecuta:

```bash
npm run go:web
```
### Estructura del protecto
```bash
tienda_de_bobby/
├── src/                         # Código fuente principal
│   ├── app/                     # Entradas de la aplicación
│   │   ├── app.ts               # Entrada terminal
│   │   ├── appLocalStorage.ts   # Entrada terminal con node-localstorage
│   │   └── appWeb.ts            # Entrada web
│   │
│   ├── assets/                  # Recursos estáticos
│   │   └── images/              # Imágenes usadas en la app
│   │       ├── addClient.png
│   │       ├── menuAppTerminal.png
│   │       └── webPage.png
│   │
│   ├── class/                   # Servicios y lógica de negocio
│   │   ├── Aplication.ts
│   │   ├── aplicationBuilderService.ts
│   │   ├── inLocalStorageService.ts
│   │   ├── inMemoryServices.ts
│   │   ├── view.ts
│   │   └── viewWeb.ts
│   │
│   ├── interfaces/              # Interfaces y CRUD
│   │   ├── CRUD.ts
│   │   ├── CRUDF.ts
│   │   ├── aplicationBuilder.ts
│   │   ├── inMemoryServiceClient.ts
│   │   ├── inMemoryServicesProduct.ts
│   │   └── inMemoryServicesSell.ts
│   │
│   ├── types/                   # Modelos tipados
│   │   ├── clientModel.ts
│   │   ├── productModel.ts
│   │   └── sellModel.ts
│   │
│   ├── index.html               # Plantilla HTML para la versión web
│   └── index.ts                 # Punto de entrada común
│
├── dist/                        # Carpeta de salida de builds (generada)
│   ├── builds/
│   │   ├── browser/             # Compilación para navegador
│   │   │   └── build.browser.js
│   │   └── terminal/            # Compilaciones para terminal
│   │       ├── build.terminal.js
│   │       └── build.terminal.local.js
│
├── .editorconfig                # Configuración de estilo de código
├── .env.example                # archivo ejemplo de las variables de entorno 
├── .gitignore                   # Archivos ignorados por Git
├── README.md                    # Documentación del proyecto
├── package.json                 # Dependencias y scripts
├── package-lock.json            # Bloqueo de dependencias
├── tsconfig.json                # Configuración de TypeScript
└── webpack.config.js            # Configuración de Webpack



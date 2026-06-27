#  Tienda de Bobby

Este es un proyecto enfocado en construir una solución de gestión de inventario y ventas para una tienda de barrio. Está desarrollado utilizando **TypeScript** y **Node.js**, aplicando Programación Orientada a Objetos (**POO**) y los principios **SOLID**.

---

##  Características

* **Ingresar clientes:** Registro de nuevos clientes en el sistema.
* **Ingresar productos:** Agregar nuevos productos al inventario (stock).
* **Consultar lista de clientes:** Visualizar los clientes registrados.
* **Consultar productos en stock:** Control y revisión del inventario disponible.
* **Realizar orden de venta:** Gestión completa del proceso de ventas.

---

##  Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu equipo:

* **Node.js**: Versión `24.12` o superior. [Clik aqui para ir a la pagina oficial de node.js](https://nodejs.org/es/download) 
* **npm** (incluido con Node).

---

##  Instalación y Configuración

Sigue estos pasos para clonar el repositorio e instalar las dependencias necesarias:

## 1. Clonar el repositorio e instalar dependencias
```bash
  git clone https://github.com/PeDaniel-cerpa/tienda_de_bobby.git && cd tienda_de_bobby && npm install
```
## Dependencias del Proyecto

Todas se instalan automáticamente al ejecutar `npm install`.

**Dependencias de producción** (necesarias para ejecutar la app):
- `scanf` — permite leer datos ingresados por el usuario en la versión de terminal.
- `undici-types` — tipos usados internamente por Node.js.

**Dependencias de desarrollo** (necesarias solo para compilar y construir el proyecto):
- `typescript` y `ts-loader` — compilan el código TypeScript.
- `webpack`, `webpack-cli` y `webpack-dev-server` — empaquetan y sirven la aplicación.
- `html-webpack-plugin` — genera el `index.html` de la versión web.
- `rimraf` — limpia la carpeta `dist/` antes de un nuevo build.
- `@types/node` — tipos de Node.js para TypeScript.


##  Comandos para compilar

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

para ejecutar la version  **web** ejecuta:

```bash
npm run go:web
```






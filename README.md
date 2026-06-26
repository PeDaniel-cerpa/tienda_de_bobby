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
* **npm** (incluido con Node) o **yarn** como gestor de dependencias.

---

##  Instalación y Configuración

Sigue estos pasos para clonar el repositorio e instalar las dependencias necesarias:

## 1. Clonar el repositorio
```bash
  git clone https://github.com/PeDaniel-cerpa/tienda_de_bobby.git
```
 ## 2. Instalar dependencias

**Instalar las dependencias requeridas**
   
```bash
npm install
```

**Instalar TypeScript**

```bash
npm install typescript --save-dev
```

**Instalar webpack**

```bash
npm install --save-dev webpack webpack-cli
```

**instalar HtmlWebpackPlugin**

```bash
npm install --save-dev html-webpack-plugin
```

**Instalar scanf (requerido para la version en consola)**

```bash
npm install scanf
```

##  Comandos para compilar

**Ya que el proyecto esta construido usando Ts debe ser compilado usando el siguiente comando:**

```bash
npx tsc
```

dentro del directorio `src` podras observar los archivos transpilados a Js, los cuales son necesarios para realizar las respectivas builds de la tienda de Bobby

**para compilar la version web**

```bash
npm run build:web   
```
**para compilar la version en terminal**

```bash
npm run build:terminal
```

## Ejecucion de la app

Una vez realizado el paso anterior podras observar una directorio con el nombre de `dist/builds` en el cual encontraras las respectibas builds de la app.

**Version en Terminal**

para ejecutar la version en **terminal** dentro de la carpeta `terminal` ubicada en `dist/builds` ejecuta:


```bash
node build.terminal.js
```

**Version Web**

para ejecutar la version  **web** dentro de la carpeta `browser` ubicada en `dist/builds` **Abre el `index.html`** para cargar la app en el navegador de tu preferencia.






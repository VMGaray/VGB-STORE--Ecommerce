# 🛍️ VBG Store – Proyecto Final Frontend

**VBG Store** es una tienda online desarrollada como proyecto final del curso de desarrollo frontend.  
El proyecto está construido utilizando tecnologías modernas como **Next.js (App Router)**, **TypeScript** y **Tailwind CSS**, y demuestra el uso de estado global, manejo de rutas, autenticación y persistencia de datos.

---

## 🚀 Tecnologías utilizadas

- Next.js 13+ (App Router)
- React + TypeScript
- Tailwind CSS para estilos
- Context API para manejo global de estado (carrito y usuario)
- localStorage y cookies para persistencia de datos
- Middleware de Next.js para protección de rutas privadas

---

## 🗂️ Estructura del proyecto

La organización de carpetas del proyecto es la siguiente:
📁 app
├── Contiene todas las rutas de la aplicación (home, login, dashboard, etc.)

📁 components
├── Componentes reutilizables como Card, Navbar, Footer, etc.

📁 context
├── Manejo de estado global para usuario (AuthContext) y carrito (CartContext)

📁 helpers
├── Funciones utilitarias para interactuar con la API (productos, órdenes)

📁 interfaces
├── Definiciones de tipos TypeScript usados en toda la app

📁 public
├── Imágenes, íconos, etc.

📄 middleware.ts
├── Middleware de Next.js para proteger rutas privadas

📄 tailwind.config.js
├── Configuración personalizada de estilos de Tailwind CSS


---

## ✅ Funcionalidades principales

- **Home:** muestra productos destacados
- **Vista de producto:** detalle de cada producto por ID
- **Carrito:** agregar, eliminar y ver total (persistente con localStorage)
- **Login:** manejo de sesión con cookies y localStorage
- **Protección de rutas:** redirección a login desde rutas privadas usando `middleware.ts`
- **Compra:** envío de orden al backend y limpieza del carrito
- **Diseño responsive y limpio con Tailwind CSS**

---

## 🔐 Seguridad y navegación

Se implementa protección de rutas utilizando `middleware.ts`.  
Las rutas como `/dashboard`, `/cart`, y otras privadas redirigen automáticamente a `/login` si no hay sesión activa.  
El estado del usuario se gestiona desde `AuthContext`, con persistencia tanto en **cookies** como en **localStorage**.

---

## 🛒 Carrito de compras

El carrito es gestionado desde `CartContext`, lo que permite agregar o eliminar productos desde cualquier parte de la app.  
La información del carrito se guarda en `localStorage` para que se mantenga aún después de recargar la página.

---

## 🎯 Aprendizajes y objetivos cumplidos

- Uso profesional de Next.js App Router
- Componentes reutilizables y diseño responsivo con Tailwind CSS
- Context API + persistencia de datos
- Seguridad y control de navegación con middleware
- Flujo de compra completo e integrado al backend

---

## 👩‍💻 Autora

**Victoria Garay** – Desarrolladora frontend en formación  
Proyecto final del curso en **Henry**

---



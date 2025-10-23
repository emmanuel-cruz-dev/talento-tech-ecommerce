# 🛍️ ShopZone

**Pre-entrega - Curso React + Bootstrap TALENTO TECH - 2025**

👨‍💻 **Autor:** Emmanuel Cruz  
🎓 **Comisión:** 25235

ShopZone es una pre-entrega del curso de React + Bootstrap, desarrollada para poner en práctica el manejo de componentes, props, hooks y estados globales. Incluye funcionalidades iniciales de un e-commerce, como iniciar sesión, listado de productos, detalle individual, carrito y navegar entre distintas secciones de manera segura y moderna. Sirvió como base para el proyecto final del curso.  
Se integró el consumo de una API externa utilizando **Axios** y **TanStack Query** para el manejo eficiente de datos y estados de carga.

---

## 🚀 Demo en vivo

👉 [**Visita la página aquí**](https://shop-zone-ecommerce.vercel.app/)

---

## 🧰 Tecnologías utilizadas

* **React**: Framework de JavaScript para construir interfaces de usuario.
* **Bootstrap**: Framework de CSS para construir interfaces de usuario.
* **React Router**: Gestión de rutas y navegación.
* **React Hooks**: Utilidades para crear componentes reutilizables.
* **Context API**: Utilidad para compartir datos entre componentes.
* **TanStack Query (React Query)**: Manejo de datos asíncronos, caché y sincronización de peticiones API.
* **Axios**: Cliente HTTP para consumir la API externa de productos.
* **NProgress**: Barra de progreso superior para mejorar la experiencia de navegación.
* **Lucide-React**: Iconos vectoriales y colores.
* **Swiper**: Librería para la creación de carrusels.

---

## ✨ Características principales

* **Login personalizado:** El usuario puede iniciar sesión ingresando su nombre, que se guarda y persiste en el navegador.
* **Perfil de usuario:** El nombre del usuario se muestra en la sección de perfil y en el carrito.
* **Logout:** El usuario puede cerrar sesión fácilmente.
* **Listado de productos:** Visualiza productos destacados y por categorías.
* **Carrito de compras:** Agrega, elimina, suma/resta cantidad y vacía productos.
* **Integración con API:** Los productos se obtienen dinámicamente desde una API externa.
* **Autenticación y rutas protegidas:** Acceso seguro a secciones restringidas.
* **Rutas dinámicas:** Detalles de producto accesibles mediante rutas con parámetros.
* **Diseño responsivo:** Interfaz moderna y adaptable con React y Bootstrap.
* **Estados de carga y error:** Skeletons y mensajes claros para mejorar la experiencia de usuario.
* **Navegación intuitiva:** Navbar con enlaces visibles y estado de autenticación.

---

## 🗂️ Estructura del proyecto

📁 **src/**

* `components/ui/` → Componentes reutilizables de UI (productos, carrito, testimonios, etc).
* `pages/` → Páginas principales (Home, Products, Product, Cart, Profile, Login, NotFound).
* `context/` → Contextos globales para autenticación y carrito.
* `services/` → Servicios para conexión con la API.
* `routes/` → Definición de rutas y rutas protegidas.
* `hooks/` → Hooks personalizados para lógica de negocio.

---

## ⚙️ Instalación y uso

1. Clona el repositorio.
2. Instala dependencias:

   ```powershell
   npm install
   ```
3. Configura la variable de entorno `VITE_API_URL` en un archivo `.env`. Puedes usar el archivo `.env.example` como referencia:

   ```powershell
   cp .env.example .env
   ```
4. Inicia el proyecto:

   ```powershell
   npm run dev
   ```

---

## ✅ Requerimientos cumplidos

* [x] Login personalizado y persistente con nombre de usuario.
* [x] Carrito de compras funcional con React y Bootstrap.
* [x] Integración y consumo de API externa.
* [x] Manejo de estado, carga y errores.
* [x] Rutas dinámicas y protegidas.
* [x] Layout y navegación moderna y responsiva.

---

## 🌐 API Utilizada

Este proyecto utiliza [**FakeStore-API**](https://fakestoreapi.com/) para obtener datos de productos 🛍️.

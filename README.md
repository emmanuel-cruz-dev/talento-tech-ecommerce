# ShopZone

ShopZone es un e-commerce desarrollado como proyecto final para el curso de React + Bootstrap. Permite explorar productos, agregarlos a un carrito, gestionar compras y navegar entre distintas secciones de manera segura y moderna.

## Tecnologías utilizadas

- **React**: Framework de JavaScript para construir interfaces de usuario.
- **Bootstrap**: Framework de CSS para construir interfaces de usuario.
- **React Router**: Gestión de rutas y navegación.
- **React Hooks**: Utilidades para crear componentes reutilizables.
- **Context API**: Utilidad para compartir datos entre componentes.
- **Lucide-React**: Iconos y iconos de funcionalidad.
- **Swiper**: Librería para la creación de carrusels.

## Características principales

- **Listado de productos:** Visualiza productos destacados y por categorías.
- **Carrito de compras:** Agrega, elimina, suma/resta cantidad y vacía productos. El estado se mantiene globalmente.
- **Integración con API:** Los productos se obtienen dinámicamente desde una API externa.
- **Autenticación y rutas protegidas:** Acceso seguro a secciones como el carrito y el perfil de usuario.
- **Rutas dinámicas:** Detalles de producto accesibles mediante rutas con parámetros.
- **Diseño responsivo:** Interfaz moderna y adaptable, construida con React y Bootstrap.
- **Manejo de estados de carga y error:** Skeletons y mensajes claros para mejorar la experiencia de usuario.
- **Navegación intuitiva:** Navbar con enlaces a todas las secciones y estado de autenticación visible.

## Estructura del proyecto

- `src/components/ui/`: Componentes reutilizables de UI (productos, carrito, testimonios, etc).
- `src/pages/`: Páginas principales (Home, Products, Product, Cart, Profile, Login, NotFound).
- `src/context/`: Contextos globales para autenticación y carrito.
- `src/services/`: Servicios para conexión con la API.
- `src/routes/`: Definición de rutas y rutas protegidas.
- `src/hooks/`: Hooks personalizados para lógica de negocio.

## Instalación y uso

1. Clona el repositorio.
2. Instala dependencias:
   ```powershell
   npm install
   ```
3. Configura la variable de entorno `VITE_API_URL` en un archivo `.env`.
4. Inicia el proyecto:
   ```powershell
   npm run dev
   ```

## Requerimientos cumplidos

- [x] Carrito de compras funcional con React y Bootstrap.
- [x] Integración y consumo de API externa.
- [x] Manejo de estado, carga y errores.
- [x] Rutas dinámicas y protegidas.
- [x] Layout y navegación moderna y responsiva.

---

Desarrollado por Emmanuel Cruz para Talento Tech.

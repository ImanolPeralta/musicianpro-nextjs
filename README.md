# 🎸 MusicianPro

**MusicianPro** es un e-commerce desarrollado con **Next.js** y **Firebase**, enfocado en la venta de instrumentos musicales. Ofrece una experiencia completa tanto para los usuarios como para los administradores, con navegación intuitiva, carrito de compras, autenticación y panel de administración para gestión de productos.

---

## 🧑‍💻 Tecnologías utilizadas

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react-icons.github.io/react-icons/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

---

## ✨ Funcionalidades principales

- 🎯 Vista de productos por **categoría** y **subcategoría**
- 🔍 Detalle individual de producto
- 🛒 Carrito de compras persistente con control de stock
- 🔐 Registro e inicio de sesión con Firebase Auth
- 📦 Generación de órdenes de compra y actualización de stock
- 🧑‍💼 Panel de administración (protegido):
  - Crear, editar y eliminar productos
  - Subida de imágenes al Firebase Storage
  - Actualización en tiempo real con Firestore

---

## 📸 Capturas

### 🏠 Página de inicio

![Página de inicio](./public/captura1.jpeg)

### 🛒 Carrito

![Carrito de compras](./public/captura3.jpeg)

### 🔍 Detalles

![Detalle del producto](./public/captura2.jpeg)

### 🧾 Formulario de compra

![Finalizar compra](./public/captura4.jpeg)

### 🔐 Panel de administración

![Panel de administración](./public/captura6.jpeg)

## 🚀 Instalación local

1. Cloná el repositorio:

```bash
git clone https://github.com/ImanolPeralta/musicianpro-nextjs.git
```

2. Accedé al directorio del proyecto:

```bash
cd musicianpro-nextjs
```

3. Instalá las dependencias:

```bash
npm install
```

4. Configurá las variables de entorno en un archivo `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=TU_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=TU_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=TU_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=TU_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=TU_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=TU_APP_ID
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

5. Ejecutá la aplicación:

```bash
npm run dev
```

---

## 📁 Estructura de carpetas

```
┣ 📂[categoria]
┃ ┗ 📂[subcategoria]
┃   ┣ 📜loading.js
┃   ┗ 📜page.js
┣ 📂admin
┃ ┣ 📜layout.js
┃ ┗ 📜page.js
┣ 📂api
┃ ┗ 📂productos
┃   ┣ 📂[id]
┃   ┃ ┗ 📜route.js
┃   ┗ 📜route.js
┣ 📂cart
┃ ┗ 📜page.js
┣ 📂checkout
┃ ┗ 📜page.js
┣ 📂components
┃ ┣ 📂products
┃ ┃ ┣ 📜CategoriesMenu.js
┃ ┃ ┣ 📜ProductCard.js
┃ ┃ ┣ 📜ProductDetail.js
┃ ┃ ┣ 📜ProductList.js
┃ ┃ ┗ 📜QtySelector.js
┃ ┗ 📂ui
┃   ┣ 📜AutoSlider.js
┃   ┣ 📜BeneficiosSection.js
┃   ┣ 📜Boton.js
┃   ┣ 📜CategoriaDestacada.js
┃   ┣ 📜Counter.js
┃   ┣ 📜Footer.js
┃   ┣ 📜GoBack.js
┃   ┣ 📜ImagenesSlider.js
┃   ┣ 📜InLineLoading.js
┃   ┣ 📜NavBar.js
┃   ┣ 📜Newsletter.js
┃   ┣ 📜OfertasSection.js
┃   ┣ 📜ProductosDestacados.js
┃   ┗ 📜PromoLinks.js
┣ 📂context
┃ ┣ 📜AuthContext.js
┃ ┗ 📜CartContext.js
┣ 📂data
┃ ┗ 📜productos.js
┣ 📂icons
┃ ┣ 📜Logo.js
┃ ┗ 📜logo.svg
┣ 📂login
┃ ┗ 📜page.js
┣ 📂producto
┃ ┗ 📂[id]
┃   ┣ 📜loading.js
┃   ┗ 📜page.js
┣ 📜favicon.ico
┣ 📜globals.css
┣ 📜layout.js
┣ 📜loading.js
┣ 📜not-found.js
┗ 📜page.js

```

---

## 📦 Deploy

El proyecto está desplegado en **Vercel**. Para desplegarlo manualmente:

1. Subí el proyecto a GitHub.
2. Iniciá sesión en [vercel.com](https://vercel.com/).
3. Importá el repositorio desde tu cuenta de GitHub.
4. Configurá las variables de entorno como en `.env.local`.
5. Deploy automático 🚀
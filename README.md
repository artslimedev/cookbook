# 🍽️ Cookbook

Cookbook is a modern, full-stack recipe app built with **Next.js**, **TypeScript**, **Tailwind CSS**, **Supabase**, **PostgreSQL**, and **ShadCN UI**. It’s designed to offer a beautiful, responsive interface for browsing, searching, and saving recipes.

---

## ✨ Project Summary

The goal of Cookbook is to make exploring and managing recipes feel as delightful as cooking itself. Users will be able to:

- 🔐 Sign up and log in securely
- 🧾 Add, view, and edit their own recipes
- 🔍 Search recipes by keyword or category
- 🗂 Organize recipes using custom tags/categories
- 📱 Access the app on web and (eventually) iOS

---

## 🚧 Current Status

Currently a web-only experience, the UI is being styled using Tailwind and ShadCN, and the structure for authentication and recipe storage via Supabase/PostgreSQL is in progress. The roadmap includes an iOS version using either **React Native** or **Flutter**, and eventual integration of **GoLang** for backend logic.

---

## 🔮 Planned Features

- 🔐 User authentication via Supabase
- 🧾 Add and edit personal recipes
- 🔍 Full-text search
- 🏷️ Filter by categories
- 📚 Support for complex recipes (e.g., multi-part ingredients)
- 📱 Native iOS app using React Native or Flutter (TBD)
- 🧠 GoLang backend for optimized APIs (future)

---

## 🧰 Tech Stack & Why It’s Used

Here's a quick breakdown of the technologies used and why they were chosen:

### 🧑‍💻 TypeScript

Strongly typed JavaScript helps catch bugs early, improves developer experience, and makes code easier to maintain as the project grows.

### ⚛️ Next.js

A powerful React framework for building fast, SEO-friendly web apps. Its file-based routing and support for server-side rendering (SSR) make it ideal for scalable content-based applications like a recipe app.

### 🎨 Tailwind CSS

Utility-first CSS framework that speeds up styling and keeps the codebase clean. It enables rapid UI development without constantly writing custom CSS classes.

### 🧩 ShadCN/UI

Beautifully designed components built on top of Tailwind CSS. They help create consistent, polished UI elements without starting from scratch.

### 🐘 PostgreSQL

A robust, relational database system that supports complex queries and relationships — perfect for managing structured recipe data (ingredients, steps, categories, etc.).

### 🧃 Supabase

An open-source Firebase alternative. It handles authentication, database access, and real-time subscriptions out of the box, making it easy to spin up secure full-stack features fast.

---

## 🔍 What Makes This Setup Better

- **Next.js App Router**: Enables modern layout composition, route-based loading, and colocation of logic with components.
- **TypeScript** ensures fewer bugs and stronger collaboration through clearer contracts.
- **Supabase** cuts down on boilerplate for auth, DB, and file storage — and it works seamlessly with PostgreSQL.
- **Tailwind + ShadCN** means pixel-perfect design, fast iteration, and a professional look with minimal custom CSS.

---

## 🧪 Local Development

```bash
# 1. Clone the repo
git clone https://github.com/artslimedev/cookbook.git
cd cookbook

# 2. Install dependencies
npm install

# 3. Create .env.local and add your Supabase credentials
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key

# 4. Run the dev server
npm run dev
```

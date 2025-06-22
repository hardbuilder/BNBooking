# 🏡 BNBooking - Airbnb Clone

A simple full-stack Airbnb-style web app built with **Node.js**, **Express**, **MongoDB**, and **EJS**. Users can view listings, add new ones, edit, and delete them.

---

## 🔧 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB & Mongoose**
* **EJS Templating**
* **Bootstrap 5**
* **Method-Override**
* **Font Awesome**

---

## 📁 Project Structure

```
AIRBNB/
├── init/
│   ├── data.js
│   └── index.js
├── models/
│   └── listing.js
├── public/
│   └── css/
│       └── style.css
├── views/
│   ├── includes/ (navbar, footer)
│   ├── layouts/ (boilerplate)
│   └── listings/ (home, index, show, new, edit)
├── app.js
├── package.json
└── .gitignore
```

---

## 🚀 Features

* 📝 Add/Edit/Delete Listings
* 🌐 Show individual listing details
* 📍 Location, price, image, and country support
* 🧼 Clean UI with Bootstrap
* ⛔ Protected delete/edit with method override

---

## 🛠️ Setup & Run Locally

1. **Clone the repo**

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file:

```env
MONGO_URL=mongodb://127.0.0.1:27017/bnbooking
```

4. **Start the server**

```bash
node app.js
```

Then visit: `http://localhost:3000/`

---

## 🐳 Deployment Ready

Want to deploy?

* **Frontend**: Vercel (if extracted separately)
* **Full app**: Use [Render](https://render.com) or [Railway](https://railway.app)

---

## 📸 Screenshots

*Add a few screenshots of homepage, listing show page, etc.*

---

## 💡 Credits

Made with ❤️ by **OM**
GitHub: [@hardbuilder](https://github.com/hardbuilder)

---

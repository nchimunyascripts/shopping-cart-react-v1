# **🛒 Shopping Cart with React, Tailwind CSS & Context API**

A modern, responsive shopping cart built with **React**, **Tailwind CSS** for styling, and **React Context API** for state management.

🔗 **[Live Demo](https://shopping-cart-react-v1.vercel.app/)** (Add your demo link here)

---

## **✨ Features**

- **📦 Product Listing** – Display products with images, prices, and descriptions.
- **🛍️ Add to Cart** – Seamlessly add/remove items from the cart.
- **🧮 Cart Management** – Adjust quantities, calculate totals, and clear the cart.
- **💳 Checkout Preview** – Review items before proceeding to checkout.
- **📱 Fully Responsive** – Works on mobile, tablet, and desktop.
- **⚡ State Management** – Uses **React Context API** for efficient cart state handling.

---

## **🛠️ Technologies Used**

| **Tech**              | **Purpose**                 |
| --------------------- | --------------------------- |
| **React**             | Frontend framework          |
| **Tailwind CSS**      | Utility-first styling       |
| **React Context API** | State management            |
| **React Icons**       | For cart & UI icons         |
| **Vite**              | Fast development build tool |

---

## **🚀 Installation & Setup**

### **1. Clone the Repository**

```bash
git clone https://github.com/nchimunyascripts/shopping-cart-react-v1.git
cd shopping-cart-react
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Run the Development Server**

```bash
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) to view the app.

---

## **📂 Project Structure**

```
shopping-cart-react/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Cart.jsx         # Cart logic & display
│   │   ├── Product.jsx      # Single product card
│   │   └── Navbar.jsx       # Navigation bar
│   │
│   ├── context/             # State management
│   │   └── CartContext.jsx  # Cart context provider
│   │
│   ├── App.jsx              # Main app entry
│   └── main.jsx            # React root render
│
├── public/                  # Static assets
├── package.json             # Dependencies
└── README.md                # Project documentation
```

---

## **🔧 Customization**

- **Add More Products**: Modify `products.js` (or fetch from an API).
- **Change Styling**: Edit Tailwind classes in components.
- **Extend Features**: Add user auth, payment integration, or a backend.

---

## **📜 License**

This project is open-source under the **MIT License**.

---

## **💬 Questions or Feedback?**

Reach out or open an issue on GitHub.

🚀 **Happy Shopping!** 🚀

---

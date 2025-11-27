# 🛒 SnapKart – Full-Stack Real-Time Grocery Platform  
> A high-performance **Next.js 16** application engineered as a Blinkit-style real-time delivery ecosystem — featuring multi-role architecture, event-driven updates, AI-powered communication and production-ready data models.

---

## ⚙️ Tech Stack  
**Next.js 16 • TypeScript • MongoDB/Mongoose • NextAuth • Socket.io • Leaflet Maps • Gemini API • Framer Motion • Tailwind • Vercel**

---

## ✨ Platform Highlights  
- 🛍️ **End-to-End Grocery Workflow** — discovery ➜ cart ➜ checkout ➜ rider assignment ➜ tracking  
- 🧩 **Modular Architecture** — clear separation for user, admin and delivery agents  
- ⚡ **Event-Driven Realtime Layer** using Socket.io (order lifecycle, rider updates, ETA changes)  
- 🔐 **Auth Boundaries** — protected routes, role-scoped dashboards & secure sessions (NextAuth JWT)  
- 🌐 **Live Map Infrastructure** with Leaflet + server updates for rider location streaming  
- 🤖 **AI Conversation Layer** — Gemini-powered chat between customer ↔ delivery partner  
- 📦 **Inventory + Product Engine** — variant support, pricing rules, and category segmentation  
- 🧾 **Order Kernel** — status pipeline (PLACED → PACKED → OUT_FOR_DELIVERY → DELIVERED)  
- 📊 **Admin Analytics** — order volume, active riders, product insights  
- 🛵 **Delivery Companion App** — task queue, route preview, map pings  
- 🎞️ **Cinematic UX** — Framer Motion transitions, animated modals, adaptive micro-interactions  
- 🛡️ **API Hardened** — input validation, rate limits, structured error layer  
- 📱 **Mobile-First Layout** optimized for low-end devices  
- 🚀 **Vercel Deployment** with edge-optimized routes and ISR where needed  

---

## 🔱 Role-Based Modules  
### 👤 User  
- Browsing, cart, checkout  
- Live order tracking  
- AI help & chat  
- Address book + saved carts  

### 🛠️ Admin  
- Product CRUD + inventory  
- Order management console  
- User/Delivery partner overview  
- Real-time dashboard  

### 🛵 Delivery Partner  
- Accept / reject tasks  
- Live navigation feed  
- AI chat  
- Status update pipeline  

---

## 📌 Core Pages  
- **Home / Categories**  
- **Product Listing + Details**  
- **Cart / Checkout**  
- **Order Tracking (Live Map)**  
- **Admin Console**  
- **Delivery Dashboard**  

---

## 🗄️ Database Schemas  
- **User** – roles, addresses, auth  
- **Product** – category, price, stock, images  
- **Order** – items, totals, ETA, states  
- **Rider** – location, status, active deliveries  

---

## License  
MIT © 2025 — Aditya Domle  

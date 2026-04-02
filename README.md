# 💸 Spendly - Premium Finance Dashboard

A stunning, highly professional personal finance dashboard built with React and Tailwind CSS. Spendly features a fully customized, responsive UI with premium aesthetics, a bespoke dark/light mode experience, and advanced data visualization.

---

## ✨ Features

- **Role-Based Access Control (RBAC):** Seamless toggle between 'Admin' and 'Viewer' modes. Admins uniquely have the ability to record new transactions via a dynamic form.
- **CSV Data Export:** Context-aware export functionality allowing users to instantly download filtered transaction logs into a spreadsheet-ready `.csv` format.
- **Premium Dark & Light Modes:** Meticulously crafted bespoke color palette extending beyond default Tailwind. Features a warm alabaster light mode and a deep, immersive indigo dark mode.
- **Professional Data Visualization:** High-end financial donut charts built via Recharts, implementing custom frosted-glass (`backdrop-blur`) tooltips and perfectly harmonized brand colors.
- **Dynamic Context State:** Entire dashboard runs efficiently on the React Context API managing transactions, theme preferences, and localized user session states.
- **Micro-interactions:** Extensive hover states, polished layout spacing, completely scalable SVG iconography, and flawless UI transitions.

## 🛠️ Technology Stack

- **Framework:** React 19 / Vite
- **Styling:** Tailwind CSS (Custom localized `tailwind.config.js`)
- **Charting:** Recharts
- **Icons:** Custom Inline Heroicons/Lucide SVGs
- **State Management:** React Context API

## 🚀 Getting Started

Follow these instructions to run the application locally on your machine.

### Prerequisites
Make sure you have Node.js installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Srihithavuppula/Spendly.git
   cd Spendly
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **View the App:**
   Open your browser and navigate to the local server URL (usually `http://localhost:5173`).

---

## 📁 Project Structure Overview

```text
src/
├── components/          # Reusable UI components
│   ├── charts/          # Recharts visualizations
│   ├── insights/        # Dynamic statistical insights
│   ├── layout/          # Navbar and global layouts
│   ├── summary/         # Core metrics and overview cards
│   └── transactions/    # Global transaction tables & forms
├── context/             # Global Context API providers (AppContext.jsx)
├── utils/               # Helper functions & SVG Icon configurations
├── theme/               # Global brand tokens
├── App.jsx              # Main Entry Point
└── index.css            # Base Tailwind imports & bespoke utility classes
```

## 🎨 Design Philosophy
Spendly was designed for the modern web, pivoting away from basic utility colorings towards an editorial, luxury SaaS aesthetic. The dashboard incorporates refined space, dynamic gradient brand identity, and scalable resolution-independent iconography.

---
*© 2026 Made by Srihitha*

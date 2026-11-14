import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Header() {
    return <h1 style={{color: 'orange', fontSize:48,textTransform:'uppercase'}}>Andy's Pizza Co.</h1>;
}


function Menu({ isOpen }) {
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            {isOpen && (
                <p>Authentic Italian Cuisine, all from our stone oven</p>
            )}
            <ul className="pizzas">
            {pizzaData.map((pizza) => (
                <Pizza key={pizza.name} {...pizza} />
            ))}
            </ul>
        </div>
    );
}


function Pizza({ name, ingredients, photoName, price, soldOut }) {
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <p>${price}</p>
      {soldOut && <p className="sold-out">Sold Out</p>}
    </li>
  );
}

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function Order() {
  return (
    <div className="order">
      <p>We're currently open</p>
      <button type="button" className="btn">Order</button>
    </div>
  );
}

function Footer({ isOpen }) {
  return (
    <footer className="footer">
      {isOpen ? <Order /> : <p>Sorry, we're closed</p>}
    </footer>
  );
}

function App() {
  const hour = new Date().getHours();
  const isOpen = hour >= 10 && hour < 22;

  return (
    <div className="container">
      <Header />
      <main>
        <Menu isOpen={isOpen} />
      </main>
      <Footer isOpen={isOpen} />
    </div>
  );
}

root.render(<App />);

import React from "react";

export const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 14;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <OrderMessage closeHour={closeHour} />
      ) : (
        <p>
          <span role="img" aria-label="pizza">
            🍕 We are closed! Open from {openHour}:00 to {closeHour}:00
          </span>
        </p>
      )}
    </footer>
  );
};

const OrderMessage = ({ closeHour }) => {
  return (
    <div className="order">
      <p>
        <span role="img" aria-label="pizza">
          🍕 Order your pizza now! until {closeHour}:00
        </span>
      </p>
      <button className="btn">Place an order</button>
    </div>
  );
};

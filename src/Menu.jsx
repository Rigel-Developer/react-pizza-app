import PropTypes from "prop-types";
import { pizzaData } from "./data";

export const Menu = () => {
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {pizzaData.length > 0 ? (
        <>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
            voluptatum, accusantium ut in facere natus ex tempore tempora beatae
            laborum eius cum quam nisi dignissimos sequi nemo eum doloribus
            amet!
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} pizza={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>No pizzas available</p>
      )}
    </main>
  );
};

const Pizza = ({ pizza: { photoName, name, ingredients, price, soldOut } }) => {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={`${photoName}`} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold out" : `${price}€` } </span>
      </div>
    </li>
  );
};

Pizza.propTypes = {
  pizza: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      ingredients: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      photoName: PropTypes.string.isRequired,
    })
  ),
};

import React from 'react'
import './Item.css'

function Item() {
    const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Chicken Biryani",
    description: "Spicy, flavorful, aromatic",
    price: 14.99,
  },
];

  return (
    <section className="meals">
      {DUMMY_MEALS.map((meal) => (
        <div key={meal.id} className="meal">
          <h2>{meal.name}</h2>

          <p className="desc">
            {meal.description}
          </p>

          <p className="price">
            ${meal.price}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Item
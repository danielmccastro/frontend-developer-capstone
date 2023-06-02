import React from "react";
import restaurantImg from "../assets/restaurant.jpg";
import foodSalad from "../assets/food_salad.jpg";
import foodDessert from "../assets/food_dessert.jpg";
import foodMain from "../assets/food_main.jpg";
import pictureOne from "../assets/profile01.jpg";
import pictureTwo from "../assets/profile02.jpg";
import pictureThree from "../assets/profile03.jpg";
import marioAndAdrian from "../assets/marioandadrian.jpg"

function Main() {
  return (
    <main className="main-content">
      <section className="hero-section bg-green">
        <span className="hero-description">
          <h1 className="text-h1">Little Lemon</h1>
          <h4 className="text-h4">Chicago</h4>
          <p className="text-p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            dolorem molestias nulla aperiam earum quae aliquid et nihil dolore
            quasi. Nisi officia quia ea inventore!
          </p>
          <a href="">
            <button className="btn">Reserve a table</button>
          </a>
        </span>
        <img src={restaurantImg} alt="Restaurant image" className="hero-img" />
      </section>
      <section>
        <h4 className="text-h4 color-black">Specials</h4>
        <div className="specials">
          <div className="card-specials">
            <img src={foodSalad} alt="Salad" className="card-img" />
            <div className="card-body">
              <p className="card-title">Greek Salad</p>
              <p className="card-price">$ 2.75</p>
            </div>
            <p className="card-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos fuga
              similique obcaecati labore cum quibusdam necessitatibus, veritatis
              corrupti at earum?
            </p>
            <button className="btn-order">Order now</button>
          </div>
          <div className="card-specials">
            <img src={foodMain} alt="Main" className="card-img" />
            <div className="card-body">
              <p className="card-title">Bruschetta</p>
              <p className="card-price">$ 4.20</p>
            </div>
            <p className="card-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos fuga
              similique obcaecati labore cum quibusdam necessitatibus, veritatis
              corrupti at earum?
            </p>
            <button className="btn-order">Order now</button>
          </div>
          <div className="card-specials">
            <img src={foodDessert} alt="Dessert" className="card-img" />
            <div className="card-body">
              <p className="card-title">Lemon cake</p>
              <p className="card-price">$ 4.25</p>
            </div>
            <p className="card-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos fuga
              similique obcaecati labore cum quibusdam necessitatibus, veritatis
              corrupti at earum?
            </p>
            <button className="btn-order">Order now</button>
          </div>
        </div>
      </section>
      <section className="bg-green">
        <h4 className="text-h4 color-white">Testimonials</h4>
        <div className="testimonials">
          <div className="card-testimonials">
            <h4 className="testimonials-title">★ 4.9</h4>
            <img
              src={pictureOne}
              alt="First review photo"
              className="testimonials-img"
            />
            <p className="card-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium dolorum pariatur eius quia doloribus numquam vero
              vitae laborum consequuntur voluptatum.
            </p>
          </div>
          <div className="card-testimonials">
            <h4 className="testimonials-title">★ 5.0</h4>
            <img
              src={pictureTwo}
              alt="Second review photo"
              className="testimonials-img"
            />
            <p className="card-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium dolorum pariatur eius quia doloribus numquam vero
              vitae laborum consequuntur voluptatum.
            </p>
          </div>
          <div className="card-testimonials">
            <h4 className="testimonials-title">★ 4.7</h4>
            <img
              src={pictureThree}
              alt="Third review photo"
              className="testimonials-img"
            />
            <p className="card-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium dolorum pariatur eius quia doloribus numquam vero
              vitae laborum consequuntur voluptatum.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <span className="about-description">
          <h1 className="text-h1 text-black">Little Lemon</h1>
          <h4 className="text-h4 text-black">Chicago</h4>
          <p className="text-p text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
            eos, non natus qui enim debitis deleniti, sunt sint modi eveniet
            ipsum. Dolores, impedit. Molestias, eos beatae, velit sed blanditiis
            sint consequatur amet, accusamus consequuntur earum doloribus
            possimus maxime veniam illum quam et ullam totam odio repellat ab
            incidunt necessitatibus. Temporibus.
          </p>
        </span>
        <img src={marioAndAdrian} alt="Mario and Adrian" className="about-img" />
      </section>
    </main>
  );
}

export default Main;

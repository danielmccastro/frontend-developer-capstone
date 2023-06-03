import React from "react";
import restaurantImg from "../assets/restaurant.jpg";
import foodSalad from "../assets/food_salad.jpg";
import foodDessert from "../assets/food_dessert.jpg";
import foodMain from "../assets/food_main.jpg";
import pictureOne from "../assets/profile01.jpg";
import pictureTwo from "../assets/profile02.jpg";
import pictureThree from "../assets/profile03.jpg";
import marioAndAdrian from "../assets/marioandadrian.jpg";

function Main() {
  return (
    <main>
      <section className="hero-section bg-green p-5">
        <div className="container">
          <div className="row">
            <span className="col-12 col-md-6 hero-description">
              <h1 className="text-h1">Little Lemon</h1>
              <h4 className="text-h4">Chicago</h4>
              <p className="text-p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Recusandae dolorem molestias nulla aperiam earum quae aliquid et
                nihil dolore quasi. Nisi officia quia ea inventore!
              </p>
              <a href="">
                <button className="btn-reserve my-2 mt-md-5">
                  Reserve a table
                </button>
              </a>
            </span>
            <img
              src={restaurantImg}
              alt="Restaurant image"
              className="hero-img col-12 col-md-6 mt-4"
            />
          </div>
        </div>
      </section>

      <section className="p-5">
        <div className="container">
          <h4 className="col-12 text-center mb-5">Specials</h4>
          <div className="specials row">
            <div className="col-12 col-md mx-4 mb-4">
              <div className="card h-100">
                <img
                  src={foodSalad}
                  alt="Salad"
                  className="card-img-top"
                />
                <div className="card-body">
                  <div className="card-flex">
                  <p className="card-title">Greek Salad</p>
                  <p className="card-price">$ 2.75</p>
                  </div>
                  <p className="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                  fuga similique obcaecati labore cum quibusdam necessitatibus,
                  veritatis corrupti at earum?
                </p>
                </div>
                <button className="btn-reserve">Order now</button>
              </div>
            </div>
            <div className="col-12 col-md mx-4 mb-4">
              <div className="card h-100">
                <img src={foodMain} alt="Main" className="card-img-top" />
                <div className="card-body">
                <div className="card-flex">
                  <p className="card-title">Bruschetta</p>
                  <p className="card-price">$ 4.20</p>
                  </div>
                <p className="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                  fuga similique obcaecati labore cum quibusdam necessitatibus,
                  veritatis corrupti at earum?
                </p>
                </div>
                <button className="btn-reserve">Order now</button>
              </div>
            </div>
            <div className="col-12 col-md mx-4">
              <div className="card h-100">
                <img
                  src={foodDessert}
                  alt="Dessert"
                  className="card-img-top"
                />
                <div className="card-body">
                  <div className="card-flex">
                  <p className="card-title">Lemon cake</p>
                  <p className="card-price">$ 4.25</p>
                  </div>
                <p className="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                  fuga similique obcaecati labore cum quibusdam necessitatibus,
                  veritatis corrupti at earum?
                </p>
                </div>
                <button className="btn-reserve">Order now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-green p-5">
        <h4 className="col-12 text-center mb-5">Testimonials</h4>
        <div className="container">
          <div className="row">
            <div className="testimonials row">
              <div className="card-testimonials border col-12 col-md mx-4">
                <h4 className="testimonials-title">★ 4.9</h4>
                <img
                  src={pictureOne}
                  alt="First review photo"
                  className="img-fluid testimonials-img"
                />
                <p className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium dolorum pariatur eius quia doloribus numquam vero
                  vitae laborum consequuntur voluptatum.
                </p>
              </div>
              <div className="card-testimonials border col-12 col-md mx-4">
                <h4 className="testimonials-title">★ 5.0</h4>
                <img
                  src={pictureTwo}
                  alt="Second review photo"
                  className="testimonials-img img-fluid"
                />
                <p className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium dolorum pariatur eius quia doloribus numquam vero
                  vitae laborum consequuntur voluptatum.
                </p>
              </div>
              <div className="card-testimonials border col-12 col-md mx-4">
                <h4 className="testimonials-title">★ 4.7</h4>
                <img
                  src={pictureThree}
                  alt="Third review photo"
                  className="testimonials-img img-fluid"
                />
                <p className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium dolorum pariatur eius quia doloribus numquam vero
                  vitae laborum consequuntur voluptatum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5">
        <div className="container">
          <div className="row">
            <span className="col-12 col-md-6">
              <h1 className="">Little Lemon</h1>
              <h4 className="">Chicago</h4>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
                eos, non natus qui enim debitis deleniti, sunt sint modi eveniet
                ipsum. Dolores, impedit. Molestias, eos beatae, velit sed
                blanditiis sint consequatur amet, accusamus consequuntur earum
                doloribus possimus maxime veniam illum quam et ullam totam odio
                repellat ab incidunt necessitatibus. Temporibus.
              </p>
            </span>
            <img
              src={marioAndAdrian}
              alt="Mario and Adrian"
              className="col-12 img-fluid col-md-6 hero-img"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;

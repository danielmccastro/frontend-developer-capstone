import React from "react";
import Button from "./Button";
import Card from "./Card";
import Testimonials from "./Testimonials";

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
                <Button content={"Reserve a table"} />
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
            <Card
              src={foodSalad}
              alt={"Salad"}
              title={"Greek Salad"}
              price={"$ 2.75"}
            />
            <Card
              src={foodMain}
              alt={"Main"}
              title={"Bruschetta"}
              price={"$ 4.20"}
            />
            <Card
              src={foodDessert}
              alt={"Dessert"}
              title={"Lemon cake"}
              price={"$ 4.25"}
            />
          </div>
        </div>
      </section>
      <section className="bg-green p-5">
        <h4 className="col-12 text-center mb-5">Testimonials</h4>
        <div className="container">
          <div className="row">
            <div className="testimonials row">
              <Testimonials
                ranking={"4.9"}
                src={pictureOne}
                alt={"First review photo"}
              />
              <Testimonials
                ranking={"5.0"}
                src={pictureTwo}
                alt={"Second review photo"}
              />
              <Testimonials
                ranking={"4.7"}
                src={pictureThree}
                alt={"Third review photo"}
              />
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

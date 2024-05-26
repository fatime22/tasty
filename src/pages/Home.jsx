import React, { useEffect, useState } from "react";
import chef from "../../public/about-2.jpg";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import GuestCard from "../components/GuestCard";

import guest1 from "../../public/person_1.jpg";
import guest2 from "../../public/person_2.jpg";
import guest3 from "../../public/person_3.jpg";
import Footer from "../components/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    let response = await axios.get("http://localhost:3000/products/");
    setProducts(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section id="heroSection">
        <div className="container">
          <div className="row slider-text align-items-center justify-content-center text-center">
            <div className="col-md-10 col-sm-12">
              <h1 className="mb-3">
                Book a table for yourself at a time convenient for you
              </h1>
              <p>
                <a
                  href="reservation.html"
                  className="btn btn-primary btn-outline-white px-5 py-3"
                >
                  Book a table
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="ourChef">
        <div className="container">
          <div className="section-2-blocks-wrapper row">
            <div className="img col-sm-12 col-lg-6 chefimage">
              <img src={chef} alt="" />
            </div>
            <div className="text col-lg-6 ftco-animate fadeInUp ftco-animated">
              <div className="text-inner align-self-start">
                <span className="subheading">About Tasty</span>
                <h3 className="heading">
                  Our chef cooks the most delicious food for you
                </h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="productArea">
        <div className="container">
          <div className="row justify-content-center position-relative">
            <div className="col-md-7 section-heading text-center pt-4">
              <h2>Discover Our Exclusive Menu</h2>
            </div>
          </div>
          <div className="row">
            <div className="products row">
              {products.map((item) => {
                return <ProductCard key={item.id} item={item} />;
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="guestSection">
        <div className="container">
          <div className="row gap-3 justify-content-center">
            <GuestCard
              text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              name="Deniss Green"
              image={guest1}
              from="Guest from Italy"
            />
            <GuestCard
              text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              name="Deniss Green"
              image={guest2}
              from="Guest from Italy"
            />
            <GuestCard
              text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              name="Deniss Green"
              image={guest3}
              from="Guest from Italy"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;

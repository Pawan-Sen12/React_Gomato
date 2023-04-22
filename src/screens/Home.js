import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import { useState, useEffect } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [getFood, setGetFood] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/create/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    setGetFood(response);
    // console.log(response);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
     
      {/* CARAOUSAL */}
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "1" }}>
              <div class="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                {/* <button className="btn btn-outline-light bg-danger"  type="submit">Search</button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/300x300/?burger"
                className="d-block w-100"
                style={{ filter: "brightness(20%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/300x300/?samosa"
                className="d-block w-100"
                style={{ filter: "brightness(20%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/300x300/?pizza"
                className="d-block w-100"
                style={{ filter: "brightness(20%)" }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
       {/* CARAOUSAL */}

      {/* CARD */}

      <div className="container">
        {getFood !== [] ? (
          getFood
            .filter(
              (item) =>
                (item.CategoryName) &&
                 (item.name.toLowerCase().includes(search.toLocaleLowerCase()))
            )
            .map((filterItems) => {
              return (
                <div key={filterItems._id} className="col-12 col-md-6 col-lg-3 Card-style">
                  {" "}
                  <Card
                  foodItems ={filterItems}
                    // foodName={filterItems.name}
                    option={filterItems.options[0]}
                    // imgSrc={filterItems.img}
                   ></Card>
                </div>
              );
            })
        ) : (
          <div>No Such Data Found</div>
        )}
      </div>
      <br></br>
      <br></br>

      {/* CARD */}

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

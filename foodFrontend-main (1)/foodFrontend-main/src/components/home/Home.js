import Hero from "../hero/Hero";
import LowLanding from "./LowLanding";
import "./Home.css";

const Home = ({ foods }) => {
  return (
    <div>
      <Hero foods={foods} />
      <div className="text">
        <h1>This is project</h1>
        <hr />
        <p>
          "Discover the best restaurants and dishes in your city with our food
          review app. From high-end restaurants to hidden gems, our community of
          foodies provides authentic reviews and ratings to help you find the
          perfect meal. Whether you're looking for a romantic dinner spot, a
          quick bite on the go, or a family-friendly restaurant, our app has got
          you covered. Browse menus, photos, and reviews from real customers to
          make informed decisions about where to eat. With our easy-to-use
          interface, you can filter by cuisine, price range, location, and more.
          Join our community today and start exploring the culinary delights of
          your city!"
        </p>
      </div>
      <LowLanding />
    </div>
  );
};

export default Home;

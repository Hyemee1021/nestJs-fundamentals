import React from "react";
import ProductCard from "./components/ProductCard";
import UserPage from "./users/page";

const Home = () => {
  return (
    <main>
      <h1>Hello, Next.js</h1>
      <ProductCard />
      <UserPage />
    </main>
  );
};

export default Home;

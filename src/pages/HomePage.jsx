import React from "react";
import Card from "../components/Card";
import { useContext } from "react";
import { UserContext } from "../context/context";
import styles from "./HomePage.module.css";
import SearchBox from "../components/searchBox/SearchBox";
import Pagination from "../components/pagination/Pagination";
import AddProduct from "../components/addProduct/AddProduct";
import Loader from "../components/loader/Loader";

const HomePage = () => {
  const { showCards, products } = useContext(UserContext);
  return (
    <>
      <div className={styles.topBox}>
        <SearchBox />
        <AddProduct />
      </div>
      {!showCards ? (
        <div className={styles.container}>
          {!products.length && <Loader />}
          {products.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
      {/* <Pagination /> */}
    </>
  );
};

export default HomePage;

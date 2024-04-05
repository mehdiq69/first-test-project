import axios from "axios";
import { createContext, useEffect, useState } from "react";
import api from "../services/configs";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [showCards, setShowCards] = useState(false);
  const [products, setProducts] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
    console.log(products);
  }, []);

  return (
    <UserContext.Provider value={{showCards,setShowCards, products, setProducts, text, setText }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;

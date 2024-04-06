import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserProvider from "./context/context";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsList from "./pages/ProductsList";

function App() {
  return (
    <UserProvider >
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/productsList" element={<ProductsList />} />
          <Route path="/productsList/:id" element={<ProductDetailPage />} />
        </Routes>
      </Layout>
    </UserProvider>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserProvider from "./context/context";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <UserProvider >
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </Layout>
    </UserProvider>
  );
}

export default App;

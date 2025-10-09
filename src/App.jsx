import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./views/Home.jsx";
import { Contact } from "./views/Contact.jsx";
import { Error404 } from "./views/Error404.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import { NavBar } from "./components/Navbar.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoriaId" element={<ItemListContainer />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

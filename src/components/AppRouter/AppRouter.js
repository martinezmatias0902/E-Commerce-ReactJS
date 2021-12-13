import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import HomePage from "../../pages/HomePage/HomePage"
import ItemDetailPage from "../../pages/ItemDetailPage/ItemDetailPage"


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/products/:id' element={<ItemDetailPage />}></Route>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='*' element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
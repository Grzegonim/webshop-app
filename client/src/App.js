import Homepage from "./components/pages/Homepage/Homepage";
import Offer from "./components/pages/Offer/Offer";
import Footer from "./components/views/Footer/Footer";
import NavBar from "./components/views/Navbar/Navbar";
import NotFound from "./components/pages/NotFound/NotFound";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Header from "./components/views/Header/Header";
import CartSummary from "./components/pages/CartSummary/CartSummary";
import Order from "./components/pages/Order/Order";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import SearchPage from "./components/pages/SearchPage/SearchPage";
import Categories from "./components/features/Categories/Categories";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook, faInstagram,  faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas, faTwitter, faFacebook, faInstagram, faFontAwesome);

function App() {
  return (
    <Container>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/summary" element={<CartSummary />} />
        <Route path="/order" element={<Order />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search/:searchPhrase" element={<SearchPage />} />
        <Route path="/category/:type" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;

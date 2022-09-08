import "./App.css";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import Login from "./components/Others/Login";

import ProductPage, { HomePage } from "./components/Page/HomePage";
import LoginPage from "./components/Page/LoginPage";
import ProductByCategoryPage from "./components/Page/ProductByCategoryPage";
import ProductDetailPage from "./components/Page/ProductDetailPage";
import ProfilePage from "./components/Page/ProfilePage";
import RegisterPage from "./components/Page/RegisterPage";
import CategoryMenu from "./components/Product/CategoryMenu";
import ProductByCategory from "./components/Product/ProductByCategory";
import ProductDetails from "./components/Product/ProductDetails";
import OrderListPage from "./components/Page/OrderListPage";
import AppRoute from "./Roud/AppRoute";

function App() {
  return (
    
    //<div> style={{ width: "100%", height: "100%" }}
      //<Header />
      //<HomePage />
      //<Footer />
      <AppRoute/>
    //</div>
  );
}

export default App;

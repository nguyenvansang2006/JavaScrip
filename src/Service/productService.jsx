import axios from "axios";
import AppUrl from "../components/Api/AppUrl";

class ProductService {
  async productBySubCategory(catName) {
    const url = AppUrl.productsbysubcategory +'/'+catName;
    console.log(url)
    return axios.get(url).then(response => response.data);
  }
}
export default ProductService;

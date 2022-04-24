import axios from "axios";

export const getAllProducts = async () => {
    const response = await axios.get("https://ecommerce-backend-ctd.herokuapp.com/products?page=0&size=19");
    return response.data;
}

import axios from "axios";

export const getAllProducts = async () => {
    const response = await axios.get("http://3.16.56.233:8080/products?page=0&size=19");
    return response.data;
}

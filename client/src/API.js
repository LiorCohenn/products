import axios from "axios";

//!-------------------------------------------------------------------------------------
//* ====================== API =====================
//!-------------------------------------------------------------------------------------

const API = axios.create({
  baseURL: "http://localhost:3000",
});


//!--------------------------------------------------------------------------------------
//* ================================= Products ====================================
//!--------------------------------------------------------------------------------------

export const getAllProducts = () => API.get("/getAllProducts/");

export const createProduct = (Data) => API.post("/addNewProduct/" + Data);

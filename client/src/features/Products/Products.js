import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled,{keyframes} from "styled-components/macro"
import Swal from 'sweetalert2'
import back from "../../imgs/desert-4k_1551644840.jpg"
import ProductItem from "../Product/productItem"

import { getProducts,newProduct,Error } from "./ProductsSlice";

const backanimation= keyframes`
  0% {background-position: 0%}
  100% {background-position: 100%}
`;

const AppWarper = styled.div`
  /* background-image: url(${back});
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  width:100%;
  height: 100%;
  background: linear-gradient(45deg, #4ecdc4, #556270,#1CB5E0);
  background-size: 600% 100%;
  animation: ${backanimation} 16s linear infinite;
  animation-direction: alternate;
`



const AppContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -ebkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  height: 80vh;
  width: 80vw;
`

const AppContainerGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 1.8fr;
  gap: 0px 0px;
  grid-template-areas:
    "nav"
    "cont";
`

const Nav = styled.div`
  grid-area: nav;
  background-color: rgba(14, 11, 11, 0.603);
  position: relative;
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-between; 
`
const NavTitle = styled.div`
  display: inline-block;
  color: #eeeeee;
  font-size: 3rem;
  transition: 0.3s all;
  :hover{
    color: white;
    cursor: pointer;
  }
`

const ProductPage = styled.div`
  grid-area: cont;
  overflow-y: auto;
  background-color: rgba(255, 255, 255, .15);  
  backdrop-filter: blur(50px);
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  /* width: 100%; */
  padding: 2rem 3rem 3rem;
`


const Create = styled.div`
    height: auto;
    width: auto;
`

const CreateBTN = styled.button`
  background: #eeeeee;
  height: 2rem;
  border: none;
  border-radius: 4px;
  transition: 0.3s all;
  :hover{
    color: white;
    cursor: pointer;
  }
  
`

const loadingAnimate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingRing = styled.div`
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
  ::after{
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${loadingAnimate} 1.2s linear infinite;
  }
  margin: 0 auto;
  top: 50%; 
  left: 50%;
  transform: translate(-50%,-50%);
  
`



export function Products() {
  const {products,suppliers,loading,error} = useSelector(state => state.products);
  const dispatch = useDispatch();
  // get all product on render
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if(error){
      Swal.fire(
        'Error',
        'Something goes wrong',
        'error'
      )
      dispatch(Error())
    }
  });
  // Create a new product
  async function createNewProduct(){
    const { value: formValues } = await Swal.fire({
      title: 'Add new Product',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Name">' +
        '<input id="swal-input2" class="swal2-input" type="number" placeholder="Price">' +
        '<input id="swal-input3" class="swal2-input" type="number" placeholder="Amount">' +
        '<select name="supplier" id="swal-input4" class="swal2-input">'+
        // get all suppliers with the code
        suppliers.map(supplier=>{
          return `<option value="${supplier.code}">${supplier.name}</option>`
        })
         +
        '</select>' ,
      focusConfirm: false,
      preConfirm: () => {
        return {
          "name":document.getElementById('swal-input1').value,
          "price":document.getElementById('swal-input2').value,
          "amount":document.getElementById('swal-input3').value,
          "supplierCode":document.getElementById('swal-input4').value
        }
      }
    })
    
    if (formValues) {
      // dispatch the new product function
      dispatch(newProduct(formValues));
    }
  }
  return (
  
    <AppWarper>
      <AppContainer>
        <AppContainerGrid>
          <Nav>
              <NavTitle>Store</NavTitle>
            <Create>
              
             <CreateBTN onClick={() => createNewProduct()}>Add New Product</CreateBTN>
            </Create>

          </Nav>
          <ProductPage>
          {error == false ? loading ? 
    <LoadingRing/>
    : 
            products.map(product =>{
             return  <ProductItem product={product}/>
            }): null}

          </ProductPage>
        </AppContainerGrid>
      </AppContainer>
    </AppWarper>
  );
}

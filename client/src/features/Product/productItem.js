import React from "react";
import styled from "styled-components/macro"
import img from "../../imgs/product.png"


const Warper = styled.div`
  width: 25%;
  display: flex;
  height: 50%;
  justify-content: space-around;


`
const ProductWarper = styled.div`
background-color: black;
width: 100%;
margin:3rem;
border-radius: 11px;

`
const ContentWarper = styled.div`


  position: absolute; 
  bottom: 0; 
  color: #f1f1f1; 
  width: 100%; 
`

const ImgContainer = styled.div`
  position: relative;
  height: 100%;
  
`

const ProductImg = styled.img`
  height: 100%;
  mask-image: linear-gradient(to bottom, black 20%, transparent 75%);
  border-radius: 10px;
`

const ProductText = styled.div`
  height: 1.8rem;
  padding-left: .5rem;
`

function productItem({product}) {
  return (
      <Warper>
      <ProductWarper>
          
              <ImgContainer>
              <ProductImg src={img}/>
              <ContentWarper>
              <ProductText>
              {product.name}
          </ProductText>
          <ProductText>
              Price: {product.price}$
          </ProductText>
          <ProductText>
            Amount: {product.amount}
          </ProductText>
          </ContentWarper>
              </ImgContainer>
      </ProductWarper>
    </Warper>
  );
}

export default productItem;

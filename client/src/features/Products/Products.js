import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch,Link } from 'react-router-dom';
import styled from "styled-components"

import back from "../../imgs/desert-4k_1551644840.jpg"


import  Search  from '../Search/Search';

import { searchMovies, setSearch, Reset } from "./ProductsSlice";


const AppWarper = styled.div`
  background-image: url(${back});

  height: 100%;
  width: 100%;


  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const AppContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    height: 80vh;
    background-color: rgba(14, 11, 11, 0.603);
    width: 80vw;
    box-shadow: 5px 9px 10px rgb(0 0 0 / 70%);
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
    
`
const NavTitle = styled.div`
display: inline-block;
color: red;
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
`


const CreateBTN = styled.div`
height: auto;
    width: auto;
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 80%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    box-sizing: border-box;
`



export function Products() {
    const {search,movies} = useSelector(state => state.movie);
  const dispatch = useDispatch();
  console.log("sdsdds");

  return (
    <AppWarper>
      <AppContainer>
        <AppContainerGrid>
          <Nav>
              <NavTitle>MovieLand</NavTitle>
            <CreateBTN>
             
            </CreateBTN>

          </Nav>
          {/* <ProductPage>
              <Search />
          </ProductPage> */}
        </AppContainerGrid>
      </AppContainer>
    </AppWarper>
  );
}

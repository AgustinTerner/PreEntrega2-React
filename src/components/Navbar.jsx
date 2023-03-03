import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartWidget from "./CartWidget";

function Navbar() {
    return (
        <NavContainer>
            <div className="contenedorNavbar">
                <div className="div-h1-h2">
                    <h1>BEER.CO</h1>
                    <h2>Cervezas Artesanales</h2>
                </div>
                <ul>
                    <li><Link to={"/rubias"} className="rubias">RUBIAS</Link></li>
                    <li><Link to={"/rojas"} className="rojas">ROJAS</Link></li>
                    <li><Link to={"/negras"} className="negras">NEGRAS</Link></li>
                </ul>
                <div className="carrito">
                    <CartWidget />
                </div>
            </div>
        </NavContainer>
    );
}

export default Navbar

const NavContainer = styled.nav` 

    .contenedorNavbar{
        height: 100px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        background-color: whitesmoke;

        .div-h1-h2{
            text-align: center;
            margin: auto;
            h1,
            h2{
                margin: 0;
                color: gold;
                font-style: italic;
            }
        }

        ul{
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            list-style: none;
            li{
                a{
                    text-decoration: none;
                    font-family: impact;
                    font-size: 20px;
                }
                .rubias{
                    color: gold;
                }
                .rojas{
                    color: darkred;
                }
                .negras{
                    color: black;
                }
            }
        }
        
        .carrito{
            margin: auto;
        }
    }
`
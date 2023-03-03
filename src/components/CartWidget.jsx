import React from "react";
import styled from "styled-components";

function CartWidget() {
    return(
        <Cart>
            <button>
                <h3>Carrito</h3>
                <p>Productos: 0</p>
            </button>
        </Cart>
    );
}

export default CartWidget;

const Cart = styled.div`
    button{
        width: 200px;
        margin: auto;
        h3, 
        p{
            margin: 0;
        }
    }
`
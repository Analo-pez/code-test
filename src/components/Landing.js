import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/styleComponents/Landing.scss';
import styled from 'styled-components'


export const StyledButton = styled.button`
    color: rgba(0,0,0,0.75);;
    background-color: #4FD053;
    outline-style: none;
    padding: 20px;
    font-size: 20px;
    margin-top: 30px;
    &:hover{
        cursor: pointer;
        color: white;
        font-size: 30px;
        border-color: transparent;
}`


function Landing(props) {
    const [postalcode, setPostalcode] = useState(localStorage.getItem('postalcode') || '');
    const isSubmitButtonDisabled = (ev) => {
        if (postalcode !== "") {
            localStorage.setItem('postalcode', postalcode)
        } else {
            ev.preventDefault()
            alert("Introduce un código postal")
        }
    }


    return (
        <div className="pageLanding">
            <header className="headerLanding">
                <h1 className="headerLanding__title ">LolaMarket</h1>
            </header>
            <main className="sectionPrincipal">
                <section className="sectionPrincipal__box">
                    <h2 className="sectionPrincipal__box--title"> Hacemos tu compra</h2>
                    <p className="sectionPrincipal__box--subtitle"> El nuevo servicio para hacer la compra en tus supermercados de confianza </p>
                    <input className="sectionPrincipal__box--input" placeholder="Tu código postal"
                        onChange={setPostalcode}
                        value={props.value}
                        type="number" />
                    <Link to="/tienda" className="box-button" >
                        <StyledButton className="start-button"
                            onClick={isSubmitButtonDisabled}>Buscar tienda</StyledButton>
                    </Link >
                </section>

            </main>
        </div>
    );
}

export default Landing;
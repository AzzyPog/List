import React from "react";
import './Footer.css';


const Footer = () => {
    return (
       <div>
        <div className="FooterBlack">
            <div>
                <h2>Atendimento</h2>
                <p>Política de Vendas, Trocas e Privacidade</p>
                <p>Termos e condições de compra</p>
                <p>Fale conosco</p>
            </div>
            <div>
                <h2>Intitucional</h2>
                <p>Sobre a loja</p>
            </div>
            <div>
                <h2>Formas de pagamento</h2>
                <img src="" />
            </div>
        </div>
        <div className="WhiteFooter">
            <img src="" width='200px' />
            <p>
            Endereço: R. Dona Isabel, 700 - Bonsucesso, Rio de Janeiro - RJ, 21032-060
            </p>
            <img src="" />
        </div>
       </div>
    );
}

export default Footer;
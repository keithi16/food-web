import "./produto-cart.css"
import foto from "../../assets/hamburguer.png"

function ProdutoCart() {
  return (
    <div className="produto-cart-box">
        <img src={foto} alt="Foto" />

        <div className="flex-1">
            <p className="produto-cart-nome">Spicy Burger</p>
            <p className="produto-cart-valor">R$ 15,00</p>

            <div className="footer-produto-cart">
                <div>
                    <button className="btn footer-produto-btn">-</button>
                    <span className="footer-produto-qtd">02</span>
                    <button className="btn footer-produto-btn">+</button>
                </div>

                <p className="footer-produto-preco">R$ 30,00</p>
            </div>
        </div>
    </div>
  )
}

export default ProdutoCart
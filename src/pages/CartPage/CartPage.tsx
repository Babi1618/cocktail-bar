import { Link } from "react-router-dom";

export const CartPage = () => {
  const cart = [];
  return (
    <section className="section cart-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
    </section>
  );
};

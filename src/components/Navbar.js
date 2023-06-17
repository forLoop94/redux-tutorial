import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);
  // useSelector((state) => console.log(state.cart.cartItems));
  return (
    <nav>
      <div>
        {amount} <FaShoppingCart />
      </div>
    </nav>
  )
}

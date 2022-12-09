import { Outlet, Link } from "react-router-dom";
import { Context } from "./CardContext";
import { useContext } from "react";


const Checkout = () => {
    const [cart] = useContext(Context);

    return (
        <>
        <ul>
            {cart.map(id => (<li>{id}</li>))}
        </ul>
        <Link to={`/`}>Back</Link>
        </>
    )
}
export default Checkout
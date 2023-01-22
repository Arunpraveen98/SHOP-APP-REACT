import './App.css';
import { data } from "./ProductData";
import { useState } from "react";
//------------------------------------------------
// ?   {icon name,all endpoint same means we can add here..}                   
import { FaCartPlus } from "react-icons/fa";
//?                                   /First two letter of icon name..
import { SiShopify } from "react-icons/si";
//------------------------------------------------
//*Add to cart font.
<style>
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
</style>;
//------------------------------------------------

function App() {

  const [cartValue, setcartValue] = useState(0);

  return (
    <div className="App">
      
      <div className="heading">
        <strong>
          <span>SHOP IN STYLE <SiShopify className='bag'/> </span>
          <b className="shop">
            &mdash; With this shop hompeage template &mdash;
          </b>
        </strong>
      </div>

    {/* //? mapping the data... */}

      {data.map((item, index) => (
        <Shopstyle
          key={index}
          index={index}
          cartValue={cartValue}
          setcartValue={setcartValue}
          img_size={item.img_size}
          sale_badge={item.sale_badge}
          product_name={item.product_name}
          product_rating={item.product_rating}
          product_price={item.product_price}
          current_price={item.current_price}
          button_value={item.button_value}
        />
      ))}

      <div className="footer">Copyright © Your Website 2022</div>

    </div>
  );
}

export default App;

//------------------------------------------------------

//? functional component

export function Shopstyle({
  index,
  cartValue,
  setcartValue,
  img_size,
  sale_badge,
  product_name,
  product_rating,
  product_price,
  current_price,
  button_value,
}) {
  //------------------------------------------------------

  //? Stateful component :-
  const [view_options, Setview_options] = useState(true);

  //* show_cards function.......

  const show_cards = () => {
    Setview_options(!view_options);
  };

  //------------------------------------------------------
  //? Normal function for add to cart...

  function addCart() {
    setcartValue(cartValue + 1);
  }
  //------------------------------------------------------
  //? Normal function for remove to cart...

  function removeCart() {
    setcartValue(cartValue - 1);
    show_cards();
  }

  //------------------------------------------------------
  return (
    <div className="container">
      <span className="cart">
         <FaCartPlus className="cart-icon"/><span className="count">{cartValue}</span>
      </span>

{/* //?cards content goes here... */}
      <div className="cards">
        <div className="img-area">
        <img src={img_size} className="img-size" alt="404"/>
        <span className="sale">{sale_badge}</span>
        </div>
        <hr></hr>
       

    {/* //? display the content.... */}
        <div className="content">
          {view_options ? (<h2 className="product-name">{product_name}</h2>) : ("")}
          {view_options ? (<b className="product-rating">{product_rating}</b>) : ("")}
          {view_options ? (<h5 className="product-price">{product_price} {current_price} </h5>) : ("")}
        </div>

   {/* //? Add to cart button...                         onClick Event... */}
        <button type="button" className="custom-btn btn" onClick={()=>{show_cards(addCart())}}>
          <span className="add-btn">
            {view_options ? (  button_value ) : (<option disabled className="disable-btn">Disabled</option>)}
          </span>
        </button>

   {/* //? Remove to cart button... */}
        <button
          type="button"
          className="custom-btn btn remove-btn"
          style={{ display: view_options ? "none" : "block" }}
          // ?onClick Event...
          onClick={()=>removeCart()}>
         <span className="remove">{view_options ? "" : "⛔ Remove Cart"}</span> 
        </button>

      </div>

      {/* //?end of cards content... */}
    
    </div>
  );
}

 //------------------------------------------------------

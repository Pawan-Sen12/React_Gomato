import { useEffect, useRef, useState } from "react";
import "./Card.css";
import { useDispatchCart, useCart } from "./ContextReducer";
const Card = (props) => {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let option = props.option;
  let priceOption = Object.keys(option);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const handleAddtocard = async () => {
    let food = []
    for(const item of data){
      if(item.id === props.foodItems._id){
      food = item;
      break
    }
  }
    if(food !== []){
      if(food.size === size){
      await dispatch({type:'UPDATE',  id:props.foodItems._id, price: finalPrice, qty: qty})
      return
      }
    else if(food.size !== size){
    await dispatch({
      type: "ADD",
      id: props.foodItems._id,
      name: props.foodItems.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
    return
  }
  return
  };
  await dispatch({
    type: "ADD",
    id: props.foodItems._id,
    name: props.foodItems.name,
    price: finalPrice,
    qty: qty,
    size: size,
  });
}
  let finalPrice = qty * parseInt(option[size]);
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem" }}>
        <img src={props.foodItems.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.foodItems.name}</h5>
          <p className="card-text">Some quick example of the card's content.</p>
          <div className="container w-100">
            {/* ONLY THIS WE WRITE */}
            <select className="m-2 h-100  bg-white rounded" onChange={(e)=>setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {" "}
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select className="m-2 h-100 bg-white rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
              {priceOption.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>

            <div className="d-inline">₹{finalPrice}/-</div>
            {/* ONLY THIS WE WRITE */}
          </div>
        </div>
        <hr></hr>
        <button
          className={"btn btn-danger justify-center ms-2 CardBtn"}
          onClick={handleAddtocard}
        >
          Add to Card
        </button>
      </div>
    </div>
  );
};

export default Card;

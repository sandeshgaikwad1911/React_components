/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

/* eslint-disable no-unused-vars */
const MultipleCheckbox2 = () => {

    const Toppings = [
        {
          name: "Capsicum",
          price: 35
        },
        {
          name: "Paneer",
          price: 50
        },
        {
          name: "Red Paprika",
          price: 35
        },
        {
          name: "Onions",
          price: 20
        },
        {
          name: "Extra Cheese",
          price: 50
        },
        {
          name: "Baby Corns",
          price: 25
        },
        {
          name: "Mushroom",
          price: 25
        }
      ]

      const [toppings, setToppings] = useState(Toppings)
      const [totalPrice, setTotalPrice] = useState(0)
      // console.log('totalPrice', totalPrice)

      useEffect(()=>{
        setToppings(Toppings)
      },[])

      const handleChange = (e)=>{
        const {name, checked} = e.target
        let checkedToppings = toppings.map((topping)=>(topping.name == name ? {...topping, isChecked: checked}: topping))
        console.log('checkedToppings',checkedToppings)
        setToppings(checkedToppings)

        const totalAmount = checkedToppings.reduce((acc,cur)=>{
          console.log('acc', acc )    
          console.log('cur', cur)
          /* initial acc is 0 and when we check on perticulate checkobx(here cur) isChecked property becomes true...
          and then that perticular checkbx(here cur) propety price is added to it */
          if(cur?.isChecked == true){
            return acc + cur.price
          }
          else{
            return acc
          }
        },0)

        setTotalPrice(totalAmount)
      }
      

      // console.log('toppings',toppings)

  return (
    <div className="checkbox-handling">
        
            {
                toppings.map((topping, i)=>(
                    <div key={i} className="container">
                        <div className="checkboxes-list">
                            <input type="checkbox" id={i} name={topping.name} value={topping.name} onChange={handleChange} checked={topping?.isChecked || false}/>
                            <label htmlFor={i}>{topping.name}</label>
                        </div>
                        <div className="price-list">
                            {topping.price}
                        </div>
                    </div>
                ))
            }
            <hr />
            <div className="total">
                <p className="total-title">total-toping-price</p>
                <p>{totalPrice}</p>
            </div>
            
    </div>
  )
};
export default MultipleCheckbox2
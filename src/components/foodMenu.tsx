import React from 'react'
import Image from 'next/image'
import { FoodList } from '@/types/foodList'



const FoodMenu = () => {
    
  const listOfFoods = () =>{
     const foods:FoodList[] = [
        {
            image:"/food.png",
            name:"Corn-Shrimp",
            description:"Whales and darkness moving form cattle",
            price:"$32",
        },
        {
            image:"/food.png",
            name:"Garri",
            description:"Whales and darkness moving form cattle",
            price:"$32"
        },
        {
            image:"/food.png",
            name:"Banga",
            description:"Whales and darkness moving form cattle",
            price:"$32"
        },
        {
            image:"/food.png",
            name:"Soup",
            description:"Whales and darkness moving form cattle",
            price:"$32"
        },
        {
            image:"/food.png",
            name:"Rice",
            description:"Whales and darkness moving form cattle",
            price:"$32"
        },
        {
            image:"/food.png",
            name:"Yam",
            description:"Whales and darkness moving form cattle",
            price:"$32"
        },
        {
            image:"/food.png",
            name:"Beans",
            description:"Whales and darkness moving form cattle",
            price:"$32"
        },
        {
            image:"/food.png",
            name:"Ofe Akwu",
            description:"Whales and darkness moving form cattle",
            price:"$32"
        },
     ];
     return foods;
  }
  return (
    <section className="menu" id="menu">
		<div className="center-text">
			<h3>Food Menu</h3>
			<h2>Delicious food</h2>
		</div>

          <div className="menu-content">
              {listOfFoods().map((food,index) => (
                  <div className="box" key={index}>
                      <div className="box-content">
                          <div className="box-img">
                              <Image src={food.image} alt='' className="box-img img" width={164} height={164} />
                          </div>

                          <div className="box-text">
                              <h4>{food.name}</h4>
                              <p>{food.description}</p>
                              <h6>{food.price}</h6>
                          </div>
                      </div>
                  </div>
              ))}
          </div>

		<div className="box-btn">
			<a href="#" className="btn">About Us</a>
		</div>
	</section>
  )
}

export default FoodMenu
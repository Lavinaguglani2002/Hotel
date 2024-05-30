import React from 'react'
import CategoryMenu from '../components/CategoryMenu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'
import Navbar from '../Pages/Navbar'
const Menu = () => {
  return (

<div>
<Navbar/>
<CategoryMenu/>
<FoodItems/>
<Cart/>
</div>

)
}

export default Menu
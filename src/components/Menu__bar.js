import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { FaCartPlus, FaHeart} from 'react-icons/fa';
import { FiMenu} from 'react-icons/fi';

const Menu__bar = () => {

    const [mobile, setMobile] = useState(false)

    const options = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'two', label: 'Two' },
        { value: 'two', label: 'Two' },
        { value: 'two', label: 'Two' },
        { value: 'two', label: 'Two' },
        { value: 'two', label: 'Two' },
        { value: 'two', label: 'Two' },
      ];
  return (
    <div className='menu__bar'>
        <div className="container row">
            <div className="col-1 row">
                    <Dropdown options={options} placeholder="Category" />
                    <ul className={mobile ? 'show__menu' : 'hide__menu'} onClick={()=>setMobile(false)} >
                        <li><NavLink to={'/'}>Home</NavLink> </li>
                        <li><NavLink to={'/shop'}>Shop</NavLink> </li>
                        <li><NavLink to={'/shop__detail'}>Shop Detail</NavLink></li>
                        <li><NavLink to={'/pages'}>Pages</NavLink></li>
                        <li><NavLink to={'/contact'}>Contact</NavLink></li>
                    </ul>
            </div>
            <div className="col-2">
                <div className="icon row">
                    <div className="heart__icon row">
                    <FaHeart/>
                    <span>0</span>
                    </div>
                    <div className="cart__icon row">
                    <FaCartPlus/>
                    <span>0</span>
                    </div>
                </div>
                <div className='menu__icon'>
                    <FiMenu onClick={()=>setMobile(!mobile)}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Menu__bar
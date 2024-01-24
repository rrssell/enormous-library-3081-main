import React, { useState } from 'react'

import Styles from"./Navbar.module.css";
import search_logo from "../NavLogos/search.png"
import arrow from "../NavLogos/arrow.png";
import search2 from "../NavLogos/download.png";
import msg from "../NavLogos/msg.png";
import bell from "../NavLogos/bell.png";
import sell from "../NavLogos/sell.png";
import {Link, useNavigate} from "react-router-dom"
import Dropdown from './Dropdown';
const Navbar = () => {
  const navigate=useNavigate();
  const [show, setShow] = useState(false);
 
  return (
    <div className={Styles.navbar}>
        <div className={Styles.nav1}>
            <div className={Styles.n1}>
                <img width='50px' height='35px'
                src="https://icones.pro/wp-content/uploads/2021/05/icone-globe-jaune.png" alt="" 
                onClick={()=>navigate("/")} />
            </div>
              <div className={Styles.inp1}>
                <div className={Styles.slogo}>
                  <img width='30px' height='30px'
                  src={search_logo}  />
                </div>
                <input className={Styles.s1}   />
                <select>
                  <option><h5>Manila</h5></option>
                  <option><h5>Navotas</h5></option>
                  <option><h5>Malabon</h5></option>
                  <option><h5>Caloocan</h5></option>
                  </select>
                {/* <img width='30px' height='30px' src={arrow} /> */}
             </div>
            <div className={Styles.inp2}>
              <input className={Styles.s2} placeholder='WHAT ARE YOU LOOKING FOR?'/>
  
            </div>
            <div className={Styles.last}>
              <div>
                <select>
                  <option><h5>ENGLISH</h5></option>
                  <option><h5>TAGALOG</h5></option>

                </select>
                </div>
            {/* <div className={Styles.a}><img width='30px' height='30px' src={arrow} /></div> */}
            <div className={Styles.b}><img width='30px' height='30px' src={msg} /></div>
            <div className={Styles.c}><img width='30px' height='30px' src={bell} /></div>
            <div className={Styles.d}><h5 onClick={()=>navigate("/signin")}>LOGIN</h5></div>
            <div className={Styles.e}><img src={sell} onClick={()=>navigate("/sell")} width='90px' height='70px'/></div>
            </div>
        </div>
            <div className={Styles.nav2}>
            <div className={Styles.nav2a}>
            <div className={Styles.nav2a1}><h6>ALL CATEGORIES</h6></div>
            <div className={Styles.a}>
            <img className={Styles.arrowicon} width='40px' height='30px' src={arrow }onClick={()=>{
             
                setShow(!show);
              
              console.log(show);
              }}/>
           

            
            </div>
              </div>
              <div className={Styles.nav2b}>
         <Link to ="/cars">Cars</Link>
         <Link to ="/motarcycles">Motorcycles</Link>
         <Link to ="/mobiles">Mobile Phones</Link>
         <Link to ="/forsale">Properties</Link>
         <Link to ="/scooters">Scooters</Link>
         <Link to ="/commercial">Commercial</Link>       
         <Link to ="/forrent">Furnitures</Link>


              </div>
            </div>

            <div className={show? `${Styles.dds}` : `${Styles.dd}`} >
            {/* <div className={Styles.dd}> */}
           <div><h4><a href="#">OLX Autos(Cars)</a></h4>
           <h4><a href="#">Properties</a></h4>
           <p><a href="#">For Sale: Houses & Aparmments</a></p>
           <p><a href="#">For Rent: Houses & Apartments</a></p>
           <p><a href="#">Lands & Plots</a></p>
           <p><a href="#">For Rent: Shops & Offices</a></p>
           <p><a href="#">For Sale: Shops & Offices</a></p>
           <p><a href="#">PG & Guest Houses</a></p>
           <p> </p>
           <p></p>

           <h4><a href="#">Mobiles</a></h4>
           <p><a href="#">Mobile Phones</a></p>
           <p><a href="#">Accessories</a></p>
           <p><a href="#">Tablets</a></p>
           </div>
            <div>
            <h4><a href="#">Jobs</a></h4>
           <p><a href="#">Data entry & Back office</a></p>
           <p><a href="#">Sales & Marketing</a></p>
           <p><a href="#">BPO & Telecaller</a></p>
           <p><a href="#">Driver</a></p>
           <p><a href="#">Office Assistant</a></p>
           <p><a href="#">Delivery & Collection</a></p>
           <p><a href="#">Teacher</a></p>
           <p><a href="#">Cook</a></p>
           <p><a href="#">Receptionist & Front office</a></p>
           <p><a href="#">Operator & Technician</a></p>
           <p><a href="#">IT Engineer & Developer</a></p>
           <p><a href="#">Hotel & Travel Executive</a></p>
           <p><a href="#">Accountant</a></p>
           <p><a href="#">Designer</a></p>
           <p><a href="#">Other Jobs</a></p>

           <h4><a href="#">Bikes</a></h4>
           <p><a href="#">Motorcycles</a></p>
           <p><a href="#">Scooters</a></p>
           <p><a href="#">Spare Parts</a></p>
           <p><a href="#">Bicycles</a></p>
            </div>
            <div>
            <h4><a href="#">Electronics & Appliances</a></h4>
                <p><a href="#">TVs, Video - Audio</a></p>
                <p><a href="#">Kitchen & Other Appliances</a></p>
                <p><a href="#">Computers & Laptops</a></p>
                <p><a href="#">Cameras & Lenses</a></p>
                <p><a href="#">Games & Entertainment</a></p>
                <p><a href="#">Fridges</a></p>
                <p><a href="#">Computer Accessories</a></p>
                <p><a href="#">Hard Disks, Printers & Monitors</a></p>
                <p><a href="#">ACs</a></p>
                <p><a href="#">Washing Machines</a></p>


                <h4><a href="#">Commercial Vehicles & Spares</a></h4>
                <p><a href="#">Commercial & Other Vehicles</a></p>
                <p><a href="#">Spare Parts</a></p>


                <h4><a href="#">Furniture</a></h4>
                <p><a href="#">Sofa & Dining</a></p>
                <p><a href="#">Beds & Wardrobes</a></p>
                <p><a href="#">Home Decor & Garden</a></p>
                <p><a href="#">Kids Furniture</a></p>
                <p><a href="#">Other Household Items</a></p>
            </div>
            <div>
            <h4><a href="#">Fashion</a></h4>
                <p><a href="#">Men</a></p>
                <p><a href="#">Women</a></p>
                <p><a href="#">Kids</a></p>
                <p><a href="#"></a></p>
                <p><a href="#"></a></p>

                <h4><a href="#">Books, Sports & Hobbies</a></h4>
                <p><a href="#">Books</a></p>
                <p><a href="#">Gym & Fitness</a></p>
                <p><a href="#">Musical Instruments</a></p>
                <p><a href="#">Sports Equipment</a></p>
                <p><a href="#">Other Hobbies</a></p>

                <h4><a href="#">Pets</a></h4>
                <p><a href="#">Fishes & Aquarium</a></p>
                <p><a href="#">Pet Food & Accessories</a></p>
                <p><a href="#">Dogs</a></p>
                <p><a href="#">Other Pets</a></p>
                <p><a href="#"></a></p>

                <h4><a href="#">Services</a></h4>
                <p><a href="#">Electronics & Computer</a></p>
                <p><a href="#">Education & Classes</a></p>
                <p><a href="#">Drivers & Taxi</a></p>
                <p><a href="#">Health & Beauty</a></p>
                <p><a href="#">Other Services</a></p>
                </div>
    </div>
   
    </div>
  )
}

export default Navbar
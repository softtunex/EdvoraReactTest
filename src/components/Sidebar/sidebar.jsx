import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../imgs/logo.png"
import { SidebarData } from "../../Data/Data";
import {Link} from "react-router-dom"
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {
    const [selected, setSelected] = useState(0)
    const [expanded, setExpaned] = useState(true)
    const sidebarVariants = {
      true: {
        left : '0'
      },
      false:{
        left : '-60%'
      }
    }
  return (
    <div>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
      <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      <div className="logo">
        <img src={Logo} alt="" />
        
      </div>
      {/* Menu */}
      <div className="menu">
          {SidebarData.map((item, index)=>{
              return(
                  <Link to={item.to} className={selected===index?'menu-item active' : 'menu-item'} 
                  key={index}
                  onClick={()=>setSelected(index)}>
                    
                      <item.icon/>
                      {item.heading}
                  </Link>
      
              )
          })}
          <div className="menu-item">
          </div>
      </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;

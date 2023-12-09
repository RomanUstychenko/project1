// import {  getAllUser } from "redux/user/user-selector";
import {  useDispatch,useSelector } from "react-redux";
import React, { useEffect } from "react";
import {  allUsers } from "redux/user/user-operation";
// import LiveListUser from "components/Live/LiveListUser/LIveListUser";
import { nanoid } from 'nanoid';
import { getSections } from "redux/sections/sections-selector"
import { fetchSections } from "redux/sections/sections-operation"
import LiveItemsSections from "components/Live/LiveItemsSections/LiveItemsSections";
import { useLocation } from 'react-router-dom'
import {  fetchItemsLive } from "redux/items/items-operation"
import { getItemsLive } from 'redux/items/items-selector';
import { List, Menu } from "./LivePage.styled";


export default function LivePage() {


  const location = useLocation();
  const category = (location.pathname.split('/')[2])
  
    const dispatch = useDispatch();
    const sections = useSelector(getSections);
    const items = useSelector(getItemsLive);

    

console.log(sections)

console.log(items)

    useEffect(() => {
      
        dispatch(allUsers())
        if (category) {
          dispatch(fetchItemsLive(category));
          dispatch(fetchSections(category));
          
        }
        
        
      }, 

      [dispatch, category])


  
  return (
    <>
    
    {/* <ul key={nanoid()}>
          {users.map(user =>
           <LiveListUser
           user={user}
          //  sections={sections}
           ></LiveListUser>
            ) } 
    </ul> */}
    <List key={nanoid()}>
      <Menu>Menu</Menu>
       {sections.map(section =>
       
        <LiveItemsSections
        
        key={nanoid()}
        section={section}
        items={items.filter(i => 
          i.section === section._id)}
        item={items}
        />  )
}
    </List>
      </>
  )
}

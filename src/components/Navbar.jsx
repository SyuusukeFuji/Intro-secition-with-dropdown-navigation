import React,{useEffect, useState, useRef} from "react";
import snapLogo from "../assets/images/logo.svg";
import todoIcon from "../assets/images/icon-todo.svg";
import calendarIcon from "../assets/images/icon-calendar.svg";
import remindersIcon from "../assets/images/icon-reminders.svg";
import planningIcon from "../assets/images/icon-planning.svg";
import arrowUp from "../assets/images/icon-arrow-up.svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";

function Navbar(){
    const[arrowsUp, setArrowsUp]=useState([true, true]);
    const[openDropdown, setOpenDropdown]= useState([false, false]);
    const featuresDRef= useRef(null);
    const companyDRef= useRef(null);

 
    function dropdownControl(index){
        const dropDowns=[featuresDRef.current, companyDRef.current];
        
            console.log("the "+dropDowns[index]+" dropdown button has been clicked!");

            if(dropDowns[index]){
                const newOpenDropDown= [...openDropdown];
                const newArrowsUp=[...arrowsUp];

                if(!newOpenDropDown[index]){
                    dropDowns[index].classList.add("show-dropdown");
                    newOpenDropDown[index]=true;
                    
                    newArrowsUp[index]=false;
                    //console.log("boolean drop is: " +openDropdown[index]);
                }else{
                    dropDowns[index].classList.remove("show-dropdown");
                    //console.log("boolean drop is: " +openDropdown[index]);
                    newOpenDropDown[index]=false;
                    newArrowsUp[index]=true;
                }
    
                setOpenDropdown(newOpenDropDown);
                setArrowsUp(newArrowsUp);

            }

            

    
    }

    useEffect(()=>{
        console.log("Dropdown state changed:", openDropdown); console.log("Arrow state changed:", arrowsUp);
    },[openDropdown, arrowsUp])

    return(
        <nav>
            <ul id="left-half-nav" className="nav-wrap">
                <li>
                    <img id="snap-logo" src={snapLogo} alt="snap's logo" />
                </li>
                <li>
                    <section className="dropdown">
                        <button type="button" className="button-dropdown" onClick={(event)=>  dropdownControl(0)}>Features 
                            <img  className="arrows" src={arrowsUp[0]==true ? arrowDown : arrowUp} alt="arrow icon" /></button>
                        <section id="features-dropdown" ref={featuresDRef} className="dropdown-content">
                            <a className="item-dropdown" href="#">
                                <img src={todoIcon} alt="a todo list tooned" className="icons" /> Todo List</a>
                            <a className="item-dropdown" href="#">
                                <img src={calendarIcon} alt="a calendar tooned" className="icons"/> Calendar</a>
                            <a className="item-dropdown" href="#">
                                <img src={remindersIcon} alt="a reminders tooned" className="icons"/> Reminders</a>
                            <a className="item-dropdown" href="#">
                                <img src={planningIcon} alt="planning tooned" className="icons"/> Planning</a>
                        </section>
                    </section>
                    
                </li>
                <li>
                    <section className="dropdown">
                        <button type="button" className="button-dropdown" onClick={(event)=> dropdownControl(1)}>Company 
                            <img className="arrows" src={arrowsUp[1] ? arrowDown : arrowUp} alt="arrow icon" /></button>
                        <section id="company-dropdown" ref={companyDRef}  className="dropdown-content">
                            <a className="item-dropdown" href="#">History</a>
                            <a className="item-dropdown" href="#">Our Team</a>
                            <a className="item-dropdown" href="#">Blog</a>
                        </section>
                    </section>

                </li>
                <li>
                    <a href="#">Careers</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>

            <ul id="right-half-nav" className="nav-wrap" >
                <li>
                    <a id="a-login" href="#">Login</a>
                </li>
                <li>
                    <a id="a-reg" href="#">Register</a>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar;
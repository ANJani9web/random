import React, { useState } from 'react'
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
export default function About() {

  const [myStyle,setMyStyle]=useState({
               color:'white',
               backgroundColor:'black'
  })
  
  const[btntext,setBtnText]=useState("Enable dark mode");

  let toggleStyle=()=>{
    if(myStyle.color==='white'){
      setMyStyle({
        color:'black',
        backgroundColor:'white'
      })
      setBtnText("Enable Dark Mode");
    }

    else{

      setMyStyle({
        color:'white',
        backgroundColor:'black',
        border: '1px solid white'
      })
      setBtnText("Enable Light Mode");
    }
  }
  

  return (
    <>
  <div className="container" style={myStyle}>
    
    <h2 className="my-2 ">About Us</h2>
    

    <MDBAccordion initialActive={1} style={myStyle}>

      <MDBAccordionItem collapseId={1} headerTitle='Accordion Item #1' style={myStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
        within the <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>

      <MDBAccordionItem collapseId={2} headerTitle='Accordion Item #2'style={myStyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
        within the <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>

      <MDBAccordionItem collapseId={3} headerTitle='Accordion Item #3'style={myStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
        within the <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>
    </MDBAccordion>
    

<div className="container">
  <button className="btn btn-primary my-3" onClick={toggleStyle}>{btntext}</button>
</div>

</div>
</>
    


   

  )
}

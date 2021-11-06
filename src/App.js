import React from 'react';

import Scard from  './card';
const brand="http://tny.im/qok"

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const Hello=()=>{
  return( <React.Fragment>
    <Main/>
    <Descp/>
    <Concept/>
    <About/>
    <Footer/>
    

    </React.Fragment>
   
  )
}


  
  const nav1={
    nav:"Queries",
    href:"#queries"
    }
  const about={
    nav:"about",
    href:"#about"
  }
  const contact={
    nav:"contact",
    href:"#contact"
  }
    const Navlinks=(props)=>{
      const {Nav,Href}=props;
      
      return(<React.Fragment><li className="nav-item ">
                          <a className="nav-link active links  "  aria-current="page"  href={Href}>{Nav}</a>
                        </li>
          </React.Fragment>)         
    }
    


const decptext="SRI CHAKRA CONSTRUCTIONS"
const web={
  icon:"fas fa-globe" ,
    name:"Web",
    link:"https://Climateb.com"
}
const linkedin={
  icon:"fas fa-phone-square-alt",
  name:"Telephone",
  link:"tel:+9842175895"
}
const mail={
    icon:"fas fa-envelope",
    name:"Mail",
    link:"elango2100@gmail.com"

}
////////////////Main/////////////////////////////

function Main(){

  return (
     <div>

      <section id="head">
      
          <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
              <div className="container-fluid">
                <a className="navbar-brand" href="#"><span  style={{fontSize:"35px",fontFamily: "'Bree Serif', serif "}}><img style={{height:"100px"}} src={brand}/></span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarnav" aria-controls="navbarnav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarnav">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    
                   <Navlinks Nav={nav1.nav} Href={nav1.href} />
                  <Navlinks Nav={about.nav} Href={about.href}/>
                  <Navlinks Nav={contact.nav} Href={contact.href}/>                
                  </ul>
                </div>
              </div>
            </nav>
            </section>
</div>
)
   
}
const Concept=()=>{
    return <section className="concept1" >
        <em className="concept" style={{color:"#dc3545",fontSize:"2.5rem"}}>Construction | Interiors |Contract</em>
        <br></br>
<br></br>
<br></br>
<br></br>
    </section>
}

////////////////////////////columns//////////////////////////

const About=()=>{
  return (<section id="about">
    <Scard/>
    <br/>
  <br/>
  </section>
  )
}




////////////////////////////////////////////
///////////////////////descp/////////////////////////

const Descp=()=>{


return <div>  <section id="main">
  <p class="text">{decptext}</p>
  

</section>

</div>}
//////////////////////footer//////////////////////

const Footer=()=>{
  
  return <section id="contact">
  <div class="footer" >
      <footer>
          <p style={{fontWeight: "bolder"}}>   CONTACT US:</p>

          <Contact Icon={web.icon} Name={web.name} Link={web.link}/>
          <Contact Icon={linkedin.icon} Name={linkedin.name} Link={linkedin.link}/>
          <Contact Icon={mail.icon} Name={mail.name} Link={mail.link}/>
          <br/>
          <br/>
          <br/>
          <Input/>
          <Address/>
      </footer>
  </div>
</section>

}

function Contact(props){
  const {Icon,Name,Link} = props;
return <React.Fragment><span class="icons"><i class={Icon} style={{paddingRight:"5px"}}></i><a class="contact" href={Link} target="__blank"><em>{Name}</em></a></span>

</React.Fragment>}

function Input(){
    return <section id="queries">
        <form action="mailto:elangoprasanna2000@gmail.com">
            <div>
        <label>Queries:</label>
      
        </div>
        <br/>
        
        <textarea placeholder="Enter queries" style={{padding:"5px"}}></textarea>
        <div>
        <button class="btn form btn-light" type="submit">Submit</button></div>
        </form>
        <br/>
    
    </section>
}

function Address(){
  return <section id="address">
    <p><b><em>Address of office:</em></b></p>
    <br/>
    <br/>
 <p>H.A Khan Road, Lady Doak College Back Gate,</p> 
  <p>  Chinna Chokkikulam, Madurai-625001</p>
  <br/>
  <p><b>Phone no:</b><em>+91 9842175895</em></p>
  <br/>
  <section id="cpoyright" style={{textAlign:"center"}}>
  <p><strong>© 2014-2021</strong></p>
  </section>
  </section>
}

  export default Hello;
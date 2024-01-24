import React from 'react'

const Footer = () => {
    const subscribe=()=>{
        alert("You have successfully subscribed!")
    }
    return (
    <footer>
    <div className="content">
      <div className="top">
        <div className="logo-details">
        <i className="fas fa-cloud"></i>
          <span className="logo_name"> JalilWeather</span>
        </div>
        <div className="media-icons">
          <a href="https://github.com/JalilElmehdi"><i className="fab fa-git"></i></a>
          <a href="https://github.com/JalilElmehdi"><i className="fab fa-twitter"></i></a>
          <a href="https://github.com/JalilElmehdi"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/el-mehdi-jalil-2a4171295/"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div className="link-boxes">
        
        <ul className="box">
          <li className="link_name">Services</li>
          <li><a href="#">Weather</a></li>
          
          
        </ul>
        <ul className="box">
          <li className="link_name">Account</li>
          <li><a href="https://www.linkedin.com/in/el-mehdi-jalil-2a4171295/">Linkedin</a></li>
          <li><a href="https://github.com/JalilElmehdi">Github</a></li>
          
        </ul>
        <ul className="box">
          <li className="link_name">Languages</li>
          <li><a href="https://github.com/JalilElmehdi">React Js</a></li>
          <li><a href="https://github.com/JalilElmehdi">JavaScript</a></li>
        
        </ul>
        <ul className="box input-box">
          <li className="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email" /></li>
          <li><input type="button" value="Subscribe" onClick={subscribe}/></li>
        </ul>
      </div>
    </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright © 2024 <a href="https://github.com/JalilElmehdi">JALILELMEHDI.</a>All rights reserved</span>
        
      </div>
    </div>
  </footer>
    )
}

export default Footer
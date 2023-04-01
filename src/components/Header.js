import React from 'react'

function Header() {
  return (
      <header id="header">
          <div className="container">
              <img src={require("../img/redux-logo.svg").default} alt="logo" className="logo" />
              <div className="flex items-center">
                  <a className="text-white min-w-[50px] font-medium" href="#">Home</a>
                  
                  <button className="log-btn btn">Login</button>
              </div>
          </div>
      </header>
  )
}

export default Header
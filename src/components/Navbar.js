import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
   state = {
      isOpen: false
   }

   handleToggle = () => {
      this.setState({isOpen:!this.state.isOpen})
   }

   render() {
      return (
         <nav className="navbar">
            <div>
               <Link to="/">
                  {/* <img src="" alt=""/> */}
               </Link>
               <button className="nav-btn" onClick={this.handleToggle}>btn</button>
            </div>
            <ul className={this.state.isOpen ? `nav-links nav-show` : `nav-links`}>
               <li><Link to="/">home</Link></li>
               <li><Link to="/games">games</Link></li>
            </ul>
         </nav>
      )
   }
}

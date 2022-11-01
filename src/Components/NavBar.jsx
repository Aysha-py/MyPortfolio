import React, { useState, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';




const NavBar = () => {
	
	  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

	
	return (
		<nav>
				<div id='nav-container'>
		
					<div className='nav-logo'>
						<p>Aysha</p>
				</div>
				{
					width>=699 ? <div className='nav-list'>
					<ul>
						<li>01. Home</li>
						<li>02. Get Familiar</li>
						<li>03. Projects</li>
							<li>04. Contact</li>
					</ul>
				</div>
						:
						<div className='navlist-mobile'>
							<GiHamburgerMenu/>
						</div>
				}
				<div className='nav-button'>
					
					<button>Resume</button>
					
				</div>
			
				</div>
			</nav>
		
		)
}

export default NavBar

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick} role="button">
            <i className={click ? 'fas fa-door-open' : 'fas fa-door-closed'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/armor-sets' className='nav-links' onClick={closeMobileMenu}>
                Armor Sets
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/bargainer-statues' className='nav-links' onClick={closeMobileMenu}>
                Bargainer Statues
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/bosses' className='nav-links' onClick={closeMobileMenu}>
                Bosses
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/bridles-saddles' className='nav-links' onClick={closeMobileMenu}>
                Bridles & Saddles
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/caves-bubblefrog' className='nav-links' onClick={closeMobileMenu}>
                Caves {`{ + bubblefrog }`}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/characters' className='nav-links' onClick={closeMobileMenu}>
                Characters
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/chasms' className='nav-links' onClick={closeMobileMenu}>
                Chasms
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/energy-wells' className='nav-links' onClick={closeMobileMenu}>
                Energy Wells
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/enhancements' className='nav-links' onClick={closeMobileMenu}>
                Enhancements (armor sets)
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/great-fairy-fountains' className='nav-links' onClick={closeMobileMenu}>
                Great Fairy Fountains
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/health' className='nav-links' onClick={closeMobileMenu}>
                Health
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/hudsons-signs' className='nav-links' onClick={closeMobileMenu}>
                Hudson's Signs
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/hyrule-compendium' className='nav-links' onClick={closeMobileMenu}>
                Hyrule Compendium
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/korok-seeds' className='nav-links' onClick={closeMobileMenu}>
                Korok Seeds
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/lightroot-depths-map' className='nav-links' onClick={closeMobileMenu}>
                Lightroot (depths map)
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/main-quests' className='nav-links' onClick={closeMobileMenu}>
                Main Quests
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/map-skyview-towers' className='nav-links' onClick={closeMobileMenu}>
                Map / Skyview Towers
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/memories-dragon-tears' className='nav-links' onClick={closeMobileMenu}>
                Memories (Dragon Tears)
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/monster-medals' className='nav-links' onClick={closeMobileMenu}>
                Monster Medals
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/named-locations' className='nav-links' onClick={closeMobileMenu}>
                Named Locations
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/old-maps' className='nav-links' onClick={closeMobileMenu}>
                Old Maps
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/purah-pad' className='nav-links' onClick={closeMobileMenu}>
                Purah Pad
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/recipes' className='nav-links' onClick={closeMobileMenu}>
                Recipes
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sages-will' className='nav-links' onClick={closeMobileMenu}>
                Sage's Will
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/schematics' className='nav-links' onClick={closeMobileMenu}>
                Schematics
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/shrine-quests' className='nav-links' onClick={closeMobileMenu}>
                Shrine Quests
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/side-adventures' className='nav-links' onClick={closeMobileMenu}>
                Side Adventures
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/side-quests' className='nav-links' onClick={closeMobileMenu}>
                Side Quests
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sky-shrines-chests' className='nav-links' onClick={closeMobileMenu}>
                Sky Shrines {`{ + chests }`}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/stables' className='nav-links' onClick={closeMobileMenu}>
                Stables
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/stamina' className='nav-links' onClick={closeMobileMenu}>
                Stamina
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/surface-shrines-chests' className='nav-links' onClick={closeMobileMenu}>
                Surface Shrines {`{ + chests }`}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/towns-settlements' className='nav-links' onClick={closeMobileMenu}>
                Towns & Settlements
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/wells' className='nav-links' onClick={closeMobileMenu}>
                Wells
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/zonai-dispensers' className='nav-links' onClick={closeMobileMenu}>
                Zonai Dispensers
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;

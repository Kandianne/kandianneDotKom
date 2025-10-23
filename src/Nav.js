import './Nav.css';
import { IoBuild } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { HiDesktopComputer } from "react-icons/hi";
import { Link } from 'react-router-dom';

function Nav() {

  return (
    <div className="Nav">
        <div className='Site-name'>Kandianne Pierre</div>
        <div className="Nav-container">
            <Link className="Nav-item" to={'/software'}>
                <HiDesktopComputer className="Page-logo"/>
                Software
            </Link>
            <Link className="Nav-item" to={'/skills'}>
                <IoBuild className="Page-logo"/>
                Skills
            </Link>
            <Link className="Nav-item" to={'/design'}>
                <GrLanguage className="Page-logo"/>
                Design
            </Link>
        </div>
    </div>
  );
}

export default Nav; 
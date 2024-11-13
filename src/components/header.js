// import React from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css';


// class Header extends React.Component {
//   render() {
//     return (

//       <header className="header">
//         <div className="div">
//           <nav className="nav">
//             <h6 className='h6'> Deva P </h6>
//             <ul className="ul">
//               {/* <li><a href="#" id='home'>Home</a></li> */}
//               <li><a href="/about" >About</a></li>
//               <li><a href="#">Skills</a></li>
//               <li><a href="#">Projects</a></li>
//               <li><a href="#">Contact</a></li>
//             </ul>
//           </nav>
//         </div>
//       </header>
//     );
//   }
// }

// export default Header;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class Header extends React.Component {
  scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    return (
      <header className="header">
        <div className="div">
          <nav className="nav">
            <h6 className='h6'> Deva P </h6>
            <ul className="ul">
              <li><a href="#" onClick={() => this.scrollToSection('about')}>About</a></li>
              <li><a href="#" onClick={() => this.scrollToSection('skills')}>Skills</a></li>
              <li><a href="#" onClick={() => this.scrollToSection('projects')}>Projects</a></li>
              <li><a href="#" onClick={() => this.scrollToSection('contact')}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
 






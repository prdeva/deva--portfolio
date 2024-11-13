import React from 'react';
import emailjs from '@emailjs/browser';

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import emailjs from '@emailjs/browser';

import './style.css';
import './content.css';
import prof from './prof.JPG';
import { FaGithubSquare, FaHtml5, FaCss3Alt, FaReact, FaJava, FaAws, FaGitAlt, FaBootstrap, FaGit, FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SiLeetcode, SiMongodb, SiJavascript, SiMysql, SiVuedotjs, SiVisualstudiocode } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import img1 from './imgg1.png';
import img2 from './imgg2.png';
import img3 from './imgg3.png';
import img4 from './imgg4.png';
import img5 from './imgg5.png';
import img6 from './imgg6.png';
import img7 from './imgg7.png';
import img8 from './imgg8.png';
import img9 from './imgg9.png';
import img10 from './imgg10.png';
// import img1 from './imgg1.png';


class Content extends React.Component {
    sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',  // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID',  // Replace with your EmailJS template ID
      e.target,
      'YOUR_USER_ID'       // Replace with your EmailJS user ID
    ).then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
    }, (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again later.');
    });

    e.target.reset(); // Reset the form after submission
  };

  render() {
    return (
     <div className='cont'>
        <div className='container'>
            <div className='row'>
                <div className='pro'>
                <img src={prof} alt="prof" className="prof" />
                </div>
                <div className='hello'>
                    <h4>Hello!</h4>
                    <h4>I'm Deva,</h4>
                    <h5>Full Stack Developer,</h5>
                    <p>I'm an enthusiastic software developer, specializing in full stack development. I enjoy creating practical solutions for real-world problems, constantly exploring new technologies to enhance my skills.</p>
                </div>
            </div>
            <a href="https://drive.google.com/file/d/1gzPId9csWoUs-Ya9GUqouZfpRjnEh5Vt/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
            <button className='resume'>Resume</button>
          </a>
        </div>

        <div id='about' className='about' >
          <div className='abt'>
            <h3 className='abt0' >About Me</h3>
            <div className='cont1'>
              <p className='abt1'>Hello! I'm Deva, a passionate full-stack developer from Cuddalore, currently pursuing my B.Tech in Information Technology at Hindusthan College of Engineering and Technology, Coimbatore. With a strong foundation in both front-end and back-end development, I enjoy building dynamic, user-friendly web applications. My experience ranges from designing responsive websites to developing robust server-side functionality, ensuring seamless performance across the stack. I'm always eager to learn new technologies and take on challenges that push the boundaries of innovation.</p>
              <div className='ic1'>
                <a href="https://github.com/prdeva" target="_blank" rel="noopener noreferrer">
                  <FaGithubSquare className='icon' />
                </a>
                <a href="https://www.linkedin.com/in/deva-p-90a674245" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin className='icon'/>
                </a>
                <a href="https://leetcode.com/u/prdeva12032004/" target="_blank" rel="noopener noreferrer">
                  <SiLeetcode className='icon'/>
                </a>
                <a href="https://www.instagram.com/_d.e_.v.a_?igsh=MTJzbXljODhpbzVqbQ==" target="_blank" rel="noopener noreferrer">
                  <FaInstagramSquare className='icon'/>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id='skills' className='skill'>
          <div className='ski'>
            <h2 className='ski1'>Skills</h2>

            {/* Front-End Skills */}
            <h4>Front-End</h4>
            <div className='skill-icons'>
              <FaHtml5 className='skill-icon' title="HTML5" />
              <FaCss3Alt className='skill-icon' title="CSS3" />
              <SiJavascript className='skill-icon' title="JavaScript" />
              <FaReact className='skill-icon' title="React" />
              <FaBootstrap className='skill-icon' title="Bootstrap" />
            </div>

            {/* Back-End Skills */}
            <h4>Back-End</h4>
            <div className='skill-icons'>
              <FaJava className='skill-icon' title="Java" />
              <SiMysql className='skill-icon' title="MySQL" />
              <SiMongodb className='skill-icon' title="MongoDB" />
              <FaAws className='skill-icon' title="AWS" />
            </div>

            {/* Tools */}
            <h4>Tools</h4>
            <div className='skill-icons'>
              <FaGitAlt className='skill-icon' title="Git" />
              <FaGithub className='skill-icon' title="GitHub" />
              <SiVisualstudiocode className='skill-icon' title="VS Code" />
            </div>
          </div>
        </div>

        <div id='projects' className='project'>
  <div className='pro1'>
    <h5>Real-time Character Counter using JavaScript</h5>
    <div className='project-showcase'>
    <img src={img1} alt="prof" className="project-img" />
      <div className='project-buttons'>
        <a href="https://prdeva.github.io/real-time-character-counter-using-java-script/" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
        <a href="https://github.com/prdeva/real-time-character-counter-using-java-script.git" target="_blank" rel="noopener noreferrer" className='btn btn-secondary'>View Code</a>
      </div>
    </div>
  </div>
  <div className='pro2'>
    <h5>Student-Edu-Track-System-using-reactJs</h5>
    <div className='project-showcase'>
    <img src={img2} alt="prof" className="project-img" />
      <div className='project-buttons'>
        <a href="https://prdeva.github.io/Student-Edu-Track-System-using-reactJs/" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
        <a href="https://github.com/prdeva/Student-Edu-Track-System-using-reactJs.git" target="_blank" rel="noopener noreferrer" className='btn btn-secondary'>View Code</a>
      </div>
    </div>
  </div>
  <div className='pro3'>
    <h5>Loan-Calculator-using-html-css-javascript</h5>
    <div className='project-showcase'>
    <img src={img3} alt="prof" className="project-img" />
      <div className='project-buttons'>
        <a href="https://prdeva.github.io/Loan-Calculator-using-html-css-javascript/" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
        <a href="https://github.com/prdeva/Loan-Calculator-using-html-css-javascript.git" target="_blank" rel="noopener noreferrer" className='btn btn-secondary'>View Code</a>
      </div>
    </div>
  </div>
  <div className='pro4'>
    <h5>Image-Slider-using-html-css-javascript</h5>
    <div className='project-showcase'>
    <img src={img4} alt="prof" className="project-img" />
      <div className='project-buttons'>
        <a href="https://prdeva.github.io/Image-Slider-using-html-css-javascript/" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
        <a href="https://github.com/prdeva/Image-Slider-using-html-css-javascript.git" target="_blank" rel="noopener noreferrer" className='btn btn-secondary'>View Code</a>
      </div>
    </div>
  </div>
  <div className='pro5'>
    <h5>NEW-YEAR-COUNTDOWN-USING-HTML-CSS-JAVASCRIPT</h5>
    <div className='project-showcase'>
    <img src={img5} alt="prof" className="project-img" />
      <div className='project-buttons'>
        <a href="https://prdeva.github.io/NEW-YEAR-COUNTDOWN-USING-HTML-CSS-JAVASCRIPT/" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
        <a href="https://github.com/prdeva/NEW-YEAR-COUNTDOWN-USING-HTML-CSS-JAVASCRIPT.git" target="_blank" rel="noopener noreferrer" className='btn btn-secondary'>View Code</a>
      </div>
    </div>
  </div>
  <div className='pro6'>
  <h5>Age-Calculator-HTML-CSS-JS</h5>
    <div className='project-showcase'>
    <img src={img10} alt="prof" className="project-img" />
      <div className='project-buttons'>
        <a href="https://prdeva.github.io/Age-Calculator-HTML-CSS-JS/" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
        <a href="https://github.com/prdeva/Age-Calculator-HTML-CSS-JS.git" target="_blank" rel="noopener noreferrer" className='btn btn-secondary'>View Code</a>
      </div>
    </div>
  </div>
  <div className='pro7'>
    <h5>Tic-Tac-Toe-using-html-css-javascript</h5>
    <div className='project-showcase'>
    <img src={img7} alt="prof" className="project-img" />
      <div className='project-buttons'>
        <a href="https://prdeva.github.io/Tic-Tac-Toe-using-html-css-javascript/" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
        <a href="https://github.com/prdeva/Tic-Tac-Toe-using-html-css-javascript.git" target="_blank" rel="noopener noreferrer" className='btn btn-secondary'>View Code</a>
      </div>
    </div>
  </div>
  <div className='pro8'>
    <h5>Calculator-using-html-css-javascript</h5>
    <div className='project-showcase'>
    <img src={img8} alt="prof" className="project-img" />
      <div className='project-buttons'>
        <a href="https://prdeva.github.io/Calculator-using-html-css-javascript/" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
        <a href="https://github.com/prdeva/Calculator-using-html-css-javascript.git" target="_blank" rel="noopener noreferrer" className='btn btn-secondary'>View Code</a>
      </div>
    </div>
  </div>  
  {/* <div className='pro9'>
    <h5>Quiz-app-using-HTML-CSS-JS </h5>
    <div className='project-showcase'>
    <img src={img9} alt="prof" className="project-img" />
      <div className='project-buttons'>
        <a href="https://prdeva.github.io/Quiz-app-using-HTML-CSS-JS/" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
        <a href="https://github.com/prdeva/Quiz-app-using-HTML-CSS-JS.git" target="_blank" rel="noopener noreferrer" className='btn btn-secondary'>View Code</a>
      </div>
    </div>
  </div>
  <div className='pro10'>
    <h5>Age-Calculator-HTML-CSS-JS</h5>
    <div className='project-showcase'>
    <img src={img10} alt="prof" className="project-img" />
      <div className='project-buttons'>
        <a href="https://prdeva.github.io/Age-Calculator-HTML-CSS-JS/" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
        <a href="https://github.com/prdeva/Age-Calculator-HTML-CSS-JS.git" target="_blank" rel="noopener noreferrer" className='btn btn-secondary'>View Code</a>
      </div>
    </div>
  </div> */}
  <div className='moreproject'>
  <a href="https://github.com/prdeva" target="_blank" rel="noopener noreferrer">
    <button className='btn btn-primary'>See More Projects</button>
  </a>
</div>
  
</div>
<div id='contact' className='contact-section'>
            <h3>Contact Me</h3>
            {/* <div className='contact-info'>
              <p>If you'd like to get in touch, feel free to send me a message!</p>
              <ul>
                <li><strong>Email:</strong> your-email@example.com</li>
                <li><strong>Phone:</strong> +1 234 567 890</li>
                <li><strong>Location:</strong> Coimbatore, India</li>
              </ul>
            </div> */}

            {/* Contact Form */}
            <form className='contact-form'>
              <div className='form-group'>
                <label for="name">Name:</label>
                <input type="text" id="name" className='form-control' placeholder="Your Name" />
              </div>
              <div className='form-group'>
                <label for="email">Email:</label>
                <input type="email" id="email" className='form-control' placeholder="Your Email" />
              </div>
              <div className='form-group'>
                <label for="message">Message:</label>
                <textarea id="message" className='form-control' rows="5" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className='btn btn-primary'>Send Message</button>
            </form>
          </div>

     </div> 
    );
  }
}

export default Content;


// import React from 'react';
// import emailjs from 'emailjs-com';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css';
// import './content.css';
// import prof from './prof.JPG';
// import { FaGithubSquare, FaHtml5, FaCss3Alt, FaReact, FaJava, FaAws, FaGitAlt, FaBootstrap, FaGit, FaGithub } from "react-icons/fa";
// import { BsLinkedin } from "react-icons/bs";
// import { SiLeetcode, SiMongodb, SiJavascript, SiMysql, SiVuedotjs, SiVisualstudiocode } from "react-icons/si";
// import { FaInstagramSquare } from "react-icons/fa";
// import img1 from './imgg1.png';
// import img2 from './imgg2.png';
// import img3 from './imgg3.png';
// import img4 from './imgg4.png';
// import img5 from './imgg5.png';
// import img6 from './imgg6.png';
// import img7 from './imgg7.png';
// import img8 from './imgg8.png';
// import img9 from './imgg9.png';
// import img10 from './imgg10.png';

// class Content extends React.Component {

//   sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'prdevaaa@gmail.com',  // Replace with your EmailJS service ID
//       'prdevaaa@gmail.com',  // Replace with your EmailJS template ID
//       e.target,
//       'prdevaaa@gmail.com'       // Replace with your EmailJS user ID
//     ).then((result) => {
//         console.log(result.text);
//         alert('Message sent successfully!');
//     }, (error) => {
//         console.log(error.text);
//         alert('Message sent successfully!');
//     });

//     e.target.reset(); // Reset the form after submission
//   };

//   render() {
//     return (
//       <div className='cont'>
//         <div className='container'>
//             <div className='row'>
//                 <div className='pro'>
//                     <img src={prof} alt="prof" className="prof" />
//                 </div>
//                 <div className='hello'>
//                     <h4>Hello!</h4>
//                     <h4>I'm Deva,</h4>
//                     <h5>Full Stack Developer,</h5>
//                     <p>I'm an enthusiastic software developer, specializing in full stack development. I enjoy creating practical solutions for real-world problems, constantly exploring new technologies to enhance my skills.</p>
//                 </div>
//             </div>
//             <a href="https://drive.google.com/file/d/1gzPId9csWoUs-Ya9GUqouZfpRjnEh5Vt/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
//                 <button className='resume'>Resume</button>
//             </a>
//         </div>

//         <div id='about' className='about'>
//           <div className='abt'>
//             <h3 className='abt0'>About Me</h3>
//             <div className='cont1'>
//               <p className='abt1'>Hello! I'm Deva, a passionate full-stack developer from Cuddalore, currently pursuing my B.Tech in Information Technology at Hindusthan College of Engineering and Technology, Coimbatore. With a strong foundation in both front-end and back-end development, I enjoy building dynamic, user-friendly web applications.</p>
//               <div className='ic1'>
//                 <a href="https://github.com/prdeva" target="_blank" rel="noopener noreferrer">
//                   <FaGithubSquare className='icon' />
//                 </a>
//                 <a href="https://www.linkedin.com/in/deva-p-90a674245" target="_blank" rel="noopener noreferrer">
//                   <BsLinkedin className='icon' />
//                 </a>
//                 <a href="https://leetcode.com/u/prdeva12032004/" target="_blank" rel="noopener noreferrer">
//                   <SiLeetcode className='icon' />
//                 </a>
//                 <a href="https://www.instagram.com/_d.e_.v.a_?igsh=MTJzbXljODhpbzVqbQ==" target="_blank" rel="noopener noreferrer">
//                   <FaInstagramSquare className='icon' />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Skills Section */}
//         <div id='skills' className='skill'>
//           <div className='ski'>
//             <h2 className='ski1'>Skills</h2>
//             <h4>Front-End</h4>
//             <div className='skill-icons'>
//               <FaHtml5 className='skill-icon' title="HTML5" />
//               <FaCss3Alt className='skill-icon' title="CSS3" />
//               <SiJavascript className='skill-icon' title="JavaScript" />
//               <FaReact className='skill-icon' title="React" />
//               <FaBootstrap className='skill-icon' title="Bootstrap" />
//             </div>

//             <h4>Back-End</h4>
//             <div className='skill-icons'>
//               <FaJava className='skill-icon' title="Java" />
//               <SiMysql className='skill-icon' title="MySQL" />
//               <SiMongodb className='skill-icon' title="MongoDB" />
//               <FaAws className='skill-icon' title="AWS" />
//             </div>

//             <h4>Tools</h4>
//             <div className='skill-icons'>
//               <FaGitAlt className='skill-icon' title="Git" />
//               <FaGithub className='skill-icon' title="GitHub" />
//               <SiVisualstudiocode className='skill-icon' title="VS Code" />
//             </div>
//           </div>
//         </div>

//         {/* Projects Section */}
//         <div id='projects' className='project'>
//           <div className='pro1'>
//             <h5>Real-time Character Counter using JavaScript</h5>
//             <div className='project-showcase'>
//               <img src={img1} alt="prof" className="project-img" />
//               <div className='project-buttons'>
//                 <a href="https://prdeva.github.io/real-time-character-counter-using-java-script/" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
//                 <a href="https://github.com/prdeva/real-time-character-counter-using-java-script.git" target="_blank" rel="noopener noreferrer" className='btn btn-secondary'>View Code</a>
//               </div>
//             </div>
//           </div>

//           <div className='pro2'>
//             <h5>Student-Edu-Track-System-using-reactJs</h5>
//             <div className='project-showcase'>
//               <img src={img2} alt="prof" className="project-img" />
//               <div className='project-buttons'>
//                 <a href="https://prdeva.github.io/Student-Edu-Track-System-using-reactJs/" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
//                 <a href="https://github.com/prdeva/Student-Edu-Track-System-using-reactJs.git" target="_blank" rel="noopener noreferrer" className='btn btn-secondary'>View Code</a>
//               </div>
//             </div>
//           </div>

//           <div className='pro3'>
//             <h5>Loan-Calculator-using-html-css-javascript</h5>
//             <div className='project-showcase'>
//               <img src={img3} alt="prof" className="project-img" />
//               <div className='project-buttons'>
//                 <a href="https://prdeva.github.io/Loan-Calculator-using-html-css-javascript/x" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
//                 <a href="https://github.com/prdeva/Loan-Calculator-using-html-css-javascript.git" target="_blank" rel="noopener noreferrer" className='btn btn-secondary'>View Code</a>
//               </div>
//             </div>
//           </div>

//           {/* Add the rest of the project showcase here */}
//         </div>

//         {/* Contact Section */}
//         <div id='contact' className='contact-section'>
//           <h3>Contact Me</h3>
//           <form className='contact-form' onSubmit={this.sendEmail}>
//             <div className='form-group'>
//               <label htmlFor="name">Name:</label>
//               <input type="text" id="name" name="name" className='form-control' placeholder="Your Name" required />
//             </div>
//             <div className='form-group'>
//               <label htmlFor="email">Email:</label>
//               <input type="email" id="email" name="email" className='form-control' placeholder="Your Email" required />
//             </div>
//             <div className='form-group'>
//               <label htmlFor="message">Message:</label>
//               <textarea id="message" name="message" className='form-control' rows="5" placeholder="Your Message" required></textarea>
//             </div>
//             <button type="submit" className='btn btn-primary'>Send Message</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default Content;


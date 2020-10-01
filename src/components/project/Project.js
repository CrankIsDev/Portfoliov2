import React, { Component } from 'react';
import './Project.css';
import Tutoract from '../../assets/Tutoract.png';

class Project extends Component {
  render(){
    return (
     <div className="projectPage">
       <div className="tutoract">
         <h2>Tutoract</h2>
          <p className="explain">
            Project of Apotheosis:
          </p>
          <p className="tutorImg">
            <img src={Tutoract} alt="" />
          </p>
          <div className="specs">
            <ul>
              <li className="spec">Teamwork</li>
              <li className="spec">Responsive</li>
              <li className="spec">Agile</li>
              <li className="spec">Specifications</li>
              <li className="spec">Wireframes</li>
              <li className="spec">Mvp</li>
            </ul>
            
          </div>
       </div>
     </div>
    );
  }
}
  
export default Project;
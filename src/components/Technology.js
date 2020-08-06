import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faLess,
  faSass,
  faSketch,
  faAws,
  faDocker,
  faDropbox,
  faGitAlt,
  faNodeJs,
  faNpm,
  faPython,
  faRaspberryPi,
  faApple,
  faMicrosoft,
  faLinux,
  faUbuntu,
} from '@fortawesome/free-brands-svg-icons';
import Tooltip from '@material-ui/core/Tooltip';
import '../css/flexbox.css';
import './Technology.css';

export default function Technology() {
  return (
    <>
      <h3>Some Technologies Of Which I Am Familiar</h3>
      <div className="tech-icon-grid neushadow">
        <div className="tech-icon">
          <FontAwesomeIcon icon={faHtml5} size="5x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faCss3Alt} size="5x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faJsSquare} size="5x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faReact} size="5x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faLess} size="5x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faSass} size="5x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faSketch} size="5x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faAws} size="5x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faDocker} size="5x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faDropbox} size="5x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faGitAlt} size="5x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faNodeJs} size="5x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faNpm} size="5x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faPython} size="5x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faRaspberryPi} size="5x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faApple} size="5x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faMicrosoft} size="5x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faLinux} size="5x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faUbuntu} size="5x" />
        </div>
      </div>
    </>
  );
}

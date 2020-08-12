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
      <h2>Some Technologies I Use</h2>
      <div className="tech-icon-grid neushadow">
        <div className="tech-icon">
          <FontAwesomeIcon icon={faHtml5} size="3x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faCss3Alt} size="3x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faJsSquare} size="3x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faReact} size="3x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faLess} size="3x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faSass} size="3x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faSketch} size="3x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faAws} size="3x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faDocker} size="3x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faGitAlt} size="3x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faNodeJs} size="3x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faNpm} size="3x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faPython} size="3x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faRaspberryPi} size="3x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faApple} size="3x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faMicrosoft} size="3x" />
        </div>
        <div className="tech-icon">
          <FontAwesomeIcon icon={faUbuntu} size="3x" />
        </div>
      </div>
    </>
  );
}

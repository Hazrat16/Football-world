import React from 'react';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'react-bootstrap';

const Footer = (props) => {
    const { strFacebook, strTwitter, strYoutube } = props.teamDescription;
    return (
        <div>
            <Col className='d-flex justify-content-center mt-2' style={{ height: '50px',margin:'10px' }}>
                <a href={`http://${strFacebook}`} className='pl-5'>
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </a>
                <a href={`http://${strTwitter}`}className='pl-5'>
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </a>
                <a href={`http://${strYoutube}`}className='pl-5'>
                    <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                </a>
            </Col>
        </div>
    );
};

export default Footer;
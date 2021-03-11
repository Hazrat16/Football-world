import React from 'react';
import { Image } from 'react-bootstrap';
import './Header.css'

const Header = (props) => {
    const { strStadiumThumb,strTeamBadge, strTeamBanner } = props.teamDescription;
    return (
        <div>
            <Image className="headerImg" src={strStadiumThumb}></Image>
            <Image className="mx-auto d-block h-50" src={strTeamBanner}></Image>
            <Image className="mx-auto d-block h-50" src={strTeamBadge}></Image>
        </div>
    );
};

export default Header;
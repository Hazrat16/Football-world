import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import TeamDetail from '../TeamDetail/TeamDetail';

const Team = () => {
    const [teams,setTeams] = useState([]);
    useEffect(() =>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams.slice(0,20)))
    },[])

    let history = useHistory()
    const teamDetailHandle = (idTeam) => {
        console.log("Button Clicked", idTeam);
        history.push(`/team/${idTeam}`);

    }
    return (
        <div style={{overflow: 'hidden',backgroundColor: '#0E0A2A',margin:'20px'}}>
            <Row>
            {
                teams.map(team => <TeamDetail teamDetailHandle={teamDetailHandle} key={team.idTeam} team={team}></TeamDetail>)
            }
        </Row>
        </div>
    );
};

export default Team;
import React from 'react';
import './Leagues.css'
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LeagueDet from '../LeagueDet/LeagueDet';

const Leagues = (props) => {
    const teamUrl='https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id='
    const { strTeamBadge, strTeam ,strSport,idTeam} = props.leagues;

    return (
        <div className='m-auto'>
              <Card className=' p-3 mx-auto my-2'
                             style={{ width: '18rem' }}>
                        <Card.Img variant="top"  src={strTeamBadge} />
                        <Card.Body className='text-center'>
                            <Card.Title >{strTeam}</Card.Title>
                            <Card.Text>
                                <p>Sports Type : {strSport}</p>
                            </Card.Text>
                            <Button variant="primary"><Link className='link-btn' to={`/leagues/${idTeam}`}>Explore</Link> </Button>
                        </Card.Body>
                    </Card>
        </div>
    );
};

export default Leagues;
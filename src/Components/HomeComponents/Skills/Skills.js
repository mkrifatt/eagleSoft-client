import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Dashboard from '../../../img/dashboard.png';
import DeadLine from '../../../img/deadline.png';
import Information from '../../../img/information-retrieval.png';
import Flexible from '../../../img/flexible.jpg';
import SingleSkill from '../SingleSkill/SingleSkill';
import Friendly from '../../../img/Friendly.png';
import Affordable from '../../../img/Affordable .png';


const skillsData = [

    {
        id:1,
        name:'Simple Dashboard',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img:Dashboard

    },
    {
        id:2,
        name:'Deadline Reminders',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img:DeadLine

    },
    {
        id:3,
        name:'Information Retrieval',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img:Information

    },
    {
        id:4,
        name:'Friendly Service',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img:Friendly

    },
    {
        id:5,
        name:'Flexible Functionality',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img:Flexible

    },
    {
        id:6,
        name:'Affordable Diagnosis',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img:Affordable

    }
]

const Skills = () => {
    return (
        <section className="mt-5 pt-5">
            <Container>
                <h3 className="text-center section-title">WHY CHOOSE US</h3>
                <p className="text-center text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    <Row className="mt-5">
                        {
                            skillsData.map(skill => <SingleSkill key={skill.id} skill={skill} />)
                        }
                    </Row>

            </Container>
            
        </section>
    );
};

export default Skills;
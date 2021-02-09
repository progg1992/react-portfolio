import React from 'react';

import Card from '../components/Card';

import gitInterview from '../assets/images/gitInterview.png';
import techIt from '../assets/images/techIT.png';
import passwordGenerator from '../assets/images/passwordGenerator.png';
import noteTaker from '../assets/images/noteTaker.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import { getByTitle } from '@testing-library/react';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Tech.IT',
                    subTitle: ' Displays the top 5 technology articles and Entry Level technology jobs to help new Developers stay up to date and find a job. Utilized HTML5, CSS3, AJAX, HTTP GET requests, and Server-side APIs.',
                    imgSrc: techIt,
                    link: 'https://github.com/StudyGroup2021/tech.it',
                    liveLink: 'https://',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Git.Interview',
                    subTitle: 'GIT.Interview is a web-application that helps developers prepare for interview questions. The user can search a topic of interest, create an account and post new questions and answers. This is an application that utilizes Passport authentication, Express, handlebars and Sequelize',
                    imgSrc: gitInterview,
                    link: 'https://github.com/MSU-developmentTeam/Git.Interview',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Password Generator',
                    subTitle: 'Generate secure passwords at a push of a button. Utlized HTML5, CSS3, JavaScript and jQuery.',
                    imgSrc: passwordGenerator,
                    link: 'https://github.com/progg1992/passwordGenerator',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Note Taker',
                    subTitle: 'This is an application that can be used to write, save, and delete notes. It has an Express backend and can retrieve and save note data from a JSON file.',
                    imgSrc: noteTaker,
                    link: 'https://github.com/progg1992/noteTaker'
                }
            ]
        }
    }


    handleCardClick = (id) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;
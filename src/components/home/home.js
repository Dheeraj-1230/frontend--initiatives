import React from 'react'
import { Carousel } from 'react-bootstrap'
import img from '../../assets/bg.jpg'
import './home.css'

export default class Home extends React.Component {
    render() {
        return (
            <>
                <div className="home">
                    <div className="mycarousel">
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block slider"
                                    src={img}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block slider"
                                    src={img}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block slider"
                                    src={img}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="content">
                        <div><p>Main Content here!</p></div>
                    </div>
                </div>
            </>
        )
    }
}
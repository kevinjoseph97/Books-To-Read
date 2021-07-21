import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function Home() {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://ychef.files.bbci.co.uk/976x549/p03gg1lc.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption >
                    <h3>WELCOME READERS</h3>
                    <p>“I love walking into a bookstore. It's like all my friends are sitting on shelves, waving their pages at me.” --Tahereh Mafi</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIy7JNggRfNNNc7WC2pbTdwkc59Ve4D6gvdDGo8gp99w7kN1d3FPH86y-JYmwN9Etvpk&usqp=CAU"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>FUN FACT</h3>
                    <p>Read 20 minutes a day, and you’ll read 1,800,000 words per year.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

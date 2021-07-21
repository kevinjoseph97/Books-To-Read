import React from 'react'
import Card from 'react-bootstrap/Card'



export default function Footer() {
    return (
        <div>
            <Card className="text-center">
                <Card.Header>Kevin Joseph</Card.Header>
               
                <Card.Footer className="text-muted">“There is more treasure in books than in all the pirate’s loot on Treasure Island.” – Walt Disney</Card.Footer>
            </Card>
        </div>
    )
}

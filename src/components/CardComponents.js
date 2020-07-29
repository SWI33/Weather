import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import styles from "../MyStyles.module.css";

class Cards extends React.Component {
  render() {
    return (
      <CardDeck>
        <Card
          style={{ width: "18rem" }}
          style={{ backgroundColor: "transparent" }}
        >
          <i class="wi wi-snow display-4" style={{ color: "white" }}></i>
          <Card.Body>
            <Card.Title className="text-center" style={{ color: "white" }}>
              80'F
            </Card.Title>
            <Card.Subtitle className="text-center" style={{ color: "white" }}>
              Monday
            </Card.Subtitle>
            <Card.Text className="text-center" style={{ color: "white" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem" }}
          style={{ backgroundColor: "transparent" }}
        >
          <i class="wi wi-snow display-4" style={{ color: "white" }}></i>

          <Card.Body>
            <Card.Title className="text-center" style={{ color: "white" }}>
              80'F
            </Card.Title>
            <Card.Subtitle className="text-center" style={{ color: "white" }}>
              Tuesday
            </Card.Subtitle>
            <Card.Text className="text-center" style={{ color: "white" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem" }}
          style={{ backgroundColor: "transparent" }}
        >
          <i class="wi wi-snow display-4" style={{ color: "white" }}></i>

          <Card.Body>
            <Card.Title className="text-center" style={{ color: "white" }}>
              80'F
            </Card.Title>
            <Card.Subtitle className="text-center" style={{ color: "white" }}>
              Wensday
            </Card.Subtitle>
            <Card.Text className="text-center" style={{ color: "white" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem" }}
          style={{ backgroundColor: "transparent" }}
        >
          <i class="wi wi-snow display-4" style={{ color: "white" }}></i>

          <Card.Body>
            <Card.Title className="text-center" style={{ color: "white" }}>
              80'F
            </Card.Title>
            <Card.Subtitle className="text-center" style={{ color: "white" }}>
              Thursday
            </Card.Subtitle>
            <Card.Text className="text-center" style={{ color: "white" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem" }}
          style={{ backgroundColor: "transparent" }}
        >
                  <i class="wi wi-snow display-4" style={{color: 'white'}}></i>

          <Card.Body>
            <Card.Title className="text-center" style={{ color: "white" }}>
              80'F
            </Card.Title>
            <Card.Subtitle className="text-center" style={{ color: "white" }}>
              Friday
            </Card.Subtitle>
            <Card.Text className="text-center" style={{ color: "white" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem" }}
          style={{ backgroundColor: "transparent" }}
        >
                  <i class="wi wi-snow display-4" style={{color: 'white'}}></i>

          <Card.Body>
            <Card.Title className="text-center" style={{ color: "white" }}>
              80'F
            </Card.Title>
            <Card.Subtitle className="text-center" style={{ color: "white" }}>
              Saturday
            </Card.Subtitle>
            <Card.Text className="text-center" style={{ color: "white" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem" }}
          style={{ backgroundColor: "transparent" }}
        >
                  <i class="wi wi-snow display-4" style={{color: 'white'}}></i>

          <Card.Body>
            <Card.Title className="text-center" style={{ color: "white" }}>
              80'F
            </Card.Title>
            <Card.Subtitle className="text-center" style={{ color: "white" }}>
              Sunday
            </Card.Subtitle>
            <Card.Text className="text-center" style={{ color: "white" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    );
  }
}

export default Cards;

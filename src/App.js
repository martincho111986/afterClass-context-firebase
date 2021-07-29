import React, { useContext, useEffect } from "react";
import Navigation from "./components/Navigation";
import { Context } from "./context/ProductContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function App() {
  const { getData, data } = useContext(Context);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <Navigation />
      {data.map((item) => (
        <Card key={item.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.imagen} />
          <Card.Body>
            <Card.Title>{item.titulo}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default App;

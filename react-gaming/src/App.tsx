import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const items = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
  const [alertVisible,setAlertVisible] = useState(false);
  return (
    <>
    {alertVisible && <Alert>My Alert</Alert>}
      {/* <ListGroup items={items} heading="Cities" /> */}
      {/* <Alert>Hello World</Alert> */}
      <Button onClick={() => setAlertVisible(true)}>
        Click Me
      </Button>
    </>
  );
}

export default App;
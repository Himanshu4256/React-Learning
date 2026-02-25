import ListGroup from "./components/ListGroup";

function App() {
   const items = ["Apple", "Banana", "Mango","Orange","Papaya"];

  return <><ListGroup items={items} heading = "Cities"></ListGroup></>
}

export default App; 
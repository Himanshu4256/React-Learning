import { MouseEvent } from "react";

import { useState } from "react";

function ListGroup() {
  const items = ["Apple", "Banana", "Mango","Orange","Papaya"];

  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li
          key={item}
          className={
            selectedItem === index
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => setSelectedItem(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
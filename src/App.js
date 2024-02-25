import Introduction from "./components/Introduction";
import "./App.css";
import { useState } from "react";
import { friends } from "./components/data";

function updatingId(inp) {
  switch (inp) {
    case friends[0].name:
      return 0;
    case friends[1].name:
      return 1;
    case friends[2].name:
      return 2;
    case friends[3].name:
      return 3;
    case friends[4].name:
      return 4;
    default:
      return -1;
  }
}


function App() {
  const [fName, setFName] = useState("");
  const [show, setShow] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState({});

  function afterSubmit(e) {
    e.preventDefault();
    const friendIndex = updatingId(fName);

    if (friendIndex !== -1) {
      setSelectedFriend(friends[friendIndex]);
      setShow(true);
    } else {
      setShow(false);
      alert("Enter the correct Name");
    }
    setFName("");
  }

  return (
    <>
      <h1 className="heading">Friends</h1>
      <form onSubmit={afterSubmit}>
        <input
          type="text"
          name="Info"
          placeholder="Enter Friend's name"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
          autoComplete="off"
          required
        />
        <button type="submit">Submit</button>
      </form>

      {show && (
        <Introduction
          name={selectedFriend.name}
          age={selectedFriend.age}
          course={selectedFriend.course}
          image={selectedFriend.image}
        />
      )}
    </>
  );
}

export default App;

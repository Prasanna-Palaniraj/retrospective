import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

export default function AddItem(props) {
  const { type } = props;

  const [thing, setThing] = useState({});
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const newDescription = event.target.value;
    setThing({
      description: newDescription,
      postedBy: "Chutki",
      type: type,
    });
  }

  function addToThings(event) {
    event.preventDefault();

    props.onAdd(thing);

    setThing({
      description: "",
    });

    setExpanded(false);
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div className="text-center">
      <form className="relative p-3 pt-6 -mb-16">
        <textarea
          name="theThing"
          onClick={expand}
          onChange={handleChange}
          value={thing.description}
          placeholder="Add your inputs..."
          rows={isExpanded ? 3 : 1}
          required
          className="p-3 w-full"
        />
        <Zoom in={isExpanded}>
          <Fab onClick={addToThings} className="absolute bottom-10 -right-52">
            <AddCircleIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

//   <button className="bg-red-400 p-2 rounded-xl">Add</button>  bg-green-300 pt-6  rounded-lg m-3

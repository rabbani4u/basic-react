import React from "react";

function App() {
  // const name = "Mia Melano";
  // const friends = ["Rabbani", "Kalid0", "Jamial", "Manna07", "Salmal7"];
  const persons = [
    {
      fname: "Mia",
      lname: "Melano",
      profession: "Model",
      website: "vixen",
    },
    {
      fname: "Mia",
      lname: "Malkova",
      profession: "Model",
      website: "Blacked",
    },
    {
      fname: "Jenna",
      lname: "Starr",
      profession: "Model",
      website: "Brazzers",
    },
    {
      fname: "Leah",
      lname: "Gotti",
      profession: "Model",
      website: "vixen",
    },
  ];
  return (
    <div>
      {persons.map(person => (
        <div>
          <h3>{person.fname + " " + person.lname}</h3>
          <p>{person.profession}</p>
          <p>{person.website}</p>
          <FirstComponent sex="male" />
        </div>
      ))}
    </div>
  );
}
function FirstComponent(props) {
  return (
    <div>
      <h1>This is my first component</h1>
      <p>{props.sex}</p>
    </div>
  );
}
export default App;

import React from "react";

function App() {
  // const name = "Mia Melano";
  const friends = ["Rabbani", "Kalid0", "Jamial", "Manna07", "Salmal7"];
  const persons = [
    {
      fname: "Mia",
      lname: "Melano",
      profession: "Model",
      website: "vixen",
      img: "https://preview.redd.it/rate-her-face-mia-melano-image-v0-8vimrd7exkla1.png?width=483&format=png&auto=webp&s=6dbf77b34c57bbfa3f8ad8ec038e939b2b137b90",
    },
    {
      fname: "Mia",
      lname: "Malkova",
      profession: "Model",
      website: "Blacked",
      img: "https://s6.depic.me/02456/1ls15iqs0jaq.jpg",
    },
    {
      fname: "Jenna",
      lname: "Starr",
      profession: "Model",
      website: "Brazzers",
      img: "https://p30.dvdl.net/rsz/60/41/0x420/d6477500168d05206e9f473ff0445f6eca9f4160_1655881363.jpg",
    },
    {
      fname: "Leah",
      lname: "Gotti",
      profession: "Model",
      website: "vixen",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4lLnaBSDPYqIQvw9kLOJino3Xwtv6UmVF0N2nBP_joQgQ5vHyMjnDHBCjeRLT4eiZi0&usqp=CAU",
    },
  ];
  return (
    <div>
      {persons.map(person => (
        <div>
          <h3>{person.fname + " " + person.lname}</h3>
          <p>{person.profession}</p>
          <p>{person.website}</p>
          <img src={person.img} alt="" />
        </div>
      ))}
    </div>
  );
}

export default App;

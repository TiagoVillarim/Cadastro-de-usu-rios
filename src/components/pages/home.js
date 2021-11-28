import React, { useState } from "react";
import HomeStyle from "../styles/home.scss"

export default function Home() {
 
  const [usersList, setUsersList] = useState(["tiago", 20, "recife-pe"]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  function onSubmit() {
    setUsersList([...usersList, name, age, email]);
    setName("");
    setEmail("");
    setAge("");
  };

  return(
    <>
      <header className="header">
        <a className="title">Cadastro de usuários</a>
      </header>

      <body className="body-container">
        <div className="section-title">Digite seus dados nos campos abaixo:</div>

        <div className="inputs-section">
          <input type="text" placeholder="Name:" value={name} onChange={event => setName(event.target.value)} className="inputs"/>
          <input type="number" placeholder="Age:" value={age} onChange={event => setAge(event.target.value)} className="inputs"/>
          <input type="text" placeholder="Email:" value={email} onChange={event => setEmail(event.target.value)} className="inputs"/>
        </div>
        <button className="submit-button" onClick={onSubmit}>Submit</button>
        <div>
          {usersList.map(listItem => (
            <a>{listItem}</a>
          ))}
        </div>
      </body>
    </>
  )
};


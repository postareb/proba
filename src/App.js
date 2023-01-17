import "./App.css";
import { useState } from "react";

function App() {
  const [race, setRace] = useState("");
  const [gender, setGender] = useState("");
  const [classType, setClassType] = useState("");
  const [charName, setCharName] = useState("");

  const result = () => {
    if (race === "darkElf" && gender === "male" && classType === "mage") {
      return (
        <img
          className="char"
          src="/images/darkelf_male_mage.jpeg"
          alt="Darkelf Male Mage"
        ></img>
      );
    }

    if (race === "darkElf" && gender === "male" && classType === "fighter") {
      return (
        <img
          className="char"
          src="/images/darkelf_male_fighter.jpeg"
          alt="Darkelf Male Fighter"
        ></img>
      );
    }

    if (race === "darkElf" && gender === "female" && classType === "mage") {
      return (
        <img
          className="char"
          src="/images/darkelf_female_mage.jpeg"
          alt="Darkelf Female Mage"
        ></img>
      );
    }

    if (race === "elf" && gender === "female" && classType === "fighter") {
      return (
        <img
          className="char"
          src="/images/elf_female_fighter.jpeg"
          alt="Elf Female Fighter"
        ></img>
      );
    }

    if (race === "elf" && gender === "female" && classType === "mage") {
      return (
        <img
          className="char"
          src="/images/elf_female_mage.jpeg"
          alt="Elf Female Mage"
        ></img>
      );
    }

    if (race === "elf" && gender === "male" && classType === "fighter") {
      return (
        <img
          className="char"
          src="/images/elf_male_fighter.jpeg"
          alt="Elf Female Fighter"
        ></img>
      );
    }

    if (race === "elf" && gender === "male" && classType === "mage") {
      return (
        <img
          className="char"
          src="/images/elf_male_mage.jpeg"
          alt="Elf Female Mage"
        ></img>
      );
    }

    if (race === "orc" && gender === "female" && classType === "fighter") {
      return (
        <img
          className="char"
          src="/images/orc_female_fighter.jpeg"
          alt="Orc Female Fighter"
        ></img>
      );
    }

    if (race === "orc" && gender === "female" && classType === "mage") {
      return (
        <img
          className="char"
          src="/images/orc_female_mage.jpeg"
          alt="Orc Female Mage"
        ></img>
      );
    }

    if (race === "orc" && gender === "male" && classType === "fighter") {
      return (
        <img
          className="char"
          src="/images/orc_male_fighter.jpeg"
          alt="Orc Male Fighter"
        ></img>
      );
    }

    if (race === "orc" && gender === "male" && classType === "mage") {
      return (
        <img
          className="char"
          src="/images/orc_male_mage.jpeg"
          alt="Orc Male Mage"
        ></img>
      );
    }

    return (
      <img
        className="char"
        src="/images/darkelf_female_fighter.jpeg"
        alt="Darkelf Female Fighter"
      ></img>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Create Your Character</h1>
      </header>

      <div id="main">
        <div id="charDetails">
          <p>Character name</p>
          <input
            type="text"
            value={charName}
            onChange={(e) => setCharName(e.target.value)}
          ></input>
          <p>Race</p>
          <div onClick={() => setRace("darkElf")}>
            <img
              className={`icon ${race === "darkElf" && "selected"}`}
              src="/images/race_darkelf.png"
              alt="Darkelf Race Icon"
            ></img>
          </div>

          <div onClick={() => setRace("elf")}>
            <img
              className={`icon ${race === "elf" && "selected"}`}
              src="/images/race_elf.png"
              alt="Elf Race Icon"
            ></img>
          </div>

          <div onClick={() => setRace("orc")}>
            <img
              className={`icon ${race === "orc" && "selected"}`}
              src="/images/race_orc.png"
              alt="OrcRace Icon"
            ></img>
          </div>

          <p>Gender</p>
          <div onClick={() => setGender("female")}>
            <img
              className={`icon ${gender === "female" && "selected"}`}
              src="/images/gender_female.png"
              alt="Gender Female Icon"
            ></img>
          </div>

          <div onClick={() => setGender("male")}>
            <img
              className={`icon ${gender === "male" && "selected"}`}
              src="/images/gender_male.png"
              alt="Gender Male Icon"
            ></img>
          </div>

          <p>Class</p>
          <div onClick={() => setClassType("fighter")}>
            <img
              className={`icon ${classType === "fighter" && "selected"}`}
              src="/images/class_fighter.png"
              alt="Class Fighter Icon"
            ></img>
          </div>

          <div onClick={() => setClassType("mage")}>
            <img
              className={`icon ${classType === "mage" && "selected"}`}
              src="/images/class_mage.png"
              alt="Class Mage Icon"
            ></img>
          </div>
        </div>

        <div id="char">{result()}</div>
      </div>

      <h2 id="charName">{charName}</h2>
    </div>
  );
}

export default App;

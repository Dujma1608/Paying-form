import "./App.css";
import Form from "./components/Form";
import Sazetak from "./components/Sazetak";
import { useState } from "react";
import { osoba } from "./utils/Osoba";

function App() {
  const [podaci, setPodaci] = useState(osoba);
  const [message, setMessage] = useState()
  const [show, setShow] = useState(false);

  const handleInputChange = (event) => {
    const inputData = event.target.value;
    const inputFieldName = event.target.name;
    const NewInputValue = { ...podaci, [inputFieldName]: inputData };
    setPodaci(NewInputValue);
  };

  const handleInputUvjet = (event) => {
    const checked = event.target.checked;
    const inputFieldName = event.target.name;
    const NewInputValue = { ...podaci, [inputFieldName]: checked };
    setPodaci(NewInputValue);
  };
  const Submit = (e) => {
    e.preventDefault();
    setShow(true);
    if(!podaci.isChecked){
      setMessage("Molimo prihvatite uvjete narudžbe!");
      setShow(false);
    }
    else setMessage("");
  };

  return (
    <div>
      <Form
        podaci={podaci}
        handleInputChange={handleInputChange}
        handleInputUvjet={handleInputUvjet}
        onSave={Submit}
        message={message}
      />
      {show && podaci.isChecked && <div className="sazetak"><Sazetak podaci={podaci} /> </div> }
    </div>
  );
}

export default App;

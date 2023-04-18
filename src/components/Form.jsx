import NacinPlacanja from "./NacinPlacanja";
import Kontakt from "./Kontakt";
import Adresa from "./Adresa";
import Uvjeti from "./Uvjeti";


const Form = ({ podaci, handleInputChange, handleInputUvjet, onSave, message }) => {
  const { email, ime, drzava, adresa, nacinPlacanja, isChecked } = podaci;


  return (
    <form onSubmit={onSave}>
      <p style={{ textAlign: "left", color: "gray" }}>
        Račun <span style={{ position: "relative", top: "-1px" }}>--</span>&gt;{" "}
        <strong style={{ color: "black" }}>Plaćanje</strong>
      </p>
      <h3>Kontakt</h3>
      <Kontakt email={email} handleInputChange={handleInputChange} />
      <h3>Adresa</h3>
      <Adresa
        ime={ime}
        drzava={drzava}
        adresa={adresa}
        handleInputIme={handleInputChange}
        handleInputSelect={handleInputChange}
        handleInputAdresa={handleInputChange}
      />
      <NacinPlacanja
        nacinPlacanja={nacinPlacanja}
        handleInputChange={handleInputChange}
      />
      <Uvjeti isChecked={isChecked} handleInputUvjet={handleInputUvjet} />

      <p style={{color: "red"}}>{message}</p>
      <button>Naruči</button>
    </form>
  );
};
export default Form;


import Select from "./Select";

const Adresa = ({
  ime,
  adresa,
  drzava,
  handleInputIme,
  handleInputSelect,
  handleInputAdresa,
}) => {
  return (
    <div className="okviri">
      <div className="adresa">
        <label htmlFor="ime">Ime:</label>
        <input
          type="text"
          id="ime"
          name="ime"
          minLength="5"
          required
          value={ime}
          onChange={handleInputIme}
        />
        <Select drzava={drzava} handleInputSelect={handleInputSelect} />
        <label htmlFor="adresa">Adresa:</label>
        <input
          type="text"
          id="adresa"
          name="adresa"
          minLength="5"
          value={adresa}
          onChange={handleInputAdresa}
        />
      </div>
    </div>
  );
};
export default Adresa;

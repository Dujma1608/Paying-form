const Select = ({drzava, handleInputSelect}) => {
    return (
      <div>
        <label htmlFor="drzava" >Država:</label>
        <select name="drzava" value={drzava} onChange={handleInputSelect}>
          <option  value="Hrvatska">Hrvatska</option>
          <option value="Uganda">Uganda</option>
        </select>
      </div>
    );
}

export default Select;
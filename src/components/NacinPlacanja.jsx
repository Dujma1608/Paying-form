const NacinPlacanja = ({ nacinPlacanja, handleInputChange }) => {
  return (
    <div className="okviri">
      <h3 id="naGranici">Način plaćanja</h3>
      <div className="nacinPlacanja">
        <div>
          <input
            type={"radio"}
            id="pouzece"
            name="nacinPlacanja"
            value="Pouzeće"
            onChange={handleInputChange}
            required
          />Pouzeće
        </div>
        <div>
          <input
            type={"radio"}
            id="kartica"
            name="nacinPlacanja"
            value="Kartica"
            onChange={handleInputChange}
          />Kartica
        </div>
      </div>
    </div>
  );
};
export default NacinPlacanja;

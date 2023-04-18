const Uvjeti = ({ isChecked, handleInputUvjet }) => {
  return (
    <div className="uvjet">
      <input
        type="checkbox"
        name="isChecked"
        value={isChecked}
        onChange={handleInputUvjet}
      />
      Prihvaćam uvjete narudžbe
    </div>
  );
};
export default Uvjeti;

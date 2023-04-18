const Kontakt = ({ email, handleInputChange }) => {
  return (
    <div className="okviri">
      <input
        type="email"
        name="email"
        placeholder="Email adresa..."
        value={email}
        onChange={handleInputChange}
      />
    </div>
  );
};
export default Kontakt;

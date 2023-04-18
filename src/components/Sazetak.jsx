const Sazetak = ({podaci}) => {

    const { email, ime, drzava, adresa, nacinPlacanja } = podaci;
    return (
      <div className="okvir">
        <div className="info">
          <p>
            Email: <strong>{email}</strong>
          </p>
          <p>
            Ime: <strong>{ime}</strong>
          </p>
          <p>
            Država: <strong>{drzava}</strong>
          </p>
          <p>
            Adresa: <strong>{adresa}</strong>
          </p>
          <p>
            Način plaćanja: <strong>{nacinPlacanja}</strong>
          </p>
        </div>
      </div>
    );
}

export default Sazetak;
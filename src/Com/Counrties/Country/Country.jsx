import '../../Countries.css'
const Country = ({ country }) => {
  const { name, flags,population, area, cca3 } = country;
  return (
    <div className="country">
      <h3>Name : {name.common}</h3>
      <img src={flags.png} alt="" />
      <p>population : {population}</p>
      <p>area: {area}</p>
      <p><small>code: {cca3}</small></p>
      <button>Visited</button>
    </div>
  );
};

export default Country;

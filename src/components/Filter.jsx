import statusMap from "../statusMap";

const Filter = ({ title, values, value, onChange }) => (
  <div className="row filter_container">
    <h3 className="filter_title">{title}</h3>
    <div className="filter_wrapper">
      {values.map((n) => (
        <label>
          <input
            className="with-gap"
            type="radio"
            onChange={() => onChange(n)}
            checked={value === n}
          />
          <span>{statusMap.get(n)}</span>
        </label>
      ))}
    </div>
  </div>
);

export { Filter };

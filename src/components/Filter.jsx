import statusMap from "../statusMap";

const Filter = ({ values, currentValue, onFilterChange }) => (
  <div className="row filter_container">
    <h3 className="filter_title">Sortować według</h3>
    <div className="input-field col s12">
      <select
        className="status_select"
        onChange={(e) => onFilterChange(e.target.value)}
      >
        {values.map((n, index) => (
          <option value={n} key={index}>
            {statusMap.get(n)}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export { Filter };

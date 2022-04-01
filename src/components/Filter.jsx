const Filter = ({ title, values, value, onChange }) => (
  <div>
    <h3>{title}</h3>
    {values.map((n) => (
      <label>
        <input
          type="radio"
          onChange={() => onChange(n)}
          checked={value === n}
        />
        {n}
      </label>
    ))}
  </div>
);

export { Filter };

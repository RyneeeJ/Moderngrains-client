function Select({ optionsArr }) {
  return (
    <select className="bg-inherit pr-2">
      {optionsArr?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default Select;

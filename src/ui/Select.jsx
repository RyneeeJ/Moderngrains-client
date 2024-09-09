function Select({ optionsArr, handleChange }) {
  return (
    <select
      className="bg-inherit pr-2 text-sm sm:text-base"
      onChange={(e) => handleChange(e.target.value)}
    >
      {optionsArr?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default Select;

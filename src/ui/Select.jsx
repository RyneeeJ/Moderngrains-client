function Select({ optionsArr, handleChange, curValue }) {
  return (
    <select
      defaultValue={curValue}
      className="bg-inherit pr-2 text-sm sm:text-base md:text-lg"
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

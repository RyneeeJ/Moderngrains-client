function Select({ optionsArr }) {
  return (
    <select className="bg-inherit pr-2 text-sm sm:text-base">
      {optionsArr?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default Select;

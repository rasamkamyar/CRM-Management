function FormInput({ name, label, type, value, onChange }) {
  return (
    <div className="form-input">
      <label htmlFor={name}> {label} </label>
      <input
        type={type}
        onChange={onChange}
        id={name}
        name={name}
        value={value}
      />
    </div>
  );
}

export default FormInput;

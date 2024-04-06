import FormInput from "../FormInput";
import ItemList from "../ItemList";

function Form({ form, setForm }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div>
      <FormInput
        name="name"
        label="Name"
        value={form.name}
        onChange={changeHandler}
      />
      <FormInput
        name="lastName"
        label="Last Name"
        value={form.lastName}
        type="text"
        onChange={changeHandler}
      />
      <FormInput
        name="email"
        label="Email"
        value={form.email}
        type="text"
        onChange={changeHandler}
      />
      <FormInput
        name="phone"
        label="Phone"
        value={form.phone}
        type="tel"
        onChange={changeHandler}
      />
      <FormInput
        name="address"
        label="Address"
        type="text"
        value={form.address}
        onChange={changeHandler}
      />
      <FormInput
        name="postalCode"
        label="Postal Code"
        type="number"
        value={form.postalCode}
        onChange={changeHandler}
      />
      <FormInput
        name="date"
        label="Date"
        type="date"
        value={form.date}
        onChange={changeHandler}
      />
      <ItemList form={form} setForm={setForm} />
    </div>
  );
}

export default Form;

import FormInput from "../FormInput";

function ItemList({ form, setForm }) {
  const { products } = form;
  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
    console.log(products);
  };

  const changeHandler = () => {};
  const deleteHandler = () => {};
  return (
    <div className="item-list">
      <h4>Purchased Products</h4>
      {products.map((product, index) => (
        <div key={index} className="form-input__list">
          <FormInput
            name="name"
            label="Product Name"
            type="text"
            value={product.name}
            onChange={changeHandler}
          />
          <div>
            <FormInput
              name="price"
              label="Price"
              type="text"
              value={product.price}
              onChange={changeHandler}
            />
            <FormInput
              name="qty"
              label="Qty"
              type="number"
              value={product.qty}
              onChange={changeHandler}
            />
          </div>
          <button onClick={deleteHandler}>Remove Item</button>
        </div>
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
}

export default ItemList;

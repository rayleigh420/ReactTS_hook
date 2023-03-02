import { ChangeEvent, useState } from "react";

interface Product {
  name: string;
  price: number;
}

const Memo = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | null>(null);
  const [product, setProduct] = useState<Product[]>([{}] as Product[]);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const handleAddProduct = () => {
    // const prod = [...[product], {
    //   name: name,
    //   price: price
    // }]
    setName("");
    setPrice(null);
    if (name.length > 0 && price) {
      setProduct([
        ...[product],
        {
          name: name,
          price: price,
        },
      ] as unknown as Product[]);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name product"
        onChange={handleChangeName}
        value={name}
      />
      <br />
      <input
        type="text"
        placeholder="Enter price of product"
        onChange={handleChangePrice}
        value={price}
      />
      <br />
      <button onClick={handleAddProduct}>Add product</button>
      <br />
      Total:
      <p>{JSON.stringify(product)}</p>
    </div>
  );
};

export default Memo;

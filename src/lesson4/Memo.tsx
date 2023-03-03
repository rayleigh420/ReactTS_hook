import { ChangeEvent, useState, useMemo, useRef } from "react";

interface Product {
  name: string;
  price: number;
}

const Memo = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>();
  const [product, setProduct] = useState<Product[]>();

  const nameRef = useRef<HTMLInputElement>(null);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleAddProduct = () => {
    setName("");
    setPrice("");

    if (name.length > 0 && price) {
      setProduct((prevProduct) => [
        ...(prevProduct || []),
        {
          name: name,
          price: Number(price),
        },
      ]);
    }

    nameRef.current?.focus();
  };

  const total = useMemo(() => {
    const result = product?.reduce((prev: number, curr: Product) => {
      return prev + curr.price;
    }, 0);

    return result;
  }, [product]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name product"
        onChange={handleChangeName}
        value={name}
        ref={nameRef}
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
      Total: {total ? total : 0}
      {/* <p>{JSON.stringify(product)}</p> */}
      <ul>
        {product &&
          product.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Memo;

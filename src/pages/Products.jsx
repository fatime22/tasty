import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminProduct from "../components/AdminProdcut";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectValue, setSelectValue] = useState("normal");
  const [inputValue, setInputValue] = useState("");

  const getData = async () => {
    let response = await axios.get("http://localhost:3000/products/");
    setProducts(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = () => {
    getData();
  };

  const filteredElements = () => {
    let sorted;

    if (selectValue == "a-z") {
      sorted = products.toSorted((a, b) => a.title.localeCompare(b.title));
    } else if (selectValue == "z-a") {
      sorted = products.toSorted((a, b) => b.title.localeCompare(a.title));
    } else {
      sorted = [...products];
    }

    let typeFilter = sorted.filter((item) =>
      item.title.toUpperCase().startsWith(inputValue.toUpperCase())
    );
    let descFilter = sorted.filter((item) =>
      item.description.toUpperCase().startsWith(inputValue.toUpperCase())
    );

    let arr = [...typeFilter, ...descFilter];

    return arr.filter((item, i, ar) => ar.indexOf(item) === i);
  };

  return (
    <>
      <h2>Products:</h2>
      <div className="row py-4 px-0">
        <div className="col-lg-5">
          <input
            className="p-2"
            type="text"
            placeholder="Search..."
            style={{ width: "100%" }}
            onInput={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>

        <div className="col-lg-2">
          <select
            className="p-2"
            style={{ width: " 100%" }}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
        </div>
      </div>
      <table className="tableContainer">
        <tbody>
          <tr>
            <th>Title</th>
            <th>Desc</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
          {filteredElements().map((item) => {
            return (
              <AdminProduct key={item.id} item={item} onDelete={handleDelete} />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Products;

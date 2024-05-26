import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const AdminProduct = ({ item, onDelete }) => {
  const deleteProduct = async (id) => {
    await axios.delete("http://localhost:3000/products/" + id);
    onDelete(id);
  };

  return (
    <tr className="from-api">
      <td>
        <h6>{item.title}</h6>
      </td>
      <td>
        <p>{item.description}</p>
      </td>
      <td>
        <div className="tableproduct">
          <img src={item.image} alt="" />
        </div>
      </td>
      <td>
        <div className="tableproduct">
          <Link to={"/admin/edit/" + item.id}>
            <button>Edit</button>
          </Link>
          <button
            onClick={() => {
              deleteProduct(item.id);
            }}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AdminProduct;

import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState(null); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const sendData = async () => {
      await axios.post("http://localhost:3000/products/", {
        ...data,
        image: image,
      }); 
      navigate("/admin");
    };
    sendData();
  };

  const convertToBase64 = (file) => {
    
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setImage(reader.result);
    };
  };

  return (
    <div>
      <div>
        <h4>Add product:</h4>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Title</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <span>{errors.title.message}</span>}
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && <span>{errors.description.message}</span>}
        </div>

        <div>
          <label>
            Image :{" "}
            {image && (
              <div>
                <img src={image} style={{ maxWidth: "100%" }} />
              </div>
            )}
            <input
              type="file"
              {...register("image", { required: true })}
              onInput={(e) => convertToBase64(e.target.files[0])} 
            />
            {errors.file && <span> doldurulmalidir!</span>}
          </label>
        </div>

        <button type="submit">Add product</button>
      </form>
    </div>
  );
};

export default Add;

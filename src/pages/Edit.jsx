import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [detail, setDetail] = useState({});
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  let { id } = useParams();

  const convertToBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setImage(reader.result);
    };
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getProduct = async () => {
    let respons = await axios.get("http://localhost:3000/products/" + id);
    setDetail(respons.data);
    setImage(respons.data.image)
  };

  useEffect(() => {
    getProduct();
  }, []);

  const onSubmit = (data) => {
    axios
      .patch("http://localhost:3000/products/" + id, {
        ...data,
        image: image,
      })
      .then((response) => navigate("/admin"));
  };

  return (
    <>
      <div>Current product: {id}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Title</label>
          <input
            defaultValue={detail.title}
            type="text"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <span>{errors.title.message}</span>}
        </div>
        <div>
          <label>Description</label>
          <input
            defaultValue={detail.description}
            type="text"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && <span>{errors.description.message}</span>}
        </div>

        <div>
          <label>
            Image :
            {image && (
              <div className="col-lg-12 mb-5">
                <img src={image} />
              </div>
            )}
            <input
              type="file"
              {...register("image", { required: false })}
              onInput={(e) => convertToBase64(e.target.files[0])} 
            />
            {errors.file && <span> doldurulmalidir!</span>}
          </label>
        </div>

        <button type="submit">Edit product</button>
      </form>
    </>
  );
};

export default Edit;

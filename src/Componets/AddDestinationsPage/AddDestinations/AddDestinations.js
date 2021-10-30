import React from "react";
import { useForm } from "react-hook-form";
import { FloatingLabel, Form } from "react-bootstrap";
import "./AddDestinations.css";
import axios from "axios";
import { useHistory } from "react-router";
import swal from "sweetalert";

const AddDestinations = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://ancient-forest-11611.herokuapp.com/destinations", data)
      .then((res) => {
        if (res.data.acknowledged) {
          swal({
            title: "Good job!",
            text: "You Destinations is Added!",
            icon: "success",
            button: "Ok!",
          });
          reset();
          history.push("/home");
        }
      });
  };
  return (
    <section className="py-5">
      <div className="text-center">
        <h1 className="fw-bold">Add Destinations</h1>
      </div>
      <Form
        className="add-destination-area mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FloatingLabel
          controlId="floatingInput"
          label="Destinations Name"
          className="mb-3"
        >
          <Form.Control
            {...register("name", { required: true })}
            type="text"
            placeholder="name"
          />
        </FloatingLabel>
        {errors.name && (
          <span className="text-danger d-block my-3">
            This field is required
          </span>
        )}
        <FloatingLabel controlId="floatingInput" label="Price" className="mb-3">
          <Form.Control
            {...register("price", { required: true })}
            type="number"
            placeholder="price"
          />
        </FloatingLabel>
        {errors.name && (
          <span className="text-danger d-block my-3">
            This field is required
          </span>
        )}
        <FloatingLabel controlId="floatingInput" label="Image" className="mb-3">
          <Form.Control
            {...register("image", { required: true })}
            type="text"
            placeholder="image"
          />
        </FloatingLabel>
        {errors.image && (
          <span className="text-danger d-block my-3">
            This field is required
          </span>
        )}
        <FloatingLabel
          controlId="floatingInput"
          label="Description"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            {...register("description", { required: true })}
            type="text"
            placeholder="description"
          />
        </FloatingLabel>
        {errors.image && (
          <span className="text-danger d-block my-3">
            This field is required
          </span>
        )}
        <input type="submit" className="btn btn-danger" />
      </Form>
    </section>
  );
};

export default AddDestinations;

import React from "react";
import axios from "axios";
import swal from "sweetalert";
import { FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import UseAuth from "../../Hooks/UseAuth";
import UseDestinations from "../../Hooks/UseDestinations";
import "./PalaceOrder.css";

const PalaceOrder = () => {
  const { destinations } = UseDestinations();
  // get id from useparams
  const { id } = useParams();
  const { user } = UseAuth();
  const history = useHistory();
  // delcare value from useform
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // find destinatinons
  const findDestinations = destinations.find((data) => data._id === id);
  // onsubmit
  const onSubmit = (data) => {
    console.log(data);
    data["status"] = "pending";
    data["image"] = findDestinations?.image;
    axios
      .post("https://ancient-forest-11611.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data.acknowledged) {
          swal({
            title: "Good job!",
            text: "You Order is Added!",
            icon: "success",
            button: "Ok!",
          });
          reset();
          history.push("/home");
        }
      });
  };
  return (
    <section className="py-5 place-order-area mx-auto">
      <div className="text-center pb-4">
        <h2 className="fw-bold">Place Order </h2>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
          <Form.Control
            defaultValue={user.displayName}
            {...register("name", { required: true })}
            type="text"
            placeholder="name"
            readOnly
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control
            defaultValue={user.email}
            {...register("email", { required: true })}
            type="email"
            placeholder="email"
            readOnly
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="From" className="mb-3">
          <Form.Control
            {...register("from", { required: true })}
            type="text"
            placeholder="from"
          />
        </FloatingLabel>
        {errors.from && (
          <span className="text-danger d-block my-3">
            This field is required
          </span>
        )}
        <FloatingLabel controlId="floatingInput" label="To" className="mb-3">
          <Form.Control
            defaultValue={findDestinations?.name || ""}
            {...register("to", { required: true })}
            type="text"
            placeholder="to"
            readOnly
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Date" className="mb-3">
          <Form.Control
            {...register("date", { required: true })}
            type="date"
            placeholder="date"
          />
        </FloatingLabel>
        {errors.date && (
          <span className="text-danger d-block my-3">
            This field is required
          </span>
        )}
        <FloatingLabel controlId="floatingInput" label="Price" className="mb-3">
          <Form.Control
            defaultValue={findDestinations?.price || ""}
            {...register("price", { required: true })}
            type="text"
            placeholder="price"
            readOnly
          />
        </FloatingLabel>
        <input className="btn btn-danger w-100 d-block" type="submit" />
      </Form>
    </section>
  );
};

export default PalaceOrder;

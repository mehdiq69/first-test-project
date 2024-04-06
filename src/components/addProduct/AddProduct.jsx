import { ErrorMessage, Field, Form, Formik } from "formik";

import { useContext } from "react";
import { UserContext } from "../../context/context";

import { useState } from "react";
import api from "../../services/configs";
import styles from "./AddProduct.module.css";

import * as yup from "yup";

const AddProduct = () => {
  const validation = yup.object().shape({
    title: yup.string().required("please enter a title"),
    desc: yup.string().required("please enter a description"),
    price: yup.number().required("please enter a number"),
    image: yup.string().required("please enter an image URL"),
  });
  const { products, setProducts } = useContext(UserContext);
  const [showAddForm, setShowAddForm] = useState(true);
  const addFormHandler = () =>
    !showAddForm ? setShowAddForm(true) : setShowAddForm(false);

  const onSubmit = (value) => {
    const { title, image, desc, price } = value;
    const fetchNewProduct = async () => {
      const result = await api.post("/products", { title, image, desc, price });
      setProducts([...products, result]);
    };

    fetchNewProduct();
    setShowAddForm(!showAddForm);
  };

  return (
    <>
      <button onClick={addFormHandler}>Add Product</button>
      {!showAddForm && (
        <div className={styles.container}>
          <div className={styles.formik}>
            <Formik
              initialValues={{
                title: "",
                image: "",
                desc: "",
                price: "",
              }}
              onSubmit={(value) => onSubmit(value)}
              enableReinitialize={true}
              validationSchema={validation}
            >
              <Form>
                {/* <Field type="number" name="id" placeholder="type a id number..." /> */}
                <Field
                  className={styles.inputs}
                  type="text"
                  name="image"
                  placeholder="insert image URL..."
                />
                <ErrorMessage name="image" component={"p"} />
                <Field
                  className={styles.inputs}
                  type="text"
                  name="title"
                  placeholder="title..."
                />
                <ErrorMessage name="title" component={"p"} />
                <Field
                  className={styles.inputs}
                  type="text"
                  name="price"
                  placeholder="price $"
                />
                <ErrorMessage name="price" component={"p"} />
                <Field
                  className={styles.desc}
                  type="text"
                  name="desc"
                  placeholder="description..."
                />
                <ErrorMessage name="desc" component={"p"} />

                <div className={styles.buttonBox}>
                  <button className={styles.submit} type="submit">
                    Submit
                  </button>
                  <button
                    className={styles.close}
                    onClick={() => setShowAddForm(!showAddForm)}
                  >
                    Close
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProduct;

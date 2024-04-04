import { Field, Form, Formik } from "formik";

import { useContext } from "react";
import { UserContext } from "../../context/context";

import { useState } from "react";
import api from "../../services/configs";
import styles from "./AddProduct.module.css";

const AddProduct = () => {
  const { products, setProducts } = useContext(UserContext);
  const [showAddForm, setShowAddForm] = useState(false);
  const addFormHandler = () =>
    !showAddForm ? setShowAddForm(true) : setShowAddForm(false);

  const onSubmit = (value) => {
    const { title, image, desc, price } = value;
    const fetchNewProduct = async () => {
      await api
        .post("/products", { title, image, desc, price })
        .then((res) => setProducts([...products, res]));
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
            >
              <Form>
                {/* <Field type="number" name="id" placeholder="type a id number..." /> */}
                <Field
                  className={styles.inputs}
                  type="text"
                  name="image"
                  placeholder="insert image URL..."
                />
                <Field
                  className={styles.inputs}
                  type="text"
                  name="title"
                  placeholder="title..."
                />
                <Field
                  className={styles.inputs}
                  type="text"
                  name="price"
                  placeholder="price $"
                />
                <Field
                  className={styles.desc}
                  type="text"
                  name="desc"
                  placeholder="description..."
                />

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

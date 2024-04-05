import { Field, Form, Formik } from "formik";

import { useContext } from "react";
import { UserContext } from "../../context/context";

import { useState } from "react";
import api from "../../services/configs";
import styles from "./AddProduct.module.css";

const EditProduct = ({ id }) => {
  const { products, setProducts } = useContext(UserContext);
  const [initialValues, setInitialValues] = useState({
    id: "",
    title: "",
    price: "",
    desc: "",
    image: "",
  });

  const [showAddForm, setShowAddForm] = useState(true);
  const editFormHandler = async (id) => {
    !showAddForm ? setShowAddForm(true) : setShowAddForm(false);
    const result = await api.get(`/products/${id}`);

    setInitialValues(result);
  };

  const onSubmit = (value) => {
    const fetchEditProfile = async (value) => {
      const result = await api.put(`/products/${id}`, value);
      const result2 = await api.get("/products");
      setProducts(result2);
      // const filterd = products.filter((value) => value.id != id);
      // setProducts(filterd);
      // setInitialValues(result);
    };

    fetchEditProfile(value);
    setShowAddForm(!showAddForm);
  };

  return (
    <>
      <button
        onClick={
          () => editFormHandler(id)
          // () => console.log(id)
        }
      >
        Edit Product
      </button>
      {!showAddForm && (
        <div className={styles.container}>
          <div className={styles.formik}>
            <Formik
              initialValues={initialValues}
              onSubmit={(value) => onSubmit(value, id)}
              enableReinitialize={true}
            >
              <Form>
                {/* <Field
                  type="number"
                  name="id"
                  placeholder="type a id number..."
                /> */}
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
                    Update
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

export default EditProduct;

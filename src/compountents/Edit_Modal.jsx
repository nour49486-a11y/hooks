import { ErrorMessage, Field, Form, Formik } from "formik";
import { useIndex, useProducts, validationSchema } from "../store";
import { useEffect, useState } from "react";

export default function Edit_Modal() {
  const { products, setProducts } = useProducts();
  const { index } = useIndex();
  const [product, setProduct] = useState({});
  useEffect(() => {
    setProduct(products[index] || {});
  }, [index, products]);

  const save_changes = (values) => {
    const copy = [...products];
    copy[index] = { ...values, instock: values.instock === "true" };
    setProducts(copy);
    localStorage.setItem("products", JSON.stringify(copy));
    document.getElementById("EditModal")?.close();
  };

  return (
    <dialog id="EditModal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Edit Product</h3>
        <div className="modal-action">
          <Formik
            enableReinitialize
            initialValues={{
              name: product.name || "",
              price: product.price || "",
              imgsrc: product.imgsrc || "",
              instock: product.instock === true || product.instock === "true" ? "true" : "false",
            }}
            onSubmit={save_changes}
            validationSchema={validationSchema}
          >
            <Form className="w-full flex flex-col gap-2">
              <Field
                name="name"
                className="input w-full"
                placeholder="enter the name product"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500"
              />

              <Field
                name="price"
                className="input w-full"
                placeholder="enter the price of product"
              />
              <ErrorMessage
                name="price"
                component="p"
                className="text-red-500"
              />

              <Field
                component="select"
                name="instock"
                className="select w-full"
              >
                <option value="true">in stock</option>
                <option value="false">out of the stock</option>
              </Field>
              <ErrorMessage
                name="instock"
                component="p"
                className="text-red-500"
              />

              <Field
                name="imgsrc"
                className="input w-full"
                placeholder="enter the image src"
              />
              <ErrorMessage
                name="imgsrc"
                component="p"
                className="text-red-500"
              />

              <button type="submit" className="btn w-full">
                Save changes
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </dialog>
  );
}

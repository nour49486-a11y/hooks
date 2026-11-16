import { ErrorMessage, Field, Form, Formik } from "formik";
import { useProducts, validationSchema } from "../store";

export default function Add_Modal() {
  const { products, setProducts } = useProducts();

  const save_data = (values) => {
    const copy = [...products, values];
    setProducts(copy);
    localStorage.setItem("products", JSON.stringify(copy));
    document.getElementById("AddModal")?.close();
  };

  return (
    <dialog id="AddModal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg"> Add New Product </h3>
        <div className="modal-action">
          <Formik
            initialValues={{ name: "", price: "", imgsrc: "", instock: false }}
            onSubmit={save_data}
            validationSchema={validationSchema}
          >
            <Form className="w-full flex  flex-col gap-2">
              <Field
                name="name"
                placeholder="enter the name product"
                className="input w-full"
              />
              <ErrorMessage
                name="name"
                component={"p"}
                className="text-red-500"
              />
              <Field
                name="price"
                placeholder="enter the price of product"
                className="input w-full"
              />
              <ErrorMessage
                name="price"
                component={"p"}
                className="text-red-500"
              />

              <Field
                component="select"
                name="instock"
                className=" select w-full"
              >
                <option value="true"> in stock </option>
                <option value="false">out of the stock </option>
              </Field>
              <ErrorMessage
                name="instock"
                component={"p"}
                className="text-red-500"
              />

              <Field
                name="imgsrc"
                className="input w-full "
                placeholder="enter the image src"
              />
              <ErrorMessage
                name="imgsrc"
                component={"p"}
                className="text-red-500"
              />

              <button
                type="submit"
                className="btn w-full hover:bg-green-500 hover:*:text-white"
              >
                save
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </dialog>
  );
}

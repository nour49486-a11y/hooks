import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import Add_Modal from "../compountents/Add_Modal";
import Edit_Modal from "../compountents/Edit_Modal";
import { useIndex, useProducts } from "../store";

export default function AdminPage() {
  const { products, setProducts } = useProducts();
  const { index, setIndex } = useIndex();

  const removeProduct = (index) => {
    let confRemove = confirm("are you sure frrom remove");

    if (confRemove) {
      let copy = [...products];
      copy.splice(index, 1);
      setProducts(copy);
      localStorage.setItem("products", JSON.stringify(copy));
    }
  };
  return (
    <div className="flex justify-center">
      <div className=" container  ">
        <h1 className=" text-2xl  py-5"> welcome into the Admin page </h1>
        <div className="py-3">
          <button
            className="btn  border-green-900 rounded-full bg-white  text-green-700 text-[15px] hover:bg-green-600 hover:text-white"
            onClick={() => document.getElementById("AddModal").showModal()}
          >
            + add product
          </button>
        </div>
        <table className="table w-full  table-fixed  ">
          <thead>
            <tr>
              <th>#</th>
              <th>products</th>
              <th>price</th>
              <th>in stock</th>
              <th>img-product</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((el, index) => {
              return (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td> {el.name} </td>
                  <td>
                    {" "}
                    {el.price}{" "}
                    <b className="text-[15px] text-green-500">$</b>{" "}
                  </td>
                  <td>
                    <select
                      value={el.instock ? "true" : "false"}
                      className="select"
                      disabled
                    >
                      <option value="true">in stock</option>
                      <option value="false">out of stock</option>
                    </select>
                  </td>
                  <td>
                    <img src={el.imgsrc} width={50} />
                  </td>
                  <td>
                    <div className=" flex gap-3">
                      <button
                        onClick={() => {
                          removeProduct(index);
                        }}
                        className="btn  hover:text-red-500 "
                      >
                        <FaRegTrashCan className="text-2xl hover:text-red-500" />
                        Remove
                      </button>

                      <button
                        className="btn hover:text-yellow-500"
                        onClick={() => {
                          setIndex(index);
                          document.getElementById("EditModal")?.showModal();
                        }}
                      >
                        <FaEdit className=" text-2xl " />
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Add_Modal />
        <Edit_Modal />
      </div>
    </div>
  );
}

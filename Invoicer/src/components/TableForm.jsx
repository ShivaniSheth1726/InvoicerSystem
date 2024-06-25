import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import { v4 as uuidv4 } from "uuid";
const TableForm = ({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
  gst,
  setGst,
  totalAmountWithGst,
  setTotalAmountWithGst,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  //Submit form function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !quantity || !price) {
      alert("Please Fill in all inputs!");
    } else {
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        price,
        amount,
      };
      setDescription("");
      setQuantity("");
      setPrice("");

      setAmount("");
      setList([...list, newItems]);
      setIsEditing(false);
    }
  };

  //Calculate items amount
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price);
    };
    calculateAmount(amount);
  }, [amount, price, quantity, setAmount]);

  //calculate total amount of item
  useEffect(() => {
    let rows = document.querySelectorAll(".amount");
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
    }
  });

 
  const calculateTotalAmount = () => {
    const amountNumber = parseFloat(total);
    const gstRateNumber = parseFloat(gst);
    if (!isNaN(amountNumber) && !isNaN(gstRateNumber)) {
      const gstAmount = (amountNumber * gstRateNumber) / 100;
      setTotalAmountWithGst(amountNumber + gstAmount);
    } else {
      setTotalAmountWithGst(0);
    }
  };

  //Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
    setAmount(editingRow.amount);
  };

  //Delete function
  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-16">
          <label htmlFor="description">Item Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="md:grid grid-cols-3 gap-10 ">
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price">Item Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount">Item Amount</label>
            <p>{amount}</p>
          </div>
        </div>
        <button
          onClick={calculateTotalAmount()}
          type="Submit"
          className=" mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        >
          {isEditing ? "Edit Item" : "Add Items"}
        </button>
      </form>
      {/* table items */}
      <table width="100%">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Item Discription</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td className="amount">{amount}</td>
                <td>
                  <button onClick={() => deleteRow(id)}>
                    <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                  </button>
                </td>
                <td>
                  <button onClick={() => editRow(id)}>
                    <AiOutlineEdit className="text-green-500 font-bold text-xl" />
                  </button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 font-bold">
          Total Amount:{total.toLocaleString()}
        </h2>
      </div>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 font-bold">
          CGST PERCENT: 9%
        </h2>
      </div>
      <div>
        <h2 className="flex items-end justify-end text-gray-800 font-bold">
          SGST PERCENT: 9%
        </h2>
      </div>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 font-bold">
          Total Amount including GST: {totalAmountWithGst.toFixed(2)}
        </h2>
      </div>
    </>
  );
};

export default TableForm;

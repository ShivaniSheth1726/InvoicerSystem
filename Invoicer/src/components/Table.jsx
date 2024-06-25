import React from "react";

const Table = ({ list, total, totalAmountWithGst }) => {
  return (
    <>
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
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 font-bold">
          Sub Total: {total.toLocaleString()}
        </h2>
      </div>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 font-bold ">
          CGST : 9%
        </h2>
      </div>
      <div>
        <h2 className="flex items-end justify-end text-gray-800 font-bold">
          SGST : 9%
        </h2>
      </div>
      <div>
        <h2 className="flex items-end justify-end text-gray-800 font-bold">
          Total Amount Including GST: {totalAmountWithGst.toFixed(2)}
        </h2>
      </div>
    </>
  );
};

export default Table;

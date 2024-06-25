import React from "react";

const Notes = ({ notes }) => {
  return (
    <>
      <section className="mt-10 mb-5 border-t-2 border-gray-300 pt-3">
        <h4 className="font-bold">Notes:</h4>
        {/* <p className="lg:w-1/2 text-justify">{notes}</p> */}
        <ul>
          <li>first</li>
          <li>second</li>
          <li>third</li>
        </ul>
      </section>
    </>
  );
};

export default Notes;

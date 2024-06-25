import React from "react";

const MainDetails = ({name, address}) => {
  return (
    <>
      <section className="flex flex-col items-end justify-end">
        <h2 className=" font-bold text-xl uppercase md:text-4">{name}</h2>
        <p>{address}</p>
        
      </section>
    </>
  );
};

export default MainDetails;

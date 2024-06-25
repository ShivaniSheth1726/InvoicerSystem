import React from 'react'

const Clientdetail = ({clientName, clientAddress}) => {
  return (
    <>
       <section className="mt-5 p-1">
        <h2 className="font-bold">Client Name: {clientName}</h2>
        <p className="font-bold"> Client Address: {clientAddress}</p>
      </section>
    </>
  )
}

export default Clientdetail

import React, { useState } from "react";
import Modaljigga from "./Modaljigga";

const ShowJigga = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div>
      <button onClick={toggleModal}>Show Me</button>
      {showModal && <Modaljigga />}
    </div>
  );
};

export default ShowJigga;

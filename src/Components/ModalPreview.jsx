import React, { useState } from "react";
import Modalpack from "./Modalpack"; // Adjust the import path as necessary

const ModalPreview12345 = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modalpack isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default ModalPreview12345;

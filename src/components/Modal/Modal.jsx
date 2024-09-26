import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Modal = ({ isOpen, onClose, onSubmit, newUser, setNewUser }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-[500px] h-[400px] flex flex-col justify-between">
        <h3 className="text-xl mb-4">Add New User</h3>
        <Input
          label="Name"
          type="text"
          placeholder="Enter Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <Input
          label="Email"
          type="email"
          placeholder="Enter Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <Input
          label="Website"
          type="text"
          placeholder="Enter Website"
          value={newUser.website}
          onChange={(e) => setNewUser({ ...newUser, website: e.target.value })}
        />
        <div className="flex justify-end mt-4 gap-2">
          <Button text="Submit" onClick={onSubmit} />
          <Button text="Close" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;

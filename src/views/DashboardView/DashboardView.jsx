"use client";
import { headers } from "@/Data/mockData";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Modal from "@/components/Modal/Modal";
import UserTable from "@/components/UserTable/UserTable";
import { addUser, getUsers } from "@/constants/helper";
import { useEffect, useState } from "react";

export default function DashboardView() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", website: "" });

  // getting data from the server
  const fetchData = async () => {
    setLoading(true);
    const response = await getUsers("/users");
    console.log(response)
    if (response) {
      setData(response);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // filtering data based on email
  const filteredUsers = data?.filter((user) =>
    user?.email.toLowerCase().includes(search.toLowerCase())
  );

  // adding new user
  const handleAddUser = async () => {
    const res = await addUser("/users", newUser);
    if (res) {
      setData((prev) => [{ ...newUser, id: res.data.id }, ...prev]);
      setShowModal(false);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
        {loading && <p>Loading...</p>}

        <div className="mb-4">
          <Input
            label="Filter by Email"
            type="text"
            placeholder="Search User"
            required={false}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="mb-4 w-[30%]">
          <Button text="Add User" onClick={() => setShowModal(true)} />
        </div>

        <UserTable users={filteredUsers} headers={headers} />

        {showModal && (
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            onSubmit={handleAddUser}
            newUser={newUser}
            setNewUser={setNewUser}
          />
        )}
      </div>
    </div>
  );
}

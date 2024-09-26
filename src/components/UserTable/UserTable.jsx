import React from 'react';

const UserTable = ({ users, headers }) => {
  return (
    <table className="min-w-full bg-white border">
      <thead className="bg-gray-200">
        <tr>
          {headers?.map((header, index) => (
            <th key={index} className="py-3 px-4 border-b text-left font-semibold">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="py-3 px-4 border-b">{user?.name}</td>
            <td className="py-3 px-4 border-b">{user?.email}</td>
            <td className="py-3 px-4 border-b">{user?.website}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;

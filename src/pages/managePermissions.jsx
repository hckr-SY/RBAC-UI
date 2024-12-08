import React, { useState } from 'react';

function PermissionsTable() {
  const [permissions, setPermissions] = useState({
    admin: ["Read", "Write", "Update"],
    moderator: ["Read", "Write"],
    guser: ["Read"],
  });

  const handleAddPermission = (role) => {
    const newPermission = prompt(`Enter a new permission for ${role}:`);
    if (newPermission) {
      setPermissions((prevPermissions) => ({
        ...prevPermissions,
        [role]: [...prevPermissions[role], newPermission],
      }));
    }
  };

  const handleRemovePermission = (role, index) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [role]: prevPermissions[role].filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Permissions Table</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300">Admin Permissions <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 mx-5"
          onClick={() => handleAddPermission("admin")}
        >
          Add
        </button></th>
            <th className="px-4 py-2 border border-gray-300">Moderator Permissions<button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 mx-5"
          onClick={() => handleAddPermission("moderator")}
        >
          Add 
        </button></th>
            <th className="px-4 py-2 border border-gray-300">General User Permissions  <button
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400 mx-5"
          onClick={() => handleAddPermission("guser")}
        >
          Add 
        </button></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({
            length: Math.max(
              permissions.admin.length,
              permissions.moderator.length,
              permissions.guser.length
            ),
          }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              <td className="px-4 py-2 border border-gray-300 text-center">
                {permissions.admin[rowIndex] || ""}
                {permissions.admin[rowIndex] && (
                  <button
                    className="ml-2 text-red-500 hover:underline"
                    onClick={() => handleRemovePermission("admin", rowIndex)}
                  >
                    Remove
                  </button>
                )}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-center">
                {permissions.moderator[rowIndex] || ""}
                {permissions.moderator[rowIndex] && (
                  <button
                    className="ml-2 text-red-500 hover:underline"
                    onClick={() => handleRemovePermission("moderator", rowIndex)}
                  >
                    Remove
                  </button>
                )}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-center">
                {permissions.guser[rowIndex] || ""}
                {permissions.guser[rowIndex] && (
                  <button
                    className="ml-2 text-red-500 hover:underline"
                    onClick={() => handleRemovePermission("guser", rowIndex)}
                  >
                    Remove
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-4 mt-4">
        
        
       
      </div>
    </div>
  );
}

export default PermissionsTable;

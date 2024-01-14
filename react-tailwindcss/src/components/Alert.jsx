import React from "react";

const Alert = () => {
  return (
    <div className="p-10 px-40">
      <button className="text-white p-2 bg-blue-600 text-xs font-bold rounded">Button one</button>
      <div className="bg-red-100 border border-red-600 rounded text-red-700 px-5 py-3 my-5" >
        <strong>Alert! </strong>
        <span>This is awesome!</span>
      </div>
    </div>
  );
};

export default Alert;
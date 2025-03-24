import React from "react";

const BankTransferDetails = () => {
  return (
    <div className="space-y-2 p-4">
      <div className="font-bold text-lg">Bank Transfer Details:</div>
      <div>
        <span className="font-bold">Account Name: </span>
        <span>Prince Ekpenyong</span>
      </div>
      <div>
        <span className="font-bold">Bank Name: </span>
        <span>UBA</span>
      </div>
      <div>
        <span className="font-bold">Account Number: </span>
        <span>2071284244</span>
      </div>
    </div>
  );
};

export default BankTransferDetails;

import React from "react";
import "./Balance.css";

function Balance() {
  const BalanceAmount = 3000.0;
  return (
    <div className="Balance">
      <p>YOUR BALANCE</p>
      <h1>{`$${BalanceAmount}`}</h1>
    </div>
  );
}

export default Balance;

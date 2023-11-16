import React from "react";
import { UserAvatar } from "../sidebar/user-avatar";
import { formatter } from "@/lib/utils";

const Transactions = () => {
  return (
    <div className="bg-background-soft p-2 lg:p-6 rounded-md shadow">
      <div>
        <h2>Latest Transactions</h2>
      </div>
      <div className="overflow-y-auto">
        <table className="w-full mt-5 ">
          <thead>
            <tr className="text-left">
              <th>Image</th>
              <th>Name</th>
              <th>Status</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-left">
              <td>
                <UserAvatar isSmall />
              </td>
              <td>Salman Sheriff</td>
              <td>Pending</td>
              <td>12.12.2024</td>
              <td>{formatter.format(12)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;

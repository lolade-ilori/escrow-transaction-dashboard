"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Transaction } from "../data/transaction";
import ProgressBtns from "./ProgressBtns";

type Props = {
  transactions: Transaction[];
};

const TableList = ({ transactions }: Props) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleRelease = (id: number) => {
    alert(`Releasing funds for transaction ${id}`);
    setOpenDropdown(null);
  };

  const handleDispute = (id: number) => {
    alert(`Raising dispute for transaction ${id}`);
    setOpenDropdown(null);
  };

  const toggleDropdown = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div>
      <section>
        <div className="">
          <div className="bg-white -mx-4 ring-1 ring-gray-300 max-h-[400px] 2xl:max-h-[450px] sm:mx-0 sm:rounded-lg overflow-x-auto mb-8">
            <h2 className="text-xl font-bold p-4">Recent Transactions</h2>
            <div className="mt-4">
              <Table>
                <TableCaption>Recent Transactions</TableCaption>
                <TableHeader>
                  <TableRow className="font-bold">
                    <TableHead className="font-bold p-3">id</TableHead>
                    <TableHead className="w-[100px] font-bold p-3">
                      Transaction Id
                    </TableHead>
                    <TableHead className="font-bold p-3">Buyer</TableHead>
                    <TableHead className="font-bold p-3">Seller</TableHead>
                    <TableHead className="font-bold p-3">Status</TableHead>
                    <TableHead className="font-bold p-3">Amount</TableHead>
                    <TableHead className="text-right font-bold p-3">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium p-3">
                        {item.id}
                      </TableCell>
                      <TableCell className="font-medium p-3">
                        {item.transactionId}
                      </TableCell>
                      <TableCell className="p-3">{item.buyer}</TableCell>
                      <TableCell className="p-3">{item.seller}</TableCell>
                      <TableCell className="p-3">
                        <ProgressBtns progress={item.status} />
                      </TableCell>
                      <TableCell className="p-3">{item.amount}</TableCell>
                      <TableCell className="text-right p-3">
                        <div className="relative inline-block text-left">
                          <button
                            onClick={() => toggleDropdown(item.id)}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded cursor-pointer"
                            aria-expanded={openDropdown === item.id}
                            aria-haspopup="true"
                          >
                            Actions ▼
                          </button>
                          {openDropdown === item.id && (
                            <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded shadow-lg z-10">
                              <button
                                onClick={() => handleRelease(item.id)}
                                className={`block w-full text-left px-4 py-2 text-sm  ${
                                  item.status !== "Pending"
                                    ? "hover:bg-gray-100"
                                    : "text-green-800 hover:bg-green-200 cursor-pointer"
                                }`}
                                disabled={item.status !== "Pending"}
                                aria-disabled={item.status !== "Pending"}
                              >
                                Release Funds
                              </button>
                              <button
                                onClick={() => handleDispute(item.id)}
                                className={`block w-full text-left px-4 py-2 text-sm  ${
                                  item.status !== "Pending"
                                    ? "hover:bg-gray-100"
                                    : " text-red-800 hover:bg-red-200 cursor-pointer"
                                }`}
                              >
                                Raise Dispute
                              </button>
                            </div>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TableList;

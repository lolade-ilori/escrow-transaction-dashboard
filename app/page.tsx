"use client";
import TableList from "./components/TableList";
import EscrowChart from "./components/EscrowChart";
import { useEffect, useState } from "react";
import { Transaction, transactions as transactData } from "./data/transaction";
import Pagination from "./components/Pagination";
import ExtraInfo from "./components/ExtraInfo";

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 6;

  useEffect(() => {
    setTransactions(transactData);
  }, []);

  const totalPages = Math.ceil(transactions.length / pageSize);
  const startIdx = (currentPage - 1) * pageSize;
  const currentTransactions = transactions.slice(startIdx, startIdx + pageSize);

  return (
    <div className="">
      <div className=" flex flex-col md:flex-row items-center gap-8 mb-10 w-full">
        <EscrowChart />

        <ExtraInfo />
      </div>

      <>
        {/* Table */}
        <TableList transactions={currentTransactions} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </>
    </div>
  );
}

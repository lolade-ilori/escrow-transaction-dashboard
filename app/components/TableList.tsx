import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { transactions } from "../data/transaction";
import ProgressBtns from "./ProgressBtns";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const TableList = () => {
  return (
    <div>
      <section>
        <div className="">
          <div className="bg-white -mx-4 ring-1 ring-gray-300 max-h-[500px] 2xl:max-h-[450px] sm:mx-0 sm:rounded-lg overflow-x-auto mb-8">
            <h2 className="text-xl font-bold p-4">Recent Transactions</h2>
            <div className="mt-4">
              <Table>
                <TableCaption>Recent Transactions</TableCaption>
                <TableHeader>
                  <TableRow className="font-bold">
                    <TableHead className="w-[100px] font-bold p-3">
                      Transaction Id
                    </TableHead>
                    <TableHead className="font-bold p-3">Buyer</TableHead>
                    <TableHead className="font-bold p-3">Seller</TableHead>
                    <TableHead className="font-bold p-3">Status</TableHead>
                    <TableHead className="font-bold p-3">Amount</TableHead>
                    <TableHead className="text-right font-bold p-3">
                      Decision
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium p-3">
                        {item.transactionId}
                      </TableCell>
                      <TableCell className="p-3">{item.buyer}</TableCell>
                      <TableCell className="p-3">{item.seller}</TableCell>
                      <TableCell className="p-3">
                        <ProgressBtns progress={item.status} />
                      </TableCell>
                      <TableCell className="p-3">{item.amount}</TableCell>
                      <TableCell className="text-right p-3">dropdown</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TableList;

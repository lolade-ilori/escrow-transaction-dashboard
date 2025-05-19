export type TransactionStatus = 'Pending' | 'Completed' | 'Disputed';

export interface Transaction {
  id: number;            
  transactionId: string; 
  buyer: string;
  seller: string;
  amount: string;       
  status: TransactionStatus;
}

export const transactions: Transaction[] = [
  {
    id: 1,
    transactionId: 'TX-0001',
    buyer: 'Alice',
    seller: 'Bob',
    amount: '$250.00',
    status: 'Pending',
  },
  {
    id: 2,
    transactionId: 'TX-0002',
    buyer: 'Carol',
    seller: 'Dave',
    amount: '$540.50',
    status: 'Completed',
  },
  {
    id: 3,
    transactionId: 'TX-0003',
    buyer: 'Eve',
    seller: 'Frank',
    amount: '$120.99',
    status: 'Disputed',
  },
  {
    id: 4,
    transactionId: 'TX-0004',
    buyer: 'Grace',
    seller: 'Heidi',
    amount: '$310.25',
    status: 'Pending',
  },
  {
    id: 5,
    transactionId: 'TX-0005',
    buyer: 'Ivan',
    seller: 'Judy',
    amount: '$789.00',
    status: 'Completed',
  },
  {
    id: 6,
    transactionId: 'TX-0006',
    buyer: 'Mallory',
    seller: 'Niaj',
    amount: '$45.50',
    status: 'Disputed',
  },
  {
    id: 7,
    transactionId: 'TX-0007',
    buyer: 'Olivia',
    seller: 'Peggy',
    amount: '$623.14',
    status: 'Pending',
  },
  {
    id: 8,
    transactionId: 'TX-0008',
    buyer: 'Rupert',
    seller: 'Sybil',
    amount: '$158.75',
    status: 'Completed',
  },
  {
    id: 9,
    transactionId: 'TX-0009',
    buyer: 'Trent',
    seller: 'Uma',
    amount: '$999.99',
    status: 'Disputed',
  },
  {
    id: 10,
    transactionId: 'TX-0010',
    buyer: 'Victor',
    seller: 'Wendy',
    amount: '$275.00',
    status: 'Pending',
  },
  {
    id: 11,
    transactionId: 'TX-0011',
    buyer: 'Alice',
    seller: 'Carol',
    amount: '$420.42',
    status: 'Completed',
  },
  {
    id: 12,
    transactionId: 'TX-0012',
    buyer: 'Dave',
    seller: 'Eve',
    amount: '$199.99',
    status: 'Disputed',
  },

];

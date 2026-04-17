import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Table } from '@/components/ui/Table';

export default function TransactionsPage() {
  const stats = [
    { label: "Today's Volume", value: '$45,230' },
    { label: 'Pending Escrow', value: '$128,500' },
    { label: 'Failed', value: '12' },
    { label: 'Refunds', value: '$3,200' }
  ];

  const transactions = [
    { id: 'TXN-001', user: 'John Smith', type: 'Service Payment', amount: '$150', method: 'Card', status: 'completed', date: '2024-04-15' },
    { id: 'TXN-002', user: 'Emma Wilson', type: 'Rent Payment', amount: '$2500', method: 'Bank Transfer', status: 'pending', date: '2024-04-15' }
  ];

  const columns = [
    { key: 'id' as const, header: 'Ref ID' },
    { key: 'user' as const, header: 'User' },
    { key: 'type' as const, header: 'Type' },
    { key: 'amount' as const, header: 'Amount' },
    { key: 'method' as const, header: 'Method' },
    { 
      key: 'status' as const, 
      header: 'Status',
      render: (status: string) => (
        <Badge variant={status === 'completed' ? 'success' : status === 'failed' ? 'error' : 'warning'}>
          {status}
        </Badge>
      )
    },
    { key: 'date' as const, header: 'Date' }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Transaction Monitoring</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-[--color-neutral-600]">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Simple Bar Chart */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Daily Volume (Last 7 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end gap-2 h-40">
            {[85, 92, 78, 95, 88, 94, 100].map((height, i) => (
              <div key={i} className="flex-1 bg-[--color-primary] rounded-t" style={{height: `${height}%`}}></div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table data={transactions} columns={columns} />
        </CardContent>
      </Card>
    </div>
  );
}
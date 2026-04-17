import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Table } from '@/components/ui/Table';

export default function DisputesPage() {
  const stats = [
    { label: 'Open', value: 12, color: 'bg-[--color-warning]' },
    { label: 'Under Review', value: 8, color: 'bg-[--color-primary]' },
    { label: 'Resolved', value: 145, color: 'bg-[--color-success]' },
    { label: 'Escalated', value: 3, color: 'bg-[--color-error]' }
  ];

  const disputes = [
    { id: 'DSP-001', type: 'Service', parties: 'John vs CleanPro', amount: '$150', filed: '2024-04-15', priority: 'high', status: 'open' },
    { id: 'DSP-002', type: 'Rental', parties: 'Emma vs Landlord', amount: '$1000', filed: '2024-04-14', priority: 'medium', status: 'review' }
  ];

  const columns = [
    { key: 'id' as const, header: 'ID' },
    { key: 'type' as const, header: 'Type' },
    { key: 'parties' as const, header: 'Parties' },
    { key: 'amount' as const, header: 'Amount' },
    { key: 'filed' as const, header: 'Filed' },
    { 
      key: 'priority' as const, 
      header: 'Priority',
      render: (priority: string) => (
        <Badge variant={priority === 'high' ? 'error' : priority === 'medium' ? 'warning' : 'default'}>
          {priority}
        </Badge>
      )
    },
    {
      key: 'status' as const,
      header: 'Status',
      render: (status: string) => (
        <Badge variant={status === 'open' ? 'warning' : 'default'}>
          {status}
        </Badge>
      )
    }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dispute Resolution</h1>
      
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

      <Card>
        <CardHeader>
          <CardTitle>Recent Disputes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table data={disputes} columns={columns} />
        </CardContent>
      </Card>
    </div>
  );
}
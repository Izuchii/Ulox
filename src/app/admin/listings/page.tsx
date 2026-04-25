import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Table } from '@/components/ui/Table';

export default function ListingsPage() {
  const stats = [
    { label: 'Pending', value: 47, color: 'bg-[--color-warning]' },
    { label: 'Approved Today', value: 23, color: 'bg-[--color-success]' },
    { label: 'Rejected', value: 5, color: 'bg-[--color-error]' },
    { label: 'Flagged', value: 8, color: 'bg-[--color-neutral-600]' }
  ];

  const listings = [
    { id: '1', title: 'Modern Apartment', owner: 'John Smith', type: 'Rental', submitted: '2024-04-15', status: 'pending' },
    { id: '2', title: 'Family Home', owner: 'Sarah Johnson', type: 'Sale', submitted: '2024-04-14', status: 'approved' },
  ];

  const columns = [
    { key: 'title' as const, header: 'Title' },
    { key: 'owner' as const, header: 'Owner' },
    { key: 'type' as const, header: 'Type' },
    { key: 'submitted' as const, header: 'Submitted' },
    { 
      key: 'status' as const, 
      header: 'Status',
      render: (status: string) => (
        <Badge variant={status === 'approved' ? 'success' : status === 'rejected' ? 'error' : 'warning'}>
          {status}
        </Badge>
      )
    },
    {
      key: 'id' as const,
      header: 'Actions',
      render: (id: string) => (
        <div className="flex gap-2">
          <Button size="sm" variant="outline">Approve</Button>
          <Button size="sm" variant="danger">Reject</Button>
        </div>
      )
    }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Listing Moderation</h1>
      
      {/* Stats Cards */}
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

      {/* Listings Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Listings</CardTitle>
        </CardHeader>
        <CardContent>
          <Table data={listings} columns={columns} />
        </CardContent>
      </Card>
    </div>
  );
}
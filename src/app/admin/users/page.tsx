import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Table } from '@/components/ui/Table';

export default function UsersPage() {
  const stats = [
    { label: 'Total', value: 2847 },
    { label: 'Verified', value: 2103 },
    { label: 'Unverified', value: 744 },
    { label: 'Suspended', value: 12 }
  ];

  const users = [
    { id: '1', name: 'John Smith', email: 'john@example.com', role: 'Tenant', kyc: 'verified', joined: '2024-03-15' },
    { id: '2', name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Landlord', kyc: 'pending', joined: '2024-04-01' }
  ];

  const columns = [
    { key: 'name' as const, header: 'Name' },
    { key: 'email' as const, header: 'Email' },
    { key: 'role' as const, header: 'Role' },
    { 
      key: 'kyc' as const, 
      header: 'KYC',
      render: (status: string) => (
        <Badge variant={status === 'verified' ? 'success' : status === 'pending' ? 'warning' : 'error'}>
          {status}
        </Badge>
      )
    },
    { key: 'joined' as const, header: 'Joined' }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">User Management</h1>
      
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
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <input
              type="search"
              placeholder="Search users..."
              className="w-full max-w-sm px-3 py-2 border rounded-lg"
            />
          </div>
          <Table data={users} columns={columns} />
        </CardContent>
      </Card>
    </div>
  );
}
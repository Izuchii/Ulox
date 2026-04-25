import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export default function AdminAnalyticsPage() {
  const kpiData = [
    { title: 'Total Users', value: '24,891', change: '+12%', trend: 'up' },
    { title: 'Active Listings', value: '3,456', change: '+5%', trend: 'up' },
    { title: 'GMV', value: '$487M', change: '+18%', trend: 'up' },
    { title: 'Open Disputes', value: '23', change: '-8%', trend: 'down' }
  ]

  const dailySignups = [
    { day: 'Dec 1', count: 45 },
    { day: 'Dec 2', count: 52 },
    { day: 'Dec 3', count: 38 },
    { day: 'Dec 4', count: 61 },
    { day: 'Dec 5', count: 49 },
    { day: 'Dec 6', count: 73 },
    { day: 'Dec 7', count: 58 },
    { day: 'Dec 8', count: 67 },
    { day: 'Dec 9', count: 42 },
    { day: 'Dec 10', count: 55 },
    { day: 'Dec 11', count: 48 },
    { day: 'Dec 12', count: 69 },
    { day: 'Dec 13', count: 71 },
    { day: 'Dec 14', count: 63 }
  ]

  const revenueBreakdown = [
    { category: 'Property', amount: 285000000, percentage: 58 },
    { category: 'Goods', amount: 126550000, percentage: 26 },
    { category: 'Services', amount: 53270000, percentage: 11 },
    { category: 'Labour', amount: 24180000, percentage: 5 }
  ]

  const moduleStats = [
    { name: 'Property', active: 3456, pending: 128, flagged: 12 },
    { name: 'Reels', active: 1234, pending: 45, flagged: 3 },
    { name: 'Goods', active: 2891, pending: 67, flagged: 8 },
    { name: 'Services', active: 987, pending: 34, flagged: 2 },
    { name: 'Labour', active: 567, pending: 23, flagged: 1 }
  ]

  const recentActivity = [
    { type: 'user', action: 'New user registration', details: 'John Smith joined as Tenant', time: '2 minutes ago' },
    { type: 'listing', action: 'Property listed', details: '3BR apartment in Lagos', time: '5 minutes ago' },
    { type: 'dispute', action: 'Dispute resolved', details: 'Payment dispute #D2024-123', time: '12 minutes ago' },
    { type: 'transaction', action: 'Large transaction', details: '$125,000 property purchase', time: '18 minutes ago' },
    { type: 'verification', action: 'KYC approved', details: 'Sarah Johnson verified', time: '23 minutes ago' },
    { type: 'listing', action: 'Listing flagged', details: 'Suspicious rental listing', time: '28 minutes ago' },
    { type: 'service', action: 'Service completed', details: 'Plumbing service in Abuja', time: '35 minutes ago' },
    { type: 'user', action: 'User suspended', details: 'Violation of terms', time: '41 minutes ago' },
    { type: 'payment', action: 'Payment processed', details: 'Escrow release $45,000', time: '47 minutes ago' },
    { type: 'review', action: 'Review reported', details: 'Inappropriate content', time: '52 minutes ago' }
  ]

  const maxCount = Math.max(...dailySignups.map(d => d.count))

  return (
    <div className="space-y-6">
      {/* Date Range Filter */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[--color-neutral-900]">Analytics Dashboard</h2>
        <select className="px-3 py-2 border border-[--color-neutral-300] rounded-lg bg-white focus:border-[--color-primary] focus:outline-none">
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>Today</option>
          <option>Last 90 days</option>
        </select>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[--color-neutral-600]">{kpi.title}</p>
                  <p className="text-2xl font-bold text-[--color-neutral-900]">{kpi.value}</p>
                </div>
                <Badge 
                  variant={kpi.trend === 'up' ? 'success' : kpi.trend === 'down' ? 'error' : 'default'}
                >
                  {kpi.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Signups Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Signups (Last 14 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {dailySignups.map((day, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-xs text-[--color-neutral-600] w-12">{day.day}</div>
                  <div className="flex-1 bg-[--color-neutral-200] rounded-full h-4 relative">
                    <div 
                      className="bg-[--color-primary] h-4 rounded-full flex items-center justify-end pr-2"
                      style={{ width: `${(day.count / maxCount) * 100}%` }}
                    >
                      <span className="text-xs text-white font-medium">{day.count}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Revenue Breakdown Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* CSS Conic Gradient Pie Chart */}
              <div className="w-32 h-32 mx-auto rounded-full" 
                style={{
                  background: `conic-gradient(
                    from 0deg,
                    #3b82f6 0deg ${revenueBreakdown[0].percentage * 3.6}deg,
                    #10b981 ${revenueBreakdown[0].percentage * 3.6}deg ${(revenueBreakdown[0].percentage + revenueBreakdown[1].percentage) * 3.6}deg,
                    #f59e0b ${(revenueBreakdown[0].percentage + revenueBreakdown[1].percentage) * 3.6}deg ${(revenueBreakdown[0].percentage + revenueBreakdown[1].percentage + revenueBreakdown[2].percentage) * 3.6}deg,
                    #ef4444 ${(revenueBreakdown[0].percentage + revenueBreakdown[1].percentage + revenueBreakdown[2].percentage) * 3.6}deg 360deg
                  )`
                }}
              />
              <div className="space-y-2">
                {revenueBreakdown.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${
                        index === 0 ? 'bg-blue-500' :
                        index === 1 ? 'bg-green-500' :
                        index === 2 ? 'bg-yellow-500' : 'bg-red-500'
                      }`} />
                      <span className="text-sm text-[--color-neutral-700]">{item.category}</span>
                    </div>
                    <span className="text-sm font-medium">${(item.amount / 1000000).toFixed(0)}M ({item.percentage}%)</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Module Breakdown Table */}
      <Card>
        <CardHeader>
          <CardTitle>Module Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[--color-neutral-200]">
                  <th className="text-left py-3 px-4 font-medium text-[--color-neutral-700]">Module</th>
                  <th className="text-left py-3 px-4 font-medium text-[--color-neutral-700]">Active</th>
                  <th className="text-left py-3 px-4 font-medium text-[--color-neutral-700]">Pending</th>
                  <th className="text-left py-3 px-4 font-medium text-[--color-neutral-700]">Flagged</th>
                </tr>
              </thead>
              <tbody>
                {moduleStats.map((module, index) => (
                  <tr key={index} className="border-b border-[--color-neutral-100]">
                    <td className="py-3 px-4 font-medium text-[--color-neutral-900]">{module.name}</td>
                    <td className="py-3 px-4 text-[--color-success]">{module.active.toLocaleString()}</td>
                    <td className="py-3 px-4 text-[--color-warning]">{module.pending}</td>
                    <td className="py-3 px-4 text-[--color-error]">{module.flagged}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity Feed */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 py-3 border-b border-[--color-neutral-100] last:border-b-0">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${
                  activity.type === 'user' ? 'bg-blue-500' :
                  activity.type === 'listing' ? 'bg-green-500' :
                  activity.type === 'dispute' ? 'bg-red-500' :
                  activity.type === 'transaction' ? 'bg-purple-500' :
                  activity.type === 'verification' ? 'bg-yellow-500' :
                  activity.type === 'service' ? 'bg-indigo-500' :
                  activity.type === 'payment' ? 'bg-pink-500' :
                  activity.type === 'review' ? 'bg-gray-500' :
                  'bg-[--color-neutral-500]'
                }`}>
                  {activity.type === 'user' ? '👤' :
                   activity.type === 'listing' ? '🏠' :
                   activity.type === 'dispute' ? '⚖️' :
                   activity.type === 'transaction' ? '💳' :
                   activity.type === 'verification' ? '✓' :
                   activity.type === 'service' ? '🔧' :
                   activity.type === 'payment' ? '💰' :
                   activity.type === 'review' ? '⭐' : '•'}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-[--color-neutral-900] text-sm">{activity.action}</p>
                  <p className="text-xs text-[--color-neutral-600]">{activity.details}</p>
                </div>
                <span className="text-xs text-[--color-neutral-500]">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
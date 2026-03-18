import React from 'react'

const KPICards = ({ data }) => {
  const kpis = [
    {
      label: 'Total Reach',
      value: data.performance.totalReach.toLocaleString(),
      change: '+2.5%',
      positive: true,
    },
    {
      label: 'Open Rate',
      value: `${((data.performance.opens / data.performance.totalReach) * 100).toFixed(1)}%`,
      change: '+1.2%',
      positive: true,
    },
    {
      label: 'Click-Through Rate',
      value: `${((data.performance.clicks / data.performance.opens) * 100).toFixed(2)}%`,
      change: '-0.3%',
      positive: false,
    },
    {
      label: 'Conversion Rate',
      value: `${((data.performance.conversions / data.performance.clicks) * 100).toFixed(2)}%`,
      change: '+2.1%',
      positive: true,
    },
    {
      label: 'Total Conversions',
      value: data.performance.conversions.toLocaleString(),
      change: '+5.8%',
      positive: true,
    },
    {
      label: 'Projected Revenue',
      value: `$${(data.performance.revenue / 1000).toFixed(0)}K`,
      change: '+$12.5K',
      positive: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {kpis.map((kpi, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6 hover:border-slate-500 transition-colors"
        >
          <p className="text-slate-400 text-sm font-medium mb-2">{kpi.label}</p>
          <p className="text-3xl font-bold text-white mb-2">{kpi.value}</p>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-semibold ${kpi.positive ? 'text-green-400' : 'text-red-400'}`}>
              {kpi.change}
            </span>
            <span className="text-slate-500 text-xs">vs yesterday</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default KPICards

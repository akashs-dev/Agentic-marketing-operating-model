import React, { useState, useEffect } from 'react'

const RealTimeMetrics = ({ data }) => {
  const [metrics, setMetrics] = useState({
    emailsSent: 0,
    emailsOpened: 0,
    linksClicked: 0,
    conversions: 0,
  })

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      const randomFactor = 0.95 + Math.random() * 0.1 // 95-105%
      setMetrics({
        emailsSent: Math.floor(data.performance.totalReach * randomFactor),
        emailsOpened: Math.floor(data.performance.opens * randomFactor),
        linksClicked: Math.floor(data.performance.clicks * randomFactor),
        conversions: Math.floor(data.performance.conversions * randomFactor),
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [data])

  const realtimeCards = [
    {
      label: 'Emails Sent (Live)',
      value: metrics.emailsSent.toLocaleString(),
      icon: '📧',
      color: 'from-blue-500 to-blue-600',
      trend: '+245/min',
    },
    {
      label: 'Emails Opened (Live)',
      value: metrics.emailsOpened.toLocaleString(),
      icon: '👀',
      color: 'from-green-500 to-green-600',
      trend: '+52/min',
    },
    {
      label: 'Links Clicked (Live)',
      value: metrics.linksClicked.toLocaleString(),
      icon: '🔗',
      color: 'from-purple-500 to-purple-600',
      trend: '+18/min',
    },
    {
      label: 'Conversions (Live)',
      value: metrics.conversions.toLocaleString(),
      icon: '✅',
      color: 'from-emerald-500 to-emerald-600',
      trend: '+3.2/min',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Live Counters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {realtimeCards.map((card, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${card.color} rounded-lg p-6 text-white relative overflow-hidden`}
          >
            {/* Animated background */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-5 rounded-full -mr-12 -mt-12"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-3">
                <span className="text-3xl">{card.icon}</span>
                <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full animate-pulse">
                  LIVE
                </span>
              </div>
              <p className="text-sm opacity-90 mb-1">{card.label}</p>
              <p className="text-3xl font-bold mb-2">{card.value}</p>
              <p className="text-xs opacity-75">{card.trend}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Activity Feed */}
      <div className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { time: '2 min ago', event: 'Email blast for S3 cohort completed', status: '✅ Success' },
            { time: '5 min ago', event: 'SMS trigger sent to high-engagement users', status: '✅ Success' },
            { time: '8 min ago', event: 'Web personalization rule activated', status: '✅ Active' },
            { time: '12 min ago', event: 'Segment refresh from RTCDP completed', status: '✅ Synced' },
            { time: '15 min ago', event: 'CTR monitoring - All channels within normal range', status: '✅ Normal' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 pb-3 border-b border-slate-600 last:border-0">
              <span className="text-slate-400 text-sm min-w-20">{item.time}</span>
              <div className="flex-1">
                <p className="text-slate-200 text-sm">{item.event}</p>
              </div>
              <span className="text-xs px-2 py-1 bg-green-900 text-green-200 rounded">{item.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Gauges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Campaign Health */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Campaign Health</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-300 text-sm">Deliverability</span>
                <span className="text-emerald-400 font-semibold">98.2%</span>
              </div>
              <div className="w-full bg-slate-600 rounded-full h-2">
                <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-2 rounded-full" style={{ width: '98.2%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-300 text-sm">Bounces</span>
                <span className="text-yellow-400 font-semibold">1.5%</span>
              </div>
              <div className="w-full bg-slate-600 rounded-full h-2">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full" style={{ width: '1.5%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-300 text-sm">Unsubscribes</span>
                <span className="text-orange-400 font-semibold">0.3%</span>
              </div>
              <div className="w-full bg-slate-600 rounded-full h-2">
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full" style={{ width: '0.3%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Engagement Velocity */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Engagement Velocity</h3>
          <div className="space-y-4">
            <div className="bg-slate-600 rounded-lg p-3">
              <div className="flex justify-between mb-1">
                <span className="text-slate-300 text-sm">Speed vs Expected</span>
                <span className="text-green-400 font-semibold">+12%</span>
              </div>
              <p className="text-xs text-slate-400">Engagement is 12% faster than historical average</p>
            </div>
            <div className="bg-slate-600 rounded-lg p-3">
              <div className="flex justify-between mb-1">
                <span className="text-slate-300 text-sm">Projected Completion</span>
                <span className="text-blue-400 font-semibold">6/22 2026</span>
              </div>
              <p className="text-xs text-slate-400">Campaign will reach completion goals 3 days early</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RealTimeMetrics

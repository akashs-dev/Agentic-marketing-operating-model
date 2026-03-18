import React from 'react'

const ChannelMetrics = ({ channels }) => {
  const channelIcons = {
    email: '✉️',
    sms: '💬',
    push: '🔔',
  }

  const channelColors = {
    email: { bar: 'from-blue-400 to-blue-600', text: 'text-blue-400' },
    sms: { bar: 'from-green-400 to-green-600', text: 'text-green-400' },
    push: { bar: 'from-orange-400 to-orange-600', text: 'text-orange-400' },
  }

  const metrics = Object.entries(channels).map(([key, channel]) => ({
    key,
    ...channel,
    icon: channelIcons[key],
    color: channelColors[key],
  }))

  const maxCTR = Math.max(...metrics.map((m) => m.ctr))
  const maxConversion = Math.max(...metrics.map((m) => m.conversion))

  return (
    <div className="space-y-6">
      {/* Channel Comparison */}
      <div className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Channel Performance Comparison</h3>

        <div className="space-y-6">
          {metrics.map((metric) => (
            <div key={metric.key} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{metric.icon}</span>
                  <div>
                    <p className="font-semibold text-white">{metric.name}</p>
                    <p className="text-xs text-slate-400">{metric.volume.toLocaleString()} messages sent</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-bold ${metric.color.text}`}>{(metric.ctr * 100).toFixed(2)}% CTR</p>
                  <p className="text-xs text-slate-400">{(metric.conversion * 100).toFixed(2)}% Conv.</p>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <p className="text-xs text-slate-400 mb-1">Click-through Rate</p>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${metric.color.bar} h-2 rounded-full`}
                        style={{ width: `${(metric.ctr / maxCTR) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <p className="text-xs text-slate-400 mb-1">Conversion Rate</p>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${metric.color.bar} h-2 rounded-full`}
                        style={{ width: `${(metric.conversion / maxConversion) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Channel Ranking */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Performer by CTR */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🏆</span>
            <h3 className="font-semibold text-white">Top CTR Channel</h3>
          </div>
          {(() => {
            const topCTR = metrics.reduce((prev, current) => (prev.ctr > current.ctr ? prev : current))
            return (
              <div className="space-y-2">
                <p className="text-2xl font-bold text-white">{topCTR.name}</p>
                <p className="text-3xl font-bold text-blue-400">{(topCTR.ctr * 100).toFixed(2)}%</p>
                <p className="text-sm text-slate-400">
                  {((topCTR.ctr / metrics.reduce((sum, m) => sum + m.ctr, 0)) * 100).toFixed(0)}% of total clicks
                </p>
              </div>
            )
          })()}
        </div>

        {/* Top Performer by Conversion */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">💎</span>
            <h3 className="font-semibold text-white">Top Converter Channel</h3>
          </div>
          {(() => {
            const topConv = metrics.reduce((prev, current) =>
              prev.conversion > current.conversion ? prev : current
            )
            return (
              <div className="space-y-2">
                <p className="text-2xl font-bold text-white">{topConv.name}</p>
                <p className="text-3xl font-bold text-emerald-400">{(topConv.conversion * 100).toFixed(2)}%</p>
                <p className="text-sm text-slate-400">
                  Estimated {(topConv.conversion * topConv.volume).toFixed(0)} conversions from this channel
                </p>
              </div>
            )
          })()}
        </div>
      </div>
    </div>
  )
}

export default ChannelMetrics

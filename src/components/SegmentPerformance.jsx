import React from 'react'

const SegmentPerformance = ({ segments }) => {
  const segmentColors = {
    S1: { bg: 'from-blue-600 to-blue-700', border: 'border-blue-500' },
    S2: { bg: 'from-purple-600 to-purple-700', border: 'border-purple-500' },
    S3: { bg: 'from-emerald-600 to-emerald-700', border: 'border-emerald-500' },
  }

  const renderBar = (value, max = 1) => {
    const percentage = Math.min((value / max) * 100, 100)
    return (
      <div className="w-full bg-slate-700 rounded-full h-2 mb-1">
        <div
          className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Object.entries(segments).map(([key, segment]) => (
        <div
          key={key}
          className={`bg-gradient-to-br ${segmentColors[key].bg} ${segmentColors[key].border} border rounded-lg p-6`}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-200 text-sm font-medium">{key}</p>
              <h3 className="text-xl font-bold text-white">{segment.name}</h3>
            </div>
            <span className="bg-white bg-opacity-20 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Active
            </span>
          </div>

          <div className="space-y-4">
            {/* Audience Size */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-200 text-sm">Audience Size</span>
                <span className="text-white font-semibold">
                  {(segment.count / 1000).toFixed(0)}K
                </span>
              </div>
              {renderBar(segment.count, 350000)}
            </div>

            {/* Propensity Score */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-200 text-sm">Conversion Propensity</span>
                <span className="text-white font-semibold">{(segment.propensity * 100).toFixed(0)}%</span>
              </div>
              {renderBar(segment.propensity)}
            </div>

            {/* Engagement Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-200 text-sm">Engagement Rate</span>
                <span className="text-white font-semibold">{(segment.engagement * 100).toFixed(0)}%</span>
              </div>
              {renderBar(segment.engagement)}
            </div>
          </div>

          {/* Status Badge */}
          <div className="mt-6 pt-4 border-t border-white border-opacity-10">
            <p className="text-xs text-slate-300">
              {key === 'S3'
                ? '🔥 High intent - Optimal for conversion'
                : key === 'S2'
                  ? '⚡ Warm leads - Strong engagement'
                  : '❄️ Cold prospects - Nurture required'}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SegmentPerformance

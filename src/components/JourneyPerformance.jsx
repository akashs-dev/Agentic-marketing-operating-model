import React from 'react'

const JourneyPerformance = ({ segments }) => {
  // Define journey stages for each segment
  const journeys = {
    S1: {
      name: 'Nurture Journey',
      stages: [
        { name: 'Email 1: Introduction', conversion: 0.22, time: 'Day 1' },
        { name: 'Email 2: Value Prop', conversion: 0.18, time: 'Day 4' },
        { name: 'Email 3: Social Proof', conversion: 0.15, time: 'Day 7' },
      ],
      dropoff: [78, 82, 85],
    },
    S2: {
      name: 'Engagement Journey',
      stages: [
        { name: 'Email 1: Demo', conversion: 0.35, time: 'Day 1' },
        { name: 'SMS: Offer', conversion: 0.28, time: 'Day 2' },
        { name: 'Email 2: Case Study', conversion: 0.22, time: 'Day 4' },
        { name: 'Push: Urgency', conversion: 0.18, time: 'Day 6' },
      ],
      dropoff: [65, 72, 78, 82],
    },
    S3: {
      name: 'High-Intent Journey',
      stages: [
        { name: 'Email 1: Executive Brief', conversion: 0.52, time: 'Day 1' },
        { name: 'SMS: Exclusive Offer', conversion: 0.48, time: 'Same day' },
        { name: 'Email 2: ROI Calculator', conversion: 0.42, time: 'Day 2' },
        { name: 'Push: Limited Slots', conversion: 0.36, time: 'Day 3' },
        { name: 'Email 3: Closing', conversion: 0.28, time: 'Day 5' },
      ],
      dropoff: [48, 52, 58, 64, 72],
    },
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {Object.entries(segments).map(([key, segment]) => {
        const journey = journeys[key]

        return (
          <div key={key} className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white">{journey.name}</h3>
                <p className="text-sm text-slate-400">{key} Cohort ({segment.count.toLocaleString()} users)</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-green-400">{(segment.propensity * 100).toFixed(0)}%</p>
                <p className="text-xs text-slate-400">Expected Conversion</p>
              </div>
            </div>

            {/* Journey Flow */}
            <div className="space-y-4">
              {journey.stages.map((stage, idx) => (
                <div key={idx} className="relative">
                  {/* Connector Line */}
                  {idx < journey.stages.length - 1 && (
                    <div className="absolute left-6 top-16 w-1 h-8 bg-gradient-to-b from-slate-500 to-transparent"></div>
                  )}

                  {/* Stage Card */}
                  <div className="flex items-start gap-4 relative z-10">
                    {/* Stage Indicator */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center font-bold text-white text-sm">
                        {idx + 1}
                      </div>
                    </div>

                    {/* Stage Details */}
                    <div className="flex-1 bg-slate-600 bg-opacity-50 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold text-white">{stage.name}</p>
                          <p className="text-xs text-slate-400 mt-1">{stage.time}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-green-400">{(stage.conversion * 100).toFixed(0)}%</p>
                          <p className="text-xs text-slate-400">Conversion</p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="flex gap-2 items-center mt-3">
                        <div className="flex-1 bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full"
                            style={{ width: `${stage.conversion * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-slate-400 min-w-[40px] text-right">
                          {(stage.conversion * 100).toFixed(0)}%
                        </span>
                      </div>

                      {/* Dropoff Rate */}
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-xs text-red-400">↓ {journey.dropoff[idx]}% dropoff</span>
                        <div className="flex-1 bg-red-900 bg-opacity-30 rounded-full h-1">
                          <div
                            className="bg-red-500 h-1 rounded-full"
                            style={{ width: `${journey.dropoff[idx]}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Journey Summary */}
            <div className="mt-6 pt-6 border-t border-slate-500 grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">{journey.stages.length}</p>
                <p className="text-xs text-slate-400">Touchpoints</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-400">
                  {(journey.stages[journey.stages.length - 1].conversion * 100).toFixed(0)}%
                </p>
                <p className="text-xs text-slate-400">Final Conversion</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-400">
                  {(segment.count * journey.stages[journey.stages.length - 1].conversion).toLocaleString()}
                </p>
                <p className="text-xs text-slate-400">Est. Conversions</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default JourneyPerformance

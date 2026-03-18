import React, { useState } from 'react'

const Alerts = () => {
  const [dismissedAlerts, setDismissedAlerts] = useState([])

  const allAlerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Unsubscribe Rate Alert',
      message: 'S1 cohort unsubscribe rate at 0.85% - approaching 1% threshold',
      icon: '⚠️',
      action: 'Review Frequency',
    },
    {
      id: 2,
      type: 'success',
      title: 'Performance Win',
      message: 'S3 conversion rate exceeded projections by 18%',
      icon: '🎉',
      action: 'Increase Budget',
    },
    {
      id: 3,
      type: 'info',
      title: 'Optimization Suggestion',
      message: 'SMS channel CTR 12% higher than email - consider increasing SMS allocation',
      icon: 'ℹ️',
      action: 'Review Strategy',
    },
  ]

  const alerts = allAlerts.filter((alert) => !dismissedAlerts.includes(alert.id))

  const dismiss = (id) => {
    setDismissedAlerts([...dismissedAlerts, id])
  }

  return (
    <div className="space-y-3">
      {alerts.length === 0 ? (
        <div className="bg-emerald-900 bg-opacity-30 border border-emerald-600 rounded-lg p-4 flex items-center gap-3">
          <span className="text-2xl">✅</span>
          <div>
            <p className="font-semibold text-emerald-300">All Systems Normal</p>
            <p className="text-sm text-emerald-200">No active alerts - campaign performing within expected parameters</p>
          </div>
        </div>
      ) : (
        alerts.map((alert) => (
          <div
            key={alert.id}
            className={`rounded-lg p-4 flex items-start gap-4 border ${
              alert.type === 'warning'
                ? 'bg-yellow-900 bg-opacity-30 border-yellow-600'
                : alert.type === 'success'
                  ? 'bg-green-900 bg-opacity-30 border-green-600'
                  : 'bg-blue-900 bg-opacity-30 border-blue-600'
            }`}
          >
            <span className="text-2xl flex-shrink-0">{alert.icon}</span>
            <div className="flex-1">
              <p
                className={`font-semibold ${
                  alert.type === 'warning'
                    ? 'text-yellow-300'
                    : alert.type === 'success'
                      ? 'text-green-300'
                      : 'text-blue-300'
                }`}
              >
                {alert.title}
              </p>
              <p
                className={`text-sm mt-1 ${
                  alert.type === 'warning'
                    ? 'text-yellow-200'
                    : alert.type === 'success'
                      ? 'text-green-200'
                      : 'text-blue-200'
                }`}
              >
                {alert.message}
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  alert.type === 'warning'
                    ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
                    : alert.type === 'success'
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {alert.action}
              </button>
              <button
                onClick={() => dismiss(alert.id)}
                className="px-2 py-1 text-slate-400 hover:text-slate-200 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Alerts

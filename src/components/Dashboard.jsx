import React, { useState, useEffect } from 'react'
import KPICards from './KPICards'
import SegmentPerformance from './SegmentPerformance'
import ChannelMetrics from './ChannelMetrics'
import RealTimeMetrics from './RealTimeMetrics'
import JourneyPerformance from './JourneyPerformance'
import Alerts from './Alerts'

const Dashboard = () => {
  const [campaignData, setCampaignData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setCampaignData({
        campaignName: 'Q1 2026 Acquisition Campaign',
        status: 'Active',
        startDate: '2026-03-17',
        segments: {
          S1: { name: 'Nurture', count: 250000, propensity: 0.15, engagement: 0.18 },
          S2: { name: 'Engage', count: 85000, propensity: 0.28, engagement: 0.28 },
          S3: { name: 'Convert', count: 12000, propensity: 0.45, engagement: 0.35 },
        },
        channels: {
          email: { name: 'Email', ctr: 0.032, conversion: 0.018, volume: 250000 },
          sms: { name: 'SMS', ctr: 0.058, conversion: 0.021, volume: 85000 },
          push: { name: 'Push', ctr: 0.021, conversion: 0.009, volume: 12000 },
        },
        performance: {
          totalReach: 347000,
          opens: 62460,
          clicks: 12345,
          conversions: 2560,
          revenue: 245000,
        },
      })
      setLoading(false)
    }, 500)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading campaign data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">{campaignData.campaignName}</h1>
              <p className="text-slate-400 mt-1">MCP Orchestrated Campaign Management</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-slate-300 text-sm">Campaign Status</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">{campaignData.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Alerts Section */}
        <Alerts />

        {/* KPI Cards */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Campaign Overview</h2>
          <KPICards data={campaignData} />
        </section>

        {/* Real-Time Metrics */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Real-Time Monitoring</h2>
          <RealTimeMetrics data={campaignData} />
        </section>

        {/* Segment Performance */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Segment Performance</h2>
          <SegmentPerformance segments={campaignData.segments} />
        </section>

        {/* Channel Metrics */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Channel Performance</h2>
          <ChannelMetrics channels={campaignData.channels} />
        </section>

        {/* Journey Performance */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Customer Journey Performance</h2>
          <JourneyPerformance segments={campaignData.segments} />
        </section>
      </div>
    </div>
  )
}

export default Dashboard

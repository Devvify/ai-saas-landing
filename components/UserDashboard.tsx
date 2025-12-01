'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, BarChart3, Settings, CreditCard, FileText, Bell } from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';

export const UserDashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  const dashboardStats = [
    { label: 'API Calls', value: '12,450', change: '+5.2%', icon: BarChart3 },
    { label: 'Usage', value: '78%', change: '+2.1%', icon: FileText },
    { label: 'Credits', value: '2,340', change: '-120', icon: CreditCard },
  ];

  const recentActivity = [
    { action: 'API call to /analyze', time: '2 minutes ago', status: 'success' },
    { action: 'Model training started', time: '1 hour ago', status: 'processing' },
    { action: 'Dataset uploaded', time: '3 hours ago', status: 'success' },
    { action: 'Webhook configured', time: '1 day ago', status: 'success' },
  ];

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name}! 👋
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your AI projects today.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {dashboardStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="w-8 h-8 text-primary-600" />
                <span className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="text-gray-900 font-medium">{activity.action}</p>
                    <p className="text-gray-500 text-sm">{activity.time}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    activity.status === 'success' ? 'bg-green-100 text-green-800' :
                    activity.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'New Project', icon: FileText, color: 'bg-blue-500' },
                { label: 'API Keys', icon: Settings, color: 'bg-green-500' },
                { label: 'Billing', icon: CreditCard, color: 'bg-purple-500' },
                { label: 'Notifications', icon: Bell, color: 'bg-orange-500' },
              ].map((action, index) => (
                <motion.button
                  key={action.label}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors text-center"
                >
                  <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{action.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-2">Ready to build something amazing?</h3>
          <p className="text-primary-100 mb-6">
            Start your next AI project with our powerful APIs and tools.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start New Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  LineChart, Line, BarChart, Bar, ScatterPlot,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Area, AreaChart, RadarChart,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

const MLvsStats = () => {
  const complexityData = [
    { complexity: 0, ml_performance: 60, stats_performance: 65 },
    { complexity: 20, ml_performance: 75, stats_performance: 72 },
    { complexity: 40, ml_performance: 85, stats_performance: 76 },
    { complexity: 60, ml_performance: 92, stats_performance: 77 },
    { complexity: 80, ml_performance: 95, stats_performance: 75 },
    { complexity: 100, ml_performance: 97, stats_performance: 73 }
  ];

  const sampleSizeData = [
    { method: 'Linear Regression', size: 30 },
    { method: 'Logistic Regression', size: 50 },
    { method: 'Neural Network', size: 1000 },
    { method: 'Deep Learning', size: 10000 },
    { method: 'Random Forest', size: 500 }
  ];

  const interpretabilityData = [
    {
      subject: 'Parameter Interpretation',
      ML: 50,
      Statistics: 90,
    },
    {
      subject: 'Variable Importance',
      ML: 75,
      Statistics: 85,
    },
    {
      subject: 'Model Transparency',
      ML: 40,
      Statistics: 95,
    },
    {
      subject: 'Uncertainty Quantification',
      ML: 65,
      Statistics: 90,
    },
    {
      subject: 'Feature Relationships',
      ML: 80,
      Statistics: 85,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-8">Machine Learning vs Traditional Statistics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Model Complexity vs Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={complexityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="complexity" label={{ value: 'Model Complexity', position: 'bottom', dy: 25 }} />
                  <YAxis label={{ value: 'Performance', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend wrapperStyle={{ paddingTop: '20px' }}/>
                  <Line type="monotone" dataKey="ml_performance" stroke="#2563eb" name="Machine Learning" />
                  <Line type="monotone" dataKey="stats_performance" stroke="#ea580c" name="Traditional Statistics" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600">
                This chart illustrates how model performance changes with increasing complexity. Machine learning models often continue to improve with added complexity, while traditional statistical models may plateau or decline due to overfitting.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Add other cards here */}
      </div>
    </div>
  );
};

export default MLvsStats;
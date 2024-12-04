import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Area, AreaChart, RadarChart,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

const MLvsStats = () => {
  // Data for Model Complexity vs Performance
  const complexityData = [
    { complexity: 0, ml_performance: 60, stats_performance: 65 },
    { complexity: 20, ml_performance: 75, stats_performance: 72 },
    { complexity: 40, ml_performance: 85, stats_performance: 76 },
    { complexity: 60, ml_performance: 92, stats_performance: 77 },
    { complexity: 80, ml_performance: 95, stats_performance: 75 },
    { complexity: 100, ml_performance: 97, stats_performance: 73 }
  ];

  // Data for Sample Size Requirements
  const sampleSizeData = [
    { method: 'Linear Regression', size: 30 },
    { method: 'Logistic Regression', size: 50 },
    { method: 'Neural Network', size: 1000 },
    { method: 'Deep Learning', size: 10000 },
    { method: 'Random Forest', size: 500 }
  ];

  // Data for Model Interpretability
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

  // Data for Problem Type Flexibility
  const flexibilityData = [
    { category: 'Classification', ml: 95, stats: 70 },
    { category: 'Regression', ml: 90, stats: 85 },
    { category: 'Clustering', ml: 90, stats: 60 },
    { category: 'Dimensionality Reduction', ml: 85, stats: 65 },
    { category: 'Time Series', ml: 85, stats: 80 }
  ];

  // Data for Computational Requirements
  const computationalData = [
    { model: 'Linear Models', ml: 20, stats: 10 },
    { model: 'Tree-based Models', ml: 60, stats: 30 },
    { model: 'Neural Networks', ml: 100, stats: 0 },
    { model: 'Ensemble Methods', ml: 80, stats: 40 }
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-8">Machine Learning vs Traditional Statistics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Complexity vs Performance */}
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
                  <Legend wrapperStyle={{ paddingTop: '20px'}}/>
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

        {/* Sample Size Requirements */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Sample Size Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sampleSizeData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="method" type="category" width={100} />
                  <Tooltip />
                  <Bar dataKey="size" fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600">
                This visualization compares the typical sample size requirements across different methods. Traditional statistical methods often work well with smaller samples, while modern ML approaches generally require larger datasets.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Model Interpretability */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Model Interpretability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={interpretabilityData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis />
                  <Radar name="ML" dataKey="ML" stroke="#2563eb" fill="#2563eb" fillOpacity={0.5} />
                  <Radar name="Statistics" dataKey="Statistics" stroke="#ea580c" fill="#ea580c" fillOpacity={0.5} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600">
                The radar chart displays different aspects of model interpretability. Traditional statistical methods typically excel in interpretability, offering clear insights into parameter meanings and uncertainty quantification.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Problem Type Flexibility */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Problem Type Flexibility</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={flexibilityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="ml" stroke="#2563eb" fill="#2563eb" name="Machine Learning" />
                  <Area type="monotone" dataKey="stats" stroke="#ea580c" fill="#ea580c" name="Traditional Statistics" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600">
                This area chart shows how ML and traditional statistics perform across different types of problems. Machine learning demonstrates greater flexibility and adaptability across various problem types.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Computational Requirements */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Computational Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={computationalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="model" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="ml" fill="#2563eb" name="Machine Learning" />
                  <Bar dataKey="stats" fill="#ea580c" name="Traditional Statistics" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600">
                This chart compares the computational requirements of different modeling approaches. ML methods, especially neural networks and ensemble methods, typically demand significantly more computational resources.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MLvsStats;
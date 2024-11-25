// Reference- https://v0.dev/ Prompt - make me a dashboard showing the work done for the service choose by the user

"use client";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Package } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

// Register ChartJS modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// Mock data for user services
const userServices = [
  { id: '1', name: 'Refrigerator Repair', progress: 75, status: 'In Progress', spent: 150, total: 200 },
  { id: '2', name: 'Washing Machine Installation', progress: 100, status: 'Completed', spent: 100, total: 100 },
  { id: '3', name: 'Microwave Repair', progress: 0, status: 'Scheduled', spent: 0, total: 80 },
  { id: '4', name: 'Dishwasher Maintenance', progress: 50, status: 'In Progress', spent: 75, total: 150 },
  { id: '5', name: 'Oven Repair', progress: 25, status: 'In Progress', spent: 50, total: 200 },
];

// Calculate total services and total spent
const totalServices = userServices.length;
const totalSpent = userServices.reduce((sum, service) => sum + service.spent, 0);

// Prepare data for the spending chart
const chartData = {
  labels: userServices.map((service) => service.name.split(' ')[0]), // Use first word of service name for brevity
  datasets: [
    {
      label: 'Amount Spent ($)',
      data: userServices.map((service) => service.spent),
      backgroundColor: '#adfa1d',
      borderRadius: 4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (context) => `$${context.raw}`,
      },
    },
  },
  scales: {
    x: { grid: { display: false } },
    y: {
      ticks: {
        callback: (value) => `$${value}`,
      },
      grid: { borderDash: [5, 5] },
    },
  },
};

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-white">
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900 mx-auto">Dashboard</h1>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <div className="grid gap-6 mb-8 md:grid-cols-2">
              {/* Summary Cards */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Services</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalServices}</div>
                  <p className="text-xs text-muted-foreground">Active and completed services</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${totalSpent.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground">Across all services</p>
                </CardContent>
              </Card>
            </div>

            {/* Spending Chart */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Service Spending Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Bar data={chartData} options={chartOptions} />
              </CardContent>
            </Card>

            {/* User Services Table */}
            <Card>
              <CardHeader>
                <CardTitle>My Services</CardTitle>
                <CardDescription>Overview of your current and past services</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Spent / Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userServices.map((service) => (
                      <TableRow key={service.id}>
                        <TableCell className="font-medium">{service.name}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Progress value={service.progress} className="w-[60%]" />
                            <span className="ml-2 text-sm">{service.progress}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              service.status === 'Completed' ? 'default' :
                              service.status === 'In Progress' ? 'secondary' :
                              'outline'
                            }
                          >
                            {service.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          ${service.spent} / ${service.total}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
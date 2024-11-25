// Reference- https://v0.dev/ Prompt - make me a dashboard showing the work done for the service choose by the user

"use client";
import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Package } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"; // Ensure you have a Button component
import { Plus } from "lucide-react"; // For the Add Service button icon
import { useUserAuth } from "@/app/lib/auth-context";
import getUserData from "@/app/lib/getData";

// Register ChartJS modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Page() {
  const { user } = useUserAuth();

  // Mock data for user services
  const [userServices, setUserServices] = useState(null);

  async function fetchData() {
    if (user && user.uid) {
      getUserData(
        async (data) => {
          console.log(data);
          setUserServices(data);
        },
        user.uid,
        "payments"
      );
    }
  }

  useEffect(() => {
    fetchData();
  }, [user]);

  // Calculate total services and total spent
  const totalServices = userServices && userServices.length;
  const totalSpent =
    (userServices &&
      userServices.reduce((sum, service) => sum + service.baseAmount, 0)) ||
    0;

  // Prepare data for the spending chart
  const chartData = userServices
    ? {
        labels: userServices
          .map((service) =>
            service.appliances
              ? service.appliances.map((appliance) => appliance.name) // Get appliance names
              : service.serviceName
          )
          .flat(), // Flatten the array to avoid nested arrays
        datasets: [
          {
            label: "Amount Spent ($)",
            data: userServices
              .map(
                (service) =>
                  service.appliances
                    ? service.appliances.map((appliance) => appliance.price) // Get appliance prices
                    : service.baseAmount || 0 // Use baseAmount or 0
              )
              .flat(), // Flatten the array to avoid nested arrays
            backgroundColor: "#adfa1d",
            borderRadius: 4,
          },
        ],
      }
    : {};

  console.log(chartData);

  const chartOptions =
    (userServices && {
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
    }) ||
    {};

  // Placeholder for adding a service
  const handleAddService = () => {
    alert("Add Service clicked! Implement functionality as needed.");
  };
  return (
    <div className="flex h-screen bg-white">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900 mx-auto">
              Status Board
            </h1>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {userServices && userServices.length > 0 ? (
              <>
                {/* Summary Cards */}
                <div className="grid gap-6 mb-8 md:grid-cols-2">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Services
                      </CardTitle>
                      <Package className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{totalServices}</div>
                      <p className="text-xs text-muted-foreground">
                        Active and completed services
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Spent
                      </CardTitle>
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
                      <div className="text-2xl font-bold">
                        ${totalSpent.toFixed(2)}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Across all services
                      </p>
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
                    <CardDescription>
                      Overview of your current and past services
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Service</TableHead>
                          <TableHead>Plan Name</TableHead>
                          <TableHead>Area</TableHead>
                          <TableHead>Appliance</TableHead>
                          <TableHead>Progress</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Spent / Total</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {userServices.map((service) => {
                          if (service.appliances) {
                            return service.appliances.map((appliance) => (
                              <TableRow key={appliance.name}>
                                <TableCell className="font-medium">
                                  {service.serviceName}
                                </TableCell>
                                <TableCell className="font-medium">
                                  {service.planName}
                                </TableCell>
                                <TableCell className="font-medium">
                                  {service.area} sq meters
                                </TableCell>
                                <TableCell className="font-medium">
                                  {appliance.name}
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center">
                                    <Progress
                                      value={
                                        service.progress === "In Progress"
                                          ? 0
                                          : service.progress === "Completed"
                                          ? 100
                                          : service.progress === "Scheduled" && 50
                                      }
                                      className="w-[60%]"
                                    />
                                    <span className="ml-2 text-sm">
                                      {service.progress}%
                                    </span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <Badge
                                    variant={
                                      appliance.status === "Completed"
                                        ? "default"
                                        : appliance.status === "In Progress"
                                        ? "secondary"
                                        : "outline"
                                    }
                                  >
                                    {appliance.status}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  ${appliance.spent} / ${appliance.price}
                                </TableCell>
                              </TableRow>
                            ));
                          } else {
                            return (
                              <TableRow key={service.id}>
                                <TableCell className="font-medium">
                                  {service.serviceName}
                                </TableCell>
                                <TableCell className="font-medium">
                                  {service.planName}
                                </TableCell>
                                <TableCell className="font-medium">
                                  {service.area} sq meters
                                </TableCell>
                                <TableCell className="font-medium">
                                  {null}
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center">
                                    <Progress
                                      value={service.progress}
                                      className="w-[60%]"
                                    />
                                    <span className="ml-2 text-sm">
                                      {service.progress}%
                                    </span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <Badge
                                    variant={
                                      service.status === "Completed"
                                        ? "default"
                                        : service.status === "In Progress"
                                        ? "secondary"
                                        : "outline"
                                    }
                                  >
                                    {service.status}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  ${service.spent} / ${service.baseAmount}
                                </TableCell>
                              </TableRow>
                            );
                          }
                        })}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="text-center p-6">
                <CardHeader>
                  <CardTitle>No Services Yet</CardTitle>
                  <CardDescription>
                    You haven't added any services to your dashboard.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={handleAddService} className="mt-4">
                    <Plus className="mr-2 h-4 w-4" /> Add Service
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

// "use client";
// import { Logout } from "@/app/actions/authServer";
// import { auth } from "@/app/lib/firebase";
// import { redirect, useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import NavBar from "../_components/Navbar";
// import Image from "next/image";
// import Link from "next/link";
// import { useUserAuth } from "@/app/lib/auth-context";
// import {
//   deleteCurrentAppointment,
//   fetchAppointmentDate,
// } from "@/app/lib/firestoreFunctions";
// import { Timestamp } from "firebase/firestore";
// import { FaRegTrashCan } from "react-icons/fa6";
// import { getUserRole } from "@/app/lib/authUtilities";

// function page() {
//   const [appointments, setAppointments] = useState();
//   const [noAppointment, setNoAppointment] = useState(false);
//   const { user, SignOut } = useUserAuth();

//   const router = useRouter();

//   const handleDeleteAppointment = async (data) => {
//     const finalData = {
//       email: user.email,
//       appointmentDate: Timestamp.fromDate(data).toJSON(),
//     };

//     const response = await deleteCurrentAppointment(user?.uid);

//     if (response) {
//       setNoAppointment(true)
//       setAppointments()
//     }
//   };

//   useEffect(() => {
//     const checkUserLoggedIn = async () => {
//       if (user) {
//         const userRole = await getUserRole(user.uid)

//         if(userRole != "client"){
//           router.push("/dashboard/admin")
//         }

//         const data = await fetchAppointmentDate(user?.uid);
//         const times = [];
//         if (data) {
//           data.map((time) => {
//             times.push(time);
//           });
//         } else {
//           setNoAppointment(true);
//         }

//         setAppointments(times);

//         // If the user is logged in, call loadWeather to fetch weather data
//       } else {
//         // Handle the case where the user is not logged in
//         console.log("User is not logged in");
//       }
//     };

//     checkUserLoggedIn(); // Call the function to check user login status
//   }, [user]);

//   return (
//     <div>
//       {user ? (
//         <div className="m-auto justify-center items-center flex flex-col mt-32">
//           Hello welcome {auth?.currentUser?.displayName} to Electrical Pros
//           <div className="px-10">
//             <h2 className="">Your Booked Appointments</h2>
//             {noAppointment ? (
//               <p className="text-sm text-center">No Booked Appointments</p>
//             ) : (
//               ""
//             )}

//             {appointments?.map((time) => {
//               time.setDate(time.getDate());
//               const timeN = time.toLocaleString();

//               const newDate = new Date(time);
//               newDate.setDate(newDate.getDate() + 1);

//               return (
//                 <>
//                   {newDate.toLocaleString()}
//                   <button onClick={() => handleDeleteAppointment(time)}>
//                     <FaRegTrashCan />
//                   </button>
//                   <br></br>
//                 </>
//               );
//             })}
//           </div>
//           <Link href="/dashboard/book">
//             <div className="m-3 p-4 justify-center items-center flex flex-col gap-2 bg-slate-100 rounded-3xl">
//               <Image
//                 src={"/calendar.svg"}
//                 height={100}
//                 width={100}
//                 alt="calender icon"
//               />
//               <p>Get an Appointment</p>
//             </div>
//           </Link>
//           <form action={SignOut}>
//             <button
//               type="submit"
//               className="flex p-3 bg-red-400 m-2 rounded-2xl"
//             >
//               Log Out
//             </button>
//           </form>
//         </div>
//       ) : (
//         <div>{redirect("/sign-in")}Not Logged In</div>
//       )}
//     </div>
//   );
// }

// export default page;
'use client'

import { useState } from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { Bell, Home, Package, Settings, User } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Mock data for user services
const userServices = [
  { id: '1', name: 'Refrigerator Repair', progress: 75, status: 'In Progress', spent: 150, total: 200 },
  { id: '2', name: 'Washing Machine Installation', progress: 100, status: 'Completed', spent: 100, total: 100 },
  { id: '3', name: 'Microwave Repair', progress: 0, status: 'Scheduled', spent: 0, total: 80 },
  { id: '4', name: 'Dishwasher Maintenance', progress: 50, status: 'In Progress', spent: 75, total: 150 },
  { id: '5', name: 'Oven Repair', progress: 25, status: 'In Progress', spent: 50, total: 200 },
]

// Calculate total services and total spent
const totalServices = userServices.length
const totalSpent = userServices.reduce((sum, service) => sum + service.spent, 0)

// Prepare data for the spending chart
const spendingChartData = userServices.map(service => ({
  name: service.name.split(' ')[0], // Use first word of service name for brevity
  spent: service.spent
}))

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <div className={`bg-white w-64 min-h-screen flex flex-col ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <div className="p-4">
          <h2 className="text-2xl font-bold">ElectroFix</h2>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-2 h-4 w-4" /> Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Package className="mr-2 h-4 w-4" /> Services
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <User className="mr-2 h-4 w-4" /> Profile
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" /> Settings
          </Button>
        </nav>
      </div> */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Button variant="ghost" className="md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
            <h1 className="text-2xl font-semibold text-gray-900">My Services</h1>
            <div className="flex items-center">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <img
                      className="rounded-full"
                      src="/placeholder.svg?height=32&width=32"
                      alt="User avatar"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">John Doe</p>
                      <p className="text-xs leading-none text-muted-foreground">john@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
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
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={spendingChartData}>
                    <XAxis
                      dataKey="name"
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Bar dataKey="spent" fill="#adfa1d" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
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
  )
}
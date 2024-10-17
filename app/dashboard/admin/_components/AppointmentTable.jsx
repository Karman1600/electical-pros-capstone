"use client"
import { fetchAllUsers } from '@/lib/firestoreFunctions'
import React, { useEffect, useState } from 'react'

function AppointmentTable() {

    const [userData, setUserData] = useState()

    const fetchAllAppointments = async ()=>{
        const data = await fetchAllUsers();
        setUserData(data)
    }

    useEffect(()=>{fetchAllAppointments()},[])

  return (
    <div className='border-2 p-10'>
        <table>
            <tr className='flex w-full gap-10'>
                <th className='text-xl w-full font-bold p-2'>Name</th>
                <th className='text-xl w-full font-bold p-2'>Email</th>
                <th className='text-xl w-full font-bold py-2 px-5'>Appointment</th>
                <th className='text-xl w-full font-bold p-2'>Actions</th>
            </tr>
            <tr className='flex'>
                <td className='px-2'>Karman</td>
                <td className='px-2'>karman@email.com</td>
                <td className='px-5'>30-03-2025, 8:00 AM</td>
                <td className='px-2'>Delete</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>
  )
}

export default AppointmentTable
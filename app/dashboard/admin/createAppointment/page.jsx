"use client"
import { fetchAllUsers } from '@/lib/firestoreFunctions'
import React, { useEffect, useState } from 'react'
import FormComponent from './_components/FormComponent';

function createAppointmentPage() {
  
    const [users, setUsers] = useState();
    const [usersNames, setUsersNames] = useState();

    useEffect(()=>{
        const fetchUserData = async ()=>{
            const data = await fetchAllUsers()
            const filteredData = data.filter(user=> user.name !== 'admin')
            setUsers(filteredData)
            // const names = []
            // data.map((user,x)=>{
            //     names.push(user.name)
            // })
            // setUsersNames(names)
            console.log(filteredData)
        }
        fetchUserData()
    },[])



    return (
    <div className='m-auto justify-center items-center flex flex-col mt-32'>
        { users? <FormComponent userOptions={users} /> : ""}
    </div>
  )
}

export default createAppointmentPage
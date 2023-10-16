import Link from 'next/link'
import React from 'react'

function StudentList() {
  return (
    <div>
        <ul>
            <li>
                <Link href='/studentList/Anil' >Anil</Link>
            </li>
            <li>
                <Link href='/studentList/Govind'>Govind</Link>
            </li>
            <li>
                <Link href='/studentList/Rahul'>Rahul</Link>
            </li>
            <li>
                <Link href='/studentList/Aditi'>Aditi</Link>
            </li>
            <li>
                <Link href='/studentList/Shivam'>Shivam</Link>
            </li>
        </ul>
    </div>
  )
}

export default StudentList
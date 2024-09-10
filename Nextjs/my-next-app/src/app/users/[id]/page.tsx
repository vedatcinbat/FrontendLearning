'use client'

import { useParams } from "next/navigation"

export default function UserProfile() {
    const params = useParams()
    const { id } = params

    return (
        <div>
            <h1>User Profile</h1>
            <p>Viewing profile for user with ID: {id}</p>
        </div>
    )
}
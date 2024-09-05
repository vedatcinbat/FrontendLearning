"use client"

import { useState } from "react"

export default function Page() {
    return (
        <>
            <div>Styling in React Components</div>
            <Button />
            <ToggleButton />
            <StatusBadge status={Status.success} />
            <StatusBadge status={Status.error} />
        </>
    )
}


/* Types */
enum Status {
    success,
    error
}


/* Components */

const Button = () => {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bol py-2 px-4 rounded">
            Click Me
        </button>
    )
}

const ToggleButton = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <button
            className={`px-4 py-2 rounded font-bold ${isActive ? 'bg-green-500' : 'bg-gray-500' }`}
            onClick={() => setIsActive(!isActive)}
        >
            {isActive ? 'Active' : 'Inactive'}
        </button>
    )
}

interface StatusBadgeProps {
    status: Status
}

const StatusBadge = ({status}: StatusBadgeProps) => {
    const badgeClass = status === Status.success ? 'bg-green-500' : 'bg-red-500';

    return (
        <span className={`px-3 py-1 rounded-full text-white ${badgeClass}`}>
            {status}
        </span>
    )
}
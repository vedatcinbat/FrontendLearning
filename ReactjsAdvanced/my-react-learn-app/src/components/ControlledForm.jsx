import { useState } from "react"

export default function ControlledForm() {
    const [name, setName] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
    }

    return (
        <div>
            <label>
                Name:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <p>Your name is: {name}</p>
        </div>
    )
}
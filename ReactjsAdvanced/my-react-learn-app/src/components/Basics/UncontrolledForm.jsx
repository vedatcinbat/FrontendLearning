import { useRef } from "react";

export default function UncontrolledForm() {
    const inputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputRef.current.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" ref={inputRef} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}
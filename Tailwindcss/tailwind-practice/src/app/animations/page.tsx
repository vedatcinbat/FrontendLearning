export default function Page() {
    return (
        <>
            <div>Hover - Focus - Active State</div>

            <h3>Hover</h3>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Hover Me
            </button>

            <br />

            <h3>Focus</h3>
            <input 
                className="border border-gray-300 focus:border-blue-500 focus:rounded-lg focus:outline-none py-2 px-4"
                type="text"
                placeholder="Focus Me"
            />

            <h3>Active State</h3>
            <button className="bg-blue-500 active:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                Click Me
            </button>

            <br />

            <h3>Styling Based on Other States</h3>
            <div className="group p-4 border">
                <h3 className="text-gray-500 group-hover:text-blue-500">Title</h3>
                <p className="group-hover:underline">Hover over this box to change my styles</p>
            </div>

            <div className="border focus-within:border-blue-500 p-4">
                <input type="text" className="border border-gray-300 py-2 px-4" placeholder="Focus Me" />
            </div>
        </>
    )
}
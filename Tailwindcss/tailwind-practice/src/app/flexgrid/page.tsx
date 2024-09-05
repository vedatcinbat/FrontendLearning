export default function Page() {
    return (
        <>
            <h2>Flexbox - Grid</h2>

            <h4>Flexbox</h4>
            <div className="flex justify-between items-center">
                <div className="p-4 bg-blue-500">Item 1</div>
                <div className="p-4 bg-green-500">Item 2</div>
                <div className="p-4 bg-red-500">Item 3</div>
            </div>

            <br />

            <h4>Grid</h4>
            <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-blue-500">Item 1</div>
                <div className="p-4 bg-green-500">Item 2</div>
                <div className="p-4 bg-red-500">Item 3</div>
            </div>
        </>
    )
}
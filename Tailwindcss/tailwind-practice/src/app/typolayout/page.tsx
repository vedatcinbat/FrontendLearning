export default function Page() {
    return (
        <>
            <div>Typogrogy And Layout</div>

            <p className="text-sm">Small Text</p>
            <p className="text-lg">Large Text</p>

            <p className="font-bold">Bold Text</p>
            <p className="font-light">Light Text</p>

            <p className="leading-tight">Tight Line Height</p>
            <p className="leading-loose">Loose Line Height</p>

            <p className="tracking-wide">Wide Letter Spacing</p>
            <p className="tracking-tight">Tight Letter Spacing</p>

            <br />

            <h3>Flexbox and Grid Utilities for Layout</h3>
            <div className="flex justify-center items-center h-64">
                <div className="flex-grow p-4 bg-blue-500">Flex Item 1</div>
                <div className="flex-grow p-4 bg-blue-500">Flex Item 2</div>
            </div>

            <br />

            <h3>Spacing Utilitis (Margin, Padding)</h3>
            <div className="p-4 bg-blue-500">Padding on all sides</div>
            <div className="m-4 bg-blue-500">Margin on all sides</div>
        </>
    )
}
import Dropdown from "./components/Dropdown";

export default function Page() {
    return (
        <>
            <h2>Dropdown</h2>
            <div className="p-6">
                <Dropdown label="Select an option">
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Option 1
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Option 2
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Option 3
                    </a>
                </Dropdown>
            </div>
        </>
    )
}



/*

<Dropdown>
    <DropdownItem>Item 1</DropdownItem>
    <DropdownItem>Item 2</DropdownItem>
    <DropdownItem>Item 3</DropdownItem>
</Dropdown>


*/
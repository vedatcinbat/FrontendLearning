export const revalidate = 5; // revalidate every 5 seconds

export default async function ProductsPage() {
    console.log('Fetching products...');
    
    const res = await fetch("http:/localhost:3001/api/products");
    const products = await res.json();

    if(products.length === 0) return <div>Loading...</div>;

    return (
        <>
            <h1>Welcome to the Products Page</h1>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>{p.name} {p.price}</li>
                ))}
            </ul>
        </>
    );
}
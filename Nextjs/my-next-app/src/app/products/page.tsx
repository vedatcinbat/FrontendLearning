//export const revalidate = 5; // revalidate every 5 seconds

export default async function ProductsPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${apiUrl}/products`);
  const products = await res.json();

  if (products.length === 0) return <div>Loading...</div>;

  return (
    <>
      <h1>Welcome to the Products Page</h1>
      <ul>
        {products.map((p: { id: number; name: string; price: number }) => (
          <li key={p.id}>
            {p.name} {p.price}
          </li>
        ))}
      </ul>
    </>
  );
}

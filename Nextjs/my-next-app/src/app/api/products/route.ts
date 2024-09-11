// src/app/api/products/route.ts

import { NextResponse } from 'next/server';

type Product = {
    id: number;
    name: string;
    price: number;
}


// Mock data - this can be replaced with real database queries
const products: Product[] = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Phone', price: 800 },
    { id: 3, name: 'Tablet', price: 600 },
];

// Handling the GET request to fetch the products
export async function GET() {
    return NextResponse.json(products);
}


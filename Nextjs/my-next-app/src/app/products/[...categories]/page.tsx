interface Params {
    params: {
        categories: string[];
    }
}

export default function CategoryPage({ params }: Params) {
    const { categories  } = params; 
    const categoryPath = categories.join('/'); // Joins the slug array into a URL string

    return (
        <div>
            <h1>Category: {categoryPath}</h1>
            {/* Fetch and display category-specific data */}
        </div>
    );
}
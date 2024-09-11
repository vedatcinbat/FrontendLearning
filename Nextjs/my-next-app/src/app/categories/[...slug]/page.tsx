// app/categories/[...slug]/page.tsx

interface Params {
    params: {
      slug: string[];
    };
  }
  
  export default function CategoryPage({ params }: Params) {
    const { slug } = params;
    const categoryPath = slug.join('/'); // Joins the slug array into a URL string
  
    return (
      <div>
        <h1>Category: {categoryPath}</h1>
        {/* Fetch and display category-specific data */}
      </div>
    );
  }
  
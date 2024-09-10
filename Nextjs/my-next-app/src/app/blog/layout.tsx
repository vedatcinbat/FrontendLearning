export default function BlogLayout({children}) {
    return (
        <div>
            <header className="bg-sky-300 text-black p-2 flex justify-start align-center gap-2">
                <h2>Blog Section</h2>
                <nav className="bg-sky-700 text-black p-1 rounded-lg">
                    <a href="/blog">Home</a> | <a href="/blog/posts/1">First Post</a>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer className="bg-sky-300 p-3">
                <p>&copy; 2024 My Blog</p>
            </footer>
        </div>
    )
}
import Link from "next/link";

export default function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This is the about page</p>
      <Link href="/">
        Homepage
      </Link>
    </div>
  );
}

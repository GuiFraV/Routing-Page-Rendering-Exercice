import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>NewsPage</h1>
      <ul>
        <li>
          <Link href="/news/first-news">First News Link</Link>
        </li>
        <li>
          <Link href="/news/second-news">Second News Link</Link>
        </li>
        <li>
          <Link href="/news/third-news">Third News Link</Link>
        </li>
      </ul>
    </>
  );
}

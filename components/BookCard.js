import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{book.title}</h2>
      <p className="text-gray-600">by {book.author}</p>
      <Link href={`/books/${book.id}`}>
        <button className="mt-3 px-3 py-1 bg-blue-500 text-white rounded">View Details</button>
      </Link>
    </div>
  );
}

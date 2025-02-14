import { useEffect, useState } from "react";
import { fetchBooks, searchBooks } from "../services/api";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchBooks().then(setBooks).catch(console.error);
  }, []);

  const handleSearch = async () => {
    if (title.trim() === "" && author.trim() === "") {
      fetchBooks().then(setBooks); // If no search input, show all books
    } else {
      searchBooks(title, author).then(setBooks);
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">Library Books</h1>
      <SearchBar title={title} setTitle={setTitle} author={author} setAuthor={setAuthor} handleSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.length > 0 ? books.map((book) => <BookCard key={book.id} book={book} />) : <p>No books found.</p>}
      </div>
    </div>
  );
}

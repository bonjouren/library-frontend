export default function SearchBar({ title, setTitle, author, setAuthor, handleSearch }) {
    return (
      <div className="mb-4 flex gap-2">
        {/* Title Search Input */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Search by title"
          className="border p-2 rounded w-full"
        />
        
        {/* Author Search Input */}
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Search by author"
          className="border p-2 rounded w-full"
        />
  
        {/* Search Button */}
        <button onClick={handleSearch} className="bg-green-500 text-white px-3 py-1 rounded">
          Search
        </button>
      </div>
    );
  }
  
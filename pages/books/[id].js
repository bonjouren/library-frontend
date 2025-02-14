import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchBookById, fetchAIInsights } from "../../services/api";

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);
  const [aiInsight, setAiInsight] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      fetchBookById(id).then(setBook).catch(() => setBook(null));
    }
  }, [id]);

  const getAIInsight = async () => {
    setLoading(true);
    try {
      const data = await fetchAIInsights(id);
      const insight = Array.isArray(data) && data.length > 0 ? data[0].summary_text : "No insights available.";
      setAiInsight(insight);
    } catch {
      setAiInsight("Failed to retrieve AI insights.");
    } finally {
      setLoading(false);
    }
  };

  if (!book) return <p className="text-center text-gray-600 mt-10">Loading book details...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-4xl font-bold text-gray-900">{book.title}</h1>
      <p className="text-lg text-gray-600 mt-2">by <span className="font-semibold">{book.author}</span> ({book.publicationYear})</p>
      <p className="mt-4 text-gray-700 leading-relaxed">{book.description}</p>

      {/* AI Insights Button */}
      <button
        onClick={getAIInsight}
        className="mt-5 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        disabled={loading}
      >
        {loading ? "Fetching AI Insights..." : "Get AI Insights"}
      </button>

      {/* Display AI Insights */}
      {aiInsight && (
        <p className="mt-4 p-3 bg-gray-100 border-l-4 border-blue-500 text-gray-800 rounded-lg">{aiInsight}</p>
      )}

      {/* Back to Home Button */}
      <button
        onClick={() => router.push("/")}
        className="mt-5 px-5 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
      >
        ⬅ Back to Home
      </button>
    </div>
  );
}

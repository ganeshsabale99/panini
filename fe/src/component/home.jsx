import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchBlogs, likeBlog } from "../services/blogService";
import Navbar from "./Navbar";
import { HandThumbUpIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await fetchBlogs();
        const sanitizedData = data.map((blog) => ({
          ...blog,
          likes: typeof blog.likes === "number" ? blog.likes : 0,
        }));
        setBlogs(sanitizedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  const handleLike = async (blogId) => {
    try {
      const { likes } = await likeBlog(blogId);
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) => (blog._id === blogId ? { ...blog, likes } : blog))
      );
    } catch (error) {
      alert("Failed to like/unlike blog");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-600">Loading blogs...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-600">Error: {error}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">📝 Latest Blogs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-1">{blog.title}</h2>
                  <p className="text-sm text-gray-500 mb-3">✍️ {blog.author?.name || "Unknown Author"}</p>
                  <p className="text-gray-700 text-sm line-clamp-4">{blog.content}</p>
                </div>

                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => handleLike(blog._id)}
                    className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition"
                  >
                    <HandThumbUpIcon className="h-5 w-5" />
                    <span>{blog.likes || 0}</span>
                  </button>

                  <button
                    onClick={() => navigate(`/comments/${blog._id}`)}
                    className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition"
                  >
                    <ChatBubbleLeftEllipsisIcon className="h-5 w-5" />
                    <span>Comment</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {blogs.length === 0 && !loading && !error && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No blogs found. Be the first to create one!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

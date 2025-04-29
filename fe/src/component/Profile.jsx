import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const userResponse = await axios.get("https://blogverse-6.onrender.com/user/profile", { headers });
        setUser(userResponse.data);

        const blogsResponse = await axios.get(`https://blogverse-6.onrender.com/blog/user/${userResponse.data._id}`, { headers });
        setBlogs(blogsResponse.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [token]);

  const handleEditProfile = () => {
    navigate("/edit-profile");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 text-center">
          {user ? (
            <>
              <div className="flex flex-col items-center gap-4">
                <img
                  src={user.avatar || "https://via.placeholder.com/100"}
                  alt="User Avatar"
                  className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-md"
                />
                <h2 className="text-3xl font-bold text-gray-800">{user.name}</h2>
                <p className="text-gray-600">📧 {user.email}</p>
                <button
                  onClick={handleEditProfile}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300"
                >
                  Edit Profile
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-500">Loading profile...</p>
          )}
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">📝 Your Blogs</h3>

        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h4>
                <p className="text-gray-600 mb-4">{blog.content.substring(0, 120)}...</p>
                <button
                  onClick={() => navigate(`/blog/${blog._id}`)}
                  className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  Read More →
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white text-center text-gray-600 rounded-xl shadow-md p-6 mt-6">
            You haven't written any blogs yet. Start writing today!
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

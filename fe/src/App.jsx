import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./component/login";
import Home from "./component/home";
import Signup from "./component/signup";
import CreateBlog from "./component/CreateBlog";
import Comments from "./component/Comments";
import Profile from "./component/Profile";
import About from "./component/About";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreateBlog/>} />
        <Route path="/comments/:blogId" element={<Comments />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
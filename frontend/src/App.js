import { Route, Routes } from "react-router-dom";
import { Footer, AuthProvider } from "./Components";
import { Home, Developments, Projects, Admin, AdminArticles, AdminProjects, ErrorPage, Login, NewArticle, NewPost } from './Pages'


function App() {

  return (
    <div className=" lg:mx-36 sm:mx-8 md:mx-16 h-screen flex justify-between flex-col">
      <div>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/developments" element={<Developments />} />
            <Route path="/projects" element={<Projects />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/articles" element={<AdminArticles />} />
            <Route path="/admin/articles/new-article" element={<NewArticle />} />
            <Route path="/admin/articles/new-post" element={<NewPost />} />
            <Route path="/admin/projects" element={<AdminProjects />} />

            {/* Authentication routes */}
            <Route path="/login" element={<Login />} />


            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AuthProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;

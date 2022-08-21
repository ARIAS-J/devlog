import { Route, Routes } from "react-router-dom";
import { Footer, AuthProvider } from "./Components";
import { Home, Developments, Admin, AdminArticles, ErrorPage, Login, NewArticle, NewPost, DevelopmentsBlog, UpdateArticle } from './Pages'


function App() {

  return (
    <div className=" lg:mx-36 sm:mx-8 md:mx-16 h-screen flex justify-between flex-col">
      <div>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/author" element={<Home />} />
            <Route path="/developments" element={<Developments />} />
            <Route path="/developments/:id" element={<DevelopmentsBlog />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/articles" element={<AdminArticles />} />
            <Route path="/admin/articles/new_article" element={<NewArticle />} />
            <Route path="/admin/articles/update_article/:id" element={<UpdateArticle />} />
            <Route path="/admin/articles/new_post/:id" element={<NewPost />} />


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

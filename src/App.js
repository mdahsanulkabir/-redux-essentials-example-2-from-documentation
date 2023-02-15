
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './app/Navbar'
import { AddPostForm } from './features/posts/AddPostForm';
import EditPostForm from './features/posts/EditPostForm';
import PostsList from './features/posts/PostsList';
import { SinglePostPage } from './features/posts/SinglePostPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <AddPostForm />
              <PostsList />
            </>
          }
          />
          {/* <Redirect to="/" /> */}
          <Route path='/posts/:postId' element={<SinglePostPage />} />
          <Route path='/editPost/:postId' element={<EditPostForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


import './App.css';
import ArticlesContainer from './containers/ArticlesContainer';

function App() {
  return (
    <div className="App">

      <header class="header-bar">
        <h1 className='header-bar__text'>better reddit</h1>
      </header>
      {/* <div className="about">
        <p>This page pulls posts from reddit's r/MMA subreddit.</p>
        <p>By default, 50 posts are pulled and sorted by 'hot' (reddit default).
          Posts can also be sorted by upvotes or comments.
          You can load more posts by clicking the button at the bottom of the page. 
          Happy scrolling.
        </p>
      </div> */}
      <div className="container">
        <ArticlesContainer />
      </div>
    </div>
  );
}

export default App;

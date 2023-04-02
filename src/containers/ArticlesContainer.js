import React, { useState, useEffect } from 'react';
import ArticleList from "../components/ArticleList";


const ArticlesContainer = () => {

    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortValue, setSortValue] = useState("");
    const [limit, setLimit] = useState(50);
    const [page, setPage] = useState("abandonedscifi")


    useEffect(() => {
        getArticles();
    }, [limit, page])


    const getArticles =  function () {
        fetch(`https://www.reddit.com/r/${page}.json?limit=${limit}`)
            .then(results => results.json())
            .then(articles => {
                setArticles(articles.data.children)
            })
    }


    const handleChange = function (event) {
        const chosenValue = event.target.value
        setSearchTerm(chosenValue)
    }


    const handlSortingChange = function (event) {
        const chosenSortValue = event.target.value
        setSortValue(chosenSortValue)
    }


    const setSearch = (event) => {
        event.preventDefault();
        const input = event.target.elements.subredditSearch;
        setPage(input.value);
    }


    const filteredArticles = articles.filter((article) => {
        return article.data.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    

    const sortedArticles = [...filteredArticles].sort((a, b) => {
        if (sortValue === "upvotes") {
            return b.data.ups - a.data.ups;
        } else if (sortValue === "comments") {
            return b.data.num_comments - a.data.num_comments;
        } else {
            return 1;
        }
    });



    return (
        <div>  
            <h1>imgreddit /r/{page}</h1>  

            <div className='subreddit-button__container'>
                {/* <p>Suggested image subreddits</p> */}
                <button onClick={() => setPage("dogswearinghats")} className='subreddit-button'>dogswearinghats</button>
                <button onClick={() => setPage("earthporn")} className='subreddit-button'>earthporn</button>
                <button onClick={() => setPage("pics")} className='subreddit-button'>pics</button>
                <button onClick={() => setPage("dogswearinghats")} className='subreddit-button'>dogswearinghats</button>
                <button onClick={() => setPage("earthporn")} className='subreddit-button'>earthporn</button>
                <button onClick={() => setPage("pics")} className='subreddit-button'>pics</button>
                <button onClick={() => setPage("dogswearinghats")} className='subreddit-button'>dogswearinghats</button>
                <button onClick={() => setPage("earthporn")} className='subreddit-button'>earthporn</button>
                <button onClick={() => setPage("pics")} className='subreddit-button'>pics</button>
                <button onClick={() => setPage("dogswearinghats")} className='subreddit-button'>dogswearinghats</button>
                <button onClick={() => setPage("earthporn")} className='subreddit-button'>earthporn</button>
                <button onClick={() => setPage("pics")} className='subreddit-button'>pics</button>
            </div>

            <div className="search-bar-container">

                <form onSubmit={setSearch}>
                    <input id="subredditSearch" placeholder='Search Subreddits'/>
                    <button type="submit">Search</button>
                </form>

                <input id="search" placeholder="Search Posts" onChange={handleChange}/>

                <select id="sort" onChange={handlSortingChange}>
                    <option value="">Hot</option>
                    <option value="upvotes">Upvotes</option>
                    <option value="comments">Comments</option>
                </select>
            </div>


            
            <div className="article-list-container">
                <ArticleList articles={sortedArticles} />
                <submit onClick={() => setLimit(limit + 25)} className='load-more-button' />
            </div>
        </div>
    )
}


export default ArticlesContainer;
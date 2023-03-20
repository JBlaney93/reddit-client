import React, { useState, useEffect } from 'react';
import ArticleList from "../components/ArticleList";


const ArticlesContainer = () => {

    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortValue, setSortValue] = useState("");
    const [limit, setLimit] = useState(50);
    const [page, setPage] = useState("mma")


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
            <div className="search-bar-container">
                <input id="search" placeholder="Search Posts" onChange={handleChange}/>

                <select id="sort" onChange={handlSortingChange}>
                    <option value="">Hot</option>
                    <option value="upvotes">Upvotes</option>
                    <option value="comments">Comments</option>
                </select>
            </div>

            <button onClick={() => setPage("javascript")} className='prev-page-button'>javascript</button>
            <button onClick={() => setPage("mma")} className='prev-page-button'>mma</button>
            <button onClick={() => setPage("pics")} className='prev-page-button'>pics</button>
            
            <div className="article-list-container">
                <ArticleList articles={sortedArticles} />
                <submit onClick={() => setLimit(limit + 25)} className='load-more-button' />
            </div>
        </div>
    )
}


export default ArticlesContainer;
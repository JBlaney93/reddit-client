import React, { useState, useEffect } from 'react';
import ArticleList from "../components/ArticleList";


const ArticlesContainer = () => {

    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortValue, setSortValue] = useState("");
    const [limit, setLimit] = useState(50);

    console.log("Search Term:", searchTerm)
    console.log("Search Term:", sortValue)

    useEffect(() => {
        getArticles();
    }, [limit])


    const getArticles =  function () {
        console.log(1)
        fetch(`https://www.reddit.com/r/mma.json?limit=${limit}`)
            .then(results => results.json())
            .then(articles => {
                setArticles(articles.data.children)
                console.log(2)
            })


        console.log(3)
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
            
            <div className="article-list-container">
                <ArticleList articles={sortedArticles} />
                <button onClick={() => setLimit(limit + 25)} className='load-more-button'>More Posts</button>
            </div>
        </div>
    )
}


export default ArticlesContainer;
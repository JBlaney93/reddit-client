// const ArticlesContainer = () => {
//     const [articles, setArticles] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [sortValue, setSortValue] = useState("");
//     const [limit, setLimit] = useState(50);
//     const [page, setPage] = useState(1);

//     useEffect(() => {
//         getArticles(page);
//     }, [limit, page])

//     const getArticles =  function (page) {
//         fetch(`https://www.reddit.com/r/mma.json?limit=${limit}&page=${page}`)
//             .then(results => results.json())
//             .then(articles => {
//                 setArticles(articles.data.children)
//             })
//     }

//     // handle change, handle sorting change, and filtered/sorted articles code

//     return (
//         <div>    
//             <div className="search-bar-container">
//                 <input id="search" placeholder="Search Posts" onChange={handleChange}/>
//                 <select id="sort" onChange={handlSortingChange}>
//                     <option value="">Hot</option>
//                     <option value="upvotes">Upvotes</option>
//                     <option value="comments">Comments</option>
//                 </select>
//             </div>
//             <div className="article-list-container">
//                 <ArticleList articles={sortedArticles} />
//                 <button onClick={() => setPage(page - 1)} className='prev-page-button'>Previous Page</button>
//                 <button onClick={() => setPage(page + 1)} className='next-page-button'>Next Page</button>
//             </div>
//         </div>
//     )
// }

// export default ArticlesContainer;

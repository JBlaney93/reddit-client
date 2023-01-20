import ArticleItem from "./ArticleItem"

const ArticleList = ({ articles }) => {
   
    const articleItems = articles.map((post, index) => {
        return <ArticleItem post={post.data.title} key={index} permalink={post.data.permalink} url={post.data.url} upVotes={post.data.ups} comments={post.data.num_comments} />
    })
   
   
    return (
        <div>
            {articleItems}

        </div>
    )
}

export default ArticleList;
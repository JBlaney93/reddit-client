
const ArticleItem = ({ post, permalink, url, upVotes, comments}) => {

    return (
        <div className="article-item">
            <div ><a href={url} className="article-item__header">{post}</a></div>
            <div className="article-item__votes-and-comments">
                <p className="upvotes">UpVotes: {upVotes}</p>
                <p className="comments">Comments: {comments}</p>
            </div>
            <div className='article-item__link'><a href={"https://www.reddit.com"+permalink} className='article-item__link-button'>Link to Reddit Thread</a></div>
            {/* <div><a href={url}>Link to Article</a></div> */}
        </div>
    )
}

export default ArticleItem;
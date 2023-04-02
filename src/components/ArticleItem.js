const ArticleItem = ({ post, permalink, url, upVotes, comments, image }) => {

    // Regex to match URLs that won't display/embedd
    const twitterRegex = /^https?:\/\/(www\.)?twitter\.com\/.+\/status\/\d+/;
    const instagramRegex = /^https?:\/\/(www\.)?instagram\.com\/+/;
    const imgurRegex = /^https?:\/\/(www\.)?imgur\.com\/\w+/;
    const youtubeRegex = /^https?:\/\/(www\.)?youtube\.com\/watch\?v=.+/;

    // Check if the image prop is a specific link
    const isTwitterLink = twitterRegex.test(image);
    const isInstagramLink = instagramRegex.test(image);
    const isImgurLink = imgurRegex.test(image);
    const isYoutubeLink = youtubeRegex.test(image);

    return (
        <div className="article-item">
            <div ><a href={url} className="article-item__header">{post}</a></div>

            <div className="media-div">
                {image && !isTwitterLink && !isInstagramLink && !isImgurLink && !isYoutubeLink &&(
                    <img src={image} alt='no image' className='image-style' />
                )}
                {isTwitterLink && (
                    <a href={image}>Link to twitter post</a>
                )}
                {isInstagramLink && (
                    <a href={image}>Link to instagram post</a>
                )}
                {isImgurLink && (
                    <a href={image}>Link to imgur post</a>
                )}
                {isYoutubeLink && (
                    <a href={image}>Link to youtube post</a>
                )}
            </div>


            <div className="article-item__votes-and-comments">
                <p className="upvotes">UpVotes: {upVotes}</p>
                    <div className='article-item__link'>
                        <a href={"https://www.reddit.com"+permalink} className='article-item__link-button'>
                            Reddit Thread
                        </a>
                    </div>
                <p className="comments">Comments: {comments}</p>
            </div>
        </div>
    )
}

export default ArticleItem;

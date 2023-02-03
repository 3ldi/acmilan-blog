import { useParams } from "react-router-dom";

// Create Article Page component
const ArticlePage = () => {
    
    const params = useParams();
    const articleId = params.articleId;
    
    return (
        <h1>This is the Article Page for the article with id {articleId}!</h1>
    );
}

export default ArticlePage;
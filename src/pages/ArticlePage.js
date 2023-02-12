import { useParams } from 'react-router-dom';
import articles from './articleContent';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    if (!article) {
        return <NotFoundPage />
    }

    return (
        <>
        <h1>{article.title}</h1>
        {article.content.map(paragraph => (
            <p>{paragraph}</p>
        ))}
        </>
    );
}

export default ArticlePage;
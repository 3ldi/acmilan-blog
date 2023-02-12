import { Link } from 'react-router-dom';
import articles from './articleContent';

//  Create Articles page component
const ArticlesListPage = () => {
    return (
        <>
            <h1>Articles</h1>
            {articles.map(article => (
                <Link key={article.name} className="article-list-item" to="{`/articles/${article.name}`}">
                    <h3>{article.title}</h3>
                    {/* Display the first 150 characters of the article */}
                    <p>{article.content[0].substring(0, 150)} ...</p>
                </Link>
            ))}
        </>       
    );
}

export default ArticlesListPage;
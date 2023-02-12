import articles from './articleContent';
import ArticlesList from '../components/ArticlesList';

//  Create Articles page component
const ArticlesListPage = () => {
    return (
        <>
            <h1>Articles</h1>
            <ArticlesList articles={articles} />
        </>       
    );
}

export default ArticlesListPage;
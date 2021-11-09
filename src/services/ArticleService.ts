
import {
  useQuery,
} from "@apollo/client";
import ARTICLES from '../querys/article';
import { ArticleInterface } from '../models/ArticleInterface';



export function GetArticle(nid: any) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { loading, error, data } = useQuery((ARTICLES(nid)));

    console.log(nid);
    if (loading) return" <p>Loading...</p>";
    if (error) return "<p>Error :(</p>";

    const { nodeById} = data;
    let article: ArticleInterface = nodeById;

    return article;
}


import {
  useQuery,
} from "@apollo/client";
import ARTICLES from '../querys/article';
import { ArticleInterface } from '../models/ArticleInterface';



export function GetArticle(nid: any) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { loading, error, data } = useQuery((ARTICLES(nid)));

    if (data){
      let article: ArticleInterface = data.nodeById;
  
      return article;
    }

}

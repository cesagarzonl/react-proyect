
import {
    useQuery,
  } from "@apollo/client";
  import {ARTICLES} from '../querys/article';

  
  

export function GetArticle(nid) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { loading, error, data } = useQuery(ARTICLES);
    if (loading) return false;
    if (error) return error;
    if (data){
    let article = data.nodeById;

    return article;
    }

}
  
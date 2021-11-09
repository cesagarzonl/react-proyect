import {
    useQuery,
  } from "@apollo/client";

 import SECTION from '../querys/section';
import { TaxonomyTermByID } from '../models/taxonomyTermById';
import { ArticleInterface } from '../models/ArticleInterface'

  
  export function GetSectionByID(nid: any) {

    const { loading, error, data } = useQuery((SECTION(nid)));
    if (loading) return false;
    if (error) return error;
    if (data) {
      let section: TaxonomyTermByID = data.taxonomyTermById;
      let Articlesections:ArticleInterface[] = data.nodeQuery.entities
  
      return {section,Articlesections};
    }

  }
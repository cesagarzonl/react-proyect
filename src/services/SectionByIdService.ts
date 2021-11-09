import {
    useQuery,
  } from "@apollo/client";

 import SECTION from '../querys/section';
import { TaxonomyTermByID } from '../models/taxonomyTermById';
 

  
  export function GetSectionByID(nid: any) {

    const { loading, error, data } = useQuery((SECTION(nid)));
    if (loading) return false;
    if (error) return error;
    if (data) {
      let sectionsList: TaxonomyTermByID = data.taxonomyTermById;
  
      return sectionsList;
    }

  }
import {
    useQuery,
  } from "@apollo/client";
  import SECTIONLIST from '../querys/sectionList';
  import { TaxonomyTerm } from '../models/TaxonomyTerm';
  
  
  
  export function GetSections() {


     // eslint-disable-next-line react-hooks/rules-of-hooks
      const { loading, error, data } = useQuery((SECTIONLIST));
      if (loading) return false;
      if (error) return false;
      if (data) {
        let sectionsList: TaxonomyTerm = data.taxonomyTermQuery.entities;
    
        return sectionsList;
      }

  }
  
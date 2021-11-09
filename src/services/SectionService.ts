import {
    useQuery,
  } from "@apollo/client";

import SECTIONLIST from '../querys/sectionList';
import { TaxonomyTerm } from '../models/TaxonomyTerm';

  export function GetSections() {
    
    const { loading, error, data } = useQuery((SECTIONLIST));
    if (loading) return false;
    if (error) return error;
    if (data) {
      let sectionsList: TaxonomyTerm = data.taxonomyTermQuery.entities;
  
      return sectionsList;
    }

  }
 
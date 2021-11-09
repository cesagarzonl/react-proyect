import {
    gql
  } from "@apollo/client";
  
  const SECTION  = (nid) =>   gql`query {
    taxonomyTermById (id: "${nid}") {
      ... on TaxonomyTermSection {tid
        path {
          alias
        }
        entityLabel
        description {processed
        }
      }
    }
  }`;
  
  export default SECTION;
  
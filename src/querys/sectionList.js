import {
    gql
  } from "@apollo/client";
  
  const SECTIONLIST =  gql`
  query {
    taxonomyTermQuery (filter: {
      conditions: [{
        field: "vid",
        operator: EQUAL,
        value: "section"
      }]
    },
        limit: 20) {
      entities {
        ... on TaxonomyTermSection {
          tid
          path {
            alias
          }
        }
      }
    }
  }`;
  
  export default SECTIONLIST;
  
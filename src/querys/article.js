import {
  gql
} from "@apollo/client";

const ARTICLES = (nid) =>  gql`
  query {
    nodeById(id: "${nid}") {
      ... on NodeArticle {
        nid
        path {
          alias
        }
        fieldTitleSeo
        fieldTitleShare
        title
        body {
          summary
          processed
        }
        fieldImage {
          targetId
          entity {
            thumbnail {
              alt
              title
              width
              height
              url
              derivative (style: DESTACADOPRINCIPALHOME) {
                height
                width
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default ARTICLES;

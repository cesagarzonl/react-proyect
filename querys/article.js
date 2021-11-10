import { gql } from "@apollo/client";

const ARTICLES =  gql`
query {
  nodeById(id: "156584") {
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
}`;

export default ARTICLES;
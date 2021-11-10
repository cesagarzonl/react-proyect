import { gql } from "@apollo/client";

const SECTION = gql`
query {
taxonomyTermById (id: "1") {
    ... on TaxonomyTermSection {tid
    path {
        alias
    }
    entityLabel
    description {processed
    }
    }
}
nodeQuery (filter: {
    conditions: [{
        field: "field_section",
        operator: EQUAL,
        value: "1"
    },
    {
        field: "type",
        operator: EQUAL,
        value: "article"
    }]
    },
    limit: 5,
    sort: {
        field: "nid",
    direction: DESC
    }) {
    entities {
        ... on NodeArticle {
        nid
        title
        body {
            summary
        }
        path {
            alias
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
                derivative (style: THUMBNAIL) {
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
}`;

export default SECTION;
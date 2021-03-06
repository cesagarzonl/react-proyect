import React from 'react';
import {
  useQuery,
} from "@apollo/client";
import ARTICLES from '../services/querys/article';


export default function Articles() {

    console.log(ARTICLES);

    const { loading, error, data } = useQuery(ARTICLES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const { nodeById } = data;
    const { body, fieldImage, title} = nodeById;

    return(
      <>
        <h1>{title}</h1>
        <img src = {fieldImage.entity.thumbnail.url}></img>
        <div>{body.summary}</div>
      </>
      
    );
  }
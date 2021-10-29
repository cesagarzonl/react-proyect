import React from 'react';
import {
  useQuery,
} from "@apollo/client";
import ARTICLES from '../querys/querys';


export default function Articles() {

    const { loading, error, data } = useQuery(ARTICLES);

    const { nodeById } = data;

    const { body, fieldImage, title} = nodeById;
  
    console.log('data',nodeById);
    console.log('loading',loading);
    console.log('error',error);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return(
      <>
        <h1>{title}</h1>
        <img src = {fieldImage.entity.thumbnail.url}></img>
        <div>{body.summary}</div>
      </>
      
    );
  }
import React from 'react';


import {GetArticle} from '../services/ArticleService';


export default function Articles() {

  var articulo = GetArticle(156584)
  if (articulo){
    return <div>
      <h1>{articulo.title}</h1>
      <img src={articulo.fieldImage.entity.thumbnail.url} ></img>
      
    </div>;
  }else {
    return <div/>
  }

}
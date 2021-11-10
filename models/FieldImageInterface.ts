
export class FieldImageInterface {
    targetId: number;
    entity: Entity;
  
    constructor(targetId: number, entity: Entity){
      this.targetId = targetId;
      this.entity = entity;
    }
  }
  
  class Entity {
    thumbnail: Thumbnail;
    constructor(thumbnail: Thumbnail){
      this.thumbnail = thumbnail;
    }
  }
  
  class Thumbnail {
    alt: string;
    title: string;
    width: string;
    heigh: string;
    url: string;
    derivate: Derivative;
  
    constructor(alt: string, title: string, width: string, heigh: string, url: string, derivate: Derivative) {
      this.alt = alt;
      this.title = title
      this.width =width;
      this.heigh = heigh;
      this.url = url;
      this.derivate = derivate;
    }
  }
  
  class Derivative {
    width: string;
    height: string;
    url: string;
  
    constructor (width: string, height: string, url:string) {
      this.width = width;
      this.height = height;
      this.url = url;
    }
  }
  
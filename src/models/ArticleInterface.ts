import { FieldImageInterface } from "./fieldImageInterface";
export class Path {
  alias: string;
  constructor(alias: string){
    this.alias = alias;
  }
}

class Body {
  summary: string;
  processed: string;

  constructor(summary: string, processed: string) {
    this.summary = summary;
    this.processed = processed;
  }
  
}

export class ArticleInterface {
  nid: number;
  path: Path;
  fieldTitleSeo: string;
  fieldTitleShare: string;
  title: string;
  body: Body;
  fieldImage: FieldImageInterface;

  constructor(nid:number, path: Path, fieldTitleSeo:string, fieldTitleShare: string, title: string, body:Body, fieldImage: FieldImageInterface) {
    this.nid = nid;
    this.path = path;
    this.fieldTitleSeo = fieldTitleSeo;
    this.fieldTitleShare = fieldTitleShare;
    this.title = title;
    this.body = body;
    this.fieldImage = fieldImage
  }
}
import { TaxonomyTerm } from './TaxonomyTerm'
import { Path } from './ArticleInterface';

export class TaxonomyTermByID extends TaxonomyTerm{


    entityLabel:string;
    description:description

    constructor(entityLabel:string,description:description,tid: number, path: Path){
        super(tid, path);
        this.entityLabel = entityLabel
        this.description = description
    }

}
class description {
    processed:string;
    constructor(processed:string){
        this.processed= processed
    }
}
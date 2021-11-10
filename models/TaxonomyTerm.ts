import { Path } from './ArticleInterface';
export class TaxonomyTerm {
    tid: number;
    path: Path;

    constructor(tid: number, path: Path) {
        this.tid = tid;
        this.path = path
    }
}
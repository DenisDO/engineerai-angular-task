import { IItem } from './item-details.interface';

export interface IResponse {
    hits: IItem[];
    nbHits: number;
    page: number;
    nbPages: number;
    hitsPerPage: number;
    processingTimeMS: number;
    exhaustiveNbHits: boolean;
    query: string;
    params: string;
}

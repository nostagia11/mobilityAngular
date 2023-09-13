import { Ecole } from "./ecole";

export class Offers{
    id!: number;
    name!: String;
    diplome!: String;
    description!: String;
    cond!: String;
    duree!: String;
    mobilite!: String;
    destination!: String;
    domaine!: String;
    ecoles!:Ecole;


}
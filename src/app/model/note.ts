import { IonImg } from "@ionic/angular"

export interface Note{
    id?:string,
    title:string,
    description:string,
    photo?:string,
    location?:string,
    hided?:boolean
}
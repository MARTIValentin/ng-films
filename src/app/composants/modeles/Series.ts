import {Saisons} from "./Saisons";

export class Series{

  private _id: number;
  private _nom : string;
  private _image: any;
  private _saisons : Saisons[];


  constructor(id: number, nom: string, image: any, saisons: Saisons[]) {
    this._id = id;
    this._nom = nom;
    this._image = image;
    this._saisons = saisons;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get image(): any {
    return this._image;
  }

  set image(value: any) {
    this._image = value;
  }

  get saisons(): Saisons[] {
    return this._saisons;
  }

  set saisons(value: Saisons[]) {
    this._saisons = value;
  }
}

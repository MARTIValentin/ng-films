import {Series} from "./Series";

export class Saisons{

  private _id: number;
  private _numero : number;
  private _image: any;
  private _serie : Series;


  constructor(id: number, numero: number, image: any, serie: Series) {
    this._id = id;
    this._numero = numero;
    this._image = image;
    this._serie = serie;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get numero(): number {
    return this._numero;
  }

  set numero(value: number) {
    this._numero = value;
  }

  get image(): any {
    return this._image;
  }

  set image(value: any) {
    this._image = value;
  }

  get serie(): Series {
    return this._serie;
  }

  set serie(value: Series) {
    this._serie = value;
  }
}

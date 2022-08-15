import P5 from "p5";

export default class Canvas{
    _width:number;
    _height:number;
    _area:number;
    constructor(width:number,height:number,area:number)
    {
        this._width = width;
        this._height = height;
        this._area = area;
    }
}
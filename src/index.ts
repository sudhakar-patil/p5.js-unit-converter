import _ from "lodash";
import P5 from "p5";
import Canvas from "./canvas"

let units = ['Length', 'Temperature', 'Area', 'Volume'];
let xAxis =0;
let yAxis =0;
let windowWidth=0;
let windowHeight=0;

// Creating the sketch itself
const sketch = (p5: P5) => {

	// The sketch setup method 
	p5.setup = () => {
		// Creating and positioning the canvas
		const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
		canvas.parent("app");
		windowWidth = p5.windowWidth;
		windowHeight = p5.windowHeight;
	};

	// The sketch draw method
	p5.draw = () => {
		// Configuring the canvas
		p5.background(0);
		p5.noStroke();
        let arr = cal(new Canvas(p5.windowWidth,p5.windowHeight,p5.windowWidth * p5.windowHeight),2);
        arr.forEach((x)=>{
        
			if(x._width == windowWidth)
			{
			  p5.fill(255,3,5);
			   p5.rect(xAxis, yAxis,x._width, x._height);
			   xAxis += x._width;
			   windowWidth -= x._width;
			}
			if(x._height == windowHeight)
			{
				p5.fill(0,3,255);
               p5.rect(xAxis, yAxis,x._width, x._height);
			   xAxis += x._height;
			   windowHeight -= x._height; 
			}

		})
	};
};

function cal(obj: Canvas, num: number) {
	var arr = [];
	arr.push(obj);
	for (let i = 0; i < num; i++) {
		let topelement = arr[0];
		if (topelement._width > topelement._height) {
			let newel: any = topelement._width / 2;
			let first: any = { w: newel, h: topelement._height, a: newel * topelement._height }
			let second: any = { w: newel, h: topelement._height, a: newel * topelement._height }
			arr = arr.slice(1);
			arr.push(first);
			arr.push(second);
			console.log(`If ${JSON.stringify(arr)}`);
		}
		else {
			let newel: any = topelement._height / 2;
			let first: any = { w: topelement._width, h: newel, a: newel * topelement._width }
			let second: any = { w: topelement._width, h: newel, a: newel * topelement._width }
			arr = arr.slice(1);
			arr.push(first);
			arr.push(second);
			console.log(`else ${JSON.stringify(arr)}`);
		}
		arr.sort((a, b) => {
			return a._area - b._area;
		}).reverse();
		console.log(`last ${JSON.stringify(arr)}`);
	}
	return arr;
}

new P5(sketch);

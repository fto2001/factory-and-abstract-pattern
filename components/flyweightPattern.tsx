class Circle {

    constructor(private color: string) { }

    public draw(x: number, y: number, radius: number) {
        console.log(`Drawing a ${this.color} circle at (${x},${y}) with radius ${radius}`);
    }
}

class CircleFactory {
    private circles: { [color: string]: Circle } = {};

    public getCircle(color: string): Circle {
        if (!this.circles[color]) {
            this.circles[color] = new Circle(color);
        }

        return this.circles[color];
    }
}

const factory = new CircleFactory();

const circle1 = factory.getCircle('red');
circle1.draw(10, 10, 5);

const circle2 = factory.getCircle('blue');
circle2.draw(20, 20, 10);

const circle3 = factory.getCircle('red');
circle3.draw(30, 30, 8);

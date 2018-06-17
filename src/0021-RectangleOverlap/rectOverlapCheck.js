//http://stackoverflow.com/a/306332/3892730
//Find out if two rectangles overlap or not

var Point = function Point(x,y){
    if (!x) x = 0;
    if (!y) y = 0;
    return { x: x, y: y};
}

var Rectangle = function Rectangle(s, e) {
    if (!s) s = new Point();
    if (!e) e = new Point();

    var CollidesWith = function (r) {
        /*
        if (RectA.X1 < RectB.X2 && RectA.X2 > RectB.X1 &&
            RectA.Y1 < RectB.Y2 && RectA.Y2 > RectB.Y1) 
        Say you have Rect A, and Rect B. Proof is by contradiction. Any one of four conditions guarantees that no overlap can exist:
        Cond1. If A's left edge is to the right of the B's right edge, - then A is Totally to right Of B
        Cond2. If A's right edge is to the left of the B's left edge, - then A is Totally to left Of B
        Cond3. If A's top edge is below B's bottom edge, - then A is Totally below B
        Cond4. If A's bottom edge is above B's top edge, - then A is Totally above B
        */
        
        return (s.x < r.e.x && e.x > r.s.x &&
            s.y < r.e.y && e.y > r.s.y);
    }
    return { s: s, e: e, CollidesWith: CollidesWith }
}

var r1 = new Rectangle(new Point(), new Point(100,100));
var r2 = new Rectangle(new Point(99,99), new Point(105,105));
var r3 = new Rectangle(new Point(199,199), new Point(250,250));

console.log(r1.CollidesWith(r2));
console.log(r1.CollidesWith(r3));
console.log(r2.CollidesWith(r3));

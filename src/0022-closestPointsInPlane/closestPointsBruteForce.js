//Find closest pair of points in the given plane

/*
minDist = infinity
for i = 1 to length(P) - 1
 for j = i + 1 to length(P)
  let p = P[i], q = P[j]
  if dist(p, q) < minDist:
   minDist = dist(p, q)
   closestPair = (p, q)
return closestPair
*/

function Point(x, y) {
    if (!x) x = 0;
    if (!y) y = 0;
    return { x: x, y: y }
}

var set = [];
set.push(new Point(5, 5));
set.push(new Point(50, 10));
set.push(new Point(1, 1));
set.push(new Point(1.1, 1.1));
set.push(new Point(30, 31));
set.push(new Point(330, 11));
set.push(new Point(33330, 31));
function getMinDistPointsBruteForce(set) {
    var minDist = Infinity;
    var closestPair = {};
    for (var i = 0; i < set.length - 1; i++) {
        for (j = i + 1; j < set.length; j++) {
            var p = set[i];
            var q = set[j];
            var distance = dist(p, q);
            if (distance < minDist) {
                closestPair.q = q;
                closestPair.p = p;
                minDist = distance;
            }
        }
    }
    return closestPair;
}

function dist(p, q) {
    // h = math.sqrt(math.pow(a,2) + math.pow(b,2));
    var a = Math.abs(p.x - q.x);
    var b = Math.abs(p.y - q.y);
    var h = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    return h;
}

getMinDistPointsBruteForce(set);

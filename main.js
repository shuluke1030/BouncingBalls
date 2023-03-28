function bouncingBall(h,  bounce,  window) {
 if(h <= 0 || bounce <= 0 || bounce >= 1 || window >= h){
    return -1;
 }
 let count = 1;
 while(h > window){
    h = h * bounce;
    count = count + 2;
 }
 return count - 2
}
console.log(bouncingBall(30.0, 0.66, 1.5)) ;
function getTriangleArea(a, h) {
  if (a, h <= 0) {
      return 'Nieprawidłowe dane';
  }
  else { 
    return a*h/2;
  }
}
console.log(getTriangleArea(10, 6));



//Zmienne przechowujące pole trójkąta
var triangle1Area = getTriangleArea(9, 4);
var triangle2Area = getTriangleArea(2, 10);
var triangle3Area = getTriangleArea(3, 5);


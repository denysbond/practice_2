// Дан массив координат. Напишите функцию, которая вычисляет минимальный ограничивающий прямоугольник.
// То есть такой прямоугольник, в который попадают все точки, и стороны прямоугольника параллельны осям.
//  Если передан пустой массив координат, верните нули для всех полей результата.

export default function boundingRect(coordsList) {
  let xCoords = coordsList.map((obj) => {
    return obj.x;
  });
  let yCoords = coordsList.map((obj) => {
    return obj.y;
  });

  if (coordsList.length == 0) {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };
  }
  return {
    top: Math.max(...yCoords),
    bottom: Math.min(...yCoords),
    left: Math.min(...xCoords),
    right: Math.max(...xCoords),
  };
}

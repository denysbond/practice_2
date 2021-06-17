// Настало время писать серьёзные программы: в ваших руках судьба экспедиции на Марс. Для управления роботом с Земли поступают
// команды вида "go 2", "turn left", "go 1", "turn right", "go 3". Но из-за проблем со связью команды могут прийти в неправильном порядке.
//  Благо у каждой команды есть её порядковый номер, по которому можно восстановить правильную последовательность команд.

// Также могут приходить команды, неизвестные марсоходу. Причина этой проблемы выясняется, но в качестве наказания у команды разработки
//  уже отобрали их любимую кофемашину. Пока что если марсоход встречает неизвестную команду, он должен её проигнорировать.

// В начале пути марсоход находится в точке { x: 0, y: 0 } и направлен на север (вверх). Имея полученные с Земли данные, определите
//  конечные координаты, куда попадёт марсоход после выполнения всех команд.

export default function runRover(commandsList) {
  let position = {
    x: 0,
    y: 0,
  };

  let turn = 0;

  const steps = [
    (distance) => (position.y += distance),
    (distance) => (position.x += distance),
    (distance) => (position.y -= distance),
    (distance) => (position.x -= distance),
  ];

  const commandSort = commandsList
    .sort((a, b) => a.order - b.order)
    .map((obj) => obj.command.split(" "));

  commandSort.forEach((el) => {
    if (el[1] === "left") {
      return (turn = turn === 0 ? 3 : turn - 1);
    } else if (el[1] === "right") {
      return (turn = turn === 3 ? 0 : turn + 1);
    }

    switch (el[0]) {
      case "go":
        steps[turn](Number(el[1]));
        break;
    }
  });
  return position;
}

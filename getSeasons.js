function getSeason(num) {
  let seasons = ["Зима", "Весна", "Лето", "Осень"];
  if (num >= 1 && num <= 12)
    return `Время года: ${seasons[Math.floor((num % 12) / 3)]}`;
  else return "Неправильный номер месяца";
}

export default getSeason;

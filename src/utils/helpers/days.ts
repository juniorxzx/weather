export const formatDays = (timestamp: number): string => {
  const data = new Date(timestamp * 1000);
  const today = new Date();

  const now =
    data.getDate() === today.getDate() &&
    data.getMonth() === today.getMonth() &&
    data.getFullYear() === today.getFullYear();
  const h = data.getHours().toString().padStart(2, "0");
  const min = data.getMinutes().toString().padStart(2, "0");
  if (now) {
    return `Hoje - ${h}:${min}`;
  }
  const days = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  const nameDay = days[data.getDay()];

  const day = data.getDate().toString().padStart(2, "0");
  const month = (data.getMonth() + 1).toString().padStart(2, "0");

  return `${nameDay}, ${day}/${month}`;
};

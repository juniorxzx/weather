export const formatUnixTimestamp = (timestamp: number): string => {
  const data = new Date(timestamp * 1000);

  const dia = data.getDate().toString().padStart(2, "0");
  const mes = (data.getMonth() + 1).toString().padStart(2, "0");
  const ano = data.getFullYear();
  const horas = data.getHours().toString().padStart(2, "0");
  const minutos = data.getMinutes().toString().padStart(2, "0");

  const dataHoraFormatada = `${dia}/${mes}/${ano} - ${horas}:${minutos}`;

  return dataHoraFormatada;
};

export const nowToHHMM = () => {
  const d = new Date();
  return `${d.getHours()}:${d.getMinutes().toString().padStart(2, "0")}`;
};

export const DAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

export const DateToDDMM = (date) =>
  `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}`;

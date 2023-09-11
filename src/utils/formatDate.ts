export function formatDate(date: string | Date): string {
  const dateObject = typeof date === "string" ? new Date(date) : date;

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  };

  options.timeZone = "Europe/London";

  const formattedDate = dateObject.toLocaleDateString("pt-BR", options);

  return formattedDate;
}

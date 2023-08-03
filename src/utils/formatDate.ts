export function formatDate(date: string | Date): string {
  const formattedDate = new Date(date).toLocaleDateString("en-GB");

  return formattedDate;
}

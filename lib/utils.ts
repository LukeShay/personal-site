export function reformatDate(fullDate: string) {
  const date = new Date(fullDate);
  return date.toDateString().slice(4);
}

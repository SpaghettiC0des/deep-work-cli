export function isUrlValid(url: string): boolean {
  return /[\w#%()+./:=?@~]{2,256}\.[a-z]{2,6}\b([\w#%&+./:=?@~-]*)/.test(url);
}

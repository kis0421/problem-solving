function solution(new_id) {
  let newId = new_id.toLowerCase()
  .replace(/[^\.a-z0-9-_]/g, '')
  .replace(/\.+/g, '.')
  .replace(/^\.|\.+$/, '');
    
  if (newId === "") {
    newId = "a";
  }
  newId = newId.substring(0, 15).replace(/\.+$/, '');
  while (newId.length < 3) {
    newId = `${newId}${newId[newId.length - 1]}`;
  }
  return newId;
}

export function getLocalStorage(listName) {
  console.log("HERE",listName)
  const saved = localStorage.getItem(listName);
  return saved && saved.length > 0 ? JSON.parse(saved) : [];
}

export function setLocalStorage(listName, items) {
  localStorage.setItem(listName, JSON.stringify(items));
}

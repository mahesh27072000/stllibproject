const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key) => {
    const items = JSON.parse(localStorage.getItem(key));
    return items;
};

const removeItem = (key) => {
    localStorage.removeItem(key);
};

const appLocalStorage = { getItem, setItem, removeItem };
export default appLocalStorage;

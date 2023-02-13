const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key) => {
    const items = JSON.parse(localStorage.getItem(key));
    return items;
};
const appLocalStorage = { getItem, setItem };
export default appLocalStorage;

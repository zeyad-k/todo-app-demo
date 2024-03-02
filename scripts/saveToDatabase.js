const saveToDatabase = (key, data) => {
	localStorage.setItem(key, JSON.stringify(data));

};
export default saveToDatabase;

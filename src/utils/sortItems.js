export const sortItems = (items) => {
	return items.sort((a, b) => new Date(b.date) - new Date(a.date));
};

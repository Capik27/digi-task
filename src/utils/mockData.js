const mockData = [];

const max = 12;
for (let i = 0; i < max; i++) {
	mockData.push({
		brand: "Брэнд " + i,
		description:
			"Полное название товара в несколько строк для вида с обрывом в конце вот так вот да вот так вот",
		price: (Math.random() * 10000).toFixed(0),
		sale: Math.random().toFixed(2),
		id: new Date().toISOString() + i,
		currensy: "₽",
	});
}

export default mockData;

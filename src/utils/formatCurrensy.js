export default function formatCurrensy(number) {
	return new Intl.NumberFormat().format(number);
}

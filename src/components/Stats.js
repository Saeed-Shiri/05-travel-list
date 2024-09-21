export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Srart adding some items to your packing list 🚀</em>
      </footer>
    );
  const itemsCount = items.length;
  const packedCount = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((packedCount / itemsCount) * 100);
  return (
    <footer className="stats">
      <em>
        {itemsCount === packedCount
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${itemsCount} items on your list and you already packed ${packedCount} (${packedPercent}%)`}
      </em>
    </footer>
  );
}

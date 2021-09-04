const Table = ({ headers, children }) => (
  <section className="overflow-y-hidden w-full rounded-lg">
    <table className="w-full text-xs">
      <thead>
        <tr className="font-semibold text-left text-gray-700 bg-gray-200">{headers}</tr>
      </thead>
      <tbody className="text-gray-800 bg-white">{children}</tbody>
    </table>
  </section>
);

export default Table;

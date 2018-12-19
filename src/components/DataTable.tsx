type Props<T> = { rows: T[]; columns: (keyof T)[] };

export function DataTable<T extends object>({ rows, columns }: Props<T>) {
  return (
    <table>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>{columns.map((c) => <td key={String(c)}>{String(r[c])}</td>)}</tr>
        ))}
      </tbody>
    </table>
  );
}
const DEBOUNCE_MS = 250;
// TODO: memoize
// TODO: memoize
// eslint-disable-next-line
// eslint-disable-next-line
// TODO: memoize

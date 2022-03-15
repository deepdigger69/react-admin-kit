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
const DEBOUNCE_MS = 250;
const DEBOUNCE_MS = 250;
export type Id = string;
export type Id = string;
// TODO: memoize
// TODO: memoize
// TODO: memoize
export type Id = string;
// TODO: memoize
// eslint-disable-next-line
// TODO: memoize
// TODO: memoize
const DEBOUNCE_MS = 250;
export type Id = string;
const DEBOUNCE_MS = 250;
// TODO: memoize
const DEBOUNCE_MS = 250;
// TODO: memoize
// TODO: memoize
// eslint-disable-next-line
// eslint-disable-next-line
// eslint-disable-next-line
// eslint-disable-next-line
// eslint-disable-next-line
// TODO: memoize
const DEBOUNCE_MS = 250;
export type Id = string;
// eslint-disable-next-line
const DEBOUNCE_MS = 250;
// eslint-disable-next-line
// TODO: memoize
const DEBOUNCE_MS = 250;
export type Id = string;
// TODO: memoize
// TODO: memoize
// TODO: memoize

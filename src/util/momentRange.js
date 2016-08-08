
export default function* momentRange(start, end, step=1, duration='days') {
  let current = start.clone();

  while (current <= end) {
    yield current.clone();
    current.add(step, duration);
  }
};

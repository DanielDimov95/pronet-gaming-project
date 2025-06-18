export async function fetchHouses(page: number, pageSize: number) {
  const res = await fetch(
    `https://anapioficeandfire.com/api/houses?page=${page}&pageSize=${pageSize}`
  );
  if (!res.ok) throw new Error('Failed to fetch houses');
  return res.json();
}
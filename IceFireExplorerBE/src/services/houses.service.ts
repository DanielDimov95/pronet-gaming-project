export async function fetchHouses(page: number, pageSize: number) {
  const res = await fetch(
    `https://anapioficeandfire.com/api/houses?page=${page}&pageSize=${pageSize}`
  );
  if (!res.ok) throw new Error('Failed to fetch houses');
  return res.json();
}

export async function fetchHouse(houseId: string) {
  const res = await fetch(`https://anapioficeandfire.com/api/houses/${houseId}`);
  if (!res.ok) throw new Error('Failed to fetch house');
  return res.json();
}
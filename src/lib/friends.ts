export async function getFriends() {
  const res = await fetch("http://localhost:3000/friends.json", {
    cache: "no-store",
  });
  return res.json();
}
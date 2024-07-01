import PocketBase from "pocketbase";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);

  const { familyID } = params;

  const family = await pb
    .collection("families")
    .getOne(familyID, { expand: "adults,children" });

  return family;
}

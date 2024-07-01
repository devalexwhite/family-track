import PocketBase from "pocketbase";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);

  const { familyID } = params;

  const events = await pb.collection("events").getList(1, 50, {
    filter: `family="${familyID}"`,
    sort: "-time",
    expand: "children,eventType,user",
  });

  let dateBuckets = new Map();

  events.items.forEach((event) => {
    const utcTime = new Date(event.time);
    const localTime = new Date(utcTime.toLocaleString());

    const dateKey = localTime.toISOString().split("T")[0];

    if (!dateBuckets.has(dateKey)) {
      dateBuckets.set(dateKey, []);
    }

    console.log(event.expand);
    dateBuckets.get(dateKey).push(event);
  });

  return { eventsBuckets: dateBuckets };
}

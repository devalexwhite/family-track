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

    const dateKey = localTime.toLocaleDateString().split("T")[0];

    if (!dateBuckets.has(dateKey)) {
      dateBuckets.set(dateKey, []);
    }

    dateBuckets.get(dateKey).unshift(event);
  });

  if (!dateBuckets.has(new Date().toLocaleDateString().split("T")[0])) {
    dateBuckets.set(new Date().toLocaleDateString().split("T")[0], []);
  }

  const sortedDateBuckets = Array.from(dateBuckets.entries())
    .sort((a, b) => new Date(b[0]) - new Date(a[0]))
    .map(([dateKey, events]) => ({ dateKey, events }));

  const dateBucketsArray = sortedDateBuckets.map(({ dateKey, events }) => ({
    dateKey,
    events: events.sort((a, b) => new Date(b.time) - new Date(a.time)),
  }));

  const dateBucketsDescending = dateBucketsArray.sort(
    (a, b) => new Date(b.dateKey) - new Date(a.dateKey)
  );

  const family = await pb.collection("families").getOne(familyID, {
    expand: "children",
  });

  const eventTypes = await pb.collection("eventTypes").getFullList({
    filter: `family="${familyID}"`,
  });

  return { eventsBuckets: dateBucketsDescending, family, eventTypes };
}

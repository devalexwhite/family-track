export const load = async ({ locals }) => {
  let families = [];

  if (locals.user) {
    families = await locals.pb.collection("families").getList();
  }

  return {
    user: locals.user,
    families: families.items,
  };
};

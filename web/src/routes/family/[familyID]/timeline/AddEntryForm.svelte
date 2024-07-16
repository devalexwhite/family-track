<script>
  import { page } from "$app/stores";
  import PocketBase from "pocketbase";

  const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);

  export let visible;
  export let didClose;

  let children = [];
  let type = [];
  let time = new Date();

  function handleClose(e) {
    e.preventDefault();
    didClose();
  }

  function onSave() {
    const data = {
      family: $page.data.family.id,
      user: "imqeqyu5fcljkbe",
      children,
      eventType: type,
      // "notes": "test",
      // "quantity": 123,
      time: new Date(time).toUTCString(),
    };

    try {
      const result = pb.collection("events").create(data);
      handleClose();
    } catch (e) {}
  }
</script>

<dialog class="modal" open={visible}>
  <div class="modal-box">
    <h3 class="text-lg font-bold mb-4">Add an event</h3>
    <form method="dialog" class="flex flex-col gap-4" on:submit={handleClose}>
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">👶 Who?</span>
        </div>
        <select
          class="select select-bordered"
          name="child"
          bind:value={children}
          multiple
        >
          {#each $page.data.family.expand.children as child}
            <option value={child.id}>{child.name}</option>
          {/each}
        </select>
      </label>
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">🔍 What?</span>
        </div>
        <select
          name="eventType"
          class="select select-bordered"
          bind:value={type}
        >
          {#each $page.data.eventTypes as type}
            <option value={type.id}>{type.name}</option>
          {/each}
        </select>
      </label>
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">🕐 When?</span>
        </div>
        <input
          type="datetime-local"
          class="input input-bordered"
          name="time"
          bind:value={time}
        />
      </label>
      <div class="flex flex-row w-full gap-4 pt-4">
        <button class="btn btn-primary flex-1" on:click={onSave}>Save</button>
        <button class="btn flex-1">Close</button>
      </div>
    </form>
  </div>
</dialog>

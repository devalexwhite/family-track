<script>
  import AddEntryForm from "./AddEntryForm.svelte";

  export let data;
  let entryFormVisible = false;

  function showEntryForm() {
    entryFormVisible = true;
  }
</script>

<AddEntryForm
  visible={entryFormVisible}
  didClose={() => (entryFormVisible = false)}
/>

<div class=" container mx-auto p-8 flex flex-col gap-16">
  <h1 class="font-black text-6xl">Events</h1>
  {#each data.eventsBuckets as bucket}
    <section>
      <header class="mb-12 flex flex-row items-center justify-center gap-8">
        <div class="h-[1px] bg-accent flex-1"></div>
        <h3 class="font-medium text-4xl">
          {#if new Date().toDateString() == new Date(bucket[0]).toDateString()}
            Today
          {:else}
            {bucket[0]}
          {/if}
        </h3>
        <div class="h-[1px] bg-accent flex-1"></div>
      </header>
      <main>
        {#if new Date().toDateString() == new Date(bucket[0]).toDateString()}
          <div
            class="w-full px-8 py-14 border border-dashed border-accent rounded-xl mb-8 hover:bg-primary hover:text-primary-content text-primary cursor-pointer"
          >
            <button
              class="w-full h-full font-black text-3xl text-center"
              on:click={showEntryForm}
            >
              Add Event
            </button>
          </div>
        {/if}
        <ul class="flex flex-col gap-8">
          {#each bucket[1] as event}
            <li
              class="card bg-base-200 text-base-content hover:bg-accent hover:text-accent-content transition-all w-full shadow-sm"
            >
              <div class="card-body flex flex-row justify-between items-center">
                <div class="flex flex-row items-end justify-center">
                  {#each event.expand.children as child}
                    <div class="flex flex-col gap-2 justify-center w-fit">
                      <div class="avatar">
                        <div class="rounded-full w-16">
                          <img
                            src={`https://api.dicebear.com/9.x/fun-emoji/svg?seed=${encodeURI(child.name)}`}
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      <div class="font-bold text-sm text-center">
                        {child.name}
                      </div>
                    </div>
                  {/each}
                </div>
                <div class="flex flex-col items-end text-right">
                  <div class="text-3xl font-black">
                    {event.expand.eventType.name}
                  </div>
                  <div>
                    {new Date(event.time).toLocaleTimeString()}
                  </div>
                </div>
              </div>
            </li>
          {/each}
        </ul>
      </main>
    </section>
  {/each}
</div>

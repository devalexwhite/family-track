<script>
  export let data;
</script>

<div class=" container mx-auto p-8 flex flex-col gap-16">
  <h1 class="font-black text-6xl">Events</h1>
  {#each data.eventsBuckets as bucket}
    <section>
      <header class="mb-12 flex flex-row items-center justify-center gap-8">
        <div class="h-[1px] bg-accent flex-1"></div>
        <h3 class="font-medium text-4xl">{bucket[0]}</h3>
        <div class="h-[1px] bg-accent flex-1"></div>
      </header>
      <main>
        <ul class="flex flex-col gap-8">
          {#each bucket[1] as event}
            <li
              class="card bg-neutral text-neutral-content w-48 hover:bg-accent hover:text-accent-content transition-all w-full"
            >
              <div class="card-title">{event.expand.eventType.name}</div>
              <div class="card-body">Hi</div>
            </li>
          {/each}
        </ul>
      </main>
    </section>
  {/each}
</div>

<script>
  export let data;
</script>

<div class=" container mx-auto p-8 flex flex-col gap-16">
  <h1 class="font-black text-6xl">Your family</h1>
  <section>
    <header class="mb-4">
      <h3 class="font-medium text-4xl">The adults</h3>
    </header>
    <ul class="flex flex-row flex-wrap gap-8">
      {#each data.expand.adults as adult}
        <li>
          <a
            href="#"
            class="card bg-primary text-primary-content w-48 hover:bg-accent hover:text-accent-content transition-all"
          >
            <div
              class="card-body flex flex-col items-center justify-center gap-2"
            >
              <div class="avatar">
                <div class="w-24 rounded-full">
                  <img
                    src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${encodeURI(adult.name)}`}
                    alt="Avatar"
                  />
                </div>
              </div>
              <div class="card-title font-black text-xl">{adult.name}</div>
            </div>
          </a>
        </li>
      {/each}
    </ul>
  </section>

  <section>
    <header class="mb-4">
      <h3 class="font-medium text-4xl">The kids</h3>
    </header>
    <ul class="flex flex-row flex-wrap gap-8">
      {#each data.expand.children as child}
        <li>
          <a
            href="#"
            class="card bg-primary text-primary-content w-48 hover:bg-accent hover:text-accent-content transition-all"
          >
            <div
              class="card-body flex flex-col items-center justify-center gap-2"
            >
              <div class="avatar">
                <div class="w-24 rounded-full">
                  <img
                    src={`https://api.dicebear.com/9.x/fun-emoji/svg?seed=${encodeURI(child.name)}`}
                    alt="Avatar"
                  />
                </div>
              </div>
              <div class="card-title font-black text-xl">{child.name}</div>
            </div>
          </a>
        </li>
      {/each}
    </ul>
  </section>
</div>

<script>
  import { currentUser, families } from "$lib/stores/user";
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
    </div>
    <a class="btn btn-ghost text-xl" href="/">calbao</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li>
        <a href={`/family/${$families[0].id}/timeline`}>Timeline</a>
      </li>
      {#if $currentUser != null}
        <li><a href={`/family/${$families[0].id}`}>Your Family</a></li>
        <li><a href="/logout">Logout</a></li>
      {:else}
        <li><a href="/login">Login</a></li>
      {/if}
    </ul>
  </div>
  <div class="navbar-end">
    <a href="/settings">
      <div class="avatar">
        <div
          class="rounded-full w-10 bg-gray-400 text-black text-center flex items-center justify-center"
        >
          <img
            src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${encodeURI($currentUser.name)}`}
          />
        </div>
      </div>
    </a>
  </div>
</div>

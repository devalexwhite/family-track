<script>
  import "../app.css";
  import Navbar from "$lib/navbar.svelte";

  import { currentUser, families } from "$lib/stores/user";
  export let data;

  $: currentUser.set(data.user);
  $: families.set(data.families);
</script>

<header>
  <Navbar></Navbar>
</header>
<slot />

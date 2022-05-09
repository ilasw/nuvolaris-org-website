<script context="module" lang="ts">
  import {getMdRoutes} from "../utils/md-files";

  export const load = async () => {
    return {
      props: {
        posts: getMdRoutes()
      }
    }
  }
</script>

<script lang="ts">
  import AsideMenu from '$lib/AsideMenu.svelte';
  import '../app.css';

  export let posts;
</script>

<div class="flex flex-col min-h-screen">
  <header class="flex-0 px-4">
    <a href="/"
       title="go to Nuvolaris home"
    ><img width="80"
          src="/logo.png"
          alt="Nuvolaris.org"></a>
  </header>

  <div class="flex-1 md:flex flex flex-row">
    <aside class="p-4 md:w-[15rem] flex-0 relative">
      <AsideMenu items={posts} />
    </aside>

    <main class="flex-1 bg-gray-50 p-4">
      <slot/>
    </main>
  </div>

  <footer class="flex-0">footer</footer>
</div>

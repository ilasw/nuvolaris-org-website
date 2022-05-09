<script context="module" lang="ts">
  import {getMdRoutes} from "../utils/md-files";

  export const prerender = true;
  export const load = async () => {
    return {
      props: {
        posts: getMdRoutes()
      }
    }
  }
</script>

<script lang="ts">
  import HeroHeader from "$lib/HeroHeader.svelte";

  export let posts;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app"/>
</svelte:head>

<section>
  <HeroHeader/>
</section>

<style>

</style>

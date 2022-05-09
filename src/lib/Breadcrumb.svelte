<script lang="ts">
  import {base} from "$app/paths";

  export let paths = [];
</script>

<nav aria-label="Breadcrumb"
     class="mb-8">
  <ol class="flex items-center space-x-1 text-sm text-gray-500 capitalize">
    {#each paths as {path, title}, index}
      <li>
        <a class="block transition-colors hover:text-gray-700" href={`${base}${path}`}> {title} </a>
      </li>
      {#if index < paths.length - 1}
        <li aria-hidden="true" tabindex="-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"/>
          </svg>
        </li>
      {/if}
    {/each}
  </ol>
</nav>
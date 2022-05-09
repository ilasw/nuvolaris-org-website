<script lang="ts">
  import {base} from '$app/paths';

  export let items = [];

  $: menuItems = Object.entries(
      items.reduce((acc, item) => {
        acc[item.source] ??= [];
        acc[item.source] = acc[item.source].concat([item]);
        return acc;
      }, {})
  );
</script>

<div class="flow-root sticky top-2">
  <nav class="flex flex-col space-y-2">
    <div>
      {#each menuItems as [source, items = []]}
        <strong class="block text-xs font-medium text-gray-400 uppercase">
          {source}
        </strong>
        <ul class="mt-2 mb-4"
            role="menu">
          {#each items as {path, title}}
            <li role="menuitem">
              <a
                  href={`${base}/${path}`}
                  class="block w-full px-4 py-2 text-sm font-medium text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
              >{title}</a>
            </li>
          {/each}
        </ul>
      {/each}
    </div>
  </nav>
</div>
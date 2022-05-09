<script context="module" lang="ts">
  import {getMdRoutes} from "../../utils/md-files";

  export const load = ({params, url}) => {
    const currentRoute = url.pathname
    const posts = getMdRoutes();
    const {source, title} = params;
    const [filteredPost] = posts.filter((p) => {
      return p.source === source && p.title === title
    });

    if (filteredPost) {
      return {
        props: {
          currentRoute,
          page: filteredPost,
          content: filteredPost.content.render?.()?.html
        },
      };
    }

    return {
      status: 404
    };
  };
</script>

<script lang="ts">
  import snarkdown from 'snarkdown'
  import Breadcrumb from "../../lib/Breadcrumb.svelte";

  export let page;
  export let content = '';

  $: paths = [
    {path: '/', title: 'Home'},
    {path: `/${page?.source}`, title: page?.source},
    {path: `/${page?.title}/${page?.title}`, title: page?.title}]
</script>

<section>
  <div class="container">
    <Breadcrumb paths={paths}/>
    <div
        class="max-w-4xl prose prose-headings:font-bold prose-table:border-separate prose-table:border prose-table:overflow-hidden prose-table:border-black prose-table:rounded-lg prose-thead:bg-black prose-th:text-white prose-th:py-2 prose-th:px-4 prose-tr:border-y-0 even:prose-tr:bg-gray-100 prose-td:py-2 prose-td:px-4 prose-blockquote:border prose-blockquote:border-black prose-blockquote:p-8 prose-blockquote:text-xl prose-blockquote:rounded-lg prose-blockquote:leading-10 prose-p:text-black prose-p:leading-loose prose-lead:leading-relaxed marker:prose-li:text-black prose-li:text-black prose-li:font-medium prose-a:text-pink-600 prose-a:decoration-solid prose-a:font-medium hover:prose-a:no-underline prose-img:border prose-img:border-black prose-img:p-4 prose-img:rounded-lg prose-img:bg-pink-100 prose-pre:bg-black prose-pre:text-white prose-pre:text-base prose-pre:leading-loose"
    >
      {@html snarkdown(content || 'Error')}
      {JSON.stringify(page)}
    </div>
  </div>
</section>

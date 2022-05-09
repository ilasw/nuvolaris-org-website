export const getMdRoutes = () => {
  const allPosts = import.meta.globEager(`../modules/**/*.md`) as Record<string, any>;
  const body = Object.entries(allPosts).map(([path, post]) => {
    const [source, title] = (path?.replace(/(\.\.\/modules\/)|(\.md)/gi, '') ?? '').split('/');
    return {path: `${source}/${title}`, source, title, content: post.default};
  })

  return body;
}
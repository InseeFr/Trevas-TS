export const buildTree = ctx =>
  ctx
    ? {
        name: `${ctx.getText()} (${ctx.constructor.name})`,
        children: ctx.children ? ctx.children.map(c => buildTree(c)) : null
      }
    : {};

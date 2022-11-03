onEvent('rei.group', event => {
  Ingredient.of(/^compressium:.+_1$/).stacks
    .forEach(stack => {
      const description = stack.name.string
        .slice(0)
        .replace(/ \(1x\)$/, '')

      const { namespace, path } = Utils.id(stack.id)
      const block = path
        .toString()
        .slice(0)
        .replace(/_\d+$/, '')

      const groupId = `kubejs:rei_groups/${namespace}/${block}`
      const entries = Ingredient.of(new RegExp(`^${namespace}:${block}_\\d+$`))

      event.groupItems(groupId, description, entries)
    })
})

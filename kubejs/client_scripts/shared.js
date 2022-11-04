global.groupSameId = (id, event) => {
  const item = Item.of(id)
  const { namespace, path } = Utils.id(id)
  event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, item.getName(), item)
}

// Credit to https://github.com/ChloeDawn
// Modified version of snippet in latvian.dev Discord server
// https://discord.com/channels/303440391124942858/1010550815968215090/1010757873300680755
global.groupModTags = (modName, event) => {
  const modIngredient = Ingredient.of(`@${modName}`)

  modIngredient.stacks
    .stream()
    .flatMap(stack => stack.tags.stream())
    .distinct() // Exclude duplicate tag entries
    .filter(tag => tag.namespace === modName)
    .forEach(tag => {
      const { namespace, path } = tag
      // Human-readable title case, e.g white_wool -> White Wool
      const name = path
        .slice(0)
        .replace(/^(\w)/, c => c.toUpperCase())
        .replace(/_(\w)/g, (_, c) => " " + c.toUpperCase())

      event.groupItems(`kubejs:rei_groups/${namespace}/${path}`, name, Ingredient.of(`#${tag}`).filter(modIngredient))
    })
}

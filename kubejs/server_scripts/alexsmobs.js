onEvent('recipes', event => {
  event.remove({ output: 'alexsmobs:banner_pattern_bear' })
  event.replaceInput({ mod: 'alexsmobs' }, 'alexsmobs:bear_fur', 'naturalist:bear_fur')
})

onEvent('item.tags', event => {
  event.removeAllTagsFrom('alexsmobs:bear_fur')
})

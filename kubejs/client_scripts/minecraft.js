onEvent('rei.group', event => {
  const useNbt = ['potion', 'enchanted_book', 'splash_potion', 'tipped_arrow', 'lingering_potion']

  useNbt.forEach(id => {
    global.groupSameId(id, event)
  })
})

onEvent('rei.group', event => {
  const tableIds = ['tconstruct:crafting_station', 'tconstruct:tinker_station', 'tconstruct:part_builder']

  tableIds.forEach(tableId => {
    global.groupSameId(tableId, event)
  })
})

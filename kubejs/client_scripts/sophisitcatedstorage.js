onEvent('rei.group', event => {
  const storageIds = ['sophisticatedstorage:barrel', 'sophisticatedstorage:chest', 'sophisticatedstorage:shulker_box']
  const tiers = ['iron', 'gold', 'diamond', 'netherite']

  storageIds.forEach(storageId => {
    global.groupSameId(storageId, event)

    tiers.forEach(tier => {
      const storageTierId = Utils.id(storageId)
      storageTierId.path = `${tier}_${storageId.path}`

      global.groupSameId(storageTierId, event)
    })
  })
})

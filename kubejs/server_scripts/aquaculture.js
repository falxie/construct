onEvent('recipes', event => {
  event.remove({ output: '/aquaculture:neptunium_.+/' })
  event.remove({ output: 'aquaculture:neptunes_bounty' })
})

onEvent('items.tags', event => {
  event.removeAllTagsFrom('/aquaculture:neptunium_.+/')
  event.removeAllTagsFrom('aquaculture:neptunes_bounty')
})

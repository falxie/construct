onEvent('recipes', event => {
  event.remove({ output: '/aquaculture:neptunium_.+/' })
  event.remove({ output: 'aquaculture:neptunes_bounty' })
})

onEvent('item.tags', event => {
  const neptuniumItems = [
    'aquaculture:neptunes_bounty',
    'aquaculture:neptunium_axe',
    'aquaculture:neptunium_block',
    'aquaculture:neptunium_boots',
    'aquaculture:neptunium_bow',
    'aquaculture:neptunium_chestplate',
    'aquaculture:neptunium_fillet_knife',
    'aquaculture:neptunium_fishing_rod',
    'aquaculture:neptunium_helmet',
    'aquaculture:neptunium_hoe',
    'aquaculture:neptunium_ingot',
    'aquaculture:neptunium_leggings',
    'aquaculture:neptunium_nugget',
    'aquaculture:neptunium_pickaxe',
    'aquaculture:neptunium_shovel',
    'aquaculture:neptunium_sword'
  ]

  event.removeAllTagsFrom(neptuniumItems)
})

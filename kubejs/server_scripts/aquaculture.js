onEvent('recipes', event => {
  const neptuniumItems = [
    'aquaculture:neptunium_boots',
    'aquaculture:neptunium_leggings',
    'aquaculture:neptunium_chestplate',
    'aquaculture:neptunium_helmet',
    'aquaculture:neptunium_bow',
    'aquaculture:neptunium_sword',
    'aquaculture:neptunium_hoe',
    'aquaculture:neptunium_axe',
    'aquaculture:neptunium_shovel',
    'aquaculture:neptunium_pickaxe',
    'aquaculture:neptunium_ingot',
    'aquaculture:neptunium_nugget',
    'aquaculture:neptunium_fishing_rod',
    'aquaculture:neptunium_fillet_knife',
    'aquaculture:neptunium_block',
    'aquaculture:neptunes_bounty'
  ]

  for (const item of neptuniumItems) {
    event.remove({ output: item })
  }
})

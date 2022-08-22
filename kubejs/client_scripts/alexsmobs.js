onEvent('jei.hide.items', event => {
  event.hide('alexsmobs:spawn_egg_grizzly_bear')
  event.hide('alexsmobs:bear_fur')
  event.hide('alexsmobs:banner_pattern_bear')

  const carriers = [
    "minecraft:potion",
    "minecraft:splash_potion",
    "minecraft:lingering_potion",
    "minecraft:tipped_arrow"
  ]

  const potions = [
    "alexsmobs:knockback_resistance",
    "alexsmobs:long_knockback_resistance",
    "alexsmobs:strong_knockback_resistance"
  ]

  for (const carrier of carriers) {
    for (const potion of potions) {
      event.hide(Item.of(carrier, { Potion: potion }))
    }
  }
})

// priority: 0

// Alex's Mobs and Naturalist grizzly bears compat (https://github.com/falxie/construct/issues/3)
onEvent('recipes', event => {
	event.remove({ output: 'alexsmobs:banner_pattern_bear' })
	event.remove({ output: 'alexsmobs:falconry_glove' })
	event.remove({ output: 'alexsmobs:frontier_cap' })

	event.shaped('alexsmobs:falconry_glove', [
    ' L ',
    'LLL',
    ' H '
  ], {
		'H': {
			'item': 'naturalist:bear_fur'
		},
		'L': {
			'item': 'minecraft:leather'
		}
	})

	event.shaped('alexsmobs:frontier_cap', [
		'HHH',
    'HCH',
    '  T'
	], {
		'H': {
      'item': 'naturalist:bear_fur'
    },
    'T': {
      'item': 'alexsmobs:raccoon_tail'
    },
    'C': {
      'item': 'minecraft:leather_helmet'
    }
	})

	event.shaped('alexsmobs:frontier_cap', [
		'HHH',
    'HCH',
    'T  '
	], {
		'H': {
      'item': 'naturalist:bear_fur'
    },
    'T': {
      'item': 'alexsmobs:raccoon_tail'
    },
    'C': {
      'item': 'minecraft:leather_helmet'
    }
	})
})

onEvent('item.tags', event => {
	event.removeAllTagsFrom('alexsmobs:bear_fur')
})

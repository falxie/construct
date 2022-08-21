import crafttweaker.api.recipe.Replacer;
import mods.jei.JEI;
import crafttweaker.api.item.IItemStack;

craftingTable.remove(<item:alexsmobs:banner_pattern_bear>);
JEI.hideIngredient(<item:alexsmobs:banner_pattern_bear>);

Replacer.forMods("alexsmobs").replaceFully(<item:alexsmobs:bear_fur>, <item:naturalist:bear_fur>).execute();
JEI.hideIngredient(<item:alexsmobs:bear_fur>);

var carriers = [
  <item:minecraft:potion>,
  <item:minecraft:splash_potion>,
  <item:minecraft:lingering_potion>,
  <item:minecraft:tipped_arrow>
] as IItemStack[];

var potions = [
  "alexsmobs:knockback_resistance",
  "alexsmobs:long_knockback_resistance",
  "alexsmobs:strong_knockback_resistance"
] as string[];

for carrier in carriers {
  for potion in potions {
    JEI.hideIngredient(carrier.withTag({ Potion: potion }));
  }
}

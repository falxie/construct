public function removeAndHide(item as crafttweaker.api.item.IItemStack) as void {
  craftingTable.remove(item);
  mods.jei.JEI.hideIngredient(item);
}

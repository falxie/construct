import crafttweaker.api.item.IItemStack;

var neptuniumItems = [
  <item:aquaculture:neptunium_boots>,
  <item:aquaculture:neptunium_leggings>,
  <item:aquaculture:neptunium_chestplate>,
  <item:aquaculture:neptunium_helmet>,
  <item:aquaculture:neptunium_bow>,
  <item:aquaculture:neptunium_sword>,
  <item:aquaculture:neptunium_hoe>,
  <item:aquaculture:neptunium_axe>,
  <item:aquaculture:neptunium_shovel>,
  <item:aquaculture:neptunium_pickaxe>,
  <item:aquaculture:neptunium_ingot>,
  <item:aquaculture:neptunium_nugget>,
  <item:aquaculture:neptunium_fishing_rod>,
  <item:aquaculture:neptunium_fillet_knife>,
  <item:aquaculture:neptunium_block>,
  <item:aquaculture:neptunes_bounty>
] as IItemStack[];

for item in neptuniumItems {
  removeAndHide(item);
}

export interface Weathers {
  card: Card;
}
export interface Card {
  card: Card1;
}
export interface Card1 {
  ["@type"]: string;
  title: string;
  itemCards: (ItemCardsEntity)[];
  type: string;
  
}
export interface ItemCardsEntity {
  card: Card2;
}
export interface Card2 {
  info: Info;
  analytics: VariantsOrVariantsV2OrItemBadgeOrBadgesV2OrAnalyticsOrRibbon;
  hideRestaurantDetails: boolean;
}
export interface Info {
  id: string;
  name: string;
  category: string;
  description: string;
  imageId: string;
  inStock: number;
  isVeg?: number | null;
  price: number;
  variants: VariantsOrVariantsV2OrItemBadgeOrBadgesV2OrAnalyticsOrRibbon;
  variantsV2: VariantsOrVariantsV2OrItemBadgeOrBadgesV2OrAnalyticsOrRibbon;
  addons?: (AddonsEntity)[] | null;
  itemAttribute: ItemAttribute;
  defaultPrice: number;
  ribbon: Ribbon;
  showImage: boolean;
  offerTags?: (OfferTagsEntity)[] | null;
  itemBadge: VariantsOrVariantsV2OrItemBadgeOrBadgesV2OrAnalyticsOrRibbon;
  badgesV2: VariantsOrVariantsV2OrItemBadgeOrBadgesV2OrAnalyticsOrRibbon;
  isBestseller?: boolean | null;
  ratings: Ratings;
  itemPriceStrikeOff: boolean;
}
export interface VariantsOrVariantsV2OrItemBadgeOrBadgesV2OrAnalyticsOrRibbon {
}
export interface AddonsEntity {
  groupId: string;
  groupName: string;
  choices?: (ChoicesEntity)[] | null;
  maxAddons: number;
  maxFreeAddons: number;
}
export interface ChoicesEntity {
  id: string;
  name: string;
  price: number;
  inStock: number;
  isVeg?: number | null;
  isEnabled: number;
}
export interface ItemAttribute {
  vegClassifier: string;
}
export interface Ribbon {
  text?: string | null;
  textColor?: string | null;
  topBackgroundColor?: string | null;
  bottomBackgroundColor?: string | null;
}
export interface OfferTagsEntity {
  title: string;
  subTitle: string;
  textColor: string;
  backgroundColor: string;
}
export interface Ratings {
  aggregatedRating: AggregatedRating;
}
export interface AggregatedRating {
  rating: string;
  ratingCount: string;
  ratingCountV2: string;
}

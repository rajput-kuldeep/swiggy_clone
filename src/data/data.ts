export interface Weathers {
  statusCode: number;
  data: Data;
  tid: string;
  sid: string;
  deviceId: string;
  csrfToken: string;
}
export interface Data {
  statusMessage: string;
  cards?: CardsEntity[];
  firstOffsetRequest: boolean;
  isQCLink: boolean;
}
export interface CardsEntity {
  card?: Card | null;
  groupedCard?: GroupedCard | null;
}
export interface Card {
  card: Card1;
  relevance?: Relevance | null;
}
export interface Card1 {
  "@type": string;
  text?: string | null;
  headerStyling?: HeaderStyling | null;
  tabs?: (TabsEntity)[] | null;
  info?: Info | null;
  analytics?: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating | null;
  layout?: Layout | null;
  id?: string | null;
  gridElements?: GridElements | null;
}
export interface HeaderStyling {
  textColor: string;
  textVariant: string;
}
export interface TabsEntity {
  id: string;
  title: string;
}
export interface Info {
  id: string;
  name: string;
  city: string;
  slugs: Slugs;
  uniqueId: string;
  cloudinaryImageId: string;
  locality: string;
  areaName: string;
  costForTwo: string;
  costForTwoMessage: string;
  cuisines?: (string)[] | null;
  avgRating: number;
  feeDetails: FeeDetails;
  parentId: string;
  avgRatingString: string;
  totalRatingsString: string;
  sla: Sla;
  availability: Availability;
  aggregatedDiscountInfo: AggregatedDiscountInfo;
  badges: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
  slugString: string;
  multiOutlet: boolean;
  isOpen: boolean;
  labels?: (LabelsEntity)[] | null;
  logo: string;
  totalRatings: number;
  aggregatedDiscountInfoV2: AggregatedDiscountInfoV2;
  type: string;
  nudgeBanners?: (NudgeBannersEntity)[] | null;
  headerBanner: HeaderBanner;
  expectationNotifiers?: (ExpectationNotifiersEntity)[] | null;
  generalPurposeInfoListV2?: (GeneralPurposeInfoListV2Entity)[] | null;
  ratingSlab: string;
  orderabilityCommunication: OrderabilityCommunication;
  hasBestsellerItems: boolean;
  cartOrderabilityNudgeBanner: CartOrderabilityNudgeBanner;
  latLong: string;
  backgroundImageOverlayInfo: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
}
export interface Slugs {
  restaurant: string;
  city: string;
}
export interface FeeDetails {
  restaurantId: string;
  fees?: (FeesEntity)[] | null;
  totalFee: number;
  title: string;
  amount: string;
  icon: string;
  message: string;
}
export interface FeesEntity {
  name: string;
  fee?: number | null;
}
export interface Sla {
  restaurantId: string;
  deliveryTime: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  lastMileTravel: number;
  serviceability: string;
  stressFactor: number;
  rainMode: string;
  longDistance: string;
  zoneId: number;
  slaString: string;
  lastMileTravelString: string;
  iconType: string;
}
export interface Availability {
  nextCloseTime: string;
  visibility: boolean;
  opened: boolean;
  restaurantClosedMeta: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
}
export interface RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1 {
}
export interface AggregatedDiscountInfo {
  header: string;
  shortDescriptionList?: (ShortDescriptionListEntityOrDescriptionListEntity)[] | null;
  descriptionList?: (ShortDescriptionListEntityOrDescriptionListEntity)[] | null;
  visible: boolean;
}
export interface ShortDescriptionListEntityOrDescriptionListEntity {
  meta: string;
  discountType: string;
  operationType: string;
}
export interface LabelsEntity {
  title: string;
  message: string;
}
export interface AggregatedDiscountInfoV2 {
  header: string;
  shortDescriptionList?: (ShortDescriptionListEntityOrDescriptionListEntity)[] | null;
  descriptionList?: (ShortDescriptionListEntityOrDescriptionListEntity)[] | null;
  couponDetailsCta: string;
}
export interface NudgeBannersEntity {
  priority: number;
  discountInfo: DiscountInfo;
  unlockedMessage: string;
  minItemCount: number;
  maxItemCount: number;
  type: string;
  nudgeTagInfo: NudgeTagInfo;
  logoCtx: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
}
export interface DiscountInfo {
  discountType: string;
  value: number;
}
export interface NudgeTagInfo {
  title: string;
  fontName: string;
}
export interface HeaderBanner {
  url: string;
}
export interface ExpectationNotifiersEntity {
  text: string;
  icon: Icon;
  popup: Popup;
  type: string;
  enrichedText: string;
  halfCardPopup: HalfCardPopup;
  trailingIcon: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
}
export interface Icon {
  imageId: string;
}
export interface Popup {
  cta: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
}
export interface HalfCardPopup {
  halfCardPopupHeader: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
}
export interface GeneralPurposeInfoListV2Entity {
  cta: Cta;
}
export interface Cta {
  info: Info1;
  linkCta: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
}
export interface Info1 {
  recordings: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
}
export interface OrderabilityCommunication {
  title: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
  subTitle: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
  message: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
  customIcon: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
}
export interface CartOrderabilityNudgeBanner {
  parameters: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
  presentation: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
}
export interface RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating {
}
export interface Layout {
  rows: number;
  columns: number;
  horizontalScrollEnabled: boolean;
  itemSpacing: number;
  lineSpacing: number;
  widgetPadding: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
  containerStyle: ContainerStyle;
  scrollBar: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
}
export interface ContainerStyle {
  containerPadding: ContainerPadding;
}
export interface ContainerPadding {
  left: number;
  right: number;
  bottom: number;
}
export interface GridElements {
  infoWithStyle: InfoWithStyle;
}
export interface InfoWithStyle {
  "@type": string;
  offers?: (OffersEntity)[] | null;
  habitMilestoneInfo: HabitMilestoneInfo;
  loyaltyDiscoverPresentationInfo: LoyaltyDiscoverPresentationInfo;
}
export interface OffersEntity {
  info: Info2;
  cta: Cta1;
}
export interface Info2 {
  header: string;
  offerTagColor: string;
  logoBottom?: string | null;
  offerIds?: (string)[] | null;
  expiryTime: string;
  description: string;
  offerType: string;
  restId: string;
  offerLogo: string;
  descriptionTextColor: string;
  offerTag?: string | null;
  couponCode?: string | null;
}
export interface Cta1 {
  type: string;
}
export interface HabitMilestoneInfo {
  callout: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
}
export interface LoyaltyDiscoverPresentationInfo {
  logoCtx: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
}
export interface Relevance {
  type: string;
  sectionId: string;
}
export interface GroupedCard {
  cardGroupMap: CardGroupMap;
}
export interface CardGroupMap {
  REGULAR: REGULAR;
}
export interface REGULAR {
  cards?: (CardsEntity1)[];
}
export interface CardsEntity1 {
  card: Card2;
}
export interface Card2 {
  card: Card3;
  relevance?: Relevance1;
}
export interface Card3 {
  "@type": string;
  badges?: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating2 | null;
  vegOnlyDetails?: VegOnlyDetails | null;
  offersFilter?: OffersFilterOrTopRatedFilterOrVegFilterOrNonvegFilter | null;
  topRatedFilter?: OffersFilterOrTopRatedFilterOrVegFilterOrNonvegFilter1 | null;
  kidsCategoryFilter?: KidsCategoryFilter | null;
  vegFilter?: OffersFilterOrTopRatedFilterOrVegFilterOrNonvegFilter2 | null;
  nonvegFilter?: OffersFilterOrTopRatedFilterOrVegFilterOrNonvegFilter3 | null;
  title?: string | null;
  itemCards?: (ItemCardsEntity)[] | null;
  type?: string | null;
  categories?: (CategoriesEntity)[] | null;
  imageId?: string | null;
  text?: (string)[] | null;
  name?: string | null;
  area?: string | null;
  completeAddress?: string | null;
}
export interface RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating2 {
}
export interface VegOnlyDetails {
  imageId: string;
  title: string;
  description: string;
}
export interface OffersFilterOrTopRatedFilterOrVegFilterOrNonvegFilter {
  attributes: Attributes;
}
export interface Attributes {
  displayText: string;
}
export interface OffersFilterOrTopRatedFilterOrVegFilterOrNonvegFilter1 {
  attributes: Attributes;
}
export interface KidsCategoryFilter {
  attributes: Attributes1;
}
export interface Attributes1 {
  displayText: string;
  tooltip: Tooltip;
}
export interface Tooltip {
  enabled: boolean;
  displayText: string;
}
export interface OffersFilterOrTopRatedFilterOrVegFilterOrNonvegFilter2 {
  attributes: Attributes;
}
export interface OffersFilterOrTopRatedFilterOrVegFilterOrNonvegFilter3 {
  attributes: Attributes;
}
export interface ItemCardsEntity {
  card: Card4;
}
export interface Card4 {
  "@type": string;
  info: Info3;
  analytics: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
  hideRestaurantDetails: boolean;
}
export interface Info3 {
  id: string;
  name: string;
  category: string;
  description?: string | null;
  imageId?: string | null;
  inStock: number;
  isVeg?: number | null;
  price: number;
  variants: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
  variantsV2: VariantsV2;
  addons?: (AddonsEntity)[] | null;
  itemAttribute: ItemAttribute;
  defaultPrice: number;
  ribbon: Ribbon;
  showImage?: boolean | null;
  offerTags?: (OfferTagsEntity)[] | null;
  itemBadge: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
  badgesV2: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
  isBestseller?: boolean | null;
  ratings: Ratings;
  itemPriceStrikeOff: boolean;
  finalPrice?: number | null;
  type?: string | null;
  itemNudgeType?: string | null;
}
export interface VariantsV2 {
  variantGroups?: (VariantGroupsEntity)[] | null;
  pricingModels?: (PricingModelsEntity)[] | null;
}
export interface VariantGroupsEntity {
  groupId: string;
  name: string;
  variations?: (VariationsEntity)[] | null;
}
export interface VariationsEntity {
  name: string;
  price: number;
  default?: number | null;
  id: string;
  inStock: number;
  isVeg: number;
  isEnabled: number;
}
export interface PricingModelsEntity {
  variations?: (VariationsEntity1)[] | null;
  price: number;
  addonCombinations?: (AddonCombinationsEntity)[] | null;
}
export interface VariationsEntity1 {
  groupId: string;
  variationId: string;
}
export interface AddonCombinationsEntity {
  groupId: string;
  addonId: string;
}
export interface AddonsEntity {
  groupId: string;
  groupName: string;
  choices?: (ChoicesEntity)[] | null;
  maxAddons: number;
  maxFreeAddons: number;
  minAddons?: number | null;
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
  title?: string | null;
  subTitle?: string | null;
  textColor?: string | null;
  backgroundColor?: string | null;
}
export interface Ratings {
  aggregatedRating: AggregatedRating;
}
export interface AggregatedRating {
  rating?: string | null;
  ratingCount?: string | null;
  ratingCountV2?: string | null;
}
export interface CategoriesEntity {
  title: string;
  itemCards?: (ItemCardsEntity1)[] | null;
}
export interface ItemCardsEntity1 {
  card: Card5;
}
export interface Card5 {
  "@type": string;
  info: Info4;
  analytics: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
  hideRestaurantDetails: boolean;
}
export interface Info4 {
  id: string;
  name: string;
  category: string;
  description?: string | null;
  imageId: string;
  inStock: number;
  isVeg?: number | null;
  price: number;
  variants: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
  variantsV2: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
  addons?: (AddonsEntity1)[] | null;
  itemAttribute: ItemAttribute;
  defaultPrice: number;
  ribbon: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
  type: string;
  offerTags?: (OfferTagsEntity1)[] | null;
  itemBadge: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
  badgesV2: RestaurantClosedMetaOrLogoCtxOrCtaOrHalfCardPopupHeaderOrTrailingIconOrRecordingsOrLinkCtaOrTitleOrSubTitleOrMessageOrCustomIconOrParametersOrPresentationOrBadgesOrBackgroundImageOverlayInfoOrAnalyticsOrWidgetPaddingOrScrollBarOrCalloutOrVariantsOrVariantsV2OrItemBadgeOrBadgesV2OrRibbonOrOfferTagsEntityOrAggregatedRating1;
  ratings: Ratings;
  itemPriceStrikeOff: boolean;
}
export interface AddonsEntity1 {
  groupId: string;
  groupName: string;
  choices?: (ChoicesEntity1)[] | null;
  maxAddons: number;
  maxFreeAddons: number;
}
export interface ChoicesEntity1 {
  id: string;
  name: string;
  price: number;
  inStock: number;
  isVeg: number;
  isEnabled: number;
}
export interface OfferTagsEntity1 {
  title: string;
  subTitle: string;
  textColor: string;
  backgroundColor: string;
}
export interface Relevance1 {
  type: string;
  sectionId: string;
}

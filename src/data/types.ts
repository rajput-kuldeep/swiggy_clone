

export interface Weather {
  info: Info;
  analytics: ImageBasedOrTextBasedOrTextExtendedBadgesOrLottieOrVideoOrBadgesOrReviewsSummaryOrRestaurantOfferPresentationInfoOrAnalytics;
  cta: Cta;
}
export interface Info{
  id: string;
  name: string;
  cloudinaryImageId: string;
  locality: string;
  areaName: string;
  costForTwo: string;
  cuisines?: (string)[] | null;
  avgRating: number;
  parentId: string;
  avgRatingString: string;
  totalRatingsString: string;
  sla: Sla;
  availability: Availability;
  badges: ImageBasedOrTextBasedOrTextExtendedBadgesOrLottieOrVideoOrBadgesOrReviewsSummaryOrRestaurantOfferPresentationInfoOrAnalytics;
  isOpen: boolean;
  type: string;
  badgesV2: BadgesV2;
  aggregatedDiscountInfoV3: AggregatedDiscountInfoV3;
  differentiatedUi: DifferentiatedUi;
  reviewsSummary: ImageBasedOrTextBasedOrTextExtendedBadgesOrLottieOrVideoOrBadgesOrReviewsSummaryOrRestaurantOfferPresentationInfoOrAnalytics;
  displayType: string;
  restaurantOfferPresentationInfo: ImageBasedOrTextBasedOrTextExtendedBadgesOrLottieOrVideoOrBadgesOrReviewsSummaryOrRestaurantOfferPresentationInfoOrAnalytics;
}
export interface Sla {
  deliveryTime: number;
  lastMileTravel: number;
  serviceability: string;
  slaString: string;
  lastMileTravelString: string;
  iconType: string;
}
export interface Availability {
  nextCloseTime: string;
  opened: boolean;
}
export interface ImageBasedOrTextBasedOrTextExtendedBadgesOrLottieOrVideoOrBadgesOrReviewsSummaryOrRestaurantOfferPresentationInfoOrAnalytics {
}
export interface BadgesV2 {
  entityBadges: EntityBadges;
}
export interface EntityBadges {
  imageBased: ImageBasedOrTextBasedOrTextExtendedBadgesOrLottieOrVideoOrBadgesOrReviewsSummaryOrRestaurantOfferPresentationInfoOrAnalytics;
  textBased: ImageBasedOrTextBasedOrTextExtendedBadgesOrLottieOrVideoOrBadgesOrReviewsSummaryOrRestaurantOfferPresentationInfoOrAnalytics;
  textExtendedBadges: ImageBasedOrTextBasedOrTextExtendedBadgesOrLottieOrVideoOrBadgesOrReviewsSummaryOrRestaurantOfferPresentationInfoOrAnalytics;
}
export interface AggregatedDiscountInfoV3 {
  header: string;
  subHeader: string;
}
export interface DifferentiatedUi {
  displayType: string;
  differentiatedUiMediaDetails: DifferentiatedUiMediaDetails;
}
export interface DifferentiatedUiMediaDetails {
  mediaType: string;
  lottie: ImageBasedOrTextBasedOrTextExtendedBadgesOrLottieOrVideoOrBadgesOrReviewsSummaryOrRestaurantOfferPresentationInfoOrAnalytics;
  video: ImageBasedOrTextBasedOrTextExtendedBadgesOrLottieOrVideoOrBadgesOrReviewsSummaryOrRestaurantOfferPresentationInfoOrAnalytics;
}
export interface Cta {
  link: string;
  type: string;
}

  
  export const CDN_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";




 
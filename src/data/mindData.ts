export interface Carousal {
  id: string;
  imageId: string;
  action: Action;
  entityType: string;
  accessibility: Accessibility;
  entityId: string;
  frequencyCapping: FrequencyCapping;
}
export interface Action {
  link: string;
  text: string;
  type: string;
}
export interface Accessibility {
  altText: string;
  altTextCta: string;
}
export interface FrequencyCapping {
}

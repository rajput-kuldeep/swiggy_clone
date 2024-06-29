export interface ItemCard {
    card: {
      info: {
        name: string;
        price: number;
        ratings: {
          aggregatedRating: {
            rating: number;
          };
        };
        description: string;
        imageId: string;
      };
    };
  }
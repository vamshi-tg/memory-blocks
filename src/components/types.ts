import { cardImages } from "../constants/images";

export type TCard = typeof cardImages[0] & {
  id: number;
};

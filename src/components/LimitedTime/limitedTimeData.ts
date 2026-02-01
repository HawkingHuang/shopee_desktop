import officialStoreImg from "@/assets/images/limited_time/corner_imgs/official_store.png";
import selectionImg from "@/assets/images/limited_time/corner_imgs/selection.png";
import bottomLeftOneImg from "@/assets/images/limited_time/corner_imgs/bottom_left_1.png";
import bottomLeftTwoImg from "@/assets/images/limited_time/corner_imgs/bottom_left_2.png";
import bottomLeftThreeImg from "@/assets/images/limited_time/corner_imgs/bottom_left_3.png";
import bottomLeftFourImg from "@/assets/images/limited_time/corner_imgs/bottom_left_4.png";

export type LimitedTimeItemInfo = {
  price: number;
  percentage: number;
  progress: string;
  discount: number;
  topLeftImg: string;
  bottomLeftImg: string;
  notOfficial?: boolean;
  popular?: boolean;
};

export const mainItemInfo: LimitedTimeItemInfo[] = [
  {
    price: 120,
    percentage: 10,
    progress: "熱銷中",
    discount: 3.9,
    topLeftImg: officialStoreImg,
    bottomLeftImg: bottomLeftOneImg,
  },
  {
    price: 54999,
    percentage: 25,
    progress: "熱銷中",
    discount: 5.2,
    topLeftImg: officialStoreImg,
    bottomLeftImg: bottomLeftTwoImg,
  },
  {
    price: 999,
    percentage: 15,
    progress: "熱銷中",
    discount: 2.9,
    topLeftImg: selectionImg,
    bottomLeftImg: bottomLeftThreeImg,
    notOfficial: true,
  },
  {
    price: 750,
    percentage: 70,
    progress: "剩下 10",
    discount: 4.5,
    topLeftImg: selectionImg,
    bottomLeftImg: bottomLeftFourImg,
    popular: true,
    notOfficial: true,
  },
  {
    price: 1299,
    percentage: 12,
    progress: "熱銷中",
    discount: 6.8,
    topLeftImg: officialStoreImg,
    bottomLeftImg: bottomLeftOneImg,
  },
  {
    price: 99,
    percentage: 20,
    progress: "熱銷中",
    discount: 3.1,
    topLeftImg: officialStoreImg,
    bottomLeftImg: bottomLeftTwoImg,
  },
  {
    price: 99,
    percentage: 18,
    progress: "熱銷中",
    discount: 4.9,
    topLeftImg: officialStoreImg,
    bottomLeftImg: bottomLeftThreeImg,
  },
  {
    price: 3200,
    percentage: 80,
    progress: "剩下 6",
    discount: 5.7,
    topLeftImg: officialStoreImg,
    bottomLeftImg: bottomLeftFourImg,
    popular: true,
  },
  {
    price: 1699,
    percentage: 50,
    progress: "熱銷中",
    discount: 7.3,
    topLeftImg: officialStoreImg,
    bottomLeftImg: bottomLeftOneImg,
  },
  {
    price: 590,
    percentage: 8,
    progress: "熱銷中",
    discount: 2.5,
    topLeftImg: officialStoreImg,
    bottomLeftImg: bottomLeftOneImg,
  },
  {
    price: 250,
    percentage: 8,
    progress: "熱銷中",
    discount: 2.5,
    topLeftImg: officialStoreImg,
    bottomLeftImg: bottomLeftOneImg,
  },
  {
    price: 79,
    percentage: 8,
    progress: "熱銷中",
    discount: 2.5,
    topLeftImg: officialStoreImg,
    bottomLeftImg: bottomLeftOneImg,
  },
];

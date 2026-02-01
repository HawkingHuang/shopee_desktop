import sellerOneIcon from "@/assets/images/chat/seller_1.jfif";
import sellerTwoIcon from "@/assets/images/chat/seller_2.jfif";

export type SellerInfo = {
  name: string;
  img: string;
  timestamp: string;
};

export const sellerList: SellerInfo[] = [
  {
    name: "英之助日貨",
    img: sellerOneIcon,
    timestamp: "25/12/25",
  },
  {
    name: "超級品牌運動館",
    img: sellerTwoIcon,
    timestamp: "25/12/25",
  },
];

import facebookPNG from "@/assets/images/footer/facebook.png";
import instagramPNG from "@/assets/images/footer/instagram.png";
import linePNG from "@/assets/images/footer/line.png";
import linkedinPNG from "@/assets/images/footer/linkedin.png";
import blogPNG from "@/assets/images/footer/blog.png";

export type SocialMediaItem = {
  name: string;
  link: string;
  img: string;
};

export const customerServiceLinks: string[] = ["幫助中心", "蝦皮商城", "付款方式", "蝦皮錢包", "蝦幣", "運費補助", "退貨退款", "物流方式", "聯絡客服", "防詐騙宣傳"];

export const aboutShopeeLinks: string[] = ["關於蝦皮", "加入我們", "政策", "蝦皮隱私權政策", "蝦皮商城", "賣家中心", "限時特賣", "聯絡媒體"];

export const paymentImgsOrder: string[] = ["payment_one", "payment_two", "payment_three"];

export const logisticsImgsOrder: string[] = [
  "logistics_one",
  "logistics_two",
  "logistics_three",
  "logistics_four",
  "logistics_five",
  "logistics_six",
  "logistics_seven",
  "logistics_eight",
  "logistics_nine",
];

export const socialMediaList: SocialMediaItem[] = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/ShopeeTW",
    img: facebookPNG,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/Shopee_TW/",
    img: instagramPNG,
  },
  {
    name: "Line",
    link: "https://page.line.me/shopee?openQrModal=true",
    img: linePNG,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/shopee",
    img: linkedinPNG,
  },
  {
    name: "蝦皮輯部落格",
    link: "https://shopee.tw/blog",
    img: blogPNG,
  },
];

export const countryList: string[] = ["新加坡", "印尼", "泰國", "馬來西亞", "越南", "菲律賓", "巴西", "墨西哥", "哥倫比亞", "智利", "台灣"];

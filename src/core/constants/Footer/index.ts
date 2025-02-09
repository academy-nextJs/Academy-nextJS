import { TFooterLinks, TIconList } from "./type";

export const FooterLinks: TFooterLinks[] = [
  {
    id: 1,
    title: "نحوه رزرو اقامتگاه",
    links: [
      { name: "راهنمای رزرو اقامتگاه", href: "/" },
      { name: "شیوه پرداخت", href: "/" },
      { name: "لغو رزرو اقامتگاه", href: "/" },
    ],
  },
  {
    id: 2,
    title: "خدمات مشتریان",
    links: [
      { name: "پرسش های متداول مهمان", href: "/" },
      { name: "پرسش های متداول میزبان", href: "/" },
      { name: "چطور اقامتگاه ثبت کنم ؟", href: "/" },
      { name: "حریم شخصی کاربران", href: "/" },
    ],
  },
  {
    id: 3,
    title: "راه ارتباطی دلتا",
    isLink: false,
    links: [
      { name: "09229167194 - 098541612310", href: "/" },
      { name: "Delta@gmail.com", href: "/" },
      {
        name: "گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظیمی زاده",
        href: "/",
      },
    ],
  },
];

// Social Networks
export const SocialNetworks: TIconList[] = [
  { picture: "/etemad3.png", href: "/" },
  { picture: "/etemad3.png", href: "/" },
  { picture: "/etemad3.png", href: "/" },
  { picture: "/etemad3.png", href: "/" },
];

// Trust icons
export const TrustBadge: TIconList[] = [
  { picture: "/etemad2.png", href: "/", width: 32 },
  { picture: "/etemad1.png", href: "/", width: 37 },
  { picture: "/etemad3.png", href: "/", width: 45 },
];

// Paragraph
export const FooterParagraph = `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
 با استفاده از طراحان گرافیک است.لورم ایپسوم
  متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
 استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ..`;



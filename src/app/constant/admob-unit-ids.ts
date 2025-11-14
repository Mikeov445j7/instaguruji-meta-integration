import { BannerAdOptions, BannerAdPosition, BannerAdSize } from "@capacitor-community/admob";
import { isPlatform } from "@ionic/angular";
import { ENV } from "../../environments/environment";

export type PAGETYPE = 'book' | 'about' | 'category' | 'chapter'
    | 'compass' | 'japmala' | 'kundali' | 'order' | 'panchang'
    | 'content' | 'gallery' | 'list_menu' | 'payment' | 'blog'
    | 'blog_content' | 'splash';

export const ADMOB_UNIT = {
    ios: {
        book: "ca-app-pub-1294952354367897/6157914390",
        about: "ca-app-pub-1294952354367897/1468215560",
        category: "ca-app-pub-1294952354367897/4625340872",
        chapter: "ca-app-pub-1294952354367897/5555279161",
        content: "ca-app-pub-1294952354367897/8641387759",
        compass: "ca-app-pub-1294952354367897/6676789143",
        japmala: "ca-app-pub-1294952354367897/1357076759",
        kundali: "ca-app-pub-1294952354367897/6809262721",
        order: "ca-app-pub-1294952354367897/7606504926",
        panchang: "ca-app-pub-1294952354367897/3356268729",
        gallery: "ca-app-pub-1294952354367897/1456252058",
        list_menu: "ca-app-pub-1294952354367897/4183099385",
        payment: "ca-app-pub-1294952354367897/2379729400",
        blog: "ca-app-pub-1294952354367897/9988710390",
        blog_content: "ca-app-pub-1294952354367897/4544812023",
        splash: "ca-app-pub-1294952354367897/8679668895"
    },
    android: {
        book: "ca-app-pub-1294952354367897/9941045999",
        about: "ca-app-pub-1294952354367897/8113194169",
        category: "ca-app-pub-1294952354367897/6760843728",
        chapter: "ca-app-pub-1294952354367897/7199827424",
        content: "ca-app-pub-1294952354367897/9773201946",
        compass: "ca-app-pub-1294952354367897/6706998756",
        japmala: "ca-app-pub-1294952354367897/3937365188",
        kundali: "ca-app-pub-1294952354367897/4270152073",
        order: "ca-app-pub-1294952354367897/8272976260",
        panchang: "ca-app-pub-1294952354367897/1763398725",
        gallery: "ca-app-pub-1294952354367897/9929114615",
        list_menu: "ca-app-pub-1294952354367897/1859052902",
        payment: "ca-app-pub-1294952354367897/6510546106",
        blog: "ca-app-pub-1294952354367897/5671009678",
        blog_content: "ca-app-pub-1294952354367897/9406240559",
        splash: "ca-app-pub-1294952354367897/8679668895"
    }
};

export const GET_ADMOB_UNIT_ID = (pageType: PAGETYPE) => {
    const platform = isPlatform('ios') ? 'ios' : 'android';
    return ADMOB_UNIT[platform][pageType];
}

export const BANNER_ADD_OPTIONS = (pageType: PAGETYPE): BannerAdOptions => {
    const platform = isPlatform('ios') ? 'ios' : 'android';
    const margin = platform === 'ios' ? -35 : 0;
    return {
        adId: GET_ADMOB_UNIT_ID(pageType),
        adSize: BannerAdSize.ADAPTIVE_BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: margin,
        isTesting: ENV.testAdMob
    };
}

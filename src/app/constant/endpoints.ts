export type API_ENDPOINT = TOKEN_API
    | USER_API
    | HOME_API
    | KUNDALI_API
    | GALLERY_API
    | COMMON_API
    | REGISTER_API
    | ORDERPOOJA_API
    | BLOG_API
    | YOUTUBE_API;

export enum TOKEN_API {
    Generate = 'token/generate'
};

export enum USER_API {
    GetUserInfo = 'token/getUserInfo'
};

export enum HOME_API {
    GetData = 'categorybooks/getdatabyid',
    GetDataById = 'categorybooks/getbyid',
    GetContentById = 'categorybooks/getcontentbyid',
}

export enum KUNDALI_API {
    INSERT = 'kundali/insert'
}

export enum REGISTER_API {
    INSERT = 'register/insert'
}

export enum ORDERPOOJA_API {
    INSERT = 'orderpooja/insert'
}

export enum GALLERY_API {
    GETALL = 'gallery/getall'
}

export enum YOUTUBE_API {
    GETALL = 'youtube/getall'
}

export enum BLOG_API {
    GETALL = 'blogs/getdata',
    BYID = 'blogs/getblogbyid',
    GETCONTENTBYID = 'blogs/getcontentbyid',
}

export enum COMMON_API {
    OrderPooja = 'common/orderpooja',
    ListMenu = 'common/listmenu',
    Cities = 'common/getcities'
}
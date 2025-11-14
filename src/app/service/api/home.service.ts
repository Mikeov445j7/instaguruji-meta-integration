import { Injectable } from '@angular/core';
import { ENV } from '../../../environments/environment';
import { BLOG_API, COMMON_API, GALLERY_API, HOME_API, KUNDALI_API, ORDERPOOJA_API, REGISTER_API, TOKEN_API, USER_API, YOUTUBE_API } from '../../constant/endpoints';
import { HttpService } from '../http.service';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    constructor(
        private _http: HttpService) { }
    GetCategories() {
        return this._http.get(ENV.origin, HOME_API.GetData, {
            catId: 0,
            bookId: 0
        });
    }
    GetBooks(categoryId: number | string) {
        return this._http.get(ENV.origin, HOME_API.GetData, {
            catId: categoryId ?? 0,
            bookId: 0
        });
    }
    GetChapters(categoryId: number | string, bookId: number | string) {
        return this._http.get(ENV.origin, HOME_API.GetData, {
            catId: categoryId ?? 0,
            bookId: bookId ?? 0
        });
    }
    GetChapterById(categoryId: number | string, bookId: number | string, chapterId: number | string) {
        return this._http.get(ENV.origin, HOME_API.GetDataById, {
            catId: categoryId,
            bookId: bookId,
            chapterId: chapterId,
            type: "chapter",
            form: "edit"
        });
    }
    GetContentById(categoryId: number | string, bookId: number | string, chapterId: number | string) {
        return this._http.get(ENV.origin, HOME_API.GetContentById, {
            catId: categoryId ?? 0,
            bookId: bookId ?? 0,
            chapterId: chapterId ?? 0
        });
    }
    KundaliInsert(data: any) {
        return this._http.post(ENV.origin, KUNDALI_API.INSERT, data);
    }
    GalleryAll() {
        return this._http.get(ENV.origin, GALLERY_API.GETALL);
    }
    YoutubeAll() {
        return this._http.get(ENV.origin, YOUTUBE_API.GETALL);
    }

    OrderPoojaFileSave(data) {
        return this._http.post(ENV.origin, COMMON_API.OrderPooja, data);
    }

    ListMenuFileSave(data) {
        return this._http.post(ENV.origin, COMMON_API.ListMenu, data);
    }

    CallPanchangURL() {
        return this._http.directGet("https://www.mypanchang.com/mobilewidget.php?cityname=NewDelhi-India&color=452603&displaymode=full");
    }

    OrderPoojaInsert(data: any) {
        return this._http.post(ENV.origin, ORDERPOOJA_API.INSERT, data);
    }

    RegisterInsert(data: any) {
        return this._http.post(ENV.origin, REGISTER_API.INSERT, data);
    }

    BlogAll() {
        return this._http.get(ENV.origin, BLOG_API.GETALL);
    }

    BlogById(id: string) {
        return this._http.get(ENV.origin, BLOG_API.BYID, { id: id });
    }

    BlogContentById(id: string) {
        return this._http.get(ENV.origin, BLOG_API.GETCONTENTBYID, { id: id });
    }

    GetCitiesJSON() {
        return this._http.get(ENV.origin, COMMON_API.Cities);
    }
}
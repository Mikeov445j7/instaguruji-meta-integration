import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/api/home.service';
import { AdMob, AdMobPlugin } from '@capacitor-community/admob';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.page.html',
  styleUrls: ['./youtube.page.scss']
})
export class YoutubePage implements OnInit {
  List: { name: string, url: string }[] = [];
  adMobInstance: AdMobPlugin = AdMob;
  loader = false;
  selectedImage: { name: string, url: string } = null;
  constructor(
    private _homeService: HomeService,
    private _sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.onLoadData();
  }

  onLoadData() {
    this.loader = true;
    this._homeService.YoutubeAll().subscribe((res: any) => {
      this.loader = false;
      this.List = this.transformData(res.data);
    }, (error) => {
      this.loader = false;
    });
  }

  transformData(data) {
    return data.map((m) => {
      return {
        ...m,
        url: this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.getId(m.url)}`),
      };
    })
  }

  getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
  }
}
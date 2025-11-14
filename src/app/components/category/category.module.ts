import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CategoryPageRoutingModule } from './category-routing.module';
import { CategoryPage } from './category.page';
import { PullRefresherModule } from '../feature/pull-refresher/pull-refresher.module';
import { ChapterPage } from './chapter.page';
import { BookPage } from './book.page';
import { ContentPage } from './content.page';
import { PopoverModule } from '../feature/popover/popover.module';
import { BlogPage } from './blog.page';
import { BlogContentPage } from './blog-content.page';
import { IsEllipsisActiveDirective } from './title-overflow.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPageRoutingModule,
    PullRefresherModule,
    PopoverModule
  ],
  declarations: [
    CategoryPage,
    BookPage,
    ChapterPage,
    ContentPage,
    BlogPage,
    BlogContentPage,
    IsEllipsisActiveDirective
  ]
})
export class CategoryPageModule { }

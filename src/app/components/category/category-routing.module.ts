import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogContentPage } from './blog-content.page';
import { BlogPage } from './blog.page';
import { BookPage } from './book.page';
import { CategoryPage } from './category.page';
import { ChapterPage } from './chapter.page';
import { ContentPage } from './content.page';

const routes: Routes = [
  { path: '', component: CategoryPage },
  { path: 'book', component: BookPage },
  { path: 'chapter', component: ChapterPage },
  { path: 'content', component: ContentPage },
  { path: 'blog', component: BlogPage },
  { path: 'blog/content', component: BlogContentPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryPageRoutingModule { }

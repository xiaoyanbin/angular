import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewscontentComponent } from './newscontent/newscontent.component';

import { UserComponent } from './user/user.component';
import { ListComponent } from './user/list/list.component';
import { VipComponent } from './user/vip/vip.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'news',component:NewsComponent},
  {path:'newscontent',component:NewscontentComponent},
  {path:'user',component:UserComponent,
    children:[
      {
        path: 'list',
        component:ListComponent
      },
      {
        path: 'vip',
        component:VipComponent
      },
      {
        path: '**',
        redirectTo:'list'
      },    
    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

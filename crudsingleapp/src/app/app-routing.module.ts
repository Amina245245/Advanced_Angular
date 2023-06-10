import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { RetriveComponent } from './retrive/retrive.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [{path:'create',component:CreateComponent},
{path:'delete',component:DeleteComponent},
{path:'retrieve',component:RetriveComponent},
{path:'update',component:UpdateComponent},
{path:'',component:RetriveComponent},
{path:'update/:id',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

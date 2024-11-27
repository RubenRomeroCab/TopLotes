import { Routes } from '@angular/router';
import { PaleDetailsComponent } from './components/pale-details/pale-details.component';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PoliticasEnvioComponent } from './components/politicas-envio/politicas-envio.component';
import { CarritoDetailsComponent } from './components/carrito-details/carrito-details.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { OutletComponent } from './components/categorias/outlet/outlet.component';
import { HerramientasComponent } from './components/categorias/herramientas/herramientas.component';
import { InformaticaComponent } from './components/categorias/informatica/informatica.component';
import { ArticulosComponent } from './components/articulos/articulos.component';



export const routes: Routes = [
    {path: '', redirectTo: '/inicio', pathMatch: 'full' },
    {path:'articulos',component:ArticulosComponent},
    {path:'informatica',component:InformaticaComponent},
    {path:'herramientas',component:HerramientasComponent},
    {path:'outlet',component:OutletComponent},
    {path:'inicio',component:HomeComponent},
    {path:'tienda',component:BodyComponent},
    {path:'pale-details/:id',component:PaleDetailsComponent},
    {path:'about',component:AboutComponent},
    {path:'politicas-envio',component:PoliticasEnvioComponent},
    {path:'carrito-details',component:CarritoDetailsComponent},
    {path:'subcribe',component:SubscribeComponent},
   
];

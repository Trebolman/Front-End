// Providers necesarios para las rutas
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// componentes a usar en las rutas
import {InicioComponent} from './c_inicio/inicio.component'
import {AlumnoComponent} from './c_alumno/alumno.component'
import {CursoComponent} from './c_curso/curso.component'
import {UserComponent} from './c_user/user.component'

// Arreglo de rutas
const appRoutes:Routes = [
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'alumno',
        component: AlumnoComponent
    },
    {
        path: 'alumno/:codigo',
        component: AlumnoComponent
    },
    {
        path: 'alumno/:codigo/:nombre',
        component: AlumnoComponent
    },
    {
        path: 'curso',
        component: CursoComponent
    },
    {
        path: 'curso/:nombre',
        component: CursoComponent
    },
    {
        path: 'curso/:nombre/:edad',
        component: CursoComponent
    },
    {
        path: '*',
        component: InicioComponent
    }
];

// exportar las rutas
export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
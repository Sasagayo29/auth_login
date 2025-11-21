import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router'; // Importe o provideRouter

import { routes } from './app.routes'; // Importe suas rotas

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes) // Adicione isso
  ]
};
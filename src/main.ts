
import { AppComponent } from './app/app.component';
import { withInterceptorsFromDi, provideHttpClient, HttpClient, HttpClientModule } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
// import { ROUTES } from './app/app.routes';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { ROUTES } from './app/app.routes';



bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(ROUTES),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),

 
  ]
})
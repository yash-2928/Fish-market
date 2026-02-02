import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = (context?: any) => bootstrapApplication(AppComponent, {
    ...config,
    ...(context && { platformProviders: context.providers })
});

export default bootstrap;

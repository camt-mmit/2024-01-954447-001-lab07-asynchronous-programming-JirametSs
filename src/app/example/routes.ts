import { Routes } from '@angular/router';
import { DummyPageComponent } from './page/dummy-page/dummy-page.component';
import { ExamplePageComponent } from './page/example-page/example-page.component';
import { SignalExampleComponent } from './signal-example/signal-example.component';

export default [
  {
    path: '',
    component:ExamplePageComponent,
    children: [
      { path: '',
        redirectTo: 'signal',
        pathMatch: 'full'
      },
      { path: 'signal', component: SignalExampleComponent
      },
      { path: 'dummy', component: DummyPageComponent
      },
      
    ]
  },
] as Routes


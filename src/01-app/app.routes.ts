import { Routes } from '@angular/router';
import {
  AboutPageComponent,
  ComponentDatabasePageComponent,
  ForeignAircraftPageComponent,
  ForeignCompaniesPageComponent,
  ForeignMilitaryEquipmentPageComponent,
  ForeignSoftwarePageComponent,
  InstrumentationPageComponent,
  LayoutPageComponent,
  MainPageComponent,
  MaterialsPageComponent,
  NewsPageComponent,
  OurProjectsPageComponent,
  ReferencesPageComponent,
  ScientificActivityPageComponent,
  UserPageComponent,
} from '@pages/index';
import { canActivateAuthGuard } from '@shared/guards';

export const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: '', component: MainPageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'about/our-projects', component: OurProjectsPageComponent },
      { path: 'about/scientific-activity', component: ScientificActivityPageComponent },
      { path: 'news', component: NewsPageComponent },
      { path: 'references', component: ReferencesPageComponent },
      {
        path: 'references/foreign-military-equipment',
        component: ForeignMilitaryEquipmentPageComponent,
      },
      {
        path: 'references/foreign-aircraft',
        component: ForeignAircraftPageComponent,
      },
      {
        path: 'references/instrumentation',
        component: InstrumentationPageComponent,
      },
      {
        path: 'references/foreign-companies',
        component: ForeignCompaniesPageComponent,
      },
      {
        path: 'references/foreign-software',
        component: ForeignSoftwarePageComponent,
      },
      {
        path: 'references/component-database',
        component: ComponentDatabasePageComponent,
      },
      { path: 'materials', component: MaterialsPageComponent },
      { path: 'user', component: UserPageComponent },
    ],
    canActivate: [canActivateAuthGuard],
  },
];

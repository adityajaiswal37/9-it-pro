import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CareerComponent } from './components/career/career.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { LightweightIndustryComponent } from './components/lightweight-industry/lightweight-industry.component';
import { EmployerRecruitmentProcessComponent } from './components/employer-recruitment-process/employer-recruitment-process.component';
import { ItServicesComponent } from './components/it-services/it-services.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'career', component: CareerComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'industries', component: IndustriesComponent },
    { path: 'it-services', component: ItServicesComponent },
    { path: 'lightweight-industry', component: LightweightIndustryComponent },
    { path: 'employee-recruitment-process', component: EmployerRecruitmentProcessComponent },
    { path: 'sitemap', component: SitemapComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
// Components
import { AppComponent } from './app.component';
import { LmIndexComponent } from './modules/lincare-maps/pages/lm-index/lm-index.component';

export const routes: Routes = [
	{ path: 'lincaremaps', component: LmIndexComponent },
	{ path: '', redirectTo: 'lincaremaps', pathMatch: 'full' }
];
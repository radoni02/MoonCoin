import { Routes, RouterModule } from '@angular/router';
import { BlockchainViewerComponent } from './components/blockchain-viewer/blockchain-viewer.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
     {path: '',component: BlockchainViewerComponent}
];
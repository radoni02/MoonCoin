import { Routes, RouterModule } from '@angular/router';
import { BlockchainViewerComponent } from './components/blockchain-viewer/blockchain-viewer.component';
import { NgModule } from '@angular/core';
import { SettingsComponent } from './components/settings/settings.component';
import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';
import { PendingTransactionsComponent } from './components/pending-transactions/pending-transactions.component';

export const routes: Routes = [
     {path: '',component: BlockchainViewerComponent},
     {path: 'settings', component: SettingsComponent},
     {path:'new/transaction',component: CreateTransactionComponent},
     {path:'new/transaction/pending',component:PendingTransactionsComponent}
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
   })
   export class AppRoutingModule { }
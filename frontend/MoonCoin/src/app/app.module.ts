import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BlockViewComponent } from './components/block-view/block-view.component';
import { BlockchainViewerComponent } from './components/blockchain-viewer/blockchain-viewer.component';
import { CommonModule } from '@angular/common';
import { BlockchainService } from './services/blockchain.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    //AppComponent,
    // BlockViewComponent,
    // BlockchainViewerComponent,
    // ... other components, directives, and pipes
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
    // ... other imported modules
  ],
  providers: [
    BlockchainService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

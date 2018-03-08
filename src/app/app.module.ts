import { ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Clipboard } from '@ionic-native/clipboard';
import { File } from '@ionic-native/file';
import { NativeStorage } from '@ionic-native/native-storage';
import { SecureStorage } from '@ionic-native/secure-storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BalanceComponent } from '../components/balance/balance';
import { ButtonComponent } from '../components/button/button.component';
import { HeaderComponent } from '../components/header/header';
import { ModalComponent } from '../components/modal/modal';
import { NotificationComponent } from '../components/notification/notification';
import { QrCodeComponent } from '../components/qr-code/qr-code';
import { CounttoDirective } from '../directives/countto/countto';
import { AddWalletPage } from '../pages/add-wallet/add-wallet';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';
import { LoadWalletPage } from '../pages/load-wallet/load-wallet';
import { ObCreateWalletPage } from '../pages/ob-create-wallet/ob-create-wallet';
import { PincodePage } from '../pages/pincode/pincode';
import { SendSkycoinPage } from '../pages/send-skycoin/send-skycoin';
import { TabsPage } from '../pages/tabs/tabs';
import { TransactionsPage } from '../pages/transactions/transactions';
import { WalletDetailPage } from '../pages/wallet-detail/wallet-detail';
import { WalletsPage } from '../pages/wallets/wallets';
import { AddressPipe } from '../pipes/address/address';
import { SkyPipe } from '../pipes/sky/sky.pipe';
import { BackendApiProvider } from '../providers/backend-api/backend-api.provider';
import { LocalApiProvider } from '../providers/local-api/local-api.provider';
import { PriceService } from '../providers/price/price.service';
import { SecureStorageProvider } from '../providers/secure-storage/secure-storage';
import { StorageApiProvider } from '../providers/storage-api/storage-api.provider';
import { WalletProvider } from '../providers/wallet/wallet.provider';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    AddWalletPage,
    DisclaimerPage,
    LoadWalletPage,
    PincodePage,
    SendSkycoinPage,
    TabsPage,
    TransactionsPage,
    WalletDetailPage,
    WalletsPage,
    ObCreateWalletPage,
    BalanceComponent,
    ModalComponent,
    QrCodeComponent,
    CounttoDirective,
    SkyPipe,
    AddressPipe,
    HeaderComponent,
    ButtonComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AddWalletPage,
    DisclaimerPage,
    LoadWalletPage,
    MyApp,
    PincodePage,
    TabsPage,
    SendSkycoinPage,
    TransactionsPage,
    WalletDetailPage,
    ObCreateWalletPage,
    WalletsPage,
  ],
  providers: [
    File,
    NativeStorage,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BackendApiProvider,
    LocalApiProvider,
    WalletProvider,
    StorageApiProvider,
    PriceService,
    SecureStorage,
    SecureStorageProvider,
    Clipboard,
  ],
})
export class AppModule {}

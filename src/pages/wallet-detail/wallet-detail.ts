import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AddressProvider } from '../../providers/address/address.provider';

@Component({
  selector: 'page-wallet-detail',
  templateUrl: 'wallet-detail.html',
})
export class WalletDetailPage {
  sum: number = 0;
  wallet: any;

  constructor(
    private address: AddressProvider,
    private navParams: NavParams,
  ) {}

  ngOnInit() {
    this.wallet = this.navParams.get('wallet');
    this.addAddressBalances();
  }

  createAddress() {
    this.address.create(this.wallet).subscribe(address => {
      if (this.wallet.entries && this.wallet.entries.length) {
        this.wallet.entries.push(address);
      } else {
        this.wallet.entries = [address];
      }
    });
  }

  private addAddressBalances() {
    if (this.wallet.entries) {
      this.wallet.entries.forEach((address, index ) => {
        this.address.getBalance(address).subscribe(balance => {
          this.wallet.entries[index].balance = balance.balance;
          this.sum = this.sum + balance.balance;
        })
      });
    }
  }
}

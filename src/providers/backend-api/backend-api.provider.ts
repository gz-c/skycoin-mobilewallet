import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../../app/app.config';
import { Output, OutputsResponse } from '../../app/app.datatypes';
import { AddressModel } from '../../models/address.model';

@Injectable()
export class BackendApiProvider {
  private url = 'http://128.199.57.221/';

  constructor(private http: Http) {}

  getOutputs(addresses: AddressModel[], max?: number): Observable<Output[]> {
    const firstAddresses =
      addresses.length > (max ? max : 20)
        ? addresses.slice(0, max ? max : 20)
        : addresses;
    const url =
      Config.backendUrl +
      'outputs?addresses=' +
      firstAddresses.map(address => address.address).join(',');
    return firstAddresses.length
      ? this.http.get(url).map((res: any) => {
          const response: OutputsResponse = res.json();
          response.head_outputs.forEach(
            output => (output.coins = parseFloat(output.coins)),
          );
          return response.head_outputs;
        })
      : Observable.of([]);
  }

  get(url, options = null) {
    return this.http
      .get(this.getUrl(url, options), this.getHeaders())
      .map((res: any) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  private getHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  private getQueryString(parameters = null) {
    if (!parameters) {
      return '';
    }

    return Object.keys(parameters)
      .reduce((array, key) => {
        array.push(key + '=' + encodeURIComponent(parameters[key]));
        return array;
      }, [])
      .join('&');
  }

  private getUrl(url, options = null) {
    return this.url + url + '?' + this.getQueryString(options);
  }
}

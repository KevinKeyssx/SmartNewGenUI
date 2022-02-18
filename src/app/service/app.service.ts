import { Injectable }                 from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';
import { IMap, IRequest }             from '../interface/http.interface';
import { Utils }                      from '../util/utils';
import { Observable }                 from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public sendRequestApi$(requestData: IRequest): Observable<object> {
    const header = {
      headers: this.appendHeaders(requestData.headers)
    }

    const body = Utils.createNewObject(requestData.body);

    return {
      'POST'    : this.http.post<object>(requestData.url, body, header),
      'GET'     : this.http.get<object>(requestData.url + this.createParams(requestData.params)),
      'DELETE'  : this.http.delete<object>(requestData.url + this.createParams(requestData.params))
    }[requestData.verb];
  }

  private appendHeaders(headers: IMap[]): HttpHeaders {
    let httpHeaders: HttpHeaders = new HttpHeaders();

    if (headers) {
      for (const header of headers) {
        httpHeaders = httpHeaders.append(header.key, header.value);
      }
    }

    return httpHeaders;
  }

  private createParams(querys: IMap[]): string {
    let params = new URLSearchParams();

    for (const query of querys) {
      params.set(query.key, query.value);
    }

    return !querys ? '' : '?' + params.toString();
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
  // Tu them header cho token truoc khi gui
  request = request.clone({
    setHeaders: {
      Authorization: 'Bearer xcddvddsassff'
    }
  });
    return next.handle(request)
  }
}
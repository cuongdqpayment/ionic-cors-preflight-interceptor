import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


var isToken = false;

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
  // Tu them header cho token truoc khi gui
  /**
   * Trường hợp nếu thêm vào thì tự động hệ thống này sẽ gửi lên server một Preflight
   * cac chuoi setHeaders se gui 'request' preflight (OPTIONS) den server xin quyen truy cap
   * Trên máy chủ phải lập trình cho phép Allow thì client mới lấy được kết quả
   * Nếu không trong interceptor  HttpErrorResponse sẽ phun ra và không thể lấy kết quả được
   */

   if (isToken){
     request = request.clone(
       {
         setHeaders: {
           Authorization: 'Bearer xcddvddsassff'
         }
       });
   }
   
    return next.handle(request)
  }
}
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements HttpInterceptor {

  

  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
      let token= localStorage.getItem("token");
      if(token==undefined)
      {
        return next.handle(req);
      }

      let clonedReqObj=req.clone({
        headers:req.headers.set('Authorization','Bearer '+token)
      });
      return next.handle(clonedReqObj);
    }


    
}

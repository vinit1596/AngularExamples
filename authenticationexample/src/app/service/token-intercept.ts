import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class TokenInterceptor implements HttpInterceptor{

    intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    
        if(sessionStorage.getItem('username') && sessionStorage.getItem('token')){
            console.log('Token value:'+sessionStorage.getItem('token'));
            request = request.clone({
                setHeaders:{
                    'Authorization': sessionStorage.getItem('token')
                }        
            })
        }
        
        return next.handle(request);
    }

}
import { User } from 'src/app/models/model/user.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
 
@Injectable()
export class DataService {
    private subject = new Subject<any>();
 
    sendData(x: User) {
        this.subject.next(x);
    }
 
    getData(): Observable<User> {
        return (this.subject.asObservable());
    }
}

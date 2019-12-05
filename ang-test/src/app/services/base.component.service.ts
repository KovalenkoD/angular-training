import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable()
export class BaseComponentService {
  public firstSubject: Subject<string> = new Subject();
  public secondSubject: BehaviorSubject<string> = new BehaviorSubject("testBehavior");


}

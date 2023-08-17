// message.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSubject: BehaviorSubject<{ text: string; backgroundColor: string | null; showMe: boolean }> = new BehaviorSubject<{ text: string; backgroundColor: string | null; showMe:boolean }>({ text: '', backgroundColor: null, showMe: false });
  public message$ = this.messageSubject.asObservable();
 
  showMessage(message: string, durationMs: number = 4000, backgroundColor: string | null = "red"): void {
    this.messageSubject.next({ text: message, backgroundColor, showMe: true });

    setTimeout(() => {
      this.clearMessage();
    }, durationMs);
  }

  clearMessage(): void {
    this.messageSubject.next({ text: '', backgroundColor: null, showMe: false });
  }
}

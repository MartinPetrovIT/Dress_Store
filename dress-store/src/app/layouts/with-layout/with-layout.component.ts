import { Component } from '@angular/core';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-with-layout',
  templateUrl: './with-layout.component.html',
  styleUrls: ['./with-layout.component.scss']
})
export class WithLayoutComponent {
constructor(public messageService : MessageService){}
}

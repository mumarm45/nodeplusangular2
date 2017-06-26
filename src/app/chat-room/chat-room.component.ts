import { Component, OnInit , OnDestroy} from '@angular/core';
import {ChatServiceService} from './service/chat-service.service';
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit, OnDestroy {
  connetion;
  messsages = [];
message;
  constructor(private chatServiceService: ChatServiceService) { }

  ngOnInit() {
    this.connetion = this.chatServiceService.getMessages().subscribe(msg => {
      console.log(msg);
       this.messsages.push(msg);

    });
  }
  sendMessage(message) {

    this.chatServiceService.sendMessage( message);

    console.log("MESSAGE SENT");

  }

  ngOnDestroy() {
   this.connetion.unsubscribe();
  }

}

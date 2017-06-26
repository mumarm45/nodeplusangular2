import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatServiceService {

private url = 'http://localhost:3000';

  private socket;
  message;
  constructor() { }

  sendMessage(message) {

    this.socket.emit('add-message', message);

    console.log("MESSAGE SENT");

  }

  getMessages() {

    let observable = new Observable(observer => {

      this.socket = io(this.url);

      this.socket.on('message', (data) => {

        observer.next(data);

      });

      return () => {

        this.socket.disconnect();

      };
    });

    return observable;

  }
}

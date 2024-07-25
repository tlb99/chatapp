import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class ChatbotComponent {
  messages: { sender: string, text: string }[] = [];
  input: string = '';

  constructor(private http: HttpClient) {}

  sendMessage() {
    if (!this.input.trim()) return;

    const userMessage = { sender: 'user', text: this.input };
    this.messages.push(userMessage);
    this.input = '';
    console.log(userMessage.text);

    this.http.post<{ reply: string }>('http://localhost:8000/api/chat', { message: userMessage.text })
      .subscribe(response => {
        const botMessage = { sender: 'bot', text: response.reply };
        this.messages.push(botMessage);
      });
  }
}

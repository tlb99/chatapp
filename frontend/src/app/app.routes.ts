import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'chat', component: ChatbotComponent },
    { path: '**', redirectTo: '' }
];
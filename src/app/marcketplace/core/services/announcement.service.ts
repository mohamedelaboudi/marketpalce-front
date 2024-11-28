import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private baseUrl = '/api/announcements'; // URL de votre API

  constructor(private http: HttpClient) { }

  getUserAnnouncements(): Observable<any[]> {
    // Remplacez par l'URL adéquate et les paramètres nécessaires
    return this.http.get<any[]>(`${this.baseUrl}/user`);
  }
} 
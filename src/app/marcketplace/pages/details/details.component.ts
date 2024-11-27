import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  activeTab: 'announcements' | 'favorites' | 'orders' = 'announcements';

  setActiveTab(tab: 'announcements' | 'favorites' | 'orders') {
    this.activeTab = tab;
  }
} 
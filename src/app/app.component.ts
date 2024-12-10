import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  originalText: string = '';
  searchTerm: string = '';
  replacementTerm: string = '';
  modifiedText: string = '';
  replacementCount: number = 0;

  performReplace() {
    // Validate inputs
    if (!this.searchTerm) {
      alert('Please enter a search term');
      return;
    }

    // Perform case-insensitive global replacement
    const regex = new RegExp(this.escapeRegExp(this.searchTerm), 'gi');
    this.modifiedText = this.originalText.replace(regex, this.replacementTerm);

    // Calculate replacement count
    const matches = this.originalText.match(regex) || [];
    this.replacementCount = matches.length;
  }

  resetText() {
    this.originalText = '';
    this.searchTerm = '';
    this.replacementTerm = '';
    this.modifiedText = '';
    this.replacementCount = 0;
  }

  // Helper method to escape special regex characters
  private escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

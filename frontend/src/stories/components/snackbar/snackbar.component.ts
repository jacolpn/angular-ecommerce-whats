import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { tap, switchMap } from 'rxjs/operators';
import { timer } from 'rxjs';

import { NotificationService } from './notification.service';

@Component({
  selector: 'app-storybook-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '-50px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '20px'
      })),
      transition(
        'hidden => visible',
        animate('500ms 0s ease-in')
      ),
      transition(
        'visible => hidden',
        animate('500ms 0s ease-out')
      )
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string;
  snackVisibility = 'hidden';

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.notifier
      .pipe(
        tap(message => {
          this.message = message;
          this.snackVisibility = 'visible';
        }), switchMap(message => timer(2000))
      ).subscribe(timing => this.snackVisibility = 'hidden');
  }

  clicked(): void {
    this.snackVisibility = 'hidden';
  }
}

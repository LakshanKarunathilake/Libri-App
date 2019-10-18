import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { SwalService } from 'src/app/services/swal/swal.service';
import { User } from 'src/app/models/User';
import { OverallService } from 'src/app/services/overall/overall.service';
import { map, mergeMap } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(
    private user: UserService,
    private swal: SwalService,
    private overall: OverallService
  ) {}
  userInfo: User;
  topics: Observable<Topic[]>;
  async ngOnInit() {
    this.user.getCurrentUserInfo().subscribe(data => (this.userInfo = data));

    this.topics = this.overall.getNoticeTopics().pipe(
      mergeMap((topics: Topic[]) => {
        return this.user.getUserTopics().pipe(
          map(userTopics => {
            return topics.map(({ name }) => {
              return { name, state: userTopics.includes(name) ? true : false };
            });
          })
        );
      })
    );
  }

  // Sending a password reset email
  resetPassword = () => {
    this.swal.displayConfirmation(
      'Confrimation',
      'You are about to reset your password please confirm your request',
      () => this.user.resetPassword()
    );
  };

  // Subscribing for a topic
  stateChangeForTopic = (event, topic: string) => {
    const status = event['detail']['checked'];
    if (status) {
      this.user.subscribeToTopic(topic);
    } else {
      this.user.unsubscribeToTopic(topic);
    }
  };
}

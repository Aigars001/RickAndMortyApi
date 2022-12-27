import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user = {
    name: 'John',
    age: 34,
  };

  page = 1;

  ngOnInit(): void {
    window.localStorage.setItem('cat', 'is hubgry');
    window.localStorage.setItem('user', JSON.stringify(this.user));

    const catInfo = window.localStorage.getItem('cat');
    const userInfo = JSON.parse(window.localStorage.getItem('user') || '');

    // console.log(catInfo);
    // console.log(userInfo);

    window.sessionStorage.setItem('hello', 'world');

    const hello = window.sessionStorage.getItem('hello');

    // console.log(hello);

    window.localStorage.removeItem('cat');

    document.cookie = 'userName=John: domain=localhost';
  }
}

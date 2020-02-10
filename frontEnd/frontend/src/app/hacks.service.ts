import { Injectable } from '@angular/core';
import {Hack} from './class/hack';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HacksService {

  testing = false;
  hacks: Hack[];
  BASE_URL = 'http://localhost:63145';


  async normalSetup() {
    console.log('normal setup' );
    await this.http.get(this.BASE_URL + '/hacks/get').subscribe(( value: any[]) => {
      // console.log('http went through normal setup ' + this.pharseIntArrays(value[0].hacks));

      this.hacks = [];
      for(let l of value) {
        this.hacks.push({id: l.id , name: l.name, date: l.date});

      }
      console.log(this.hacks);
      //

      // this.users = value;
    });

  }

  private pharseIntArrays( tem: string): number[] {
    let temp: number[] = [];
    tem = tem.substring(1, tem.length - 1 );
    let t = tem.split(',');

    for (let c of t) {
      // tslint:disable-next-line:radix
      temp.push( parseInt(c));
    }
    // console.log(temp);
    return temp;
  }



  constructor(private http: HttpClient) {
    this.hacks = [];

    this.testingSetup();

    this.normalSetup();

  }

  private testingSetup() {
    this.hacks.push({id: 1, name: 'hack 1', date: '1/1/1' });
  }

  getHack(id: number): Hack {
    for ( let hack of this.hacks){
      if ( hack.id === id) {
        return hack;
      }
    }
  }
}

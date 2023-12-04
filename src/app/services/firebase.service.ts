import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  urlCart: string =
    'https://qualcosadalcarrello-7f4be-default-rtdb.europe-west1.firebasedatabase.app/cart.json';
  urlPersone: string =
    'https://corso-angular-7b1fe-default-rtdb.europe-west1.firebasedatabase.app/persone.json';
  constructor(private http: HttpClient) {}

  insertItemToCart(body: {}) {
    console.log(body);

    return this.http.post(this.urlCart, body).subscribe((data) => {
      console.log(data);
    });
  }
  getCart() {
    return this.http.get(this.urlCart);
  }
  getPersone() {
    return this.http.get(this.urlPersone);
  }
  deleteItemFromCart(url: string, id: string) {
    return this.http.delete(`${url}/${id}.json`);
  }
  // patchItemFromCart(url: string, id: string, body: {}) {
  //   return this.http.patch(`${url}/${id}.json`, body);
  // }
}

export interface AppState {
  prodotti : Prodotto[]
}

export interface Prodotto {
  id : string;
  nome : string;
  prezzo : string;
}

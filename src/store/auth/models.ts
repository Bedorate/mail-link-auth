import firebase from "firebase/app";

export interface IauthState {
  user: firebase.User | undefined;
  state:boolean;
}

export class AuthState implements IauthState{
  user = undefined;
  state = false;
}
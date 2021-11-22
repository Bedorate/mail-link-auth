import { ActionTree } from "vuex";
import { IauthState } from "./models";
import { RootState } from "../RootState";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const actions: ActionTree<IauthState, RootState> = {
  signUp({dispatch},payload:{id:string; password:string}):void{
    firebase.auth().createUserWithEmailAndPassword(payload.id, payload.password)
    .then()
    .catch(error => {
      alert(error.message);
    })
  },
};
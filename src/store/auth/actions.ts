import { ActionTree } from "vuex";
import { IauthState } from "./models";
import { RootState } from "../RootState";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const actions: ActionTree<IauthState, RootState> = {
  signUp({ dispatch }, payload: { id: string; password: string }): void {
    firebase.auth().createUserWithEmailAndPassword(payload.id, payload.password)
      .then(
        async user => {
          dispatch("initUserDocument", user); //作成後すぐにdbに追加
        })
      .catch(error => {
        alert(error.message);
      })
  },
  signIn({ }, payload: { id: string; password: string }): void {
    firebase.auth().signInWithEmailAndPassword(payload.id, payload.password)
      .then()
      .catch(error => {
        alert(error.message);
      })
  },
  async initUserDocument({ }, payload: { user: firebase.User }): Promise<void> {
    console.log(payload);
    firebase.firestore().collection("user").doc(payload.user.uid)
    .set({
      uid: payload.user.uid
    })
  }
};
import { ActionTree } from "vuex";
import { IauthState } from "./models";
import { RootState } from "../RootState";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

type actionCodeSetting = {
  url:string
  handleCodeInApp: boolean,
};

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
  fetchSignIn({ }, email: string): void { //登録状況確認処理
    firebase.auth().fetchSignInMethodsForEmail(email)
      .then((result) => {
        if (0 < result.length) {
          console.log("登録済み");
        } else {
          console.log("未登録")
        }
      }).catch(() => {
      })
  },
  sendSignInLinkToEmail({},email:string):void{ // 認証メールの送信処理
    const actionCodeSetting :actionCodeSetting = {
      url:"http://localhost:8080/",
      handleCodeInApp: true
    };
    firebase.auth().sendSignInLinkToEmail(email,actionCodeSetting)
    .then(()=>{
      console.log("メールを送信しました。")
    }).catch(()=>{
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
  },

};
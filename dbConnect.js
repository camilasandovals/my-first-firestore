//  import the tools we need from firebase admin 
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

//  import our credentials from a secret file 
import { credentials } from "./credentials.js";

//  connect to our firebase project 
initializeApp({
    credential:cert(credentials)
});

//  connect to firestore database
export const db = getFirestore();
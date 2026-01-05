
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
  import {
    getFirestore,
    collection,
    addDoc,
    getDocs
  } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";
 
 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAAuqrS79waYFj5AwZ1sSIB8_ao8HK70lE",
    authDomain: "restaurant-website-19b17.firebaseapp.com",
    projectId: "restaurant-website-19b17",
    storageBucket: "restaurant-website-19b17.firebasestorage.app",
    messagingSenderId: "1013845672674",
    appId: "1:1013845672674:web:3102997c36fc974096d4bb",
    measurementId: "G-E0MZQ7QEJF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  const button = document.getElementById("Adddata")

  async function addMenu() {
    await addDoc(collection(db, "menus"), {
      user_id: 555555 ,
      name: "dfdfdfdfd",
      email: "อาหาร",
      point: new Date()
    });

    alert("เพิ่มข้อมูลเรียบร้อย");
  }

  // button.onclick(addMenu())


   async function loadMenus() {
    const querySnapshot = await getDocs(collection(db, "user"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  }



  export async function saveOrder(newOrder) {
  try {
    await addDoc(collection(db, "orders"), newOrder);
    alert("บันทึกคำสั่งซื้อเรียบร้อย");
  } catch (error) {
    console.error("บันทึกไม่สำเร็จ", error);
  }
}
//configuración de firebase con nuestro proyecto, vinculacion de manera local
export const environment = {
    production: false,
    //sacamos la palabra constante, el ; y cambiamos el = por :
    //lo transformamos en un objeto
    //no lo toques may porque sino no se vincula bien
    //SDK: encargados de firebase
    firebaseConfig: {
        apiKey: "AIzaSyCKN9Pcjuu0ywv9IEr6P6SF_fLRQ-Lp9QY",
        authDomain: "programacion2024-cf2d2.firebaseapp.com",
        projectId: "programacion2024-cf2d2",
        storageBucket: "programacion2024-cf2d2.appspot.com",
        messagingSenderId: "689280465034",
        appId: "1:689280465034:web:c99a882770c71117ae5573",
        measurementId: "G-51ZL7WKSQK"
      }
}
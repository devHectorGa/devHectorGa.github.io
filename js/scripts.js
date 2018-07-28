(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// Este es un ejemplo de como exportar funciones desde un archivo
/*
export const saludo = () => {
  console.log('Hola mundo')
};

export const despedida = () => {
  console.log('Adiós mundo')
};
*/
// En index.js se importan estas funciones
/* 
import {saludo, despedida} from "./modules/example";
saludo();
despedida();
*/
console.log("Hola;");

},{}]},{},[1]);

//# sourceMappingURL=scripts.js.map

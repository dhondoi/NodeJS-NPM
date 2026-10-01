# NodeJS NPM

Mengenal Node Package Manager

## membuat project

buat project NPM baru dengan perintah :

```cmd
npm init
```

Inti dari konfigurasi project NodeJS adalah `package.json`

## project type

Mengubah default project type dari commonjs menjadi js modules, dengan cara mengubah type di package.json
Sangat direkomendasikan sekarang menggunakan js modules dibanding commonjs, karena js modules sudah menjadi standard di JavaScript

tambahkan pada `package.json`

```json
"type": "module"
```

## script

Script di package.json terdapat beberapa yang spesial atau khusus
Contoh special script yaitu : `start`, `stop`, `test`, `restart`, `uninstall`, `version`, dan lain-lain
Selain itu, terdapat script spesial untuk script diatas, kita bisa gunakan gunakan prefix `pre` sebagai script yang akan dijalankan sebelumnya, dan prefix `post` sebagai script yang dijalankan setelahnya
Misal ketika kita gunakan perintah npm start, maka akan menjalankan script prestart, start dan poststart

```json
    "prestart": "echo 'sebelum start'",
    "start": "node index.js",
    "poststart": "echo 'sesudah start'",
```

ketikan perintah

```cmd
npm start
```

## export module

Pada kasus ketika kita membuat library yang akan digunakan di banyak project, baru attribute main ini akan terlihat kegunaanya
Problem ketika kita menggunakan attribute main adalah, kita cuma bisa mengekspos satu file JS, oleh karena itu penggunaan attribute main sebenarnya sudah tidak direkomendasikan lagi
Sebagai penggantinya, terdapat attribute export yang bisa digunakan sebagai konfigurasi untuk mengekspos file JS
Yang menarik dari fitur export ini, kita bisa membuat alias ketika mengekspos file JS, sehingga tidak perlu menggunakan nama file JS aslinya

```json
"type": "module",
"exports": {
    ".": "./index.js",
    "./write": "./write.js"
  }
```

```js
import { writeToFile } from "nodejs-npm/write";
```

## dependency management

Secara default, NPM akan download dependency dari website https://www.npmjs.com/
Kita bisa mencari open source package atau membuat open source package disana jika kita mau
Atau bisa langsung tulis di dependencies di `package.json`

Untuk menginstall dependency, kita bisa gunakan perintah (contoh) :

```cmd
npm install lodash
```

## dependency version

Versi
Keterangan

x
Download versi terbaru dan update ke versi terbaru walaupun MAJOR berubah

1.x
Download versi 1 terbaru, update ke versi terbaru, tapi MAJOR tetap di 1

1.1.x
Download versi 1.1 terbaru, update ke versi terbaru, tapi MAJOR dan MINOR tetap di 1.1

1.1.1
Selalu download versi 1.1.1, tidak akan update walaupun ada versi baru

~1.1.1
Download versi 1.1.1, jika ada update, lakukan update, namun hanya update jika PATCH berubah

^1.1.1
Download versi 1.1.1, jika ada update, lakukan update, namun hanya update jika MINOR dan PATCH berubah

## development dependency

Untuk menambah development dependency, kita bisa tambahkan di bagian devDependencies di package.json
Atau gunakan perintah :

```cmd
npm install namapackage --save-dev
```

Untuk download dependency, sama seperti download production dependency, kita bisa gunakan perintah :

```cmd
npm install
```

Ada baiknya, ketika kita mau jalankan aplikasi di production, kita tidak perlu menginstall development dependency, caranya kita bisa gunakan perintah:

```cmd
npm install --production
```

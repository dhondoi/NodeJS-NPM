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

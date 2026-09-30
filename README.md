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

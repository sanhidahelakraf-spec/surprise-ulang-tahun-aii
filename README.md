# Surprise Ulang Tahun 💗

Website ulang tahun romantis sederhana menggunakan HTML, CSS, dan JavaScript.

## Cara menjalankan
1. Buka folder ini di VS Code.
2. Jalankan `index.html` menggunakan ekstensi Live Server, atau buka file tersebut langsung di browser.
3. Untuk musik, masukkan file musik MP3 yang kamu miliki/berhak gunakan ke folder ini dan ubah namanya menjadi `music.mp3`.
4. Edit surat cinta di `index.html` agar terasa lebih personal.

## Upload ke GitHub Pages
1. Buat repository baru di GitHub, misalnya `surprise-ulang-tahun`.
2. Pilih Public dan buat repository.
3. Di VS Code, buka terminal pada folder project ini.
4. Jalankan perintah berikut (ganti USERNAME dengan username GitHub kamu):

```bash
git init
git add .
git commit -m "Buat website surprise ulang tahun"
git branch -M main
git remote add origin https://github.com/USERNAME/surprise-ulang-tahun.git
git push -u origin main
```

5. Di repository GitHub, buka **Settings → Pages**.
6. Pada **Build and deployment**, pilih **Deploy from a branch**.
7. Pilih branch `main`, folder `/(root)`, lalu tekan **Save**.
8. Tunggu beberapa menit. Link website biasanya berbentuk:
   `https://USERNAME.github.io/surprise-ulang-tahun/`

## Catatan musik
Browser biasanya memblokir autoplay. Karena itu musik mulai ketika pengunjung menekan tombol **Putar musik**. Gunakan file audio yang kamu punya izin untuk dipakai; file lokal `music.mp3` tidak disertakan dalam paket ini.


## Menambahkan album foto
1. Buka folder `photos`.
2. Masukkan empat foto kalian dan namai `foto-1.jpg`, `foto-2.jpg`, `foto-3.jpg`, dan `foto-4.jpg`.
3. Foto muncul pada bagian **our little memories**. Klik foto untuk memperbesar; tombol panah untuk berpindah.
4. Untuk mengganti caption, edit atribut `data-caption` di kartu foto dalam `index.html`.
5. Untuk menambah foto, salin salah satu blok `<button class="photo-card"...>` lalu ubah nama file dan caption. Tambahkan file fotonya di folder `photos`.
6. Setelah perubahan, jalankan `git add .`, `git commit -m "Tambah album foto"`, lalu `git push` untuk memperbarui website GitHub Pages.

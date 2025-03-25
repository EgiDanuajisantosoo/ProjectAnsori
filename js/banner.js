let currentBanner = 0;
        const banners = document.querySelectorAll('.banner');
        const totalBanners = banners.length;

        function changeBanner(index) {
            banners[currentBanner].classList.remove('active'); // Hilangkan efek aktif dari banner saat ini
            setTimeout(() => {
                banners[currentBanner].classList.add('hidden'); // Sembunyikan setelah animasi selesai
                banners[index].classList.remove('hidden'); // Tampilkan banner berikutnya
                setTimeout(() => {
                    banners[index].classList.add('active'); // Tambahkan efek aktif setelah sedikit delay
                }, 50);
                currentBanner = index;
            }, 1000); // Sesuaikan dengan durasi animasi (1s)
        }

        // Fungsi untuk mengganti banner secara otomatis setiap 5 detik
        function autoChangeBanner() {
            setInterval(() => {
                let nextBanner = (currentBanner + 1) % totalBanners;
                changeBanner(nextBanner);
            }, 5000);
        }

        // Tambahkan class 'active' ke banner pertama saat halaman dimuat
        document.addEventListener("DOMContentLoaded", () => {
            banners[currentBanner].classList.add("active");
            autoChangeBanner();
        });
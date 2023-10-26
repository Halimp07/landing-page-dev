// Section_1
import eduskill_logo from "@/assets/section_1/eduskill_logo.png";
import hero_right from "@/assets/section_1/hero_right.png";
import logo_right from "@/assets/section_1/logo_right.png";

// Section_2
import eduskill_left_logo from "@/assets/section_2/eduskill_left_logo.png";
import check_benefit from "@/assets/section_2/check.png";
import previous_btn from "@/assets/section_2/previous.svg";
import next_btn from "@/assets/section_2/next.svg";
import market_1 from "@/assets/section_2/marketing_1.png";
import market_2 from "@/assets/section_2/marketing_2.png";

// Section_3
import bootcamp1 from "@/assets/section_3/bootcamp_1.png"
import bootcamp2 from "@/assets/section_3/bootcamp_2.png"
import bootcamp3 from "@/assets/section_3/bootcamp_3.png"

// Section_4
import background from "@/assets/section_4/bg-overlay.png"

// Section_5
import dropdown_button from  "@/assets/section_5/dropdown.svg"
import dropup_button from  "@/assets/section_5/dropup.svg"

// Section_6
import logo_footer from "@/assets/section_6/edu_head.png"

// Export Section_1
export const eduskill = [eduskill_logo];
export const hero = [hero_right];
export const logo = [logo_right];

// Export Section_2
export const eduskill_left= [eduskill_left_logo];
export const check = [check_benefit];
export const prev = [previous_btn];
export const next = [next_btn];
export const market1 = [market_1];
export const market2 = [market_2];

// Export Section_2 Consultant
export const consultant = [
  {
    id: 1,
    textLabel: "Konsultan Bootcamp GRATIS",
    additionalElements: [
      {
        id: 1,
        icon: check,
      },
    ],
  },
  {
    id: 2,
    textLabel: "Pelayanan Cepat & Aman",
    additionalElements: [
      {
        id: 2,
        icon: check,
      },
    ],
  },
  {
    id: 3,
    textLabel: "Dibantu Sampai Proses Pembayaran",
    additionalElements: [
      {
        id: 3,
        icon: check,
      },
    ],
  },
  {
    id: 4,
    textLabel: "Bisa Dapatkan Harga Spesial",
    additionalElements: [
      {
        id: 4,
        icon: check,
      },
    ],
  },
];

// Export Section_3
export const boot_1 = [bootcamp1];
export const boot_2 = [bootcamp2];
export const boot_3 = [bootcamp3];

// Export Section_4
export const bg_overlay = [background];

// Export Section_5
export const dropdown_btn = [dropdown_button];
export const dropup_btn = [dropup_button];

// Export Section_5 FAQ
export const faq = [
  {
    id: 1,
    question: "Bagaimana cara membeli kelas atau bootcamp di Eduskill?",
    answer: "Untuk membeli kelas atau bootcamp, Anda dapat mengunjungi link: https://linktr.ee/eduskill dan pilih program yang Anda minati. Ikuti langkah-langkah selanjutnya untuk menyelesaikan pembelian.",
  },
  {
    id: 2,
    question: "Bagaimana saya dapat meminta kelas khusus untuk lembaga atau kelompok?",
    answer: "Untuk permintaan kelas khusus untuk lembaga atau kelompok, silakan hubungi tim admin di nomor +62895414873950 atau melalui formulir kontak di situs web kami.",
  },
  {
    id: 3,
    question: "Apakah tersedia layanan bantuan atau dukungan teknis jika saya mengalami kesulitan?",
    answer: "Ya, tim dukungan kami siap membantu Anda. Silakan hubungi kami melalui nomor +62895414873950 atau gunakan fitur chat live di situs web kami untuk mendapatkan bantuan.",
  },
  {
    id: 4,
    question: "Apa manfaat berlangganan premium di Eduskill?",
    answer: "Berlangganan premium memberikan akses ke konten eksklusif, proyek-proyek lanjutan, dan bimbingan pribadi yang lebih mendalam dengan MentorBot.",
  },
  {
    id: 5,
    question: "Bagaimana saya bisa mendapatkan informasi lebih lanjut tentang program bootcamp yang ditawarkan oleh Eduskill?",
    answer: "Untuk informasi lebih lanjut tentang program bootcamp kami, silakan kunjungi situs web kami atau hubungi tim admin di nomor +62895414873950.",
  },
];


// Export Section_6
export const eduskill_head = [logo_footer];
// Section_1
import eduskill_logo from "@/assets/section_1/eduskill_logo.png";
import hero_right from "@/assets/section_1/hero_right.png";
import logo_right from "@/assets/section_1/logo_right.png";

// Section_2
import eduskill_left_logo from "@/assets/section_2/eduskill_left_logo.png";
import check_benefit from "@/assets/section_2/check.png";

// Section_3
import bootcamp1 from "@/assets/section_3/bootcamp_1.png"
import bootcamp2 from "@/assets/section_3/bootcamp_2.png"
import bootcamp3 from "@/assets/section_3/bootcamp_3.png"

// Section_4
import background from "@/assets/section_4/bg-overlay.png"

// Section_5
import dropdown_button from  "@/assets/section_5/dropdown.svg"

// Section_6
import logo_footer from "@/assets/section_6/edu_head.png"

// Export Section_1
export const eduskill = [eduskill_logo];
export const hero = [hero_right];
export const logo = [logo_right];

// Export Section_2
export const eduskill_left= [eduskill_left_logo];
export const check = [check_benefit];

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

// Export Section_6
export const eduskill_head = [logo_footer];
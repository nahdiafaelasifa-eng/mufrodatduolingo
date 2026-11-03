export type Vocab = {
  id: number; arabic: string; transliteration: string; meaning: string;
  category: string; example: string; example_meaning: string;
};
export const sampleVocabulary: Vocab[] = [
 {id:1,arabic:"كِتَابٌ",transliteration:"kitaabun",meaning:"Buku",category:"Sekolah",example:"هَذَا كِتَابٌ",example_meaning:"Ini sebuah buku."},
 {id:2,arabic:"قَلَمٌ",transliteration:"qalamun",meaning:"Pulpen",category:"Sekolah",example:"هَذَا قَلَمٌ",example_meaning:"Ini sebuah pulpen."},
 {id:3,arabic:"مَدْرَسَةٌ",transliteration:"madrasatun",meaning:"Sekolah",category:"Sekolah",example:"الْمَدْرَسَةُ كَبِيرَةٌ",example_meaning:"Sekolah itu besar."},
 {id:4,arabic:"بَيْتٌ",transliteration:"baitun",meaning:"Rumah",category:"Rumah",example:"بَيْتِي جَمِيلٌ",example_meaning:"Rumahku indah."},
 {id:5,arabic:"مَاءٌ",transliteration:"maa'un",meaning:"Air",category:"Makanan",example:"أُرِيدُ مَاءً",example_meaning:"Saya ingin air."},
 {id:6,arabic:"تُفَّاحَةٌ",transliteration:"tuffaahatun",meaning:"Apel",category:"Makanan",example:"هَذِهِ تُفَّاحَةٌ",example_meaning:"Ini sebuah apel."},
 {id:7,arabic:"أُمٌّ",transliteration:"ummun",meaning:"Ibu",category:"Keluarga",example:"هَذِهِ أُمِّي",example_meaning:"Ini ibu saya."},
 {id:8,arabic:"أَبٌ",transliteration:"abun",meaning:"Ayah",category:"Keluarga",example:"هَذَا أَبِي",example_meaning:"Ini ayah saya."}
];

const express = require("express");
const router = express.Router();
const keyword_extractor = require("keyword-extractor");
const translatte = require("translatte");

router.post("/extract", (req, res) => {
  const sentence = req.body.sentence;

  // Terjemahkan dari Bahasa Indonesia ke Bahasa Inggris
  translatte(sentence, { from: "id", to: "en" })
    .then((translation) => {
      const englishText = translation.text;

      // Ekstraksi kata kunci dari teks Bahasa Inggris
      const extraction_result = keyword_extractor.extract(englishText, {
        language: "english",
        remove_digits: true,
        return_changed_case: true,
        remove_duplicates: false,
      });
      // Terjemahkan kembali hasil ekstraksi ke Bahasa Indonesia
      //   translatte(extraction_result.join(" "), { from: "en", to: "id" })
      //     .then((translatedKeywords) => {
      //       const indonesianKeywords = translatedKeywords.text.split(" ");

      //       res.json(indonesianKeywords);
      //     })

      res.json(extraction_result); // Mengembalikan hasil ekstraksi dalam Bahasa Inggris
    })
    .catch((err) => {
      console.error("Error translating sentence:", err);
      res.status(500).send("Internal Server Error");
    });
});

module.exports = router;

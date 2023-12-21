//  include the Keyword Extractor
const keyword_extractor = require("keyword-extractor");

//  Opening sentence to NY Times Article at
/*
http://www.nytimes.com/2013/09/10/world/middleeast/
surprise-russian-proposal-catches-obama-between-putin-and-house-republicans.html
*/
const sentence =
"President Obama woke up Monday facing a Congressional defeat that many in both parties believed could hobble his presidency."

//  Extract the keywords
const extraction_result =
keyword_extractor.extract(sentence,{
    language:"english",
    remove_digits: true,
    return_changed_case:true,
    remove_duplicates: false

});

console.log(extraction_result);


module.exports = function(text) {
  for (var i = text.length - 1; i >= 0; i--) {
    var c = text[i];

    if(charmap[c]) {
      text = setCharAt(text, i, charmap[c]);
    }
  }

  return text;
}

function setCharAt(t, i, c) {
  if(i > t.length - 1) {
    return t;
  }

  return t.substr(0, i) + c + t.substr(i + 1);
}

charmap = {
  'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A', 'Æ': 'AE', 'Ç': 'C', 'È': 'E', 
  'É': 'E', 'Ê': 'E', 'Ë': 'E', 'Ì': 'I', 'Í': 'I', 'Î': 'I', 'Ï': 'I', 'Ð': 'D', 'Ñ': 'N', 
  'Ò': 'O', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ö': 'O', 'Ő': 'O', 'Ø': 'O', 'Ù': 'U', 'Ú': 'U', 
  'Û': 'U', 'Ü': 'U', 'Ű': 'U', 'Ý': 'Y', 'Þ': 'TH', 'ß': 'ss', 'à':'a', 'á':'a', 'â': 'a', 
  'ã': 'a', 'ä': 'a', 'å': 'a', 'æ': 'ae', 'ç': 'c', 'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e', 
  'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i', 'ð': 'd', 'ñ': 'n', 'ò': 'o', 'ó': 'o', 'ô': 'o', 
  'õ': 'o', 'ö': 'o', 'ő': 'o', 'ø': 'o', 'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u', 'ű': 'u', 
  'ý': 'y', 'þ': 'th', 'ÿ': 'y', 'ẞ': 'SS', 'α':'a', 'β':'b', 'γ':'g', 'δ':'d', 'ε':'e', 'ζ':'z', 
  'η':'h', 'θ':'8', 'ι':'i', 'κ':'k', 'λ':'l', 'μ':'m', 'ν':'n', 'ξ':'3', 'ο':'o', 'π':'p', 
  'ρ':'r', 'σ':'s', 'τ':'t', 'υ':'y', 'φ':'f', 'χ':'x', 'ψ':'ps', 'ω':'w', 'ά':'a', 'έ':'e', 
  'ί':'i', 'ό':'o', 'ύ':'y', 'ή':'h', 'ώ':'w', 'ς':'s', 'ϊ':'i', 'ΰ':'y', 'ϋ':'y', 'ΐ':'i', 
  'Α':'A', 'Β':'B', 'Γ':'G', 'Δ':'D', 'Ε':'E', 'Ζ':'Z', 'Η':'H', 'Θ':'8', 'Ι':'I', 'Κ':'K', 
  'Λ':'L', 'Μ':'M', 'Ν':'N', 'Ξ':'3', 'Ο':'O', 'Π':'P', 'Ρ':'R', 'Σ':'S', 'Τ':'T', 'Υ':'Y', 
  'Φ':'F', 'Χ':'X', 'Ψ':'PS', 'Ω':'W', 'Ά':'A', 'Έ':'E', 'Ί':'I', 'Ό':'O', 'Ύ':'Y', 'Ή':'H', 
  'Ώ':'W', 'Ϊ':'I', 'Ϋ':'Y', 'ş':'s', 'Ş':'S', 'ı':'i', 'İ':'I', 'ğ':'g', 'Ğ':'G', 'а':'a', 
  'б':'b', 'в':'v', 'г':'g', 'д':'d', 'е':'e', 'ё':'yo', 'ж':'zh', 'з':'z', 'и':'i', 'й':'j', 
  'к':'k', 'л':'l', 'м':'m', 'н':'n', 'о':'o', 'п':'p', 'р':'r', 'с':'s', 'т':'t', 'у':'u', 
  'ф':'f', 'х':'h', 'ц':'c', 'ч':'ch', 'ш':'sh', 'щ':'sh', 'ъ':'u', 'ы':'y', 'ь':'', 'э':'e', 
  'ю':'yu', 'я':'ya', 'А':'A', 'Б':'B', 'В':'V', 'Г':'G', 'Д':'D', 'Е':'E', 'Ё':'Yo', 'Ж':'Zh', 
  'З':'Z', 'И':'I', 'Й':'J', 'К':'K', 'Л':'L', 'М':'M', 'Н':'N', 'О':'O', 'П':'P', 'Р':'R', 
  'С':'S', 'Т':'T', 'У':'U', 'Ф':'F', 'Х':'H', 'Ц':'C', 'Ч':'Ch', 'Ш':'Sh', 'Щ':'Sh', 'Ъ':'U', 
  'Ы':'Y', 'Ь':'', 'Э':'E', 'Ю':'Yu', 'Я':'Ya', 'Є':'Ye', 'І':'I', 'Ї':'Yi', 'Ґ':'G', 'є':'ye', 
  'і':'i', 'ї':'yi', 'ґ':'g', 'č':'c', 'ď':'d', 'ě':'e', 'ň': 'n', 'ř':'r', 'š':'s', 'ť':'t', 
  'ů':'u', 'ž':'z', 'Č':'C', 'Ď':'D', 'Ě':'E', 'Ň': 'N', 'Ř':'R', 'Š':'S', 'Ť':'T', 'Ů':'U', 
  'Ž':'Z', 'ą':'a', 'ć':'c', 'ę':'e', 'ł':'l', 'ń':'n', 'ś':'s', 'ź':'z', 'ż':'z', 'Ą':'A', 
  'Ć':'C', 'Ę':'e', 'Ł':'L', 'Ń':'N', 'Ś':'S', 'Ź':'Z', 'Ż':'Z', 'ā':'a', 'ē':'e', 'ģ':'g', 
  'ī':'i', 'ķ':'k', 'ļ':'l', 'ņ':'n', 'ū':'u', 'Ā':'A', 'Ē':'E', 'Ģ':'G', 'Ī':'i', 'Ķ':'k', 
  'Ļ':'L', 'Ņ':'N', 'Ū':'u', '€': 'euro', '₢': 'cruzeiro', '₣': 'french franc', '£': 'pound', 
  '₤': 'lira', '₥': 'mill', '₦': 'naira', '₧': 'peseta', '₨': 'rupee', '₩': 'won', '₪': 'new shequel', 
  '₫': 'dong', '₭': 'kip', '₮': 'tugrik', '₯': 'drachma', '₰': 'penny', '₱': 'peso', '₲': 'guarani', 
  '₳': 'austral', '₴': 'hryvnia', '₵': 'cedi', '¢': 'cent', '¥': 'yen', '元': 'yuan', '円': 'yen', 
  '﷼': 'rial', '₠': 'ecu', '¤': 'currency', '฿': 'baht', "$": 'dollar', '₹': 'indian rupee', 
  '©':'(c)', 'œ': 'oe', 'Œ': 'OE', '∑': 'sum', '®': '(r)', '†': '+', '“': '"', '”': '"', '‘': "'", 
  '’': "'", '∂': 'd', 'ƒ': 'f', '™': 'tm', '℠': 'sm', '…': '...', '˚': 'o', 'º': 'o', 'ª': 'a',  
  '•': '*', '∆': 'delta', '∞': 'infinity', '♥': 'love', '&': 'and', '|': 'or', '<': 'less', '>': 'greater'
};

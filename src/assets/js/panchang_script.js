var minutes = 1000 * 60; //Milliseconds
var hours = minutes * 60; //Milliseconds
var day = hours * 24; //Milliseconds
var TimeZoneOffset = 5.5;
var emonth = ["जनवरी", "फरवरी", "मार्च", "अप्रेल", "मई", "जून", "जुलाई", "अगस्त", "सितम्बर", "अक्टूबर", "नबंवर", "दिसम्बर"]
var emonth2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var nakshatra = ["अश्विनी/alpha arietis", "भरणी/41 arietis", "कृतिका/Pleiades", "रोहिणी/alpha tauri", "मृगशिरा/lambda orionis", "आर्द्रा/alpha orionis", "पुर्नवसु/beta geminorum", "पुष्य/delta canceri", "अश्लेषा/alpha canceri", "मघा/alpha leonis", "पू.फाल्गुनी/delta leonis", "उ.फाल्गुनी/beta leonis", "हस्त/gamma or delta corvi", "चित्रा/alpha virginis", "स्वाति/alpha bootis", "विशाखा/alpha libra", "अनुराधा/delta scorpionis", "ज्येष्ठाalpha scorpionis/", "मूल/lambda scorpionis", "पू.षाढ़ा/delta sagittarii", "उ.षाढ़ा/sigma sagittarii", "श्रवण/alpha aquilae", "धनिष्ठा/alpha delphini", "शतभिषा/lambda aqurii", "पू.भाद्रपद/alpha pegasi", "उ.भाद्रपद/gamma pegasi", "रेवती/delta piscium"];
var yogas = ["विष्कम्भ", "प्रीति", "आयुष्मान", "सौभाग्य", "शोभन", "अतिगण्ड", "सुकर्मा", "धृति", "शूल", "गंड", "वृद्धि", "ध्रुव", "व्याघात", "हर्षण", "वज्र", "सिद्धि", "व्यतिपात", "वरीयान", "परिघ", "शिव", "सिद्ध", "सन्ध्या", "शुभ", "शुक्ल", "ब्रह्म", "इंद्र", "वैधृति"];
var tithi = ["शुक्ल प्रथमा 1", "शुक्ल व्दितिया 2", "शुक्ल तृतिया 3", "शुक्ल चतु्र्थी 4", "शुक्ल पंचमी 5", "शुक्ल षष्ठी 6", "शुक्ल सप्तमी 7", "शुक्ल अष्टमी 8", "शुक्ल नवमीं 9", "शुक्ल दशमी 10", "शुक्ल एकादशी 11", "शुक्ल व्दादशी 12", "शुक्ल त्रयोदशी 13", "शुक्ल चर्तुदशी 14", "पूर्णिमा पूर्ण", "कृष्ण प्रथमा 1", "कृष्ण व्दितिया 2", "कृष्ण तृतिया 3", "कृष्ण चतुर्थी 4", "कृष्ण पंचमी 5", "कृष्ण षष्ठी 6", "कृष्ण सप्तमी 7", "कृष्ण अष्टमी 8", "कृष्ण नवमीं 9", "कृष्ण दशमी 10", "कृष्ण एकादशी 11", "कृष्ण व्दादशी 12", "कृष्ण त्रयोदशी 13", "कृष्ण चर्तुदशी 14", "अमावस्या नया"];
var vara = ["सूर्य-रविवार", "चंद्र-सोमवार", "मंगल-मंगलवार", "बुध-बुधवार", "बृहस्पति-गुरुवार", "शुक्र-शुक्रवार", "शनि-शनिवार"];
var karana = ["किस्तुध्न-L10", "बव-सू", "बालव-चं", "कौलव-मं", "तैतिल-बु", "गरिज-बृ", "वणिज-शु", "विष्टि-श", "बव-सू", "बालव-चं", "कौलव-मं", "तैतिल-बु", "गरिज-बृ", "वणिज-शु", "बिष्टि-श", "बव-सू", "बालव-चं", "कौलव-मं", "तैतिल-बु", "गरिज-बृ", "वणिज-शु", "बिष्टि-श", "बव-सू", "बालव-चं", "कौलव-मं", "तैतिल-बु", "गरिज-बृ", "वणिज-शु", "बिष्टि-श", "बव-सू", "बालव-चं", "कौलव-मं", "तैतिल-बु", "गरिज-बृ", "वणिज-शु", "बिष्टि-श", "बव-सू", "बालव-चं", "कौलव-मं", "तैतिल-बु", "गरिज-बृ", "वणिज-शु", "बिष्टि-श", "बव-सू", "बालव-चं", "कौलव-मं", "तैतिल-बु", "गरिज-बृ", "वणिज-शु", "बिष्टि-श", "बव-सू", "बालव-चं", "कौलव-मं", "तैतिल-बु", "गरिज-बृ", "वणिज-शु", "बिष्टि-श", "शकुनि-L1", "चतुष्पाद-L4", "नाग-L7"];
var graha = ["सूर्य/Sun", "चंद्र/Moon", "मंगल/Mars", "बुध/Mercury", "बृहस्पति/Jupiter", "शुक्र/Venus", "शनि/Saturn", "राहु/Rahu", "केतु/Ketu"];
var caughadiya = ["उद्वेग-सू", "चर-शु", "लाभ-बु", "अमृत-चं", "काल-श", "शुभ-बृ", "रोग-मं"];
var muhurtha = ["रुद्र-आर्द्रा", "अहि-अश्लेषा", "मित्र-अनुराधा", "पितृ-मघा", "वसु-धनिष्ठा", "अंबु-पूर्वाषाढ़ा", "विश्वेदेवा-उत्तराषाढ़ा", "अभिजित/विधि-अभिजित", "विधाता/सतमुखी-रोहिणी", "पुरुहुता-ज्येष्ठा", "इन्द्राणि/वाहिनी-बिशाखा", "निर्रिति/नक्ताँचर-मूल", "वरुण/उदाकांत-शतभिषा", "आर्यमान-उत्तराफाल्गुणी", "भग-पूर्वाफाल्गुणी", "गिरिश-आर्द्रा", "अजापाद-पूर्वाभाद्रपद", "अहिर्बुधन्य-उत्तराभाद्रपद", "पुषण-रेवती", "अश्वि-अश्विनी", "यम-भरणी", "अग्नि-कृतिका", "विधार्थी-रोहिणी", "चंदा-मृगशिरा", "अदिति-पुनर्वसु", "जीवा-पुष्य", "विष्णु-श्रवण", "अर्क-हस्त", "त्वष्ट्री-चित्रा", "मरुत-स्वाति"];
var week_days = ["रविवार/Sunday", "सोमवार/Monday", "मंगलवार/Tuesday", "बुधवार/Wednesday", "गुरुवार/Thursday", "शुक्रवार/Friday", "शनिवार/Saturday"];
var hora = ["सूर्य/Sun", "शुक्र/Venus", "बुध/Mercury", "चंद्र/Moon", "शनि/Saturn", "बृहस्पति/Jupiter", "मंगल/Mars"];
var GulikaChakra = ["काल", "-", "मृत्यु", "अर्द्धप्रहर", "यमघण्ट", "-", "गुलिक", "-"];
var asRashi = [{
    'f': "मेष        /Aries",
    'onme': 'Kriya',
    't': 'मे/    Ar',
    's': 'mars',
    'n': 2
}, {
    'f': "बृषभ     /Taurus",
    'onme': 'Thavuri',
    't': 'बृ/    Ta',
    's': 'venus',
    'n': 5
}, {
    'f': "मिथुन    /Gemini",
    'onme': 'Jitheema',
    't': 'मि/   Ge',
    's': 'mercury',
    'n': 3
}, {
    'f': "कर्क     /Cancer",
    'onme': 'Kulira',
    't': 'क/   Ca',
    's': 'moon',
    'n': 1
}, {
    'f': "सिंह        /Leo",
    'onme': 'Laya',
    't': 'सिं/  Le',
    's': 'sun',
    'n': 0
}, {
    'f': "कन्या     /Virgo",
    'onme': 'Pathona',
    't': 'कन्/ Vi',
    's': 'mercury',
    'n': 3
}, {
    'f': "तुला      /Libra",
    'onme': 'Juka',
    't': 'तु /   Li',
    's': 'venus',
    'n': 5
}, {
    'f': "वृश्चिक/Scorpius",
    'onme': 'Kowrpi',
    't': 'वृ/    Sc',
    's': 'mars',
    'n': 2
}, {
    'f': "धनु /Sagittarius",
    'onme': 'Thaukshika',
    't': 'धु/    Sg',
    's': 'jupiter',
    'n': 4
}, {
    'f': "मकर/Capricorns",
    'onme': 'Akokero',
    't': 'म/    Cp',
    's': 'saturn',
    'n': 6
}, {
    'f': "कुंभ  /Aquarius",
    'onme': 'Hridroga',
    't': 'कुं/   Aq',
    's': 'saturn',
    'n': 6
}, {
    'f': "मीन   /Pisces",
    'onme': 'Anthya',
    't': 'मी/   Pi',
    's': 'jupiter',
    'n': 4
}];
var MaandiGunanka = [26 / 30, 22 / 30, 18 / 30, 14 / 30, 10 / 30, 6 / 30, 2 / 30, 30 / 30]; //In Weekday order; Take 5th for night time
var kaalachakra = [0, 2, 4, 3, 5, 6, 1, 7]; //Kaalachakra sequence
var kaalachakra_start = [0, 6, 1, 3, 2, 4, 5];
var caughadia_start = [0, 3, 6, 2, 5, 1, 4];
var vimshottari = [0, 1, 2, 7, 4, 6, 3, 8, 5]; //Vimshottari Sequence
var order = [0, 3, 6, 2, 5, 1, 4];
var nakshatra_size = 13 + 1 / 3; //Nakshatra Size in degrees.
var hmonth = ["चैत्र", "बैशाख", "ज्येष्ठ", "आषाढ़", "श्रावण", "भाद्रपद", "अश्विन", "कार्तिक", "मार्गशीर्ष", "पौष", "माघ", "फाल्गुन"]
var samvatsara = ["प्रभव/Prabhava", "विभव/Vibhava", "शुक्ल/Shukla", "प्रमोद/Pramodadoota", "प्रजापति/Prajothpatti", "अंगिरस/Āngirasa", "श्रीमुख/Shrīmukha", "भव/Baāva", "युवन/Yuva", "धातृ/Dhātru", "ईश्वर/Īshvara", "बहुधान्य/Bahudhānya", "प्रमथिन/Pramāthi", "विक्रम/Vikrama", "बृष/Vrusha", "चित्रभानु/Chitrabhānu", "स्वभानु/Svabhānu", "तारण/Tārana", "पार्थिव/Pārthiva", "व्यय/Vyaya", "सर्वजित्/Sarvajith", "सर्वधारिन्/Sarvadhāri", "विरोधिन्/Virodhi", "विकृति/Vikruta", "खर/Khara", "नन्दन/Nandana", "विजय/Vijaya", "जय/Jaya", "मन्मथ/Manmatha", "दुर्मुख/Durmukhi", "हेमालम्बिन्/Hevilambi", "बिलंविन्/Vilambi", "विकारिन्/Vikāri", "शार्वरी/Shārvari", "प्लव/Plava", "शुभकृति/Shubhakrutha", "शौभन/Shobhakrutha", "क्रोधी/Krodhi", "विश्वावसु/Vishvāvasu", "पराभव/Parābhava", "प्लवंग/Plavanga", "कीलक/Kīlaka", "सोम्य/Saumya", "साधारिन्/Sādhārana", "विरोधीकृत/Virodhikrutha", "परिधाविन्/Paridhāvi", "प्रमादिन्/Pramādeecha", "आनंद/Ānanda", "राक्षस/Rākshasa", "अनल/Nala/Anala", "पिंगल/Pingala", "कालयुक्ति/Kālayukthi", "सिद्धार्थिन्/Siddhārthi", "रोद्र/Raudra", "दु्र्मति/Durmathi", "दुंदुभि/Dundubhi", "रुधिरोद्गारिन्/Rudhirodgāri", "रक्ताक्ष/Raktākshi", "क्रोधन/Manyu/Krodhana", "अक्षय/Kshaya/Akshaya"]; //var samvatsara = ["Prabhava","Vibhava","Shukla","Pramodoota","Prajothpatti","Āngirasa","Shrīmukha","Baāva","Yuva","Dhātru","Īshvara","Bahudhānya","Pramāthi","Vikrama","Vrusha","Chitrabhānu","Svabhānu","Tārana","Pārthiva","Vyaya","Sarvajith","Sarvadhāri","Virodhi","Vikruta","Khara","Nandana","Vijaya","Jaya","Manmatha","Durmukhi","Hevilambi","Vilambi","Vikāri","Shārvari","Plava","Shubhakrutha","Shobhakrutha","Krodhi","Vishvāvasu","Parābhava","Plavanga","Kīlaka","Saumya","Sādhārana","Virodhikrutha","Paridhāvi","Pramādeecha","Ānanda","Rākshasa","Anala","Pingala","Kālayukthi","Siddhārthi","Raudra","Durmathi","Dundubhi","Rudhirodgāri","Raktākshi","Krodhana","Akshaya"];
var panchanga;
var timerID;
var timeOut = 1000;
var rad = 180 / Math.PI;
var txt = "";
var doc;
var chart = [{
    'text': 'Asc/लग्न   ',
    'long': 0,
    'retro': "",
    'speed': 0,
    'sleep': "",
    'id': 0,
    'bhava': 0,
    'tx': '<font size=4px color=#0000FF>लग्न</font>'
}, {
    'text': 'Sun/सूर्य   ',
    'long': 0,
    'retro': "",
    'speed': 0,
    'sleep': "",
    'id': 1,
    'bhava': 0,
    'tx': 'सू'
}, {
    'text': 'Moon/चंद्र',
    'long': 0,
    'retro': "",
    'speed': 0,
    'sleep': "",
    'id': 2,
    'bhava': 0,
    'tx': 'चं'
}, {
    'text': 'Mars/मंगल ',
    'long': 0,
    'retro': "",
    'speed': 0,
    'sleep': "",
    'id': 3,
    'bhava': 0,
    'tx': 'मं'
}, {
    'text': 'Mercury/बुध ',
    'long': 0,
    'retro': "",
    'speed': 0,
    'sleep': "",
    'id': 4,
    'bhava': 0,
    'tx': 'बु'
}, {
    'text': 'Jupiter/बृहस्पति',
    'long': 0,
    'retro': "",
    'speed': 0,
    'sleep': "",
    'id': 5,
    'bhava': 0,
    'tx': 'बृ'
}, {
    'text': 'Venus/शुक्र',
    'long': 0,
    'retro': "",
    'speed': 0,
    'sleep': "",
    'id': 6,
    'bhava': 0,
    'tx': 'शु'
}, {
    'text': 'Saturn/शनि',
    'long': 0,
    'retro': "",
    'speed': 0,
    'sleep': "",
    'id': 7,
    'bhava': 0,
    'tx': 'श'
}, {
    'text': 'Rahu/राहु',
    'long': 0,
    'retro': "",
    'speed': 0,
    'sleep': "",
    'id': 8,
    'bhava': 0,
    'tx': 'रा'
}, {
    'text': 'Ketu/केतु',
    'long': 0,
    'retro': "",
    'speed': 0,
    'sleep': "",
    'id': 9,
    'bhava': 0,
    'tx': 'के'
}];
var planet_const = [{
    'name': 'star',
    'manda': -1,
    'rotation': 0,
    'sighra': 0,
    'apogee': 0,
    'circumm': 0,
    'circums': 0
}, {
    'name': 'sun',
    'manda': 3,
    'rotation': 4320000,
    'sighra': 4320000,
    'apogee': 77 + 17 / 60,
    'circumm': 13 + 50 / 60,
    'circums': 0
}, {
    'name': 'moon',
    'manda': 6,
    'rotation': 57753336,
    'sighra': 0,
    'apogee': 0,
    'circumm': 31 + 50 / 60,
    'circums': 0
}, {
    'name': 'mercury',
    'manda': 5,
    'rotation': 4320000,
    'sighra': 17937060,
    'apogee': 220 + 27 / 60,
    'circumm': 29,
    'circums': 131.5
}, {
    'name': 'venus',
    'manda': 4,
    'rotation': 4320000,
    'sighra': 7022376,
    'apogee': 79 + 50 / 60,
    'circumm': 11.5,
    'circums': 261
}, {
    'name': 'mars',
    'manda': 2,
    'rotation': 2296832,
    'sighra': 4320000,
    'apogee': 130 + 2 / 60,
    'circumm': 73.5,
    'circums': 233.5
}, {
    'name': 'jupiter',
    'manda': 1,
    'rotation': 364220,
    'sighra': 4320000,
    'apogee': 171 + 18 / 60,
    'circumm': 32.5,
    'circums': 71
}, {
    'name': 'saturn',
    'manda': 0,
    'rotation': 146568,
    'sighra': 4320000,
    'apogee': 236 + 37 / 60,
    'circumm': 48.5,
    'circums': 39.5
}, {
    'name': 'candrocca',
    'manda': -1,
    'rotation': 488203,
    'sighra': 0,
    'apogee': 0,
    'circumm': 0,
    'circums': 0
}, {
    'name': 'rahu',
    'manda': -1,
    'rotation': -232238,
    'sighra': 0,
    'apogee': 0,
    'circumm': 0,
    'circums': 0
}];

function padZero(t) {
    return t < 10 ? "0" + t : t;
}

function frac(x) {
    return (x - pI(x))
}
/// the getPanchanga function take,
/// INPUT VALUES: datetime, long and latitude.
/// RETURN VALUES: It returns an object with all the panchange values.
/// .html   : formatted html with all the values. for other values please read the function below with all "this."
function getPanchanga(date_time, longitude, latitude, placename) {
    this.date_time = date_time;
    this.y0 = date_time.getFullYear();
    cur_date = new Date(date_time).setFullYear(y0); //In Milliseconds.//Date.parse(date_time);Date.parse not used because it returns uncertain value for bellow 100 and negative year periods.
    this.jd2 = m2j(date_time) + date_time.getTimezoneOffset() / 1440;
    this.grahas = new getGrahas(jd2, longitude, latitude);
    this.AscData = new calculateAscendant(date_time, latitude, longitude);
    this.niryan = { checked: true };
    if (this.niryan.checked) { //niryan longitude
        this.grahas.grahas[7] = (this.AscData.node + 36000) % 360;
        for (i = 0; i < 7; ++i) {
            this.grahas.grahas[i] = (36000 + this.grahas.grahas[i] + this.AscData.Ayanamsa) % 360;
        }
    } else { //sayan longitude
        this.grahas.grahas[7] = (this.AscData.node + 36000) % 360;
        for (i = 0; i < 7; ++i) {
            this.grahas.grahas[i] = (36000 + this.grahas.grahas[i]) % 360;
        }
    }
    this.grahas.grahas[8] = (this.AscData.Ascendant + 36000) % 360;
    this.grahas.grahas[9] = this.grahas.grahas[7] + 180;
    chart[0].long = this.grahas.grahas[8];
    chart[9].long = (this.grahas.grahas[7] + 180) % 360; //+0.0027777777778
    chart[9].speed = this.grahas.speed[7]; //+0.0027777777778
    chart[9].retro = this.grahas.speed[7] < 0 ? " <b>(व)</b>" : "";
    chart[2].sleep = Math.abs(this.grahas.grahas[0] - this.grahas.grahas[1]) <= 12 ? " <b>(अ)</b>" : ""; //चंद्र
    chart[3].sleep = Math.abs(this.grahas.grahas[0] - this.grahas.grahas[2]) <= 17 ? " <b>(अ)</b>" : ""; //मंगल
    if (this.grahas.speed[3] < 0) {
        chart[4].sleep = Math.abs(this.grahas.grahas[0] - this.grahas.grahas[3]) <= 12 ? " <b>(अ)</b>" : ""; //बुध
    } else {
        chart[4].sleep = Math.abs(this.grahas.grahas[0] - this.grahas.grahas[3]) <= 14 ? " <b>(अ)</b>" : ""; //बुध
    }
    chart[5].sleep = Math.abs(this.grahas.grahas[0] - this.grahas.grahas[4]) <= 11 ? " <b>(अ)</b>" : ""; //बृहस्पति
    if (this.grahas.speed[5] < 0) {
        chart[6].sleep = Math.abs(this.grahas.grahas[0] - this.grahas.grahas[5]) <= 8 ? " <b>(अ)</b>" : ""; //शुक्र
    } else {
        chart[6].sleep = Math.abs(this.grahas.grahas[0] - this.grahas.grahas[5]) <= 10 ? " <b>(अ)</b>" : ""; //शुक्र
    }
    chart[7].sleep = Math.abs(this.grahas.grahas[0] - this.grahas.grahas[6]) <= 15 ? " <b>(अ)</b>" : ""; //शनि
    for (i = 1; i < 9; ++i) {
        chart[i].long = this.grahas.grahas[i - 1]; //+1.4761112+0.0027777777778;
        chart[i].speed = this.grahas.speed[i - 1];
        chart[i].retro = this.grahas.speed[i - 1] < 0 ? " <b>(व)</b>" : "";
    }
    for (i = 0; i < 10; ++i) {
        chart[i].bhava = (pI(chart[i].long / 30) - pI(chart[0].long / 30) + 12) % 12 + 1;
    }
    this.moon_cur = this.grahas.grahas[1];
    this.sun_cur = this.grahas.grahas[0];
    this.sunrise = new Date(date_time);
    this.sunrise_next = new Date(date_time);
    var sr = calcSunriseGMT(DtJ(cur_date), latitude, longitude);
    var sr2 = calcSunriseGMT(DtJ(cur_date + day), latitude, longitude);
    this.sunrise.setTime(pI(cur_date / day) * day + sr * minutes);
    this.sunrise_next.setTime(pI(cur_date / day) * day + day + sr2 * minutes);
    this.sunset = new Date(date_time);
    var ss = calcSunsetGMT(DtJ(cur_date), latitude, longitude);
    this.sunset.setTime(pI(cur_date / day) * day + ss * minutes);
    this.noon = new Date(date_time)
    var n = calcSolNoonGMT(DtJ(cur_date), longitude);
    this.noon.setTime(pI(cur_date / day) * day + n * minutes);
    var error_date = new Date("1 JAN 1970 00:00:01 UTC") //because of parsing 1/1/1970 and 31/12/1969 return same values so correcting
    var temp = new Date(cur_date - this.sunrise % day);
    if (cur_date < error_date) {
        this.vara_cur = (temp.getDay() + 6) % 7;
        this.vara_enter = (this.sunrise.getDay() + 6) % 7;
        this.vara_exit = (this.sunrise_next.getDay() + 6) % 7;
    } else {
        this.vara_cur = temp.getDay();
        this.vara_enter = this.sunrise.getDay();
        this.vara_exit = this.sunrise_next.getDay();
    }
    this.vara_name = vara[vara_cur];
    this.MaandiDayTime = new Date();
    this.MaandiDayTime.setTime(pI(cur_date / day) * day + (ss - sr) * MaandiGunanka[this.vara_cur] * minutes);
    this.MaandiNightTime = new Date();
    this.MaandiNightTime.setTime(pI(cur_date / day) * day + ss * minutes + (24 * 60 - ss + sr2) * MaandiGunanka[(this.vara_cur + 4) % 8] * minutes);
    this.MaandiDay = new calculateAscendant(this.MaandiDayTime, latitude, longitude);
    this.MaandiNight = new calculateAscendant(this.MaandiNightTime, latitude, longitude);
    this.nakshatra_cur = this.moon_cur / nakshatra_size;
    this.nakshatra_cur1 = this.nakshatra_cur + 1;
    this.nakshatra_name = nakshatra[pI(this.nakshatra_cur)];
    this.nakshatra_enter = new Date();
    nakshatra_enter.setTime(cur_date - (this.moon_cur % nakshatra_size) / this.grahas.speed[1]);
    this.nakshatra_exit = new Date();
    nakshatra_exit.setTime(cur_date + (nakshatra_size - this.moon_cur % nakshatra_size) / this.grahas.speed[1]);
    this.yoga_cur = (this.moon_cur + this.sun_cur) % 360 / nakshatra_size;
    this.yoga_cur1 = this.yoga_cur + 1;
    this.yoga_name = yogas[pI(this.yoga_cur)];
    this.yoga_enter = new Date();
    yoga_enter.setTime(cur_date - ((this.moon_cur + this.sun_cur) % nakshatra_size) / (this.grahas.speed[1] + this.grahas.speed[0]));
    this.yoga_exit = new Date();
    yoga_exit.setTime(cur_date + (nakshatra_size - (this.moon_cur + this.sun_cur) % nakshatra_size) / (this.grahas.speed[1] + this.grahas.speed[0]));
    this.tithi_cur = ((360 + this.moon_cur - this.sun_cur) % 360) / 12;
    this.tithi_cur1 = this.tithi_cur + 1;
    this.tithi_name = tithi[pI(this.tithi_cur)];
    this.tithi_enter = new Date();
    tithi_enter.setTime(cur_date - (((360 + this.moon_cur - this.sun_cur) % 360) % 12) / (this.grahas.speed[1] - this.grahas.speed[0]));
    this.tithi_exit = new Date();
    tithi_exit.setTime(cur_date + (12 - ((360 + this.moon_cur - this.sun_cur) % 360) % 12) / (this.grahas.speed[1] - this.grahas.speed[0]));
    this.karana_cur = this.tithi_cur * 2;
    this.karana_cur1 = this.karana_cur + 1;
    this.karana_name = karana[pI(this.karana_cur)];
    this.karana_enter = new Date();
    karana_enter.setTime(cur_date - (((360 + this.moon_cur - this.sun_cur) % 360) % 6) / (this.grahas.speed[1] - this.grahas.speed[0]));
    this.karana_exit = new Date();
    karana_exit.setTime(cur_date + (6 - ((360 + this.moon_cur - this.sun_cur) % 360) % 6) / (this.grahas.speed[1] - this.grahas.speed[0]));
    this.kaalatable = new getKaalaTable(this.vara_cur, this.sunrise, this.sunset);
    this.muhurthatable = new getMuhurthaTable(this.sunrise, this.sunset);
    this.horatable = new getHoraTable(this.vara_cur, this.sunrise, this.sunrise_next);
    //calculations of upagrahas
    Dhuma = (grahas.grahas[0] + 133.333333333);
    Vyatipata = (360 - Dhuma);
    Parivesha = (Vyatipata + 180);
    Chapa = (360 - Parivesha);
    Upketu = (Chapa + 16.666)
    Maandi = ((date_time < sunset) ? MaandiDay.Ascendant : MaandiNight.Ascendant);
    //Gulika=(Maandi-12);
    this.lagn = grahas.grahas[8];
    this.son = grahas.grahas[0];
    this.moo = grahas.grahas[1];
    bls = 0.08333333333;
    hls = 0.04166666667;
    gls = 0.016666666667;
    vils = .00027777777777777778;
    this.bhaavlagn = ((((date_time - sunrise) / day) / bls * 30 + son) % 360);
    this.horalagn = ((((date_time - sunrise) / day) / hls * 30 + son) % 360);
    this.ghatilagn = ((((date_time - sunrise) / day) / gls * 30 + son) % 360);
    this.vighatilagn = ((((date_time - sunrise) / day) / vils * 30 + son) % 360);
    this.sreelagn = (((moo % 13.3333333333333333) / 13.3333333333333333 * 360 + lagn) % 360);
    this.Varandalagn = ((3600 + ((pI(lagn / 30) % 2) ? (360 - ((pI(horalagn / 30) % 2) ? (lagn + horalagn) : (360 - horalagn - lagn))) : (((pI(horalagn / 30) % 2) ? (Math.abs(horalagn - 360 + lagn)) : (360 - lagn + 360 - horalagn))))) % 360);
    kL = kaalatable.kaala_lagn;
    Vc = vara_cur;
    Kaala = ((date_time < sunset) ? ((Vc == 0) ? (kL[0]) : ((Vc == 1) ? (kL[7]) : ((Vc == 2) ? (kL[6]) : ((Vc == 3) ? (kL[5]) : ((Vc == 4) ? (kL[4]) : ((Vc == 5) ? (kL[3]) : (kL[6]))))))) : ((Vc == 0) ? (kL[12]) : ((Vc == 1) ? (kL[11]) : ((Vc == 2) ? (kL[10]) : ((Vc == 3) ? (kL[9]) : ((Vc == 4) ? (kL[8]) : ((Vc == 5) ? (kL[15]) : (kL[14]))))))));
    Mrityu = ((date_time < sunset) ? ((Vc == 0) ? (kL[2]) : ((Vc == 1) ? (kL[1]) : ((Vc == 2) ? (kL[0]) : ((Vc == 3) ? (kL[7]) : ((Vc == 4) ? (kL[6]) : ((Vc == 5) ? (kL[5]) : (kL[4]))))))) : ((Vc == 0) ? (kL[14]) : ((Vc == 1) ? (kL[13]) : ((Vc == 2) ? (kL[12]) : ((Vc == 3) ? (kL[11]) : ((Vc == 4) ? (kL[10]) : ((Vc == 5) ? (kL[9]) : (kL[8]))))))));
    ArdhaPrahar = ((date_time < sunset) ? ((Vc == 0) ? (kL[3]) : ((Vc == 1) ? (kL[2]) : ((Vc == 2) ? (kL[1]) : ((Vc == 3) ? (kL[0]) : ((Vc == 4) ? (kL[7]) : ((Vc == 5) ? (kL[6]) : (kL[5]))))))) : ((Vc == 0) ? (kL[15]) : ((Vc == 1) ? (kL[14]) : ((Vc == 2) ? (kL[13]) : ((Vc == 3) ? (kL[12]) : ((Vc == 4) ? (kL[11]) : ((Vc == 5) ? (kL[10]) : (kL[9]))))))));
    YamaGhantak = ((date_time < sunset) ? ((Vc == 0) ? (kL[4]) : ((Vc == 1) ? (kL[3]) : ((Vc == 2) ? (kL[2]) : ((Vc == 3) ? (kL[1]) : ((Vc == 4) ? (kL[0]) : ((Vc == 5) ? (kL[7]) : (kL[6]))))))) : ((Vc == 0) ? (kL[8]) : ((Vc == 1) ? (kL[15]) : ((Vc == 2) ? (kL[14]) : ((Vc == 3) ? (kL[13]) : ((Vc == 4) ? (kL[12]) : ((Vc == 5) ? (kL[11]) : (kL[10]))))))));
    Gulika = ((date_time < sunset) ? ((Vc == 0) ? (kL[6]) : ((Vc == 1) ? (kL[5]) : ((Vc == 2) ? (kL[4]) : ((Vc == 3) ? (kL[3]) : ((Vc == 4) ? (kL[2]) : ((Vc == 5) ? (kL[1]) : (kL[0]))))))) : ((Vc == 0) ? (kL[10]) : ((Vc == 1) ? (kL[9]) : ((Vc == 2) ? (kL[8]) : ((Vc == 3) ? (kL[15]) : ((Vc == 4) ? (kL[14]) : ((Vc == 5) ? (kL[13]) : (kL[12]))))))));
    this.ahar = jd2 - 588465.5;
    // alert(ahar);
    YCD = 1582237828 - 4320000;
    back_clong_ahar = -1;
    back_nclong_ahar = -1;
    back_clong = -1;
    back_nclong = -1;
    epsiron = 1e-8;
    eps = 1e-6;
    year = date_time.getFullYear();
    // this.ahar=ahar+0.25;
    mslong = get_mean_long(ahar, 4320000);
    tslong = get_tslong(ahar)
    tllong = get_tllong(ahar)
    gg2 = (get_tithi(tllong, tslong))
    PlanetMeanPositionCandrocca = 360 * frac(488219 * ahar / YCD) // {Lunar apogee and node at sunrise}
    PlanetMeanPositionCandrocca = fix360(PlanetMeanPositionCandrocca);
    PlanetMeanPositionRahu = 360 * frac(-232226 * ahar / YCD)
    PlanetMeanPositionRahu = fix360(PlanetMeanPositionRahu);
    PlanetMeanPositionsun = mslong; // {mean and true sun at sunrise}
    PlanetTruePositionsun = tslong;
    PlanetMeanPositionmoon = mllong; // {mean and true moon at sunrise}
    PlanetApogeemoon = PlanetMeanPositionCandrocca;
    PlanetTruePositionmoon = tllong;
    tithi0 = get_tithi(tllong, tslong);
    tithi_day = Math.floor(tithi0) + 1;
    clong = get_clong(ahar, tithi0); // {last conjunction}
    nclong = get_nclong(ahar, tithi0);
    adhimasa = get_adhimasa(clong, nclong);
    masa_num = get_masa_num(tslong, clong);
    this.purnimanta = { checked: true };
    if (this.purnimanta.checked) {
        if (adhimasa_p(clong, nclong)) {
            masa_num += 0
        } else {
            if (tithi0 >= 15.0000000000) {
                masa_num += 1;
                masa_num %= 12
            }
        }
    }
    masa = hmonth[masa_num];
    comm = comment(masa_num, tithi0);
    var posi;
    posi = (tithi0 < 15) ? 1 * tithi0 / 15 : 1 * (30 - tithi0) / 15
    ap = tithi < 15 ? 'true' : 'false'
    this.kaliyear = Math.floor((ahar + (4 - masa_num) * 30) * 4320000 / YCD);
    this.sakayear = this.kaliyear - 3179;
    this.vikramayear = this.sakayear + 135;
    this.iSamvatasara = Math.floor((((kaliyear * 211 - 108) / 18000) + kaliyear + 27 - 1) % 60); //or use this one this.iSamvatasara = ( 
    this.iSamvatasaras = ((date_time.getFullYear() - 1) % 60) + ((this.grahas.grahas[0] > 240 && date_time.getMonth() < 5) ? -7 : -6); //for south indians
    this.sSamvatsara = samvatsara[(this.iSamvatasara + 60) % 60];
    this.sSamvatsaras = samvatsara[(this.iSamvatasaras + 60) % 60];
    this.iSauraMaasa = pI(this.grahas.grahas[0] / 30 + .0000000001) % 12;
    this.iSauraMaasafrac = frac((this.grahas.grahas[0] / 30)) % 12;
    diff = (jd2 - ((iSauraMaasafrac) * 30)) //+0.5
    //calculation of Samkranti
    diff1 = (iSauraMaasafrac) * 30;
    diff2 = cur_date - (diff1 / grahas.speed[0]);
    for (e = 0; e < 1000; e++) {
        diff3 = new Date(diff2);
        diff4 = new getGrahas(m2j(diff3), longitude, latitude).grahas[0] + this.AscData.Ayanamsa;
        if (diff4 % 30 > 25) {
            diff2 += .05 * day;
        } else if (diff4 % 30 < 0.0001) {
            diff2 += 0;
            e = 10000;
        } else if (diff4 % 30 < 1) {
            diff2 -= .0025 * day
        } else {
            diff2 -= .005 * day;
        }
    }
    this.samkranti_date = jd2md(diff);
    this.samkranti_time = ju2time(diff - Math.floor(diff))
    this.samkranti = diff3;
    this.sSauraMaasa = asRashi[iSauraMaasa].f;
    this.chandramasa = hmonth[masa_num];
    place = placename;
    tt1 = this.nakshatra_cur1 - Math.floor(this.nakshatra_cur1);
    tt2 = this.tithi_cur1 - Math.floor(this.tithi_cur1);
    tt3 = this.karana_cur1 - Math.floor(this.karana_cur1);
    tt4 = this.yoga_cur1 - Math.floor(this.yoga_cur1);

    const grahData = [];
    const planetData = [];
    for (i = 0; i < 10; ++i) {
        if (i >= 8) {
            grahData.push({
                grah: chart[i].text + "(व)" + chart[i].retro + chart[i].sleep,
                rashi: tSd(chart[i].long),
                bhaav: "(" + (chart[i].bhava) + ")",
                disha: tD(chart[i].long),
                gati: "-3&#8217 11&#8221",
                nakshtra: nakshatra[pI(getNaks(chart[i].long, 1))]
            });
        } else {
            grahData.push({
                grah: chart[i].text + chart[i].retro + chart[i].sleep,
                rashi: tSd(chart[i].long),
                bhaav: "(" + (chart[i].bhava) + ")",
                disha: tD(chart[i].long),
                gati: tF(((chart[i].speed) * day * 60), 0) + "&#8217 " + tF(((((chart[i].speed) * day * 60) - Math.floor(((chart[i].speed) * day * 60))) * 60), 0) + "&#8221",
                nakshtra: nakshatra[pI(getNaks(chart[i].long, 1))]
            });
        }
    }

    RS = rs();
    for (i = 0; i < 7; i++) {
        planetData.push({
            planet: graha[i],
            longitude: tF((this.grahas.gr[i][5] + this.AscData.Ayanamsa), 3),
            longitudeSpeed: tF((this.grahas.speed[i] * day), 3),
            latitude: tF(this.grahas.gr[i][6], 3),
            latitudeSpeed: tF(((this.grahas.grn[i][6] - this.grahas.gr[i][6])), 3),
            distance: tF(this.grahas.gr[i][9], 4),
            distanceSpeed: tF(((this.grahas.grn[i][9] - this.grahas.gr[i][9])), 6),
            rise: RS[i][0],
            set: RS[i][1]
        });
    }

    this.jsonData = {
        war: {
            title: "वार",
            name: this.vara_name,
            str: ['से:', 'तक:'],
            spent: '',
            from: {
                day: week_days[vara_enter],
                time: fTs(this.sunrise)
            },
            to: {
                day: week_days[this.vara_exit],
                time: fTs(this.sunrise_next)
            }
        },
        nakshtra: {
            title: "नक्षत्र",
            name: this.nakshatra_name,
            count: "(" + tF(this.nakshatra_cur + 1) + ") ",
            str: ['से:', 'तक:'],
            spent: {
                title: 'व्यतीत:',
                degree: tD2(this.nakshatra_cur1 - Math.floor(this.nakshatra_cur1)),
                time: ju2time(tt1)
            },
            totalTime: {
                title: 'कुल समय:',
                time: ju2time((m2j(this.nakshatra_exit) - m2j(this.nakshatra_enter))),
                degree: "  (" + tD2((m2j(this.nakshatra_exit) - m2j(this.nakshatra_enter))) + ")"
            },
            from: {
                day: week_days[this.nakshatra_enter.getDay()],
                time: fTs(this.nakshatra_enter)
            },
            to: {
                day: week_days[this.nakshatra_exit.getDay()],
                time: fTs(this.nakshatra_exit)
            },

        },
        tithi: {
            title: "तिथि",
            name: this.tithi_name,
            count: "(" + tF(this.tithi_cur + 1) + ") ",
            str: ['से:', 'तक:'],
            spent: {
                title: 'व्यतीत:',
                degree: tD2(this.tithi_cur1 - Math.floor(this.tithi_cur1)),
                time: ju2time(tt2)
            },
            totalTime: {
                title: 'कुल समय:',
                time: ju2time((m2j(this.tithi_exit) - m2j(this.tithi_enter))),
                degree: "  (" + tD2((m2j(this.tithi_exit) - m2j(this.tithi_enter))) + ")"
            },
            from: {
                day: week_days[this.tithi_enter.getDay()],
                time: fTs(this.tithi_enter)
            },
            to: {
                day: week_days[this.tithi_exit.getDay()],
                time: fTs(this.tithi_exit)
            },

        },
        karan: {
            title: "करण",
            name: this.karana_name,
            count: "(" + tF(this.karana_cur + 1) + ") ",
            str: ['से:', 'तक:'],
            spent: {
                title: 'व्यतीत:',
                degree: tD2(this.karana_cur1 - Math.floor(this.karana_cur1)),
                time: ju2time(tt3)
            },
            totalTime: {
                title: 'कुल समय:',
                time: ju2time((m2j(this.karana_exit) - m2j(this.karana_enter))),
                degree: "  (" + tD2((m2j(this.karana_exit) - m2j(this.karana_enter))) + ")"
            },
            from: {
                day: week_days[this.karana_enter.getDay()],
                time: fTs(this.karana_enter)
            },
            to: {
                day: week_days[this.karana_exit.getDay()],
                time: fTs(this.karana_exit)
            },

        },
        yog: {
            title: "योग",
            name: this.yoga_name,
            count: "(" + tF(this.yoga_cur + 1) + ") ",
            str: ['से:', 'तक:'],
            spent: {
                title: 'व्यतीत:',
                degree: tD2(this.yoga_cur1 - Math.floor(this.yoga_cur1)),
                time: ju2time(tt4)
            },
            totalTime: {
                title: 'कुल समय:',
                time: ju2time((m2j(this.yoga_exit) - m2j(this.yoga_enter))),
                degree: "  (" + tD2((m2j(this.yoga_exit) - m2j(this.yoga_enter))) + ")"
            },
            from: {
                day: week_days[this.yoga_enter.getDay()],
                time: fTs(this.yoga_enter)
            },
            to: {
                day: week_days[this.yoga_exit.getDay()],
                time: fTs(this.yoga_exit)
            },

        },
        table1: [
            ["Bhaava Lagna", 314.089, "कुंभ  /Aquarius 14° 05’ 19”"],
            ["Hora Lagna", 97.476, "कर्क     /Cancer 07° 28’ 35”"],
            ["Ghati Lagna", 167.64, "कन्या     /Virgo 17° 38’ 25”"],
            ["Vighati Lagna", 347.078, "मीन   /Pisces 17° 04’ 41”"],
            ["Sree Lagna", 159.679, "कन्या     /Virgo 09° 40’ 45”"],
            ["Varanda Lagna", 44.372, "बृषभ     /Taurus 14° 22’ 20”"],
            ["Dhuma", 304.034, "कुंभ  /Aquarius 04° 02’ 02”"],
            ["Vyatipata", 55.966, "बृषभ     /Taurus 25° 57’ 58”"],
            ["Parivesha", 235.966, "वृश्चिक/Scorpius 25° 57’ 58”"],
            ["Chapa", 124.034, "सिंह        /Leo 04° 02’ 02”"],
            ["Upaketu", 140.7, "सिंह        /Leo 20° 41’ 60”"],
            ["Mandi", 305.323, "कुंभ  /Aquarius 05° 19’ 22”"],
            ["Kaala", 168.706, "कन्या     /Virgo 18° 42’ 22”"],
            ["Mrityu", 208.425, "तुला      /Libra 28° 25’ 31”"],
            ["ArdhaPrahar", 227.935, "वृश्चिक/Scorpius 17° 56’ 06”"],
            ["YamaGhantak", 247.725, "धनु /Sagittarius 07° 43’ 31”"],
            ["Gulika", 293.723, "मकर/Capricorns 23° 43’ 24”"]
        ],
        divBlock: {
            samvatsarNorth: {
                title: "संवत्सर उत्तर भारत",
                value: this.sSamvatsara
            },
            samvatsarSouth: {
                title: "संवत्सर दक्षिण भारत",
                value: this.sSamvatsaras
            },
            souramaasa: {
                title: "सौर मास",
                value: this.sSauraMaasa
            },
            sankranti: {
                title: "सक्रांति",
                value: this.samkranti
            },
            chandramasa: {
                title: "चंद्रमास",
                value: this.adhimasa + " " + this.chandramasa + " " + tithi[pI(tithi0)]
                    + " ( विक्रम सम्वत " + this.vikramayear + ") ( शक " + this.sakayear + " )"
            },
            suryoday: {
                title: "सूर्योदय",
                value: fTs(this.sunrise)
            },
            maddhyay: {
                title: "मध्याह्न(अभिजित)",
                value: fTs(this.noon)
            },
            suryast: {
                title: "सूर्यास्त",
                value: fTs(this.sunset)
            },
            aynansh: {
                title: "अयनांश",
                value: (this.AscData.Ayanamsa < 0) ? "-" + tD((this.AscData.Ayanamsa * -1)) : tD((this.AscData.Ayanamsa))
            },
            dinmaan: {
                title: "दिनमान",
                value: tD(m2j(this.sunset) - m2j(this.sunrise)) + "  (" + ju2time(m2j(this.sunset) - m2j(this.sunrise)) + ")"
            },
            ratrimaan: {
                title: "रात्रिमान",
                value: tD(m2j(this.sunrise_next) - m2j(this.sunset)) + "  (" + ju2time(m2j(this.sunrise_next) - m2j(this.sunset)) + ")"
            },
            others: {
                title: 'अन्य',
                value: this.comm
            }
        },
        grahTable: {
            columns: {
                grah: 'ग्रह',
                rashi: 'राशि अंश&#176 कला&#8217 विकला&#8221',
                bhaav: 'भाव',
                disha: 'देशा॰',
                gati: 'गति',
                nakshtra: 'नक्षत्र'
            },
            data: grahData
        },
        planetTable: {
            columns: {
                planet: "Planet",
                longitude: "Longitude",
                longitudeSpeed: "Lon Speed",
                latitude: "Latitude",
                latitudeSpeed: "Lat Speed",
                distance: "Distance",
                distanceSpeed: "Dist Speed",
                rise: "Rise",
                set: "Set"
            },
            data: planetData
        }
    };
    return this;
}
//Astottari Dasa Calculations 
nl = 13.33333333333;


function getCorrNaksLen(l) {
    ub = 266.6666666667;
    ul = 10;
    ab = 276.6666666667;
    al = 4.222222222;
    sb = 280.8888888889;
    sl = 12.44444444;
    db = 293.6666666667;
    if (l <= ub) return l;
    else if (l > ub && l <= ab) return 20 * nl + nl / ul * (l - ub);
    else if (l > ab && l <= sb) return 21 * nl + nl / al * (l - ab);
    else return l + nl;
}

function getNaks(l, b) {
    if (b == 1) return l / nl
    else return getCorrNaksLen(l) / nl
}

function getNaksLen(l) {
    return red_a(getCorrNaksLen(l), nl)
}

//Shodash vargas calculations
function vargas(d) { //calculate diffrent vargas
    //d is no of varga required to calculate
    //d=2 for hora,3 for drekkan,9 for navamsa etc
    v = [];
    p = grahas.grahas.slice();
    t = []; //e=30/d;
    for (i = 0; i < 10; i++) {
        if (d == 1) p[i] = p[i] * d
        else if (d == 2) p[i] = red_a(p[i] - 15, 60) + 90
        else if (d == 3) {
            p[i] = (Math.floor(getRasiLen(p[i]) / 10) * 120 + getRasi(p[i]) * 30 + getRasiLen(d * p[i]));
        } else if (d == 4) {
            p[i] = (Math.floor(getRasiLen(p[i]) / 7.5) * 90 + getRasi(p[i]) * 30 + getRasiLen(d * p[i]));
        } else if (d == 6) p[i] = d * p[i];
        else if (d == 7) {
            t[i] = getRasi(p[i]) * 30 + getRasiLen(p[i]) * d;
            if (isOddRasi(p[i]) == 1) p[i] = t[i]
            else p[i] = t[i] + 180;
        } else if (d == 8) p[i] = d * p[i];
        else if (d == 9) p[i] = d * p[i];
        else if (d == 10) {
            t[i] = getRasi(p[i]) * 30 + getRasiLen(p[i]) * d;
            if (isOddRasi(p[i]) == 1) p[i] = t[i];
            else p[i] = t[i] + 240;
        } else if (d == 12) p[i] = getDvadasamsaLength(p[i]);
        else if (d == 16) p[i] = d * p[i];
        else if (d == 20) p[i] = d * p[i];
        else if (d == 24) {
            t[i] = getRasiLen(p[i]) * d;
            if (isOddRasi(p[i]) == 1) p[i] = t[i] + 120;
            else p[i] = t[i] + 90;
        } else if (d == 27) p[i] = d * p[i];
        else if (d == 30) {
            t[i] = getRasiLen(p[i]);
            if (isOddRasi(p[i]) == 1) {
                if (t[i] < 5) p[i] = d * 0 + t[i] * 6;
                else if ((t[i] >= 5) && (t[i] <= 10)) p[i] = d * 10 + (t[i] - 5) * 6;
                else if ((t[i] >= 10) && (t[i] <= 18)) p[i] = d * 8 + (t[i] - 10) / 4 * 15;
                else if ((t[i] >= 18) && (t[i] <= 25)) p[i] = d * 2 + (t[i] - 18) / 7 * d;
                else if (t[i] >= 25) p[i] = d * 6 + (t[i] - 25) * 6;
            } else {
                if (t[i] < 5) p[i] = d * 1 + (5 - t[i]) * 6;
                else if ((t[i] >= 5) && (t[i] <= 10)) p[i] = d * 5 + (10 - t[i]) * 6;
                else if ((t[i] >= 10) && (t[i] <= 18)) p[i] = d * 11 + (18 - t[i]) / 4 * 15;
                else if ((t[i] >= 18) && (t[i] <= 25)) p[i] = d * 9 + (25 - t[i]) / 7 * d;
                else if (t[i] > 25) p[i] = d * 7 + (d - t[i]) * 6;
            }
        } else if (d == 40) {
            t[i] = getRasiLen(p[i]) * d;
            if (isOddRasi(p[i]) == 1) p[i] = t[i];
            else p[i] = t[i] + 180;
        } else if (d == 45) {
            t[i] = getRasiLen(p[i]) * d;
            if (inMovableSign(p[i])) p[i] = t[i];
            else if (inFixedSign(p[i])) p[i] = t[i] + 120;
            else p[i] = t[i] + 240;
        } else if (d == 60) p[i] = d * getRasiLen(p[i]) + getRasi(p[i]) * 30;
        else if (d == 108) p[i] = getDvadasamsaLength(9 * p[i]);
        else if (d == 144) p[i] = getDvadasamsaLength(getDvadasamsaLength(p[i]))
        else p[i] = d * p[i];
        v[i] = getRasi(p[i]);
    }
    return v
}

function vargaBhaava(d) {
    vb = [];
    for (i = 0; i < 10; i++) {
        vb[i] = (12 + d[i] - d[8]) % 12;
    }
    return vb;
}

function vargaChart(d, e) {
    if (typeof (e) == "number") {
        n = ['सू', 'चं', 'मं', 'बु', 'बृ', 'शु', 'श', 'रा', 'ल', 'के']
        var a = "";
        var k = 0;
        var i = 0;
        var s = new Array(13);
        for (i = 0; i <= 9; ++i) {
            k = d[i] + 1;
            s[k] = (s[k] == "" ? " " : s[k] + " ") + n[i];
        }
        for (i = 0; i <= 12; ++i) {
            s[i] = s[i] + "";
            s[i] = s[i].replace('undefined ', '').replace('undefined', '')
        }
    } else {
        s = d;
    }
    a = "<div class='Varga_Chart pA'>";
    a = a + "<table>";
    a = a + "  <tr>";
    a = a + "    <td id=12 align=center>" + s[12] + "<font color='red'>12</font></td>";
    a = a + "    <td id=1 align=center>" + s[1] + "<font color='red'>1</font> </td>";
    a = a + "    <td id=2 align=center>" + s[2] + "<font color='red'>2</font> </td>";
    a = a + "    <td id=3 align=center>" + s[3] + "<font color='red'>3</font> </td>";
    a = a + "    </tr>";
    a = a + "  <tr>";
    a = a + "    <td id=11 align=center>" + s[11] + "<font color='red'>11</font> </td>";
    a = a + "    <td colspan=2 rowspan=2 id=0 align=center><font size='4px'><b>"
    a += (typeof (e) == 'number') ? "d-" + e : e
    a = a + "</b></font> </td>";
    a = a + "    <td id=4 align=center>" + s[4] + "<font color='red'>4</font> </td>";
    a = a + "    </tr>";
    a = a + "  <tr>";
    a = a + "    <td id=10 align=center>" + s[10] + "<font color='red'>10</font> </td>";
    a = a + "    <td id=5 align=center>" + s[5] + "<font color='red'>5</font> </td>";
    a = a + "    </tr>";
    a = a + "  <tr>";
    a = a + "    <td id=9 align=center>" + s[9] + "<font color='red'>9</font> </td>";
    a = a + "    <td id=8 align=center>" + s[8] + "<font color='red'>8</font> </td>";
    a = a + "    <td id=7 align=center>" + s[7] + "<font color='red'>7</font> </td>";
    a = a + "    <td id=6 align=center>" + s[6] + "<font color='red'>6</font> </td>";
    a = a + "    </tr>";
    a = a + " </table></div>"; //
    this.html = a;
    this.apl = s
    return this;
}

function writeDiamondChart(n, X, z, t, w, o) {
    const marathiNumbers = {
        1: '१',
        2: '२',
        3: '३',
        4: '४',
        5: '५',
        6: '६',
        7: '७',
        8: '८',
        9: '९',
        10: '१०',
        11: '११',
        12: '१२'
    }
    w = (typeof (w) == "number") ? ("d-" + w) : (w);
    for (I = 1; I <= 12; I++) {
        if (n[I].search(o) != -1) {
            break;
        }
    }
    N = [];
    for (i = 0; i < 12; i++) {
        N[i] = n[I];
        I %= 12;
        I += 1;
    }
    X.width = X.height = z;
    Z = z / 2;
    X.style.border = "1px solid red";
    X.style.borderRadius = "12px";
    x = X.getContext("2d");
    x.translate(Z, Z);
    Z *= t / 100;
    x.moveTo(-Z, -Z);
    x.lineTo(Z, Z);
    x.lineTo(Z, -Z);
    x.lineTo(-Z, Z);
    x.lineTo(-Z, -Z);
    x.lineTo(0, -Z);
    x.lineTo(-Z, 0);
    x.lineTo(0, Z);
    x.lineTo(Z, 0);
    x.lineTo(0, -Z);
    x.lineTo(Z, -Z);
    x.moveTo(Z, Z);
    x.lineTo(-Z, Z);
    x.stroke();
    c = [
        [-Z * .05, -Z * .70],
        [-Z * .55, -Z * .875],
        [-Z * .85, -Z * .6],
        [-Z * .55, -Z * .05],
        [-Z * .85, Z * .4],
        [-Z * .55, Z * .725],
        [-Z * .05, Z * .425],
        [Z * .4, Z * .7],
        [Z * .85, Z * .35],
        [Z * .4, -Z * .05],
        [Z * .85, -Z * .65],
        [Z * .45, -Z * .875]
    ];
    C = [
        [-Z * .0, -Z * .1],
        [-Z * .25, -Z * .9],
        [-Z * .70, -Z * .45],
        [-Z * .25, -Z * .1],
        [-Z * .70, Z * .55],
        [-Z * .255, Z * .95],
        [-Z * .0, Z * .15],
        [Z * .15, Z * .95],
        [Z * .625, Z * .55],
        [Z * .15, -Z * .1],
        [Z * .625, -Z * .45],
        [Z * .2, -Z * .9]
    ];
    x.fillStyle = "#ff0000";
    x.font = Z * .09 + "px Verdana";
    x.textBaseline = "middle";
    x.textAlign = "center";
    for (i = 0; i < 12; i++) {
        wrapT(x, N[i], c[i][0], c[i][1], Z * .3, Z * .12);
        const tmpNumber = ((i - 1 + I) % 12 + 1);
        const getNumber = marathiNumbers[tmpNumber] ? marathiNumbers[tmpNumber] : tmpNumber;
        x.fillText(getNumber, C[i][0], C[i][1]);
    }
    x.font = Z * .18 + "px Verdana";
    //x.fillText((w), 0, 0);
}

function wrapT(ctx, t, x, y, mW, lH) {
    var w = t.split(''),
        l = '';
    for (n = 0; n < w.length; n++) {
        var tL = l + w[n] + '',
            m = ctx.measureText(tL),
            tW = m.width;
        if (tW > mW && n > 0) {
            ctx.fillText(l, x, y);
            l = w[n] + '';
            y += lH;
        } else {
            l = tL;
        }
    }
    ctx.fillText(l, x, y);
}

function di(t) {
    return document.getElementById(t)
}

function tF(t, y) {
    return t.toFixed(y)
}

function pI(t) {
    return parseInt(t)
}

function tCd(b) {
    a = document.getElementsByClassName(b);
    for (i = 0; i < a.length; i++) {
        if (a[i].style.display == "none") {
            a[i].style.display = "table-row"
        } else {
            a[i].style.display = "none"
        }
    }
}

function tgD(b) {
    a = di(b);
    if (a.style.display == "none") a.style.display = "table-row"
    else a.style.display = "none"
}

function getRasiLen(g) {
    return red_a(g, 30);
}

function isOddRasi(g) {
    return getRasi(g + 30) % 2;
}

function isEvenRasi(g) {
    return getRasi(g) % 2
}

function getDvadasamsaLength(g) {
    return reddeg(getRasi(g) * 30 + getRasiLen(g) * 12);
}

function inMovableSign(g) {
    return (getRasi(g) % 3 == 0) ? true : false;
}

function inFixedSign(g) {
    return (getRasi(g) % 3 == 1) ? true : false;
}

function inDualSign(g) {
    return (getRasi(g) % 3 == 2) ? true : false;
}

function getRasi(gra) {
    return pI(reddeg(gra) / 30)
}

function Bhaava(gra) {
    return (pI(gra / 30) - pI(grahas.grahas[8] / 30) + 12) % 12
}

function naks(gra) {
    return pI(gra / (40 / 3)) % 27
}

function reddeg(g) { //redefining in degrees
    return g % 360 >= 0 ? (g % 360) : ((g % 360) + 360);
}

function red_a(g, a) {
    return (g % a) >= 0 ? (g % a) : ((g % a) + a)
}

function j2j(JulianDay) { //20040205
    j = pI(JulianDay) + 1402;
    k = pI((j - 1) / 1461);
    l = j - 1461 * k;
    n = pI((l - 1) / 365) - pI(l / 1461);
    i = l - 365 * n + 30;
    J = pI(80 * i / 2447);
    I2 = pI(J / 11);
    this.day0 = i - pI(2447 * J / 80);
    this.month = J + 2 - 12 * I2;
    this.year = 4 * k + n + I2 - 4716;
    return this
}

function j2g(JulianDay) { //20030331
    a = JulianDay + 68569;
    b = pI(a / 36524.25);
    c = a - pI(36524.25 * b + 0.75);
    e = pI((c + 1) / 365.2425);
    f = c - pI(365.25 * e) + 31;
    g = pI(f / 30.59);
    h = pI(g / 11);
    this.day0 = Math.floor(f - pI(30.59 * g) + (JulianDay - pI(JulianDay)));
    this.month = Math.floor(g - 12 * h + 2);
    this.year = Math.floor(100 * (b - 49) + e + h);
    return this
}

function jd2md(JulianDay) { //20030331
    if (JulianDay < 2299239) {
        return j2j(JulianDay);
    } else {
        return j2g(JulianDay);
    }
}

function jd2md2(j) {
    if (j < 2299239) t = j2j(j);
    else t = j2g(j);
    return emonth2[t.month - 1] + " " + t.day0 + " " + t.year
}

function sqr(x) {
    return x * x
}

function arcsin(x) { //###20010316
    if (eps < Math.abs(1 - sqr(x))) {
        return Math.atan2(x / Math.sqrt(1 - sqr(x)), 1);
    } else if (0 < x) { //# {x is neary to 1}
        return Math.PI / 2; //   # {sin(pi/2)=1}
    } else { //  # {x is neary to -1}
        return 3 * Math.PI / 2; // # {sin(3 pi/2)=-1}
    }
}

function get_mean_long(ahar, rotation) {
    return 360 * frac(rotation * ahar / YCD);
}

function declination(long) {
    return arcsin(Math.sin(long / rad) * Math.sin(24 / rad)) * rad;
}

function get_manda_equation(argument, planet) {
    return arcsin(planet / 360 * Math.sin(argument / rad)) * rad;
}

function get_tithi(tllong, tslong) {
    elong = tllong - tslong;
    elong = fix360(elong);
    return elong / 12;
}

function get_tslong(ahar) {
    mslong = get_mean_long(ahar, 4320000);
    return fix360(mslong - get_manda_equation((mslong - (77 + (17 / 60))), (13 + (50 / 60))));
}

function get_tllong(ahar) {
    mllong = get_mean_long(ahar, 57753336);
    apogee = get_mean_long(ahar, 488203) + 90;
    return fix360(mllong - get_manda_equation((mllong - apogee), (31 + (50 / 60))));
}

function get_elong(ahar) {
    elong = Math.abs(get_tllong(ahar) - get_tslong(ahar));
    if (180 < elong) {
        elong = 360 - elong;
    }
    return elong;
}

function three_relation(a, b, c) {
    if ((a < b) && (b < c)) {
        d = 1;
    } else if ((c < b) && (b < a)) {
        d = -1;
    } else {
        d = 0;
    }
    return d
}

function find_conj(leftx, lefty, rightx, righty) {
    width = (rightx - leftx) / 2;
    centrex = (rightx + leftx) / 2;
    if (width < epsiron) {
        return get_tslong(centrex);
    } else {
        centrey = get_elong(centrex);
        relation = three_relation(lefty, centrey, righty);
        if (relation < 0) {
            rightx = rightx + width;
            righty = get_elong(rightx);
            return find_conj(centrex, centrey, rightx, righty);
        } else if (0 < relation) {
            leftx = leftx - width;
            lefty = get_elong(leftx);
            return find_conj(leftx, lefty, centrex, centrey);
        } else {
            leftx = leftx + width / 2;
            lefty = get_elong(leftx);
            rightx = rightx - width / 2;
            righty = get_elong(rightx);
            return find_conj(leftx, lefty, rightx, righty);
        }
    }
}

function get_conj(ahar) {
    return find_conj(ahar - 2, get_elong(ahar - 2), ahar + 2, get_elong(ahar + 2));
}

function get_clong(ahar, tithi) {
    new_new = YCD / (57753336 - 4320000);
    ahar = ahar - tithi * (new_new / 30);
    if (Math.abs(ahar - back_clong_ahar) < 1) {
        return back_clong;
    } else if (Math.abs(ahar - back_nclong_ahar) < 1) {
        back_clong_ahar = back_nclong_ahar;
        back_clong = back_nclong;
        return back_nclong;
    } else {
        back_clong_ahar = ahar;
        back_clong = get_conj(ahar);
        return back_clong;
    }
}

function get_nclong(ahar, tithi) {
    new_new = YCD / (57753336 - 4320000);
    ahar = ahar + (30 - tithi) * (new_new / 30);
    if (Math.abs(ahar - back_nclong_ahar) < 1) {
        return back_nclong;
    } else {
        back_nclong_ahar = ahar;
        back_nclong = get_conj(ahar);
        return back_nclong;
    }
}

function get_masa_num(tslong, clong) {
    masa_num = (Math.floor(tslong / 30)) % 12;
    if ((Math.floor(clong / 30) % 12) == masa_num) {
        masa_num = masa_num + 1;
    }
    masa_num = (masa_num + 12) % 12;
    return masa_num;
}

function adhimasa_p(clong, nclong) {
    if (Math.floor(clong / 30) == Math.floor(nclong / 30)) {
        return true;
    } else {
        return false;
    }
}

function get_adhimasa(clong, nclong) {
    if (adhimasa_p(clong, nclong)) {
        return "अधिक-";
    } else {
        return "&nbsp;*&nbsp;";
    }
}

function tithi_naksatra_karana_yoga_at_any_given_ahar(ahar) {
    mslong = get_mean_long(ahar, 4320000);
    tslong = fix360(mslong - get_manda_equation((mslong - (77 + (17 / 60))), (13 + (50 / 60))));
    mllong = get_mean_long(ahar, 57753336);
    tllong = fix360(mllong - get_manda_equation((mllong - get_mean_long(ahar, 488203) + 90), (31 + (50 / 60))));
    tithi1 = get_tithi(tllong, tslong);
    this.tithi_day0 = Math.floor(tithi1) + 1
    this.ftithi = frac(tithi1)
    if (15 < tithi_day0) {
        tithi_day0 = tithi_day0 - 15;
        paksa = 'Krsnapaksa';
    } else {
        paksa = 'Suklapaksa';
    }
    this.naksatra_name = nakshatra[pI(tllong * 27 / 360)];
    this.karana_name = karana[pI(tithi1 * 2)];
    this.yoga_name = yogas[Math.floor(fix360(tslong, tllong) * 27 / 360)];
    return this //new Array(tithi_day0, ftithi, naksatra_name, karana_name, yoga_name);
}
function comment(m, b) {
    b = Math.floor(b + 1); var T;//alert(b)
    if (adhimasa_p(clong, nclong)) {
        if (b == 1) T = "प्रतिपदा (पुरुषौत्तम मास)"
        else if (b == 11) T = "पद्मिनी एकादशी"
        else if (b == 13) T = "प्रदोष व्रत ।"
        else if (b == 15) T = "पूर्णिमा"
        else if (b == 16) T = "प्रतिपदा"
        else if (b == 26) T = "पद्मा एकादशी"
        else if (b == 28) T = "प्रदोष व्रत ।"
        else if (b == 30) T = "अमावस्या"
        else T = ""
    } else {
        if (m == 0 && b == 1) T = "चैत्र (वासन्त) नवरात्र आरम्भ"
        else if (m == 0 && b == 3) T = "गणगौरी तृतीया, श्रीमत्स्य जयन्ती।"
        else if (m == 0 && b == 4) T = "दमनक चतुर्थी"
        else if (m == 0 && b == 5) T = "श्री (लक्ष्मी) पंचमी"
        else if (m == 0 && b == 6) T = "स्कन्द षष्ठी"
        else if (m == 0 && b == 8) T = "श्रीदुर्गाष्टमी। भवान्युत्पत्ति, अशोकाष्टमी।"
        else if (m == 0 && b == 9) T = "श्री रामनवमी। नवरात्र समाप्त।"
        else if (m == 0 && b == 10) T = "नवरात्र-पारणा।"
        else if (m == 0 && b == 11) T = "कामदा एकादशी व्रत।"
        else if (m == 0 && b == 12) T = "विष्णु द्वादशी व्रत।"
        else if (m == 0 && b == 13) T = "प्रदोष व्रत । अनङ्ग त्रयोदशी"
        else if (m == 0 && b == 14) T = " नृसिंह  चतुर्दशी।"
        else if (m == 0 && b == 15) T = "चैत्र पूर्णिमा (स्नानदानादि), श्री हनुमान जयन्ती (दक्षिण भारत)। वैशाख स्नान आरम्भ।"
        else if (m == 1 && b == 16) T = "प्रतिपदा वैशाख कृष्ण पक्ष आरम्भ। (मधुसूदन मास)"//
        else if (m == 1 && b == 19) T = " श्री गणेश चतुर्थी व्रत।सति अनसूया जयन्ती। "
        else if (m == 1 && b == 26) T = "वरूथिनी एकादशी व्रत। श्री वल्लभाचार्य जयन्ती। "
        else if (m == 1 && b == 28) T = "प्रदोष व्रत।"
        else if (m == 1 && b == 29) T = "मासशिवरात्रि व्रत। "
        else if (m == 1 && b == 30) T = "अमावस्या"
        else if (m == 1 && b == 2) T = "भगवान् श्रीपरशुराम जयन्ती।"
        else if (m == 1 && b == 3) T = "अक्षय तृतीया।"
        else if (m == 1 && b == 7) T = "श्रीगङ्गा जयन्ती।"
        else if (m == 1 && b == 8) T = "श्रीबगुलामुखी जयन्ती। "
        else if (m == 1 && b == 9) T = "जानकी (सीता) नवमी।"
        else if (m == 1 && b == 11) T = "मोहिनी एकादशी व्रत।"
        else if (m == 1 && b == 12) T = "रुक्मणि द्वादशी ।"
        else if (m == 1 && b == 13) T = "प्रदोष व्रत।"
        else if (m == 1 && b == 15) T = "वैशाख पूर्णिमा। बुद्ध जयन्ती।"
        else if (m == 2 && b == 16) T = "प्रतिपदा श्री नारद जयन्ती।(त्रिविक्रम मास)"//
        else if (m == 2 && b == 19) T = "श्री गणेश चतुर्थी व्रत।"
        else if (m == 2 && b == 26) T = "अपरा एकादशी व्रत।"
        else if (m == 2 && b == 28) T = "प्रदोष व्रत।"
        else if (m == 2 && b == 29) T = "सावित्री चौदश।"
        else if (m == 2 && b == 30) T = "शनैश्चरी जयन्ती।वटसावित्री व्रत (अमावस्या पक्ष)।"
        else if (m == 2 && b == 3) T = "रम्भा तृतीया। महाराणा प्रताप जयन्ती। उमा-अवतार।"
        else if (m == 2 && b == 8) T = "अष्टमी श्रीदुर्गाष्टमी। धूमावती जयन्ती।"
        else if (m == 2 && b == 9) T = "उमा ब्राह्मणी व्रत।"
        else if (m == 2 && b == 11) T = "निर्जला एकादशी व्रत।"
        else if (m == 2 && b == 13) T = "प्रदोष व्रत।"
        else if (m == 2 && b == 15) T = "पूर्णिमा ज्येष्ठ पूर्णिमा।"
        else if (m == 3 && b == 16) T = "प्रतिपदा ।(वामन मास)"//
        else if (m == 3 && b == 26) T = "योगिनी एकादशी व्रत"
        else if (m == 3 && b == 28) T = "प्रदोश व्रत"
        else if (m == 3 && b == 30) T = "अमावस्या"
        else if (m == 3 && b == 1) T = "प्रतिपदा आषाढ़ गुप्त नवरात्र आरम्भ।"
        else if (m == 3 && b == 2) T = "रथ-यात्रा (श्रीजगन्नाथपुरी),"
        else if (m == 3 && b == 6) T = "स्कन्द षष्ठी।"
        else if (m == 3 && b == 7) T = "विवस्वान सप्तमी।"
        else if (m == 3 && b == 8) T = "श्रीदुर्गाष्टमी।"
        else if (m == 3 && b == 9) T = "भढ़ली नवमी, गुप्त नवरात्र समाप्त।"
        else if (m == 3 && b == 11) T = "देवशयनी एकादशी व्रत।"
        else if (m == 3 && b == 13) T = "प्रदोष व्रत।"
        else if (m == 3 && b == 14) T = "कोकिला व्रत। शिव-शयनोत्सव।"
        else if (m == 3 && b == 15) T = "आषाढ़ी पूर्णिमा। गुरु पूर्णिमा।"
        else if (m == 4 && b == 16) T = "प्रतिपदा(श्रीधर मास) चातुर्मास प्रारंभ"//
        else if (m == 4 && b == 26) T = "कामिका एकादशी व्रत।"
        else if (m == 4 && b == 28) T = "प्रदोष व्रत।"
        else if (m == 4 && b == 30) T = "हरियाली/शनिवारी अमावस्या"
        else if (m == 4 && b == 1) T = "प्रतिपदा"
        else if (m == 4 && b == 3) T = "मधुस्रवा-हरियाली-सिंघारा तीज।"
        else if (m == 4 && b == 4) T = "दूर्वा गणपति व्रत। वरद् चतुर्थी।"
        else if (m == 4 && b == 5) T = "नाग-पंचमी। श्रीकल्कि जयन्ती।"
        else if (m == 4 && b == 11) T = "पवित्रा एकादशी व्रत।"
        else if (m == 4 && b == 13) T = "प्रदोष व्रत।"
        else if (m == 4 && b == 15) T = "श्रावणी पूर्णिमा, रक्षा बन्धन। अथर्वेदि-ऋग्वेदि-यजु-उपाकर्म। श्रीसत्यनारायण व्रत। गायत्री जयन्ती। ऋषि-तर्पण। हयग्रीव जयन्ती।"
        else if (m == 5 && b == 16) T = "प्रतिपदा।(ऋषिकेश मास)"//
        else if (m == 5 && b == 18) T = "कज्जली तीज"
        else if (m == 5 && b == 19) T = "श्रीगणेश बहुला चतुर्थी व्रत।"
        else if (m == 5 && b == 21) T = "चन्दन षष्ठी व्रत। हल षष्ठी।"
        else if (m == 5 && b == 22) T = "शीतला सप्तमी।"
        else if (m == 5 && b == 23) T = "श्रीकृष्ण जन्माष्टमी व्रत।"
        else if (m == 5 && b == 24) T = "श्रीगुग्गा नवमी।नन्दोत्सव।"
        else if (m == 5 && b == 26) T = "अजा एकादशी व्रत।"
        else if (m == 5 && b == 28) T = "प्रदोष व्रत।"
        else if (m == 5 && b == 30) T = "अमावस्या।"
        else if (m == 5 && b == 1) T = "प्रतिपदा"
        else if (m == 5 && b == 3) T = "हरितालिका तृतीया, गौरी तृतीया, श्रीवराह जयन्ती।"
        else if (m == 5 && b == 4) T = "सिद्धि विनायक व्रत। कलंक चतुर्थी। चन्द्रदर्शन निषेध।"
        else if (m == 5 && b == 5) T = "ऋषि पंचमी।"
        else if (m == 5 && b == 7) T = "संतान सप्तमी व्रत।"
        else if (m == 5 && b == 8) T = "श्रीराधाष्टमी। श्रीमहालक्ष्मी व्रतारम्भ।"
        else if (m == 5 && b == 9) T = "श्रीचन्द नवमी(उदासीन)"
        else if (m == 5 && b == 11) T = "जलझूलनी एकादशी व्रत।"
        else if (m == 5 && b == 12) T = "श्रवण/वामन द्वादशी।"
        else if (m == 5 && b == 13) T = "प्रदोष व्रत। वामन जयन्ती।"
        else if (m == 5 && b == 14) T = "अनन्त चतुर्दशी व्रत।"
        else if (m == 5 && b == 15) T = "भाद्रपद पूर्णिमा।"
        else if (m == 6 && b == 16) T = "प्रतिपदा। श्राद्ध प्रारंभ।(पद्मनाभ मास)"//
        else if (m == 6 && b == 26) T = "इन्दिरा एकादशी व्रत।"
        else if (m == 6 && b == 28) T = "प्रदोष व्रत।"
        else if (m == 6 && b == 30) T = "सर्वपितृ अमावस्या। पितृ विसर्जन। अमावस्या का श्राद्ध।"
        else if (m == 6 && b == 1) T = "प्रतिपदा आश्विन-शरद् नवरात्र आरम्भ।"
        else if (m == 6 && b == 5) T = "ललिता पंचमी।"
        else if (m == 6 && b == 11) T = "पापांकुशा एकादशी व्रत।"
        else if (m == 6 && b == 12) T = "पद्मनाभ/पापांकुशा द्वादशी"
        else if (m == 6 && b == 13) T = "प्रदोष व्रत"
        else if (m == 6 && b == 15) T = "शरद् पूर्णिमा व्रत। श्रीसत्यनारायण व्रत।"
        else if (m == 7 && b == 16) T = "प्रतिपदा (दामोदर मास)"//
        else if (m == 7 && b == 19) T = "व्रत करवाचौथ (करक-चतुर्थी)। दशरथ चतुर्थी।"
        else if (m == 7 && b == 23) T = "अहोई अष्टमी। दाम्पत्य अष्टमी।"
        else if (m == 7 && b == 26) T = "रमा एकादशी व्रत।"
        else if (m == 7 && b == 27) T = "गोवत्स द्वादशी।"
        else if (m == 7 && b == 28) T = "प्रदोष व्रत।"
        else if (m == 7 && b == 29) T = "श्रीहनुमान जयन्ती। नरक चौदश। रूप चौदश।"
        else if (m == 7 && b == 30) T = "कार्तिक अमावस्या। दीपावली। श्रीमहालक्ष्मी पूजन।"
        else if (m == 7 && b == 1) T = "प्रतिपदा अन्नकूट-गोवर्धन पूजा।"
        else if (m == 7 && b == 2) T = "भ्रातृ-दूज। यम द्वितीया"
        else if (m == 7 && b == 5) T = "जया पंचमी।"
        else if (m == 7 && b == 8) T = "गोपाष्टमी।"
        else if (m == 7 && b == 9) T = " अक्षय नवमी।कूष्माण्ड नवमी।"
        else if (m == 7 && b == 11) T = "देवप्रबोधिनी एकादशी व्रत।तुलसी विवाह।"
        else if (m == 7 && b == 13) T = "प्रदोष व्रत।"
        else if (m == 7 && b == 15) T = "कार्तिक पूर्णिमा।"
        else if (m == 8 && b == 16) T = "प्रतिपदा (केशव मास)"//
        else if (m == 8 && b == 18) T = "सौभाग्य सुन्दरी व्रत।"
        else if (m == 8 && b == 23) T = "श्रीकालभैरवाष्टमी।"
        else if (m == 8 && b == 26) T = "उत्पन्ना एकादशी व्रत।"
        else if (m == 8 && b == 28) T = "प्रदोष व्रत।"
        else if (m == 8 && b == 29) T = "श्रीबालाजी जयन्ती।"
        else if (m == 8 && b == 30) T = "मार्गशीर्ष अमावस्या।"
        else if (m == 8 && b == 1) T = "प्रतिपदा"
        else if (m == 8 && b == 5) T = "श्रीराम विवाहोत्सव। श्रीपंचमी। नाग-पंचमी।"
        else if (m == 8 && b == 7) T = "मित्र (विष्णु) सप्तमी।"
        else if (m == 8 && b == 9) T = "नन्दा नवमी।"
        else if (m == 8 && b == 11) T = "मोक्षदा एकादशी व्रत। गीता जयन्ती।"
        else if (m == 8 && b == 12) T = "अखण्ड द्वादशी।"
        else if (m == 8 && b == 13) T = "प्रदोष व्रत। अनङ्ग त्रयोदशी व्रत।"
        else if (m == 8 && b == 15) T = "मार्गशीर्ष पूर्णिमा। त्रिपुरभैरव जयन्ती।"
        else if (m == 9 && b == 16) T = "प्रतिपदा (नारायण मास)"//
        else if (m == 9 && b == 19) T = "अङ्गारकी श्रीगणेश चतुर्थी व्रत।"
        else if (m == 9 && b == 23) T = "रुक्मणी अष्टमी।"
        else if (m == 9 && b == 26) T = "सफला एकादशी व्रत।"
        else if (m == 9 && b == 28) T = "प्रदोष व्रत।"
        else if (m == 9 && b == 30) T = "अमावस्या"
        else if (m == 9 && b == 1) T = "प्रतिपदा"
        else if (m == 9 && b == 3) T = "तृतीया गौरी पूजन।"
        else if (m == 9 && b == 7) T = "मार्तण्ड सप्तमी।"
        else if (m == 9 && b == 11) T = "पुत्रदा एकादशी व्रत।"
        else if (m == 9 && b == 14) T = "श्रीशाकंभरी जयन्ती। ईशान व्रत।"
        else if (m == 9 && b == 15) T = "पौष पूर्णिमा। माघस्नान आरम्भ। "
        else if (m == 10 && b == 16) T = "प्रतिपदा (माधव मास)"//
        else if (m == 10 && b == 19) T = "सौभाग्य सुन्दरी व्रत। गौरी चतुर्थी। वक्रतुण्ड चतुर्थी।"
        else if (m == 10 && b == 26) T = "षट्‍तिला एकादशी व्रत।"
        else if (m == 10 && b == 27) T = "तिल द्वादशी।"
        else if (m == 10 && b == 28) T = "प्रदोष व्रत।"
        else if (m == 10 && b == 29) T = "मासशिवरात्रि व्रत। तारा रात्रि।"
        else if (m == 10 && b == 30) T = "माघ (मौनी) अमावस्या।"
        else if (m == 10 && b == 1) T = "प्रतिपदा।गुप्त नवरात्र आरम्भ।"
        else if (m == 10 && b == 3) T = "गौरी तृतीया (गोंतरी) व्रत।"
        else if (m == 10 && b == 4) T = "वरद (कुन्द) चतुर्थी।"
        else if (m == 10 && b == 5) T = "वसन्त(श्री)पंचमी।वागेश्वरी जयन्ती।"
        else if (m == 10 && b == 6) T = "दारिद्रहर षष्ठी व्रत।"
        else if (m == 10 && b == 7) T = "रथ-आरोग्य-सप्तमी।पुत्र सप्तमी व्रत। अचला-भानु सप्तमी। माधवाचार्य जयन्ती।"
        else if (m == 10 && b == 8) T = "भीष्माष्टमी।"
        else if (m == 10 && b == 9) T = "गुप्त नवरात्र समाप्त।"
        else if (m == 10 && b == 11) T = "जया/भीमी एकादशी व्रत। "
        else if (m == 10 && b == 12) T = "भीष्म-द्वादशी,वराह द्वादशी, तिल द्वादशी।"
        else if (m == 10 && b == 13) T = "प्रदोष व्रत। "
        else if (m == 10 && b == 15) T = "माघ-पूर्णिमा, माघस्नान समाप्त। श्रीललिता जयन्ती।"
        else if (m == 11 && b == 16) T = "प्रतिपदा (गोविंद मास)"//
        else if (m == 11 && b == 26) T = "विजया एकादशी व्रत।"
        else if (m == 11 && b == 28) T = "प्रदोष व्रत।"
        else if (m == 11 && b == 29) T = "शिवरात्रि।"
        else if (m == 11 && b == 30) T = "फाल्गुन अमावस्या"
        else if (m == 11 && b == 1) T = "प्रतिपदा।"
        else if (m == 11 && b == 5) T = "पञ्चमी याज्ञवल्क्य जयन्ती।"
        else if (m == 11 && b == 10) T = "अष्टमी होलाष्टक आरम्भ । अन्नपूर्णा अष्टमी। "
        else if (m == 11 && b == 11) T = "आमलकी एकादशी व्रत।"
        else if (m == 11 && b == 12) T = "गोविन्द द्वादशी।"
        else if (m == 11 && b == 13) T = "प्रदोष व्रत।"
        else if (m == 11 && b == 15) T = "फाल्गुन पूर्णिमा। होलिका दहन।"
        else if (m == 0 && b == 16) T = "प्रतिपदा। (विष्णु मास)। होली"//
        else if (m == 0 && b == 20) T = "श्रीरंग पंचमी।"
        else if (m == 0 && b == 22) T = "शीतला सप्तमी"
        else if (m == 0 && b == 23) T = "शीतलाष्टमी।"
        else if (m == 0 && b == 26) T = "पापमोचनी एकादशी व्रत"
        else if (m == 0 && b == 10) T = "प्रदोष व्रत।"
        else if (m == 0 && b == 10) T = "चैत्र अमावस्या"
        else T = ""
    }
    return  T;
}
///////////////Formats Time in HH:MM format
function fT(d) {
    var m = "" + d.getMinutes() / 100 + "0000";
    var h = "" + d.getHours() / 100 + "0000";
    return h.substr(2, 2) + ":" + m.substr(2, 2);
}

function fTs(d) {
    return fT(d) + ":" + ("" + d.getSeconds() / 100 + "0000").substr(2, 2);
}
///////////////////////////////////////////////////////////////////
function tD(deg) {
    if (deg < 0) {
        deg += 1
    }
    d = pI(deg + 1 / 1800);
    m = pI((deg - d) * 60);
    s = ((deg - d) * 60 - m) * 60;
    if (d < 10) {
        d = "0" + d
    };
    if (m < 10) {
        m = "0" + m
    };
    s = tF(s, 0)
    if (s < 10) {
        s = "0" + s
    }
    return d + "&#176 " + m + "&#8217 " + s + "&#8221 "; //+tF(s)+
}

function tD2(deg) {
    if (deg < 0) {
        deg += 1
    }
    d = pI(deg + 1 / 1800);
    d2 = pI(deg + 1 / 1800) % 30;
    m = pI((deg - d) * 60);
    s = ((deg - d) * 60 - m) * 60;
    if (d < 10) {
        d = "0" + d
    };
    if (m < 10) {
        m = "0" + m
    };
    s = tF(s, 0)
    if (s < 10) {
        s = "0" + s
    }
    return d2 + "&#176 " + m + "&#8217 "; //+tF(s)+
}

function toMinutes(deg) {
    if (deg < 0) {
        deg += 1
    }
    m = pI((deg) * 60);
    return m //+"&#8217 ";//+tF(s)+
}

function tSd(deg) {
    deg %= 360;
    sign = pI(deg / 30);
    deg %= 30;
    if (sign == 0) sign = asRashi[0].f;
    if (sign == 1) sign = asRashi[1].f;
    if (sign == 2) sign = asRashi[2].f;
    if (sign == 3) sign = asRashi[3].f;
    if (sign == 4) sign = asRashi[4].f;
    if (sign == 5) sign = asRashi[5].f;
    if (sign == 6) sign = asRashi[6].f;
    if (sign == 7) sign = asRashi[7].f;
    if (sign == 8) sign = asRashi[8].f;
    if (sign == 9) sign = asRashi[9].f;
    if (sign == 10) sign = asRashi[10].f;
    if (sign == 11) sign = asRashi[11].f;
    return sign + " " + tD(deg);
}
///////////////////////////////////////////////////////////////////
//***** This section contains the specific code required in the sunrise/sunset
//***** calculation.
function DtJ(date_time) {
    var d = new Date();
    d.setTime(date_time);
    d.setMonth(0);
    d.setDate(1);
    var n = date_time / day - d.getTime() / day + 1
    return n;
}
// Convert radian angle to degrees
function RtD(angleRad) {
    return (180 * angleRad / Math.PI);
}
// Convert degree angle to radians
function DtR(angleDeg) {
    return (Math.PI * angleDeg / 180);
}
///////////////////////////////////////////////////////////////////
// Returns the gamma value that is used in the calculation for the equation of time
// and the solar declination.
function calcGamma(julianDay) {
    return (2 * Math.PI / 365) * (julianDay - 1);
}
// Returns the gamma value used to calculate eq of time
// and solar declination.
function calcGamma2(julianDay, hour) {
    return (2 * Math.PI / 365) * (julianDay - 1 + (hour / 24));
}
// Return the equation of time value for the given date.
function calcEqofTime(gamma) {
    return (229.18 * (0.000075 + 0.001868 * Math.cos(gamma) - 0.032077 * Math.sin(gamma) - 0.014615 * Math.cos(2 * gamma) - 0.040849 * Math.sin(2 * gamma)));
}
// Return the solar declination angle (in radians) for the given date.
function calcSolarDec(gamma) {
    return (0.006918 - 0.399912 * Math.cos(gamma) + 0.070257 * Math.sin(gamma) - 0.006758 * Math.cos(2 * gamma) + 0.000907 * Math.sin(2 * gamma));
}
///////////////////////////////////////////////////////////////////
// The hour angle returned below is only for sunrise/sunset, i.e. when the solar
// zenith angle is 90.8 degrees.
// the reason why its not 90 degrees is because we need to account for atmoshperic
// refraction.
function calcHourAngle(lat, solarDec, time) {
    var latRad = DtR(lat);
    if (time) // ii true, then calculationg for sunrise
        return (Math.acos(Math.cos(DtR(90.833)) / (Math.cos(latRad) * Math.cos(solarDec)) - Math.tan(latRad) * Math.tan(solarDec)));
    else return -(Math.acos(Math.cos(DtR(90.833)) / (Math.cos(latRad) * Math.cos(solarDec)) - Math.tan(latRad) * Math.tan(solarDec)));
}
// Return the length of the day in minutes.
function calcDayLength(hourAngle) {
    return (2 * Math.abs(RtD(hourAngle))) / 15;
}

function calcSunriseGMT(julDay, latitude, longitude) {
    // *** First pass to approximate sunrise
    var gamma = calcGamma(julDay);
    var eqTime = calcEqofTime(gamma);
    var solarDec = calcSolarDec(gamma);
    var hourAngle = calcHourAngle(latitude, solarDec, 1);
    var delta = longitude - RtD(hourAngle);
    var timeDiff = 4 * delta;
    var timeGMT = 720 + timeDiff - eqTime;
    // *** Second pass includes fractional jday in gamma calc
    var gamma_sunrise = calcGamma2(julDay, timeGMT / 60);
    eqTime = calcEqofTime(gamma_sunrise);
    solarDec = calcSolarDec(gamma_sunrise);
    hourAngle = calcHourAngle(latitude, solarDec, 1);
    delta = longitude - RtD(hourAngle);
    timeDiff = 4 * delta;
    timeGMT = 720 + timeDiff - eqTime; // in minutes
    return timeGMT;
}

function calcSolNoonGMT(julDay, longitude) {
    // Adds approximate fractional day to julday before calc gamma
    var gamma_solnoon = calcGamma2(julDay, 12 + (longitude / 15));
    var eqTime = calcEqofTime(gamma_solnoon);
    var solarNoonDec = calcSolarDec(gamma_solnoon);
    var solNoonGMT = 720 + (longitude * 4) - eqTime; // min
    return solNoonGMT;
}

function calcSunsetGMT(julDay, latitude, longitude) {
    // First calculates sunrise and approx length of day
    var gamma = calcGamma(julDay + 1);
    var eqTime = calcEqofTime(gamma);
    var solarDec = calcSolarDec(gamma);
    var hourAngle = calcHourAngle(latitude, solarDec, 0);
    var delta = longitude - RtD(hourAngle);
    var timeDiff = 4 * delta;
    var setTimeGMT = 720 + timeDiff - eqTime;
    // first pass used to include fractional day in gamma calc
    var gamma_sunset = calcGamma2(julDay, setTimeGMT / 60);
    eqTime = calcEqofTime(gamma_sunset);
    solarDec = calcSolarDec(gamma_sunset);
    hourAngle = calcHourAngle(latitude, solarDec, 0);
    delta = longitude - RtD(hourAngle);
    timeDiff = 4 * delta;
    setTimeGMT = 720 + timeDiff - eqTime; // in minutes
    return setTimeGMT;
}
///////////////////////////////////////////////////////////////////
function getKaalaTable(vara_cur, sunrise, sunset) {
    this.html = "<table><tr><th>शुरु समय</th><th>राहुकाल चक्र</th><th>गुलिक चक्र</th><th>चौघड़िया चक्र</th></tr>";
    var k = 0;
    var kaala = new Date();
    this.kaala_start = new Array(16);
    this.kaala_name = new Array(16);
    this.caughadia_name = new Array(16);
    this.Gulika_name = new Array(16);
    this.kaala_lagn = new Array(16);
    kaala.setTime(sunrise.getTime());
    var kaalaunit = (sunset.getTime() - sunrise.getTime()) / 8;
    var i, g, c;
    for (i = 0; i < 8; ++i) {
        g = (i + kaalachakra_start[vara_cur]) % 8;
        c = (i + caughadia_start[vara_cur]) % 7;
        this.kaala_start[k] = new Date();
        this.kaala_start[k].setTime(kaala.getTime());
        this.kaala_lagn[k] = new calculateAscendant(new Date(this.kaala_start[k]), lat, lon).Ascendant;
        this.kaala_name[k] = graha[kaalachakra[g]];
        this.Gulika_name[k] = GulikaChakra[(vara_cur + i) % 8]
        this.caughadia_name[k] = caughadiya[c];
        this.html += "<tr><td>" + fTs(this.kaala_start[k]) + "</td><td>" + this.kaala_name[k] + "</td>" + "<td>" + this.Gulika_name[k] + "</td>" + "<td>" + this.caughadia_name[k] + "</td>" + "</tr>";
        kaala.setTime(kaala.getTime() + kaalaunit);
        ++k;
    }
    this.html += "<tr><th colspan=4>Night Time</th></tr>"
    kaala.setTime(sunset.getTime());
    var kaalaunit = (24 * hours - sunset.getTime() + sunrise.getTime()) / 8;
    for (i = 0; i < 8; ++i) {
        g = (4 + i + kaalachakra_start[vara_cur]) % 8;
        c = (5 - i * 2 + caughadia_start[vara_cur] + 21) % 7;
        this.kaala_start[k] = new Date();
        this.kaala_start[k].setTime(kaala.getTime());
        this.kaala_lagn[k] = new calculateAscendant(new Date(this.kaala_start[k]), lat, lon).Ascendant;
        this.kaala_name[k] = graha[kaalachakra[g]];
        this.Gulika_name[k] = GulikaChakra[(vara_cur + i + 4) % 8]
        this.caughadia_name[k] = caughadiya[c]
        this.html += "<tr><td>" + fTs(this.kaala_start[k]) + "</td><td>" + this.kaala_name[k] + "</td>" + "<td>" + this.Gulika_name[k] + "</td>" + "<td>" + this.caughadia_name[k] + "</td>" + "</tr>";
        kaala.setTime(kaala.getTime() + kaalaunit);
        ++k;
    }
    this.html += "</table>";
    return this;
}
///////////////////////////////////////////////////////////////////
function getMuhurthaTable(sunrise, sunset) {
    this.html = "<table><tr><th>मुहुर्त नक्षत्र</th><th>शुरु समय</th></tr>";
    var k = 0;
    var m = new Date();
    this.muhurtha_start = new Array(30);
    this.muhurtha_name = new Array(30);
    m.setTime(sunrise.getTime());
    var muhurtha_unit = (sunset.getTime() - sunrise.getTime()) / 15;
    var i, g;
    for (i = 0; i < 15; ++i) {
        this.muhurtha_start[k] = new Date();
        this.muhurtha_start[k].setTime(m.getTime());
        this.muhurtha_name[k] = muhurtha[i];
        this.html += "<tr><td>" + this.muhurtha_name[k] + "</td><td>" + fTs(this.muhurtha_start[k]) + "</td></tr>";
        m.setTime(m.getTime() + muhurtha_unit);
    }
    this.html += "<tr><th colspan=2>Night Time</th></tr>"
    m.setTime(sunset.getTime());
    muhurtha_unit = (24 * hours - sunset.getTime() + sunrise.getTime()) / 15;
    for (i = 15; i < 30; ++i) {
        this.muhurtha_start[k] = new Date();
        this.muhurtha_start[k].setTime(m.getTime());
        this.muhurtha_name[k] = muhurtha[i];
        this.html += "<tr><td>" + this.muhurtha_name[k] + "</td><td>" + fTs(this.muhurtha_start[k]) + "</td></tr>";
        m.setTime(m.getTime() + muhurtha_unit);
    }
    this.html += "</table>";
    return this;
}

function getHoraTable(vara_cur, sunrise, sunrise_next) {
    this.html = "<table><tr><th>होरा</th><th>शुरु समय</th></tr>";
    var k = 0;
    var m = new Date();
    this.hora_start = new Array(24);
    this.hora_name = new Array(24);
    m.setTime(sunrise.getTime());
    var hora_unit = (sunrise_next.getTime() - sunrise.getTime()) / 24;
    var i, g;
    for (i = 0; i < 24; ++i) {
        this.hora_start[k] = new Date();
        this.hora_start[k].setTime(m.getTime());
        this.hora_name[k] = hora[(i + order[vara_cur]) % 7];
        this.html += "<tr><td>" + this.hora_name[k] + "</td><td>" + fTs(this.hora_start[k]) + "</td></tr>";
        m.setTime(m.getTime() + hora_unit);
    }
    this.html += "</table>";
    return this;
}

function getBhaavaTable(sun_cur, latitude, longitude, date_time) {
    this.bhaava = new Array(12);
    var i, t, deg, sr;
    var cur_date = Date.parse(date_time);
    var delta = sun_cur % 30 - 30;
    for (i = 0; i < 12; ++i) {
        this.bhaava[i] = new Date();
        this.bhaava[i].setTime(date_time);
        deg = delta + i * 30;
        t = calcSunriseGMT(DtJ(cur_date), latitude, longitude + deg);
        this.bhaava[i].setTime(pI(cur_date / day) * day + t * minutes + (deg) * 4 * minutes);
    }
    return this;
}
//Start Following code from http://www.astrojyoti.com/calculatoroflagna.htm
zn = "AriTauGemCanLeoVirLibScoSagCapAquPis"; // Zodiac
d2r = Math.PI / 180; // degrees to radians
r2d = 180 / Math.PI; // radians to degrees
var range = [1, 12, 1, 31, 1800, 2100, 0, 23, 0, 59, 0, 12, 0, 59, 0, 0, 0, 179, 0, 59, 0, 0, 0, 89, 0, 59];

function calculateAscendant(date_time, latitude, longitude) {
    with (Math) {
        var mon = date_time.getMonth() + 1;
        var day = date_time.getDate();
        var year = date_time.getFullYear();
        var hr = date_time.getHours();
        hr += date_time.getMinutes() / 60;
        var tz = date_time.getTimezoneOffset() / 60;
        var ln = longitude;
        var la = latitude;
    }
    jd = mdy2julian(mon, day, year);
    f = hr + tz;
    //if(ln < 0.0)f = hr - tz;
    //else f = hr+tz;
    t = ((jd - 2415020) + f / 24 - 0.5) / 36525;
    ayObj = new calcAyanamsa(t);
    ay = this.Ayanamsa = ayObj.ayanamsa //-.728;//geting ChandraHari Ayanamsa
    this.node = ayObj.node;
    //ra = (((6.6460656 + 2400.0513 * t + 2.58e-5 * t * t + f) * 15 - ln) % 360) * d2r; // RAMC
    ra = (((6.6460656 + 2400.0512617 * t + 2.581e-5 * t * t + f) * 15 - ln) % 360) * d2r; // RAMC
    ob = (23.452294 - 0.0130125 * t - 0.00000164 * t * t + 0.000000503 * t * t * t) * d2r; // Obliquity of Ecliptic
    this.ra = ra * r2d;
    this.ob = ob * r2d;
    with (Math) {
        // Calculate Midheaven
        mc = atan2(tan(ra), cos(ob));
        if (mc < 0.0) mc += PI;
        if (sin(ra) < 0.0) mc += PI
        mc *= r2d;
        // Calculate Ascendant
        as = atan2(cos(ra), -sin(ra) * cos(ob) - tan(la * d2r) * sin(ob));
        if (as < 0.0) as += PI;
        if (cos(ra) < 0.0) as += PI;
        as *= r2d % 360.0;
    }
    // add Ayanamsa
    this.niryan = { checked: true };
    if (this.niryan.checked) {
        as = fix360(as + ay); //
        mc = fix360(mc + ay); //
        // alert( as);
        this.Ascendant = as;
        this.Abhijit = mc;
    } else {
        as = fix360(as); //+ ay
        mc = fix360(mc); //+ ay
        // alert(as);
        this.Ascendant = as;
        this.Abhijit = mc;
    }
    // calculate bhavas as per
    // Deepak Kapoors Astronomy and Mathematical Astrology - 1997 Ranjan Pub.
    var hs = new Array(24);
    x = as - mc;
    if (x < 0.0) x += 360.0;
    x /= 6;
    y = 18; // 10th house in the array
    for (i = 0; i < 7; i++) {
        hs[y] = mc + x * i;
        y++;
        if (y > 24) y = 0;
    }
    x = mc - fix360(as + 180.0);
    if (x < 0.0) x += 360.0;
    x /= 6;
    y = 12;
    for (i = 0; i < 7; i++) {
        hs[y] = fix360(as + 180 + x * i);
        y++;
    }
    for (i = 0; i < 12; i++) {
        hs[i] = fix360(hs[i + 12] + 180);
    }
    var s;
    z = 0;
    // Fill Out Madhya Values
    this.BhaavaMadya = new Array(12);
    this.BhaavaMadya[0] = hs[0];
    this.BhaavaMadya[1] = hs[2]
    this.BhaavaMadya[2] = hs[4];
    this.BhaavaMadya[3] = hs[6];
    this.BhaavaMadya[4] = hs[8];
    this.BhaavaMadya[5] = hs[10];
    this.BhaavaMadya[6] = hs[12];
    this.BhaavaMadya[7] = hs[14];
    this.BhaavaMadya[8] = hs[16];
    this.BhaavaMadya[9] = hs[18];
    this.BhaavaMadya[10] = hs[20];
    this.BhaavaMadya[11] = hs[22];
    // Fill Out Sandhi Values
    this.BhaavaSandhi = new Array(12);
    this.BhaavaSandhi[0] = hs[1];
    this.BhaavaSandhi[1] = hs[3];
    this.BhaavaSandhi[2] = hs[5];
    this.BhaavaSandhi[3] = hs[7];
    this.BhaavaSandhi[4] = hs[9];
    this.BhaavaSandhi[5] = hs[11];
    this.BhaavaSandhi[6] = hs[13];
    this.BhaavaSandhi[7] = hs[15];
    this.BhaavaSandhi[8] = hs[17];
    this.BhaavaSandhi[9] = hs[19];
    this.BhaavaSandhi[10] = hs[21];
    this.BhaavaSandhi[11] = hs[23];
    return this;
}
// Calculate the Lahiri Ayanamsa by using Erlewine Fagan-Bradley sidereal calculation
// with correction using Lahiri 1900 value in minutes (see below)
function calcAyanamsa(t) {
    ln = ((933060 - 6962911 * t + 7.5 * t * t) / 3600.0) % 360.0; /* Mean lunar node */
    Off = (259205536.0 * t + 2013816.0) / 3600.0; /* Mean Sun        */
    Off = 17.23 * Math.sin(d2r * ln) + 1.27 * Math.sin(d2r * Off) - (5025.64 + 1.11 * t) * t;
    Off = (Off - 80861.27) / 3600.0; // 84038.27 = Fagan-Bradley 80861.27 = Lahiri
    this.ayanamsa = Off;
    this.node = (ln + Off + 360) % 360;
    return this;
}
// calculate Julian Day from Month, Day and Year
function mdy2julian(m, d, y) {
    with (Math) {
        im = 12 * (y + 4800) + m - 3;
        j = (2 * (im - floor(im / 12) * 12) + 7 + 365 * im) / 12;
        j = floor(j) + d + floor(im / 48) - 32083;
        if (j > 2299171) j += floor(im / 4800) - floor(im / 1200) + 38;
        return j - 0.5;
    }
}

function leap_gregorian(year) {
    return ((year % 4) == 0) && (!(((year % 100) == 0) && ((year % 400) != 0)));
}
var GREGORIAN_EPOCH = 1721425.5;

function m2j(date_time) {
    m = date_time.getMonth() + 1;
    d = date_time.getDate();
    y = date_time.getFullYear();
    sec = date_time.getSeconds();
    min = date_time.getMinutes();
    hour = date_time.getHours();
    return (GREGORIAN_EPOCH - 1) + (365 * (y - 1)) + Math.floor((y - 1) / 4) + (-Math.floor((y - 1) / 100)) + Math.floor((y - 1) / 400) + Math.floor((((367 * m) - 362) / 12) + ((m <= 2) ? 0 : (leap_gregorian(y) ? -1 : -2)) + d) + (Math.floor(sec + 60 * (min + 60 * hour) + 0.5) / 86400.0);
}

function ju2time(i) {
    if (i < 0) {
        i += 1
    }
    ij = (i * 86400.0);
    h = Math.floor(ij / 3600);
    m = Math.floor((ij / 60) % 60);
    s = Math.floor(ij % 60);
    //ms=Math.round(((((((i*24)-h)*60)-m)*60)-s)*1000);
    if (h < 10) {
        h = "0" + h
    }
    if (m < 10) {
        m = "0" + m
    }
    if (s < 10) {
        s = "0" + s
    }
    return h + ":" + m + ":" + s //+"."+ms;
}
// keep within 360 degrees
function fix360(v) {
    if (v < 0.0) v += 360;
    if (v > 360) v -= 360;
    return v;
}
//End Code from http://www.astrojyoti.com/calculatoroflagna.htm
//Ephemarid functions starts here
//functions for calculation of seven planets viz sun, moon, mars, mercury, jupiter, venus, saturn taken from 
//open source astrotool project (javascript Ephemarid) with Copyright © Ole Nielsen 2002-2005 
//his site is www.ngc7000.org 
//obs={'longitude':-77.3933333333333,'latitude':23.2175}
var DEG2RAD = Math.PI / 180.0;
var RAD2DEG = 180.0 / Math.PI;
H0SUN = -.833;
H0STAR = -.583;

function rev2(angle) {
    var a = rev(angle);
    return (a >= 180 ? a - 360.0 : a);
} // -180<=a<180
function sind(angle) {
    return Math.sin(angle * DEG2RAD);
}

function cosd(angle) {
    return Math.cos(angle * DEG2RAD);
}

function tand(angle) {
    return Math.tan(angle * DEG2RAD);
}

function asind(c) {
    return RAD2DEG * Math.asin(c);
}

function acosd(c) {
    return RAD2DEG * Math.acos(c);
}

function atand(c) {
    return RAD2DEG * Math.atan(c);
}

function atan2d(y, x) {
    return RAD2DEG * Math.atan2(y, x);
}

function log10(x) {
    return Math.LOG10E * Math.log(x);
}

function sqr(x) {
    return x * x;
}

function cbrt(x) {
    return Math.pow(x, 1 / 3.0);
}

function SGN(x) {
    return (x < 0) ? -1 : +1;
}

function rev(angle) {
    return angle - Math.floor(angle / 360.0) * 360.0;
} // 0<=a<360
function radec2aa(ra, dec, jday, obs) {
    // Convert ra/dec to alt/az, also return hour angle, azimut = 0 when north
    // DOES NOT correct for parallax!
    // TH0=Greenwich sid. time (eq. 12.4), H=hour angle (chapter 13)
    var TH0 = 280.46061837 + 360.98564736629 * (jday - 2451545.0);
    var H = rev(TH0 - obs.longitude - ra);
    var alt = asind(sind(obs.latitude) * sind(dec) + cosd(obs.latitude) * cosd(dec) * cosd(H));
    var az = atan2d(sind(H), (cosd(H) * sind(obs.latitude) - tand(dec) * cosd(obs.latitude)));
    return new Array(alt, rev(az + 180.0), H);
}

function sunxyz(jday) {
    // return x,y,z ecliptic coordinates, distance, true longitude
    // days counted from 1999 Dec 31.0 UT
    var d = jday - 2451543.5;
    var w = 282.9404 + 4.70935E-5 * d; // argument of perihelion
    var e = 0.016709 - 1.151E-9 * d;
    var M = rev(356.0470 + 0.9856002585 * d); // mean anomaly
    var E = M + e * RAD2DEG * sind(M) * (1.0 + e * cosd(M));
    var xv = cosd(E) - e;
    var yv = Math.sqrt(1.0 - e * e) * sind(E);
    var v = atan2d(yv, xv); // true anomaly
    var r = Math.sqrt(xv * xv + yv * yv); // distance
    var lonsun = rev(v + w); // true longitude
    var xs = r * cosd(lonsun); // rectangular coordinates, zs = 0 for sun 
    var ys = r * sind(lonsun);
    return new Array(xs, ys, 0, r, lonsun, 0);
}

function SunAlt(jday, obs) {
    // return alt, az, time angle, ra, dec, ecl. long. and lat=0, illum=1, 0, dist, brightness 
    var sdat = sunxyz(jday);
    var ecl = 23.4393 - 3.563E-7 * (jday - 2451543.5);
    var xe = sdat[0];
    var ye = sdat[1] * cosd(ecl);
    var ze = sdat[1] * sind(ecl);
    var ra = rev(atan2d(ye, xe));
    var dec = atan2d(ze, Math.sqrt(xe * xe + ye * ye));
    var topo = radec2aa(ra, dec, jday, obs);
    return new Array(topo[0], topo[1], topo[2], ra, dec, sdat[4], 0, 1, 0, sdat[3], -26.74);
}

function MoonPos(jday, obs) {
    // MoonPos calculates the Moon position and distance, based on Meeus chapter 47
    // and the illuminated percentage from Meeus equations 48.4 and 48.1
    // OPN: This version of MoonPos calculates the position to a precision of about 2' or so
    // All T^2, T^3 and T^4 terms skipped. NB: Time is not taken from obs but from jday (julian day)
    // Returns alt, az, hour angle, ra, dec (geocentr!), eclip. long and lat (geocentr!), 
    // illumination, distance, brightness and phase angle 
    var T = (jday - 2451545.0) / 36525;
    // Moons mean longitude L'
    var LP = rev(218.3164477 + 481267.88123421 * T);
    // Moons mean elongation
    var D = rev(297.8501921 + 445267.1114034 * T);
    // Suns mean anomaly
    var M = rev(357.5291092 + 35999.0502909 * T);
    // Moons mean anomaly M'
    var MP = rev(134.9633964 + 477198.8675055 * T);
    // Moons argument of latitude
    var F = rev(93.2720950 + 483202.0175233 * T);
    // The "further arguments" A1, A2 and A3  and the term E have been ignored
    // Sum of most significant terms from table 45.A and 45.B (terms less than 0.004 deg / 40 km dropped)
    var Sl = 6288774 * sind(MP) + 1274027 * sind(2 * D - MP) + 658314 * sind(2 * D) + 213618 * sind(2 * MP) - 185116 * sind(M) - 114332 * sind(2 * F) + 58793 * sind(2 * D - 2 * MP) + 57066 * sind(2 * D - M - MP) + 53322 * sind(2 * D + MP) + 45758 * sind(2 * D - M) - 40923 * sind(M - MP) - 34720 * sind(D) - 30383 * sind(M + MP) + 15327 * sind(2 * D - 2 * F) - 12528 * sind(MP + 2 * F) + 10980 * sind(MP - 2 * F) + 10675 * sind(4 * D - MP) + 10034 * sind(3 * MP) + 8548 * sind(4 * D - 2 * MP) - 7888 * sind(2 * D + M - MP) - 6766 * sind(2 * D + M) - 5163 * sind(D - MP) + 4987 * sind(D + M) + 4036 * sind(2 * D - M + MP);
    var Sb = 5128122 * sind(F) + 280602 * sind(MP + F) + 277602 * sind(MP - F) + 173237 * sind(2 * D - F) + 55413 * sind(2 * D - MP + F) + 46271 * sind(2 * D - MP - F) + 32573 * sind(2 * D + F) + 17198 * sind(2 * MP + F) + 9266 * sind(2 * D + MP - F) + 8822 * sind(2 * MP - F) + 8216 * sind(2 * D - M - F) + 4324 * sind(2 * D - 2 * MP - F) + 4200 * sind(2 * D + MP + F);
    var Sr = (-20905355) * cosd(MP) - 3699111 * cosd(2 * D - MP) - 2955968 * cosd(2 * D) - 569925 * cosd(2 * MP) + 246158 * cosd(2 * D - 2 * MP) - 152138 * cosd(2 * D - M - MP) - 170733 * cosd(2 * D + MP) - 204586 * cosd(2 * D - M) - 129620 * cosd(M - MP) + 108743 * cosd(D) + 104755 * cosd(M + MP) + 79661 * cosd(MP - 2 * F) + 48888 * cosd(M);
    // geocentric longitude, latitude
    var mglong = rev(LP + Sl / 1000000.0);
    var mglat = Sb / 1000000.0;
    // Obliquity of Ecliptic
    var obl = 23.4393 - 3.563E-7 * (jday - 2451543.5);
    var ra = rev(atan2d(sind(mglong) * cosd(obl) - tand(mglat) * sind(obl), cosd(mglong)));
    var dec = asind(sind(mglat) * cosd(obl) + cosd(mglat) * sind(obl) * sind(mglong));
    var moondat = radec2aa(ra, dec, jday, obs);
    // phase angle (48.4)
    var pa = Math.abs(180.0 - D - 6.289 * sind(MP) + 2.100 * sind(M) - 1.274 * sind(2 * D - MP) - 0.658 * sind(2 * D) - 0.214 * sind(2 * MP) - 0.11 * sind(D));
    var k = (1 + cosd(pa)) / 2;
    var mr = Math.round(385000.56 + Sr / 1000.0);
    var h = moondat[0];
    // correct for parallax, equatorial horizontal parallax, see Meeus p. 337
    h -= asind(6378.14 / mr) * cosd(h);
    // brightness, use Paul Schlyter's formula (based on common phase law for Moon)
    var sdat = sunxyz(jday);
    var r = sdat[3]; // Earth (= Moon) distance to Sun in AU
    var R = mr / 149598000; // Moon distance to Earth in AU
    var mag = 0.23 + 5 * log10(r * R) + 0.026 * pa + 4.0E-9 * pa * pa * pa * pa
    return new Array(h, moondat[1], moondat[2], ra, dec, mglong, mglat, k, r, mr, mag);
} // Moonpos()
MERCURY = 3;
VENUS = 5;
MARS = 2;
JUPITER = 4;
SATURN = 6;
SUN = 0;
MOON = 1;
// The planet object
function planet(name, num, N, i, w, a, e, M) {
    this.name = name;
    this.num = num;
    this.N = N; // longitude of ascending node
    this.i = i; // inclination
    this.w = w; // argument of perihelion
    this.a = a; // semimajor axis
    this.e = e; // eccentricity
    this.M = M; // mean anomaly
}

function Body(name, number, colour, colleft, colright) {
    this.name = name;
    this.number = number;
    this.colour = colour;
    this.colleft = colleft;
    this.colright = colright;
    this.alt = 0;
    this.az = 0;
    this.dec = 0;
    this.ra = 0;
    this.H = 0;
    this.eclon = 0;
    this.eclat = 0;
    this.illum = 1;
    this.r = 1; // heliocentric distance
    this.dist = 1; //geocentric distance
    this.mag = -1.0;
    this.elong = 0;
    this.pa = 0; // position angle (elongation)
    this.update = updatePosition;
    this.elongupdate = updateElong;
}
bodies = new Array();
bodies[0] = new Body("Sun    ", SUN, 0, 26, 27);
bodies[1] = new Body("Moon   ", MOON, 1, 28, 29);
bodies[2] = new Body("Mars   ", MARS, 2, 24, 25);
bodies[3] = new Body("Mercury", MERCURY, 3, 24, 25);
bodies[4] = new Body("Jupiter", JUPITER, 4, 24, 25);
bodies[5] = new Body("Venus  ", VENUS, 5, 24, 25);
bodies[6] = new Body("Saturn ", SATURN, 6, 24, 25);

function updatePosition(jday, obs) {
    // update body-object with current positions
    // elongation NOT calculated! (use updateElong for that)
    this.p = this.number;
    var dat = PlanetAlt(this.p, jday, obs);
    this.alt = dat[0];
    this.az = dat[1];
    this.H = dat[2];
    this.ra = dat[3];
    this.dec = dat[4] - (dat[4] > 180.0 ? 360 : 0);
    this.eclon = rev(dat[5]);
    this.eclat = dat[6];
    this.r = dat[8];
    this.dist = dat[9];
    this.illum = dat[7];
    this.mag = dat[10];
}

function updateElong(jday, obs) {
    // calculate elongation for object
    if (this.number == SUN) return;
    bodies[SUN].update(jday, obs);
    var ra2 = bodies[SUN].ra;
    var dec2 = bodies[SUN].dec;
    this.update(jday, obs);
    var dat = separation(this.ra, ra2, this.dec, dec2);
    this.elong = dat[0];
    this.pa = dat[1];
}

function separation(ra1, ra2, dec1, dec2) {
    // ra, dec may also be long, lat, but PA is relative to the chosen coordinate system
    var d = acosd(sind(dec1) * sind(dec2) + cosd(dec1) * cosd(dec2) * cosd(ra1 - ra2)); // (Meeus 17.1)
    if (d < 0.1) d = Math.sqrt(sqr(rev2(ra1 - ra2) * cosd((dec1 + dec2) / 2)) + sqr(dec1 - dec2)); // (17.2)
    var pa = atan2d(sind(ra1 - ra2), cosd(dec2) * tand(dec1) - sind(dec2) * cosd(ra1 - ra2)); // angle
    return new Array(d, rev(pa));
} // end separation()
function isort(arr) {
    // Sort 2D array in ascending order on first column of each element using insertion sort 
    for (var c = 0; c < arr.length - 1; c++) {
        var tmp = arr[c + 1];
        var a = c;
        while (a >= 0 && arr[a][0] > tmp[0]) {
            arr[a + 1] = arr[a];
            a--;
        }
        arr[a + 1] = tmp;
    }
} // end isort()
function dfrac2tstr(t) {
    // returns time string from fraction of day (0 <= t < 1). If t < 0 return '--:--'
    if (t < 0 || t >= 1) return "--:--";
    t1 = Math.round(1440 * t); // round to nearest minute
    var hours = Math.floor(t1 / 60);
    var minutes = t1 - 60 * hours;
    return hmstring2(hours, minutes, 0);
}

function hmstring2(hours, minutes, seconds) {
    // hmstring2 returns time as a string HH:MM (added 2004.01.02), seconds needed for rounding
    if (seconds >= 30) minutes++;
    if (minutes >= 60) {
        hours++;
        minutes = 0;
    }
    var timestr = ((hours < 10) ? "0" : "") + hours;
    timestr += ((minutes < 10) ? ":0" : ":") + minutes;
    return timestr;
}

function findEvents(obj, jday, obs) {
    // Version 2
    // Calculate daily events (rise, transit, set etc) for one day starting at jday
    // Returns chronological sorted array of records, each record comprising time [0<=t<1] relative to jday
    // and event type. Event type codes are: 
    //	0: transit; -1/1: rise/set; -2/2: civ. twil. start/end; -3/3 naut twil; -4/4: astr twil
    // The first record is different: Type code is 0 for object up, 1 for less than 6 deg below horizon etc
    // The code is a little bit 'hairy'. Basically, it determines the nearest transit time of the 
    // object at each side of the middle of the time interval, and from these transit times it 
    // calculates rise and set times (and twilights for the Sun). 
    if (obj == MOON) { // reference horizon h0 for Moon depends on parallax, see Meeus p. 102
        bodies[obj].update(jday + 0.5, obs);
        var par = asind(6378.14 / bodies[obj].dist);
        var h0moon = 0.7275 * par - 0.567;
    }
    var href0 = ((obj == SUN) ? H0SUN : H0STAR); // rise/set altitude depends on object
    if (obj == MOON) href0 = h0moon;
    var events = new Array(); // stores the various events in records of [t, type]
    var count = 0;
    // find situation at start of interval (not currently used by AstroTools but needed by Skyplanner)
    bodies[obj].update(jday, obs);
    var altaz = radec2aa(bodies[obj].ra, bodies[obj].dec, jday, obs);
    var alt = altaz[0];
    var type = 4;
    if (alt > href0) type = 0; // object is visible
    else if (alt > -6) type = 1; // civil twilight
    else if (alt > -12) type = 2; // naut. twil.
    else if (alt > -18) type = 3; // astr. twil.
    events[count++] = new Array(0, type);
    bodies[obj].update(jday + 0.5, obs);
    var dec1 = bodies[obj].dec;
    var altaz = radec2aa(bodies[obj].ra, bodies[obj].dec, jday + 0.5, obs);
    var H = altaz[2]; // H is hour angle
    var m = -H / 360.0; // first transit approx.
    for (var i = 0; i < 2; i++) { // check for events around first and second transit
        bodies[obj].update(jday + 0.5 + m, obs);
        var altaz = radec2aa(bodies[obj].ra, bodies[obj].dec, jday + 0.5 + m, obs);
        var H = altaz[2] > 180.0 ? altaz[2] - 360 : altaz[2];
        m0 = m - H / 360.0; // correction to transit time (Meeus page 103)
        if (m0 >= -0.5 && m0 < 0.5) events[count++] = new Array(m0 + 0.5, 0); // save transit time
        // find rise and set times (and start/end of twilights if sun)
        for (var j = 0; j <= (obj == SUN ? 3 : 0); j++) {
            var href = -6.0 * j; // href is the desired reference horizon
            if (href == 0.0) {
                href = href0;
            }
            var cosH0 = (sind(href) - sind(obs.latitude) * sind(dec1)) / (cosd(obs.latitude) * cosd(dec1));
            // (Meeus 15.1)
            if (cosH0 >= -1.0 && cosH0 <= 1.0) {
                // this may miss occasional rises/sets in polar regions, especially for Moon
                var H0 = acosd(cosH0);
                var m1 = m0 - H0 / 360.0; // rise (Meeus 15.2)
                bodies[obj].update(jday + 0.5 + m1, obs);
                var altaz = radec2aa(bodies[obj].ra, bodies[obj].dec, jday + 0.5 + m1, obs);
                H = altaz[2];
                // correction to rise time
                m1 += (altaz[0] - href) / (360 * cosd(bodies[obj].dec) * cosd(obs.latitude) * sind(H));
                if (m1 >= -0.5 && m1 < 0.5) { // only keep event within interval of interest
                    events[count++] = new Array(m1 + 0.5, -j - 1);
                }
                var m2 = m0 + H0 / 360.0; // set
                bodies[obj].update(jday + 0.5 + m2, obs);
                var altaz = radec2aa(bodies[obj].ra, bodies[obj].dec, jday + 0.5 + m2, obs);
                H = altaz[2];
                // correction to set time
                m2 += (altaz[0] - href) / (360 * cosd(bodies[obj].dec) * cosd(obs.latitude) * sind(H));
                if (m2 >= -0.5 && m2 < 0.5) {
                    events[count++] = new Array(m2 + 0.5, j + 1);
                }
            }
        }
        m += 1.0; // second transit approx.
    }
    events[count++] = new Array(1.0, -9); // end marker
    isort(events); // bring in chronological order
    return events;
} // end findEvents()
function jd0(year, month, day) {
    // The Julian date at 0 hours(*) UT at Greenwich
    // (*) or actual UT time if day comprises time as fraction
    var y = year;
    var m = month;
    if (m < 3) {
        m += 12;
        y -= 1
    };
    var a = Math.floor(y / 100);
    var b = 2 - a + Math.floor(a / 4);
    var j = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524.5;
    return j;
}

function rs() {
    var J = jd2 - (date_time.getHours() + (date_time.getMinutes() / 60) + (date_time.getSeconds() / 3600)) / 24;
    var zz = [];
    //i;
    for (var i = 0; i < 7; i++) {
        var oe = findEvents(i, J, obs);
        for (var j = oe.length - 2; j > 0; j--) {
            var t = oe[j][0];
            var e = oe[j][1];
            if (e == -1) re = t;
            if (e == 1) se = t;
            //if (e == 0) tr = t;
        }
        bodies[i].update(J + .5, obs);
        bodies[i].elongupdate(J + .5, obs);
        zz[i] = new Array(dfrac2tstr(re), dfrac2tstr(se))
    }
    return zz;
}
// elements from Paul Schlyter
var planets = new Array();
planets[3] = new planet("Mercury", 0, new Array(48.3313, 3.24587E-5), new Array(7.0047, 5.00E-8), new Array(29.1241, 1.01444E-5), new Array(0.387098, 0), new Array(0.205635, 5.59E-10), new Array(168.6562, 4.0923344368));
planets[5] = new planet("Venus  ", 1, new Array(76.6799, 2.46590E-5), new Array(3.3946, 2.75E-8), new Array(54.8910, 1.38374E-5), new Array(0.723330, 0), new Array(0.006773, -1.302E-9), new Array(48.0052, 1.6021302244));
planets[2] = new planet("Mars   ", 3, new Array(49.5574, 2.11081E-5), new Array(1.8497, -1.78E-8), new Array(286.5016, 2.92961E-5), new Array(1.523688, 0), new Array(0.093405, 2.516E-9), new Array(18.6021, 0.5240207766));
planets[4] = new planet("Jupiter", 4, new Array(100.4542, 2.76854E-5), new Array(1.3030, -1.557E-7), new Array(273.8777, 1.64505E-5), new Array(5.20256, 0), new Array(0.048498, 4.469E-9), new Array(19.8950, 0.0830853001));
planets[6] = new planet("Saturn ", 5, new Array(113.6634, 2.38980E-5), new Array(2.4886, -1.081E-7), new Array(339.3939, 2.97661E-5), new Array(9.55475, 0), new Array(0.055546, -9.499E-9), new Array(316.9670, 0.0334442282));

function PlanetAlt(p, jday, obs) {
    // Alt/Az, hour angle, ra/dec, ecliptic long. and lat, illuminated fraction, dist(Sun), dist(Earth), brightness of planet p
    if (p == SUN) return SunAlt(jday, obs);
    if (p == MOON) return MoonPos(jday, obs);
    var sun_xyz = sunxyz(jday);
    var planet_xyz = helios(planets[p], jday);
    var dx = planet_xyz[0] + sun_xyz[0];
    var dy = planet_xyz[1] + sun_xyz[1];
    var dz = planet_xyz[2] + sun_xyz[2];
    var lon = rev(atan2d(dy, dx));
    var lat = atan2d(dz, Math.sqrt(dx * dx + dy * dy));
    var radec = radecr(planet_xyz, sun_xyz, jday, obs);
    var ra = radec[0];
    var dec = radec[1];
    var altaz = radec2aa(ra, dec, jday, obs);
    var dist = radec[2];
    var R = sun_xyz[3]; // Sun-Earth distance
    var r = planet_xyz[3]; // heliocentric distance
    var k = ((r + dist) * (r + dist) - R * R) / (4 * r * dist); // illuminated fraction (41.2) 
    // brightness calc according to Meeus p. 285-86 using Astronomical Almanac expressions
    var absbr = new Array(-0.42, -4.40, 0, -1.52, -9.40, -8.88, -7.19, -6.87);
    var i = acosd((r * r + dist * dist - R * R) / (2 * r * dist)); // phase angle
    var mag = absbr[p] + 5 * log10(r * dist); // common for all planets
    switch (p) {
        case MERCURY:
            mag += i * (0.0380 + i * (-0.000273 + i * 0.000002));
            break;
        case VENUS:
            mag += i * (0.0009 + i * (0.000239 - i * 0.00000065));
            break;
        case MARS:
            mag += i * 0.016;
            break;
        case JUPITER:
            mag += i * 0.005;
            break;
        case SATURN: // (Ring system needs special treatment, see Meeus Ch. 45)
            var T = (jday - 2451545.0) / 36525; // (22.1)
            var incl = 28.075216 - 0.012998 * T + 0.000004 * T * T; // (45.1)
            var omega = 169.508470 + 1.394681 * T + 0.000412 * T * T; // (45.1)
            var B = asind(sind(incl) * cosd(lat) * sind(lon - omega) - cosd(incl) * sind(lat));
            var l = planet_xyz[4]; // heliocentric longitude of Saturn
            var b = planet_xyz[5]; // heliocentric latitude (do not confuse with 'b' in step 6, page 319)
            // correction for Sun's aberration skipped
            var U1 = atan2d(sind(incl) * sind(b) + cosd(incl) * cosd(b) * sind(l - omega), cosd(b) * cosd(l - omega));
            var U2 = atan2d(sind(incl) * sind(lat) + cosd(incl) * cosd(lat) * sind(lon - omega), cosd(lat) * cosd(lon - omega));
            var dU = Math.abs(U1 - U2);
            mag += 0.044 * dU - 2.60 * sind(Math.abs(B)) + 1.25 * sind(B) * sind(B);
            break;
    }
    return new Array(altaz[0], altaz[1], altaz[2], ra, dec, lon, lat, k, r, dist, mag);
}

function helios(p, jday) {
    var d = jday - 2451543.5;
    var w = p.w[0] + p.w[1] * d; // argument of perihelion
    var e = p.e[0] + p.e[1] * d;
    var a = p.a[0] + p.a[1] * d;
    var i = p.i[0] + p.i[1] * d;
    var N = p.N[0] + p.N[1] * d;
    var M = rev(p.M[0] + p.M[1] * d); // mean anomaly
    var E0 = M + RAD2DEG * e * sind(M) * (1.0 + e * cosd(M));
    var E1 = E0 - (E0 - RAD2DEG * e * sind(E0) - M) / (1.0 - e * cosd(E0));
    while (Math.abs(E0 - E1) > 0.0005) {
        E0 = E1;
        E1 = E0 - (E0 - RAD2DEG * e * sind(E0) - M) / (1.0 - e * cosd(E0));
    }
    var xv = a * (cosd(E1) - e);
    var yv = a * Math.sqrt(1.0 - e * e) * sind(E1);
    var v = rev(atan2d(yv, xv)); // true anomaly
    var r = Math.sqrt(xv * xv + yv * yv); // distance
    var xh = r * (cosd(N) * cosd(v + w) - sind(N) * sind(v + w) * cosd(i));
    var yh = r * (sind(N) * cosd(v + w) + cosd(N) * sind(v + w) * cosd(i));
    var zh = r * (sind(v + w) * sind(i));
    var lonecl = atan2d(yh, xh);
    var latecl = atan2d(zh, Math.sqrt(xh * xh + yh * yh + zh * zh));
    if (p.num == JUPITER) { // Jupiter pertuberations by Saturn
        var Ms = rev(planets[SATURN].M[0] + planets[SATURN].M[1] * d);
        lonecl += (-0.332) * sind(2 * M - 5 * Ms - 67.6) - 0.056 * sind(2 * M - 2 * Ms + 21) + 0.042 * sind(3 * M - 5 * Ms + 21) - 0.036 * sind(M - 2 * Ms) + 0.022 * cosd(M - Ms) + 0.023 * sind(2 * M - 3 * Ms + 52) - 0.016 * sind(M - 5 * Ms - 69);
        xh = r * cosd(lonecl) * cosd(latecl); // recalc xh, yh
        yh = r * sind(lonecl) * cosd(latecl);
    }
    if (p.num == SATURN) { // Saturn pertuberations
        var Mj = rev(planets[JUPITER].M[0] + planets[JUPITER].M[1] * d);
        lonecl += 0.812 * sind(2 * Mj - 5 * M - 67.6) - 0.229 * cosd(2 * Mj - 4 * M - 2) + 0.119 * sind(Mj - 2 * M - 3) + 0.046 * sind(2 * Mj - 6 * M - 69) + 0.014 * sind(Mj - 3 * M + 32);
        latecl += -0.020 * cosd(2 * Mj - 4 * M - 2) + 0.018 * sind(2 * Mj - 6 * M - 49);
        xh = r * cosd(lonecl) * cosd(latecl); // recalc xh, yh, zh
        yh = r * sind(lonecl) * cosd(latecl);
        zh = r * sind(latecl);
    }
    return new Array(xh, yh, zh, r, lonecl, latecl);
} // helios()
function radecr(obj, sun, jday, obs) {
    // radecr returns ra, dec and earth distance
    // obj and sun comprise Heliocentric Ecliptic Rectangular Coordinates
    // (note Sun coords are really Earth heliocentric coordinates with reverse signs)
    // Equatorial geocentric co-ordinates
    var xg = obj[0] + sun[0];
    var yg = obj[1] + sun[1];
    var zg = obj[2];
    // Obliquity of Ecliptic (exponent corrected, was E-9!)
    var obl = 23.4393 - 3.563E-7 * (jday - 2451543.5);
    // Convert to eq. co-ordinates
    var x1 = xg;
    var y1 = yg * cosd(obl) - zg * sind(obl);
    var z1 = yg * sind(obl) + zg * cosd(obl);
    // RA and dec (33.2)
    var ra = rev(atan2d(y1, x1));
    var dec = atan2d(z1, Math.sqrt(x1 * x1 + y1 * y1));
    var dist = Math.sqrt(x1 * x1 + y1 * y1 + z1 * z1);
    return new Array(ra, dec, dist);
}

function ib(size) {
    if ((typeof (canvasRenderingContext2d) !== undefined)) {
        writeDiamondChart(vargaChart(vargas(1), 1).apl, di("canm"), size, 100, 1, "ल");
    }
}

function doForm(payload) {
    //Pass date and other field
    var today = payload.date;
    var lsDate = today.toString().replace(" GMT+0530 (India Standard Time)", "").substr(4);
    var chartname = "Krishna";

    d = new Date(lsDate);
    futureVartmanDate = new Date(lsDate).toString().replace(" GMT+0530 (India Standard Time)", "");
    d.setFullYear(today.getFullYear());
    lon = payload.longitude;
    lat = payload.latitude;
    pla = payload.place;

    panchanga = getPanchanga(d, lon, lat, pla);
    s = panchanga.html;
    lat2 = (lat < 0) ? (Math.ceil(lat) * -1 + "S" + Math.round(frac(lat) * -10000)) : (Math.floor(lat) + "N" + Math.round(frac(lat) * 10000));
    lon2 = (lon < 0) ? (Math.ceil(lon) * -1 + "E" + Math.round(frac(lon) * -10000)) : (Math.floor(lon) + "W" + Math.round(frac(lon) * 10000));
    return {
        json: {
            ...panchanga.jsonData,
            sthaan: {
                label: 'स्थान: ',
                value: pla
            },
            akshansh: {
                label: 'अक्षांश: ',
                value: lat2
            },
            deshantar: {
                label: 'देशान्तर: ',
                value: lon2
            },
            vartmaan: {
                label: 'वर्तमान पंचाग दिनाँक: ',
                value: futureVartmanDate
            },
        }
    };
}

function getGrahas(j, l, lat) {
    obs = {
        'longitude': l,
        'latitude': lat
    };
    this.grahas = new Array(9);
    this.grahas_next = new Array(9);
    this.speed = new Array(9);
    this.retro = new Array(9);
    this.gr = new Array(9);
    this.grn = new Array(9);
    for (a = 0; a < 7; a++) {
        this.gr[a] = PlanetAlt(a, j, obs)
        this.grahas[a] = this.gr[a][5]
        this.grn[a] = PlanetAlt(a, j + 1, obs)
        this.grahas_next[a] = this.grn[a][5]
        this.speed[a] = ((this.grahas_next[a] - this.grahas[a]) < (-300)) ? (((this.grahas_next[a] - this.grahas[a] + 360) % 360) / day) : (((this.grahas_next[a] - this.grahas[a]) % 360) / day);
        this.retro[a] = (this.speed[a] < 0) ? 1 : 0;
    }
}
if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_sil_euro_latin());
}
function Keyboard_sil_euro_latin()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this.KI="Keyboard_sil_euro_latin";
  this.KN="EuroLatin (SIL)";
  this.KMINVER="10.0";
  this.KV=null;
  this.KH='';
  this.KM=0;
  this.KBVER="1.8";
  this.KMBM=modCodes.SHIFT /* 0x0010 */;
  this.KVKD="T_G_Tilde T_P_Dieresis";
  this.KVKL={
  "tablet": {
    "font": "Tahoma",
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": 1,
            "key": [
              {"id": "K_Q","text":"q"},
              {"id": "K_W","text":"w"},
              {"id": "K_E","text":"e"},
              {"id": "K_R","text":"r"},
              {"id": "K_T","text":"t"},
              {"id": "K_Y","text":"y"},
              {"id": "K_U","text":"u"},
              {"id": "K_I","text":"i"},
              {"id": "K_O","text":"o"},
              {"id": "K_P","text":"p"}
            ]
          },
          {
            "id": 2,
            "key": [
              {"id": "K_A","text":"a","pad":70},
              {"id": "K_S","text":"s"},
              {"id": "K_D","text":"d"},
              {"id": "K_F","text":"f"},
              {"id": "K_G","text":"g"},
              {"id": "K_H","text":"h"},
              {"id": "K_J","text":"j"},
              {"id": "K_K","text":"k"},
              {"id": "K_L","text":"l"},
              {"sp": "10","width":"10"}
            ]
          },
          {
            "id": 3,
            "key": [
              {"id": "K_SHIFT","text": "*Shift*","width": "110","sp": "1","nextlayer": "shift"},
              {"id": "K_Z","text":"z"},
              {"id": "K_X","text":"x"},
              {"id": "K_C","text":"c"},
              {"id": "K_V","text":"v"},
              {"id": "K_B","text":"b"},
              {"id": "K_N","text":"n"},
              {"id": "K_M","text":"m"},
              {"id": "K_PERIOD","text": ".","sk": [
                  {"text": ",","id": "K_COMMA"},
                  {"text": "!","id": "K_1", "layer": "shift"},
                  {"text": "?","id": "K_SLASH", "layer": "shift"},
                  {"text": "'","id": "K_QUOTE"},
                  {"text": "\"","id": "K_QUOTE", "layer": "shift"},
                  {"text": "\\","id": "K_BKSLASH"},
                  {"text": ":","id": "K_COLON", "layer": "shift"},
                  {"text": ";","id": "K_COLON"}
                ]
              },
              {"id": "K_BKSP","text": "*BkSp*","width":"90","sp": "1"}
            ]
          },
          {
            "id": 4,
            "key": [
              {"id": "K_NUMLOCK","text": "*123*","width":"140","sp": "1","nextlayer": "numeric"},
              {"id": "K_LOPT","text": "*Menu*","width": "120","sp": "1"},
              {"id": "K_SPACE","text": "","width": "630","sp": "0"},
              {"id": "K_ENTER","text": "*Enter*","width":"140","sp": "1"}
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": 1,
            "key": [
              {"id": "K_Q","text":"Q"},
              {"id": "K_W","text":"W"},
              {"id": "K_E","text":"E"},
              {"id": "K_R","text":"R"},
              {"id": "K_T","text":"T"},
              {"id": "K_Y","text":"Y"},
              {"id": "K_U","text":"U"},
              {"id": "K_I","text":"I"},
              {"id": "K_O","text":"O"},
              {"id": "K_P","text":"P"}
            ]
          },
          {
            "id": 2,
            "key": [
              {"id": "K_A","text":"A","pad":70},
              {"id": "K_S","text":"S"},
              {"id": "K_D","text":"D"},
              {"id": "K_F","text":"F"},
              {"id": "K_G","text":"G"},
              {"id": "K_H","text":"H"},
              {"id": "K_J","text":"J"},
              {"id": "K_K","text":"K"},
              {"id": "K_L","text":"L"},
              {"sp": "10","width":"10"}
            ]
          },
          {
            "id": 3,
            "key": [
              {"id": "K_SHIFT","text": "*Shift*","width": "110","sp": "2","nextlayer": "default"},
              {"id": "K_Z","text":"Z"},
              {"id": "K_X","text":"X"},
              {"id": "K_C","text":"C"},
              {"id": "K_V","text":"V"},
              {"id": "K_B","text":"B"},
              {"id": "K_N","text":"N"},
              {"id": "K_M","text":"M"},
              {"id": "K_PERIOD","text": ".","sk": [
                  {"text": ",","id": "K_COMMA", "layer": "default"},
                  {"text": "!","id": "K_1", "layer": "shift"},
                  {"text": "?","id": "K_SLASH", "layer": "shift"},
                  {"text": "'","id": "K_QUOTE", "layer": "default"},
                  {"text": "\"","id": "K_QUOTE", "layer": "shift"},
                  {"text": "\\","id": "K_BKSLASH", "layer": "default"},
                  {"text": ":","id": "K_COLON", "layer": "shift"},
                  {"text": ";","id": "K_COLON", "layer": "default"}
                ]
              },
              {"id": "K_BKSP","text": "*BkSp*","width": "90","sp": "1"}
            ]
          },
          {
            "id": 4,
            "key": [            
              {"id": "K_NUMLOCK","text": "*123*","width":"140","sp": "1","nextlayer": "numeric"},
              {"id": "K_LOPT","text": "*Menu*","width": "120","sp": "1"},
              {"id": "K_SPACE","text": "","width": "630","sp": "0"},
              {"id": "K_ENTER","text": "*Enter*","width":"140","sp": "1"}
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": 1,
            "key": [
              {"id": "K_1","text": "1"},
              {"id": "K_2","text": "2"},
              {"id": "K_3","text": "3"},
              {"id": "K_4","text": "4"},
              {"id": "K_5","text": "5"},
              {"id": "K_6","text": "6"},
              {"id": "K_7","text": "7"},
              {"id": "K_8","text": "8"},
              {"id": "K_9","text": "9"},
              {"id": "K_0","text": "0"}
            ]
          },
          {
            "id": 2,
            "key": [
              {"id": "K_4","text": "$","layer":"shift","pad":70},
              {"id": "K_2","text": "@","layer":"shift"},
              {"id": "K_3","text": "#","layer":"shift"},
              {"id": "K_5","text": "%","layer":"shift"},
              {"id": "K_7","text": "&","layer":"shift"},
              {"id": "K_HYPHEN","text": "_","layer":"shift"},
              {"id": "K_EQUAL","text": "=","layer":"default"},
              {"id": "K_BKSLASH","text": "|","layer":"shift"},
              {"id": "K_BKSLASH","text": "\\","layer":"default"},
              {"text": "","width": "10","sp": "10"}
            ]
          },
          {
            "id": 3,
            "key": [
              {"id": "K_SHIFT","text": "*Shift*","width": "110","sp": "1"},
              {"id": "K_LBRKT","text": "[","sk": [
                  {"id": "U_00AB","text":"\u00ab"},
                  {"id": "K_COMMA","text":"<","layer":"shift"},
                  {"id": "K_LBRKT","text":"{","layer":"shift"}
                ]
              },
              {"id": "K_9","text": "(","layer":"shift"},
              {"id": "K_0","text": ")","layer":"shift"},
              {"id": "K_RBRKT","text": "]","sk": [
                  {"id": "U_00BB","text":"\u00bb"},
                  {"id": "K_PERIOD","text":">","layer":"shift"},
                  {"id": "K_RBRKT","text":"}","layer":"shift"}
                ]
              },
              {"id": "K_EQUAL","text": "+","layer":"shift"},
              {"id": "K_HYPHEN","text": "-","layer":"default"},
              {"id": "K_8","text": "*","layer":"shift"},
              {"id": "K_SLASH","text": "/","layer":"default"},
              {"id": "K_BKSP","text": "*BkSp*","width": "90","sp": "1"}
            ]
          },
          {
            "id": 4,
            "key": [
              {"id": "K_LOWER","text": "*abc*","width": "140","sp": "1","nextlayer": "default"},
              {"id": "K_LOPT","text": "*Menu*","width": "120","sp": "1"},
              {"id": "K_SPACE","text": "","width": "630","sp": "0"},
              {"id": "K_ENTER","text": "*Enter*","width": "140","sp": "1"}
            ]
          }
        ]
      }
    ]
  },
  "phone": {
    "font": "Tahoma",
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": 1,
            "key": [
              {"id": "K_Q","text":"q"},
              {"id": "K_W","text":"w"},
              {"id": "K_E","text":"e"},
              {"id": "K_R","text":"r"},
              {"id": "K_T","text":"t"},
              {"id": "K_Y","text":"y"},
              {"id": "K_U","text":"u"},
              {"id": "K_I","text":"i"},
              {"id": "K_O","text":"o"},
              {"id": "K_P","text":"p"}
            ]
          },
          {
            "id": 2,
            "key": [
              {"id": "K_A","text":"a","pad":"50"},
              {"id": "K_S","text":"s"},
              {"id": "K_D","text":"d"},
              {"id": "K_F","text":"f"},
              {"id": "K_G","text":"g"},
              {"id": "K_H","text":"h"},
              {"id": "K_J","text":"j"},
              {"id": "K_K","text":"k"},
              {"id": "K_L","text":"l"},
              {"text": "","width": "10","sp": "10"}                            
            ]
          },
          {
            "id": 3,
            "key": [
              {"id": "K_SHIFT","text": "*Shift*","sp": "1","nextlayer": "shift"},
              {"id": "K_Z","text":"z"},
              {"id": "K_X","text":"x"},
              {"id": "K_C","text":"c"},
              {"id": "K_V","text":"v"},
              {"id": "K_B","text":"b"},
              {"id": "K_N","text":"n"},
              {"id": "K_M","text":"m"},
              {"id": "K_PERIOD","text": ".","sk": [
                  {"text": ",","id": "K_COMMA"},
                  {"text": "!","id": "K_1", "layer": "shift"},
                  {"text": "?","id": "K_SLASH", "layer": "shift"},
                  {"text": "'","id": "K_QUOTE"},
                  {"text": "\"","id": "K_QUOTE", "layer": "shift"},
                  {"text": "\\","id": "K_BKSLASH"},
                  {"text": ":","id": "K_COLON", "layer": "shift"},
                  {"text": ";","id": "K_COLON"}
                ]
              },
              {"id": "K_BKSP","text": "*BkSp*","width": "100","sp": "1"}
            ]
          },
          {
            "id": 4,
            "key": [
              {"id": "K_NUMLOCK","text": "*123*","width":"150","sp": "1","nextlayer": "numeric"},
              {"id": "K_LOPT","text": "*Menu*","width": "120","sp": "1"},
              {"id": "K_SPACE","text": "","width": "610","sp": "0"},
              {"id": "K_ENTER","text": "*Enter*","width":"150","sp": "1"}
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": 1,
            "key": [
              {"id": "K_Q","text":"Q"},
              {"id": "K_W","text":"W"},
              {"id": "K_E","text":"E"},
              {"id": "K_R","text":"R"},
              {"id": "K_T","text":"T"},
              {"id": "K_Y","text":"Y"},
              {"id": "K_U","text":"U"},
              {"id": "K_I","text":"I"},
              {"id": "K_O","text":"O"},
              {"id": "K_P","text":"P"}
            ]
          },
          {
            "id": 2,
            "key": [
              {"id": "K_A","text":"A","pad":"50"},
              {"id": "K_S","text":"S"},
              {"id": "K_D","text":"D"},
              {"id": "K_F","text":"F"},
              {"id": "K_G","text":"G"},
              {"id": "K_H","text":"H"},
              {"id": "K_J","text":"J"},
              {"id": "K_K","text":"K"},
              {"id": "K_L","text":"L"},
              {"text": "","width": "10","sp": "10"}                            
            ]
          },
          {
            "id": 3,
            "key": [
              {"id": "K_SHIFT","text": "*Shift*","sp": "2","nextlayer": "default"},
              {"id": "K_Z","text":"Z"},
              {"id": "K_X","text":"X"},
              {"id": "K_C","text":"C"},
              {"id": "K_V","text":"V"},
              {"id": "K_B","text":"B"},
              {"id": "K_N","text":"N"},
              {"id": "K_M","text":"M"},
              {"id": "K_PERIOD","text": ".","sk": [
                  {"text": ",","id": "K_COMMA", "layer": "default"},
                  {"text": "!","id": "K_1", "layer": "shift"},
                  {"text": "?","id": "K_SLASH", "layer": "shift"},
                  {"text": "'","id": "K_QUOTE", "layer": "default"},
                  {"text": "\"","id": "K_QUOTE", "layer": "shift"},
                  {"text": "\\","id": "K_BKSLASH", "layer": "default"},
                  {"text": ":","id": "K_COLON", "layer": "shift"},
                  {"text": ";","id": "K_COLON", "layer": "default"}
                ]
              },
              {"id": "K_BKSP","text": "*BkSp*","sp": "1"}
            ]
          },
          {
            "id": 4,
            "key": [
              {"id": "K_NUMLOCK","text": "*123*","width":"150","sp": "1","nextlayer": "numeric"},
              {"id": "K_LOPT","text": "*Menu*","width": "120","sp": "1"},
              {"id": "K_SPACE","text": "","width": "610","sp": "0"},
              {"id": "K_ENTER","text": "*Enter*","width":"150","sp": "1"}
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": 1,
            "key": [
              {"id": "K_1","text": "1"},
              {"id": "K_2","text": "2"},
              {"id": "K_3","text": "3"},
              {"id": "K_4","text": "4"},
              {"id": "K_5","text": "5"},
              {"id": "K_6","text": "6"},
              {"id": "K_7","text": "7"},
              {"id": "K_8","text": "8"},
              {"id": "K_9","text": "9"},
              {"id": "K_0","text": "0"}
            ]
          },
          {
            "id": 2,
            "key": [
              {"id": "K_4","layer":"shift","text": "$","pad": "50"},
              {"id": "K_2","layer":"shift","text": "@"},
              {"id": "K_3","layer":"shift","text": "#"},
              {"id": "K_5","layer":"shift","text": "%"},
              {"id": "K_6","layer":"shift","text": "&"},
              {"id": "K_HYPHEN","layer":"shift","text": "_"},
              {"id": "K_EQUAL","text": "=","layer":"default"},
              {"id": "K_BKSLASH","layer":"shift","text": "|"},
              {"id": "K_BKSLASH","text": "\\","layer":"default"},
              {"text": "","width": "10","sp": "10"}
            ]
          },
          {
            "id": 3,
            "key": [
              {"id": "K_LBRKT","text": "[","pad":"110","sk": [
                  {"id": "U_00AB","text":"\u00ab"},
                  {"id": "K_COMMA","text":"<","layer":"shift"},
                  {"id": "K_LBRKT","text":"{","layer":"shift"}
                ]
              },
              {"id": "K_9","layer":"shift","text": "("},
              {"id": "K_0","layer":"shift","text": ")"},
              {"id": "K_RBRKT","text": "]","sk": [
                  {"id": "U_00BB","text":"\u00bb"},
                  {"id": "K_PERIOD","text":">","layer":"shift"},
                  {"id": "K_RBRKT","text":"}","layer":"shift"}
                ]
              },
              {"id": "K_EQUAL","layer":"shift","text": "+"},
              {"id": "K_HYPHEN","text": "-"},
              {"id": "K_8","layer":"shift","text": "*"},
              {"id": "K_SLASH","text": "/"},
              {"id": "K_BKSP","text": "*BkSp*","width": "100","sp": "1"}
            ]
          },
          {
            "id": 4,
            "key": [
              {"id": "K_LOWER","text": "*abc*","width": "150","sp": "1","nextlayer": "default"},
              {"id": "K_LOPT","text": "*Menu*","width": "120","sp": "1"},
              {"id": "K_SPACE","text": "","width": "610","sp": "0"},
              {"id": "K_ENTER","text": "*Enter*","width": "150","sp": "1"}
            ]
          }
        ]
      }
    ]
  }
}
;
  this.s_option_key=KeymanWeb.KLOAD(this.KI,"option_key","");
  this.s_controls="`#'\"^%&*~-_:@.|,=\\$";
  this.s_graveO="àèìǹòùẁỳÀÈÌǸÒÙẀỲ";
  this.s_graveK="aeinouwyAEINOUWY";
  this.s_doublegraveO="ȁȅȉȍȑȕȀȄȈȌȐȔ";
  this.s_doublegraveK="aeioruAEIORU";
  this.s_acuteO="áćéǵíḱĺḿńóṕŕśúẃýźÁĆÉǴÍḰĹḾŃÓṔŔŚÚẂÝŹ";
  this.s_acuteK="acegiklmnoprsuwyzACEGIKLMNOPRSUWYZ";
  this.s_doubleacuteO="őűŐŰ";
  this.s_doubleacuteK="ouOU";
  this.s_circumO="âĉêĝĥîĵôŝûŵŷẑÂĈÊĜĤÎĴÔŜÛŴŶẐ";
  this.s_circumK="aceghijosuwyzACEGHIJOSUWYZ";
  this.s_caronO="ǎǍčČďĎěĚǧǦȟȞǐǏǰǩǨľĽňŇǒǑřŘšŠťŤǔǓǯǮžŽ";
  this.s_caronK="aAcCdDeEgGhHiIjkKlLnNoOrRsStTuUxXzZ";
  this.s_antibreveO="ȂȃȆȇȊȋȎȏȒȓȖȗ";
  this.s_antibreveK="AaEeIiOoRrUu";
  this.s_breveO="ăĂĕĔğĞḫḪĭĬŏŎŭŬ";
  this.s_breveK="aAeEgGhHiIoOuU";
  this.s_tildeO="ãÃẽẼĩĨɫⱢñÑõÕũŨṽṼỹỸ";
  this.s_tildeK="aAeEiIlLnNoOuUvVyY";
  this.s_macronO="ĀāɃƀĐđĒēḠḡĦħĪīɈɉŁłŌōɌɍŦŧŪūȲȳƵƶ";
  this.s_macronK="AaBbDdEeGgHhIiJjLlOoRrTtUuYyZz";
  this.s_lineO="ḆḇḎḏẖḴḵḺḻṈṉṞṟṮṯẔẕ";
  this.s_lineK="BbDdhKkLlNnRrTtZz";
  this.s_dieresisO="äëḧïöẗüẅẍÿÄËḦÏÖÜẄẌŸ";
  this.s_dieresisK="aehiotuwxyAEHIOUWXY";
  this.s_ringO="åÅůŮẘẙșȘțȚ";
  this.s_ringK="aAuUwysStT";
  this.s_dottedO="ȧȦḃḂċĊḋḊėĖḟḞġĠḣḢıİȷŀĿṁṀṅṄȯȮṗṖṙṘṡṠṫṪẇẆẋẊẏẎżŻ";
  this.s_dottedK="aAbBcCdDeEfFgGhHiIjlLmMnNoOpPrRsStTwWxXyYzZ";
  this.s_dotbelowO="ẠạḄḅḌḍẸẹḤḥỊịḲḳḶḷṂṃṆṇỌọṚṛṢṣṬṭỤụṾṿẈẉỴỵẒẓ";
  this.s_dotbelowK="AaBbDdEeHhIiKkLlMmNnOoRrSsTtUuVvWwYyZz";
  this.s_cedillaO="ąĄçÇḑḐęĘģĢḩḨįĮķĶļĻņŅǫǪŗŖşŞţŢųŲⱬⱫ";
  this.s_cedillaK="aAcCdDeEgGhHiIkKlLnNoOrRsStTuUzZ";
  this.s_extendedO="ƆɔƏəɁɂƝɲŊŋƟɵẞßÞþȜȝƷʒ";
  this.s_extendedK="CcEeGgJjNnOoSsTtYyZz";
  this.s_specialO="©ÐðƐɛªǤǥĸ—º–ŉØø¶℗®§ſ‡†µ×¡¦¨¬­¯°±´·¸¿÷‰•¹²³⁴⁵⁶⁷⁸⁹⁰";
  this.s_specialK="cDdEefGgkMmNnOoPprSsTtux!|:~-_*+'.,?/%>1234567890";
  this.s_currencyO="¤¢₯₫€€₱₣₲₰₴₡₭₤₦₪₧£₹₨₮₩¥";
  this.s_currencyK="CcDdEefFGghkKlNnPpRrtwy";
  this.s55="touch";
  this.s56="touch";
  this.s57="touch";
  this.s58="touch";
  this.s59="touch";
  this.s60="";
  this.s61="";
  this.s62="";
  this.KVER="10.0.1113.0";
  this.gs=function(t,e) {
    return this.g_Main(t,e);
  };
  this.g_Main=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x100)&&k.KIFS(31,this.s56,t)) {   // Line 69
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"g̃");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x100)&&k.KIFS(31,this.s57,t)) {   // Line 70
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"G̃");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x101)&&k.KIFS(31,this.s58,t)) {   // Line 86
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"p̈");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x101)&&k.KIFS(31,this.s59,t)) {   // Line 87
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"P̈");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_1 /* 0x31 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"¡");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 109
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ꞌ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)&&k.KFCM(2,t,['\"',{t:'d',d:0}])) {   // Line 222
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"\"");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)&&k.KIFS(31,this.s55,t)) {   // Line 30
      r=m=1;
      k.KDC(0,t);
      r=this.g_Touch(t,e);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)&&this.s_option_key===this.s62) {   // Line 240
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"\"");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_3 /* 0x33 */)&&k.KFCM(2,t,['#',{t:'d',d:0}])) {   // Line 220
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"#");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_3 /* 0x33 */)&&k.KIFS(31,this.s55,t)) {   // Line 30
      r=m=1;
      k.KDC(0,t);
      r=this.g_Touch(t,e);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_3 /* 0x33 */)&&this.s_option_key===this.s62) {   // Line 240
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"#");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_4 /* 0x34 */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 237
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"$");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_4 /* 0x34 */)&&k.KIFS(31,this.s55,t)) {   // Line 30
      r=m=1;
      k.KDC(0,t);
      r=this.g_Touch(t,e);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_4 /* 0x34 */)&&this.s_option_key===this.s62) {   // Line 240
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"$");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_5 /* 0x35 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"‰");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_5 /* 0x35 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 224
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"%");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_5 /* 0x35 */)&&k.KIFS(31,this.s55,t)) {   // Line 30
      r=m=1;
      k.KDC(0,t);
      r=this.g_Touch(t,e);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_5 /* 0x35 */)&&this.s_option_key===this.s62) {   // Line 240
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"%");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_7 /* 0x37 */)&&k.KFCM(2,t,['&',{t:'d',d:0}])) {   // Line 225
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"&");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_7 /* 0x37 */)&&k.KIFS(31,this.s55,t)) {   // Line 30
      r=m=1;
      k.KDC(0,t);
      r=this.g_Touch(t,e);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_7 /* 0x37 */)&&this.s_option_key===this.s62) {   // Line 240
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"&");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 108
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ꞌ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"´");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 221
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"'");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)&&k.KIFS(31,this.s55,t)) {   // Line 30
      r=m=1;
      k.KDC(0,t);
      r=this.g_Touch(t,e);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)&&this.s_option_key===this.s62) {   // Line 240
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"'");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_8 /* 0x38 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"°");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_8 /* 0x38 */)&&k.KFCM(2,t,['*',{t:'d',d:0}])) {   // Line 226
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"*");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_8 /* 0x38 */)&&k.KIFS(31,this.s55,t)) {   // Line 30
      r=m=1;
      k.KDC(0,t);
      r=this.g_Touch(t,e);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_8 /* 0x38 */)&&this.s_option_key===this.s62) {   // Line 240
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"*");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_EQUAL /* 0xBB */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"±");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"¸");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 234
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,",");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)&&k.KIFS(31,this.s55,t)) {   // Line 30
      r=m=1;
      k.KDC(0,t);
      r=this.g_Touch(t,e);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)&&this.s_option_key===this.s62) {   // Line 240
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,",");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"­");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 228
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"-");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)&&k.KIFS(31,this.s55,t)) {   // Line 30
      r=m=1;
      k.KDC(0,t);
      r=this.g_Touch(t,e);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)&&this.s_option_key===this.s62) {   // Line 240
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"-");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"·");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)&&k.KFCM(2,t,['·','.'])) {   // Line 139
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"…");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 232
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,".");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)&&k.KIFS(31,this.s55,t)) {   // Line 30
      r=m=1;
      k.KDC(0,t);
      r=this.g_Touch(t,e);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)&&this.s_option_key===this.s62) {   // Line 240
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,".");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SLASH /* 0xBF */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"÷");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"⁰");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"¹");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)&&k.KFCM(3,t,['1','/','/'])) {   // Line 174
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"½");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"²");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)&&k.KFCM(2,t,['¹','/'])) {   // Line 191
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"½");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)&&k.KFCM(3,t,['1','/','/'])) {   // Line 175
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"⅓");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)&&k.KFCM(3,t,['2','/','/'])) {   // Line 176
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"⅔");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"³");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)&&k.KFCM(2,t,['¹','/'])) {   // Line 192
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"⅓");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)&&k.KFCM(2,t,['²','/'])) {   // Line 193
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"⅔");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)&&k.KFCM(3,t,['1','/','/'])) {   // Line 177
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"¼");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)&&k.KFCM(3,t,['3','/','/'])) {   // Line 178
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"¾");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"⁴");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)&&k.KFCM(2,t,['¹','/'])) {   // Line 194
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"¼");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)&&k.KFCM(2,t,['³','/'])) {   // Line 195
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"¾");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)&&k.KFCM(3,t,['1','/','/'])) {   // Line 179
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"⅕");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)&&k.KFCM(3,t,['2','/','/'])) {   // Line 180
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"⅖");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)&&k.KFCM(3,t,['3','/','/'])) {   // Line 181
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"⅗");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)&&k.KFCM(3,t,['4','/','/'])) {   // Line 182
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"⅘");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"⁵");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)&&k.KFCM(3,t,['1','/','/'])) {   // Line 183
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"⅙");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)&&k.KFCM(3,t,['5','/','/'])) {   // Line 184
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"⅚");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"⁶");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"⁷");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)&&k.KFCM(3,t,['1','/','/'])) {   // Line 185
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"⅛");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)&&k.KFCM(3,t,['3','/','/'])) {   // Line 186
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"⅜");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)&&k.KFCM(3,t,['5','/','/'])) {   // Line 187
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"⅝");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)&&k.KFCM(3,t,['7','/','/'])) {   // Line 188
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"⅞");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"⁸");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)&&k.KFCM(2,t,['¹','/'])) {   // Line 196
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"⅛");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)&&k.KFCM(2,t,['³','/'])) {   // Line 197
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"⅜");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)&&k.KFCM(2,t,['⁵','/'])) {   // Line 198
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"⅝");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)&&k.KFCM(2,t,['⁷','/'])) {   // Line 199
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"⅞");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"⁹");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"¨");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 230
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,":");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)&&k.KIFS(31,this.s55,t)) {   // Line 30
      r=m=1;
      k.KDC(0,t);
      r=this.g_Touch(t,e);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)&&this.s_option_key===this.s62) {   // Line 240
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,":");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COMMA /* 0xBC */)&&k.KFCM(1,t,['<'])&&this.s_option_key===this.s60) {   // Line 208
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"«");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COMMA /* 0xBC */)&&k.KFCM(2,t,['<',{t:'d',d:1}])) {   // Line 214
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"<<");
      k.KDO(-1,t,1);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COMMA /* 0xBC */)&&k.KFCM(1,t,['«'])) {   // Line 212
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"<<");
      k.KDO(-1,t,1);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 235
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"=");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)&&k.KIFS(31,this.s55,t)) {   // Line 30
      r=m=1;
      k.KDC(0,t);
      r=this.g_Touch(t,e);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)&&this.s_option_key===this.s62) {   // Line 240
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"=");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PERIOD /* 0xBE */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"•");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PERIOD /* 0xBE */)&&k.KFCM(1,t,['>'])&&this.s_option_key===this.s61) {   // Line 209
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"»");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PERIOD /* 0xBE */)&&k.KFCM(2,t,['>',{t:'d',d:1}])) {   // Line 215
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,">>");
      k.KDO(-1,t,1);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PERIOD /* 0xBE */)&&k.KFCM(1,t,['»'])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,">>");
      k.KDO(-1,t,1);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SLASH /* 0xBF */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"¿");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_2 /* 0x32 */)&&k.KFCM(2,t,['@',{t:'d',d:0}])) {   // Line 231
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"@");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_2 /* 0x32 */)&&k.KIFS(31,this.s55,t)) {   // Line 30
      r=m=1;
      k.KDC(0,t);
      r=this.g_Touch(t,e);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_2 /* 0x32 */)&&this.s_option_key===this.s62) {   // Line 240
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"@");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['`',{t:'d',d:0}])) {   // Line 119
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"À");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['#',{t:'d',d:0}])) {   // Line 120
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ȁ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Á");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Â");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ǎ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['&',{t:'d',d:0}])) {   // Line 125
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ȃ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['*',{t:'d',d:0}])) {   // Line 126
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ă");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 127
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ã");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ā");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 130
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ä");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['@',{t:'d',d:0}])) {   // Line 131
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Å");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ȧ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ạ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ą");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_B /* 0x42 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ƀ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_B /* 0x42 */)&&k.KFCM(2,t,['_',{t:'d',d:0}])) {   // Line 129
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ḇ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_B /* 0x42 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ḃ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_B /* 0x42 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ḅ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ć");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ĉ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Č");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ċ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ç");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɔ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"¤");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ď");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Đ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)&&k.KFCM(2,t,['_',{t:'d',d:0}])) {   // Line 129
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ḏ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ḋ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ḍ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ḑ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ð");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"₯");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(3,t,['A','\\',{t:'d',d:0}])) {   // Line 143
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"Æ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(3,t,['O','\\',{t:'d',d:0}])) {   // Line 162
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"Œ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['`',{t:'d',d:0}])) {   // Line 119
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"È");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['#',{t:'d',d:0}])) {   // Line 120
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ȅ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"É");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ê");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ě");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['&',{t:'d',d:0}])) {   // Line 125
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ȇ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['*',{t:'d',d:0}])) {   // Line 126
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ĕ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 127
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ẽ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ē");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 130
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ë");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ė");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ẹ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ę");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ə");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɛ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"€");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_F /* 0x46 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ḟ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_F /* 0x46 */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"₣");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(3,t,['N','\\',{t:'d',d:0}])) {   // Line 155
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"Ŋ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 68
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"G̃");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ǵ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ĝ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ǧ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['*',{t:'d',d:0}])) {   // Line 126
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ğ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ḡ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ġ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ģ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɂ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ǥ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"₲");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(3,t,['T','\\',{t:'d',d:0}])) {   // Line 168
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"Þ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ĥ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ȟ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,['*',{t:'d',d:0}])) {   // Line 126
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ḫ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ħ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 130
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ḧ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ḣ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ḥ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ḩ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(3,t,['O','\\',{t:'d',d:0}])) {   // Line 164
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"Ƣ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['`',{t:'d',d:0}])) {   // Line 119
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ì");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['#',{t:'d',d:0}])) {   // Line 120
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ȉ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Í");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Î");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ǐ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['&',{t:'d',d:0}])) {   // Line 125
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ȋ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['*',{t:'d',d:0}])) {   // Line 126
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ĭ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 127
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ĩ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ī");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 130
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ï");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"İ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ị");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Į");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)&&k.KFCM(3,t,['I','\\',{t:'d',d:0}])) {   // Line 150
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"Ĳ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)&&k.KFCM(3,t,['L','\\',{t:'d',d:0}])) {   // Line 152
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"Ǉ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)&&k.KFCM(3,t,['N','\\',{t:'d',d:0}])) {   // Line 157
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"Ǌ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ĵ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɉ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɲ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ḱ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ǩ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)&&k.KFCM(2,t,['_',{t:'d',d:0}])) {   // Line 129
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ḵ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ḳ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ķ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"₭");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ĺ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ľ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 127
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɫ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ł");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(2,t,['_',{t:'d',d:0}])) {   // Line 129
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ḻ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ŀ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ḷ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ļ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)&&k.KFCM(3,t,['T','\\',{t:'d',d:0}])) {   // Line 170
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"™");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ḿ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṁ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṃ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"—");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['`',{t:'d',d:0}])) {   // Line 119
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ǹ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ń");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ň");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 127
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ñ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['_',{t:'d',d:0}])) {   // Line 129
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṉ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṅ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṇ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ņ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ŋ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"–");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"₦");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(3,t,['N','\\',{t:'d',d:0}])) {   // Line 160
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"№");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['`',{t:'d',d:0}])) {   // Line 119
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ò");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['#',{t:'d',d:0}])) {   // Line 120
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ȍ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ó");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['\"',{t:'d',d:0}])) {   // Line 122
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ő");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ô");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ǒ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['&',{t:'d',d:0}])) {   // Line 125
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ȏ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['*',{t:'d',d:0}])) {   // Line 126
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ŏ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 127
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Õ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ō");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 130
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ö");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ȯ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ọ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ǫ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɵ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ø");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 85
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"P̈");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṕ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṗ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"¶");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"₧");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['#',{t:'d',d:0}])) {   // Line 120
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ȑ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ŕ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ř");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['&',{t:'d',d:0}])) {   // Line 125
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ȓ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɍ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['_',{t:'d',d:0}])) {   // Line 129
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṟ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṙ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṛ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ŗ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"₹");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(3,t,['S','\\',{t:'d',d:0}])) {   // Line 166
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"ẞ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ś");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ŝ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Š");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(2,t,['@',{t:'d',d:0}])) {   // Line 131
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ș");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṡ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṣ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ş");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẞ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"§");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ť");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ŧ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,['_',{t:'d',d:0}])) {   // Line 129
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṯ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,['@',{t:'d',d:0}])) {   // Line 131
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ț");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṫ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṭ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ţ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Þ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"‡");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['`',{t:'d',d:0}])) {   // Line 119
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ù");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['#',{t:'d',d:0}])) {   // Line 120
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ȕ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ú");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['\"',{t:'d',d:0}])) {   // Line 122
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ű");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Û");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ǔ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['&',{t:'d',d:0}])) {   // Line 125
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ȗ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['*',{t:'d',d:0}])) {   // Line 126
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ŭ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 127
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ũ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ū");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 130
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ü");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['@',{t:'d',d:0}])) {   // Line 131
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ů");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ụ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ų");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 127
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṽ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṿ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)&&k.KFCM(2,t,['`',{t:'d',d:0}])) {   // Line 119
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ẁ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ẃ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ŵ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 130
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ẅ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ẇ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ẉ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ǯ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 130
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ẍ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ẋ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['`',{t:'d',d:0}])) {   // Line 119
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ỳ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ý");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ŷ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 127
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ỹ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ȳ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 130
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ÿ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ẏ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ỵ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ȝ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(3,t,['D','\\',{t:'d',d:0}])) {   // Line 145
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"Ǆ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ź");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ẑ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ž");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ƶ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,['_',{t:'d',d:0}])) {   // Line 129
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ẕ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ż");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ẓ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ⱬ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ʒ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSLASH /* 0xDC */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 236
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"\\");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSLASH /* 0xDC */)&&k.KIFS(31,this.s55,t)) {   // Line 30
      r=m=1;
      k.KDC(0,t);
      r=this.g_Touch(t,e);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSLASH /* 0xDC */)&&this.s_option_key===this.s62) {   // Line 240
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"\\");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_6 /* 0x36 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 223
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"^");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_6 /* 0x36 */)&&k.KIFS(31,this.s55,t)) {   // Line 30
      r=m=1;
      k.KDC(0,t);
      r=this.g_Touch(t,e);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_6 /* 0x36 */)&&this.s_option_key===this.s62) {   // Line 240
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"^");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HYPHEN /* 0xBD */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"¯");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HYPHEN /* 0xBD */)&&k.KFCM(2,t,['_',{t:'d',d:0}])) {   // Line 229
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"_");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HYPHEN /* 0xBD */)&&k.KIFS(31,this.s55,t)) {   // Line 30
      r=m=1;
      k.KDC(0,t);
      r=this.g_Touch(t,e);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HYPHEN /* 0xBD */)&&this.s_option_key===this.s62) {   // Line 240
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"_");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)&&k.KFCM(2,t,['`',{t:'d',d:0}])) {   // Line 219
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"`");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)&&k.KIFS(31,this.s55,t)) {   // Line 30
      r=m=1;
      k.KDC(0,t);
      r=this.g_Touch(t,e);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)&&this.s_option_key===this.s62) {   // Line 240
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"`");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['`',{t:'d',d:0}])) {   // Line 119
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"à");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['#',{t:'d',d:0}])) {   // Line 120
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ȁ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"á");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"â");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ǎ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['&',{t:'d',d:0}])) {   // Line 125
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ȃ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['*',{t:'d',d:0}])) {   // Line 126
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ă");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 127
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ã");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ā");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 130
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ä");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['@',{t:'d',d:0}])) {   // Line 131
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"å");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ȧ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ạ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ą");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ƀ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)&&k.KFCM(2,t,['_',{t:'d',d:0}])) {   // Line 129
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ḇ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ḃ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ḅ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ć");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ĉ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"č");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ċ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ç");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɔ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"©");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"¢");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ď");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"đ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)&&k.KFCM(2,t,['_',{t:'d',d:0}])) {   // Line 129
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ḏ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ḋ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ḍ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ḑ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ð");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"₫");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(3,t,['a','\\',{t:'d',d:0}])) {   // Line 144
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"æ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(3,t,['o','\\',{t:'d',d:0}])) {   // Line 163
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"œ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['`',{t:'d',d:0}])) {   // Line 119
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"è");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['#',{t:'d',d:0}])) {   // Line 120
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ȅ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"é");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ê");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ě");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['&',{t:'d',d:0}])) {   // Line 125
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ȇ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['*',{t:'d',d:0}])) {   // Line 126
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ĕ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 127
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẽ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ē");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 130
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ë");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ė");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẹ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ę");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ə");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɛ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"€");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ḟ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ª");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"₱");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(3,t,['n','\\',{t:'d',d:0}])) {   // Line 156
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"ŋ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 67
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"g̃");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ǵ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ĝ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ǧ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['*',{t:'d',d:0}])) {   // Line 126
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ğ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ḡ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ġ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ģ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɂ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ǥ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"₰");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(3,t,['t','\\',{t:'d',d:0}])) {   // Line 169
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"þ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ĥ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ȟ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,['*',{t:'d',d:0}])) {   // Line 126
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ḫ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ħ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,['_',{t:'d',d:0}])) {   // Line 129
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẖ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 130
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ḧ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ḣ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ḥ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ḩ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"₴");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(3,t,['f','\\',{t:'d',d:0}])) {   // Line 148
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"ﬁ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(3,t,['o','\\',{t:'d',d:0}])) {   // Line 165
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"ƣ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['`',{t:'d',d:0}])) {   // Line 119
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ì");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['#',{t:'d',d:0}])) {   // Line 120
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ȉ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"í");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"î");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ǐ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['&',{t:'d',d:0}])) {   // Line 125
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ȋ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['*',{t:'d',d:0}])) {   // Line 126
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ĭ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 127
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ĩ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ī");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 130
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ï");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ı");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ị");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"į");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)&&k.KFCM(3,t,['i','\\',{t:'d',d:0}])) {   // Line 151
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"ĳ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)&&k.KFCM(3,t,['L','\\',{t:'d',d:0}])) {   // Line 153
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"ǈ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)&&k.KFCM(3,t,['l','\\',{t:'d',d:0}])) {   // Line 154
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"ǉ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)&&k.KFCM(3,t,['N','\\',{t:'d',d:0}])) {   // Line 158
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"ǋ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)&&k.KFCM(3,t,['n','\\',{t:'d',d:0}])) {   // Line 159
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"ǌ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ĵ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ǰ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɉ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ȷ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɲ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ḱ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ǩ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)&&k.KFCM(2,t,['_',{t:'d',d:0}])) {   // Line 129
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ḵ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ḳ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ķ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ĸ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"₡");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(3,t,['f','\\',{t:'d',d:0}])) {   // Line 149
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"ﬂ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ĺ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ľ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 127
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɫ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ł");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(2,t,['_',{t:'d',d:0}])) {   // Line 129
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ḻ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ŀ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ḷ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ļ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"₤");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)&&k.KFCM(3,t,['t','\\',{t:'d',d:0}])) {   // Line 171
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"™");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ḿ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṁ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṃ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"º");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['`',{t:'d',d:0}])) {   // Line 119
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ǹ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ń");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ň");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 127
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ñ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['_',{t:'d',d:0}])) {   // Line 129
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṉ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṅ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṇ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ņ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ŋ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ŉ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"₪");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(3,t,['n','\\',{t:'d',d:0}])) {   // Line 161
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"№");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['`',{t:'d',d:0}])) {   // Line 119
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ò");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['#',{t:'d',d:0}])) {   // Line 120
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ȍ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ó");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['\"',{t:'d',d:0}])) {   // Line 122
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ő");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ô");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ǒ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['&',{t:'d',d:0}])) {   // Line 125
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ȏ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['*',{t:'d',d:0}])) {   // Line 126
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ŏ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 127
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"õ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ō");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 130
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ö");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ȯ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ọ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ǫ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɵ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ø");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 84
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"p̈");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṕ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṗ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"℗");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"£");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['#',{t:'d',d:0}])) {   // Line 120
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ȑ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ŕ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ř");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['&',{t:'d',d:0}])) {   // Line 125
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ȓ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɍ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['_',{t:'d',d:0}])) {   // Line 129
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṟ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṙ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṛ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ŗ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"®");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"₨");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(3,t,['s','\\',{t:'d',d:0}])) {   // Line 167
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"ß");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ś");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ŝ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"š");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(2,t,['@',{t:'d',d:0}])) {   // Line 131
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ș");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṡ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṣ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ş");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ß");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ſ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ť");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ŧ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,['_',{t:'d',d:0}])) {   // Line 129
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṯ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 130
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẗ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,['@',{t:'d',d:0}])) {   // Line 131
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ț");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṫ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṭ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ţ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"þ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"†");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"₮");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['`',{t:'d',d:0}])) {   // Line 119
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ù");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['#',{t:'d',d:0}])) {   // Line 120
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ȕ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ú");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['\"',{t:'d',d:0}])) {   // Line 122
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ű");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"û");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ǔ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['&',{t:'d',d:0}])) {   // Line 125
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ȗ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['*',{t:'d',d:0}])) {   // Line 126
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ŭ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 127
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ũ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ū");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 130
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ü");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['@',{t:'d',d:0}])) {   // Line 131
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ů");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ụ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ų");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"µ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 127
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṽ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṿ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)&&k.KFCM(2,t,['`',{t:'d',d:0}])) {   // Line 119
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẁ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẃ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ŵ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 130
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẅ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)&&k.KFCM(2,t,['@',{t:'d',d:0}])) {   // Line 131
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẘ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẇ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẉ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"₩");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ǯ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 130
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẍ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẋ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"×");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['`',{t:'d',d:0}])) {   // Line 119
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ỳ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ý");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ŷ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 127
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ỹ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ȳ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,[':',{t:'d',d:0}])) {   // Line 130
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ÿ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['@',{t:'d',d:0}])) {   // Line 131
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẙ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẏ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ỵ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ȝ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['$',{t:'d',d:0}])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"¥");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(3,t,['D','\\',{t:'d',d:0}])) {   // Line 146
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"ǅ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(3,t,['d','\\',{t:'d',d:0}])) {   // Line 147
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"ǆ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,['\'',{t:'d',d:0}])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ź");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,['^',{t:'d',d:0}])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẑ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,['%',{t:'d',d:0}])) {   // Line 124
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ž");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,['-',{t:'d',d:0}])) {   // Line 128
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ƶ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,['_',{t:'d',d:0}])) {   // Line 129
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẕ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,['.',{t:'d',d:0}])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ż");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẓ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,[',',{t:'d',d:0}])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ⱬ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,['=',{t:'d',d:0}])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ʒ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSLASH /* 0xDC */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"¦");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSLASH /* 0xDC */)&&k.KFCM(2,t,['|',{t:'d',d:0}])) {   // Line 233
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"|");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSLASH /* 0xDC */)&&k.KIFS(31,this.s55,t)) {   // Line 30
      r=m=1;
      k.KDC(0,t);
      r=this.g_Touch(t,e);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSLASH /* 0xDC */)&&this.s_option_key===this.s62) {   // Line 240
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"|");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKQUOTE /* 0xC0 */)&&k.KFCM(2,t,['\\',{t:'d',d:0}])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"¬");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKQUOTE /* 0xC0 */)&&k.KFCM(2,t,['~',{t:'d',d:0}])) {   // Line 227
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"~");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKQUOTE /* 0xC0 */)&&k.KIFS(31,this.s55,t)) {   // Line 30
      r=m=1;
      k.KDC(0,t);
      r=this.g_Touch(t,e);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKQUOTE /* 0xC0 */)&&this.s_option_key===this.s62) {   // Line 240
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"~");
      k.KDO(-1,t,0);
    }
    return r;
  };
  this.g_Touch=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    return r;
  };
}

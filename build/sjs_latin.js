
KeymanWeb.KR(new Keyboard_sjs_latin());

function Keyboard_sjs_latin()
{
  
  this.KI="Keyboard_sjs_latin";
  this.KN="sjs_latin";
  this.KMINVER="9.0";
  this.KV=null;
  this.KH='';
  this.KM=0;
  this.KBVER="1.0";
  this.KMBM=0x0010;
  this.KVER="10.0.1113.0";
  this.gs=function(t,e) {
    return this.g_main(t,e);
  };
  this.g_main=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, 0x4010, 0x31)) {   // Line 20
      r=m=1;
      k.KO(0,t,"!");
    }
    else if(k.KKM(e, 0x4010, 0xDE)) {   // Line 32
      r=m=1;
      k.KO(0,t,"\"");
    }
    else if(k.KKM(e, 0x4010, 0x33)) {   // Line 18
      r=m=1;
      k.KO(0,t,"#");
    }
    else if(k.KKM(e, 0x4010, 0x34)) {   // Line 17
      r=m=1;
      k.KO(0,t,"$");
    }
    else if(k.KKM(e, 0x4010, 0x35)) {   // Line 16
      r=m=1;
      k.KO(0,t,"%");
    }
    else if(k.KKM(e, 0x4010, 0x37)) {   // Line 14
      r=m=1;
      k.KO(0,t,"&");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"t",1)) {   // Line 107
      r=m=1;
      k.KO(1,t,"ṯ");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"s",1)) {   // Line 111
      r=m=1;
      k.KO(1,t,"š");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"d",1)) {   // Line 113
      r=m=1;
      k.KO(1,t,"ḏ");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"ḍ",1)) {   // Line 116
      r=m=1;
      k.KO(1,t,"ḓ");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"g",1)) {   // Line 118
      r=m=1;
      k.KO(1,t,"ḡ");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"j",1)) {   // Line 122
      r=m=1;
      k.KO(1,t,"ž");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"k",1)) {   // Line 123
      r=m=1;
      k.KO(1,t,"ḵ");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"z",1)) {   // Line 129
      r=m=1;
      k.KO(1,t,"ž");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"c",1)) {   // Line 133
      r=m=1;
      k.KO(1,t,"š");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"T",1)) {   // Line 137
      r=m=1;
      k.KO(1,t,"Ṯ");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"S",1)) {   // Line 141
      r=m=1;
      k.KO(1,t,"Š");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"D",1)) {   // Line 143
      r=m=1;
      k.KO(1,t,"Ḏ");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"Ḍ",1)) {   // Line 145
      r=m=1;
      k.KO(1,t,"Ḓ");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"G",1)) {   // Line 148
      r=m=1;
      k.KO(1,t,"Ḡ");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"J",1)) {   // Line 152
      r=m=1;
      k.KO(1,t,"Ž");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"K",1)) {   // Line 153
      r=m=1;
      k.KO(1,t,"Ḵ");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"Z",1)) {   // Line 159
      r=m=1;
      k.KO(1,t,"Ž");
    }
    else if(k.KKM(e, 0x4000, 0xDE)&&k.KCM(1,t,"C",1)) {   // Line 163
      r=m=1;
      k.KO(1,t,"Š");
    }
    else if(k.KKM(e, 0x4000, 0xDE)) {   // Line 79
      r=m=1;
      k.KO(0,t,"'");
    }
    else if(k.KKM(e, 0x4010, 0x39)) {   // Line 12
      r=m=1;
      k.KO(0,t,"(");
    }
    else if(k.KKM(e, 0x4010, 0x30)) {   // Line 11
      r=m=1;
      k.KO(0,t,")");
    }
    else if(k.KKM(e, 0x4010, 0x38)) {   // Line 13
      r=m=1;
      k.KO(0,t,"*");
    }
    else if(k.KKM(e, 0x4010, 0xBB)) {   // Line 10
      r=m=1;
      k.KO(0,t,"+");
    }
    else if(k.KKM(e, 0x4000, 0xBC)) {   // Line 71
      r=m=1;
      k.KO(0,t,",");
    }
    else if(k.KKM(e, 0x4000, 0xBD)) {   // Line 57
      r=m=1;
      k.KO(0,t,"-");
    }
    else if(k.KKM(e, 0x4000, 0xBE)) {   // Line 70
      r=m=1;
      k.KO(0,t,".");
    }
    else if(k.KKM(e, 0x4000, 0xBF)) {   // Line 69
      r=m=1;
      k.KO(0,t,"/");
    }
    else if(k.KKM(e, 0x4000, 0x30)) {   // Line 58
      r=m=1;
      k.KO(0,t,"0");
    }
    else if(k.KKM(e, 0x4000, 0x31)) {   // Line 67
      r=m=1;
      k.KO(0,t,"1");
    }
    else if(k.KKM(e, 0x4000, 0x32)) {   // Line 66
      r=m=1;
      k.KO(0,t,"2");
    }
    else if(k.KKM(e, 0x4000, 0x33)) {   // Line 65
      r=m=1;
      k.KO(0,t,"3");
    }
    else if(k.KKM(e, 0x4000, 0x34)) {   // Line 64
      r=m=1;
      k.KO(0,t,"4");
    }
    else if(k.KKM(e, 0x4000, 0x35)) {   // Line 63
      r=m=1;
      k.KO(0,t,"5");
    }
    else if(k.KKM(e, 0x4000, 0x36)) {   // Line 62
      r=m=1;
      k.KO(0,t,"6");
    }
    else if(k.KKM(e, 0x4000, 0x37)) {   // Line 61
      r=m=1;
      k.KO(0,t,"7");
    }
    else if(k.KKM(e, 0x4000, 0x38)) {   // Line 60
      r=m=1;
      k.KO(0,t,"8");
    }
    else if(k.KKM(e, 0x4000, 0x39)) {   // Line 59
      r=m=1;
      k.KO(0,t,"9");
    }
    else if(k.KKM(e, 0x4010, 0xBA)) {   // Line 33
      r=m=1;
      k.KO(0,t,":");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"q",1)) {   // Line 104
      r=m=1;
      k.KO(1,t,"ʼ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"y",1)) {   // Line 108
      r=m=1;
      k.KO(1,t,"ɣ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"a",1)) {   // Line 109
      r=m=1;
      k.KO(1,t,"ɛ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"d",1)) {   // Line 112
      r=m=1;
      k.KO(1,t,"ḓ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"g",1)) {   // Line 117
      r=m=1;
      k.KO(1,t,"ǧ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"j",1)) {   // Line 121
      r=m=1;
      k.KO(1,t,"ž");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"k",1)) {   // Line 124
      r=m=1;
      k.KO(1,t,"ḫ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"l",1)) {   // Line 126
      r=m=1;
      k.KO(1,t,"ḷ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"z",1)) {   // Line 128
      r=m=1;
      k.KO(1,t,"ẓ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"x",1)) {   // Line 131
      r=m=1;
      k.KO(1,t,"ḫ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"c",1)) {   // Line 132
      r=m=1;
      k.KO(1,t,"č");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"Q",1)) {   // Line 134
      r=m=1;
      k.KO(1,t,"ʼ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"Y",1)) {   // Line 138
      r=m=1;
      k.KO(1,t,"Ɣ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"A",1)) {   // Line 139
      r=m=1;
      k.KO(1,t,"Ɛ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"D",1)) {   // Line 142
      r=m=1;
      k.KO(1,t,"Ḓ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"G",1)) {   // Line 147
      r=m=1;
      k.KO(1,t,"Ǧ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"J",1)) {   // Line 151
      r=m=1;
      k.KO(1,t,"Ž");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"K",1)) {   // Line 154
      r=m=1;
      k.KO(1,t,"Ḫ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"L",1)) {   // Line 156
      r=m=1;
      k.KO(1,t,"Ḷ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"Z",1)) {   // Line 158
      r=m=1;
      k.KO(1,t,"Ẓ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"X",1)) {   // Line 161
      r=m=1;
      k.KO(1,t,"Ḫ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"C",1)) {   // Line 162
      r=m=1;
      k.KO(1,t,"Č");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"2",1)) {   // Line 166
      r=m=1;
      k.KO(1,t,"ʼ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"3",1)) {   // Line 167
      r=m=1;
      k.KO(1,t,"ɛ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"4",1)) {   // Line 168
      r=m=1;
      k.KO(1,t,"ġ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"5",1)) {   // Line 169
      r=m=1;
      k.KO(1,t,"ḫ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"6",1)) {   // Line 170
      r=m=1;
      k.KO(1,t,"ṭ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"7",1)) {   // Line 171
      r=m=1;
      k.KO(1,t,"ḥ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"8",1)) {   // Line 172
      r=m=1;
      k.KO(1,t,"ġ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,"9",1)) {   // Line 173
      r=m=1;
      k.KO(1,t,"q");
    }
    else if(k.KKM(e, 0x4000, 0xBA)) {   // Line 80
      r=m=1;
      k.KO(0,t,";");
    }
    else if(k.KKM(e, 0x4010, 0xBC)) {   // Line 24
      r=m=1;
      k.KO(0,t,"<");
    }
    else if(k.KKM(e, 0x4000, 0xBB)) {   // Line 56
      r=m=1;
      k.KO(0,t,"=");
    }
    else if(k.KKM(e, 0x4010, 0xBE)) {   // Line 23
      r=m=1;
      k.KO(0,t,">");
    }
    else if(k.KKM(e, 0x4010, 0xBF)) {   // Line 22
      r=m=1;
      k.KO(0,t,"?");
    }
    else if(k.KKM(e, 0x4010, 0x32)) {   // Line 19
      r=m=1;
      k.KO(0,t,"@");
    }
    else if(k.KKM(e, 0x4010, 0x41)) {   // Line 42
      r=m=1;
      k.KO(0,t,"A");
    }
    else if(k.KKM(e, 0x4010, 0x42)) {   // Line 27
      r=m=1;
      k.KO(0,t,"B");
    }
    else if(k.KKM(e, 0x4010, 0x43)) {   // Line 29
      r=m=1;
      k.KO(0,t,"C");
    }
    else if(k.KKM(e, 0x4010, 0x44)) {   // Line 40
      r=m=1;
      k.KO(0,t,"D");
    }
    else if(k.KKM(e, 0x4010, 0x45)) {   // Line 53
      r=m=1;
      k.KO(0,t,"E");
    }
    else if(k.KKM(e, 0x4010, 0x46)) {   // Line 39
      r=m=1;
      k.KO(0,t,"F");
    }
    else if(k.KKM(e, 0x4010, 0x47)) {   // Line 38
      r=m=1;
      k.KO(0,t,"G");
    }
    else if(k.KKM(e, 0x4010, 0x48)) {   // Line 37
      r=m=1;
      k.KO(0,t,"H");
    }
    else if(k.KKM(e, 0x4010, 0x49)) {   // Line 48
      r=m=1;
      k.KO(0,t,"I");
    }
    else if(k.KKM(e, 0x4010, 0x4A)) {   // Line 36
      r=m=1;
      k.KO(0,t,"J");
    }
    else if(k.KKM(e, 0x4010, 0x4B)) {   // Line 35
      r=m=1;
      k.KO(0,t,"K");
    }
    else if(k.KKM(e, 0x4010, 0x4C)) {   // Line 34
      r=m=1;
      k.KO(0,t,"L");
    }
    else if(k.KKM(e, 0x4010, 0x4D)) {   // Line 25
      r=m=1;
      k.KO(0,t,"M");
    }
    else if(k.KKM(e, 0x4010, 0x4E)) {   // Line 26
      r=m=1;
      k.KO(0,t,"N");
    }
    else if(k.KKM(e, 0x4010, 0x4F)) {   // Line 47
      r=m=1;
      k.KO(0,t,"O");
    }
    else if(k.KKM(e, 0x4010, 0x50)) {   // Line 46
      r=m=1;
      k.KO(0,t,"P");
    }
    else if(k.KKM(e, 0x4010, 0x51)) {   // Line 55
      r=m=1;
      k.KO(0,t,"Q");
    }
    else if(k.KKM(e, 0x4010, 0x52)) {   // Line 52
      r=m=1;
      k.KO(0,t,"R");
    }
    else if(k.KKM(e, 0x4010, 0x53)) {   // Line 41
      r=m=1;
      k.KO(0,t,"S");
    }
    else if(k.KKM(e, 0x4010, 0x54)) {   // Line 51
      r=m=1;
      k.KO(0,t,"T");
    }
    else if(k.KKM(e, 0x4010, 0x55)) {   // Line 49
      r=m=1;
      k.KO(0,t,"U");
    }
    else if(k.KKM(e, 0x4010, 0x56)) {   // Line 28
      r=m=1;
      k.KO(0,t,"V");
    }
    else if(k.KKM(e, 0x4010, 0x57)) {   // Line 54
      r=m=1;
      k.KO(0,t,"W");
    }
    else if(k.KKM(e, 0x4010, 0x58)) {   // Line 30
      r=m=1;
      k.KO(0,t,"X");
    }
    else if(k.KKM(e, 0x4010, 0x59)) {   // Line 50
      r=m=1;
      k.KO(0,t,"Y");
    }
    else if(k.KKM(e, 0x4010, 0x5A)) {   // Line 31
      r=m=1;
      k.KO(0,t,"Z");
    }
    else if(k.KKM(e, 0x4000, 0xDB)&&k.KCM(1,t,"r",1)) {   // Line 105
      r=m=1;
      k.KO(1,t,"ṛ");
    }
    else if(k.KKM(e, 0x4000, 0xDB)&&k.KCM(1,t,"t",1)) {   // Line 106
      r=m=1;
      k.KO(1,t,"ṭ");
    }
    else if(k.KKM(e, 0x4000, 0xDB)&&k.KCM(1,t,"s",1)) {   // Line 110
      r=m=1;
      k.KO(1,t,"ṣ");
    }
    else if(k.KKM(e, 0x4000, 0xDB)&&k.KCM(1,t,"d",1)) {   // Line 114
      r=m=1;
      k.KO(1,t,"ḍ");
    }
    else if(k.KKM(e, 0x4000, 0xDB)&&k.KCM(1,t,"ḏ",1)) {   // Line 115
      r=m=1;
      k.KO(1,t,"ḓ");
    }
    else if(k.KKM(e, 0x4000, 0xDB)&&k.KCM(1,t,"g",1)) {   // Line 119
      r=m=1;
      k.KO(1,t,"ġ");
    }
    else if(k.KKM(e, 0x4000, 0xDB)&&k.KCM(1,t,"h",1)) {   // Line 120
      r=m=1;
      k.KO(1,t,"ḥ");
    }
    else if(k.KKM(e, 0x4000, 0xDB)&&k.KCM(1,t,"l",1)) {   // Line 125
      r=m=1;
      k.KO(1,t,"ḷ");
    }
    else if(k.KKM(e, 0x4000, 0xDB)&&k.KCM(1,t,"z",1)) {   // Line 127
      r=m=1;
      k.KO(1,t,"ẓ");
    }
    else if(k.KKM(e, 0x4000, 0xDB)&&k.KCM(1,t,"x",1)) {   // Line 130
      r=m=1;
      k.KO(1,t,"ḫ");
    }
    else if(k.KKM(e, 0x4000, 0xDB)&&k.KCM(1,t,"R",1)) {   // Line 135
      r=m=1;
      k.KO(1,t,"Ṛ");
    }
    else if(k.KKM(e, 0x4000, 0xDB)&&k.KCM(1,t,"T",1)) {   // Line 136
      r=m=1;
      k.KO(1,t,"Ṭ");
    }
    else if(k.KKM(e, 0x4000, 0xDB)&&k.KCM(1,t,"S",1)) {   // Line 140
      r=m=1;
      k.KO(1,t,"Ṣ");
    }
    else if(k.KKM(e, 0x4000, 0xDB)&&k.KCM(1,t,"Ḏ",1)) {   // Line 144
      r=m=1;
      k.KO(1,t,"Ḓ");
    }
    else if(k.KKM(e, 0x4000, 0xDB)&&k.KCM(1,t,"D",1)) {   // Line 146
      r=m=1;
      k.KO(1,t,"Ḍ");
    }
    else if(k.KKM(e, 0x4000, 0xDB)&&k.KCM(1,t,"G",1)) {   // Line 149
      r=m=1;
      k.KO(1,t,"Ġ");
    }
    else if(k.KKM(e, 0x4000, 0xDB)&&k.KCM(1,t,"H",1)) {   // Line 150
      r=m=1;
      k.KO(1,t,"Ḥ");
    }
    else if(k.KKM(e, 0x4000, 0xDB)&&k.KCM(1,t,"L",1)) {   // Line 155
      r=m=1;
      k.KO(1,t,"Ḷ");
    }
    else if(k.KKM(e, 0x4000, 0xDB)&&k.KCM(1,t,"Z",1)) {   // Line 157
      r=m=1;
      k.KO(1,t,"Ẓ");
    }
    else if(k.KKM(e, 0x4000, 0xDB)&&k.KCM(1,t,"X",1)) {   // Line 160
      r=m=1;
      k.KO(1,t,"Ḫ");
    }
    else if(k.KKM(e, 0x4000, 0xDB)) {   // Line 92
      r=m=1;
      k.KO(0,t,"[");
    }
    else if(k.KKM(e, 0x4000, 0xDC)) {   // Line 90
      r=m=1;
      k.KO(0,t,"\\");
    }
    else if(k.KKM(e, 0x4000, 0xDD)) {   // Line 91
      r=m=1;
      k.KO(0,t,"]");
    }
    else if(k.KKM(e, 0x4010, 0x36)) {   // Line 15
      r=m=1;
      k.KO(0,t,"^");
    }
    else if(k.KKM(e, 0x4010, 0xBD)) {   // Line 9
      r=m=1;
      k.KO(0,t,"_");
    }
    else if(k.KKM(e, 0x4000, 0xC0)) {   // Line 68
      r=m=1;
      k.KO(0,t,"`");
    }
    else if(k.KKM(e, 0x4000, 0x41)) {   // Line 89
      r=m=1;
      k.KO(0,t,"a");
    }
    else if(k.KKM(e, 0x4000, 0x42)) {   // Line 74
      r=m=1;
      k.KO(0,t,"b");
    }
    else if(k.KKM(e, 0x4000, 0x43)) {   // Line 76
      r=m=1;
      k.KO(0,t,"c");
    }
    else if(k.KKM(e, 0x4000, 0x44)) {   // Line 87
      r=m=1;
      k.KO(0,t,"d");
    }
    else if(k.KKM(e, 0x4000, 0x45)) {   // Line 100
      r=m=1;
      k.KO(0,t,"e");
    }
    else if(k.KKM(e, 0x4000, 0x46)) {   // Line 86
      r=m=1;
      k.KO(0,t,"f");
    }
    else if(k.KKM(e, 0x4000, 0x47)) {   // Line 85
      r=m=1;
      k.KO(0,t,"g");
    }
    else if(k.KKM(e, 0x4000, 0x48)) {   // Line 84
      r=m=1;
      k.KO(0,t,"h");
    }
    else if(k.KKM(e, 0x4000, 0x49)) {   // Line 95
      r=m=1;
      k.KO(0,t,"i");
    }
    else if(k.KKM(e, 0x4000, 0x4A)) {   // Line 83
      r=m=1;
      k.KO(0,t,"j");
    }
    else if(k.KKM(e, 0x4000, 0x4B)) {   // Line 82
      r=m=1;
      k.KO(0,t,"k");
    }
    else if(k.KKM(e, 0x4000, 0x4C)) {   // Line 81
      r=m=1;
      k.KO(0,t,"l");
    }
    else if(k.KKM(e, 0x4000, 0x4D)) {   // Line 72
      r=m=1;
      k.KO(0,t,"m");
    }
    else if(k.KKM(e, 0x4000, 0x4E)) {   // Line 73
      r=m=1;
      k.KO(0,t,"n");
    }
    else if(k.KKM(e, 0x4000, 0x4F)) {   // Line 94
      r=m=1;
      k.KO(0,t,"o");
    }
    else if(k.KKM(e, 0x4000, 0x50)) {   // Line 93
      r=m=1;
      k.KO(0,t,"p");
    }
    else if(k.KKM(e, 0x4000, 0x51)) {   // Line 102
      r=m=1;
      k.KO(0,t,"q");
    }
    else if(k.KKM(e, 0x4000, 0x52)) {   // Line 99
      r=m=1;
      k.KO(0,t,"r");
    }
    else if(k.KKM(e, 0x4000, 0x53)) {   // Line 88
      r=m=1;
      k.KO(0,t,"s");
    }
    else if(k.KKM(e, 0x4000, 0x54)) {   // Line 98
      r=m=1;
      k.KO(0,t,"t");
    }
    else if(k.KKM(e, 0x4000, 0x55)) {   // Line 96
      r=m=1;
      k.KO(0,t,"u");
    }
    else if(k.KKM(e, 0x4000, 0x56)) {   // Line 75
      r=m=1;
      k.KO(0,t,"v");
    }
    else if(k.KKM(e, 0x4000, 0x57)) {   // Line 101
      r=m=1;
      k.KO(0,t,"w");
    }
    else if(k.KKM(e, 0x4000, 0x58)) {   // Line 77
      r=m=1;
      k.KO(0,t,"x");
    }
    else if(k.KKM(e, 0x4000, 0x59)) {   // Line 97
      r=m=1;
      k.KO(0,t,"y");
    }
    else if(k.KKM(e, 0x4000, 0x5A)) {   // Line 78
      r=m=1;
      k.KO(0,t,"z");
    }
    else if(k.KKM(e, 0x4010, 0xDB)) {   // Line 45
      r=m=1;
      k.KO(0,t,"{");
    }
    else if(k.KKM(e, 0x4010, 0xDC)) {   // Line 43
      r=m=1;
      k.KO(0,t,"|");
    }
    else if(k.KKM(e, 0x4010, 0xDD)) {   // Line 44
      r=m=1;
      k.KO(0,t,"}");
    }
    else if(k.KKM(e, 0x4010, 0xC0)) {   // Line 21
      r=m=1;
      k.KO(0,t,"~");
    }
    return r;
  };
}

import sys
import csv
import re
import unicodedata
import io

def printKMN():
    print('store(&Version) ','"10.0"')
    print('store(&NAME) ',KbMetaInfo['KBName'])
    print('store(&WINDOWSLANGUAGES) ',KbMetaInfo['LocaleID'])
    print('store(&LANGUAGE) ',KbMetaInfo['LocaleID'])

def pretty(d, indent=0):
   for key, value in d.items():
      print('\t' * indent + str(key))
      if isinstance(value, dict):
         pretty(value, indent+1)
      else:
         print('\t' * (indent+1) + str(value))

inFileName = "CAMA2017.klc"
KbMetaInfo = dict()
KBShiftStates = dict()
KBCodes = dict()
KBKeys = dict()
KbKeysBool = dict()
DeadKeys = dict()
iDK = 0
Mode = ""
lineCount = 0
currentDeadKey = ""
infile = open(inFileName, mode='r', encoding='utf-16')
if (inFileName[-4:] == ".klc"):
    iLevels = 0
    iKBCode = 0
    for line in infile:
        lineCount = lineCount + 1
        if (line =='\n'):
            thing = 0
        else:
            line = line[:-1]
            if line.startswith("KBD"):
                r = line.split("\t")
                KbMetaInfo = {'KBID':r[1],'KBName':r[2]}
                continue
            if line.startswith("COPYRIGHT"):
                r = line.split("\t")
                KbMetaInfo.update({'Copyright':r[1]})
                continue
            if line.startswith("COMPANY"):
                r = line.split("\t")
                KbMetaInfo.update({'Company':r[1]})
                continue
            if line.startswith("LOCALENAME"):
                r = line.split("\t")
                KbMetaInfo.update({'Locale':r[1]})
                continue
            if line.startswith("LOCALEID"):
                r = line.split("\t")
                KbMetaInfo.update({'LocaleID':r[1]})
                continue
            if line.startswith("VERSION"):
                r = line.split("\t")
                KbMetaInfo.update({'Company':r[1]})
                continue
            
            if line.startswith("//SC"):
                r = line.split("\t")
                if (len(r) == 9):
                    #KBKeys['num'] = [int(r[4]),int(r[5]),int(r[6]),int(r[7]),int(r[8])]
                    #KBKeys['isShift'] = [KBShiftStates[str(r[4])]['Shift'],KBShiftStates[str(r[5])]['Shift'],KBShiftStates[str(r[6])]['Shift'],KBShiftStates[str(r[7])]['Shift'],KBShiftStates[str(r[8])]['Shift']]
                    #KBKeys['isCtrl'] = [KBShiftStates[str(r[4])]['Ctrl'],KBShiftStates[str(r[5])]['Ctrl'],KBShiftStates[str(r[6])]['Ctrl'],KBShiftStates[str(r[7])]['Ctrl'],KBShiftStates[str(r[8])]['Ctrl']]
                    #KBKeys['isAlt'] = [KBShiftStates[str(r[4])]['Alt'],KBShiftStates[str(r[5])]['Alt'],KBShiftStates[str(r[6])]['Alt'],KBShiftStates[str(r[7])]['Alt'],KBShiftStates[str(r[8])]['Alt']]
                    KBKeys = ['NoMod',
                                      KBShiftStates[str(r[5])]['Shift']+KBShiftStates[str(r[5])]['Alt']+KBShiftStates[str(r[5])]['Ctrl'],
                                      KBShiftStates[str(r[6])]['Shift']+KBShiftStates[str(r[6])]['Alt']+KBShiftStates[str(r[6])]['Ctrl'],
                                      KBShiftStates[str(r[7])]['Shift']+KBShiftStates[str(r[7])]['Alt']+KBShiftStates[str(r[7])]['Ctrl'],
                                      KBShiftStates[str(r[8])]['Shift']+KBShiftStates[str(r[8])]['Alt']+KBShiftStates[str(r[8])]['Ctrl']]

                continue

            if line.startswith("//"):
                continue

            if Mode == "Keyname":
                #Do cool stuff
                boo = 0

            ##Set Modes
            if line.startswith("KEYNAME"):
                Mode = 'Keyname'
                #Add parse

            if line.startswith("DEADKEY"):
                Mode = 'DeadKey'
                r = line.split("\t")
                currentDeadKey = r[1]
                continue
            
            if Mode == "DeadKey":
                r = line.split("\t")
                DeadKeys[iDK] = {'DK':currentDeadKey, "Key":r[0],"Result":r[1]}
                iDK += 1
                continue



            ## Read Modes
            if Mode == "Layout":
                r = line.split("\t")
                UNames = r[10][3:].split(', ')
                ##                  Scancode  VK
                longString = {"SC":r[0],"VK":r[1],"CAP":r[3],
                                    KBKeys[0]:{'Char':r[4],'UTF8':r[4],'UName':UNames[0],'DK':False},
                                    KBKeys[1]:{'Char':r[5],'UTF8':r[5],'UName':UNames[1],'DK':False},
                                    KBKeys[2]:{'Char':r[6],'UTF8':r[6],'UName':UNames[2],'DK':False},
                                    KBKeys[3]:{'Char':r[7],'UTF8':r[7],'UName':UNames[3],'DK':False},
                                    KBKeys[4]:{'Char':r[8],'UTF8':r[8],'UName':UNames[4],'DK':False}
                                    }
                KBCodes[iKBCode] = longString
                codeUTF = ""
                codeChar = ""
                for firstLevel in KBCodes[iKBCode].items():
                    if "Char" in firstLevel[1]:
                        if firstLevel[1]['Char'] == '-1':
                            firstLevel[1]['Char'] = ''
                            firstLevel[1]['UTF8'] = ''
                        if len(firstLevel[1]['Char']) == 1:
                            codeUTF = hex(ord(firstLevel[1]['Char']))
                            firstLevel[1]['UTF8'] = codeUTF
                        if firstLevel[1]['Char'].endswith("@"):
                            firstLevel[1]['DK'] = True
                            firstLevel[1]['Char'] = firstLevel[1]['Char'][:-1]
                            firstLevel[1]['UTF8'] = firstLevel[1]['UTF8'][:-1]
                        if len(firstLevel[1]['Char']) == 4:
                            codeChar = chr(int(firstLevel[1]['Char'],16))
                            firstLevel[1]['Char'] = codeChar
                        continue
                    else:
                        continue    
                iKBCode += 1
                continue


            if line.startswith("LAYOUT"):
                Mode = "Layout"
                continue

            if Mode == "ShiftState":
                SSScan = re.compile(r'(\d+)')
                r = line.split("\t")
                Column = SSScan.search(r[0]).group(1)
                ShiftRE = re.compile("Shft")
                stateIsShifted = ""
                stateIsCtrled = ""
                stateIsAlted = ""
                if ShiftRE.search(line):
                    stateIsShifted = "Shift"
                CtrlRE = re.compile("Ctrl")
                if CtrlRE.search(line):
                    stateIsCtrled = "Ctrl"
                AltRE = re.compile("Alt")    
                if AltRE.search(line):
                    stateIsAlted = "Alt"
                KBShiftStates[r[0]] = {"SSID":r[0],"Column":Column,"Shift":stateIsShifted,"Ctrl":stateIsCtrled,"Alt":stateIsAlted}
                iLevels = iLevels + 1
                continue

            if line.startswith("SHIFTSTATE"):
                Mode = "ShiftState"
                continue            

    #pretty(KbMetaInfo,4)
    #pretty(KBCodes,4)
    #pretty(DeadKeys,4)
    printKMN()


if (inFileName[-4:] == ".kmn"):
    print("Not Parsed")

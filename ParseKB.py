import codecs
import re
import json
import copy
import functools
from pprint import pprint
from itertools import groupby

#ToDo: Deal with False Positives on missing Keys
#Go all in with R/L or not. Maybe ignore RALT if Alt and CTRL are used. 
#deal with 5-digit Unicode
combiners = ["Mn", "Me", "Mc"]
isVerbose = False
kbProps = {}
kbLinks = [
        {"linux": "TLDE", "scancode": "29", "microsoft": "OEM_3", "caps": False, "keyman": "K_BKQUOTE", 'row': 0},
        {"linux": "AE01", "scancode": "02", "microsoft": "1", "caps": False, "keyman": "K_1", 'row': 0},
        {"linux": "AE02", "scancode": "03", "microsoft": "2", "caps": False, "keyman": "K_2", 'row': 0},
        {"linux": "AE03", "scancode": "04", "microsoft": "3", "caps": False, "keyman": "K_3", 'row': 0},
        {"linux": "AE04", "scancode": "05", "microsoft": "4", "caps": False, "keyman": "K_4", 'row': 0},
        {"linux": "AE05", "scancode": "06", "microsoft": "5", "caps": False, "keyman": "K_5", 'row': 0},
        {"linux": "AE06", "scancode": "07", "microsoft": "6", "caps": False, "keyman": "K_6", 'row': 0},
        {"linux": "AE07", "scancode": "08", "microsoft": "7", "caps": False, "keyman": "K_7", 'row': 0},
        {"linux": "AE08", "scancode": "09", "microsoft": "8", "caps": False, "keyman": "K_8", 'row': 0},
        {"linux": "AE09", "scancode": "0a", "microsoft": "9", "caps": False, "keyman": "K_9", 'row': 0},
        {"linux": "AE10", "scancode": "0b", "microsoft": "0", "caps": False, "keyman": "K_0", 'row': 0},
        {"linux": "AE11", "scancode": "0c", "microsoft": "OEM_MINUS", "caps": False, "keyman": "K_HYPHEN", 'row': 0},
        {"linux": "AE12", "scancode": "0d", "microsoft": "OEM_PLUS", "caps": False, "keyman": "K_EQUAL", 'row': 0},
        {"linux": "AD01", "scancode": "10", "microsoft": "Q", "caps": True, "keyman": "K_Q", 'row': 1},
        {"linux": "AD02", "scancode": "11", "microsoft": "W", "caps": True, "keyman": "K_W", 'row': 1},
        {"linux": "AD03", "scancode": "12", "microsoft": "E", "caps": True, "keyman": "K_E", 'row': 1},
        {"linux": "AD04", "scancode": "13", "microsoft": "R", "caps": True, "keyman": "K_R", 'row': 1},
        {"linux": "AD05", "scancode": "14", "microsoft": "T", "caps": True, "keyman": "K_T", 'row': 1},
        {"linux": "AD06", "scancode": "15", "microsoft": "Y", "caps": True, "keyman": "K_Y", 'row': 1},
        {"linux": "AD07", "scancode": "16", "microsoft": "U", "caps": True, "keyman": "K_U", 'row': 1},
        {"linux": "AD08", "scancode": "17", "microsoft": "I", "caps": True, "keyman": "K_I", 'row': 1},
        {"linux": "AD09", "scancode": "18", "microsoft": "O", "caps": True, "keyman": "K_O", 'row': 1},
        {"linux": "AD10", "scancode": "19", "microsoft": "P", "caps": True, "keyman": "K_P", 'row': 1},
        {"linux": "AD11", "scancode": "1a", "microsoft": "OEM_4", "caps": False, "keyman": "K_LBRKT", 'row': 1},
        {"linux": "AD12", "scancode": "1b", "microsoft": "OEM_6", "caps": False, "keyman": "K_RBRKT", 'row': 1},
        {"linux": "BKSL", "scancode": "2b", "microsoft": "OEM_5", "caps": False, "keyman": "K_BKSLASH", 'row': 1},
        {"linux": "AC01", "scancode": "1e", "microsoft": "A", "caps": True, "keyman": "K_A", 'row': 2},
        {"linux": "AC02", "scancode": "1f", "microsoft": "S", "caps": True, "keyman": "K_S", 'row': 2},
        {"linux": "AC03", "scancode": "20", "microsoft": "D", "caps": True, "keyman": "K_D", 'row': 2},
        {"linux": "AC04", "scancode": "21", "microsoft": "F", "caps": True, "keyman": "K_F", 'row': 2},
        {"linux": "AC05", "scancode": "22", "microsoft": "G", "caps": True, "keyman": "K_G", 'row': 2},
        {"linux": "AC06", "scancode": "23", "microsoft": "H", "caps": True, "keyman": "K_H", 'row': 2},
        {"linux": "AC07", "scancode": "24", "microsoft": "J", "caps": True, "keyman": "K_J", 'row': 2},
        {"linux": "AC08", "scancode": "25", "microsoft": "K", "caps": True, "keyman": "K_K", 'row': 2},
        {"linux": "AC09", "scancode": "26", "microsoft": "L", "caps": True, "keyman": "K_L", 'row': 2},
        {"linux": "AC10", "scancode": "27", "microsoft": "OEM_1", "caps": False, "keyman": "K_COLON", 'row': 2},
        {"linux": "AC11", "scancode": "28", "microsoft": "OEM_7", "caps": False, "keyman": "K_QUOTE", 'row': 2},
        {"linux": "K102", "scancode": "56", "microsoft": "OEM_102", "caps": False, "keyman": "K_OE2", 'row': 3},
        {"linux": "AB01", "scancode": "2c", "microsoft": "Z", "caps": True, "keyman": "K_Z", 'row': 3},
        {"linux": "AB02", "scancode": "2d", "microsoft": "X", "caps": True, "keyman": "K_X", 'row': 3},
        {"linux": "AB03", "scancode": "2e", "microsoft": "C", "caps": True, "keyman": "K_C", 'row': 3},
        {"linux": "AB04", "scancode": "2f", "microsoft": "V", "caps": True, "keyman": "K_V", 'row': 3},
        {"linux": "AB05", "scancode": "30", "microsoft": "B", "caps": True, "keyman": "K_B", 'row': 3},
        {"linux": "AB06", "scancode": "31", "microsoft": "N", "caps": True, "keyman": "K_N", 'row': 3},
        {"linux": "AB07", "scancode": "32", "microsoft": "M", "caps": True, "keyman": "K_M", 'row': 3},
        {"linux": "AB08", "scancode": "33", "microsoft": "OEM_COMMA", "caps": False, "keyman": "K_COMMA", 'row': 3},
        {"linux": "AB09", "scancode": "34", "microsoft": "OEM_PERIOD", "caps": False, "keyman": "K_PERIOD", 'row': 3},
        {"linux": "AB10", "scancode": "35", "microsoft": "OEM_2", "caps": False, "keyman": "K_SLASH", 'row': 3},
        {"linux": "SPCE", "scancode": "39", "microsoft": "SPACE", "caps": False, "keyman": "K_SPACE", 'row': 4},
        {"linux": "KPDL", "scancode": "53", "microsoft": "DECIMAL", "caps": False, "keyman": "K_NPDOT", 'row': 5}
    ]
def append(inList,item):
    if inList is None:
        inList = []
    if isinstance(item,list):
        for thing in item:
            inList.append(thing)
    else:
        inList.append(item)

def parseKB(filenameToParse, expand = False):
    if filenameToParse not in keyboardRepo:
        thisKeyboard = keyboardDefinition(filenameToParse)
        if (filenameToParse[-4:] == ".klc"):
            thisKeyboard.setNative("MSKLC")
            parseMSK(thisKeyboard, filenameToParse)
            GenerateKMRules(thisKeyboard)
            if not filenameToParse.startswith("KLC/"):
                printKMN(thisKeyboard)
            keyboardRepo[filenameToParse] = thisKeyboard
        elif (filenameToParse[-4:] == ".kmn"):
            thisKeyboard.setNative("Keyman")
            print("\n=================\n" + filenameToParse + "\n=================\n")
            parseKeyman(thisKeyboard, filenameToParse, expand)
            keyboardRepo[filenameToParse] = thisKeyboard
    if filenameToParse in keyboardRepo:
        return keyboardRepo[filenameToParse]
    else:
        return False
def parseMSK(passedKeyboard, mskFilename):
    print("\nParsing Microsoft Keyboard")
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
    infile = open(mskFilename, mode='r', encoding='utf-16')
    iLevels = 0
    iKBCode = 0
    for line in infile:
        lineCount = lineCount + 1
        if (line =='\n') or (line.startswith("//")):
            thing = 0
        else:
            line = line[:-1]
            if line.startswith("KBD"):
                r = line.split("\t")
                KbMetaInfo = {'KBID':r[1],'KBName':r[2]}
                passedKeyboard.setVariable({'KBID':r[1]})
                passedKeyboard.setVariable({'KBName':r[2]})                    
            elif line.startswith("COPYRIGHT"):
                r = line.split("\t")
                KbMetaInfo.update({'Copyright':r[1]})
                passedKeyboard.setVariable({'Copyright':r[1]})
            elif line.startswith("COMPANY"):
                r = line.split("\t")
                KbMetaInfo.update({'Company':r[1]})
                passedKeyboard.setVariable({'Company':r[1]})
            elif line.startswith("LOCALENAME"):
                r = line.split("\t")
                KbMetaInfo.update({'Locale':r[1]})
                passedKeyboard.setVariable({'Locale':r[1]})
            elif line.startswith("LOCALEID"):
                r = line.split("\t")
                KbMetaInfo.update({'LocaleID':r[1]})
                passedKeyboard.setVariable({'LocaleID':r[1]})
            elif line.startswith("VERSION"):
                r = line.split("\t")
                KbMetaInfo.update({'Version':r[1]})
                passedKeyboard.setVariable({'Version':r[1]})
            elif line.startswith("//SC"):
                r = line.split("\t")
                for bit in r:
                    if r.index(bit) > 3:
                        passedKeyboard.addMSKIndex(bit)
                #TODO Solve this:

            ##Set Modes
            elif line.startswith("DESCRIPTIONS"):
                Mode = 'Descriptions'
                #Add parse
            elif line.startswith("KEYNAME"):
                Mode = 'Keyname'
            elif line.startswith("LIGATURE"):
                Mode = 'Ligature'
                #Add parse
            elif line.startswith("DEADKEY"):
                Mode = 'DeadKey'
                r = line.split("\t")
                currentDeadKey = r[1]
            elif line.startswith("SHIFTSTATE"):
                Mode = "ShiftState" 
            elif line.startswith("LAYOUT"):
                Mode = "Layout"
            elif line.startswith("LANGUAGENAMES"):
                Mode = "LanguageNames"
            elif line.startswith("ENDKB"):
                Mode = "Done"
            elif Mode == "DeadKey":
                r = line.split("\t")
                result = []
                #for letter in bit:
                #    result['Code'].append(u'%04x'%ord(letter))
                passedKeyboard.addMSKDeadkey({'DK':currentDeadKey, "Key":r[0],"Result":r[1]})
                iDK += 1
                        

            elif Mode == "Keyname":
                #Do cool stuff
                boo = 0
            elif Mode == "Descriptions":
                #Do cool stuff
                line = line.replace("\t\t","\t")
                k = line.split("\t")
                passedKeyboard.setVariable({"Name":k[1]})
            elif Mode == "LanguageNames":
                #Do cool stuff
                line = line.replace("\t\t","\t")
                k = line.split("\t")
                passedKeyboard.setVariable({"WinLanguageID":k[0]})
                passedKeyboard.setVariable({"WinLanguageName":k[1]})
            elif Mode == 'Ligature':
                line = line.replace("\t\t","\t")
                k = line.split("\t")
                index = 0
                vk = k[0]
                order = ""
                #find o in list, get column, output all
                relevantLine = passedKeyboard.getMSKeyDef(vk, "MSKLC")
                for bit in k:
                    if index == 0:
                        vk = bit
                    elif index == 1:
                        order = bit
                    elif bit.startswith("//"):
                        append(relevantLine['Names'],bit)
                    elif bit != "":
                        if len(bit) == 4:
                            #problem hereXXX
                            column = passedKeyboard.getColumnByOrder(order)
                            targetKey = [x for x in relevantLine['Keys'] if x['Column'] == column][0]
                            if 'Code' in targetKey:
                                append(targetKey['Code'],bit.upper())
                            else:
                                targetKey['Code'] = [bit.upper()]
                        else:
                            Print("What is this?")
                    index += 1
                            

            ## Read Modes
            elif Mode == "Layout" and not line.startswith("//SC"): #todo remove startswith
                line = line.replace("\t\t","\t")
                k = line.split("\t")
                MSKLine = {}
                index = 0
                for bit in k:

                    if index == 0:
                        MSKLine['SC'] = bit
                    elif index == 1:
                        MSKLine['VK'] = bit
                    elif index == 2:
                        MSKLine['CAPS'] = bool(int(bit))
                        if MSKLine['CAPS'] == True:
                            passedKeyboard.setVariable({'containsNCAPS': True})
                            passedKeyboard.setVariable({'containsCAPS': True})
                    elif bit.startswith("//"):
                        MSKLine['Names'] = bit[3:].split(', ')
                    elif index > 2:
                        currentKey = {}
                        currentKey['Column'] = index+1
                        if len(bit) == 4:
                            currentKey['Code'] = [bit]
                            currentKey['Glyph'] = chr(int(bit,16))
                        elif bit == "%%":
                            currentKey['Lig'] = True
                        elif len(bit) == 5:
                            currentKey['DK'] = True
                            #TODO Can 2 codes exist? If so, need to move this down.
                            currentKey['Code'] = [bit[:-1]]
                        elif bit == '-1':
                            currentKey['Code'] = ["BEEP"]
                            #todo appears twice
                        else:
                            currentKey['Glyph'] = bit
                            currentKey['Code'] = []
                            for letter in bit:
                                append(currentKey['Code'],u'%04x'%ord(letter))
                        if 'Keys' not in MSKLine:
                            MSKLine['Keys'] = [currentKey]
                        else:
                            append(MSKLine['Keys'],currentKey)
                        #CurrentColumn = [c for c in passedKeyboard.MSKSShiftStateList if c['Column'] == column][0]
                    index += 1
                     
                passedKeyboard.addMSKLine(MSKLine)
                            
            elif Mode == "ShiftState":
                SSScan = re.compile(r'Column (\d+)')
                ss = line.split("\t")
                Column = int(SSScan.search(ss[1]).group(1))
                ShiftRE = re.compile("Shft")
                stateIsShifted = False
                stateIsCtrled = False
                stateIsAlted = False
                stateIsRAlted = False
                if ShiftRE.search(line):
                    stateIsShifted = True
                    passedKeyboard.setVariable({'containsSHIFT': True})
                CtrlRE = re.compile("Ctrl")
                if CtrlRE.search(line):
                    stateIsCtrled = True
                AltRE = re.compile("Alt")    
                if AltRE.search(line):
                    stateIsAlted = True
                    if stateIsCtrled and stateIsCtrled:
                        passedKeyboard.setVariable({'containsRALT': True})
                        stateIsAlted = False
                        stateIsCtrled = False
                        stateIsRAlted = True
                    elif stateIsCtrled:
                        passedKeyboard.setVariable({'containsCTRL': True})
                    elif stateIsAlted:
                        passedKeyboard.setVariable({'containsALT': True})

                passedKeyboard.addMSKStates({"SSID":ss[0],"Column":Column,"Shift":stateIsShifted,"Ctrl":stateIsCtrled,"Alt":stateIsAlted,"RAlt":stateIsRAlted})
                iLevels = iLevels + 1
                       
    infile.close()
    print("Finished Parsing Microsoft Keyboard\n")

def GenerateKMRules(passedKeyboard):
    if passedKeyboard.NativeFormat == "MSKLC":
        comboNum = 1
        
        beginline = {'inputs':['begin','Unicode'],'outputs': ['USE(MAIN)'],'type': 'goTo','lineCount': comboNum}
        beginline['line'] = generateLine(beginline)
        comboNum += 1
        passedKeyboard.addCombo(beginline)

        mainline = {'inputs':['group(main) using keys'],'type': 'structural','lineCount': comboNum}
        mainline['line'] = generateLine(beginline)
        comboNum += 1
        passedKeyboard.addCombo(mainline)
        
        for line in passedKeyboard.MSKLineList:
            KeymanKeyCode = getCrossPlatformKeycode(line['SC'],'MSKLC','Keyman')
            for key in line['Keys']:
                currentCombo = {}
                currentCombo['baseKey'] = KeymanKeyCode
                if 'DK' in key:
                    currentCombo['type'] = "rule.dk"
                else:
                    currentCombo['type'] = 'rule'
                try:
                    currentColumn = [c for c in passedKeyboard.MSKStateList if c['Column'] == key['Column']][0]
                except:
                    print("Error: Column " + str(key['Column']) + " doesn't exist!")
                currentCombo['inputs'] = ['+']
                KMKeyDef = {}
                fullKeyString = "["
                KMKeyDef["isNCAPS"] = True
                fullKeyString += "NCAPS"
                #MSK interprets CTRL+ALT instead of RALT
                if (currentColumn['Ctrl'] and currentColumn['Alt']):
                    KMKeyDef["isRALT"] = True
                    fullKeyString += " RALT"
                    KMKeyDef["isALT"] = False
                    KMKeyDef["isCTRL"] = False
                else:
                    if currentColumn['Ctrl']:
                        KMKeyDef["isCTRL"] = currentColumn['Ctrl']
                        if currentColumn['Ctrl']:
                            fullKeyString += " CTRL"
                    else:
                        KMKeyDef["isCTRL"] = False
                    if currentColumn['Alt']:
                        KMKeyDef["isALT"] = currentColumn['Alt']
                        if currentColumn['Alt']:
                            fullKeyString += " ALT"
                    else:
                        KMKeyDef["isALT"] = False
                    if currentColumn['RAlt']:
                        KMKeyDef["isRALT"] = currentColumn['RAlt']
                        if currentColumn['RAlt']:
                            fullKeyString += " RALT"
                    else:
                        KMKeyDef["isRALT"] = False
                KMKeyDef["isSHIFT"] = currentColumn['Shift']
                if currentColumn['Shift']:
                    fullKeyString += " SHIFT"
                KMKeyDef["isLALT"] = False
                KMKeyDef["isRCTRL"] = False
                KMKeyDef["isLCTRL"] = False
                KMKeyDef["isCAPS"] = False
                KMKeyDef['isKey'] = KeymanKeyCode
                fullKeyString += " " + KeymanKeyCode +']'
                KMKeyDef['fullKey'] = fullKeyString
                currentCombo['comboFullKey'] = fullKeyString
                append(currentCombo['inputs'],KMKeyDef)
                
                #Handle Outputs here
                currentCombo['outputs'] = []
                if not 'DK' in key:
                    for output in key['Code']:
                        if output == 'BEEP':
                            append(currentCombo['outputs'],output)
                            currentCombo['type'] = "rule.deadEnd"
                        else:
                            append(currentCombo['outputs'],"U+" + output)

                else:
                    for output in key['Code']:
                        append(currentCombo['outputs'],"DK(" + output + ")")
                        currentCombo['type'] = "rule.dk"
                currentCombo['lineCount'] = comboNum
                comboNum += 1
                currentCombo['line'] = generateLine(currentCombo)
                s = " "
                currentCombo['baseOutput'] = s.join(currentCombo['outputs'])
                passedKeyboard.addCombo(currentCombo)

                #Handle Caps Alternates, these need to be explicit in KM
                if not line['CAPS']: # is true
                    capsCurrentCombo  = copy.deepcopy(currentCombo)
                    for input in capsCurrentCombo['inputs']:
                        if 'fullKey' in input:
                            input["isCAPS"] = True
                            input["isNCAPS"] = False
                            input["fullKey"] = generateFullKey(input)
                            capsCurrentCombo['comboFullKey'] = input["fullKey"]
                    capsCurrentCombo['lineCount'] = comboNum
                    
                    comboNum += 1
                    capsCurrentCombo['line'] = generateLine(capsCurrentCombo)
                    s = " "
                    capsCurrentCombo['baseOutput'] = s.join(capsCurrentCombo['outputs'])
                    passedKeyboard.addCombo(capsCurrentCombo)
                elif line['CAPS']:
                    passedKeyboard.setCapsAffectsKeyboard(True)
                    skip = False
                    capsCurrentCombo  = copy.deepcopy(currentCombo)
                    for input in capsCurrentCombo['inputs']:
                        if 'fullKey' in input:
                            if (input['isNCAPS'] == True) and (input["isCAPS"] == False) and (input["isSHIFT"] == False):
                                input['isNCAPS'] = False
                                input["isCAPS"] = True
                                input["isSHIFT"] = True
                            elif (input["isSHIFT"] == True):
                                input['isNCAPS'] = False
                                input["isCAPS"] = True
                                input["isSHIFT"] = False
                            elif (input['isNCAPS'] == True) and (input["isCAPS"] == False) and (input["isSHIFT"] == True) and (input["isRalt"] == True):
                                input['isNCAPS'] = False
                                input["isCAPS"] = True
                                input["isSHIFT"] = False
                            input["fullKey"] = generateFullKey(input)
                            capsCurrentCombo['comboFullKey'] = input["fullKey"]
                    capsCurrentCombo['lineCount'] = comboNum
                    comboNum += 1
                    capsCurrentCombo['line'] = generateLine(capsCurrentCombo)
                    s = " "
                    capsCurrentCombo['baseOutput'] = s.join(capsCurrentCombo['outputs'])
                    if not skip:
                        passedKeyboard.addCombo(capsCurrentCombo)
                    skip = False
        if len(passedKeyboard.MSKDeadkeyList) > 0:
            currentMatchCombo = {}
            currentMatchCombo['type'] = 'goTo'
            currentMatchCombo['inputs'] = ['match']
            currentMatchCombo['outputs'] = ['USE(deadkeys)']
            currentMatchCombo['lineCount'] = comboNum
            comboNum += 1
            currentMatchCombo['line'] = generateLine(currentMatchCombo)
            passedKeyboard.addCombo(currentMatchCombo)

            currentGroupCombo = {}
            currentGroupCombo['type'] = 'structural'
            currentGroupCombo['inputs'] = ['group(deadkeys)']
            currentGroupCombo['lineCount'] = comboNum
            comboNum += 1
            currentGroupCombo['line'] = generateLine(currentGroupCombo)
            passedKeyboard.addCombo(currentGroupCombo)

        for dk in passedKeyboard.MSKDeadkeyList:
            currentDKCombo = {}
            currentDKCombo['baseKey'] = 'dk(' + dk['DK'].upper() + ')'
            currentDKCombo['type'] = 'rule.generated'
            currentDKCombo['inputs'] = ['dk(' + dk['DK'].upper() + ')','U+' + dk['Key'].upper()]
            currentDKCombo['outputs'] = ['U+' + dk['Result'].upper()]
            currentDKCombo['lineCount'] = comboNum
            comboNum += 1
            currentDKCombo['line'] = generateLine(currentDKCombo)
            s = " "
            currentDKCombo['baseOutput'] = s.join(currentDKCombo['outputs'])
            passedKeyboard.addCombo(currentDKCombo)
            #finish
        print('Finished Dk\n')

def printKMN(passedKeyboard, forcedFilter = []):
    f = open("outputs/" + passedKeyboard.getKeyboardName()[:-4] + '.kmn', 'w', encoding="utf-8")
    if passedKeyboard.NativeFormat == "MSKLC":
        f.write("store(&NAME) '"+ passedKeyboard.getVariable('Name') + "'"+"\n")
        f.write("store(&COPYRIGHT) '"+ passedKeyboard.getVariable('Copyright') + "'"+"\n")
        f.write("store(&KEYBOARDVERSION) '"+ passedKeyboard.getVariable('Version') + "'"+"\n\n")
        #f.write("store(&kmw_rtl) '" + 1 + "'")
                #ToDo Calculate RTL
        f.write("store(&VISUALKEYBOARD)'" + passedKeyboard.getKeyboardName()[:-4] + ".kvks'")

        f.write("begin Unicode > use(main)\n")
        f.write("group(main) using keys\n")

        filterKeys = []
        #Testing to see if some rules can be filtered because there are no valid rules.
        needCtrl = False
        needLCtrl = False
        needRCtrl = False
        needAlt = False
        needLAlt = False
        needRAlt = False
        needShift = False
        needNCaps = False
        needCaps = False
        for line in passedKeyboard.getCombos():
            if 'inputs' in line and 'type' in line and line['type'] == "rule":
                for input in line['inputs']:
                    if "fullKey" in input:
                        if input['isCTRL']:
                            needCtrl = True
                        if input['isLCTRL']:
                            needLCtrl = True
                        if input['isRCTRL']:
                            needRCtrl = True
                        if input['isALT']:
                            needAlt = True
                        if input['isLALT']:
                            needLAlt = True
                        if input['isRALT']:
                            needRAlt = True
                        if input['isSHIFT']:
                            needShift = True
                        if input['isNCAPS']:
                            needNCaps = True
                        if input['isCAPS']:
                            needCaps = True
        if not needCtrl and 'isCTRL' not in filterKeys:
            append(filterKeys,'isCTRL')
        if not needLCtrl and 'isLCTRL' not in filterKeys:
            append(filterKeys,'isLCTRL')
        if not needRCtrl and 'isRCTRL' not in filterKeys:
            append(filterKeys,'isRCTRL')
        if not needAlt and 'isALT' not in filterKeys:
            append(filterKeys,'isALT')
        if not needLAlt and 'isLALT' not in filterKeys:
            append(filterKeys,'isLALT')
        if not needRAlt and 'isRALT' not in filterKeys:
            append(filterKeys,'isRALT')
        if not needShift and 'isSHIFT' not in filterKeys:
            append(filterKeys,'isSHIFT')
        for filter in forcedFilter:
            append(filterKeys,filter)
        #Printing regular rules
        allCombos = passedKeyboard.getCombos()
        #sorted(keyboard, key=lambda k: ("baseKey" not in k, k.get("baseKey", None),"baseOutput" not in k, k.get("baseOutput", None)))
        regularCombos = [x for x in allCombos if (x['type'] == 'rule') or (x['type'] == 'rule.dk') or (x['type'] == 'rule.deadEnd')]
        sortedRegularCombos = sorted(regularCombos, key=lambda k: ("baseKey" not in k, k.get("baseKey", None),"baseOutput" not in k, k.get("baseOutput", None)))
        for key, group in groupby(sortedRegularCombos, key=lambda k: ("baseKey" not in k, k.get("baseKey", "*None*"))):
            f.write("c " + key[1] +"\n")
            for thing in group:
                skip = False
                for input in thing['inputs']:
                    for filter in filterKeys:
                        if filter in input and input[filter]:
                            skip = True
                if not skip:
                    f.write(thing['line'].strip()+"\n")

        generatedCombos = sorted([x for x in allCombos if 'generated' in x['type']], key=lambda k: ("baseKey" not in k, k.get("baseKey", None),"baseOutput" not in k, k.get("baseOutput", None)))
        if len(generatedCombos) > 0:
            f.write("match > use(deadkeys)\n")
            f.write("group(deadkeys)\n")
        for keys, groups in groupby(generatedCombos, key=lambda k: ("baseKey" not in k, k.get("baseKey", '*None*'))):
            f.write("c " + keys[1] +"\n")
            storeListInput = []
            storeListOutput = []
            s = " "
            for thing in groups:
                append(storeListInput,thing['inputs'][1])
                if thing['outputs'][0] == thing['inputs'][1]:
                    # MSK and Keyman handle doubled DK's differently.
                    append(storeListOutput,"dk(" + thing['outputs'][0][3:-1] + ")")
                else:
                    append(storeListOutput,thing['outputs'][0]) 
            inner = "store(dkf" + keys[1][3:-1] + ") " + s.join(storeListInput)
            outer = "store(dkt" + keys[1][3:-1] + ") " + s.join(storeListOutput)
            dkrule = keys[1] + " any(dkf" + keys[1][3:-1] + ") > index(dkt" + keys[1][3:-1] + ", 2)"
            f.write(inner + "\n")
            f.write(outer + "\n")
            f.write(dkrule + "\n\n")
        f.close()
        print('KMN exported\n')

def pretty(d, indent=0):
   for key, value in d.items():
      print('\t' * indent + str(key))
      if isinstance(value, dict):
         pretty(value, indent+1)
      else:
         print('\t' * (indent+1) + str(value))

def generateLine(combo):
    concatLine = ""
    for input in combo['inputs']:
        if 'fullKey' in input:
            concatLine += " " + input['fullKey']
        else:
            concatLine += " " + input
    if 'outputs' in combo:
        concatLine += " >"
        for output in combo['outputs']:
            concatLine += " " + output
        concatLine = concatLine.strip()
    return concatLine

def generateFullKey(keydef):
    fullKeyString = "["
    if keydef["isNCAPS"] == True:
        fullKeyString += "NCAPS"
    if keydef['isCAPS']:
        fullKeyString += " CAPS"
    if not (keydef['isCTRL'] and keydef['isALT']):
        if keydef['isCTRL']:
            fullKeyString += " CTRL"
        if keydef['isALT']:
            fullKeyString += " ALT"
        if keydef['isRALT']:
            fullKeyString += " RALT"
    else:
        fullKeyString += " RALT"
    if keydef['isRCTRL']:
        fullKeyString += " RCTRL"
    if keydef['isLCTRL']:
        fullKeyString += " LCTRL"
    if keydef['isLALT']:
        fullKeyString += " LALT"
    if keydef['isSHIFT']:
        fullKeyString += " SHIFT"
    fullKeyString += " " + keydef['isKey'] +']'
    fullKeyString = fullKeyString.replace('[ ','[')
    return fullKeyString


def getCrossPlatformKeycode(key,inputPlatfrom,outputPlatform):
    if inputPlatfrom == "MSKLC":
        try:
            relevantLine = [x for x in kbLinks if x['scancode'] == key][0]
        except:
            print('Error: ScanCode Unrecognized')
        finally:
            if outputPlatform == "Keyman":
                return relevantLine['keyman']
    if inputPlatfrom == "Keyman":
        try:
            relevantLine = [x for x in kbLinks if x['keyman'] == key][0]
        except:
            print('Error: Keyman Key Unrecognized')
        finally:
            if outputPlatform == "MSKLC":
                return relevantLine['scancode']
def verbose(lineNumber, inputString):
    if isVerbose:
        print(lineNumber, ": ", inputString)

def sterilizeLine(line, replaceSpaces=False):
    #remove EOL
    if line.endswith("\n"):
        line = line[:-1].strip()
    #remove BOM
    if line.startswith(u'\ufeff'):
        line = line[1:]
    #compress multiple spaces
    rex = re.compile(r'\t')
    line = rex.sub(' ', line)
    rex = re.compile(r' {2,}')
    line = rex.sub(' ', line)
    # remove comments
    rex = re.compile(r' * c .*$')
    line = rex.sub('', line)
    rex = re.compile(r'^c .*$')
    line = rex.sub('', line)
    rex = re.compile(r' * C .*$')
    line = rex.sub('', line)
    rex = re.compile(r'^C .*$')
    line = rex.sub('', line)
    if replaceSpaces:
        line = line.replace(u" ", u"---")
    return line

def parseKeyman(passedKeyboard, keymanFilename, generateDeadkeys = False):
    lineCount = 0
    infile = open(keymanFilename, mode='r', encoding='utf-8')
    currentGroup = {}
    for line in infile:

        if (line != "\n"):
            #line = line[:-2].strip()
            line = sterilizeLine(line)
            if (len(line) != 0):
                resultDef = {}
                upperLine = line.upper()
                lineCount = lineCount + 1
                verbose(lineCount,line)
                if (upperLine.startswith(u"$KEYMANONLY: ")):
                    resultDef['restriction'] = "keymanonly"
                    if "MNEMONIC" in upperLine:
                        resultDef['line'] = line
                        if "1" in upperLine:
                            passedKeyboard.setVariable({"mnemonic": True})
                    resultDef['type'] = "kmstore"
                    resultDef['line'] = line
                    line = line[13:]
                    upperLine = upperLine[13:]
                    #This should flow down...
                if (upperLine.startswith(u"STORE(&")):
                    variableSearch = re.search('store\((.*)\)', line, re.IGNORECASE)
                    variableName = "Undefined"
                    value = ""
                    if variableSearch:
                        variableName = variableSearch.group(1)
                    valueSearch = re.search(r'store\(.*?\) (.*)',line, re.IGNORECASE)
                    if valueSearch:
                        value = valueSearch.group(1).strip()[1:-1]
                    passedKeyboard.setVariable({variableName: value})
                    #TODO is this unnecessary?
                    resultDef[variableName] = value
                    tempProps = {}
                    tempProps[variableName.upper()] = value
                    if "type" not in resultDef or resultDef['type'] == "":
                        resultDef['type'] = "store"
                    if "line" not in resultDef or resultDef['line'] == "":
                        resultDef['line'] = "line"

                elif (upperLine.startswith("STORE(CONTROLS)")):
                    #TODO, implement this:
                    patternComplex = r'"([^ r\n]*?)"|\'(.*)\''
                    findall = re.findall(patternComplex,line)
                    itemlist = []
                    for element in findall:
                        for bit in element:
                            for char in bit:
                                append(itemlist,u' U+%04x'%ord(char))
                    variableSearch = re.search('store\((.*)\)', line, re.IGNORECASE)
                    if variableSearch:
                        variableName = variableSearch.group(1)
                    print("Waiting for Implementation")
                    resultDef["storeName"] = variableName.upper()
                    resultDef['type'] = "store"
                    resultDef['storeItems'] = itemlist

                elif (upperLine.startswith(u"STORE")):

                    verbose(lineCount,"It's a store")
                    storeSearch = re.search('store\((.*?)\)', line, re.IGNORECASE)
                    if storeSearch:
                        resultDef["storeName"] = storeSearch.group(1).upper()
                        if resultDef["storeName"] == "CONTROLS":
                            print("paws")
                    storeItemList = line.split(")",1)[1].strip()
                    resultDef['fullStore'] = storeItemList
                    resultDef['type'] = "store"
                    oldLen = len(storeItemList)


                    pattern1 = r'("[^\s]*? [^\s]*?")'
                    if re.search(pattern1,storeItemList):
                        tempbits = re.findall(pattern1,storeItemList)
                        for bit in tempbits:
                            newBit = bit.replace(" ","---")
                            storeItemList = storeItemList.replace(bit,newBit)
                    pattern2 = r"('[^\s]*? [^\s]*?')"
                    if re.search(pattern2,storeItemList):
                        tempbits = re.findall(pattern2,storeItemList)
                        for bit in tempbits:
                            newBit = bit.replace(" ","---")
                            storeItemList = storeItemList.replace(bit,newBit)
                    pattern2 = r"\[\w+.*?\]"
                    if re.search(pattern2,storeItemList):
                        tempbits = re.findall(pattern2,storeItemList)
                        for bit in tempbits:
                            newBit = bit.replace(" ","---")
                            storeItemList = storeItemList.replace(bit,newBit)
                    if len(storeItemList) != oldLen:
                        verbose(lineCount,"Space Protected")
                    storeItems = re.split("\s|\t",storeItemList)
                    if "storeItems" not in resultDef:
                        resultDef['storeItems'] = []
                    for item in storeItems:
                        item = item.replace("---"," ").strip()
                        if item.startswith("U+"):
                            append(resultDef['storeItems'],item.upper())
                        elif (item.startswith(u"[")):
                            #todo, make this modular
                            input = item
                            inputUpper = item.upper()
                            inputUpper = inputUpper.replace("---", " ")
                            keyCombo = {"isSHIFT" : False, "isNCAPS" : False, "isCAPS" : False,
                                        "isRALT" : False, "isLALT" : False, "isALT" : False,
                                        "isRCTRL" : False, "isLCTRL" : False, "isCTRL" : False,
                                        "isKey" : ""}
                            verbose(lineCount,"It's a keypress")
                            keyCombo['fullKey'] = inputUpper.replace("---", " ")
                            #thisCombo['comboFullKey'] = inputUpper.replace("---", " ")

                            inputUpper = inputUpper[1:-1]
                            tempProps = {}

                            if "SHIFT" in inputUpper:
                                isSHIFT = True
                                keyCombo['isSHIFT'] = True
                                inputUpper = inputUpper.replace("SHIFT","").strip()
                                passedKeyboard.setVariable({'containsSHIFT': True})
                                tempProps['containsSHIFT'] = True
                            if "NCAPS" in inputUpper:
                                keyCombo['isNCAPS'] = True
                                inputUpper = inputUpper.replace("NCAPS","").strip()
                                passedKeyboard.setVariable({'containsNCAPS': True})
                                tempProps['containsNCAPS'] = True
                            if "CAPS" in inputUpper:
                                keyCombo['isCAPS'] = True
                                inputUpper = inputUpper.replace("CAPS","").strip()
                                passedKeyboard.setVariable({'containsCAPS': True})
                                tempProps['containsCAPS'] = True
                            if "RALT" in inputUpper:
                                keyCombo['isRALT'] = True
                                inputUpper = inputUpper.replace("RALT","").strip()
                                passedKeyboard.setVariable({'containsRALT': True})
                                tempProps['containsRALT'] = True
                            if "LALT" in inputUpper:
                                keyCombo['isLALT']= True
                                inputUpper = inputUpper.replace("LALT","").strip()
                                passedKeyboard.setVariable({'containsLALT': True})
                                tempProps['containsLALT'] = True
                            if "ALT" in inputUpper:
                                keyCombo['isALT'] = True
                                inputUpper = inputUpper.replace("ALT","").strip()
                                passedKeyboard.setVariable({'containsALT': True})
                                tempProps['containsALT'] = True
                            if "LCTRL" in inputUpper:
                                keyCombo['isLCTRL'] = True
                                inputUpper = inputUpper.replace("LCTRL","").strip()
                                passedKeyboard.setVariable({'containsLCTRL': True})
                                tempProps['containsLCTRL'] = True
                            if "RCTRL" in inputUpper:
                                keyCombo['isRCTRL'] = True
                                inputUpper = inputUpper.replace("RCTRL","").strip()
                                passedKeyboard.setVariable({'containsRCTRL': True})
                                tempProps['containsRCTRL'] = True
                            if "CTRL" in inputUpper:
                                keyCombo['isCTRL'] = True
                                inputUpper = inputUpper.replace("CTRL","").strip()
                                passedKeyboard.setVariable({'containsCTRL': True})
                                tempProps['containsCTRL'] = True
                            if " " in inputUpper:
                                print("Error: I missed something", input)
                            if "_" not in inputUpper:
                                if ((len(inputUpper)>1) and ((inputUpper.startswith("'") and inputUpper.endswith("'")) or (inputUpper.startswith('"') and inputUpper.endswith('"')))):
                                    #this can't be uppercase
                                    inputUpper = inputUpper[1:-1]
                                    m = re.search("(?i)" + re.escape(inputUpper), input)
                                    keyCombo["isKey"] = ""
                                    for char in input[m.start():m.end()]:
                                        keyCombo["isKey"] = (keyCombo["isKey"] + u' U+%04x'%ord(char)).strip()
                                        resultDef["baseKey"] = keyCombo["isKey"]
                            else: 
                                keyCombo["isKey"] = inputUpper.strip("-")
                                resultDef["baseKey"] = keyCombo["isKey"]
                                
                            append(resultDef['storeItems'],keyCombo)
                        elif item.upper().startswith("DK"):
                            append(resultDef['storeItems'],item)
                        elif item.upper().startswith("NUL"):
                            append(resultDef['storeItems'],item)
                        elif item.upper().startswith("BEEP"):
                            append(resultDef['storeItems'],item)
                        if (item.startswith("'") or item.startswith('"')):
                            item = item[1:-1]
                            for char in item:
                                append(resultDef['storeItems'],u'U+%04x'%ord(char))
                    

                elif (upperLine.startswith(u"C ") or upperLine == "C"):
                    verbose(lineCount,"It's a Comment")
                    resultDef["type"] = "comment"
                    line = ""
                    # Don't want to store comments
                elif (upperLine.startswith(u"GROUP")):
                    verbose(lineCount,"It's a Group")
                    resultDef["line"] = line
                    resultDef["lineCount"] = lineCount
                    resultDef["type"] = "structural"
                else:
                    resultDef = processKeymanRule(line,lineCount,currentGroup, passedKeyboard)
                    if resultDef is None:
                        print("Error: This line is unparsed:", line)
                    else: 
                        resultDef["line"] = line
                        resultDef["lineCount"] = lineCount
                # Storing Starts Here
                if line != "" and not resultDef is None:
                    #this might be redundant
                    resultDef["line"] = line
                    resultDef["lineCount"] = lineCount
                    passedKeyboard.addCombo(resultDef)
           
    #Expand
    for line in passedKeyboard.getCombos():
        #Need an iterator 
        if 'type' not in line:
            print("Warning: This line has no 'type': " + line)
        if ("dk" in line['type']) and ("index" in line['type']):
            outputTargetStores = []
            outputTargetLists = []
            outputLines = []
            inputTargetStores = []
            inputTargetLists = []
            inputLines = []
            indexNumCounter = 0
            # counted items have parentheses
            importantInputs = [i for i in line['inputs'] if (i != "+")]
            importantOutputs = [i for i in line['outputs'] if (i != "+")]
            for item in importantOutputs: #from
                if item.upper().startswith("INDEX"):
                    splitIndex = re.split(r'\(|\)|,',item)
                    outputLine = item
                    outputTargetStore = splitIndex[1]
                    outputTargetList = [i['storeItems'] for i in passedKeyboard.getCombos() if ('storeName' in i) and (i['storeName'] == outputTargetStore)]
                    #TODO Fix Breakage here with SILEuro
                    inputTargetStore = importantInputs[int(splitIndex[2])-1][4:-1].upper()
                    inputLine = importantInputs[int(splitIndex[2])-1]
                    inputTargetList = [i['storeItems'] for i in passedKeyboard.getCombos() if ('storeName' in i) and (i['storeName'] == inputTargetStore)]
                    if len(outputTargetList) == 0:
                        pass
                    if (len(inputTargetList[0]) < 1) or len(outputTargetList[0]) < 1:
                        print('Error: This group is Broken')
                        #outputTargetList = [i['storeItems'] for i in passedKeyboard.getCombos() if ('storeName' in i) and (i['storeName'] == outputTargetStore)]
                    if inputTargetList is not None or outputTargetList is not None:
                        if len(inputTargetList[0]) != len(outputTargetList[0]):
                        #if len(inputTargetList[0]) != len(outputTargetList[0]):
                            print("Error: " + inputTargetStore, " and ", outputTargetStore, " are not the same length!")
                    append(outputTargetStores,outputTargetStore)
                    append(outputTargetLists,outputTargetList[0]) #was [0]
                    append(inputTargetStores,inputTargetStore)
                    append(inputTargetLists,inputTargetList[0])
                    append(inputLines,inputLine)
                    append(outputLines,outputLine)
                   #was [0]
                    indexNumCounter = indexNumCounter + 1

            #theTable = generateCombos(line,importantInputs, inputTargetStores, inputTargetLists, inputLines, importantOutputs, outputTargetStores, outputTargetLists, outputLines)
            #Method 1 of processinglists
            if len(outputTargetLists) == 1: # This is the problem
                    storeItemCounter = 0
                    unwrappedInputTargetLists = inputTargetLists[0]
                    unwrappedOutputTargetLists = outputTargetLists[0]
                    tempDef = []

                    for i in range(0,len(unwrappedInputTargetLists)-1): # was -1
                        tempDef = copy.deepcopy(line)
                        inputCounter = 0
                        copyInputs = copy.deepcopy(tempDef['inputs'])
                        for tempInput in copyInputs:
                            if inputTargetStores[0].upper() in tempInput.upper():
                                copyInputs[inputCounter] = unwrappedInputTargetLists[storeItemCounter]
                                tempDef['inputs'] = copyInputs
                                ###ToDo Find Combo on BaseKB
                                tempDef['DKInput'] = "TargetKB"
                            inputCounter += 1
                        outputCounter = 0
                        copyOutputs = copy.deepcopy(tempDef['outputs'])
                        for tempOutput in copyOutputs:
                            if outputTargetStores[0].upper() in tempOutput.upper():
                                copyOutputs[outputCounter] = unwrappedOutputTargetLists[storeItemCounter]
                                tempDef['outputs'] = copyOutputs
                            outputCounter += 1

                        tempDef['type'] = "rule.generated"
                        tempDef['sourceLine'] = tempDef['line']
                        if isinstance(tempDef['outputs'], list):
                            outString = " ".join(i for i in tempDef['outputs'])
                        else:
                            outString = tempDef['outputs']
                        inString = ""
                        if isinstance(tempDef['inputs'], list):
                            for elem in tempDef['inputs']:
                                if isinstance(elem, dict):
                                    inString = inString + " " + elem['fullKey']
                                elif isinstance(elem, str):
                                    inString = inString + " " + elem
                        else:
                            inString = tempDef['inputs']
                        newLine = inString + " > " + outString
                        tempDef['line'] = newLine
                        verbose(lineCount, newLine)
                        tempDef['sourceLineCount'] = tempDef['lineCount']
                        tempDef['baseKey'] = 'Undefined'
                        if len(inString) < 16:
                            tempDef['baseKey'] = "K_" + chr(int(inString.strip().upper()[-4:], 16))
                        tempDef['lineCount'] = lineCount
                        tempDef['baseOutput'] = outString.strip().upper()
                        tempDef.pop('isExpandable',None)
                        storeItemCounter += 1
                        lineCount += 1
                        passedKeyboard.addCombo(tempDef)
                        
            else:
                print('Warning: This is too complex, and thus unhandled.')
                #numRounds = len(inputTargetLists)
    #Interpret Target of Deadkeys
    #Waited until all lines were expanded.
    linesWithDK = passedKeyboard.getCombosWithPrelimDeadkey()
    dkInputCounter = 0
    for line in linesWithDK:
        if 'inputs' in line:
            precedingDK = False
            dkInputCounter = 0
            for input in line['inputs']:

                if isinstance(input, str) and input.startswith("dk("):
                    precedingDK = True
                elif isinstance(input, str) and input.startswith("U+") and precedingDK:
                    listing = passedKeyboard.getCombosByOutput(input)
                    newListing = findSimplest(listing)
                    if newListing[1] != False:
                        #input = copy.deepcopy(newListing[1])
                        passedKeyboard.updateInput(line['lineCount'],dkInputCounter,newListing[1])
                        line['DKInput'] = "Combo"
                    precedingDK = False
                else:
                    precedingDK = False
                    print("Warning: What did I find?")
                dkInputCounter += 1



def processKeymanRule(line,lineCount,currentGroup, passedkeyboard):
    rule = {}
    # this may be unneccesary
    if "']" in line and not "'\"'" in line:
        line = line.replace('"', "'")
    elif '"]' in line and not "'\"'":
        line = line.replace("'", "'")
    line = line.replace('" "', '"---"')
    line = line.replace("' '", "'---'")
    line = line.replace(" = ", "=")
    put = line.split(" > ")
    if (len(put) != 2) :
       print("Error: Unusual number of >'s")
    else:
        
        pattern = re.compile(u"(index\(\w+) *, +")
        if (re.search(pattern,put[1])):
            put[1] = re.sub(pattern,r'\1,',put[1])
        pattern = re.compile(u"\[[\w -]+.*?\]")
        if (re.search(pattern, put[0])):
            results = re.findall(pattern, line)
            for result in results:
                beforeString = result
                result = result.replace(" ", "---")
                if (result != beforeString):
                    put[0] = put[0].replace(beforeString, result)
        inputs = put[0].split(" ")
        outputs = put[1].split(" ")
        return buildCombo(line,inputs,outputs,lineCount, passedkeyboard)


def buildCombo(line,inputs,outputs, lineCount, passedKeyboard):
    thisCombo = {}
    thisCombo["type"] = "rule"
    for input in inputs:
        if 'inputs' not in thisCombo:
            thisCombo['inputs'] = []
        input = input.strip()
        inputUpper = input.upper()
        if (inputUpper.startswith(u"DK")):
            verbose(lineCount,"It's a deadkey.")
            append(thisCombo['inputs'],input)
            if "dk" not in thisCombo["type"]:
                thisCombo["type"] = thisCombo["type"] + ".dk"
        elif (inputUpper.startswith(u"IF(")):
            verbose(lineCount,"It's a IF.")
            #Need to handle if's with spaces
            thisCombo["type"] = thisCombo["type"] + ".if"
            append(thisCombo['inputs'],input)
        elif (inputUpper.startswith(u"BEGIN")):
            verbose(lineCount,"It's a Begin")
            append(thisCombo['inputs'],input)
        elif (inputUpper.startswith(u"UNICODE")):
            verbose(lineCount,"It's a UNICODE")
            append(thisCombo['inputs'],input)
        elif (inputUpper.startswith(u"ANY(")):
            verbose(lineCount,"It's an any.")
            append(thisCombo['inputs'],input)
        elif (inputUpper.startswith(u"GROUP")):
            verbose(lineCount,"It's a Group")
            append(thisCombo['inputs'],input)
        elif (inputUpper.startswith(u"MATCH")):
            verbose(lineCount,"It's a Match")
            append(thisCombo['inputs'],input)
        elif (inputUpper.startswith(u"NOMATCH")):
            verbose(lineCount,"It's a Match")
            append(thisCombo['inputs'],input)
        elif (inputUpper.startswith(u"PLATFORM")):
            verbose(lineCount,"It's a Platform")
            append(thisCombo['inputs'],input)
            touchPlatforms = ["TOUCH","IOS","ANDROID"]
            for platform in touchPlatforms:
                if (platform in inputUpper):
                    if "touch" not in thisCombo["type"]:
                        thisCombo["type"] = thisCombo["type"] + ".touch"
        elif (input.startswith(u"+")):
            verbose(lineCount,"It's a Plus")
            append(thisCombo['inputs'],input)
        elif (input.startswith(u"U+")):
            verbose(lineCount,"It's a Unicode ID")
            append(thisCombo['inputs'],input.upper())
        elif (input.startswith(u"[")):
            inputUpper = inputUpper.replace("---", " ")
            keyCombo = {"isSHIFT" : False, "isNCAPS" : False, "isCAPS" : False,
                        "isRALT" : False, "isLALT" : False, "isALT" : False,
                        "isRCTRL" : False, "isLCTRL" : False, "isCTRL" : False,
                        "isKey" : ""}
            verbose(lineCount,"It's a keypress")
            keyCombo['fullKey'] = inputUpper.replace("---", " ")
            thisCombo['comboFullKey'] = inputUpper.replace("---", " ")

            inputUpper = inputUpper[1:-1]
            tempProps = {}

            if "SHIFT" in inputUpper:
                isSHIFT = True
                keyCombo['isSHIFT'] = True
                inputUpper = inputUpper.replace("SHIFT","").strip()
                passedKeyboard.setVariable({'containsSHIFT': True})
                tempProps['containsSHIFT'] = True
            if "NCAPS" in inputUpper:
                keyCombo['isNCAPS'] = True
                inputUpper = inputUpper.replace("NCAPS","").strip()
                passedKeyboard.setVariable({'containsNCAPS': True})
                tempProps['containsNCAPS'] = True
            if "CAPS" in inputUpper:
                keyCombo['isCAPS'] = True
                inputUpper = inputUpper.replace("CAPS","").strip()
                passedKeyboard.setVariable({'containsCAPS': True})
                tempProps['containsCAPS'] = True
            if "RALT" in inputUpper:
                keyCombo['isRALT'] = True
                inputUpper = inputUpper.replace("RALT","").strip()
                passedKeyboard.setVariable({'containsRALT': True})
                tempProps['containsRALT'] = True
            if "LALT" in inputUpper:
                keyCombo['isLALT']= True
                inputUpper = inputUpper.replace("LALT","").strip()
                passedKeyboard.setVariable({'containsLALT': True})
                tempProps['containsLALT'] = True
            if "ALT" in inputUpper:
                keyCombo['isALT'] = True
                inputUpper = inputUpper.replace("ALT","").strip()
                passedKeyboard.setVariable({'containsALT': True})
                tempProps['containsALT'] = True
            if "LCTRL" in inputUpper:
                keyCombo['isLCTRL'] = True
                inputUpper = inputUpper.replace("LCTRL","").strip()
                passedKeyboard.setVariable({'containsLCTRL': True})
                tempProps['containsLCTRL'] = True
            if "RCTRL" in inputUpper:
                keyCombo['isRCTRL'] = True
                inputUpper = inputUpper.replace("RCTRL","").strip()
                passedKeyboard.setVariable({'containsRCTRL': True})
                tempProps['containsRCTRL'] = True
            if "CTRL" in inputUpper:
                keyCombo['isCTRL'] = True
                inputUpper = inputUpper.replace("CTRL","").strip()
                passedKeyboard.setVariable({'containsCTRL': True})
                tempProps['containsCTRL'] = True
            if " " in inputUpper:
                print("Error: I missed something", input)
            if "_" not in inputUpper:
                if ((len(inputUpper)>1) and ((inputUpper.startswith("'") and inputUpper.endswith("'")) or (inputUpper.startswith('"') and inputUpper.endswith('"')))):
                    inputUpper = inputUpper[1:-1]
                    keyCombo["isKey"] = ""
                    thisCombo['baseKey'] = ""
                    for char in inputUpper:
                        keyCombo["isKey"] = (keyCombo["isKey"] + u' U+%04x'%ord(char)).strip()
                        thisCombo['baseKey'] = (thisCombo['baseKey'] + u' U+%04x'%ord(char)).strip()
            else: 
                keyCombo["isKey"] = inputUpper.strip("-")
                thisCombo['baseKey'] = keyCombo["isKey"]
                if keyCombo["isKey"].startswith('T_'):
                    if "touch" not in thisCombo["type"]:
                        thisCombo["type"] = thisCombo["type"] + ".touch"
            append(thisCombo['inputs'],keyCombo)

        #Split at --- and process
        elif (input.startswith("'") or input.startswith('"')):
            input = input[1:-1]
            if input == "---":
                input = " "
            for char in input:
                append(thisCombo['inputs'],u'U+%04x'%ord(char))
        else:
            print("Error: Where am I?")
    for output in outputs:
        if 'outputs' not in thisCombo:
            thisCombo['outputs'] = []
        output = output.strip()
        outputUpper = output.upper()
        if (outputUpper.startswith(u"DK")):
            verbose(lineCount,"It's a deadkey.")
            append(thisCombo['outputs'],outputUpper)
            if "dk" not in thisCombo["type"]:
                thisCombo["type"] = thisCombo["type"] + ".dk"
            thisCombo['baseOutput'] = outputUpper
        elif (outputUpper.startswith(u"GROUP")):
            verbose(lineCount,"It's a Group")
            append(thisCombo['outputs'],outputUpper)
        elif (outputUpper.startswith(u"USE")):
            verbose(lineCount,"It's a Use")
            append(thisCombo['outputs'],outputUpper)
            thisCombo["type"] = "goTo"
        elif (outputUpper.startswith(u"INDEX")):
            verbose(lineCount,"It's a INDEX")
            #todo need to handle index with spaces
            append(thisCombo['outputs'],outputUpper)
            thisCombo['isExpandable'] = True
            if "index" not in thisCombo["type"]:
                thisCombo["type"] = thisCombo["type"] + ".index"
        elif (outputUpper.startswith(u"LAYER")):
            verbose(lineCount,"It's a Layer")
            append(thisCombo['outputs'],outputUpper)
        elif (outputUpper.startswith(u"BEEP")):
            verbose(lineCount,"It's a BEEP")
            append(thisCombo['outputs'],outputUpper)
            if "deadEnd" not in thisCombo["type"]:
                thisCombo['type'] = thisCombo["type"] + ".deadEnd"
            thisCombo['baseOutput'] = outputUpper
        elif (outputUpper.startswith(u"NUL")):
            verbose(lineCount,"It's a NUL")
            append(thisCombo['outputs'],outputUpper)
            if "deadEnd" not in thisCombo["type"]:
                thisCombo['type'] = thisCombo["type"] + ".deadEnd"
            thisCombo['baseOutput'] = outputUpper
        elif (outputUpper.startswith(u"CONTEXT")):
            verbose(lineCount,"It's a Context")
            append(thisCombo['outputs'],outputUpper)
            if "deadEnd" not in thisCombo["type"]:
                thisCombo['type'] = thisCombo["type"] + ".deadEnd"
        elif (output.startswith(u"U+")):
            verbose(lineCount,"It's a Unicode ID")
            append(thisCombo['outputs'],outputUpper)
            thisCombo['baseOutput'] = outputUpper
        elif (output.startswith("'") or output.startswith('"')):
            output = output[1:-1]
            if output == "---":
                output = " "
            for char in output:
                stringy = u'U+%04x'%ord(char)
                append(thisCombo['outputs'],stringy.upper())
        #else:
            #print("Error: " + output)
        
    return thisCombo

def prod(iterable):
    def add(x,y): return x*y
    functools.reduce(add, iterable)

class keyboardDefinition():
    def __init__(self,inFilename):
        self.idx = 0
        self.filename = inFilename
        self.keymanComboList = []
        self.idx = 0
        self.variableList = []
        self.MSKIndexList = []
        self.MSKStateList = []
        self.MSKLineList = []
        self.MSKDeadkeyList = []
        self.Format = ""
        self.NativeFormat = ""
        self.capsAffectsKeyboard = False
    def setCapsAffectsKeyboard(self, boolean):
        if boolean:
            self.capsAffectsKeyboard = True
        else:
            self.capsAffectsKeyboard = False
    def addMSKIndex(self, MSKIndex):
        append(self.MSKIndexList,MSKIndex)
    def addMSKStates(self,stateDict):
        append(self.MSKStateList,stateDict)
    def addMSKLine(self,MSKLine):
        append(self.MSKLineList,MSKLine)
    def addMSKDeadkey(self,MSKDeadkey):
        append(self.MSKDeadkeyList,MSKDeadkey)
    def getMSKeyDef(self,virt_key,platform= "MSKLC"):
        if platform == "MSKLC":
            try:
                key = [x for x in self.MSKLineList if x['VK'] == virt_key][0]
            except:
                return false
        return key
    def setVariable(self, inVariable):
        if inVariable not in self.variableList:
            append(self.variableList,inVariable)
    def setNative(self, format):
        self.NativeFormat = format
    def getColumnBySSID(self, ssid):
        try:
             column = [x['Column'] for x in self.MSKStateList if x['SSID'] == ssid][0]
        except:
            return False
        return column
    def checkAttainabilityOfInput(self,input):
        attainable = False

        if isinstance(input, dict):
            verbose(0,"Dict")
            attainable = True
        elif input.upper().startswith("ANY"):
            verbose(0,"Any")
            attainable = True
            #TODO check if store exists
        elif input.upper().startswith("PLATFORM"):
            verbose(0,"Platform")
            attainable = True
        elif input.upper().startswith("MATCH"):
            verbose(0,"match")
            attainable = True
        elif input.upper().startswith("GROUP"):
            verbose(0,"Group")
            attainable = True
        elif input.upper().startswith("BEGIN"):
            verbose(0,"Begin")
            attainable = True
        elif input.upper().startswith("UNICODE"):
            verbose(0,"Unicode")
            attainable = True
        elif input.upper().startswith("+"):
            verbose(0,"Plus")
            attainable = True
        else:
            listing = self.getCombosByOutput(input)
            if len(listing) == 0:
                print("Warning: Deadkey input " + input + " unattainable on " + self.getKeyboardName() + ". This rule will never fire.")
            else:
                attainable = True
        return attainable

    def getColumnByOrder(self, ssid):
        try:
             row = self.MSKStateList[int(ssid)]
             column = row['Column']
        except:
            column = False
        return column
    def getKeyboardName(self):
        return self.filename
    def getNextLineCount(self):
        lastLine = self.keymanComboList[-1]
        return lastLine["lineCount"]+1
    def addCombo(self, keyCombo):
        y = [v['inputs'] for v in self.keymanComboList if 'inputs' in v ]
        z = [w['outputs'] for w in self.keymanComboList if 'outputs' in w ]

        if ('inputs' in keyCombo) and (keyCombo['inputs'] in y):
            if ('outputs' in keyCombo) and (keyCombo['outputs'] not in z):
                #This doesn't check the dups'
                print("Warning: A combo with these inputs and different outputs already exists in", self.filename)
                pprint(keyCombo['inputs'])
            else:
                print("Warning: A duplicate combo already exists in", self.filename)
                pprint(keyCombo['inputs'])
        else:
            #Why are they arriving here without baseOutputs?
            if "rule" in keyCombo['type'] and "baseOutput" not in keyCombo:
                keyCombo['baseOutput'] = ""
                for output in keyCombo['outputs']:
                    keyCombo['baseOutput'] = (keyCombo['baseOutput'] + " " + output).strip()
            if 'lineCount' not in keyCombo:
                keyCombo['lineCount'] = self.getNextLineCount()
            append(self.keymanComboList,keyCombo)
            self.idx = 0
            # Resetting index, because len(comboList) has changed.
            return True

    def getNextCombo(self):
        thisElem = self.keymanComboList[idx]
        self.idx = (self.idx + 1) % len(self.keymanComboList)
        return thisElem
    def getComboLen(self):
        return len(self.keymanComboList)
    def getCombosbyKey(self,key,platform = "KM"):
        if platform == "KM":
            relevantLines = [x for x in self.keymanComboList if 'baseKey' in x and x['baseKey'] == key]
        if platform == "MS":
            print("Error: This is not implemented.")
        return relevantLines
    def getCombosbyFullKey(self,fullKey,platform = "KM"):
        if platform == "KM":
            relevantLines = [x for x in self.keymanComboList if 'comboFullKey' in x and x['comboFullKey'] == fullKey]
        if platform == "MS":
            print("Error: This is not implemented.")
        return relevantLines
    def getCombobyNum(self,index):
        thisElem = self.keymanComboList[index]
        return thisElem
    def getCombosByOutput(self,output):
        relevantLines = [x for x in self.keymanComboList if 'baseOutput' in x and x['baseOutput'].upper() == output.upper()]
        return relevantLines
    def getCombosWithOutput(self):
        relevantLines = [x for x in self.keymanComboList if 'baseOutput' in x ]
        return relevantLines
    def getSimpleCombosByOutput(self,output):
        relevantLines = [x for x in self.keymanComboList if 'baseOutput' in x and x['baseOutput'].upper() == output.upper()]
        relevantLines = [x for x in relevantLines if 'type' in x 
                and "generated" not in x['type'] 
                and "store" not in x['type'] 
                and "comment" not in x['type'] 
                and "structural" not in x['type'] 
                and "goTo" not in x['type']
                and "dk" not in x['type']
                and "touch" not in x['type']]
        return relevantLines
    def getCombosWithPrelimDeadkey(self):
        relevantLines = [x for x in self.keymanComboList if 'DKInput' in x and x['DKInput'] == "TargetKB"]
        return relevantLines
    def getCombos(self):
        return self.keymanComboList
    def getSimpleCombos(self):
        keyboard = [x for x in self.keymanComboList if 'type' in x 
                and "generated" not in x['type'] 
                and "store" not in x['type'] 
                and "comment" not in x['type'] 
                and "structural" not in x['type'] 
                and "goTo" not in x['type']
                and "touch" not in x['type']]
        #and "dk" not in x['type']
        return keyboard
    def getVariable(self, varName):
        # Make this stable)
        response = [x[varName] for x in self.variableList if varName in x]
        if len(response) == 1:
            return response[0]
        else:
            return False
    def getPrettyName(self):
        if self.getVariable('&NAME') != False:
            kbName = self.getVariable('&NAME')
        elif self.getVariable('KBID') != False:
            kbName = self.getVariable('KBID')
        elif self.getVariable('Name') != False:
            kbName = self.getVariable('Name')
        elif self.getVariable('KbName') != False:
            kbName = self.getVariable('KBName')
        else:
            kbName = "Unknown"
        return kbName
    def updateInput(self,lineCount,inputIndex,newInput):
        result = False
        for line in self.keymanComboList:
            if line['lineCount'] == lineCount:
                if 'inputs' in line and len(line['inputs']) >= (inputIndex + 1):
                    line['originalInputs'] = copy.deepcopy(line['inputs'])
                    line['inputs'][inputIndex] = copy.deepcopy(newInput)
                    line['line'] = generateLine(line)
                    result = True
                else:
                    result = False
        return result
    def __exit__(self, exc_type, exc_value, traceback):
        self.package_obj.cleanup()
    def __del__(self):
        #del self.keymanComboList
        self.keymanComboList = []
        self.idx = 0
        #del self.variableList
        self.variableList = []
        self.filename = ""


class bumpindex:
    import itertools
    Array = []
    loopNum = 0
    cycleCounter = 0
    def __init__(repeatcount, inputTargetList, outputTargetList):
        cycleCounter = itertools.cycle(range(1,repeatCount))
        index = 0
        Array = [inputTargetList, outputTargetList]
        loopNum = repeatcount

        #TODO finish this
    def bump(group):
        if cycleCounter == 1:

            ReturnA = Array[1,index]
            totalCounter += 1
            index += 1
        else:
            ReturnA = Array[1,counter]
            counter += 1
        #in i
        return

def generateCombos(line,importantInputs, inputTargetStores, inputTargetLists, inputLists, importantOutputs, outputTargetStores, outputTargetLists, outputLists):
    #for i in inputTargetLists[0]:
    depth = 0
    loopCount = 0
    for lister in inputTargetLists[0]:
        if depth == 0:
            loopCount = len(lister)
            depth += 1
        else:
            loopCount = loopCount * len(lister)
            depth += 1
    changeArray = []

    for inputItem in inputTargetLists[0]:

        outputItem = outputTargetLists[0]
        #This won't work later
        repeatCount = int(loopCount / len(inputItem))
        for fullLoop in range(1,loopCount):
            index = 0
            for waitCount in range(0,repeatCount):
                append(changeArray,[inputItem[index], outputItem[index]])
                #output is too deep
            index += 1
            #next item

            #Repeat
    

    #DeterminePairs
    #get length of each pair
def inferCaps(passedKeyboard):
    
    keyboard = passedKeyboard.getCombos()
    SortedCombosOutput = sorted(keyboard, key=lambda k: ("baseOutput" not in k, k.get("baseOutput", None),"baseKey" not in k, k.get("baseKey", None)))
    i = open("outputs/" + passedKeyboard.getKeyboardName() + '_InferredCaps.txt', 'w', encoding="utf-8")
    stringList = []
    for key, group in groupby(SortedCombosOutput, key=lambda k: ("baseOutput" not in k, k.get("baseOutput", None))):
        inferCaps = CheckCondition(group)
        if inferCaps != None:
            append(stringList,str(inferCaps[0]) + " " + str(inferCaps[1]) + "\n")
    stringList = list(set(stringList))
    stringList = sorted(stringList)
    for line in stringList:
        i.write(line)
    i.close()
    print("Note: Caps Inference Written")


def CheckCondition(group):
    FoundSimple = False
    FoundCapsSimple = False
    FoundCapsShift = False
    FoundRaltSimple = False
    FoundRaltCapsSimple = False
    FoundCapsShiftRalt = False
    FoundNcapsShift = False
    for thing in group:
            if thing['type'] == 'rule':
                for input in thing['inputs']:
                    if "fullKey" in input:
                        if input['isNCAPS'] and not input['isSHIFT'] and not input['isRALT']:
                            FoundSimple = True
                        elif input['isCAPS'] and not input['isSHIFT'] and not input['isRALT']:
                            FoundCapsSimple = True
                        elif input['isCAPS'] and input['isSHIFT'] and not input['isRALT']:
                            FoundCapsShift = True
                        elif input['isNCAPS'] and input['isRALT'] and not input['isSHIFT']:
                            FoundRaltSimple = True
                        if input['isNCAPS'] and input['isSHIFT'] and not input['isRALT']:
                            FoundNcapsShift = True
                        elif input['isCAPS'] and input['isRALT'] and not input['isSHIFT']:
                            FoundRaltCapsSimple = True
                        elif input['isCAPS'] and input['isSHIFT'] and input['isRALT']:
                            FoundCapsShiftRalt = True
                            #CAPS Shift, caps

    if FoundSimple and FoundCapsSimple:
        return False, input["isKey"]
    if FoundRaltSimple and FoundRaltCapsSimple:
        return False, input["isKey"]
    if FoundSimple and FoundCapsShift:
        return True, input["isKey"]
    if FoundRaltSimple and FoundCapsShiftRalt:
        return True, input["isKey"]
def updateTempOutputs(passedKeyboard, baseKB):
    filenameToParse="KLC/" + baseKB + ".klc"
    baseKeyboard = parseKB(filenameToParse)
    for combo in passedKeyboard.getSimpleCombos():
        if combo["type"] == "fallback":
            if combo["comboFullKey"].startswith("[K_"):
                tempFullKey = "[NCAPS " + combo["comboFullKey"][1:]
            elif combo["comboFullKey"].startswith("[SHIFT K_"):
                tempFullKey = "[NCAPS SHIFT " + combo["comboFullKey"][1:]
            else:
                tempFullKey = combo["comboFullKey"]
            relevantCombos = baseKeyboard.getCombosbyFullKey(tempFullKey)
            if len(relevantCombos) == 1:
                relevantCombos = relevantCombos[0]
                combo['outputs'] = copy.deepcopy(relevantCombos["outputs"])
                combo['baseOutput'] = copy.deepcopy(relevantCombos["baseOutput"])
            else: 
                print("o")

def printKeyList(passedKeyboard, code = False, human = True, baseKB="en-us", inFilter = [], deadkeyNames = [], language = "en"):
    w = []
    allList = []
    letter = ""
    category = ""
    from itertools import groupby
    updateTempOutputs(passedKeyboard, baseKB)
    baseKeyboard = parseKB("KLC/" + baseKB + ".klc")
    keyboard = passedKeyboard.getCombosWithOutput()
    SortedCombosOutputs = sorted(keyboard, key=lambda k: ("baseOutput" not in k, k.get("baseOutput", None)))
    f = open("outputs/" + passedKeyboard.getKeyboardName() + "_" + baseKB + "_" + language + '_Table.txt', 'w', encoding="utf-8")
    u = open("outputs/Untranslated_" + language + '.txt', 'a', encoding="utf-8")
    #f.write(foo.encode('utf8'))
    f.write("########\n" + "All Combos Sorted by Output" + "\n########\n")
    for key, group in groupby(SortedCombosOutputs, key=lambda k: ("baseOutput" not in k, k.get("baseOutput", None))):
        printKey = True
        for thing in group:
            plusHappened = False
            if printKey:
                f.write("##" + str(key[1]) + "##\n")
                printKey = False
            getDescrip = ""
            #Labels are only needed if both are enabled.
            if code: 
                stringtoWrite = "User:"
            else:
                stringtoWrite = ""
            if human: 
                codedString = "Code:"
            else:
                codedString = ""
            if 'inputs' in thing:
                for input in thing['inputs']:
                    localizedKey = "" 
                    if isinstance(input, dict):
                        if input['isCAPS']:
                            stringtoWrite = (stringtoWrite + " " + "[Caps]").strip()
                        if input['isSHIFT']:
                            stringtoWrite = (stringtoWrite + " " + "[Shift]").strip()
                        if input['isALT']:
                            stringtoWrite = (stringtoWrite + " " + "[Alt]").strip()
                        if input['isRALT']:
                            stringtoWrite = (stringtoWrite + " " + "[AltGr]").strip()
                        if input['isLALT']:
                            stringtoWrite = (stringtoWrite + " " + "[Left Alt]").strip()
                        if input['isCTRL']:
                            stringtoWrite = (stringtoWrite + " " + "[Ctrl]").strip()
                        if input['isRCTRL']:
                            stringtoWrite = (stringtoWrite + " " + "[Right Control]").strip()
                        if input['isLCTRL']:
                            stringtoWrite = (stringtoWrite + " " + "[Left Control]").strip()
                        
                        relevantLines = baseKeyboard.getCombosbyKey(input['isKey'],"KM")
                        if input['isSHIFT']:
                            for line in relevantLines:
                                inputs = line["inputs"]
                                for input in inputs:
                                    if "fullKey" in input and input['fullKey'] == "[NCAPS SHIFT " + input['isKey'] + "]":
                                        if 'outputs' in line:
                                            for output in line['outputs']:
                                                if "DK(" not in output.upper() and output.upper() not in ["BEEP","NUL"] :
                                                    letterCode = output.strip().upper()[2:]
                                                    letter = chr(int(letterCode, 16))
                                                    localizedKey += letter
                        else:
                            for line in relevantLines:
                                inputs = line["inputs"]
                                for input in inputs:
                                    if "fullKey" in input and input['fullKey'] == "[NCAPS " + input['isKey'] + "]":
                                        if 'outputs' in line:
                                            for output in line['outputs']:
                                                if "DK(" not in output.upper() and output.upper() not in ["BEEP","NUL"]:
                                                    letterCode = output.strip().upper()[2:]
                                                    letter = chr(int(letterCode, 16))
                                                    localizedKey += letter
                        if localizedKey == "":
                            if stringtoWrite != "":
                                stringtoWrite = stringtoWrite + " [" + input['isKey'] + "]"
                            else:
                                stringtoWrite = "[" + input['isKey'] + "]"
                        else:
                            if stringtoWrite == "": 
                                stringtoWrite = "'" + localizedKey + "'"
                            else:
                                stringtoWrite = stringtoWrite.replace("  "," ")
                                stringtoWrite = stringtoWrite + " + '" + localizedKey + "'"
                        codedString = codedString + " " + input['fullKey']

                    else:
                        if input.startswith("dk"):
                            if (input.upper() == "DK(003B)") or (input.upper() == "DK(0021)"):
                                stringtoWrite = stringtoWrite + " " + "[CAM Key]"
                                codedString = codedString + " " + input
                            else:
                                letterCode = input.strip().upper()[3:-1]
                                letter = chr(int(letterCode, 16))
                                stringtoWrite = stringtoWrite + " '" + letter + "'"
                                codedString = codedString + " " + input
                        elif input.startswith("U+"):
                            #Convert back to key:
                            listing = passedKeyboard.getCombosByOutput(input.upper())
                            if plusHappened:
                                thing['baseKey'] = input
                            if len(listing) == 0:
                                print("Warning: Unattainable input, this will probably crash!")
                            newListing = findSimplest(listing)
                            printableNewListing = ""
                            relevantLines = passedKeyboard.getCombosbyFullKey(newListing[2],"KM")
                            if newListing[2] != False:
                                if "SHIFT" in printableNewListing:
                                    currentLine = newListing[0]
                                    inputs = currentLine["inputs"]
                                    for input in inputs:
                                        if "fullKey" in input:
                                            if 'outputs' in currentLine:
                                                for output in currentLine['outputs']:
                                                    letterCode = output.strip().upper()[2:]
                                                    letter = chr(int(letterCode, 16))
                                                    localizedKey += letter
                                else:                                 
                                    currentLine = newListing[0]
                                    inputs = currentLine["inputs"]                    
                                    for input in inputs:
                                        if "fullKey" in input:
                                            if 'outputs' in currentLine:
                                                for output in currentLine['outputs']:
                                                    letterCode = output.strip().upper()[2:]
                                                    letter = chr(int(letterCode, 16))
                                                    localizedKey += letter
                                stringtoWrite = stringtoWrite + " + '" + letter + "'"
                            else: 
                                print("Error: Must deal with falses.")
                        elif input == "+":
                            verbose(0, "Plussish")
                            plusHappened = True
                        else:
                            stringtoWrite = stringtoWrite + " '" + input + "'"
                            codedString = codedString + " " + input

            stringtoWrite = stringtoWrite.replace("' ' ", "[Space] ")
            stringtoWrite = stringtoWrite.replace(" ' '", " [Space]")
            if localizedKey != "":
                if stringtoWrite == "' '":
                    stringtoWrite = '[Space]'
                if not passedKeyboard.getVariable("mnemonic"):
                    stringtoWrite = stringtoWrite.replace("[Shift] +","")
                    stringtoWrite = stringtoWrite.replace("[Shift] +","")
                    stringtoWrite = stringtoWrite.replace("[Shift] ","")
                    stringtoWrite = stringtoWrite.replace("[Shift]","")
                stringtoWrite = stringtoWrite.strip()
                stringtoWrite = stringtoWrite.strip("+")
                stringtoWrite = stringtoWrite.strip()
            stringtoWrite = stringtoWrite + "\t➜\t"
            codedString = codedString + "\t➜\t"
            ###########
            if 'outputs' in thing:
                for output in thing['outputs']:
                    if output.startswith("dk"):
                        for theKey in deadkeyNames:
                            if output.upper() == theKey[0].upper():
                                category = "Deadkey"
                        stringtoWrite = stringtoWrite + " " + output
                        codedString = codedString + " " + output
                    elif output.startswith("U+"):
                        getDescrip = output.upper()
                        letterCode = output.strip().upper()[2:]
                        letter = chr(int(letterCode, 16))
                        if len(output) > 6:
                            print("Error: 5-digit unicode not supported") 
                        stringtoWrite = stringtoWrite + " '" + prep(letter) + "'"
                        codedString = codedString + " " + output
                    else:
                        stringtoWrite = stringtoWrite + " " + output
                        codedString = codedString + " " + output
            else:
                #Must be mnemonic
                baseKeyboard = parseKB("KLC/" + baseKB + ".klc")
                print("b")
            for item in inFilter:
                if (item.upper() in stringtoWrite.upper()) or (item.upper() in codedString.upper()):
                    codedString = ""
                    stringtoWrite = ""
            if ('inputs' not in thing) or ('outputs' not in thing):
                codedString = ""
                stringtoWrite = ""
            if codedString != "" and code:
                codedString = codedString + "\t" + str(thing['lineCount'])
                if getDescrip in UnicodeArchive:
                    thisOutput = UnicodeArchive[getDescrip]
                    #if category == '':
                    category = thisOutput['Category-Long']
                w.append([codedString, category, letter])
                f.write(codedString + "\n")
            if stringtoWrite != "" and human:
                stringtoWrite = stringtoWrite + "\t"
                fallback = False
                if language != "en":
                    if getDescrip.upper() in UnicodeArchive:
                        thisOutput = UnicodeArchive[getDescrip.upper()]
                        if "Name-" + language in thisOutput and thisOutput["Name-" + language] != "":
                            stringtoWrite = stringtoWrite + thisOutput['Name-' + language] + " (" + getDescrip + ")"
                        else:
                            u.write(getDescrip.upper()[2:]+" \t\n")
                        if getDescrip in UnicodeArchive:
                            thisOutput = UnicodeArchive[getDescrip.upper()]
                            #if category == '':
                            category = thisOutput['Category-Long']
                if language == "en" or fallback:
                    if getDescrip.upper() in UnicodeArchive:
                        thisOutput = UnicodeArchive[getDescrip.upper()]
                        if thisOutput["Name"] != "":
                            stringtoWrite = stringtoWrite + thisOutput['Name'] + " (" + getDescrip + ")"
                        else:
                            u.write(getDescrip.upper()[2:]+" \t\n")
                        if getDescrip in UnicodeArchive:
                            thisOutput = UnicodeArchive[getDescrip.upper()]
                            #if category == '':
                            category = thisOutput['Category-Long']
                #stringtoWrite = stringtoWrite.strip("\t]")
                if thing["type"] == "fallback":
                    stringtoWrite = stringtoWrite + "*"
                if stringtoWrite not in allList:
                    #This seems redundant
                    append(allList, stringtoWrite)
                    w.append([stringtoWrite, category, letter])
                    f.write(stringtoWrite + "\n")

    SortedCombos = sorted(w, key=lambda k: (k[1], k[2]))    
    for key, group in groupby(SortedCombos, key=lambda k: (k[1])):
        f.write("########\n" + key + "\n########\n")
        for thing in group:
            f.write(thing[0] + "\n")
    f.close()
    htm = open("outputs/" + passedKeyboard.getKeyboardName() + "_" + baseKB + "_" + language + '_Table.html', 'w', encoding="utf-8")
    h = []
    append(h,"<html><head><meta charset='utf-8'/></head><body>\n")
    if language == "en":
        append(h,"<h1>Combinations for " + passedKeyboard.getPrettyName() + " based on physical " + baseKB + " keyboard</h1>\n")
    elif language == "fr":
        append(h,"<h1>Combinaisons pour " + passedKeyboard.getPrettyName() + " basée sur le clavier physique " + baseKB + "</h1>\n")
    for key, group in groupby(SortedCombos, key=lambda k: (k[1])):
        append(h,"<h2>" + key + "</h2>\n")
        append(h,"<table>\n")
        for thing in group:
            append(h,"<tr>\n")
            splitter = thing[0].split("\t")
            for element in splitter:
                
                if element is splitter[0]:
                    element = sterilizeHTML(element)
                    regex = re.compile(r"\[K_(.*?)\]", re.IGNORECASE)
                    append(h,"<td><span class='input'>" + element + "</span></td>\n")
                if element is splitter[1]:
                    append(h,"<td><span class='arrow'>" + element + "</span></td>\n")
                if element is splitter[2]:
                    element = sterilizeHTML(element)
                    append(h,"<td><span class='output'>" + element + "</span></td>\n")
                if element is splitter[3] and element != "":
                    element = sterilizeHTML(element)
                    append(h,"<td><span class='descrip'>" + element + "</span></td>\n")
            append(h,"</tr>\n")
        append(h,"</table>\n")
    append(h,"</body></html>")
    htm.writelines(h)
    htm.close()
    u.close()
    print("Note: Output to HTML.")

def findSimplest(list):
    chosenFullKey = False
    chosenInput = False
    chosenLine = False
    for line in list:
        notSimple = []
        if "baseKey" not in line:
            print(line)
        if isinstance(line, dict) and "baseKey" in line and line['baseKey'].startswith("T_"):
            Found = False
        else:
            if line['lineCount'] ==142:
                print("pause")
            isPlussed = False
            if "inputs" in line:
                for input in line['inputs']:
                    if isinstance(input, str):
                        if input.upper().startswith("ANY("):
                            append(notSimple,"any")
                            if chosenFullKey == False and isPlussed :
                                chosenFullKey = input['fullKey']
                                chosenLine = line
                                chosenInput = input
                                chosenNotSimple = notSimple.copy()
                                notSimple = []
                        elif input.upper().startswith("+"):
                            isPlussed = True
                            #raise NotImplementedError
                        elif input.upper().startswith("DK("):
                            append(notSimple,"dk")
                            if chosenFullKey == False and isPlussed :
                                chosenFullKey = input['fullKey']
                                line['baseKey'] = input
                                chosenLine = line
                                chosenInput = input
                                chosenNotSimple = notSimple.copy()
                                notSimple = []
                        elif input.upper().startswith("PLATFORM("):
                            append(notSimple,"platform")
                        elif input.upper().startswith("U+"):
                            if chosenFullKey == False and isPlussed :
                                chosenFullKey = input
                                line['baseKey'] = input
                                chosenLine = line
                                chosenInput = input
                                chosenNotSimple = notSimple.copy()
                                notSimple = []
                    elif isinstance(input, dict):
                        if input["isCAPS"]:
                            append(notSimple,"caps")
                        if chosenFullKey == False and isPlussed :
                            chosenFullKey = input['fullKey']
                            #line['baseKey'] = input['fullKey']
                            chosenLine = line
                            chosenInput = input
                            chosenNotSimple = notSimple.copy()
                            notSimple = []
                        else:
                            if len(input['fullKey']) < len(chosenFullKey) and isPlussed and (len(notSimple) <= len(chosenNotSimple)):
                                chosenFullKey = input['fullKey']
                                chosenLine = line
                                chosenInput = input
        
    if chosenInput == False:
        print("Error: No Simple Solution Found")
    return chosenLine, chosenInput, chosenFullKey
                    



def RemoveDups(duplicate): 
    final_list = [] 
    for num in duplicate: 
        if num not in final_list: 
            append(final_list,num) 
    return final_list 

def importBlocks():
    print("Importing Unicode block data...")
    blocks = []
    u = open('Unicode/Blocks.txt', 'r', encoding="utf-8")
    for line in u:
        if not line.startswith("#") and not (line == "\n"):
            data = re.split('; |\.\.',line)
            min = int(data[0],16)
            max = int(data[1],16)
            minHex = data[0]
            maxHex = data[1]
            name = data[2].strip()
            tempRow = {"min":min,"max":max,"minHex":minHex,"maxHex":maxHex,"name":name}
            append(blocks,tempRow)
    print("Finished\n\n")
    return blocks

def addTranslation(language):
    if language == "fr":
        u = open('Unicode/UnicodeData-fr.txt', 'r', encoding="utf-8")
        for line in u:
            if "\n" in line:
                line = line[:-1].strip()
            if "\ufeff" in line:
                line = line.strip("\ufeff")
            elements = line.split('\t')
            if "U+"+ elements[0] in UnicodeArchive:
                entry = UnicodeArchive["U+"+ elements[0]]
                if len(elements) == 2:
                    entry["Name-" + language] = elements[1]
                else:
                    print("Error reading character.:" + elements)



def importUnicode(blocks):
    print("Importing Unicode character data...")
    CodePoint = {}
    u = open('Unicode/UnicodeData.txt', 'r', encoding="utf-8")
    for line in u:
        if "\n" in line:
            line = line[:-2]
        elements = line.split(';')

        CodepointProps = {}
        if elements[1] != '':
            CodepointProps['Name'] = elements[1]
        if elements[2] != '':
            CodepointProps['Category'] = elements[2]
            cat = elements[2]
            if cat == "Lu":
                CodepointProps['Category-Long'] = "Uppercase Letter"
                CodepointProps['Category-Descrip'] = "an uppercase letter"
            if cat == "Ll":
                CodepointProps['Category-Long'] = "Lowercase Letter"
                CodepointProps['Category-Descrip'] = "a lowercase letter"
            if cat == "Lt":
                CodepointProps['Category-Long'] = "Titlecase Letter"
                CodepointProps['Category-Descrip'] = "a digraphic character, with first part uppercase"
            if cat == "Lm":
                CodepointProps['Category-Long'] = "Modifier Letter"
                CodepointProps['Category-Descrip'] = "a modifier letter"
            if cat == "Lo":
                CodepointProps['Category-Long'] = "Other Letter"
                CodepointProps['Category-Descrip'] = "other letters, including syllables and ideographs"
            if cat == "Mn":
                #CodepointProps['Category-Long'] = "Nonspacing Mark"
                CodepointProps['Category-Long'] = "Diacritic"
                CodepointProps['Category-Descrip'] = "a nonspacing combining mark (zero advance width)"
            if cat == "Mc":
                CodepointProps['Category-Long'] = "Spacing Mark"
                CodepointProps['Category-Descrip'] = "a spacing combining mark (positive advance width)"
            if cat == "Me":
                CodepointProps['Category-Long'] = "Enclosing Mark"
                CodepointProps['Category-Descrip'] = "an enclosing combining mark"
            if cat == "Nd":
                CodepointProps['Category-Long'] = "Decimal Number"
                CodepointProps['Category-Descrip'] = "a decimal digit"
            if cat == "Nl":
                CodepointProps['Category-Long'] = "Letter Number"
                CodepointProps['Category-Descrip'] = "a letterlike numeric character"
            if cat == "No":
                CodepointProps['Category-Long'] = "Other Number"
                CodepointProps['Category-Descrip'] = "a numeric character of other type"
            if cat == "Pc":
                CodepointProps['Category-Long'] = "Connector Punctuation"
                CodepointProps['Category-Descrip'] = "a connecting punctuation mark, like a tie"
            if cat == "Pd":
                CodepointProps['Category-Long'] = "Dash Punctuation"
                CodepointProps['Category-Descrip'] = "a dash or hyphen punctuation mark"
            if cat == "Ps":
                CodepointProps['Category-Long'] = "Open Punctuation"
                CodepointProps['Category-Descrip'] = "an opening punctuation mark (of a pair)"
            if cat == "Pe":
                CodepointProps['Category-Long'] = "Close Punctuation"
                CodepointProps['Category-Descrip'] = "a closing punctuation mark (of a pair)"
            if cat == "Pi":
                CodepointProps['Category-Long'] = "Initial Punctuation"
                CodepointProps['Category-Descrip'] = "an initial quotation mark"
            if cat == "Pf":
                CodepointProps['Category-Long'] = "Final Punctuation"
                CodepointProps['Category-Descrip'] = "a final quotation mark"
            if cat == "Po":
                CodepointProps['Category-Long'] = "Other Punctuation"
                CodepointProps['Category-Descrip'] = "a punctuation mark of other type"
            if cat == "Sm":
                CodepointProps['Category-Long'] = "Math Symbol"
                CodepointProps['Category-Descrip'] = "a symbol of mathematical use"
            if cat == "Sc":
                CodepointProps['Category-Long'] = "Currency Symbol"
                CodepointProps['Category-Descrip'] = "a currency sign"
            if cat == "Sk":
                CodepointProps['Category-Long'] = "Modifier Symbol"
                CodepointProps['Category-Descrip'] = "a non-letterlike modifier symbol"
            if cat == "So":
                CodepointProps['Category-Long'] = "Other Symbol"
                CodepointProps['Category-Descrip'] = "a symbol of other type"
            if cat == "Zs":
                CodepointProps['Category-Long'] = "Space Separator"
                CodepointProps['Category-Descrip'] = "a space character (of various non-zero widths)"
            if cat == "Zl":
                CodepointProps['Category-Long'] = "Line Separator"
                CodepointProps['Category-Descrip'] = "U+2028 LINE SEPARATOR only"
            if cat == "Zp":
                CodepointProps['Category-Long'] = "Paragraph Separator"
                CodepointProps['Category-Descrip'] = "U+2029 PARAGRAPH SEPARATOR only"
            if cat == "Cc":
                CodepointProps['Category-Long'] = "Control"
                CodepointProps['Category-Descrip'] = "a C0 or C1 control code"
            if cat == "Cf":
                CodepointProps['Category-Long'] = "Format"
                CodepointProps['Category-Descrip'] = "a format control character"
            if cat == "Cs":
                CodepointProps['Category-Long'] = "Surrogate"
                CodepointProps['Category-Descrip'] = "a surrogate code point"
            if cat == "Co":
                CodepointProps['Category-Long'] = "Private Use"
                CodepointProps['Category-Descrip'] = "a private-use character"
        if elements[3] != '':
            CodepointProps['Combining Class'] = elements[3]
        if elements[4] != '':
            CodepointProps['Bidi Class'] = elements[4]
        if elements[5] != '':
            CodepointProps['Decomp Mapping'] = elements[5]
        if elements[6] != '':
            CodepointProps['Decimal Value'] = elements[6]
        if elements[7] != '':
            CodepointProps['Digit Value'] = elements[7]
        if elements[8] != '':
            CodepointProps['Numeric Value'] = elements[8]
        if elements[9] != '' and elements[9] != "N":
            CodepointProps['Bidi Mirrored'] = elements[9]
        if elements[10] != '' and elements[10] != "NULL":
            CodepointProps['Unicode 1 Name'] = elements[10]
        if elements[11] != '':
            CodepointProps['Comment'] = elements[11]
        if elements[12] != '':
            CodepointProps['Uppercase'] = elements[12]
        if elements[13] != '':
            CodepointProps['Lowercase'] = elements[13]
        codeName = "U+" + elements[0]
        CodePoint[codeName] = CodepointProps 
    print("Finished.\n")
    return CodePoint
    # https://github.com/jessetane/unicode-database-parser/blob/master/defs.json

def outputKeyValues(passedKeyboard):
    from itertools import groupby
    keyboard = passedKeyboard.getCombos()
    SortedCombosOutput = sorted(keyboard, key=lambda k: ("baseOutput" not in k, k.get("baseOutput", None),"baseKey" not in k, k.get("baseKey", None)))
    f = open("outputs/" + passedKeyboard.getKeyboardName() + '_SortedCombos.txt', 'w', encoding="utf-8")
    for key, group in groupby(SortedCombosOutput, key=lambda k: ("baseOutput" not in k, k.get("baseOutput", None))):
        for thing in group:
            if 'baseOutput' in thing:
                tempBaseKey = ""
                if 'baseKey' in thing:
                    tempBaseKey = thing['baseKey']
                    spacer = " - "
                    stringtoWrite = thing['line'] + spacer + tempBaseKey
                    f.write(stringtoWrite + "\n")

        f.write("\n")
    f.close()
    # https://stackoverflow.com/questions/29051573/python-filter-list-of-dictionaries-based-on-key-value

def missingCombo(passedKeyboard):
    from itertools import groupby
    #keyboard = passedKeyboard.getCombos()
    keyboard = passedKeyboard.getSimpleCombos()
    #keyboard = passedKeyboard.getNormalCombos()
    SortedCombosKey = sorted(keyboard, key=lambda k: ("baseKey" not in k, k.get("baseKey", None),"baseOutput" not in k, k.get("baseOutput", None)))
    cfile = open("outputs/" + passedKeyboard.getKeyboardName() + '_MissingCombos.txt', 'w', encoding="utf-8")
    stringList = []
    #https://help.keyman.com/DEVELOPER/language/guide/virtual-keys
    

    processedKeyList = []
    listy = groupby(SortedCombosKey, key=lambda k: ("baseKey" not in k, k.get("baseKey", None)))
    for key, group in listy:
            if key[1] is not None and "K_" in key[1]:
                checkOut(passedKeyboard,key,group,cfile, processedKeyList)
    for entry in kbLinks:
        addKey = entry["keyman"]
        checkOut(passedKeyboard,addKey,[],cfile, processedKeyList) 
    cfile.close()


def checkOut(passedKeyboard,key,group, f, processedKeys):
    # Val   =               SHIFT     NCAPS   CAPS    RALT    LALT    ALT     RCTRL   LCTRL   CTRL
    flags0 =                [False,   False,  False,  False,  False,  False,  False,  False,  False]
    flags1_SHIFT =          [True,    False,  False,  False,  False,  False,  False,  False,  False]
    flags2_NCAPS =          [False,   True,   False,  False,  False,  False,  False,  False,  False]
    flags3_NCAPS_SHIFT =    [True,    True,   False,  False,  False,  False,  False,  False,  False]
    flags4_CAPS =           [False,   False,  True,   False,  False,  False,  False,  False,  False]
    flags5_CAPS_SHIFT =     [True,    False,  True,   False,  False,  False,  False,  False,  False]
    flags6_NCAPS_RALT =     [False,   True,   False,  True,   False,  False,  False,  False,  False]
    flags7_NCAPS_SHIFT_RALT=[True,    True,   False,  True,   False,  False,  False,  False,  False]
    flags8_RALT_CAPS =      [False,   False,  True,   True,   False,  False,  False,  False,  False]
    flags9_CAPS_SHIFT_RALT= [True,    False,  True,   True,   False,  False,  False,  False,  False]

    needs0 = False
    needs1 = False
    needs2 = False
    needs3 = False
    needs4 = False
    needs5 = False
    needs6 = False
    needs7 = False
    needs8 = False
    needs9 = False
    if (passedKeyboard.getVariable('containsSHIFT')) and (not passedKeyboard.getVariable('containsNCAPS')) and (not passedKeyboard.getVariable('containsCAPS')):
        needs0 = True
        needs1 = True
    elif (passedKeyboard.getVariable('containsSHIFT')) and (passedKeyboard.getVariable('containsNCAPS')) and (passedKeyboard.getVariable('containsCAPS')):
        needs2 = True
        needs3 = True
        needs4 = True
        needs5 = True
    if passedKeyboard.getVariable('containsRALT'):
        needs6 = True
        needs7 = True
        needs8 = True
        needs9 = True
    if (needs0) and (not needs2):
        #Must be Mnemonic
        needs0 = False
        needs1 = False
        needs2 = True
        needs3 = True
        needs4 = True
        needs5 = True
    lastKey = None
    for combo in group:
        if ("rule" in combo['type']) and ("touch" not in combo['type']):
            if "inputs" in combo:
                for item in combo['inputs']:
                    if "fullKey" in item:
                        currentFlags = [item['isSHIFT'],item['isNCAPS'],item['isCAPS'],item['isRALT'],item['isLALT'],item['isALT'],item['isRCTRL'],item['isLCTRL'],item['isCTRL']]
                        if currentFlags == flags0:
                            needs0 = False
                            append(processedKeys,combo['comboFullKey'])
                        elif currentFlags == flags1_SHIFT:
                            needs1 = False
                            append(processedKeys,combo['comboFullKey'])
                        elif currentFlags == flags2_NCAPS:
                            needs2 = False
                            append(processedKeys,combo['comboFullKey'])
                        elif currentFlags == flags3_NCAPS_SHIFT:
                            needs3 = False
                            append(processedKeys,combo['comboFullKey'])
                        elif currentFlags == flags4_CAPS:
                            needs4 = False
                            append(processedKeys,combo['comboFullKey'])
                        elif currentFlags == flags5_CAPS_SHIFT:
                            needs5 = False
                            append(processedKeys,combo['comboFullKey'])
                        elif currentFlags == flags6_NCAPS_RALT:
                            needs6 = False
                            append(processedKeys,combo['comboFullKey'])
                        elif currentFlags == flags7_NCAPS_SHIFT_RALT:
                            needs7 = False
                            append(processedKeys,combo['comboFullKey'])
                        elif currentFlags == flags8_RALT_CAPS:
                            needs8 = False
                            append(processedKeys,combo['comboFullKey'])
                        elif currentFlags == flags9_CAPS_SHIFT_RALT:
                            needs9 = False
                            append(processedKeys,combo['comboFullKey'])
                        lastKey = item['isKey']

    if lastKey is None:
        lastKey = key
    if needs0 or needs1 or needs2 or needs3 or needs4 or needs5 or needs6 or needs7 or needs8 or needs9:
        print(passedKeyboard.getKeyboardName())
        f.write(passedKeyboard.getKeyboardName() + "\n")
    if needs0:
        tempDef = {}
        tempDef["type"] = "fallback"
        tempDef["comboFullKey"] = "[" + lastKey + "]"
        if keypress["comboFullKey"] not in processedKeys:
            print("Warning: Missing [] for:" + lastKey)
            f.write("Warning: Missing [] for:" + lastKey + "\n")
            tempDef["baseKey"] = lastKey
            keypress = {"isSHIFT" : False, "isNCAPS" : False, "isCAPS" : False,
                                            "isRALT" : False, "isLALT" : False, "isALT" : False,
                                            "isRCTRL" : False, "isLCTRL" : False, "isCTRL" : False, "outputs":[]}
            keypress["isKey"] = lastKey
            keypress["fullKey"] = tempDef["comboFullKey"]
            tempDef["inputs"] = ["+",keypress]
            passedKeyboard.addCombo(tempDef)
    if needs1:
        tempDef = {}
        tempDef["type"] = "fallback"
        tempDef["comboFullKey"] = "[SHIFT " + lastKey + "]"
        if keypress["comboFullKey"] not in processedKeys:
            print("Warning: Missing [SHIFT] for:" + lastKey)
            f.write("Warning: Missing [SHIFT] for:" + lastKey + "\n")
            tempDef["baseKey"] = lastKey
            keypress = {"isSHIFT" : False, "isNCAPS" : False, "isCAPS" : False,
                                            "isRALT" : False, "isLALT" : False, "isALT" : False,
                                            "isRCTRL" : False, "isLCTRL" : False, "isCTRL" : False, "outputs":[]}
            keypress["isKey"] = lastKey
            keypress["fullKey"] = tempDef["comboFullKey"]
            tempDef["inputs"] = ["+",keypress]
            passedKeyboard.addCombo(tempDef)
    if needs2:
        tempDef = {}
        tempDef["type"] = "fallback"
        tempDef["comboFullKey"] = "[NCAPS " + lastKey + "]"
        if tempDef["comboFullKey"] not in processedKeys:
            print("Warning: Missing [NCAPS] for:" + lastKey)
            f.write("Warning: Missing [NCAPS] for:" + lastKey + "\n")
            tempDef["baseKey"] = lastKey
            keypress = {"isSHIFT" : False, "isNCAPS" : False, "isCAPS" : False,
                                            "isRALT" : False, "isLALT" : False, "isALT" : False,
                                            "isRCTRL" : False, "isLCTRL" : False, "isCTRL" : False, "outputs":[]}
            keypress["isKey"] = lastKey
            keypress["fullKey"] = tempDef["comboFullKey"]
            tempDef["inputs"] = ["+",keypress]
            passedKeyboard.addCombo(tempDef)
    if needs3:
        tempDef = {}
        tempDef["type"] = "fallback"
        tempDef["comboFullKey"] = "[NCAPS SHIFT " + lastKey + "]"
        if tempDef["comboFullKey"] not in processedKeys:
            print("Warning: Missing [NCAPS SHIFT] for:" + lastKey)
            f.write("Warning: Missing [NCAPS SHIFT] for:" + lastKey + "\n")
            tempDef["baseKey"] = lastKey
            keypress = {"isSHIFT" : False, "isNCAPS" : False, "isCAPS" : False,
                                            "isRALT" : False, "isLALT" : False, "isALT" : False,
                                            "isRCTRL" : False, "isLCTRL" : False, "isCTRL" : False, "outputs":[]}
            keypress["isKey"] = lastKey
            keypress["fullKey"] = tempDef["comboFullKey"]
            tempDef["inputs"] = ["+",keypress]
            passedKeyboard.addCombo(tempDef)
    if needs4:
        tempDef = {}
        tempDef["type"] = "fallback"
        tempDef["comboFullKey"] = "[CAPS " + lastKey + "]"
        if tempDef["comboFullKey"] not in processedKeys:
            print("Warning: Missing [CAPS] for:" + lastKey)
            f.write("Warning: Missing [CAPS] for:" + lastKey + "\n")
            tempDef["baseKey"] = lastKey
            keypress = {"isSHIFT" : False, "isNCAPS" : False, "isCAPS" : False,
                                            "isRALT" : False, "isLALT" : False, "isALT" : False,
                                            "isRCTRL" : False, "isLCTRL" : False, "isCTRL" : False, "outputs":[]}
            keypress["isKey"] = lastKey
            keypress["fullKey"] = tempDef["comboFullKey"]
            tempDef["inputs"] = ["+",keypress]
            passedKeyboard.addCombo(tempDef)
    if needs5:
        tempDef = {}
        tempDef["type"] = "fallback"
        tempDef["comboFullKey"] = "[CAPS SHIFT " + lastKey + "]"
        if tempDef["comboFullKey"] not in processedKeys:
            print("Warning: Missing [CAPS SHIFT] for:" + lastKey)
            f.write("Warning: Missing [CAPS SHIFT] for:" + lastKey + "\n")
            tempDef["baseKey"] = lastKey
            keypress = {"isSHIFT" : False, "isNCAPS" : False, "isCAPS" : False,
                                            "isRALT" : False, "isLALT" : False, "isALT" : False,
                                            "isRCTRL" : False, "isLCTRL" : False, "isCTRL" : False, "outputs":[]}
            keypress["isKey"] = lastKey
            keypress["fullKey"] = tempDef["comboFullKey"]
            tempDef["inputs"] = ["+",keypress]
            passedKeyboard.addCombo(tempDef)
    if needs6:
        tempFullKey = "[NCAPS RALT " + lastKey + "]"
        if tempFullKey not in processedKeys:
            print("Warning: Missing [NCAPS RALT] for:" + lastKey)
            f.write("Warning: Missing [NCAPS RALT] for:" + lastKey + "\n")
    if needs7:
        tempFullKey = "[NCAPS SHIFT RALT " + lastKey + "]"
        if tempFullKey not in processedKeys:
            print("Warning: Missing [NCAPS SHIFT RALT] for:" + lastKey)
            f.write("Warning: Missing [NCAPS SHIFT RALT] for:" + lastKey + "\n")
    if needs8:
        tempFullKey = "[CAPS RALT " + lastKey + "]"
        if tempFullKey not in processedKeys:
            print("Warning: Missing [CAPS RALT] for:" + lastKey)
            f.write("Warning: Missing [CAPS RALT] for:" + lastKey + "\n")
    if needs9:
        tempFullKey = "[CAPS SHIFT RALT " + lastKey + "]"
        if tempFullKey not in processedKeys:
            print("Warning: Missing [CAPS SHIFT RALT] for:" + lastKey)
            f.write("Warning: Missing [CAPS SHIFT RALT] for:" + lastKey + "\n")
    print("Checked Out")

def printToJson(filenameToParse):
    jsonName = filenameToParse + ".json"
    with open("outputs/" + jsonName, 'w') as fp:
        json.dump({filenameToParse : archive[filenameToParse]}, fp, indent=4)

def writeKeyboardGist(passedKeyboard, color=True, layout = "en-us", language = "en", mnemonic=False):
    #Current Supported Layouts ar US102, and AZERTY
    #see http://kbdlayout.info/ for layout hints.
    #thisKBProps = passedKeyboard
    #color = False
    if color:
        normalColor = "#cccccc"
        shiftColor = "#d6cf04"
        altGrColor = "#8cb1fa"
    else:
        normalColor = "#cccccc"
        shiftColor = "#cccccc"
        altGrColor = "#cccccc"
    c = "c"
    w = "w"
    x = "x"
    w = "w"
    h = "h"
    a = "a"
    w2 = "w2"
    h2 = "h2"
    x2 = "x2"
    type = ""
    #based on https://keyshorts.com/blogs/blog/44712961-how-to-identify-laptop-keyboard-localization
    if layout in ["en-us", "ar-101", "ko", "he-is", "ru", "th", "nl-nl", "it-it", "el-el", "pl-pl"]:
        type = "ANSI104"
        keyList = [
            ["K_BKQUOTE","K_1","K_2","K_3","K_4","K_5","K_6","K_7","K_8","K_9","K_0","K_HYPHEN","K_EQUAL",[{w: 2 }, "\nBkspce"]],
            [[{w: 1.5 },"\nTab"],"K_Q","K_W","K_E","K_R","K_T","K_Y","K_U","K_I","K_O","K_P","K_LBRKT","K_RBRKT",{w: 1.5},"K_BKSLASH"],
            [[{w: 1.75 }, "\nCaps Lock"],"K_A","K_S","K_D","K_F","K_G","K_H","K_J","K_K","K_L","K_COLON","K_QUOTE",[{w: 2.25}, "\nEnter"]],
            [[{c:shiftColor, w: 2.25},"\nShift"],{c: normalColor},"K_Z","K_X","K_C","K_V","K_B","K_N","K_M","K_COMMA","K_PERIOD","K_SLASH",[{c:shiftColor,w: 2.75},"\nShift"]],
            [[{c: normalColor, w: 1.25},"\nCtrl"],[{w: 1.25},"\nWin"],[{w: 1.25},"\nAlt"],[{a: 7,w: 6.25},""],[{c: altGrColor,a: 4,w: 1.25},"\nAlt"],[{c: normalColor,w: 1.25},"\nWin"],[{w: 1.25},"\nMenu"],[{w: 1.25},"\nCtrl"]]
          ]
    elif layout in ["en-uk","fr-fr","fr-ch","de-ch","de-de","ar-102","ar-102az"]:
        type = "ISO105"
        keyList = [
            ["K_BKQUOTE","K_1","K_2","K_3","K_4","K_5","K_6","K_7","K_8","K_9","K_0","K_HYPHEN","K_EQUAL",[{w: 2 }, "\nBkspce"]],
            [[{w: 1.5 },"\nTab"],"K_Q","K_W","K_E","K_R","K_T","K_Y","K_U","K_I","K_O","K_P","K_LBRKT","K_RBRKT",[{x:0.25,w:1.25,h:2,w2:1.5,h2:1,x2:-0.25},'<span class="return">Return</span>']],
            [[{w: 1.75 }, "\nCaps Lock"],"K_A","K_S","K_D","K_F","K_G","K_H","K_J","K_K","K_L","K_COLON","K_QUOTE","K_BKSLASH"],
            [[{c:shiftColor,w: 1.25},"\nShift"],{c:normalColor},"K_oE2","K_Z","K_X","K_C","K_V","K_B","K_N","K_M","K_COMMA","K_PERIOD","K_SLASH",[{c:shiftColor,w: 2.75},"\nShift"]],
            [[{c:normalColor,w: 1.25},"\nCtrl"],[{w: 1.25},"\nWin"],[{w: 1.25},"\nAlt"],{w: 6.25},"K_SPACE", [{c: altGrColor,w: 1.25},"\nAltGR"],[{c: normalColor,w: 1.25},"\nWin"],[{w: 1.25},"\nMenu"],[{w: 1.25},"\nCtrl"]]
            ]
    else:
        print("I don't know that physical layout yet! Trying ISO 105.")
        type = "ISO105"
        keyList = [
            ["K_BKQUOTE","K_1","K_2","K_3","K_4","K_5","K_6","K_7","K_8","K_9","K_0","K_HYPHEN","K_EQUAL",[{w: 2 }, "\nBkspce"]],
            [[{w: 1.5 },"\nTab"],"K_Q","K_W","K_E","K_R","K_T","K_Y","K_U","K_I","K_O","K_P","K_LBRKT","K_RBRKT",[{x:0.25,w:1.25,h:2,w2:1.5,h2:1,x2:-0.25},'<span class="return">Return</span>']],
            [[{w: 1.75 }, "\nCaps Lock"],"K_A","K_S","K_D","K_F","K_G","K_H","K_J","K_K","K_L","K_COLON","K_QUOTE","K_BKSLASH"],
            [[{c:shiftColor,w: 1.25},"\nShift"],{c:normalColor},"K_oE2","K_Z","K_X","K_C","K_V","K_B","K_N","K_M","K_COMMA","K_PERIOD","K_SLASH",[{c:shiftColor,w: 2.75},"\nShift"]],
            [[{c:normalColor,w: 1.25},"\nCtrl"],[{w: 1.25},"\nWin"],[{w: 1.25},"\nAlt"],{w: 6.25},"K_SPACE", [{c: altGrColor,w: 1.25},"\nAltGR"],[{c: normalColor,w: 1.25},"\nWin"],[{w: 1.25},"\nMenu"],[{w: 1.25},"\nCtrl"]]
            ]

    header =   {
    "backcolor": "#ffffff",
    "name": passedKeyboard.getPrettyName() + " (" + type + ")",
    "author": passedKeyboard.getVariable('&COPYRIGHT'),
    "background": {
      "name": "Carbon fibre 5",
      "style": "background-image: url('/bg/carbonfibre/carbon_texture1876.jpg');"
    },
    "radii": "20px"
    }
    fullKB = [header]
    for row in keyList:
        tempRow = rowGenerator(row, passedKeyboard)
        append(fullKB,tempRow)
    jsonName = passedKeyboard.getKeyboardName() + "_" + type + "_" + ".kbd.json"
    with open("outputs/" + jsonName, 'w', encoding="UTF-8") as fp:
        json.dump(fullKB, fp, indent=4)

def writeKVKS(passedKeyboard,font):
    flags0 =                [False,   False,  False,  False,  False,  False,  False,  False,  False]
    flags1_SHIFT =          [True,    False,  False,  False,  False,  False,  False,  False,  False]
    flags2_NCAPS =          [False,   True,   False,  False,  False,  False,  False,  False,  False]
    flags3_NCAPS_SHIFT =    [True,    True,   False,  False,  False,  False,  False,  False,  False]
    flags4_CAPS =           [False,   False,  True,   False,  False,  False,  False,  False,  False]
    flags5_CAPS_SHIFT =     [True,    False,  True,   False,  False,  False,  False,  False,  False]
    flags6_NCAPS_RALT =     [False,   True,   False,  True,   False,  False,  False,  False,  False]
    flags7_NCAPS_SHIFT_RALT=[True,    True,   False,  True,   False,  False,  False,  False,  False]
    flags8_RALT_CAPS =      [False,   False,  True,   True,   False,  False,  False,  False,  False]
    flags9_CAPS_SHIFT_RALT= [True,    False,  True,   True,   False,  False,  False,  False,  False]
    base = {}
    S = {}
    SRA = {}
    RA = {}
    for combo in passedKeyboard.getSimpleCombos():
        if 'inputs' in combo:
            inputs = combo['inputs']
            for item in inputs:
                if isinstance(item,dict):
                    localizedKey = ""
                    currentFlags = [item['isSHIFT'],item['isNCAPS'],item['isCAPS'],item['isRALT'],item['isLALT'],item['isALT'],item['isRCTRL'],item['isLCTRL'],item['isCTRL']]
                    if currentFlags == flags0:
                        if 'outputs' in combo:
                            for output in combo['outputs']:
                                if output.startswith("U+"):
                                    letterCode = output.strip().upper()[2:]
                                    letter = chr(int(letterCode, 16))
                                    localizedKey += letter
                        localizedKey = sterilizeHTML(localizedKey)
                        if "baseKey" in combo:
                            base.update({combo['baseKey']: localizedKey})
                    if currentFlags == flags1_SHIFT:
                        if 'outputs' in combo:
                            for output in combo['outputs']:
                                if output.startswith("U+"):
                                    letterCode = output.strip().upper()[2:]
                                    letter = chr(int(letterCode, 16))
                                    localizedKey += letter
                        localizedKey = sterilizeHTML(localizedKey)
                        if "baseKey" in combo:
                            S.update({combo['baseKey']: localizedKey})
                    if currentFlags == flags2_NCAPS:
                        if 'outputs' in combo:
                            for output in combo['outputs']:
                                if output.startswith("U+"):
                                    letterCode = output.strip().upper()[2:]
                                    letter = chr(int(letterCode, 16))
                                    localizedKey += letter
                        localizedKey = sterilizeHTML(localizedKey)
                        if "baseKey" in combo:
                            base.update({combo['baseKey']: localizedKey})
                    if currentFlags == flags3_NCAPS_SHIFT:
                        if 'outputs' in combo:
                            for output in combo['outputs']:
                                if output.startswith("U+"):
                                    letterCode = output.strip().upper()[2:]
                                    letter = chr(int(letterCode, 16))
                                    localizedKey += letter
                        localizedKey = sterilizeHTML(localizedKey)
                        if "baseKey" in combo:
                            S.update({combo['baseKey']: localizedKey})
                    if currentFlags == flags6_NCAPS_RALT:
                        if 'outputs' in combo:
                            for output in combo['outputs']:
                                if output.startswith("U+"):
                                    letterCode = output.strip().upper()[2:]
                                    letter = chr(int(letterCode, 16))
                                    localizedKey += letter
                        localizedKey = sterilizeHTML(localizedKey)
                        if "baseKey" in combo:
                            RA.update({combo['baseKey']: localizedKey})
                    if currentFlags == flags7_NCAPS_SHIFT_RALT:
                        if 'outputs' in combo:
                            for output in combo['outputs']:
                                if output.startswith("U+"):
                                    letterCode = output.strip().upper()[2:]
                                    letter = chr(int(letterCode, 16))
                                    localizedKey += letter
                        localizedKey = sterilizeHTML(localizedKey)
                        if "baseKey" in combo:
                            SRA.update({combo['baseKey']: localizedKey})
    k = open("outputs/" + passedKeyboard.getKeyboardName()[:-4] + '.kvks', 'w', encoding="utf-8")
    header = "<?xml version='1.0' encoding='utf-8'?>\n<visualkeyboard>\n  <header>\n    <version>10.0</version>\n    <kbdname>sil_cameroon_azerty</kbdname>\n    <flags>\n      <key102/>\n      <usealtgr/>\n    </flags>\n  </header>\n <encoding name='unicode' fontname='"+ font + "' fontsize='-12'>\n"
    k.write(header)
    k.write("<layer shift='RA'>\n")
    for key in RA:
        k.write("<key vkey='"+ key +"'>"+ RA[key]+"</key>\n")
    k.write("</layer>\n")

    k.write("<layer shift='SRA'>\n")
    for key in SRA:
        k.write("<key vkey='"+ key +"'>"+ SRA[key]+"</key>\n")
    k.write("</layer>\n")

    k.write("<layer shift=''>\n")
    for key in base:
        k.write("<key vkey='"+ key +"'>"+ base[key]+"</key>\n")
    k.write("</layer>\n")

    k.write("<layer shift='S'>\n")
    for key in S:
        k.write("<key vkey='"+ key +"'>"+ S[key]+"</key>\n")
    k.write("</layer>\n")

    footer = "  </encoding>\n</visualkeyboard>"
    k.write(footer)
    k.close()

def prep(text):
    #Prepares diacritics for output
    if len(text) > 0:
        thisCode = u'U+%04x'%ord(text[0])
        thisChar = UnicodeArchive[thisCode.upper()]
        if 'Category' in thisChar and thisChar['Category'] in combiners:
            for line in UnicodeBlocks:
                if int(thisCode[2:],16) >= line['min'] and int(thisCode[2:],16) <= line['max']:
                    block = line['name']
                    break
            text = chr(int("25CC", 16)) + text
            RTLblocks = ["Arabic","Hebrew","Aramaic","Persian"]
            for name in RTLblocks:
                if name in block:
                    text = chr(int("200F", 16)) + text
    return text 

def sterilizeHTML(text):
    text = prep(text)
    if "&" in text:
        text = text.replace("&","&amp;")
    if ">" in text:
        text = text.replace(">","&gt;")
    if "<" in text:
        text = text.replace("<","&lt;")
    return text
def rowGenerator(keyList, passedKeyboard):
    expectedResult = [d for d in kbLinks if (d['row'] == 0)]
    rowList = []
    # Val   =               SHIFT    NCAPS   CAPS    RALT    LALT    ALT     RCTRL   LCTRL   CTRL
    flags0_BASE =           [False,  False,  False,  False,  False,  False,  False,  False,  False]
    flags1_SHIFT =          [False,  False,  False,  False,  False,  False,  False,  False,  False]
    flags2_NCAPS =          [False,  True,   False,  False,  False,  False,  False,  False,  False]
    flags3_NCAPS_SHIFT =    [True,   True,   False,  False,  False,  False,  False,  False,  False]
    flags5_RALT =           [False,  False,  False,  True,   False,  False,  False,  False,  False]
    flags6_NCAPS_RALT =     [False,  True,   False,  True,   False,  False,  False,  False,  False]
    flags7_NCAPS_SHIFT_RALT=[True,   True,   False,  True,   False,  False,  False,  False,  False]
    #for key in expectedResult:
    for inkey in keyList:
        preString = ""
        postString = ""
        controlString = ""
        if isinstance(inkey, list):
            # Contains override text
            key = inkey[1]
            postString = inkey[1]
            preString = inkey[0]
        if isinstance(inkey, dict):
            # Contains override info
            key = ""
            controlString = inkey
        if isinstance(inkey, str):
            # Regular
            key = inkey
        currentKey = {}
        currentKey['bottomLeft'] = u""
        currentKey['topLeft'] = u""
        currentKey['bottomRight'] = u""
        currentKey['topRight'] = u""
        if 0==0:
            for combo in [a for a in passedKeyboard.getSimpleCombos() if (('baseKey' in a) and (a['baseKey'] == key))]:
                if ("rule" in combo['type']) and ("touch" not in combo['type']) and ("deadEnd" not in combo['type']) and ("dk" not in combo['type']):
                    if "inputs" in combo:
                        for item in combo['inputs']:
                            if "fullKey" in item:
                                testing = True
                                currentFlags = [item['isSHIFT'],item['isNCAPS'],item['isCAPS'],item['isRALT'],item['isLALT'],item['isALT'],item['isRCTRL'],item['isLCTRL'],item['isCTRL']]
                                #Bottom Left
                                if (currentFlags == flags0_BASE) or (currentFlags == flags2_NCAPS):
                                    oldKey = currentKey['bottomLeft']
                                    currentKey['bottomLeft'] = u""
                                    for outItem in combo['outputs']:
                                        if "U+" in outItem:
                                            if 'bottomLeft' not in currentKey:
                                                currentKey['bottomLeft'] = chr(int(outItem.strip().upper()[-4:], 16))
                                            else:
                                                currentKey['bottomLeft'] = currentKey['bottomLeft'] + chr(int(outItem.strip().upper()[-4:], 16))
                                    if (oldKey != u"") and (oldKey != currentKey['bottomLeft']):
                                        print("Warning: These don't match:", combo['line'] )
                                #Top Left
                                if (currentFlags == flags1_SHIFT) or (currentFlags == flags3_NCAPS_SHIFT):
                                    oldKey = currentKey['topLeft']
                                    currentKey['topLeft'] = u""
                                    for outItem in combo['outputs']:
                                        if "U+" in outItem:
                                            if 'topLeft' not in currentKey:
                                                currentKey['topLeft'] = chr(int(outItem.strip().upper()[-4:], 16))
                                            else:
                                                currentKey['topLeft'] = currentKey['topLeft'] + chr(int(outItem.strip().upper()[-4:], 16))
                                    if (oldKey != u"") and (oldKey != currentKey['topLeft']):
                                        print("Warning: These don't match:", combo['line'] )
                                #Top Right
                                if (currentFlags == flags7_NCAPS_SHIFT_RALT):
                                    oldKey = currentKey['topRight']
                                    currentKey['topRight'] = u""
                                    for outItem in combo['outputs']:
                                        if "U+" in outItem:
                                            if 'topRight' not in currentKey:
                                                currentKey['topRight'] = chr(int(outItem.strip().upper()[-4:], 16))
                                            else:
                                                currentKey['topRight'] = currentKey['topRight'] + chr(int(outItem.strip().upper()[-4:], 16))
                                    if (oldKey != u"") and (oldKey != currentKey['topRight']):
                                        print("These don't match:", combo['line'] )
                                #Bottom Right
                                if (currentFlags == flags5_RALT) or (currentFlags == flags6_NCAPS_RALT):
                                    oldKey = currentKey['bottomRight']
                                    currentKey['bottomRight'] = u""
                                    for outItem in combo['outputs']:
                                        if "U+" in outItem:
                                            if 'bottomRight' not in currentKey:
                                                currentKey['bottomRight'] = chr(int(outItem.strip().upper()[-4:], 16))
                                            else:
                                                currentKey['bottomRight'] = currentKey['bottomRight'] + chr(int(outItem.strip().upper()[-4:], 16))
                                    if (oldKey != u"") and (oldKey != currentKey['bottomRight']):
                                        print("Warning: These don't match:", combo['line'] )
            if preString != "":
                append(rowList,preString)
                keyString = postString
            elif controlString != "":
                keyString = controlString
            else:
                keyString = prep(currentKey['topLeft']) + u"\n" + prep(currentKey['bottomLeft']) + u"\n" + prep(currentKey['topRight']) + u"\n" + prep(currentKey['bottomRight']) + u"\n"
            append(rowList,keyString)
    return rowList

def findAllUnattainableInputs(passedKeyboard):
    #ToDo, for Mnemonic Keyboards, add all Unicode Values of the baseKB 
    filenameToParse="KLC/" + "en-us" + ".klc"
    baseKeyboard = parseKB(filenameToParse)
    for line in passedKeyboard.getCombos():
        if 'inputs' in line:
            for input in line['inputs']:
                if isinstance(input, str) and (input.upper().startswith("if(") or input.upper().startswith("platform") or (input.upper().startswith("if("))):
                    pass
                elif isinstance(input, str) and input.upper() not in ["MATCH","UNICODE","BEGIN"]:
                    if input.upper().startswith("ANY"):
                        verbose(line['lineCount'],"Any")
                        #check if store exists
                    elif input.upper().startswith("PLATFORM"):
                        verbose(line['lineCount'],"Platform")
                    elif input.upper().startswith("GROUP"):
                        verbose(line['lineCount'],"Group")
                    elif input.upper().startswith("+"):
                        verbose(line['lineCount'],"Plus")
                    else:
                        listing = passedKeyboard.getCombosByOutput(input)
                        if passedKeyboard.getVariable("mnemonic"):
                            listing2 = baseKeyboard.getCombosByOutput(input)
                            listing = listing + listing2
                        if len(listing) == 0:
                            print("Warning: Input " + input + " from " + line['line'] + " unattainable on " + passedKeyboard.getKeyboardName() + ". This rule will never fire.")
                            #TODO this is missing something


def analyzeKB(passedKeyboard):
    inferCaps(passedKeyboard)
    missingCombo(passedKeyboard)
    findAllUnattainableInputs(passedKeyboard)
    outputKeyValues(passedKeyboard)

def documentKB(passedKeyboard, infilter, deadkeyNames, layout="en-us", font="Andika", language="en"):
    printKeyList(passedKeyboard, False, True, layout, infilter, deadkeyNames, language)
    writeKeyboardGist(passedKeyboard, True, layout,language)
    writeKVKS(passedKeyboard,font)


keyboardRepo = {}
filters = ["BEEP", "ANY(", "USE(", "NUL", "CONTEXT", "T_", "[Caps]"]
deadkeyNames = [['dk(003B)', "Cam Key"],['dk(0021)', "Cam Key"]]
UnicodeBlocks = importBlocks()
UnicodeArchive = importUnicode(UnicodeBlocks)

#fileList = ["sil_cameroon_qwerty.kmn","FUBHAUASAZ.klc","FUBHAUASQW.klc","FUBRSQW.klc","FUBRSAZ.klc"]

fileList = [("sil_cameroon_qwerty.kmn",["en-us","en-uk","fr-ch","de-de","ar-101"],"Andika"),
            ("sil_euro_latin.kmn",["en-us","en-uk","fr-ch","de-de","ar-101"],"Andika"),
            ("FUBHAUASQW.klc",["en-us","en-uk","ar-101"],"Harmattan"),
            ("FUBHAUASAZ.klc",["fr-fr","ar-101","ar-102az"],"Harmattan"),
            ("FUBRSQW.klc",["en-us","en-uk","ar-101"],"Andika"),
            ("FUBRSAZ.klc",["fr-fr","ar-102az","ar-101"],"Andika"),
            ("sjs-latin.kmn",["en-us","en-uk"],"Andika"),
            ("sil_cameroon_azerty.kmn",["fr-fr","en-us","ar-102az"],"Andika")]
languages = ["en","fr"]
#fileList = [("sil_cameroon_qwerty.kmn",["en-us","en-uk","fr-ch"],"Andika"),
#            ("sil_cameroon_azerty.kmn",["fr-fr","en-us"],"Andika"),
#            ("FUBHAUASAZ.klc",["fr-fr","ar-101","ar-102az"],"Harmattan"),
#            ("FUBHAUASQW.klc",["en-us","en-uk","ar-101"],"Harmattan"),
#            ("FUBRSQW.klc",["en-us","en-uk","ar-101"],"Andika"),
#            ("FUBRSAZ.klc",["fr-fr","ar-102az","ar-101"],"Andika")]
fileList = [("sil_cameroon_qwerty.kmn",["en-us"],"Andika"),("sil_euro_latin.kmn",["en-us"],"Andika")]
for language in languages:
    if language != "en":
        addTranslation(language)
for filenameToParse, layouts, font in fileList:
        thisKeyboard = parseKB(filenameToParse, True)
        analyzeKB(thisKeyboard)
        for language in languages:
            print("\n---------\n" + language + "\n---------\n")
            for layout in layouts:
                print("\n---------\n" + layout + "\n---------\n")
                documentKB(thisKeyboard, filters, deadkeyNames, layout, font, language)
        keyboardRepo[filenameToParse] = thisKeyboard


print("Finished")

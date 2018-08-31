import codecs
import re
import json
import copy
import functools

#ToDo: Parse Stores like strings
#Do Comparison
#expand Any's

isVerbose = False
archive = {}
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
        {"linux": "K102", "scancode": "56", "microsoft": "OEM_102", "caps": False, "keyman": "K_oE2", 'row': 3},
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
        {"linux": "KPDL", "scancode": "53", "microsoft": "DECIMAL", "caps": False, "keyman": "K_NPDOT", 'row': 5},
    ]

def parseKB(filenameToParse, expand = False, scan = False):
    if (filenameToParse[-4:] == ".klc"):
        print("Is MSKLC");
    elif (filenameToParse[-4:] == ".kmn"):
        parseKeyman(filenameToParse, expand, scan)

def parseMicrosoft(keymanFilename):
    print("Parsing MS")
    infile = open(keymanFilename, mode='r', encoding='utf-16')
    for line in infile:
        lineCount = lineCount + 1

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
    rex = re.compile(r' * c .*')
    line = rex.sub('', line)

    if replaceSpaces:
        line = line.replace(u" ", u"---")
    return line

def parseKeyman(keymanFilename, generateDeadkeys = False, scan = False):
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
                if (upperLine.startswith(u"STORE(&")):
                    variableSearch = re.search('store\((.*)\)', line, re.IGNORECASE)
                    variableName = "Undefined"
                    value = ""
                    if variableSearch: 
                        variableName = variableSearch.group(1)
                        
                    valueSearch = re.search(r'store\(.*?\) (.*)',line, re.IGNORECASE)
                    if valueSearch: 
                        value = valueSearch.group(1).strip()[1:-1]

                    resultDef[variableName] = value
                    tempProps = {}
                    tempProps[variableName.upper()] = value
                    resultDef['type'] = "store"
                    if filenameToParse not in kbProps:
                        kbProps[filenameToParse] = {}
                    kbProps[filenameToParse].update(tempProps)

                elif (upperLine.startswith(u"STORE")):
                    
                    verbose(lineCount,"It's a store")
                    storeSearch = re.search('store\((.*?)\)', line, re.IGNORECASE)
                    if storeSearch: 
                        resultDef["storeName"] = storeSearch.group(1)
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
                    if len(storeItemList) != oldLen:
                        verbose(lineCount,"Space Protected")
                    storeItems = re.split("\s|\t",storeItemList)
                    if "storeItems" not in resultDef:
                        resultDef['storeItems'] = []
                    for item in storeItems:
                        item = item.replace("---"," ").strip()
                        if item.startswith("U+"):
                            resultDef['storeItems'].append(item.upper())
                        elif item.upper().startswith("DK"):
                            resultDef['storeItems'].append(item)
                        elif item.upper().startswith("NUL"):
                            resultDef['storeItems'].append(item)
                        elif item.upper().startswith("BEEP"):
                            resultDef['storeItems'].append(item)
                        if (item.startswith("'") or item.startswith('"')):
                            item = item[1:-1]
                            for char in item:
                                resultDef['storeItems'].append(u'U+%04x'%ord(char))

                elif (upperLine.startswith(u"C ")):
                    verbose(lineCount,"It's a Comment")
                    resultDef["type"] = "comment"
                elif (upperLine.startswith(u"GROUP")):
                    verbose(lineCount,"It's a Group")
                    resultDef["line"] = line
                    resultDef["lineCount"] = lineCount
                    resultDef["type"] = "structural"
#                elif (upperLine.startswith(u"MATCH")):
#                    verbose(lineCount,"It's a Match")
#                elif (upperLine.startswith(u"NOMATCH")):
#                    verbose(lineCount,"It's a Match")
                else:
                    resultDef = processKeymanRule(line,lineCount,currentGroup)
                    if resultDef is None:
                        print("This line is unparsed:", line)
                    resultDef["line"] = line
                    resultDef["lineCount"] = lineCount
                # Storing Starts Here
                if keymanFilename not in archive:
                    archive[keymanFilename] = []
                resultDef["line"] = line
                resultDef["lineCount"] = lineCount  
                archive[keymanFilename].append(resultDef)
    #Expand
    for line in archive[keymanFilename]:
        if ("dk" in line['type']) and ("index" in line['type']):
            outputTargetStores = []            
            outputTargetLists = []
            outputLines = []
            inputTargetStores = []
            inputTargetLists = []
            inputLines = []
            indexNumCounter = 0
            # counted items have parentheses
            importantInputs = [i for i in line['inputs'] if ("(" in i)]
            importantOutputs = [i for i in line['outputs'] if ("(" in i)]
            for item in importantOutputs: #from 
                if item.upper().startswith("INDEX"):
                    splitIndex = re.split(r'\(|\)|,',item)
                    outputLine = item
                    outputTargetStore = splitIndex[1]             
                    outputTargetList = [i['storeItems'] for i in archive[keymanFilename] if ('storeName' in i) and (i['storeName'] == outputTargetStore)]
                    inputTargetStore = importantInputs[int(splitIndex[2])-1][4:-1]
                    inputLine = importantInputs[int(splitIndex[2])-1]
                    inputTargetList = [i['storeItems'] for i in archive[keymanFilename] if ('storeName' in i) and (i['storeName'] == inputTargetStore)]
                    if (len(inputTargetList) < 1) or len(outputTargetList) < 1:
                        print('This group is Broken')
                    if len(inputTargetList[0]) != len(outputTargetList[0]):
                        print(inputTargetStore, " and ", outputTargetStore, " are not the same length!")
                    outputTargetStores.append(outputTargetStore)            
                    outputTargetLists.append(outputTargetList[0]) #was [0]
                    inputTargetStores.append(inputTargetStore)
                    inputTargetLists.append(inputTargetList[0])
                    inputLines.append(inputLine)
                    outputLines.append(outputLine)
                   #was [0]
                    indexNumCounter = indexNumCounter + 1

            #theTable = generateCombos(line,importantInputs, inputTargetStores, inputTargetLists, inputLines, importantOutputs, outputTargetStores, outputTargetLists, outputLines)
            #Method 1 of processinglists
            if len(outputTargetLists) == 1: # This is the problem
                    storeItemCounter = 0
                    unwrappedInputTargetLists = inputTargetLists[0]
                    unwrappedOutputTargetLists = outputTargetLists[0]
                    tempDef = []
                    for i in range(0,len(unwrappedInputTargetLists)): # was -1
                        tempDef = copy.deepcopy(line)
                        inputCounter = 0
                        copyInputs = copy.deepcopy(tempDef['inputs'])
                        for tempInput in copyInputs:        
                            if inputTargetStores[0].upper() in tempInput.upper():
                                copyInputs[inputCounter] = unwrappedInputTargetLists[storeItemCounter]
                                tempDef['inputs'] = copyInputs
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
                        if isinstance(tempDef['inputs'], list):
                            inString = " ".join(i for i in tempDef['inputs'])
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
                        archive[keymanFilename].append(tempDef)
            else:
                print('This is too complex')
                #numRounds = len(inputTargetLists)

def processKeymanRule(line,lineCount,currentGroup):
    rule = {}
    line = line.replace('" "', '"---"')
    line = line.replace("' '", "'---'")
    put = line.split(" > ")
    if (len(put) != 2) :
       print("Unusual number of >'s")
    else: 
        pattern = re.compile(u"(index\(\w+) *, +")
        if (re.search(pattern,put[1])):
            put[1] = re.sub(pattern,r'\1,',put[1])
            #print(put[1])
        pattern = re.compile(u"\[[\w -]+?\]")
        if (re.search(pattern, put[0])):
            results = re.findall(pattern, line)
            for result in results:
                beforeString = result
                result = result.replace(" ", "---")
                if (result != beforeString): 
                    put[0] = put[0].replace(beforeString, result)
        inputs = put[0].split(" ")
        outputs = put[1].split(" ")
        return buildCombo(line,inputs,outputs,lineCount)




def buildCombo(line,inputs,outputs, lineCount):
    thisCombo = {}
    thisCombo["type"] = "rule"
    for input in inputs:
        if 'inputs' not in thisCombo:
            thisCombo['inputs'] = []
        input = input.strip()
        inputUpper = input.upper()
        if (inputUpper.startswith(u"DK")):
            verbose(lineCount,"It's a deadkey.")
            thisCombo['inputs'].append(input)
            if "dk" not in thisCombo["type"]:
                thisCombo["type"] = thisCombo["type"] + ".dk"
        elif (inputUpper.startswith(u"BEGIN")):
            verbose(lineCount,"It's a Begin")
            thisCombo['inputs'].append(input)
        elif (inputUpper.startswith(u"UNICODE")):
            verbose(lineCount,"It's a UNICODE")
            thisCombo['inputs'].append(input)
        elif (inputUpper.startswith(u"ANY(")):
            verbose(lineCount,"It's an any.")
            thisCombo['inputs'].append(input)
   
        elif (inputUpper.startswith(u"GROUP")):
            verbose(lineCount,"It's a Group")
            thisCombo['inputs'].append(input)
        elif (inputUpper.startswith(u"MATCH")):
            verbose(lineCount,"It's a Match")
            thisCombo['inputs'].append(input)
        elif (inputUpper.startswith(u"NOMATCH")):
            verbose(lineCount,"It's a Match")
            thisCombo['inputs'].append(input)
        elif (inputUpper.startswith(u"PLATFORM")):
            verbose(lineCount,"It's a Platform")
            thisCombo['inputs'].append(input)
            touchPlatforms = ["TOUCH","IOS","ANDROID"]
            for platform in touchPlatforms:
                if (platform in inputUpper):
                    if "touch" not in thisCombo["type"]:
                        thisCombo["type"] = thisCombo["type"] + ".touch"
        elif (input.startswith(u"+")):
            verbose(lineCount,"It's a Plus")
            thisCombo['inputs'].append(input)
        elif (input.startswith(u"U+")):
            verbose(lineCount,"It's a Unicode ID")
            thisCombo['inputs'].append(input.upper())
        elif (input.startswith(u"[")):
            keyCombo = {"isSHIFT" : False, "isNCAPS" : False, "isCAPS" : False, 
                        "isRALT" : False, "isLALT" : False, "isALT" : False, 
                        "isRCTRL" : False, "isLCTRL" : False, "isCTRL" : False,
                        "isKey" : ""}
            verbose(lineCount,"It's a keypress")
            keyCombo['fullKey'] = inputUpper
            inputUpper = inputUpper[1:-1]
            tempProps = {}
            if "SHIFT" in inputUpper:
                isSHIFT = True
                keyCombo['isSHIFT'] = True
                inputUpper = inputUpper.replace("SHIFT","").strip()
                tempProps['containsSHIFT'] = True 
            if "NCAPS" in inputUpper:
                keyCombo['isNCAPS'] = True
                inputUpper = inputUpper.replace("NCAPS","").strip()
                tempProps['containsNCAPS'] = True
            if "CAPS" in inputUpper:
                keyCombo['isCAPS'] = True
                inputUpper = inputUpper.replace("CAPS","").strip()
                tempProps['containsCAPS'] = True
            if "RALT" in inputUpper:
                keyCombo['isRALT'] = True
                inputUpper = inputUpper.replace("RALT","").strip()
                tempProps['containsRALT'] = True
            if "LALT" in inputUpper:
                keyCombo['isLALT']= True
                inputUpper = inputUpper.replace("LALT","").strip()
                tempProps['containsLALT'] = True
            if "ALT" in inputUpper:
                keyCombo['isALT'] = True
                inputUpper = inputUpper.replace("ALT","").strip()
                tempProps['containsALT'] = True
            if "LCTRL" in inputUpper:
                keyCombo['isLCTRL'] = True
                inputUpper = inputUpper.replace("LCTRL","").strip()
                tempProps['containsLCTRL'] = True
            if "RCTRL" in inputUpper:
                keyCombo['isRCTRL'] = True
                inputUpper = inputUpper.replace("RCTRL","").strip()
                tempProps['containsRCTRL'] = True
            if "CTRL" in inputUpper:
                keyCombo['isCTRL'] = True
                inputUpper = inputUpper.replace("CTRL","").strip()
                tempProps['containsCTRL'] = True
            if " " in inputUpper:
                print("I missed something", input)
            keyCombo["isKey"] = inputUpper.strip("-")
            thisCombo['baseKey'] = keyCombo["isKey"]
            if keyCombo["isKey"].startswith('T_'):
                if "touch" not in thisCombo["type"]:
                    thisCombo["type"] = thisCombo["type"] + ".touch"
            if filenameToParse not in kbProps:
                kbProps[filenameToParse] = {}
            kbProps[filenameToParse].update(tempProps)
            thisCombo['inputs'].append(keyCombo)
            


            #Split at --- and process
        elif (input.startswith("'") or input.startswith('"')):
            input = input[1:-1]
            if output == "---":
                output = " "
            for char in input:
                thisCombo['inputs'].append(u'U+%04x'%ord(char))
            print("It must be a string.")
        else:
            print("Where am I?")
    for output in outputs:
        if 'outputs' not in thisCombo:
            thisCombo['outputs'] = []
        output = output.strip()
        outputUpper = output.upper()
        if (outputUpper.startswith(u"DK")):
            verbose(lineCount,"It's a deadkey.")
            thisCombo['outputs'].append(output)
        elif (outputUpper.startswith(u"GROUP")):
            verbose(lineCount,"It's a Group")
            thisCombo['outputs'].append(outputUpper)
        elif (outputUpper.startswith(u"USE")):
            verbose(lineCount,"It's a Use")
            thisCombo['outputs'].append(outputUpper)
            thisCombo["type"] = "goTo"
        elif (outputUpper.startswith(u"INDEX")):
            verbose(lineCount,"It's a INDEX")
            thisCombo['outputs'].append(output)
            thisCombo['isExpandable'] = True
            if "index" not in thisCombo["type"]:
                thisCombo["type"] = thisCombo["type"] + ".index"
        elif (outputUpper.startswith(u"LAYER")):
            verbose(lineCount,"It's a Layer")
            thisCombo['outputs'].append(outputUpper)
        elif (outputUpper.startswith(u"BEEP")):
            verbose(lineCount,"It's a BEEP")
            thisCombo['outputs'].append(outputUpper)
            if "index" not in thisCombo["type"]:
                thisCombo['type'] = thisCombo["type"] + ".deadEnd"
        elif (outputUpper.startswith(u"NUL")):
            verbose(lineCount,"It's a NUL")
            thisCombo['outputs'].append(outputUpper)
            if "index" not in thisCombo["type"]:
                thisCombo['type'] = thisCombo["type"] + ".deadEnd"
        elif (outputUpper.startswith(u"CONTEXT")):
            verbose(lineCount,"It's a Context")
            thisCombo['outputs'].append(outputUpper)
        elif (output.startswith(u"U+")):
            verbose(lineCount,"It's a Unicode ID")
            thisCombo['outputs'].append(outputUpper)
            thisCombo['baseOutput'] = outputUpper
        elif (output.startswith("'") or output.startswith('"')):
            output = output[1:-1]
            if output == "---":
                output = " "
            for char in output:
                thisCombo['outputs'].append(u'U+%04x'%ord(char))
        else:
            print(output)
    return thisCombo

def prod(iterable):
    def add(x,y): return x*y
    functools.reduce(add, iterable)

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
                changeArray.append([inputItem[index], outputItem[index]])
                #output is too deep
            index += 1
            #next item

            #Repeat
    print("w")

    #DeterminePairs
    #get length of each pair
def inferCaps(filenameToParse):
    from itertools import groupby
    from operator import itemgetter
    keyboard = archive[filenameToParse]
    SortedCombosOutput = sorted(keyboard, key=lambda k: ("baseOutput" not in k, k.get("baseOutput", None),"baseKey" not in k, k.get("baseKey", None)))
    f = open(filenameToParse + '_InferredCaps.txt', 'w', encoding="utf-8")
    stringList = []
    for key, group in groupby(SortedCombosOutput, key=lambda k: ("baseOutput" not in k, k.get("baseOutput", None))):
        Booler = []
        inferCaps = CheckCondition(group)
        if inferCaps != None:
            stringList.append(str(inferCaps[0]) + " " + str(inferCaps[1]) + "\n")
    stringList = list(set(stringList))
    f.writelines(sorted(stringList))
    f.close
        

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


def getKeyValues(filenameToParse):
    from itertools import groupby
    from operator import itemgetter
    keyboard = archive[filenameToParse]
    SortedCombosKey = sorted(keyboard, key=lambda k: ("baseKey" not in k, k.get("baseKey", None),"baseOutput" not in k, k.get("baseOutput", None)))
    SortedCombosOutput = sorted(keyboard, key=lambda k: ("baseOutput" not in k, k.get("baseOutput", None),"baseKey" not in k, k.get("baseKey", None)))
    #groupedCombosOutput = groupby(keyboard, key=lambda k: ("baseOutput" not in k, k.get("baseOutput", None),"baseKey" not in k, k.get("baseKey", None)))
    f = open(filenameToParse + '_SortedCombos.txt', 'w', encoding="utf-8")
    #f.write(foo.encode('utf8'))    
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
    
def missingCombo(filenameToParse):
    from itertools import groupby
    from operator import itemgetter
    keyboard = archive[filenameToParse]
    SortedCombosKey = sorted(keyboard, key=lambda k: ("baseKey" not in k, k.get("baseKey", None),"baseOutput" not in k, k.get("baseOutput", None)))
    f = open(filenameToParse + '_InferredCaps.txt', 'w', encoding="utf-8")
    stringList = []
    #https://help.keyman.com/DEVELOPER/language/guide/virtual-keys
    # Val   =               SHIFT    NCAPS   CAPS    RALT    LALT    ALT     RCTRL   LCTRL   CTRL
    flags0 =                [False,   False,  False,  False,  False,  False,  False,  False,  False]
    flags1_SHIFT =          [False,   False,  False,  False,  False,  False,  False,  False,  False]
    flags2_NCAPS =          [False,   True,   False,  False,  False,  False,  False,  False,  False]
    flags3_NCAPS_SHIFT =    [True,    True,   False,  False,  False,  False,  False,  False,  False]
    flags4_CAPS =           [False,   False,  True,   False,  False,  False,  False,  False,  False]
    flags5_CAPS_SHIFT =     [True,    False,  True,   False,  False,  False,  False,  False,  False] 
    flags6_NCAPS_RALT =     [False,   True,   False,  True,   False,  False,  False,  False,  False]
    flags7_NCAPS_SHIFT_RALT=[True,    True,   False,  True,   False,  False,  False,  False,  False]
    flags8_RALT_CAPS =      [False,   False,  True,   True,   False,  False,  False,  False,  False]
    flags9_CAPS_SHIFT_RALT= [True,    False,  True,   True,   False,  False,  False,  False,  False]

    for key, group in groupby(SortedCombosKey, key=lambda k: ("baseKey" not in k, k.get("baseKey", None))):
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
        if ("containsSHIFT" in kbProps[filenameToParse]) and ("containsNCAPS" not in kbProps[filenameToParse]) and ("containsCAPS" not in kbProps[filenameToParse]):            
            needs0 = True
            needs1 = True
        elif ("containsSHIFT" in kbProps[filenameToParse]) and ("containsNCAPS" in kbProps[filenameToParse]) and ("containsCAPS" in kbProps[filenameToParse]):            
            needs2 = True
            needs3 = True
            needs4 = True
            needs5 = True
        if "containsRALT" in kbProps[filenameToParse]:
            needs6 = True
            needs7 = True
            needs8 = True
            needs9 = True
        lastKey = ""
        for combo in group:
            testing = False
            if ("rule" in combo['type']) and ("touch" not in combo['type']):
                if "inputs" in combo:
                    for item in combo['inputs']:
                        if "fullKey" in item:
                            testing = True
                            currentFlags = [item['isSHIFT'],item['isNCAPS'],item['isCAPS'],item['isRALT'],item['isLALT'],item['isALT'],item['isRCTRL'],item['isLCTRL'],item['isCTRL']]
                            if currentFlags == flags0:
                                needs0 = False
                            if currentFlags == flags1_SHIFT:
                                needs1 = False
                            if currentFlags == flags2_NCAPS:
                                needs2 = False
                            if currentFlags == flags3_NCAPS_SHIFT:
                                needs3 = False
                            if currentFlags == flags4_CAPS:
                                needs4 = False
                            if currentFlags == flags5_CAPS_SHIFT:
                                needs5 = False
                            if currentFlags == flags6_NCAPS_RALT:
                                needs6 = False
                            if currentFlags == flags7_NCAPS_SHIFT_RALT:
                                needs7 = False
                            if currentFlags == flags8_RALT_CAPS:
                                needs8 = False
                            if currentFlags == flags9_CAPS_SHIFT_RALT:
                                needs9 = False
                            lastKey = item['isKey']

        if testing:
            if needs0 or needs1 or needs2 or needs3 or needs4 or needs5 or needs6 or needs7 or needs8 or needs9:
                print(filenameToParse)
            if needs1:
                print("Missing [] for:" + lastKey)
            if needs1:
                print("Missing [SHIFT] for:" + lastKey)
            if needs2:
                print("Missing [NCAPS] for:" + lastKey)
            if needs3:
                print("Missing [CAPS] for:" + lastKey)
            if needs4:
                print("Missing [CAPS SHIFT] for:" + lastKey)
            if needs5:
                print("Missing [NCAPS RALT] for:" + lastKey)
            if needs6:
                print("Missing [NCAPS SHIFT] for:" + lastKey)
            if needs7:
                print("Missing [CAPS RALT] for:" + lastKey)
            if needs8:
                print("Missing [NCAPS SHIFT RALT] for:" + lastKey)
            if needs9:
                print("Missing [CAPS SHIFT RALT] for:" + lastKey)

        stringList = list(set(stringList))
        f.writelines(sorted(stringList))
        f.close

def analyze(filenameToParse):
    inferCaps(filenameToParse)
    missingCombo(filenameToParse)
    getKeyValues(filenameToParse)
    writeKeyboardGist(filenameToParse)

def printToJson(filenameToParse):
    jsonName = filenameToParse + ".json"
    with open(jsonName, 'w') as fp:
        json.dump({filenameToParse : archive[filenameToParse]}, fp, indent=4)

def writeKeyboardGist(filenameToParse, layout = 'US102'):
    #Current Supported Layouts ar US102, and AZERTY
    thisKBProps = kbProps[filenameToParse]
    header =   {
    "backcolor": "#ffffff",
    "name": thisKBProps['&NAME'],
    "author": thisKBProps['&COPYRIGHT'],
    "background": {
      "name": "Carbon fibre 5",
      "style": "background-image: url('/bg/carbonfibre/carbon_texture1876.jpg');"
    },
    "radii": "20px"
    }
    if layout == 'US102':
        row0 = rowGenerator(0, layout) + [{ "w": 2 }, "\nBkspce"]
        row1 = [{ "w": 1.5 },"\nTab"] +  rowGenerator(1, layout)
        row2 = [{"w": 1.75 }, "\nCaps Lock"] + rowGenerator(2, layout) + [{"w": 2.25}, "\nEnter"]
        row3 = [{"w": 2.25},"\nShift"] + rowGenerator(3, layout) + [{"w": 2.75},"\nShift"]
        row4 = [{"c": "#cccccc","w": 1.25},"\nCtrl",{"w": 1.25},"\nWin",{"w": 1.25},"\nAlt",{"a": 7,"w": 6.25},"",{"a": 4,"w": 1.25},"\nAlt",{"w": 1.25},"\nWin",{"w": 1.25},"\nMenu",{"w": 1.25},"\nCtrl"]
    else:
         print("I don't know that layout!")
    fullKB = [header,row0,row1,row2,row3,row4]
    jsonName = filenameToParse + ".kbd.json"
    with open(jsonName, 'w', encoding="UTF-8") as fp:
        json.dump(fullKB, fp, indent=4)

def rowGenerator(row, layout):
    expectedResult = [d for d in kbLinks if (d['row'] == row)]
    rowList = []
    # Val   =               SHIFT    NCAPS   CAPS    RALT    LALT    ALT     RCTRL   LCTRL   CTRL
    flags0_BASE =           [False,  False,  False,  False,  False,  False,  False,  False,  False]
    flags1_SHIFT =          [False,  False,  False,  False,  False,  False,  False,  False,  False]
    flags2_NCAPS =          [False,  True,   False,  False,  False,  False,  False,  False,  False]
    flags3_NCAPS_SHIFT =    [True,   True,   False,  False,  False,  False,  False,  False,  False]
    flags5_RALT =           [False,  False,  False,  True,   False,  False,  False,  False,  False]
    flags6_NCAPS_RALT =     [False,  True,   False,  True,   False,  False,  False,  False,  False]
    flags7_NCAPS_SHIFT_RALT=[True,   True,   False,  True,   False,  False,  False,  False,  False]
    for key in expectedResult:
        if layout == "US102" and key["keyman"] == "K_oE2":
            verbose(0,"Skipping oE2 key")
        else:
            currentKey = {}
            currentKey['bottomLeft'] = u""
            currentKey['topLeft'] = u""
            currentKey['bottomRight'] = u""
            currentKey['topRight'] = u""
            if key['keyman'] == "K_BKSLASH":
                    rowList.append({"w": 1.5})
            for combo in [a for a in archive[filenameToParse] if (('baseKey' in a) and (a['baseKey'] == key['keyman']))]:
                if ("rule" in combo['type']) and ("touch" not in combo['type']):
                    if "inputs" in combo:
                        for item in combo['inputs']:
                            if "fullKey" in item:
                                testing = True
                                
                                currentFlags = [item['isSHIFT'],item['isNCAPS'],item['isCAPS'],item['isRALT'],item['isLALT'],item['isALT'],item['isRCTRL'],item['isLCTRL'],item['isCTRL']]

                                #Bottom Left
                                if (currentFlags == flags0_BASE) or (currentFlags == flags2_NCAPS):
                                    currentKey['bottomLeft'] = u""
                                    for outItem in combo['outputs']:
                                        
                                        if "U+" in outItem:
                                            if outItem.startswith("U+03"):
                                                currentKey['bottomLeft'] = chr(int("25CC", 16)) 
                                                #TODO Add empty circle, do 4 times
                                            if 'bottomLeft' not in currentKey:
                                                currentKey['bottomLeft'] = chr(int(outItem.strip().upper()[-4:], 16))
                                            else:
                                                currentKey['bottomLeft'] = currentKey['bottomLeft'] + chr(int(outItem.strip().upper()[-4:], 16))
                                #Top Left
                                if (currentFlags == flags1_SHIFT) or (currentFlags == flags3_NCAPS_SHIFT):
                                    currentKey['topLeft'] = u""
                                    for outItem in combo['outputs']:
                                        if "U+" in outItem:
                                            if outItem.startswith("U+03"):
                                                #todo fix this 4 times, add U+17
                                                currentKey['topLeft'] = chr(int("25CC", 16)) 
                                            if 'topLeft' not in currentKey:
                                                currentKey['topLeft'] = chr(int(outItem.strip().upper()[-4:], 16))
                                            else:
                                                currentKey['topLeft'] = currentKey['topLeft'] + chr(int(outItem.strip().upper()[-4:], 16))
                                #Top Right
                                if (currentFlags == flags7_NCAPS_SHIFT_RALT):
                                    currentKey['topRight'] = u""
                                    for outItem in combo['outputs']:
                                        if "U+" in outItem:
                                            if outItem.startswith("U+03"):
                                                currentKey['topRight'] = chr(int("25CC", 16)) 
                                            if 'topRight' not in currentKey:
                                                currentKey['topRight'] = chr(int(outItem.strip().upper()[-4:], 16))
                                            else:
                                                currentKey['topRight'] = currentKey['topRight'] + chr(int(outItem.strip().upper()[-4:], 16))
                                #Bottom Right
                                if (currentFlags == flags5_RALT) or (currentFlags == flags6_NCAPS_RALT):
                                    currentKey['bottomRight'] = u""
                                    for outItem in combo['outputs']:
                                        if "U+" in outItem:
                                            if outItem.startswith("U+03"):
                                                currentKey['bottomRight'] = chr(int("25CC", 16)) 
                                            if 'bottomRight' not in currentKey:
                                                currentKey['bottomRight'] = chr(int(outItem.strip().upper()[-4:], 16))
                                            else:
                                                currentKey['bottomRight'] = currentKey['bottomRight'] + chr(int(outItem.strip().upper()[-4:], 16))
            
            keyString = currentKey['topLeft'] + "\n" + currentKey['bottomLeft'] + "\n" + currentKey['topRight'] + "\n" + currentKey['bottomRight'] + "\n"
            rowList.append(keyString)
    return rowList        


filenameToParse = "sil_cameroon_qwerty.kmn"
parseKB(filenameToParse, True)
analyze(filenameToParse)

printToJson(filenameToParse)

filenameToParse = "sil_cameroon_azerty.kmn"
parseKB(filenameToParse, True)
analyze(filenameToParse)
printToJson(filenameToParse)

print("Finished")
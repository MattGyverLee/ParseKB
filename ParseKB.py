import codecs
import re
import json

#ToDo: Parse Stores like strings
#Do Comparison
#expand Any's

isVerbose = False
archive = {}

def parseKB(filenameToParse, expand):
    if (filenameToParse[-4:] == ".klc"):
        print("Is MSKLC");
    elif (filenameToParse[-4:] == ".kmn"):
        parseKeyman(filenameToParse, expand)

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
    rex = re.compile(r'[\t ]{2,}')
    line = rex.sub(' ', line)
    # remove comments
    rex = re.compile(r' *c .*')
    line = rex.sub('', line)

    if replaceSpaces:
        line = line.replace(u" ", u"---")
    return line

def parseKeyman(keymanFilename, generateDeadkeys = False):
    lineCount = 0
    infile = open(keymanFilename, mode='r', encoding='utf-8')
    currentGroup = "none"
    
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
                    resultDef['type'] = "store"

                elif (upperLine.startswith(u"STORE")):
                    verbose(lineCount,"It's a store")
                    storeSearch = re.search('store\((.*)\)', line, re.IGNORECASE)
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
                            resultDef['storeItems'].append(item)
                        if item.lower().startswith("dk"):
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
                    resultDef["line"] = line
                    resultDef["lineCount"] = lineCount
                # Storing Starts Here
                if keymanFilename not in archive:
                    archive[keymanFilename] = []
                resultDef["line"] = line
                resultDef["lineCount"] = lineCount  
                archive[keymanFilename].append(resultDef)
    #Expand
    outputTargetStores = []            
    outputTargetLists = []
    inputTargetStores = []
    inputTargetLists = []
    for line in archive[keymanFilename]:
        if "dk" in line['type']:
            #inputTargetList = []
            #inputTargetStore = ""
            #outputTargetStore = ""
            #outputTargetList = []
            indexNumCounter = 0
            # counted items have parentheses
            importantInputs = [i for i in line['inputs'] if ("(" in i)]
            importantOutputs = [i for i in line['outputs'] if ("(" in i)]
            for item in importantOutputs:
                if item.upper().startswith("INDEX"):
                    splitIndex = re.split(r'\(|\)|,',item)
                    outputTargetStore = splitIndex[1]             
                    outputTargetList = [i['storeItems'] for i in archive[keymanFilename] if ('storeName' in i) and (i['storeName'] == outputTargetStore)]
                    inputTargetStore = importantInputs[int(splitIndex[2])-1][4:-1]
                    inputTargetList = [i['storeItems'] for i in archive[keymanFilename] if ('storeName' in i) and (i['storeName'] == inputTargetStore)]

                    print("w")
                    if len(inputTargetList) != len(outputTargetList):
                        print(outputTargetStore, " and ", inputTargetStore, " are not the same length!")
                    outputTargetStores.append(outputTargetStore)            
                    outputTargetLists.append(outputTargetList[0])
                    inputTargetStores.append(inputTargetStore)
                    inputTargetLists.append(inputTargetList[0])
                    indexNumCounter = indexNumCounter + 1
            if len(inputTargetLists) == 1:
                    storeItemCounter = 0
                    for i in inputTargetLists[0]:
                        tempDef = line
                        for tempInput in tempDef['inputs']:        
                            if inputTargetStores[0].upper() in tempInput.upper():
                                tempInput = inputTargetLists[0][storeItemCounter]
                        for tempOutput in tempDef['outputs']:
                            if outputTargetStores[0].upper() in tempOutput.upper():
                                tempOutput = outputTargetLists[0][storeItemCounter]
                        storeItemCounter = storeItemCounter + 1

                    numRounds = len(inputTargetLists)

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
            thisCombo['isExpandable'] = True
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
            thisCombo['inputs'].append(input)
        elif (input.startswith(u"[")):
            keyCombo = {"isSHIFT" : False, "isNCAPS" : False, "isCAPS" : False, 
                        "isRALT" : False, "isLALT" : False, "isALT" : False, 
                        "isRCTRL" : False, "isLCTRL" : False, "isCTRL" : False,
                        "isKey" : ""}
            verbose(lineCount,"It's a keypress")
            inputUpper = inputUpper[1:-1]
            if "SHIFT" in inputUpper:
                isSHIFT = True
                keyCombo['isSHIFT'] = True
                inputUpper = inputUpper.replace("SHIFT","").strip()
            if "NCAPS" in inputUpper:
                keyCombo['isNCAPS'] = True
                inputUpper = inputUpper.replace("NCAPS","").strip()
            if "CAPS" in inputUpper:
                keyCombo['isCAPS'] = True
                inputUpper = inputUpper.replace("CAPS","").strip()
            if "RALT" in inputUpper:
                keyCombo['isRALT'] = True
                inputUpper = inputUpper.replace("RALT","").strip()
            if "LALT" in inputUpper:
                keyCombo['isLALT']= True
                inputUpper = inputUpper.replace("LALT","").strip()
            if "ALT" in inputUpper:
                keyCombo['isALT'] = True
                inputUpper = inputUpper.replace("ALT","").strip()
            if "LCTRL" in inputUpper:
                keyCombo['isLCTRL'] = True
                inputUpper = inputUpper.replace("LCTRL","").strip()
            if "RCTRL" in inputUpper:
                keyCombo['isRCTRL'] = True
                inputUpper = inputUpper.replace("RCTRL","").strip()
            if "CTRL" in inputUpper:
                keyCombo['isCTRL'] = True
                inputUpper = inputUpper.replace("CTRL","").strip()
            if " " in inputUpper:
                print("I missed something", input)
            keyCombo["isKey"] = inputUpper.strip("-")
            if keyCombo["isKey"].startswith('T'):
                if "touch" not in thisCombo["type"]:
                    thisCombo["type"] = thisCombo["type"] + ".touch"
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
            if "expandable" not in thisCombo["type"]:
                thisCombo["type"] = thisCombo["type"] + ".expandable"
        elif (outputUpper.startswith(u"LAYER")):
            verbose(lineCount,"It's a Layer")
            thisCombo['outputs'].append(outputUpper)
        elif (outputUpper.startswith(u"BEEP")):
            verbose(lineCount,"It's a BEEP")
            thisCombo['outputs'].append(outputUpper)
            thisCombo['type'] = "deadEnd"
        elif (outputUpper.startswith(u"NUL")):
            verbose(lineCount,"It's a NUL")
            thisCombo['outputs'].append(outputUpper)
            thisCombo['type'] = "deadEnd"
        elif (outputUpper.startswith(u"CONTEXT")):
            verbose(lineCount,"It's a Context")
            thisCombo['outputs'].append(outputUpper)
        elif (output.startswith(u"U+")):
            verbose(lineCount,"It's a Unicode ID")
            thisCombo['outputs'].append(outputUpper)
        elif (output.startswith("'") or output.startswith('"')):
            output = output[1:-1]
            if output == "---":
                output = " "
            for char in output:
                thisCombo['outputs'].append(u'U+%04x'%ord(char))
        else:
            print(output)
    return thisCombo

            

filenameToParse = "sil_cameroon_qwerty.kmn"
parseKB(filenameToParse, True)
jsonName = filenameToParse + ".json"
with open(jsonName, 'w') as fp:
    json.dump({filenameToParse : archive[filenameToParse]}, fp, indent=4)
filenameToParse = "sil_cameroon_azerty.kmn"
parseKB(filenameToParse, True)
jsonName = filenameToParse + ".json"
with open(jsonName, 'w') as fp:
    json.dump({filenameToParse : archive[filenameToParse]}, fp, indent=4)
print("Finished")
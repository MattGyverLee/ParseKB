import codecs
import re

#ToDo: Parse Stores like strings
#Do Comparison
#expand Any's

isVerbose = True
archive = {}

def parseKB(filenameToParse):
    if (filenameToParse[-4:] == ".klc"):
        print("Is MSKLC");
    elif (filenameToParse[-4:] == ".kmn"):
        parseKeyman(filenameToParse)

def parseMicrosoft(keymanFilename):
    print("w")
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

def parseKeyman(keymanFilename):
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
                if (upperLine.startswith(u"STORE")):
                    verbose(lineCount,"It's a store")
                elif (upperLine.startswith(u"BEGIN")):
                    verbose(lineCount,"It's a Begin")
                elif (upperLine.startswith(u"C ")):
                    verbose(lineCount,"It's a Comment")
                elif (upperLine.startswith(u"GROUP")):
                    verbose(lineCount,"It's a Group")
                elif (upperLine.startswith(u"MATCH")):
                    verbose(lineCount,"It's a Match")
                elif (upperLine.startswith(u"NOMATCH")):
                    verbose(lineCount,"It's a Match")
                else:
                    verbose(lineCount, line)
                    resultDef = processKeymanRule(line,lineCount,currentGroup)
                resultDef["line"] = line
                resultDef["lineCount"] = lineCount
                if keymanFilename not in archive:
                    archive[keymanFilename] = []
                archive[keymanFilename].append(resultDef)
    print("W")

def processKeymanRule(line,lineCount,currentGroup):
    rule = {}
    line = line.replace('" "', '"---"')
    line = line.replace("' '", "'---'")
    put = line.split(" > ")
    if (len(put) == 1) or (len(put) > 2) :
       print("w")
    pattern = re.compile(u"(index\(\w+) *, +")
    if (re.search(pattern,put[1])):
        put[1] = re.sub(pattern,r'\1,',put[1])
        print(put[1])
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
    for input in inputs:
        if 'input' not in thisCombo:
            thisCombo['input'] = []
        input = input.strip()
        inputUpper = input.upper()
        if (inputUpper.startswith(u"DK")):
            verbose(lineCount,"It's a deadkey.")
            thisCombo['input'].append(input)
        elif (inputUpper.startswith(u"ANY(")):
            verbose(lineCount,"It's an any.")
            thisCombo['input'].append(input)
        elif (inputUpper.startswith(u"GROUP")):
            verbose(lineCount,"It's a Group")
            thisCombo['input'].append(input)
        elif (inputUpper.startswith(u"MATCH")):
            verbose(lineCount,"It's a Match")
            thisCombo['input'].append(input)
        elif (inputUpper.startswith(u"NOMATCH")):
            verbose(lineCount,"It's a Match")
            thisCombo['input'].append(input)
        elif (inputUpper.startswith(u"PLATFORM")):
            verbose(lineCount,"It's a Platform")
            thisCombo['input'].append(input)
        elif (input.startswith(u"+")):
            verbose(lineCount,"It's a Plus")
            thisCombo['input'].append(input)
        elif (input.startswith(u"U+")):
            verbose(lineCount,"It's a Unicode ID")
            thisCombo['input'].append(input)
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
                print("I missed something")
            keyCombo["isKey"] = inputUpper
            thisCombo["input"].append(keyCombo)
            


            #Split at --- and process
        elif (input.startswith("'") or input.startswith('"')):
            input = input[1:-1]
            if output == "---":
                output = " "
            for char in input:
                thisCombo['input'].append(u'U+%04x'%ord(char))
            print("It must be a string.")
        else:
            print("Where am I?")
    for output in outputs:
        if 'output' not in thisCombo:
            thisCombo['output'] = []
        output = output.strip()
        outputUpper = output.upper()
        if (outputUpper.startswith(u"DK")):
            verbose(lineCount,"It's a deadkey.")
            thisCombo['output'].append(output)
        elif (outputUpper.startswith(u"GROUP")):
            verbose(lineCount,"It's a Group")
            thisCombo['output'].append(outputUpper)
        elif (outputUpper.startswith(u"MATCH")):
            verbose(lineCount,"It's a Match")
            thisCombo['output'].append(outputUpper)
        elif (outputUpper.startswith(u"NOMATCH")):
            verbose(lineCount,"It's a Match")
            thisCombo['output'].append(outputUpper)
        elif (outputUpper.startswith(u"PLATFORM")):
            verbose(lineCount,"It's a Platform")
            thisCombo['output'].append(outputUpper)
        elif (outputUpper.startswith(u"INDEX")):
            verbose(lineCount,"It's a INDEX")
            thisCombo['output'].append(output)
        elif (outputUpper.startswith(u"LAYER")):
            verbose(lineCount,"It's a Layer")
            thisCombo['output'].append(outputUpper)
        elif (outputUpper.startswith(u"BEEP")):
            verbose(lineCount,"It's a BEEP")
            thisCombo['output'].append(outputUpper)
        elif (outputUpper.startswith(u"NUL")):
            verbose(lineCount,"It's a NUL")
            thisCombo['output'].append(outputUpper)
        elif (outputUpper.startswith(u"CONTEXT")):
            verbose(lineCount,"It's a Context")
            thisCombo['output'].append(outputUpper)
        elif (output.startswith(u"U+")):
            verbose(lineCount,"It's a Unicode ID")
            thisCombo['output'].append(outputUpper)
        elif (output.startswith("'") or output.startswith('"')):
            output = output[1:-1]
            if output == "---":
                output = " "
            for char in output:
                thisCombo['output'].append(u'U+%04x'%ord(char))
        else:
            print(output)
    return thisCombo

            

filenameToParse = "sil_cameroon_qwerty.kmn"
parseKB(filenameToParse)
filenameToParse = "sil_cameroon_azerty.kmn"
parseKB(filenameToParse)
print("Finished")
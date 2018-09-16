# ParseKB
This tool indends to provides several functions not currently provided by current tools:
1. Analyzing Keyman (https://www.Keyman.com) keyboards for inconsistencies
    * :white_check_mark: Looks for missing combinations that might cause inconsistent output. 
    * :white_check_mark: Grouping Keys for visual inspection.
    * :white_check_mark: Finding duplicate or conflicting rules. 
    * :black_square_button: Infers how Caps affect each key. and find inconsitencies.
2. :white_check_mark: Converting MSKLC (https://www.microsoft.com/en-us/download/details.aspx?id=22339) keyboards to Keyman format. (MSK provides a ready source of predefined majority language keyboards.)  
    * :white_check_mark: Handles Deadkeys
    * :white_check_mark: Automatic and manual filtering.
3. :black_square_button: Converting Keyman keyboards to Microsoft's MSKLC format.
4. :black_square_button: Converting Keyman keyboards to Mac .keyLayout format.
5. :black_square_button: Converting Keyman keyboards to Linux XKB (https://www.freedesktop.org/wiki/Software/XKeyboardConfig/) format.
6. :white_check_mark: Exporting to Keyboard-Layout-Creator format for easy documentation. (Contents can be pasted into the tool at http://www.keyboard-layout-editor.com/ .)
    * :black_square_button: Adapting this to different physical keyboards
7. :white_check_mark: Exporting a Full Command list for Documentation
    * :black_square_button: Adapting this to different Physical Keyboards
8. :black_square_button: Exporting a json markup of all analyzed data.
9. :black_square_button: Comparing Keyman Keyboards
10. :white_check_mark: Accessing Unicode Properties as needed

# Assumptions:
* Keyman Keyboards:
  * Deadkey Names use dk(0061) format.

# Requirements:
* Python 3
* Source Keyboard Files

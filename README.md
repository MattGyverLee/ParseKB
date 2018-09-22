# ParseKB
This tool indends to provides several functions not currently provided by current tools:

1. Analyzes Keyman (https://www.Keyman.com) keyboards for inconsistencies
    * :white_check_mark: Looks for missing combinations that might cause inconsistent output.
    * :white_check_mark: Looks for inputs that cannot be obtained on the current keyboard.
    * :white_check_mark: Groups keys for visual inspection.
    * :white_check_mark: Finds duplicate or conflicting rules. 
    * :black_square_button: Inferring how Caps affect each key to find inconsistencies.
2. :white_check_mark: Converts MSKLC (https://www.microsoft.com/en-us/download/details.aspx?id=22339) keyboards to Keyman format. (MSK provides a ready source of predefined majority language keyboards.)  
    * :white_check_mark: Handles Deadkeys
    * :white_check_mark: Handles Ligatures
    * :white_check_mark: Automatic and manual filtering.
3. :black_square_button: Converts Keyman keyboards to Microsoft's MSKLC format.
4. :black_square_button: Converts Keyman keyboards to Mac .keyLayout format.
5. :black_square_button: Converts Keyman keyboards to Linux XKB (https://www.freedesktop.org/wiki/Software/XKeyboardConfig/) format.
6. :white_check_mark: Exports to Keyboard-Layout-Creator format for easy visual documentation. (Contents can be pasted into the tool at http://www.keyboard-layout-editor.com/ .)
    * :white_check_mark: Adapts this output to different physical keyboards
7. :white_check_mark: Exports a Full Command list for Documentation
    * :white_check_mark: Adapts this to different Physical Keyboards (i.e. What are the combinations if someone uses your keyboard on a British physical keyboard.
    * :white_check_mark: Outputs this data in readme friendly HTML. 
8. :black_square_button: Exports a json markup of all analyzed data.
9. :black_square_button: Compares Keyman Keyboards
10. :white_check_mark: Accesses Unicode Properties as needed

# Assumptions:
* Keyman Keyboards:
  * Deadkey Names use dk(0061) format.
  * KM Keyboard is compilable.
* Microsoft Keyboards:
  * MS Keyboard is compileable.

# Requirements:
* Python 3
* Source Keyboard Files

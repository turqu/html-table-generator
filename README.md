    # html-table-generator
    The HTML Table Generator in Javascript

    + About the project:

    During learning the JS I tried to write a HTML table generator. On codepen.io I wrote the first version, which later was upgraded and uploaded on github. The generator is written in HTML, CSS/Sass and JS.

    + Goals:
    - learning JS basic :)
    - upgrading the code from codepen according to in the meantime acquired knowledge

    + Technical solutions: 
    - short, not complicated HTML webpage
    - CSS using Sass
    - view breakpoints included - ready for small screens
    - for desktop wide screen the grid layout - prepared a layout solution for IE11+
    - JS: a few functions and loops - commented where it was necessary
    - in the script were used "let" for declaring variables which are not working in IE10

    + How does the script work? Overview
    The script is waiting for DOM - if this is loaded, the script is ready for next steps. An user is declaring in the input fields how many columns and rows a table should have and names of columns and rows. After that the user is pressing the button "Generate table" and the script is starting.

    - at the beginning the div where will be visible a generated table is not visible because the table is empty;
    - the inner headlines (with the class "innerText") connected to generated table are not displayed because the CSS property display: none;
    - a few variables are declared - input fields, buttons, text area where will be the code of the table visible etc.;
    - after pressing the button "Generate table":
        -- this button is disabled, the "Undo" button is enabled;
        -- elements with class "innerText" are set to visible by the display property;
        -- the columns are generated -- see below --
        -- the rows are generated -- see below --
        -- the HTML code of the table is generated in text area below -- see below --
        -- the input fields for the number of columns etc. are disabled

    + generating the columns:
        -- the script is checking how many should create columns according to the input number
        -- the creating loop is starting: the script is creating TH element in the THEAD tag and the declared label for it from the input field

    + generating the rows:
        -- the script is checking how many should create rows according to the input number
        -- the first creating loop is starting: the script is creating a row in TBODY tag and is moving to the second (inner) loop: is creating a cell in the just created row and its declared label; when it is done, the script is back to the first loop
        -- important: the number of rows is declared in the input field about rows; the number of columns is used for the creating columns and cells in each row

    + generating the HTML code of the table:
        -- the table is created in the div with ID "generatorDiv";
        -- however, the HTML code has a lot spaces so there is a loop which is removing a lot of unnecessary spaces;
        -- when the most spaces are removed, the script is showing the output code in the text area;

    - after pressing the "Undo" button:
        -- the "Undo" button is disabled and "generate table" enabled;
        -- 1. loop: enabling the input fields;
        -- 2. loop: hiding the inner headlines;
        -- 3. loop: deleting cells;
        -- 4. loop: deleting rows;
        -- the text area is empty;

    - after pressing the "Copy code" button:
        -- selecting and coping to the clipboard the code from the text area;



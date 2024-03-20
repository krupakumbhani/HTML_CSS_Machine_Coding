
const textcontent = document.querySelector(".textarea");
const file = document.querySelector("#filename");

function handleBold() {
    document.execCommand("bold");
}
function handleItalic() {
    document.execCommand("italic");
}
function handleUnderline() {
    document.execCommand("underline");
}
function handleLinethrough() {
    document.execCommand("strikeThrough");
}
function handleColor(event) {
    document.execCommand("forecolor", false, event.target.value.slice(1));
}
function handleNew() {
    textcontent.innerHTML = "";
}
function handleSave() {
    alert("save");
    const a = document.createElement("a");
    const blob = new Blob([textcontent.innerText]);
    const dataurl = URL.createObjectURL(blob);
    a.href = dataurl;
    a.download = file.value + ".txt";
    a.click();
}
function handleFontFamilyChange() {
    var fontFamily = document.getElementById("fontFamilySelect").value;
    document.execCommand("fontName", false, fontFamily);
}
function toggleChecklist() {
    document.execCommand("insertUnorderedList", false, null);
}
function toggleNumlist() {
    document.execCommand("insertOrderedList", false, null);
}
function alignleft() {
    document.execCommand("justifyLeft")
}
function aligncenter() {
    document.execCommand("justifyCenter")
}
function alignright() {
    document.execCommand("justifyRight")
}
function handleundo() {
    document.execCommand("undo")
}
function handleredo() {
    document.execCommand("redo")
}
function handlecut() {
    document.execCommand("cut")
}
function handlecopy() {
    document.execCommand("copy")
}
function handlepaste() {
    document.execCommand("paste")
}
function handleSelectall() {
    var range = document.createRange();
    range.selectNodeContents(textcontent);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("selectall", false, null)
}
function handledelete() {
    document.execCommand("delete")
}
function insertimage() {
    // baki
    document.execCommand("insertImage")
}
function createEmptyTable() {
    var rows = parseInt(document.getElementById("rows").value);
    var cols = parseInt(document.getElementById("cols").value);

    if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) {
        alert("Please enter valid numbers for rows and columns.");
        return;
    }

    var tableHTML = '<table class="table table-bordered">  <tbody>';
    for (var i = 0; i < rows; i++) {
        tableHTML += '<tr>';
        for (var j = 0; j < cols; j++) {
            tableHTML += '<td contenteditable="true"></td>';
        }
        tableHTML += '</tr>';
    }
    tableHTML += ' </tbody> </table>';

    document.execCommand('insertHTML', false, tableHTML);
}

// fontsize
function decreaseFontSize() {
    var fontSizeInput = document.getElementById("fontSizeDropdown");
    var currentFontSize = parseInt(fontSizeInput.value);
    if (currentFontSize > parseInt(fontSizeInput.min)) {
        fontSizeInput.value = currentFontSize - 1;
        setFontSize(fontSizeInput.value);
    }
}

function increaseFontSize() {
    var fontSizeInput = document.getElementById("fontSizeDropdown");
    var currentFontSize = parseInt(fontSizeInput.value);
    if (currentFontSize < parseInt(fontSizeInput.max)) {
        fontSizeInput.value = currentFontSize + 1;
        setFontSize(fontSizeInput.value);
    }
}
function setFontSize(size) {
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
        var range = selection.getRangeAt(0);
        var span = document.createElement('span');
        span.style.fontSize = size + "px";
        range.surroundContents(span);
    }
    textcontent.style.fontSize = size + "px";
}

function fontchange(event) {
    var fontSize = parseInt(event.target.value);
    if (!isNaN(fontSize)) {
        setFontSize(fontSize);
    }
}

function createlink() {
    var url = prompt("Enter the URL:");
    if (url) {
        document.execCommand("createLink", false, url);
    }
}
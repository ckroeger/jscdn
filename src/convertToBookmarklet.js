const fs = require('fs');

function convertToBookmarklet(inputFilePath, outputFilePath) {
  try {
    // Lese den JavaScript-Code aus der Datei
    const jsCode = fs.readFileSync(inputFilePath, 'utf-8');

    // Entferne Leerzeichen, Zeilenumbrüche und Kommentare
    const minifiedCode = jsCode.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ');

    // Erstelle den Bookmarklet-Einzeiler
    const bookmarkletCode = `javascript:(function(){${minifiedCode}})();`;

    // Schreibe den Einzeiler in die Ausgabedatei
    fs.writeFileSync(outputFilePath, bookmarkletCode);

    console.log('Bookmarklet erfolgreich erstellt:', outputFilePath);
  } catch (error) {
    console.error('Fehler beim Erstellen des Bookmarklets:', error.message);
  }
}

const inputFilePath = 'js/test_bookmarklet.js';
const outputFilePath = 'gen/test_bookmarklet.js';

convertToBookmarklet(inputFilePath, outputFilePath);
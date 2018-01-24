const { readFile, writeFileSync } = require('fs');
const { join } = require('path');
const files = [join(__dirname, 'style.css')]

function doubleQuote(files) {
    let newFileContent = ''
    files.forEach(file => {
        readFile(file, { encoding: 'utf8' }, (err, oldContent) => {
            if (err)
                throw err
            
            newFileContent = oldContent.replace(/\'/g, '"');
            writeFileSync(file, newFileContent, {encoding:'utf8'})
        })
    });
}

doubleQuote(files)

    
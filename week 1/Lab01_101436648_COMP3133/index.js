// Daniel Konjarski - 101436648
// COMP3133 - Full Stack Development II

const fs = require('fs');
const csv = require('csv-parser');

const inputFile = 'input_countries.csv';
const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';

[canadaFile, usaFile].forEach((file) => {
    if (fs.existsSync(file)) {
        fs.unlinkSync(file);
        console.log(`${file} deleted.`);
    }
});

fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (row) => {
        const country = row.country.toLowerCase();
        const line = `${row.country},${row.year},${row.population}\n`;

        if (country === 'canada') {
            fs.appendFileSync(canadaFile, line);
        } else if (country === 'united states') {
            fs.appendFileSync(usaFile, line);
        }
    })
    .on('end', () => {
        console.log('CSV file processing completed.');
    });

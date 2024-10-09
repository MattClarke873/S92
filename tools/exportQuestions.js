const fs = require('fs');
const path = require('path');
const ExcelJS = require('exceljs');

// Define the function that updates questionBank.js format
function changeFormat(questionBankPath, callback) {
  // Read the contents of questionBank.js
  fs.readFile(questionBankPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading questionBank.js:', err);
      if (callback) callback(err);
      return;
    }

    // Replace 'export const questions' with 'const questions'
    let updatedData = data.replace('export const questions', 'const questions');

    // Add 'module.exports = questions;' at the end of the array declaration
    if (!updatedData.includes('module.exports = questions;')) {
      updatedData += '\nmodule.exports = questions;';
    }

    // Write the modified content back to questionBank.js
    fs.writeFile(questionBankPath, updatedData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to questionBank.js:', err);
        if (callback) callback(err);
        return;
      }
      console.log('Successfully updated questionBank.js');
      if (callback) callback(null);
    });
  });
}

// Function to export questions to an Excel file
async function exportToExcel(questionBank) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Question Bank');

  // Define columns
  worksheet.columns = [
    { header: 'ID', key: 'id', width: 10 },
    { header: 'Aircraft', key: 'aircraft', width: 20 },
    { header: 'Category', key: 'category', width: 20 },
    { header: 'Question', key: 'question', width: 50 },
    { header: 'Option A', key: 'optionA', width: 30 },
    { header: 'Option B', key: 'optionB', width: 30 },
    { header: 'Option C', key: 'optionC', width: 30 },
    { header: 'Correct Option', key: 'correct', width: 15 }
  ];

  // Add rows from the question bank
  questionBank.forEach(q => {
    worksheet.addRow({
      id: q.id,
      aircraft: q.Aircraft,
      category: q.Category, // Make sure the key matches the structure in questionBank.js
      question: q.question,
      optionA: q.options.a,
      optionB: q.options.b,
      optionC: q.options.c,
      correct: q.correct
    });
  });

  // Write to Excel file
  await workbook.xlsx.writeFile('QuestionBank.xlsx');
  console.log('Excel file created successfully.');
}

// Combine the functions: first run changeFormat, then export the questions to Excel
const questionBankPath = path.join(__dirname, '../js/scrap.js');

changeFormat(questionBankPath, (err) => {
  if (err) {
    console.error('Failed to update questionBank.js:', err);
  } else {
    console.log('questionBank.js format successfully changed.');

    // Clear the require cache to load the updated questionBank.js
    delete require.cache[require.resolve(questionBankPath)];

    // Now require the updated question bank
    const questionBank = require(questionBankPath);

    // After successfully updating, proceed to export the questions to Excel
    exportToExcel(questionBank).catch(err => console.error('Error creating Excel file:', err));
  }
});

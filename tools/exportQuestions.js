const ExcelJS = require('exceljs');
const questionBank = require('../js/questionBank'); // Adjust the path if necessary

async function exportToExcel() {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Question Bank');

  // Define columns
  worksheet.columns = [
    { header: 'ID', key: 'id', width: 10 },
    { header: 'Category', key: 'category', width: 20 },
    { header: 'Question', key: 'question', width: 50 },
    { header: 'Option A', key: 'optionA', width: 30 },
    { header: 'Option B', key: 'optionB', width: 30 },
    { header: 'Option C', key: 'optionC', width: 30 },
    { header: 'Correct Option', key: 'correct', width: 15 }
  ];

  // Add rows
  questionBank.forEach(q => {
    worksheet.addRow({
      id: q.id,
      category: q.category,
      question: q.question,
      optionA: q.options.a,
      optionB: q.options.b,
      optionC: q.options.c,
      correct: q.correct
    });
  });

  // Write to file
  await workbook.xlsx.writeFile('QuestionBank.xlsx');
  console.log('Excel file created successfully.');
}

exportToExcel().catch(err => console.error('Error creating Excel file:', err));

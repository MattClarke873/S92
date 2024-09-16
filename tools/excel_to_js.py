import openpyxl
import tkinter as tk
from tkinter import filedialog

def convert_excel_to_js(input_file, output_file):
    workbook = openpyxl.load_workbook(input_file)
    sheet = workbook.active

    js_data = []

    for row in sheet.iter_rows(min_row=2, values_only=True):
        js_object = {
            'id': row[0],
            'Aircraft': row[1],
            'Category': f"'{row[2]}'",
            'question': row[3],
            'options': {'a': row[4], 'b': row[5], 'c': row[6]},
            'correct': row[7],
        }

        js_data.append(js_object)

    # Create custom JavaScript object format
    js_data_str = ',\n'.join(
        '{\n'
        f'    id: {repr(obj["id"])},\n'
        f'    Aircraft: {repr(obj["Aircraft"])},\n'
        f'    Category: {obj["Category"]},\n'
        f'    question: {repr(obj["question"])},\n'
        f'    options: {{\n'
        f'        a: {repr(obj["options"]["a"])},\n'
        f'        b: {repr(obj["options"]["b"])},\n'
        f'        c: {repr(obj["options"]["c"])}\n'
        f'    }},\n'
        f'    correct: {repr(obj["correct"])}\n'
        '}' for obj in js_data
    )
    
    js_data_str = '[\n' + js_data_str + '\n]'

    with open(output_file, 'w') as js_file:
        js_file.write('//uncomment this line and comment export line to export to excel.  AND THE BOTTOM LINE')
        js_file.write('\n')
        js_file.write('// const questionBank = [')
        js_file.write(';\n')
        js_file.write('export const questions = ')
        js_file.write(js_data_str)
        js_file.write(';')
        js_file.write('\n')
        js_file.write('//module.exports = questionBank; ')

def browse_input_file():
    file_path = filedialog.askopenfilename(filetypes=[("Excel files", "*.xlsx")])
    input_entry.delete(0, tk.END)
    input_entry.insert(0, file_path)

def browse_output_file():
    file_path = filedialog.asksaveasfilename(defaultextension=".js", filetypes=[("JavaScript files", "*.js")])
    output_entry.delete(0, tk.END)
    output_entry.insert(0, file_path)

def convert_button_click():
    input_file = input_entry.get()
    output_file = output_entry.get()

    if input_file and output_file:
        convert_excel_to_js(input_file, output_file)
        status_label.config(text="Conversion successful!")
    else:
        status_label.config(text="Please select both input and output files.")

# Create the main GUI window
root = tk.Tk()
root.title("Excel to JavaScript Converter")

# Input file entry and browse button
tk.Label(root, text="Input Excel File:").grid(row=0, column=0, padx=5, pady=5)
input_entry = tk.Entry(root, width=40)
input_entry.grid(row=0, column=1, padx=5, pady=5)
tk.Button(root, text="Browse", command=browse_input_file).grid(row=0, column=2, padx=5, pady=5)

# Output file entry and browse button
tk.Label(root, text="Output JavaScript File:").grid(row=1, column=0, padx=5, pady=5)
output_entry = tk.Entry(root, width=40)
output_entry.grid(row=1, column=1, padx=5, pady=5)
tk.Button(root, text="Browse", command=browse_output_file).grid(row=1, column=2, padx=5, pady=5)

# Convert button
tk.Button(root, text="Convert", command=convert_button_click).grid(row=2, column=1, pady=10)

# Status label
status_label = tk.Label(root, text="")
status_label.grid(row=3, column=0, columnspan=3)

# Run the GUI
root.mainloop()

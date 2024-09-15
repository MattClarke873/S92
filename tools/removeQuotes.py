import re
import os
import tkinter as tk
from tkinter import filedialog

def remove_quotes_from_keys(js_content):
    # Use regular expression to remove quotes from keys
    pattern = re.compile(r'["\']?(\w+)["\']?:')
    modified_content = pattern.sub(r'\1:', js_content)
    return modified_content

def process_file(input_file_path, output_file_path_label):
    # Check if the file exists
    if not os.path.isfile(input_file_path):
        output_file_path_label.config(text="File not found. Please provide a valid file path.")
        return

    # Read the content of the JavaScript file
    with open(input_file_path, 'r') as file:
        js_content = file.read()

    # Remove quotes from keys
    modified_content = remove_quotes_from_keys(js_content)

    # Create an output file path by adding "_modified" to the original file name
    output_file_path = os.path.splitext(input_file_path)[0] + "_modified.js"

    # Write the modified content to the output file
    with open(output_file_path, 'w') as file:
        file.write(modified_content)

    output_file_path_label.config(text=f"Quotes removed from keys. Modified content saved to {output_file_path}.")

def browse_file(entry):
    file_path = filedialog.askopenfilename(filetypes=[("JavaScript Files", "*.js")])
    entry.delete(0, tk.END)
    entry.insert(0, file_path)

def main():
    # Create the main window
    window = tk.Tk()
    window.title("Remove Quotes from Keys")

    # Create and configure the file entry widget
    file_entry = tk.Entry(window, width=50)
    file_entry.grid(row=0, column=0, padx=10, pady=10)

    # Create a button to browse for a file
    browse_button = tk.Button(window, text="Browse", command=lambda: browse_file(file_entry))
    browse_button.grid(row=0, column=1, padx=10, pady=10)

    # Create a label to display the output file path
    output_file_path_label = tk.Label(window, text="")
    output_file_path_label.grid(row=1, column=0, columnspan=2, pady=10)

    # Create a button to process the file
    process_button = tk.Button(window, text="Process File", command=lambda: process_file(file_entry.get(), output_file_path_label))
    process_button.grid(row=2, column=0, columnspan=2, pady=10)

    # Start the main loop
    window.mainloop()

if __name__ == "__main__":
    main()

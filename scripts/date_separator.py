import os
import re
# Set the path to the input file
input_file = "dr-glas.txt"

# Create a directory to store the output files
output_dir = "dr_glas/kapitel"
os.makedirs(output_dir, exist_ok=True)
reg = '([0-9]{1,2}\s(?:juni|juli|augusti|september|oktober).*)\n\n'

# Open the input file and read the contents
with open(input_file, "r") as f:
    file = f.read()

entries = re.split(reg, file)
entry_array = []
for i, entry in enumerate(entries):
    if(i % 2):
        if(i == len(entries)):
            break
        entry_array.append((entries[i].strip().strip("."),entries[i + 1]))

# Iterate over the entries and write each one to a separate file
for entry in entry_array:
        output_file = os.path.join(output_dir, f"{entry[0]}.txt")
        with open(output_file, "w") as f:
            f.write(entry[1])

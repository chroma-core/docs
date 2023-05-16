pydoc-markdown

new_section=$(cat <<EOF
---
sidebar_label: Client
title: Client
sidebar_position: 1
---
EOF
)

# Escape new lines
new_section=${new_section//$'\n'/\\n}

# Define the file
file="docs/reference/local.md"

# Check if file exists
if [ ! -f "$file" ]; then
    echo "$file not found!"
    exit 1
fi

# Use sed to replace section
# Create an empty backup file for compatibility with macOS/BSD sed
sed -i.bak -e ':a' -e 'N' -e '$!ba' -e 's/---\n.*\n---/'"$new_section"'/g' "$file"

# Remove the backup file
rm "${file}.bak"

new_section2=$(cat <<EOF
---
sidebar_label: Collection
title: Collection
sidebar_position: 2
---
EOF
)

# Escape new lines
new_section2=${new_section2//$'\n'/\\n}

# Define the file
file2="docs/reference/Collection.md"

# Check if file2 exists
if [ ! -f "$file2" ]; then
    echo "$file2 not found!"
    exit 1
fi

# Use sed to replace section
# Create an empty backup file for compatibility with macOS/BSD sed
sed -i.bak -e ':a' -e 'N' -e '$!ba' -e 's/---\n.*\n---/'"$new_section2"'/g' "$file2"

# Remove the backup file
rm "${file2}.bak"
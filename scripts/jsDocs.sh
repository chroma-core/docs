rm -rf ./docs/js_reference

npx typedoc --disableSources --hideBreadcrumbs true --hideInPageTOC true

cd ./docs/js_reference

mv classes/ChromaClient.md Client.md 
mv classes/Collection.md Collection.md 

cat <<EOT > _category_.json
{
    "position": 20,
    "label": "⚪️ JS Docs",
    "collapsible": true,
    "collapsed": true,
    "className": "notbold"
}
EOT

cat <<EOT > sidebar.json
{
  "items": [
    "Client",
    "Collection"
  ],
  "label": "Reference Docs",
  "type": "category"
}
EOT


FILE="Client.md"
TEMP_FILE=$(mktemp)
cat <<- EOF > $TEMP_FILE
---
sidebar_label: Client
title: Client
sidebar_position: 1
---

EOF
cat $FILE >> $TEMP_FILE
mv $TEMP_FILE $FILE


FILE="Collection.md"
TEMP_FILE=$(mktemp)
cat <<- EOF > $TEMP_FILE
---
sidebar_label: Collection
title: Collection
sidebar_position: 2
---

EOF
cat $FILE >> $TEMP_FILE
mv $TEMP_FILE $FILE


# delete a few files
rm README.md
rm modules.md
rm -rf interfaces
rm -rf classes

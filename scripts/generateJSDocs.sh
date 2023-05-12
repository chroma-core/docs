rm -rf ./docs/js_reference

npx typedoc --disableSources --hideBreadcrumbs true --hideInPageTOC true

cd ./docs/js_reference

mv classes/ChromaClient.md Client.md 
mv classes/Collection.md Collection.md 

cat <<EOT > _category_.json
{
    "position": 20,
    "label": "📑 Javascript API Docs",
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


# delete a few files
rm README.md
rm modules.md
rm -rf classes

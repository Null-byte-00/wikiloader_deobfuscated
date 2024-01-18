import re

f = open("wikiloader.js", 'r').read()
cleaned = re.sub(r"/\*(.*?)\*/", "", f)
#cleaned = cleaned.replace(";", ";\n")
open("wikiloader_cleaned.js", 'w').write(cleaned)
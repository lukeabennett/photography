npm run static && touch out/.nojekyll && touch out/CNAME && echo "lukebennett.photography" >> out/CNAME && npx push-dir --dir=out --branch=site
gatsby build
echo avimoskoff.me > public/CNAME
cp README.md public/README.md
echo ".cache/*\nnode_modules/*" > public/.gitignore
gh-pages -d public -b master

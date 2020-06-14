gatsby build
echo avimoskoff.me > public/CNAME
cp README.md public/README.md
gh-pages -d public -b master

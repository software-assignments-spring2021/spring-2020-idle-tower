#!/bin/bash

ssh root@165.227.101.20 << EOF

cd ~/foodcheck/back-end
forever stopall

cd ~/foodcheck/front-end
service frontend stop

git stash
git stash clear
git pull

npm install
npm run build
service frontend start &

cd ~/foodcheck/back-end
npm install
npm run forever

exit 0
EOF
exit 0
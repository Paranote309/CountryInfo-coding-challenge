cd backend
start "node-server"  node index.js
cd ../src
start "react-webpage" npm start
pause 
taskkill /FI "WindowTitle eq node-server*" /T /F
taskkill /FI "WindowTitle eq react-webpage*" /T /F


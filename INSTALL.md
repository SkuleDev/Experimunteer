I'll probably be writing an installation script soon enough.

1. Install git
2. Install the Node Version Manager (nvm) <br>
`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash`<br>
**NOTE:** If there is an issue, please contact me (Connor / @connorjsmith) on facebook, but this should work for most *NIX systems (such as mac and linux)
3. Install node. At the time of writing, the latest stable version is node version 5.3.0<br>
`nvm install node`
4. Make the nvm managed node your default<br>
`nvm alias default stable`
5. Clone the Experimunteer repository (I will assume that it is in the `~/Experimunteer` folder from here on out. Please replace this path with wherever you cloned the repo<br>
`mkdir ~/Experimunteer && git clone https://github.com/SkuleDev/Experimunteer.git ~/Experimunteer`
6. Install and compile the experimunteer application (This make take a little while)<br>
`cd ~/Experimunteer && npm install && gulp compile`
7. install gulp globally
`npm install -g gulp`
8. Run the experimunteer application (See README.md for further information on running)<br>
`gulp default`
9. Use a web browser to navigate to the address given by the previous command (Usually, this will be `http://localhost:3000`)
10. If you're going to be making changes, please create a new branch before doing anything<br>
`git checkout -b "yourName/NewBranchName"`
11. Have fun, and good luck!

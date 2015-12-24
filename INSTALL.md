I'll probably be writing an installation script soon enough.

0. Install git
1. Install the Node Version Manager (nvm)
`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash`
1a. If there is an issue, please contact me (Connor) on facebook, this should work for most *NIX systems (such as mac and linux)
2. Install node. Currently, that is node version 5.3.0
`nvm install node`
3. Make the nvm managed node your default
`nvm alias stable`
4. Clone the Experimunteer repository (I will assume that it is in the `~/Experimunteer` folder from here on out. Please replace this path with wherever you cloned the repo
`mkdir ~/Experimunteer && git clone https://github.com/SkuleDev/Experimunteer.git ~/Experimunteer`
5. Install and compile the experimunteer application (This make take a little while)
`npm install && gulp compile`
6. Run the experimunteer application (See README.md for further information on running)
`gulp default`
7. Use a web browser to navigate to the address given by the previous command (Usually, this will be `http://localhost:3000`)
8. Have fun, and good luck!

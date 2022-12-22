# Nord OpenVPN Config Generator
A simple node.js script to generate OpenVPN configuration files that can randomly select a server, rather than having only a single server per config file.

## Usage
1. Download and install node.js
2. Download the source code for this project
3. Unzip the project if needed, and open a terminal in the directory where `index.js` is
4. Run `npm i` to install all necessary packages
5. Run `node . country city`

The `country` should be the name of the target country with no spaces, or that country's 2-letter code. The `city` should be the name of the target city with no spaces, or if the city has a common abbreviation such as "NYC", you can use that as well. If a city is not specified, servers will be randomly selected from the target country.

## Issues/Limitations
OpenVPN only allows you to have 64 remotes to randomly choose from, so when there are more than 64 matches, the script will randomly select 64 of them to be put in the file.

Nord does not specify the name of the city a server is in, so the only way to match a city is by checking it's latitude. If new cities are added, they will need to be added to the script. If any countries, cities, or abbreviations are missing, open an issue or make a pull request to have it fixed.

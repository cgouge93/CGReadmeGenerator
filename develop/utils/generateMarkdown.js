// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseList = [{
  name: 'MIT',
  link: "https://opensource.org/licenses/MIT",
  badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
},
{
  name: 'APACHE 2.0',
  link: "https://opensource.org/licenses/Apache-2.0",
  badge: "[![License: APACHE 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
},
{
  name: 'GPL 3.0',
  link: "https://opensource.org/licenses/GPL-3.0",
  badge: "[![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPL-3.0)"
},
{
  name: 'BSD 3',
  link: "https://opensource.org/licenses/BSD-3-Clause",
  badge: "[![License: BSD 3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)(https://opensource.org/licenses/BSD-3-Clause)"
},
];


function renderLicenseBadge(license) {
  const selectedLicense = licenseList.filter(item => item.name === license);
  if (!license) {
    return '';
  } else {
    return selectedLicense[0].badge;
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const selectedLicense = licenseList.filter(item => item.name === license);
  if (!license){
    return '';
  } else {
    return selectedLicense[0].link
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `## License Information`
  }
  
}

function generateMarkdown(data) {
  return`
  ${renderLicenseBadge(data.license)}

  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#using)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  To install necessary dependencies, run the following command:
  ${data.installation}
  ## Usage
  ​${data.using}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Contributing
  ​About contributing: ${data.contributing}
  ## Tests
  To run tests, run the following command: 
  ${data.test}
  ## Questions
  If you have any questions about the repo, open an issue or contact ${data.username} directly at ${data.email}.
  `
}

module.exports = generateMarkdown

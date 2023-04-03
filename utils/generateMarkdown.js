// Returns a license badge based on which license is passed in//
let renderLicenseBadge = (license) => {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPLv2':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'BSD 3-clause':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    default:
      return '';
  }
};

// Returns the license link //
let renderLicenseLink = (license) => {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPLv2':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
    case 'BSD 3-clause':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'Unlicense':
      return 'http://unlicense.org/';
    default:
      return '';
  }
};


// Generates markdown for README //
let generateMarkdown = (data) => {

  const licenseLink = renderLicenseLink(data);
  const licenseBadge = renderLicenseBadge(data.license);

  return `
  # ${data.project}
  ${licenseBadge}${licenseLink}
  ## Table of Contents
  - [Project description](#description)
  - [Installation](#installation)
  - [Useage](#usage)
  - [Collaborators](#collaborators)
  - [How to Contribute](#contributing)
  - [Testing](#tests)
  - [License](#license)
  ## Description 
  ${data.description} 
  
  ## Installation
  ${data.installation} 
  
  ## Useage 
  ${data.usage} 

  ## Collaborators 
  ${data.collaborators} 

  ## Testing 
  ${data.tests} 

  ## Questions?
  Please contact me at:
  GitHub: https://github.com/${data.github}
  Email: ${data.email}
  
  ## License 
  ${data.project} is licensed under the: 
  
  ${licenseBadge}${licenseLink}
`;
};

module.exports = generateMarkdown;
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return `![${license}](https://img.shields.io/badge/license-Apache%202-blue)`
  }
  if (license === "GNU") {
    return `![${license}](https://img.shields.io/badge/license-GPL%20v3-blue)`
  }
  if (license === "MIT") {
    return `![${license}](https://img.shields.io/badge/license-MIT-yellow)`;
  }
  if (license === "BSD-2") {
    return `![${license}](https://img.shields.io/badge/license-BSD--2-orange)`
  }
  if (license === "BSD-3") {
    return `![${license}](https://img.shields.io/badge/license-BSD--3-orange)`
  }
  if (license === "None") {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return `<a href="https://choosealicense.com/licenses/apache-2.0/">Apache</a>`
  }
  if (license === "GNU") {
    return `<a href="https://choosealicense.com/licenses/gpl-3.0/">GNU</a>`
  }
  if (license === "MIT") {
    return `<a href="https://choosealicense.com/licenses/mit/">MIT</a>`;
  }
  if (license === "BSD-2") {
    return `<a href="https://opensource.org/licenses/BSD-2-Clause">BSD</a>`
  }
  if (license === "BSD-3") {
    return `<a href="https://opensource.org/licenses/BSD-3-Clause">BSD</a>`
  }
  if (license === "None") {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {

  if (license === "Apache") {
    return `
${renderLicenseLink(license)} License
Version 2.0, January 2004
http://www.apache.org/licenses/
`;
  }
  
  if (license === "GNU") {
    return `
${renderLicenseLink(license)} GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
Copyright (C) 2007 Free Software Foundation, Inc. https://fsf.org/ Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.
`;
  }
  
    if (license === "MIT") {
      return `
${renderLicenseLink(license)} License

Copyright (c) 2021 ${name}
`;
    }

    if (license === "BSD-2") {
      return `
${renderLicenseLink(license)} 2-Clause License

Copyright (c) 2021, ${name} All rights reserved.
`;
    }
    
    if (license === "BSD-3") {
      return `
${renderLicenseLink(license)} 3-Clause License

Copyright (c) 2021, ${name} All rights reserved.
`;
    }

    if (license === "None") {
      return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

### ${data.description}

---

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

---

## Motivation & Research

${data.motivation}
${data.why}
${data.problem}
${data.learn}

## Installation

${data.installation}

## Usage

${data.usage}

![${data.altImage1}](${data.image1})
![${data.altImage2}](${data.image2})

## Credits

${data.credits}

## License

${renderLicenseSection(data.license, data.name)}

## Features

${data.features}

## How to Contribute

![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)

${data.contribute}

### Questions

To view my repositories check out my GitHub:

* http://www.github.com/${data.github}

For any questions contact me at:

* ${data.email}

---

<div align="center">

**Thank you for visiting.**

</div>

---
`;
}

module.exports = generateMarkdown;

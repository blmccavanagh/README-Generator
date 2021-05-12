// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![${license}](https://img.shields.io/badge/license-MIT-brightgreen)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if (license === "MIT")
  // if 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}
  ${data.motivation}
  ${data.why}
  ${data.problem}
  ${data.learn}

  ## Table of Contents

  * Installation
  * Usage
  * Credits
  * License

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ![](${data.images})

  ## Credits

  ${data.credits}

  ## License

  ${data.license}

  ## Badges

  ![]${data.badges}

  ## Features

  ${data.features}

  ## How to Contribute

  ${data.contribute}

  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)
  ^^ only include if contributers included

  ### Questions

  To view my repositories check out my github:

  * http://www.github.com/${data.github}

  For any questions contact me at:

  * ${data.email}

`;
}

module.exports = generateMarkdown;

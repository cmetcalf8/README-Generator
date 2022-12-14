
// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} #

## Description ##

${data.description}
[![License](https://img.shields.io/badge/License-${data.licensing}-blue.svg)](https://opensource.org/licenses/${data.licensing})

## Installation Instructions ##

${data.installation}

## Usage ##

${data.usage}

## Guidelines ##

${data.guidelines}

## Test Instructions ##

${data.test}

## License ##

${data.licensing}

## Github ##

${data.github}

## Email ##

${data.email}

`;

}

module.exports = generateMarkdown;
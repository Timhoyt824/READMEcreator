function generateMarkdown(data) {
    return `
  ![GitHub](https://img.shields.io/badge/license-${data.license}-blue)
    
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [License](#license)
  * [Installation](#installation)
  * [Tests](#tests)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Questions](#questions)
  ## Installation
  \`\`\` ${data.installation} \`\`\`
  ## Tests
  \`\`\` ${data.tests} \`\`\`
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  ${data.contributions}
  ## Questions
  ${data.username}
  ![avatar](${data.picture})
  `
  };
  
  module.exports = generateMarkdown;
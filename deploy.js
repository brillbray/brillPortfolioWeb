#!/usr/bin/env node

const ghpages = require('gh-pages');
const path = require('path');

ghpages.publish(
  path.join(__dirname, 'build'),
  {
    branch: 'gh-pages',
    repo: 'https://github.com/brillbray/brillPortfolioWeb.git',
    message: 'Deploy to GitHub Pages'
  },
  (err) => {
    if (err) {
      console.error('Deployment failed:', err);
      process.exit(1);
    } else {
      console.log('Deployment succeeded!');
      process.exit(0);
    }
  }
);

# contentspinner

[![npm version](https://img.shields.io/npm/v/contentspinner.svg)](https://www.npmjs.com/package/contentspinner) [![Build Status](https://travis-ci.org/YousefED/contentspinner.svg?branch=master)](https://travis-ci.org/YousefED/contentspinner)

Roll different text variants from a base text. This technique (article text spinning) has its roots in SEO (not recommended for this) but can be used for many purposes, e.g.: personalized greetings. 

## example
`spincontent("{hello|hi} {world|universe{s|}}")`

Will return one of:
- hello world
- hello worlds
- hello universe
- hello universes
- hi world
- hi worlds
- hi universe
- hi universes
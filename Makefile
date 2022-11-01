install: # install dependencies
	npm ci

brain-games: # launch brain-games module
	node bin/brain-games.js

publish: # publish npm package
	npm publish --dry-run

lint: # launch eslint
	npx eslint .
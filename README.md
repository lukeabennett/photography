# Photography

1. Make changes.
2. `npm run deploy`.

---
## Usage

NextJs generates the pages for this site. To do this, the `next build` and `next export` commands need to be run. These can both be done with:
```
npm run static
```

Github has been configured to use github pages on the `site` branch. Anything pushed to this branch will be displayed on the site. To deploy only the contents of `./out` on this branch, a helpful script has been setup to do this.
```
npm run deploy
```

This will `build`, `export`, add `CNAME`, add `.nojekyll`, and push to the remote `site` branch.

---
## What's .nojekyll?
This is used to tell github pages to make the `_next` folder available as a static resource. Without this blank file, none of the JS or CSS runs.

## Where does the CNAME file come from?
This is created as part of the deploy script, the CNAME written to the file can be changed in the `deploy.sh` file.

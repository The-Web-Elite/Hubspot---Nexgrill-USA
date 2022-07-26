# nexgrill

Github integration ✅

#### GETTING STARTED

Generate a config file with your authentication config (this file must be untracked by git):
```
hs auth
```
- Select the account you want to work with
- Enter the name of the account (eg: live or dev)
- For all following commands:
  - replace `<account-name>` with your account name
  - replace `<src>` with the source folder name (depending on the direction of your request), eg:
    - if you are fetching, your src folder would be the one on hubspot
    - If you are uploading or watching, your src folder would be the local folder
  - replace `[dest]` with the destination folder name (depending on the direction, as above)

Fetch files from Hubspot to update the repository:
```
hs fetch --account=<account-name> <src> [dest] --overwrite
```

Push your development branch to sandbox portal:
```
hs upload --account=<account-name> <src> [dest]
```

Start watching local files and developing:
```
hs watch --account=<account-name> <src> [dest]
```

#### DEPLOYMENT PROCESSES

##### TO PREVIEW:
- Open `preview` branch
- Merge your dev branch into `preview`
- Push to origin
- Run `hs upload --account=sandbox <dir> [dest]`

##### TO LIVE:
- Open `main/master` branch
- Merge your dev branch into `main/master`
  - Optional: If you are concerned at all and want to preview `main/master` before actual deployment, then BEFORE you push to origin, run `hs upload --account=sandbox  <dir> [dest]` to push the code to the sandbox portal
- Push to origin to deploy

---

Learn more Hubspot CLI commands:
- [Core commands](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cli#commands)

---

`v-1.3` | [View readme template](https://github.com/The-Web-Elite/readme-templates/blob/main/readme_hubspot_github.md) | [How to update README.md](https://www.youtube.com/watch?v=DYGKWZMWx3M&list=PLsgO5HWEeglee85Gtb1KjvBnykpA1-BCP&index=14)

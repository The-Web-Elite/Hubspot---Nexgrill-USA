# nexgrill

Github integration ✅

#### Getting started

Push your development branch to sandbox portal:

```
hs upload --account=sandbox nexgrill nexgrill
```

Start watching local files and developing:

```
hs watch --account=sandbox nexgrill nexgrill
```

#### Deployment process

Preview:
- Open `preview` branch
- Merge your dev branch into `preview`
- Push to origin
- Run `hs upload --account=sandbox nexgrill nexgrill`

Live:
- Open `main/master` branch
- Merge your dev branch into `main/master`
  - Optional: If you are concerned at all and want to preview `main/master` before actual deployment, then BEFORE you push to origin, run `hs upload --account=sandbox  nexgrill nexgrill` to push the code to the sandbox portal
- Push to origin to deploy

Learn more Hubspot CLI commands:
- [Core commands](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cli#commands)

# ShipTested fresh judge demo

This is a deliberately small, public-safe repository created for a fresh
ShipTested walkthrough. It contains no credentials and no customer code.

The dependency versions are intentionally outdated so the scanner can show
real OSV evidence and a blocked release decision:

- `lodash@4.17.20`

The URL scan reads committed exact-version manifests without executing code.
Repair verification installs dependencies in isolated sandboxes with lifecycle
scripts disabled, then turns off networking before running the tests.

The two tests exercise lodash's grouping, totals and deduplication behavior.
Run them only in the isolated repair sandbox for this intentionally outdated baseline:

```sh
npm test
```

The expected judge flow is:

1. Open this repository on GitHub and show the pinned baseline commit.
2. Submit the repository URL to ShipTested.
3. Review the pinned commit, dependency findings, OSV evidence and coverage.
4. Prepare the lodash repair and run baseline and patched sandbox tests.
5. Review the dependency diff and fresh advisory scan, then approve a draft PR.
6. Leave the draft unmerged. This fixture is not a deployable application.

Optional Nemotron explanations are shown only when the ShipTested deployment
has its Nebius provider configuration enabled. Provider output must enrich the
evidence without changing the deterministic OSV verdict.

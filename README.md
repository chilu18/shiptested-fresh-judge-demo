# ShipTested fresh judge demo

This is a deliberately small, public-safe repository created for a fresh
ShipTested walkthrough. It contains no credentials and no customer code.

The dependency versions are intentionally outdated so the scanner can show
real OSV evidence and a blocked release decision:

- `lodash@4.17.20`
- `jsonwebtoken@8.5.1`

Do not install the dependencies for the judge demo. ShipTested reads the
committed exact-version manifests without executing repository code.

The repository smoke test is independent of those packages:

```sh
npm test
```

The expected judge flow is:

1. Open this repository on GitHub and show its first scan.
2. Submit the repository URL to ShipTested.
3. Review the pinned commit, dependency findings, OSV evidence and coverage.
4. Stop at the human approval boundary; do not merge or deploy a repair.

Optional Nemotron explanations are shown only when the ShipTested deployment
has its Nebius provider configuration enabled. Provider output must enrich the
evidence without changing the deterministic OSV verdict.

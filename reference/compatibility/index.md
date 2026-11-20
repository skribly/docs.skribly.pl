# Compatibility

> Which versions of the Skribly packages belong together: every release train with its core, ui and agent-skills versions, the oldest Skribly Agent and Skribly Tracker that work with it, and what it was tested on.

The shared packages of Skribly ship as release trains: one train per minor version, so the packages of the same train are known to work together. A fix inside a train moves only the package it fixes, as 0.3.1, 0.3.2 and so on. This page lists every train, newest first.

## Trains

<CompatTable />

## How to read the table

- **Train** links to the notes of the train, where they exist: what it brings and how to upgrade.
- **@skribly/core**, **@skribly/ui** and **agent-skills** are the versions that belong to the train. "A later train" means the package is not part of this one and keeps the version of the train before it.
- **Skribly Agent, at least** and **Skribly Tracker, at least** are the oldest versions of the apps that work with the train.
- **Node.js**, **Astro**, **React** and **Next.js** are the versions the train was tested on.

## Where the data comes from

The table is drawn from `compat.json` in the core repository, the one list of which versions belong to which train. The same file names the commit of the site kit each site uses. Each new train adds its row there first.

## Related pages

- [Release train 0.3](/releases/train-0-3/)
- [Changelog](/changelog/)
- [Architecture](/overview/architecture/)

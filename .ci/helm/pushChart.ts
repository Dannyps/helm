#!/usr/bin/env -S npx ts-node --esm -T

import { $ } from "zx";
import { getRequiredEnvVar } from "../lib.js";

const version = getRequiredEnvVar("VERSION");

await $`ls -alh`;
await $`mv my-helm-chart-${version}.tgz`;
await $`helm push repo-name/helm-chart-${version}.tgz oci://ghcr.io/nmshd`;

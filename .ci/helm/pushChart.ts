#!/usr/bin/env -S npx ts-node --esm -T

import { $ } from "zx";
import { getRequiredEnvVar } from "../lib.js";

const version = getRequiredEnvVar("VERSION");

await $`helm push repo-anme/helm-chart-${version}.tgz oci://ghcr.io/nmshd`;

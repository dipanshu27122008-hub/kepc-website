# Project Automation Scripts (`scripts/`)

## Purpose
Contains repeatable, cross-platform automation scripts for building, testing, linting, migrating databases, or deploying the project.

## Conventions
1. **Idempotence**: Scripts should be safe to run multiple times without unintended side effects.
2. **Fail Fast**: Scripts must exit immediately on error (`set -e` in Bash, `$ErrorActionPreference = 'Stop'` in PowerShell).
3. **No Hardcoded Credentials**: Pass required configurations via environment variables (`.env`).

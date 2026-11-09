# Test Suite (`tests/`)

## Purpose
This directory contains all automated test suites ensuring correctness, stability, and regression prevention per Rule 6.

## Structure
- `unit/`: Fast, isolated tests targeting pure domain logic, entities, and calculation routines without external dependencies (no network, no real DB).
- `integration/`: Tests verifying interactions between multiple components, such as repositories interacting with a local database or service integrations.
- `e2e/`: End-to-end tests validating complete user workflows, system startup, and public interface contracts.

## Testing Guidelines
1. **Deterministic Execution**: Tests must run and pass via a single command in any clean environment.
2. **Coverage of Edge Cases**: Tests must assert boundary conditions, invalid inputs, timeouts, and error handling.
3. **No Flaky Tests**: Tests must be hermetic and avoid reliance on non-deterministic external networks or unseeded random state.

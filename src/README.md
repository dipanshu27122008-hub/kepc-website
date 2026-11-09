# Source Code Directory (`src/`)

## Purpose
This directory houses all production source code for the application.

## Architectural Principles
1. **Separation of Concerns**: Decouple domain business logic from delivery interfaces (HTTP, CLI, GUI) and storage infrastructure.
2. **Framework Independence**: The core business rules should not depend directly on third-party frameworks.
3. **Defensive Programming**: Validate inputs at system boundaries (interfaces, network, file ingestion).

## Recommended Organization
- `domain/` or `core/`: Pure entities, business logic, validation rules, and domain events.
- `interfaces/` or `api/`: HTTP controllers, CLI command handlers, GUI viewmodels, or message listeners.
- `services/`: Application orchestration and use-case coordination.
- `infrastructure/` or `data/`: Database clients, file I/O, external API clients, and telemetry adapters.
- `config/`: Environment variable validation and strongly-typed configuration objects.

# Mermaid Diagram

## Installation

Pull plugin from VSC marketplace `bierner.markdown-mermaid`

## Prompt

````
Create me a mermaid diagram for the following use case. Use proper colors and symbols to convey the relationships. You can use icons like this: Supports MDI and logos icons from Iconify:

```mermaid
architecture-beta
    service user(mdi:account)
    service lambda(logos:aws-lambda)

    user:R --> L:lambda
````

Our use Case: {inject content}

## Example

```mermaid
flowchart LR
    User((fa:fa-user)) -->|Login Request| Auth[Authentication Service]
    Auth -->|Validate Credentials| DB[(Database)]
    DB -->|Credentials Check| Auth
    Auth -->|Success| User
    Auth -->|Failure| User
    style User fill:#f9f,stroke:#333,stroke-width:2px
    style Auth fill:#bbf,stroke:#333,stroke-width:2px
    style DB fill:#dfd,stroke:#333,stroke-width:2px
```

# CLI Command Usage

Its underestimated how helpful it can be that Cursor can execute commands and read the output and act on the output on its own.

## Examples

### Create Interfaces from undocumented API Endpoints

```
Use CURL as command and iterate through the list of API Endpoints written down in @Endpoints.txt. Do check the payload returned and create typed interfaces for the response. Only use GET for now.
```

### Database Performance (with MCP in place)

Run `EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@example.com';`
and explain the output. Then pull information from `INFORMATION_SCHEMA` to propose changes which make the discussed query faster.

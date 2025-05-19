# Third-Party-Integration

## Example Fakturia OpenAPI

## Setup

The openapi.json from Fakturia has 60,856 Tokens, so its quite big.

Often we can use @docs to add `Fakturia OpenAPI` as docs with this link: docs: https://api.sandbox.fakturia.de/api/openapi.json, but 60k Tokens are too much to digest for the @docs approach.

**Instead** use a Model like Gemini 2.5 with MAX enabled, which is able to ingest the full openapi.json in one conversation. Other Models will run into a `conversation too large` error message. Sometimes you need to start a new chat to get rid of the error message.

## Prompt

Read the following docs and explain to me how I can implement the following feature: I want to write invoices to customers on a monthly base and I want them to charge 200 Euros on the 27nd each month.

{inject full openapi.json via copy paste}

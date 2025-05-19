# Text To SQL

## Intro

A common misconception is that people expect gen ai models to pick up SQL on the fly. But even simple queries cover a lot of intent and custom domain context, depending on how the underlying database is modeled. To be comparable with Excel Sheets and current Reports, there is a semantic layer needed which is often incomplete and undocumented.

## Examples:

Take a seemingly simple query:

```sql
SELECT sum(revenue) as total_revenue
FROM sales
WHERE year = 2023
```

With a schema that looks straightforward:

```sql
CREATE TABLE sales (
    id INTEGER PRIMARY KEY,
    revenue DECIMAL(10,2),
    year INTEGER
);
```

But this simple query hides important context:

1. Is this revenue before or after tax?
2. What currency is the revenue stored in?
3. Should we consider exchange rates if the data spans multiple regions?
4. Are there any adjustments needed for refunds or chargebacks?
5. Does the revenue include or exclude shipping costs?
6. It is clearly a simplification of a table, what kind of preprocessing is already applied?

Even this basic example shows how domain knowledge and business context are crucial for writing correct SQL queries.

## My humble Approach

1. Start with adding a file or a set of files being references inside a markdown using @SQL-Reference.sql which contain custom SQL as reference. Ideally annotated what it solves.
2. Explain your intent
3. Feedback data

Alternatively using an ORM does help a lot as it already covers the intent through training data e.g. stackoverflow.

## Alternatives

Much harder to implement, but on trained evaluations, it yields much better results:

- https://www.quills.ai/
- https://www.blazesql.com/
- https://github.com/vanna-ai/vanna
- https://www.crystaldba.ai/

My experience here is that everyone was underestimating the effort to implement it, but have been happy with the results when it was fully configured.

References

- https://cloud.google.com/blog/products/databases/techniques-for-improving-text-to-sql?hl=en

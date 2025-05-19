# Review Pull Requests

## The Cursor way

Cursor provides very basic built-in functionality to review code changes using AI. You can use the following prompt in conjunction with @git (working state) as context to do an automated code review.

## Prompt

"Review my current git working state changes. Check for:

- Potential bugs and logic errors
- Security vulnerabilities
- Performance issues
- Code style and consistency
- Test coverage gaps
- Documentation needs
- Best practices violations
- Edge cases that may not be handled
- Possible refactoring opportunities

use @diff or @git to check the files which have changed. Only point out the issues, do not act on it.

## Some better established services which yield better results, especially in terms of cyber security and team collaboration:

If you dont use any of these yet, its basically a must buy. They have been expensive as some of these like sonar already had business before Gen AI emerged, but e.g. coderabbit has a good value to price ratio.

- https://www.coderabbit.ai/
- https://presubmit.ai/
- https://www.reviewable.io/
- https://www.sonarsource.com/products/sonarcloud/
- https://www.greptile.com/

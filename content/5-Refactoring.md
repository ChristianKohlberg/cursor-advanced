# Refactoring with AI

When doing refactoring with AI it often becomes prominent that we work with statistical models which value the input much higher than the true underlying meaning. This means that instead of proper refactoring it has a strong tendency to copycat existing code which we actually like to refactor and reuse it or to overcompensate and creating 234 classes for a two function-needed problem.

Something which is working but not as easy to follow through results in a .md markdown file to write down our refactoring wishes and then start a new conversation with the changes and the @files/folders involved, which works much better.

## Proposed Solution

1. Extract Core Business Logic

   ```
   "Analyze the code in @files and extract the core business logic into a clear description. Focus on:
   - Main functionality and purpose
   - Key algorithms and processes
   - Data flow and transformations
   - Business rules and constraints
   - Critical dependencies
   Explain the logic in plain language without implementation details."
   ```

2. Identify Refactoring Opportunities

   ```
   "Based on the core business logic identified, what are potential refactoring opportunities? Consider:
   - Code duplication
   - Complex conditionals
   - Long methods
   - Tight coupling
   - Poor separation of concerns
   - Unclear abstractions
   Prioritize opportunities that would improve maintainability and readability."
   ```

3. Evaluate and Filter Suggestions

   ```
   "From the refactoring opportunities identified, which ones provide the most value while maintaining simplicity? Consider:
   - Impact on maintainability
   - Implementation complexity
   - Risk of introducing bugs
   - Testing effort required
   - Future extensibility
   Eliminate suggestions that add unnecessary complexity."
   ```

4. Generate Refactoring Proposals

   ```
   "Create three different refactoring approaches for the selected opportunities. For each approach:
   - Describe the high-level design
   - List key changes and benefits
   - Note potential drawbacks
   - Include example code structure
   Output the proposals in a markdown file named 'refactoring-proposals.md'"
   ```

5. Start New Conversation
   ```
   "Review the refactoring proposals in refactoring-proposals.md along with the original code from @files. Help me evaluate and implement the chosen refactoring approach. Consider:
   - Implementation steps
   - Test coverage needs
   - Migration strategy
   - Validation approach"
   ```

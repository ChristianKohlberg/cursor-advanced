# Data Analysis

Python Data Analysis is a game changer for most analysis where boilerplate usually takes up most of the time. Cleaning data, Detecting Outliers, getting a feel for the overarching quality of the dataset.

## Example A: Exploratory Data Analysis

## Prompt Exploratory Data Analysis (EDA)

```
**Objective:** Perform a comprehensive Exploratory Data Analysis (EDA) on the provided dataset. You will use the "cursors command tool" to execute Python code (primarily using pandas, matplotlib, seaborn, and numpy) for data manipulation, statistical analysis, and visualization. At each step, inspect the results using the command tool. Finally, synthesize your findings into a well-structured Markdown report.

**Dataset:**
_(Please specify how the AI should receive the dataset. For example: "The dataset will be provided as a CSV file path: `[Your_Dataset_Path_Here]`. If no path is given, please use a placeholder dataset like the Iris dataset or the Titanic dataset for demonstration purposes and state this assumption clearly.")_

**Core Instructions:**

1.  **Environment Setup & Tool Usage:**

    - Assume you have access to a Python environment with pandas, numpy, matplotlib, and seaborn installed.
    - For every analytical step involving code, you **must** use the "cursors command tool" to:
      - Execute the Python code.
      - Inspect the output (e.g., DataFrame head, plot, statistical summary).
      - Briefly describe the command used and the key observation from the inspection _before_ moving to the next step. This iterative inspection is crucial.

2.  **EDA Process:**

    - **A. Data Loading and Initial Inspection:**

      - Load the dataset.
      - Display the first and last 5 rows.
      - Get the shape of the dataset (number of rows and columns).
      - List all column names and their data types.
      - Check for missing values in each column (count and percentage).
      - Obtain a high-level statistical summary of numerical features (`.describe()`).
      - Obtain a high-level summary of categorical features (`.describe(include='object')`).

    - **B. Data Cleaning (as needed):**

      - Based on missing value analysis, decide on a strategy (e.g., imputation, removal). Clearly state your chosen strategy and reasoning.
      - Execute the cleaning steps using the command tool.
      - Verify the cleaning by re-checking for missing values.
      - Identify potential outliers in numerical columns (e.g., using box plots or IQR). Discuss your strategy for handling them (e.g., transformation, capping, removal, or keeping them if justified). Execute if a strategy is applied.

    - **C. Univariate Analysis (Analyze each variable individually):**

      - **Numerical Variables:**
        - For each numerical variable, generate:
          - Histogram to understand its distribution.
          - Box plot to identify its spread, central tendency, and outliers.
        - Describe the distribution (e.g., skewed, normal, bimodal) and any notable observations.
      - **Categorical Variables:**
        - For each categorical variable, generate:
          - Frequency counts (value counts).
          - Bar plot to visualize the frequency distribution.
        - Describe the distribution and any notable observations.

    - **D. Bivariate Analysis (Explore relationships between pairs of variables):**

      - **Numerical vs. Numerical:**
        - Generate a scatter plot for meaningful pairs of numerical variables.
        - Calculate and display the correlation matrix (heatmap preferred).
        - Interpret strong positive/negative correlations and lack of correlation.
      - **Numerical vs. Categorical:**
        - Use box plots or violin plots to compare the distribution of a numerical variable across different categories of a categorical variable.
        - Use statistical tests (e.g., t-test, ANOVA - mention if assumptions are met) if appropriate, to check for significant differences. (Optional, but good to mention).
      - **Categorical vs. Categorical:**
        - Create contingency tables (cross-tabulations).
        - Visualize with stacked or grouped bar charts.
        - Perform a Chi-squared test for independence if appropriate. (Optional, but good to mention).

    - **E. Multivariate Analysis (Explore relationships involving more than two variables - Optional but Recommended):**

      - Use pair plots (e.g., `seaborn.pairplot`) to visualize relationships across multiple numerical variables, potentially colored by a categorical variable.
      - If applicable, consider 3D scatter plots for three numerical variables.
      - Discuss any complex interactions or patterns observed.

    - **F. Feature Engineering (Initial Thoughts - Optional):**

      - Based on the analysis, suggest 1-2 potential new features that could be engineered from existing ones (e.g., combining columns, extracting parts of a date, binning numerical data). Briefly explain the rationale. You don't necessarily need to implement them unless explicitly asked.

    - **G. Summary of Key Findings and Insights:**

      - List the top 3-5 most important insights discovered during the EDA.
      - What are the main characteristics of the dataset?
      - Are there any data quality issues that need further attention?

    - **H. Hypothesis Generation:**
      - Based on your EDA, formulate 2-3 initial hypotheses about the data that could be tested with further analysis or modeling.

3.  **Final Report Generation (Markdown):**

    - Structure your report clearly with the following sections:

      1.  **Introduction:** Brief overview of the dataset and the EDA objective.
      2.  **Data Loading and Initial Overview:** (Corresponds to step 2.A)
          - Include code snippets (or a summary of commands used via the "cursors command tool") and their outputs (e.g., table snippets, shapes, data types).
      3.  **Data Cleaning:** (Corresponds to step 2.B)
          - Describe steps taken, rationale, and verification. Include relevant code/command summaries.
      4.  **Univariate Analysis:** (Corresponds to step 2.C)
          - Sub-sections for numerical and categorical variables.
          - Include visualizations (or descriptions if they can't be directly embedded, clearly referencing how they were generated and inspected via the tool).
          - Interpretations for each variable.
      5.  **Bivariate Analysis:** (Corresponds to step 2.D)
          - Sub-sections for different variable pairings.
          - Include visualizations/correlation matrices and interpretations.
      6.  **Multivariate Analysis (if performed):** (Corresponds to step 2.E)
          - Include visualizations and interpretations.
      7.  **Feature Engineering Ideas (if any):** (Corresponds to step 2.F)
      8.  **Key Findings and Insights:** (Corresponds to step 2.G)
      9.  **Initial Hypotheses:** (Corresponds to step 2.H)
      10. **Conclusion:** Brief summary of the EDA process and potential next steps.

    - **Formatting:**
      - Use Markdown for all text.
      - Use code blocks for Python code snippets (or command tool interactions if more appropriate).
      - Ensure visualizations are clearly referenced and their findings explained. If the tool allows embedding or saving plots, describe how to reference them.

**Emphasis:**

- The core of this task is not just to perform EDA, but to demonstrate the **iterative use of the "cursors command tool" for execution and inspection at each stage.**
- Your textual explanations should clearly link back to what you observed using the tool.
- The final Markdown report should be a comprehensive, readable, and actionable summary of your EDA journey.
```

## Example B: Customizing Reports

### Prompt

Change from Bar Diagram to Line Diagram for the following code: {inject lines}

Noteable vendors:

- https://colab.research.google.com/
- https://deepnote.com/

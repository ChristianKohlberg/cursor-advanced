# Debugging still not AI first

## Intro

I still wait that the tooling allows to hook into a proper debugger tool
and could then step through the code itself, until then we have four options, which can be combined as needed:

## Approaches

### Add logging

Ask the model to add deliberate logging, but with a certain ID so it can be related to the issue at hand.

### Add to Chat Feature

In the Terminal, mark the logs you want to send to the conversation with Command+L on mac.

### Ask the Agent to run the Command itself and read the output.

Much smoother, but sometimes very noisy with high token churn which can become costly.

### Ask the Agent to start with a function call in a @file and then `grep` the codebase until it reached a certain point.

Usually the best way to resolve issues as we also build up a strong context window to act against and implement a fix.

### Add proper MCP tooling for better debugging logs

**TODO:** Solutions do exist, but not reliable or questionable in trust.

                                          *MCP SERVER*

*What is Mcp Server*?

-> Mcp (Model Context Protocol) is an open source standard for connecting AI Application to external systems

-> Using Mcp , AI Application like Claude , Chatgpt can connect to data sources (eg. Local files , Database), tools (eg. search engines , calculators) and workflows (eg. specialized prompts) - enabling them to access key information and perform tasks

-> The model context protocol lets you build servers that expose (accessable) data and functionality to LLM (ai engine like open AI , gemini) applications in a secure , standardized way.

*Mcp servers can*?

. Expose data through resources (like if AI wants any additional data so we can expose them from mcp server)

. Provide functionality through tools (to perform any specific task)

. Define interaction patterns through prompts (some prompts which we reuse as templates)

*Three types of Mcp servers*

1. Stdio - standard input output
2. Streamable http
3. SSE - server side event


*How we used Mcp Server*

-> STDIO Server :- We use stdio server when our local server was running , means both express and mcp server was running on same machine

-> Streambale http or SSE :- But these both server running on different machines and Communicate through network

*Now we create a stdio mcp server*

- npm init -y
- change common js to module in package.json
- go to mcp docs then sdks then typescript then click on installation and run command
- and also install zod

*Why we use zod* ?

-> When we create a variable then zod defines the type of a variable and Validate that define variable type so that's why we used zod.



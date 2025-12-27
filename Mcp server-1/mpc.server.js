import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import express from 'express';
import { z } from 'zod';

// Create an MCP server
const server = new McpServer({
    name: 'demo-server', // server name
    version: '1.0.0' // server version 
});

/* easy small function

  async function addTwoNumber({a,b}){
      return a+b;
  }

*/

// Now we create a tool in our mcp server which used by AI in future (add to numbers)


// Add an addition tool Here we create a tool
server.registerTool(
    'add', // tool name
    {
        title: 'Addition Tool', 
        description: 'Add two numbers',
        inputSchema: { a: z.number(), b: z.number() }
    },
    async ({ a, b }) => ({
        content: [ { type: "text" , text: String(a + b) } ]
    })
    
);

// Set up Express and HTTP transport
const app = express();
app.use(express.json());

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);
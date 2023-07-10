# First manual TS server

My first manually typescript setup express server  

Run

```bash
tsc # First compile tsc file
npm start # Run server
```

try: GET  
<http://localhost:5000/api/users/currentuser>

with HTTP Header:  
token=something

---

How to initialize this project from scratch?  

```bash
npm i -g typescript
mkdir ts-server && cd /ts-server
npm init
tsc init
npm i express dotenv
npm i --save-dev @types/dotenv" @types/express @types/node"
```

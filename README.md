# First manual TS server

My first manually setup typescript express server.  

Run

```bash
tsc # First compile tsc file
npm start # Run server
```

GET:  
http://localhost:5000/api/users/currentuser

HTTP Header:  
token=something

---

Project from Scratch  

```bash
mkdir ts-server && cd ./ts-server
npm init
npm i express dotenv
npm i --save-dev typescript @types/dotenv" @types/express @types/node"
npx tsc init
```

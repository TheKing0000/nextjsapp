client side => clg látszik a consoleon és a terminal-ban is a pre rendering miatt

server side => csak a terminalon látszik

ha egy server side componenst egy client-be rakunk bele akkor a server side log is látszani fog a terminálon!!

SSG : Static Site Generation => runs only at build time

ISG : Incremental Static Generation => build and runtime

SSR : Server Side Rendering => dynamic rendering at each request

--AUTH
middleware.ts => Configure protected and public routes

--CSS
---ACTIVE CLASS BASED ON URL + ROUTE VARIABLE
const isActive =
(pathName.includes(currentLink.route) &&
currentLink.route.length > 1) ||
pathName === currentLink.route;

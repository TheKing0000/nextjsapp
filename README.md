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

\_\_MongoDb
Schema => Modell => Document
use create and save methods because they use validation (for example findBy..andUpdate doesnt use validation !)

virtuals =>key value pár létrehozása anélkül , hogy elmenntené a db-ben pl firstName + lastName = fullName

methods=> do something...

MIDDLEWARE do something before / after => save remove...

userSchema.pre('save', function(next){
this.updatedAt = Date.now()
next()
})

subdocuments are not saved individually, they are saved whenever their top-level parent document is saved

timesamp => Mongoose schemas support a timestamps option. If you set timestamps: true, Mongoose will add two properties of type Date to your schema:

1., createdAt: a date representing when this document was created
2., updatedAt: a date representing when this document was last updated

const userSchema = new Schema({ name: String }, { timestamps: true });

--Transactions in Mongoose

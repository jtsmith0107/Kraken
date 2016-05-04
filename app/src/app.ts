import * as express from 'express';
import * as routes from "./routes/index"

let app = express()


app.get("/", routes.index);

app.listen(3000, function(){
    console.log("Demo Express server listening on port %d in %s mode", 3000, app.settings.env);
});

export let App = app;
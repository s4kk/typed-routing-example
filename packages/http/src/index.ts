import { App } from "../../routing/src";

const app = new App();
app.get('info/{id}/{name}', (req, res) => {
    req.params.id;
    req.params.name;
})
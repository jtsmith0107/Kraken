import express = require("express")

export function index(req: express.Request, res: express.Response) {
    console.log("Super Nice!")
    return "You da best in da world"
};
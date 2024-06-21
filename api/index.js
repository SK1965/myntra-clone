import express from "express";
import Get from "../api/fetch/Get.js";
import Listen from "../api/fetch/Listen.js";

const app = express()
const port = 3000

Get('/api/data',app)
Listen(port,app)
process.env.NODE_ENV = "test";
const app = require("../app");
const request = require("supertest")(app);
const { expect } = require("chai");
const mongoose = require("mongoose");
const testData = require("../seed/testData");
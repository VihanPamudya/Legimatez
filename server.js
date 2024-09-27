require('dotenv').config();
const {checkDatabaseConnection } = require("./config/dbConfig");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const artifactRoutes = require("./routes/artifactRoutes");
const caseCostingRoutes = require("./routes/caseCostingRoutes");
const caseInfoRoutes = require("./routes/caseInfoRoutes");
const caseKeyDatesRoutes = require("./routes/caseKeyDatesRoutes");
const clientInfoRoutes = require("./routes/clientInfoRoutes");
const costFactorRoutes = require("./routes/costFactorRoutes");
const countryRoutes = require("./routes/countryRoutes");
const currencyRoutes = require("./routes/currencyRoutes");
const documentsRoutes = require("./routes/documentsRoutes");
const documentVersionsRoutes = require("./routes/documentVersionsRoutes");

app.use("/api/artifacts", artifactRoutes);
app.use("/api/costings", caseCostingRoutes);
app.use("/api/case-info", caseInfoRoutes);
app.use("/api/key-dates", caseKeyDatesRoutes);
app.use("/api/client-info", clientInfoRoutes);
app.use("/api/cost-factors", costFactorRoutes);
app.use("/api/countries", countryRoutes);
app.use("/api/currencies", currencyRoutes);
app.use("/api/documents", documentsRoutes);
app.use("/api/document-versions", documentVersionsRoutes);

checkDatabaseConnection();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

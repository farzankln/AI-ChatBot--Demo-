// const PORT = 8000;
// const express = require("express");
// const cors = require("cors");
// const axios = require("axios");
// require("dotenv").config();

// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());

// // CORS configuration
// app.use(
//   cors({
//     origin: "https://your-allowed-domain.com", // replace with your allowed domain
//   })
// );

// app.get("/", (req, res) => {
//   res.json("hi");
// });

// app.post("/generate-answer", async (req, res) => {
//   const { question } = req.body;

//   try {
//     const response = await axios({
//       url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.REACT_APP_API_KEY}`,
//       method: "post",
//       data: {
//         contents: [{ parts: [{ text: question }] }],
//       },
//     });
//     res.json({ answer: response.data.candidates[0].content.parts[0].text });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error generating response" });
//   }
// });

// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

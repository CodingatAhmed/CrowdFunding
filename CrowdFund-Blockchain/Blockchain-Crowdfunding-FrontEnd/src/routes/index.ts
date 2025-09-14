import express from 'express';
import cors from 'cors';
import axios from 'axios';


const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;
app.get("/routes/index", async (req,res) => {
  res.json({message : "hello this is index server"})
})

app.listen(PORT, ()=> {
  console.log(`Server running at http://localhost:${PORT}`)
})
// app.post('/auth/callback', async (req:any, res:any) => {
//   const { code } = req.body;
//   if (!code) {
//     return res.status(400).json({ error: 'Missing authorization code' });
//   }

//   const payload = new URLSearchParams({
//     code,
//     client_id: process.env.VITE_GOOGLE_CLIENT_ID!,
//     client_secret: process.env.VITE_GOOGLE_CLIENT_SECRET!,
//     redirect_uri: process.env.VITE_GOOGLE_REDIRECT_URI!,
//     grant_type: 'authorization_code',
//     code_verifier: req.body.code_verifier,
//   });

//   try {
//     const response = await axios.post('https://oauth2.googleapis.com/token', payload, {
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     });

//     const { id_token, access_token } = response.data;

//     // Optionally decode id_token to get user info (or fetch using access_token)

//     res.json({
//       message: 'Authenticated!',
//       id_token,
//       access_token,
//     });
//   } catch (error: any) {
//     console.error(error.response?.data || error.message);
//     res.status(500).json({ error: 'Token exchange failed' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

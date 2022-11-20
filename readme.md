*NOTES: Deploy masih mengalami crash*

---- USER ----
SignUp :POST | localhost:3000/signup | bagian body diisi API Register
SignIn :POST | localhost:3000/signin | bagian body diisi API Login
LogOut :GET | localhost:3000/logout
Melihat Semua User : GET | localhost:3000/getAllUser
Melihat User berdasarkan ID User : GET | localhost:3000/63778bb87133d49b9761556e (berasal dari id user)
UpdateUserByID : PATCH | localhost:3000/6377128ae88f3ac2b833d79e (berasal dari id user) 
DeleteUserByID : DELETE | localhost:3000/6377128ae88f3ac2b833d79e (berasal dari id user) 
 
---- ADMIN ----
Upload Artikel : POST | localhost:3000/admin | bagian body diisi API Artikel
Lihat Semua Artikel : GET | localhost:3000/admin
Update Artikel : PUT | localhost:3000/admin/6379b87a0734529b7a7705a6 (berasal dari id artikel)
Delete Artikel : DELETE | localhost:3000/admin/6379b87a0734529b7a7705a6 (berasal dari id artikel)

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxODRmODJiNmEyMmM5MDI3ZTRhMzI0ZCIsInVzZXJuYW1lIjoicGhhbnBoYW03IiwiZW1haWwiOiJwaGFucGhhbTdAZ21haWwuY29tIiwiaWF0IjoxNjM2NDM2NDMwLCJleHAiOjE2NzI0MzY0MzB9.XXvmi41PUiYwOsAxRAlukCaQ6Qt046QGC0ye3Wt_SLc'

export default {
  serverUrl: 'http://localhost:8000',
  headers: { Authorization: `Bearer ${token}` }
}
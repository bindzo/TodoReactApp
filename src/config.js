const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxODRmODJiNmEyMmM5MDI3ZTRhMzI0ZCIsInVzZXJuYW1lIjoicGhhbnBoYW03IiwiZW1haWwiOiJwaGFucGhhbTdAZ21haWwuY29tIiwiaWF0IjoxNjM2Mzg5NzY2LCJleHAiOjE2MzYzOTMzNjZ9.6T5MvDbYMtEB3Kj9bHv4qPRiYJe7r1GfGFA-SXWLfL0'

export default {
  serverUrl: 'http://localhost:8000',
  headers: { Authorization: `Bearer ${token}` }
}
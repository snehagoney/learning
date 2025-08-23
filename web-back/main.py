from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from models import Course

app = FastAPI()

# Enable CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust for your Next.js URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage for courses
courses_data = [
    {"title": "Python Programming", "description": "Learn Python from basics to advanced concepts.", "duration": "8 weeks", "level": "Beginner", "image": "wrkng-person.jpg"},
    {"title": "Web Development with React", "description": "Build modern web applications using React.js.", "duration": "10 weeks", "level": "Intermediate", "image": "wrkng-person.jpg"},
    {"title": "Data Science Fundamentals", "description": "Master data analysis and visualization techniques.", "duration": "12 weeks", "level": "Intermediate", "image": "wrkng-person.jpg"},
    {"title": "JavaScript Essentials", "description": "Dive into JavaScript for dynamic web development.", "duration": "6 weeks", "level": "Beginner", "image": "wrkng-person.jpg"},
    {"title": "Machine Learning Basics", "description": "Introduction to machine learning algorithms.", "duration": "10 weeks", "level": "Advanced", "image": "wrkng-person.jpg"},
    {"title": "Full Stack Development", "description": "Become a full stack developer with MERN stack.", "duration": "14 weeks", "level": "Advanced", "image": "wrkng-person.jpg"},
]

@app.get("/")
async def read_root():
    return {"message": "Winnex Vexa Technology Course Backend"}

@app.get("/courses", response_model=List[Course])
async def get_courses():
    return courses_data
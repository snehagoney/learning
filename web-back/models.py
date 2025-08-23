from pydantic import BaseModel

class Course(BaseModel):
    title: str
    description: str
    duration: str
    level: str
    image: str
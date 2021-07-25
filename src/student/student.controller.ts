import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common"

@Controller("students")
export class StudentController {
  @Get()
  getStudents() {
    return "All Students"
  }

  @Get("/:studentId")
  getStudentById(
    @Param("studentId") studentId: string
  ) {

    return `Get Student with Id of ${studentId}`
  }

  @Post()
  createStudent(
    @Body() body
  ) {
    return `Created student with the following dat ${JSON.stringify(body)}`
  }

  @Put("/:studentId")
  updateStudentById(
    @Param("studentId") studentId: string,
    @Body() body
  ) {
    return `Update student by Id of ${studentId} and data of ${JSON.stringify(body)} `
  }
}


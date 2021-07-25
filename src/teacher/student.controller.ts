import { Controller, Get, Put, Param } from "@nestjs/common"

@Controller("teachers/:teacherId/students")
export class StudentTeacherController {

  @Get()
  getStudentsByTeacher(
    @Param("teacherId") teacherId: string
  ) {
    return `Get Students By Teacher with id of ${teacherId}`
  }

  @Put("/:studentId")
  updateStudentTeacher() {
    return "Update Student By Teacher"
  }
}


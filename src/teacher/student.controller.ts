import { Controller, Get, Put, Param } from "@nestjs/common"
import { FindStudentResponseDto, StudentResponseDto } from "../student/dto/student.dto"
@Controller("teachers/:teacherId/students")
export class StudentTeacherController {

  @Get()
  getStudents(
    @Param("teacherId") teacherId: string
  ): FindStudentResponseDto[] {
    return `Get Students By Teacher with id of ${teacherId}`
  }

  @Put("/:studentId")
  updateStudentTeacher(
    @Param("teacherId") teacherId: string,
    @Param("studentId") studentId: string
  ): StudentResponseDto {
    return `Update Student with id of ${studentId} To teacher with Id of ${teacherId}`
  }
}


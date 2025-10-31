import {student_db, course_db} from "../db/DB.js";
import StudentDTO from "../dto/StudentDTO.js";

// ================ Add Student ===================
const add_student = (f_name, l_name, address) => {
    let student_obj = new StudentDTO(f_name, l_name, address);
    student_db.push(student_obj);
}

// ============== Delete Student ==================
const delete_student = (index) => {
    student_db.splice(index, 1);
}
// =============== Get Students ===================
const get_students = () => {
    return student_db;
}

// =============== Get Students ===================
const get_student_detail = (index) => {
    return student_db[index];
}

// ============== Update Student ==================


export {add_student, delete_student, get_students, get_student_detail};
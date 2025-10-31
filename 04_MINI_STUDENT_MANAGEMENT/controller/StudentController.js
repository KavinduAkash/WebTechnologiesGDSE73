import {add_student, delete_student, get_students, get_student_detail} from "../model/StudentModel.js";

// ==================== Load Student Tbl =======================
const loads_student_tbl = () => {
    $("#student_tbl_body").empty();

    let student_list = get_students();

    student_list.map((obj, index) => {
        let tbl_row = `<tr data-index="${index}"> <td>${obj.f_name}</td> <td>${obj.l_name}</td> <td>${obj.address}</td> <tr>`;
        $("#student_tbl_body").append(tbl_row);
    });
}

// ==================== Add Student =======================
$("#student_save_btn").on("click", function () {
    let f_name = $("#f_name").val();
    let l_name = $("#l_name").val();
    let address = $("#address").val();

    add_student(f_name, l_name, address);

    loads_student_tbl();
});

// ==================== Select Student =======================

$("#student_tbl_body").on('click', 'tr', function () {
    console.log($(this).index())
    // tbl_row = $(this).index();
    tbl_row = $(this).data('index');

    let student_obj = get_student_detail(tbl_row);

    $("#f_name").val(student_obj.f_name);
    $("#l_name").val(student_obj.l_name);
    $("#address").val(student_obj.address);
});

// ==================== Remove Student =======================

$("#student_delete_btn").on('click', () => {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {

            delete_student(tbl_row);
            loads_student_tbl();
            $("#student_reset_btn").click();

            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
});

let tbl_row;

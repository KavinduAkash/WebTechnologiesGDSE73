// ==================== Student DTO =======================
class StudentDTO {
    constructor(f_name, l_name, address) {
        this._f_name=f_name;
        this._l_name=l_name;
        this._address=address;
    }

    get f_name() {
        return this._f_name;
    }

    get l_name() {
        return this._l_name;
    }

    get address() {
        return this._address;
    }

    set f_name(f_name) {
        this._f_name=f_name;
    }

    set l_name(l_name) {
        this._l_name=l_name;
    }

    set address(address) {
        this._address=address;
    }

}

export default StudentDTO;
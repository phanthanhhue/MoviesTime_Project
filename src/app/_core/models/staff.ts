export class Staff {
    public StaffID: number;
    public UserName: string;
    public FullName: string;
    public Age: number;
    public PhoneNumber: number;
    public Email: string;
    public MaLoaiNguoiDung: string;
    constructor(
        stafID: number,
        userName: string,
        fullName: string,
        age: number,
        phoneNumber: number,
        email: string,
        is_admin
    ) {
        this.StaffID = stafID;
        this.UserName = userName;
        this.FullName = fullName;
        this.Age = age;
        this.PhoneNumber = phoneNumber;
        this.Email = email;
        this.MaLoaiNguoiDung = 'NguoiDung';
    }
}
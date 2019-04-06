export class User {
    public UserName: string;
    public FullName: string;
    public Password: string;
    public PhoneNumber: string;
    public Email: string;
    public VerifyPassword: string;
    public MaNhom: string;
    public MaLoaiNguoiDung: string;
    constructor(userName: string, fullName: string, password: string, phoneNumber: string, email: string) {
        this.UserName =userName;
        this.FullName = fullName;
        this.Email = email;
        this.Password = password;
        this.PhoneNumber = phoneNumber;
        this.MaNhom = 'GP05';
        this.MaLoaiNguoiDung = 'KhachHang';
    }
}
export class User {
    public UserName: string;
    public Password: string;
    public PhoneNumber: string;
    public Email: string;
    public VerifyPassword: string;
    public MaNhom: string;
    public MaLoaiNguoiDung: string;
    constructor(username: string, password: string, phoneNumber: string, email: string) {
        this.UserName =username;
        this.Password = password;
        this.Email = email;
        this.PhoneNumber = phoneNumber;
        this.MaNhom = 'GP05';
        this.MaLoaiNguoiDung = 'KhachHang';
    }
}
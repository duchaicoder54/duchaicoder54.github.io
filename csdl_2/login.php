<?php
$conn = mysqli_connect ('localhost', 'root', '', 'csdl_2') or die ('Không thể kết nối tới database');
mysqli_set_charset($conn, 'UTF8');

if( isset($_POST['dangnhap'])){
    
$username = $_POST['username'];
$password = $_POST['password'];
if (!$username || !$password) {
    echo "Nhập đầy đủ thông tin <a href='javascript: history.go(-1)'>Trở lại</a>";
    exit;
    }
    
$sql =" SELECT * FROM member WHERE username = '$username' and password ='$password'";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result)== 1){
    echo"  bạn dang nhap thành công <a href='#'>tới trang chủ</a>";
}else{
    
        echo "Bạn nhập sai thông tin hoặc mật khẩu<a href='javascript: history.go(-1)'>Trở lại</a>";
        exit;
        
}
}
?>

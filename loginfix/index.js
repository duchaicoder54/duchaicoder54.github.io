const user = document.getElementById('user');
const password = document.getElementById('password')
user.addEventListener('textInput', use_veryfy)
password.addEventListener('textInput', password_veryfy)

let firstpw = "123456789";
// <----------------- điều kiện đăng nhập------------------>
function validate() {


    if (user.value.length < 1 && password.value.length < 1) {


        document.getElementById('user').style.border = '2px solid red'
        document.getElementById('erroruser').innerHTML = 'Tài khoản không được để trống';
        document.getElementById('erroruser').style.border = 'red'
        document.getElementById('password').style.border = '2px solid red'
        document.getElementById('errorpass').innerHTML = 'Mật khẩu không được để trống';
        document.getElementById('errorpass').style.border = 'red'
        password.focus()
        user.focus()
        return false;
    }
    else {
        if (user.value.length < 1 && password.value.length > 1) {
            document.getElementById('user').style.border = '2px solid red'
            document.getElementById('erroruser').innerHTML = 'Tài khoản không được để trống';
            document.getElementById('erroruser').style.border = 'red';
            return false;
        }
        else {
            document.getElementById('erroruser').innerHTML = '';
        }

        if (user.value.length > 0 && password.value.length < 1) {
            document.getElementById('errorpass').innerHTML = 'Mật khẩu không được để trống';
            document.getElementById('password').style.border = '2px solid red'
            document.getElementById('errorpass').style.border = 'red'

            return false;
        }
        else {
            document.getElementById('erroruser').innerHTML = '';
        }

    }

    if (user.value !== "duchai" && password.value.length > 1) {
        document.getElementById('erroruser').innerHTML = 'tai khoản của bạn không đúng';
        document.getElementById('user').style.border = '2px solid red'
        document.getElementById('erroruser').style.border = 'red'

        return false;
    }
    else {
        document.getElementById('erroruser').innerHTML = '';
    }
    if (password.value != firstpw && user.value.length > 1) {
        document.getElementById('errorpass').innerHTML = 'Mật khẩu của bạn không đúng';
        document.getElementById('password').style.border = '2px solid red'
        document.getElementById('errorpass').style.border = 'red'

        return false;
    }
    else {
        document.getElementById('erroruser').innerHTML = '';
    }
    if (true) {
        document.getElementById('form-login-button').innerHTML = 'Loading....'
        setTimeout(function () {
            document.querySelector('h1').innerHTML = "bạn đã đăng nhập thành công";
            document.querySelector('h1').classList.add('active');
            // document.querySelector('.login').classList.add('active');
            document.querySelector('.login').style.display = 'none'

            refreshform()
        }, 2000)


    }
}
// <------------ điều kiệm sét ô input --------->
function use_veryfy() {
    console.log(user.value)
    if (user.value.length >= 0) {

        document.getElementById('user').style.border = 'none'
        document.getElementById('erroruser').innerHTML = '';
        document.getElementById('erroruser').style.border = ''
        return true
    }

}
function password_veryfy() {
    console.log(password.value)
    if (password.value.length >= 0) {
        document.getElementById('password').style.border = 'none'
        document.getElementById('errorpass').innerHTML = '';
        document.getElementById('errorpass').style.border = ''
        return true
    }
}

// <------------- thay đổi form-------->
const changepw = document.getElementById('forgot-password');
changepw.onclick = () => {
    var loginpage = document.querySelector('.formlogin')
    var changepage = document.querySelector('.formchangepassword')
    loginpage.style.display = 'none'
    changepage.style.display = 'block'
    document.getElementById('back').style.display = 'block'
    document.getElementById('forgot').style.display = 'none'

}
// <<<BACK, dổi trang từ đăng nhập sang thay đoi mk--->>></BACK>>
const BACK = document.getElementById('back');
BACK.onclick = () => {
    changepage()
    document.getElementById('forgot').style.display = 'block'
    document.getElementById('back').style.display = 'none'

}
// function changepage() {
//     document.querySelector('.login').classList.remove('active');
//     document.getElementById('back').style.display = 'none';
//     document.getElementById('forgot').style.display = 'block'
// }



const oldpw = document.getElementById('oldpassword');
const newpw = document.getElementById('newpassword')
oldpw.addEventListener('textInput', oldpassword_veryfy)
newpw.addEventListener('textInput', newpassword_veryfy)
function oldpassword_veryfy() {


    if (oldpw.value.length > 0) {

        document.getElementById('oldpassword').style.border = 'none'
        document.getElementById('erroroldpass').innerHTML = '';
        document.getElementById('erroruser').style.border = ''
        return true
    }

}
function newpassword_veryfy() {
    console.log(password.value)
    if (newpw.value.length >= 0) {
        document.getElementById('newpassword').style.border = 'none'
        document.getElementById('errornewpass').innerHTML = '';
        document.getElementById('errorpass').style.border = ''
        return true
    }

}
function changepage() {
    document.querySelector('h1').classList.remove('active')

    document.querySelector('.login').style.display = 'block'
    document.querySelector('.formchangepassword').style.display = 'none'
    document.querySelector('.formlogin').style.display = 'block'
    document.getElementById('back').style.display = 'none';
    document.getElementById('forgot').style.display = 'block'
    refreshform()
}
function refreshform() {
    const user = document.getElementById('user').value = "";
    const password = document.getElementById('password').value = "";
    const newpw = document.getElementById('newpassword').value = ""
    const oldpw = document.getElementById('oldpassword').value = "";
    document.getElementById('form-sav-button').innerHTML = 'Save'
}

validateformchangerpassw = () => {
    if (oldpw.value.length < 1 && newpw.value.length < 1) {


        document.getElementById('oldpassword').style.border = '2px solid red'
        document.getElementById('erroroldpass').innerHTML = 'Mật khẩu cũ không được để trống';
        document.getElementById('erroruser').style.border = 'red'
        document.getElementById('newpassword').style.border = '2px solid red'
        document.getElementById('errornewpass').innerHTML = 'Mật khẩu mới không được để trống';
        document.getElementById('errorpass').style.border = 'red'
        password.focus()
        user.focus()
        return false;
    }
    else {

        if (oldpw.value.length < 1 && newpw.length > 1) {
            document.getElementById('oldpassword').style.border = '2px solid red'
            document.getElementById('erroroldpass').innerHTML = 'Mật khẩu cũ không được để trống';
            document.getElementById('erroroldpass').style.border = 'red';
            return false;
        }
        else {
            document.getElementById('erroroldpass').innerHTML = '';
        }

        if (oldpw.value.length > 0 && newpw.value.length < 1) {
            document.getElementById('errornewpass').innerHTML = 'Mật khẩu mới được để trống';
            document.getElementById('newpassword').style.border = '2px solid red'
            document.getElementById('errornewpass').style.border = 'red'

            return false;
        }
        else {
            document.getElementById('errornewpass').innerHTML = '';
        }

    }

    if (oldpw.value !== firstpw && newpw.value.length > 1) {
        document.getElementById('erroroldpass').innerHTML = 'Mật khẩu cũ của bạn không đúng';
        document.getElementById('oldpassword').style.border = '2px solid red'
        document.getElementById('erroroldpass').style.border = 'red'

        return false;
    }
    else {
        document.getElementById('erroroldpass').innerHTML = '';
    }
    if (oldpw.value == firstpw && newpw.value.length < 6) {
        document.getElementById('errornewpass').innerHTML = 'Mật khẩu mới của bạn cần nhiều hơn 6 kí tự';
        document.getElementById('newpassword').style.border = '2px solid red'
        document.getElementById('errornewpass').style.border = 'red'

        return false;
    }
    else {
        document.getElementById('errornewpass').innerHTML = '';
    }
    if (oldpw.value == newpw.value) {
        document.getElementById('errornewpass').innerHTML = 'Mật khẩu mới trùng mật khẩu cũ';
        document.getElementById('newpassword').style.border = '2px solid red'
        document.getElementById('errornewpass').style.border = 'red'

        return false;
    }
    else {
        document.getElementById('errornewpass').innerHTML = '';
    }
    if (true) {

        firstpw = newpw.value;
        document.getElementById('form-sav-button').innerHTML = 'Loading.......'
        setTimeout(function () {
            document.querySelector('.login').style.display = 'none'
            document.querySelector('h1').innerHTML = "Bạn đã thay đổi mật khẩu thành công";
            document.querySelector('h1').classList.add('active')
            setTimeout(function () {
                refreshform()
                changepage()


            }, 2000)
        }, 3000)





    }

}
document.addEventListener('DOMContentLoaded', function () {
    var CORRECT_USER = 'phamngoc04';
    var CORRECT_PASS = '123';

    var inputUsername = document.getElementById('username');
    var inputPassword = document.getElementById('password');
    var formLogin = document.getElementById('loginForm');
    var divErrors = document.getElementById('errors');

    // Đảm bảo các ô nhập liệu trống khi trang được tải
    inputUsername.value = '';
    inputPassword.value = '';

    // Xử lý sự kiện submit form
    formLogin.addEventListener('submit', function (e) {
        e.preventDefault(); // Ngăn hành vi submit mặc định

        var username = inputUsername.value.trim();
        var password = inputPassword.value.trim();

        // Kiểm tra thông tin đăng nhập
        if (username === CORRECT_USER && password === CORRECT_PASS) {
            window.location.href = 'https://www.youtube.com/watch?v=tlULZwdhFG0';
        } else {
            // Thêm dấu nháy bao quanh HTML
            divErrors.innerHTML = `
                <div class="alert alert-danger">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>Error:</strong> Invalid username or password!
                </div>
            `;
        }

        // // Làm mới các ô nhập liệu sau khi xử lý
        // inputUsername.value = '';
        inputPassword.value = '';
    });
});

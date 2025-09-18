
def add(a, b):
    return a + b
def subtract(a, b):
    return a - b
def multiply(a, b):
    return a * b
def divide(a, b):
    if b == 0:
        return "Lỗi! Không thể chia cho số 0."
    return a / b
operations = {
    '1': (add, '+'),
    '2': (subtract, '-'),
    '3': (multiply, '*'),
    '4': (divide, '/')
}

while True:
    print("\n----- MÁY TÍNH CƠ BẢN -----")
    print("1. Cộng (+)")
    print("2. Trừ (-)")
    print("3. Nhân (*)")
    print("4. Chia (/)")
    print("Nhấn phím bất kỳ khác để thoát.")
    choice = input("Nhập lựa chọn của bạn (1/2/3/4): ")
    operation_tuple = operations.get(choice)
    if operation_tuple:
        try:
            num1 = float(input("Nhập số thứ nhất: "))
            num2 = float(input("Nhập số thứ hai: "))
        except ValueError:
            print("Đầu vào không hợp lệ. Vui lòng nhập số.")
            continue
        function_to_run, symbol = operation_tuple
        result = function_to_run(num1, num2)
        if isinstance(result, str): # Xử lý trường hợp trả về chuỗi lỗi
            print(result)
        else:
            print(f"Kết quả: {num1} {symbol} {num2} = {result}")
    else:
        print("Cảm ơn bạn đã sử dụng chương trình!")
        break
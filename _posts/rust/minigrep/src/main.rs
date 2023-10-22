mod file_io;

use std::env;

fn main() {
    // 读取任何传递给 minigrep 的命令行参数并将其收集到一个 vector 中
    let args: Vec<String> = env::args().collect();

    // 程序的名称占据了 vector 的第一个值 args[0]
    let query = &args[1];
    let filename = &args[2];

    file_io::read_file(filename);

    println!("{:?}", args);

}

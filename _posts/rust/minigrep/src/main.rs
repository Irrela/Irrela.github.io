use std::{env, process};
use minigrep::Config;

fn main() {
    // 读取任何传递给 minigrep 的命令行参数并将其收集到一个 vector 中
    let args: Vec<String> = env::args().collect();
    println!("{:?}", args);

    // 使用 unwrap_or_else 可以进行一些自定义的非 panic! 的错误处理。
    // 当 Result 是 Ok 时，这个方法的行为类似于 unwrap：它返回 Ok 内部封装的值。
    // 然而，当其值是 Err 时，该方法会调用一个 闭包（closure），也就是一个我们定义的作为参数传递给 unwrap_or_else 的匿名函数。
    let config = Config::new(&args).unwrap_or_else(|err| {
        println!("Problem parsing arguments: {}", err);
        // process::exit 会立即停止程序并将传递给它的数字作为退出状态码
        process::exit(1);
    });

    if let Err(err) = minigrep::run(config) {
        println!("Application error: {}", err);
        process::exit(1);
    }

}



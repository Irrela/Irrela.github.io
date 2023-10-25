use std::error::Error;
use std::{env, fs};

// Result<(), Box<dyn Error>>表示一个可能返回成功但在错误情况下包含了一个实现 Error trait 的错误信息的函数返回值。
// 这样的类型经常用于函数可能出现各种错误情况，但在成功情况下不需要返回额外数据的情况。
// Box<dyn Error> 表示一个包含错误信息的堆分配（boxed）的 trait 对象。
// Box 是一个智能指针，用于分配在堆上的数据，而 dyn Error 表示任何实现了 Error trait 的类型。
pub fn run(config: Config) -> Result<(), Box<dyn Error>> {

    // ? 会从函数中返回错误值并让调用者来处理它
    let contents = fs::read_to_string(config.filename)?;

    println!("With text:\n{}\n", contents);

    let search_result = if config.case_sensitive {
        // 别加 ;
        search(&config.query, &contents)
    } else {
        search_case_insensitive(&config.query, &contents)
    };

    for line in search_result {
        println!("Found in search: {}", line);
    }

    // Ok(()) 一开始看起来有点奇怪，不过这样使用 () 是惯用的做法，表明调用 run 函数只是为了它的副作用；函数并没有返回什么有意义的值。
    Ok(())

}

pub struct Config {
    pub query: String,
    pub filename: String,
    pub case_sensitive: bool,
}

impl Config {
    pub fn new(args: &[String]) -> Result<Config, &'static str> {
        if args.len() < 3 {
            // panic!("not enough arguments");

            // 类似于基于 panic! 的错误处理，除了不会再得到所有的额外输出了。
            return Result::Err("not enough arguments");
        }


        // 程序的名称占据了 vector 的第一个值 args[0]
        Result::Ok(
            Config {
                query: args[1].clone(),
                filename: args[2].clone(),
                // env::var 返回一个 Result，它在环境变量被设置时返回包含其值的 Ok 成员，并在环境变量未被设置时返回 Err 成员。
                // Result 的 is_err 方法来检查其是否是一个 error
                case_sensitive: env::var("CASE_INSENSITIVE").is_err(),
            }
        )
    }

    // c13用迭代器优化后版本
    // 因为我们拥有 args 的所有权，并且将通过对其进行迭代来改变 args，所以我们可以将 mut 关键字添加到 args 参数的规范中以使其可变。
    pub fn new_with_iterator(mut args: std::env::Args) -> Result<Config, &'static str> {
        // 程序的名称占据了 vector 的第一个值 args[0]
        args.next();

        let query = match args.next() {
            Some(arg) => arg,
            None => return Err("Didn't get a query string"),
        };

        let filename = match args.next() {
            Some(arg) => arg,
            None => return Err("Didn't get a file name"),
        };

        Ok(Config{
            query,
            filename,
            case_sensitive: env::var("CASE_INSENSITIVE").is_err(),
        })
    }
}

// 'a 用于 contents 参数和返回值
// 函数 search 返回的数据将与 search 函数中的参数 contents 的数据存在的一样久
pub fn search<'a>(query: &str, contents: &'a str) -> Vec<&'a str> {
    let mut res = vec![];

    for line in contents.lines() {
        if line.contains(query) {
            res.push(line);
        }
    }

    res
}

pub fn search_with_filter<'a>(query: &str, contents: &'a str) -> Vec<&'a str> {
    contents.lines()
        .filter(|line| line.contains(query))
        .collect()
}

pub fn search_case_insensitive<'a>(query: &str, contents: &'a str) -> Vec<&'a str> {
    let mut res = vec![];
    // 注意 query 现在是一个 String 而不是字符串 slice，因为调用 to_lowercase 是在创建新数据
    let query = query.to_lowercase();

    for line in contents.lines() {
        if line.to_lowercase().contains(&query) {
            res.push(line);
        }
    }

    res
}

pub fn search_case_insensitive_with_filter<'a>(query: &str, contents: &'a str) -> Vec<&'a str> {
    // 注意 query 现在是一个 String 而不是字符串 slice，因为调用 to_lowercase 是在创建新数据
    let query = query.to_lowercase();

    contents.lines()
        .filter(|line| line.contains(query))
        .collect()
}



// #### Test ####
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn one_result() {
        let query = "duct";
        let contents = "\
Rust:
safe, fast, productive.
Pick three.";

        assert_eq!(
            vec!["safe, fast, productive."],
            search(query, contents)
        );
    }

    #[test]
    fn case_sensitive() {
        let query = "duct";
        let contents = "\
Rust:
safe, fast, productive.
Pick three.
Duct tape.";

        assert_eq!(
            vec!["safe, fast, productive."],
            search(query, contents)
        );
    }

    #[test]
    fn case_insensitive() {
        let query = "rUsT";
        let contents = "\
Rust:
safe, fast, productive.
Pick three.
Trust me.";

        assert_eq!(
            vec!["Rust:", "Trust me."],
            search_case_insensitive(query, contents)
        );
    }

}
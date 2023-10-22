use std::fs;

pub(crate) fn read_file(filename: &String) -> String {

    println!("In file {}", filename);

    let contents = fs::read_to_string(filename)
        .expect("Something went wrong reading the file");

    println!("With text:\n{}", contents);

    contents

}
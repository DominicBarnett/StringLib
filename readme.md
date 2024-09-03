String Utility Functions
This module provides a set of utility functions for manipulating and formatting strings in various ways. Below is a summary of each function:

Functions
capitalize(string)
Description: Capitalizes the first letter of the given string and returns the modified string.
Example:


capitalize("hello world") // "Hello world"
allCaps(string)
Description: Converts all characters in the string to uppercase.
Example:


allCaps("hello world") // "HELLO WORLD"
capitalizeWords(string)
Description: Capitalizes the first letter of each word in the string.
Example:


capitalizeWords("hello world") // "Hello World"
removeWhitespace(string)
Description: Removes excess whitespace from both ends of the string and ensures there is only a single space between words.
Example:


removeWhitespace("   hello   world   ") // "hello world"
kebabCase(string)
Description: Converts the string to kebab-case (all lowercase words joined by hyphens).
Example:


kebabCase("Hello World") // "hello-world"
snakeCase(string)
Description: Converts the string to snake_case (all lowercase words joined by underscores).
Example:


snakeCase("Hello World") // "hello_world"
camelCase(string)
Description: Converts the string to camelCase (no spaces, first word is lowercase, and subsequent words are capitalized).
Example:


camelCase("hello world") // "helloWorld"
shift(string)
Description: Moves the first character of the string to the end.
Example:


shift("hello") // "elloh"
makeHashTag(string)
Description: Generates hashtags from the three longest words in the string. Each hashtag is in lowercase.
Example:


makeHashTag("hello amazing world") // ["#amazing", "#hello", "#world"]
isEmpty(string)
Description: Checks if a string is empty or consists only of whitespace.
Example:


isEmpty("   ") // true
Usage
To use these functions in your project, import them as follows:


Copy code
const stringUtils = require('./path_to_this_module');

console.log(stringUtils.capitalize("hello")); // Output: "Hello"
License
This module is open-source and available under the MIT License.
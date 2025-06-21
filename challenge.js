class SearchSuggestionSystem {
    constructor(products) {
        // Sort the products lexicographically
        this.products = products.sort();
    }

    getSuggestions(searchWord) {
        let result = [];
        let prefix = "";

        for (let char of searchWord) {
            prefix += char;
            // Filter products that start with the current prefix
            let suggestions = this.products.filter(product => product.startsWith(prefix));
            // Take only the first 3 suggestions
            result.push(suggestions.slice(0, 3));
        }

        return result;
    }
}

// Example usage:
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";

const suggestionSystem = new SearchSuggestionSystem(products);
const output = suggestionSystem.getSuggestions(searchWord);
console.log(output);

/*
Expected Output:
[
  ["mobile", "moneypot", "monitor"],
  ["mobile", "moneypot", "monitor"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"]
]
*/
